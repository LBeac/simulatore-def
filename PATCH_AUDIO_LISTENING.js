/**
 * PATCH_AUDIO_LISTENING.js
 * Patch per gestione audio e listening comprehension INVALSI
 * Migliora la compatibilità e risolve problemi audio comuni
 */

(function() {
  'use strict';

  console.log('Loading PATCH_AUDIO_LISTENING.js...');

  // Attendi che il DOM sia pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudioPatch);
  } else {
    initAudioPatch();
  }

  function initAudioPatch() {
    console.log('Audio patch initialized');

    // Patch 1: Assicura che tutti gli audio abbiano i corretti attributi
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio, index) => {
      if (!audio.crossOrigin) audio.crossOrigin = 'anonymous';
      if (!audio.preload) audio.preload = 'metadata';
      audio.addEventListener('error', function(e) {
        console.warn('Audio error on element ' + index + ':', e);
      });
    });

    // Patch 2: Migliora il controllo del volume
    if (typeof window.AudioContext === 'undefined' && typeof window.webkitAudioContext !== 'undefined') {
      window.AudioContext = window.webkitAudioContext;
    }

    // Patch 3: Aggiunge supporto per il loading automatico dei media
    document.addEventListener('play', function(e) {
      if (e.target && e.target.tagName === 'AUDIO') {
        const audio = e.target;
        if (audio.readyState < 2) {
          audio.load();
        }
      }
    }, true);

    // Patch 4: Syncronizza il tempo di riproduzione per più audio
    let masterAudio = null;
    audioElements.forEach((audio, index) => {
      audio.addEventListener('play', function() {
        if (!masterAudio) masterAudio = this;
      });
      audio.addEventListener('timeupdate', function() {
        if (masterAudio && this === masterAudio) {
          audioElements.forEach(other => {
            if (other !== this && Math.abs(other.currentTime - this.currentTime) > 0.5) {
              other.currentTime = this.currentTime;
            }
          });
        }
      });
    });

    // Patch 5: Aggiunge fallback per browser che non supportano certi codec
    const testAudio = document.createElement('audio');
    const canPlayMp3 = testAudio.canPlayType('audio/mpeg') !== '';
    const canPlayMp4 = testAudio.canPlayType('audio/mp4') !== '';
    const canPlayOgg = testAudio.canPlayType('audio/ogg') !== '';
    const canPlayWebm = testAudio.canPlayType('audio/webm') !== '';

    console.log('Audio support: MP3=' + (canPlayMp3 ? 'yes' : 'no') + 
                ', MP4=' + (canPlayMp4 ? 'yes' : 'no') + 
                ', OGG=' + (canPlayOgg ? 'yes' : 'no') + 
                ', WEBM=' + (canPlayWebm ? 'yes' : 'no'));

    // Patch 6: Gestisce il buffering automatico
    audioElements.forEach(audio => {
      audio.addEventListener('progress', function() {
        if (this.buffered.length > 0) {
          const bufferedEnd = this.buffered.end(this.buffered.length - 1);
          const duration = this.duration;
          if (duration && bufferedEnd / duration > 0.9) {
            console.log('Audio ' + this.src + ' buffered at 90%');
          }
        }
      });
    });

    // Patch 7: Resetta lo stato audio se c'è un errore
    audioElements.forEach(audio => {
      audio.addEventListener('error', function(event) {
        console.error('Audio loading error:', this.error ? this.error.code : 'unknown');
        // Tenta di ricaricare
        if (this.error && this.error.code === this.error.MEDIA_ERR_NETWORK) {
          setTimeout(() => this.load(), 2000);
        }
      });
    });

    // Patch 8: Aggiunge supporto per keyboard controls
    document.addEventListener('keydown', function(e) {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        if (e.code === 'Space') {
          const activeAudio = document.querySelector('audio:focus') || audioElements[0];
          if (activeAudio) {
            e.preventDefault();
            if (activeAudio.paused) {
              activeAudio.play().catch(err => console.warn('Play failed:', err));
            } else {
              activeAudio.pause();
            }
          }
        }
      }
    });

    // Patch 9: Sincronizza volume tra gli elementi
    audioElements.forEach(audio => {
      audio.addEventListener('volumechange', function() {
        const vol = this.volume;
        audioElements.forEach(other => {
          if (other !== this) other.volume = vol;
        });
      });
    });

    // Patch 10: Aggiunge gestione dei rates di riproduzione
    audioElements.forEach(audio => {
      if (!audio.playbackRate) audio.playbackRate = 1;
      audio.addEventListener('ratechange', function() {
        audioElements.forEach(other => {
          if (other !== this) other.playbackRate = this.playbackRate;
        });
      });
    });

    // Patch 11: Gestione dello stato di fullscreen
    document.addEventListener('fullscreenchange', function() {
      audioElements.forEach(audio => {
        if (audio.playing) {
          audio.play().catch(err => console.warn('Play in fullscreen failed:', err));
        }
      });
    });

    // Patch 12: Aggiunge timeout protection
    audioElements.forEach(audio => {
      let timeoutHandle = null;
      audio.addEventListener('play', function() {
        if (timeoutHandle) clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(() => {
          if (!this.paused && !isNaN(this.duration)) {
            console.warn('Audio playback timeout, retrying...');
            this.currentTime = Math.max(0, this.currentTime - 1);
            this.play().catch(err => console.warn('Retry failed:', err));
          }
        }, 30000);
      });
      audio.addEventListener('pause', function() {
        if (timeoutHandle) clearTimeout(timeoutHandle);
      });
      audio.addEventListener('ended', function() {
        if (timeoutHandle) clearTimeout(timeoutHandle);
      });
    });

    // Patch 13: Abilita il context menu su audio (per salvare)
    audioElements.forEach(audio => {
      audio.addEventListener('contextmenu', function(e) {
        if (e.target === this) {
          // Consenti il context menu per gli audio
          e.stopPropagation();
        }
      }, true);
    });

    // Patch 14: Gestione del muting durante tab change
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        audioElements.forEach(audio => {
          if (!audio.paused) audio.pause();
        });
      }
    });

    console.log('Audio patch applied to ' + audioElements.length + ' audio element(s)');
  }

  // Aggiunge utility globali per audio
  window.audioUtils = {
    // Riproduci un audio per indice
    playAudioByIndex: function(index) {
      const audios = document.querySelectorAll('audio');
      if (audios[index]) {
        audios[index].play().catch(err => console.warn('Play failed:', err));
      }
    },
    
    // Pausa tutti gli audio
    pauseAll: function() {
      document.querySelectorAll('audio').forEach(audio => audio.pause());
    },
    
    // Arresta e resetta tutti gli audio
    stopAll: function() {
      document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    },
    
    // Imposta il volume globale
    setVolume: function(value) {
      document.querySelectorAll('audio').forEach(audio => {
        audio.volume = Math.max(0, Math.min(1, value));
      });
    },
    
    // Ottieni lo stato di un audio
    getAudioState: function(index) {
      const audios = document.querySelectorAll('audio');
      if (audios[index]) {
        return {
          playing: !audios[index].paused,
          currentTime: audios[index].currentTime,
          duration: audios[index].duration,
          volume: audios[index].volume,
          readyState: audios[index].readyState
        };
      }
      return null;
    }
  };

})();
