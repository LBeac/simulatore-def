/**
 * PATCH_AUDIO_LISTENING.js — v2 (riscritto)
 * ════════════════════════════════════════════════════════════════════════════
 * Modulo TTS ROBUSTO per la modalità Listening delle prove di inglese.
 *
 * Espone un'unica API pubblica:
 *   window.ListeningTTS.speak(text, options, onComplete, onError)
 *   window.ListeningTTS.stop()
 *   window.ListeningTTS.isSupported()
 *
 * Risolve i bug Chrome/Safari noti:
 *   1. Voice loading race  → attende che getVoices() popoli (polling fino a 3s)
 *   2. Taglio a ~15s      → keep-alive con pause/resume ogni 10s
 *   3. cancel+speak race  → ritardo di 120ms dopo cancel()
 *   4. Nessun feedback    → onerror + timeout di avvio (3s)
 *   5. Testi lunghi       → sentence splitting, parla frase per frase
 *
 * NOTA: questa patch ha SOSTITUITO la versione precedente che operava su
 * elementi <audio> HTML (non usati dal simulatore, che fa solo TTS sintetico).
 * ════════════════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  console.log('[ListeningTTS] v2 — initializing…');

  var synth = window.speechSynthesis;
  if (!synth) {
    console.warn('[ListeningTTS] speechSynthesis non supportato da questo browser');
    window.ListeningTTS = {
      speak: function (t, o, ok, err) { if (err) err(new Error('TTS non supportato')); return null; },
      stop: function () {},
      isSupported: function () { return false; }
    };
    return;
  }

  // ── Cache voci inglesi ────────────────────────────────────────────────────
  var _voices = [];
  var _engVoice = null;
  var _voicesLoaded = false;

  function _pickEnglishVoice(voices) {
    if (!voices || !voices.length) return null;
    // Priorità decrescente: voci neurali/cloud → GB → US → qualsiasi english
    var rules = [
      function (v) { return /en-GB/i.test(v.lang) && /natural|neural|premium|online|enhanced/i.test(v.name); },
      function (v) { return /en-US/i.test(v.lang) && /natural|neural|premium|online|enhanced/i.test(v.name); },
      function (v) { return v.name.indexOf('Libby') !== -1; },      // Edge Neural UK (ottima)
      function (v) { return v.name.indexOf('Sonia') !== -1; },      // Edge Neural UK
      function (v) { return v.name.indexOf('Ryan') !== -1; },       // Edge Neural UK maschile
      function (v) { return v.name.indexOf('Aria') !== -1; },       // Edge Neural US
      function (v) { return v.name.indexOf('Daniel') !== -1; },     // Safari/Mac UK
      function (v) { return v.name.indexOf('Samantha') !== -1; },   // Safari/Mac US
      function (v) { return v.name.indexOf('Google UK') !== -1; },  // Chrome UK
      function (v) { return v.name.indexOf('Google US') !== -1; },  // Chrome US
      function (v) { return v.lang === 'en-GB' && !/espeak/i.test(v.name); },
      function (v) { return v.lang === 'en-US' && !/espeak/i.test(v.name); },
      function (v) { return /^en[-_]/i.test(v.lang) && !/espeak/i.test(v.name); },
      function (v) { return /^en/i.test(v.lang); }
    ];
    for (var i = 0; i < rules.length; i++) {
      var found = voices.find(rules[i]);
      if (found) return found;
    }
    return null;
  }

  function _loadVoices() {
    var v = synth.getVoices();
    if (v && v.length) {
      _voices = v;
      _engVoice = _pickEnglishVoice(v);
      _voicesLoaded = true;
      console.log('[ListeningTTS] ' + v.length + ' voci caricate, scelta per EN: ' +
        (_engVoice ? _engVoice.name + ' (' + _engVoice.lang + ')' : 'default browser'));
    }
  }

  _loadVoices();
  if (typeof synth.addEventListener === 'function') {
    synth.addEventListener('voiceschanged', _loadVoices);
  } else if ('onvoiceschanged' in synth) {
    synth.onvoiceschanged = _loadVoices;
  }

  function _waitVoices(callback, timeoutMs) {
    timeoutMs = timeoutMs || 3000;
    if (_voicesLoaded) { callback(); return; }
    var waited = 0;
    var step = 150;
    var iv = setInterval(function () {
      _loadVoices();
      waited += step;
      if (_voicesLoaded || waited >= timeoutMs) {
        clearInterval(iv);
        callback();
      }
    }, step);
  }

  // ── Sentence splitting ────────────────────────────────────────────────────
  // Dividere in frasi permette di aggirare il taglio Chrome e di avere
  // cadenza più naturale (pausa microfonale tra frasi).
  function _splitSentences(text) {
    if (!text) return [];
    // Normalizza spazi e newline
    var t = String(text).replace(/\s+/g, ' ').trim();
    // Split su .!?: (mantiene il terminatore grazie al lookbehind)
    var parts;
    try {
      parts = t.split(/(?<=[.!?])\s+(?=["'A-Z0-9])/);
    } catch (e) {
      // Fallback per browser vecchi senza lookbehind
      parts = t.split(/([.!?]+)\s+/).reduce(function (acc, cur, i, arr) {
        if (i % 2 === 0) acc.push(cur + (arr[i + 1] || ''));
        return acc;
      }, []);
    }
    return parts.map(function (s) { return s.trim(); })
                .filter(function (s) { return s.length > 1; });
  }

  // ── Keep-alive (anti-taglio Chrome) ───────────────────────────────────────
  var _keepAliveTimer = null;
  function _startKeepAlive() {
    _stopKeepAlive();
    _keepAliveTimer = setInterval(function () {
      if (synth.speaking && !synth.paused) {
        // Il doppio pause+resume è il trucco ufficiale per resettare il
        // contatore interno Chrome che causa il cutoff dopo ~15 secondi.
        synth.pause();
        synth.resume();
      }
    }, 10000);
  }
  function _stopKeepAlive() {
    if (_keepAliveTimer) { clearInterval(_keepAliveTimer); _keepAliveTimer = null; }
  }

  // ── Stato corrente (per cancel esterno) ───────────────────────────────────
  var _active = null;

  function _speakChunks(chunks, options, onComplete, onError) {
    var idx = 0;
    var cancelled = false;
    var startTimeout = null;
    var firstStarted = false;

    function _cleanup() {
      _stopKeepAlive();
      if (startTimeout) { clearTimeout(startTimeout); startTimeout = null; }
    }

    function _next() {
      if (cancelled) return;
      if (idx >= chunks.length) {
        _cleanup();
        if (onComplete) onComplete();
        return;
      }
      var chunk = chunks[idx++];
      var utt = new SpeechSynthesisUtterance(chunk);
      utt.lang   = options.lang   || 'en-GB';
      utt.rate   = options.rate   || 0.9;
      utt.pitch  = options.pitch  || 1;
      utt.volume = (options.volume != null) ? options.volume : 1;
      if (_engVoice) utt.voice = _engVoice;

      utt.onstart = function () {
        if (!firstStarted) {
          firstStarted = true;
          if (startTimeout) { clearTimeout(startTimeout); startTimeout = null; }
          _startKeepAlive();
        }
      };

      utt.onend = function () {
        if (cancelled) return;
        // Piccola pausa naturale tra frasi (intonazione meno monotona)
        setTimeout(_next, 90);
      };

      utt.onerror = function (ev) {
        // 'canceled' e 'interrupted' non sono errori reali (li generiamo noi)
        if (ev && (ev.error === 'canceled' || ev.error === 'interrupted')) return;
        console.error('[ListeningTTS] utterance error:', ev && ev.error);
        _cleanup();
        if (!cancelled && onError) onError(ev);
      };

      synth.speak(utt);
    }

    // Timeout di avvio: se dopo 3s non è partito nulla, fallback a errore
    startTimeout = setTimeout(function () {
      if (!firstStarted && !cancelled) {
        console.error('[ListeningTTS] timeout: nessun audio dopo 3s');
        cancelled = true;
        synth.cancel();
        _cleanup();
        if (onError) onError(new Error('TTS timeout — nessun audio partito'));
      }
    }, 3000);

    _next();

    return {
      cancel: function () {
        cancelled = true;
        _cleanup();
        synth.cancel();
      }
    };
  }

  // ── API pubblica ──────────────────────────────────────────────────────────
  window.ListeningTTS = {
    /**
     * Parla un testo in inglese in modo robusto.
     * @param {string}   text        Testo da leggere (può essere lungo)
     * @param {object}   options     {lang, rate, pitch, volume}
     * @param {function} onComplete  Callback fine lettura regolare
     * @param {function} onError     Callback errore o timeout
     * @returns {{cancel: function}} Handle per annullare
     */
    speak: function (text, options, onComplete, onError) {
      options = options || {};

      // Cancella eventuale lettura precedente
      if (_active) { try { _active.cancel(); } catch (_) {} _active = null; }
      synth.cancel();

      if (!text || !String(text).trim()) {
        if (onError) onError(new Error('Testo vuoto'));
        return null;
      }

      var chunks = _splitSentences(text);
      if (!chunks.length) chunks = [String(text).trim()];

      // Il ritardo di 120ms risolve il race cancel()/speak() su Chrome
      var handle = { cancel: function () { this._c = true; } };
      setTimeout(function () {
        if (handle._c) return;
        _waitVoices(function () {
          if (handle._c) return;
          _active = _speakChunks(chunks, options, function () {
            _active = null;
            if (onComplete) onComplete();
          }, function (err) {
            _active = null;
            if (onError) onError(err);
          });
          handle.cancel = function () { if (_active) _active.cancel(); _active = null; };
        });
      }, 120);

      return handle;
    },

    stop: function () {
      if (_active) { try { _active.cancel(); } catch (_) {} _active = null; }
      synth.cancel();
      _stopKeepAlive();
    },

    isSupported: function () { return true; },

    // Utility esposta per debug dalla console
    _debug: {
      getVoices: function () { return _voices; },
      getEnglishVoice: function () { return _engVoice; },
      reloadVoices: _loadVoices
    }
  };

  // ── Safety net: ferma TTS se l'utente chiude/ricarica la pagina ──────────
  window.addEventListener('beforeunload', function () {
    try { window.ListeningTTS.stop(); } catch (_) {}
  });

  console.log('[ListeningTTS] v2 ready. Supported: true');
})();
