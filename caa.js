/**
 * ════════════════════════════════════════════════════════════════
 *  CAA.JS  –  Modulo Prova CAA per Simulatore INVALSI
 *  Repo: lbeac/simulatore-def
 *
 *  INTEGRAZIONE IN INDEX.HTML → UNA SOLA RIGA:
 *    <script src="caa.js"></script>
 *  da aggiungere ALLA FINE del <body>, dopo tutti gli altri <script>
 *
 *  Il file si auto-inietta: CSS, HTML, card nel pannello docente.
 *  Fa monkey-patch di mostraVista() e checkSessioneStudente()
 *  senza toccare il resto del codice esistente.
 * ════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  // ──────────────────────────────────────────────────────────────
  //  1. INIETTA CSS
  // ──────────────────────────────────────────────────────────────
  const CSS = `
/* ─── Card CAA nella griglia prove ─────────────────────── */
.caa-card-grid {
  background: linear-gradient(135deg, #fffde7 0%, #fff8e1 60%, #ffecb3 100%);
  border: 2px solid #ffd54f; border-radius: 14px;
  padding: 22px 18px; cursor: pointer;
  transition: transform .15s, box-shadow .15s; text-align: center;
}
.caa-card-grid:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(255,193,7,.28); }
.caa-card-grid .ci  { font-size: 2.6rem; }
.caa-card-grid .ct  { font-weight: 700; font-size: 1rem; color: #e65100; margin: 6px 0 3px; }
.caa-card-grid .cd  { font-size: .78rem; color: #bf360c; }

/* ─── Form docente CAA ──────────────────────────────────── */
.caa-form-section {
  background: #fff; border-radius: 14px;
  border: 2px solid #ffe0b2; padding: 22px; margin-bottom: 18px;
}
.caa-form-section h3 { margin: 0 0 16px; color: #e65100; font-size: 1.05rem; }
.caa-field { margin-bottom: 14px; }
.caa-field label { display: block; font-size: .82rem; font-weight: 600; color: #555; margin-bottom: 4px; }
.caa-field input, .caa-field select, .caa-field textarea {
  width: 100%; box-sizing: border-box; padding: 9px 12px;
  border: 1.5px solid #ffe082; border-radius: 8px; font-size: .95rem;
  background: #fffdf7; transition: border-color .15s;
}
.caa-field input:focus, .caa-field select:focus, .caa-field textarea:focus {
  outline: none; border-color: #fb8c00;
}
.caa-field textarea { resize: vertical; min-height: 140px; font-family: inherit; }
.caa-counter { text-align: right; font-size: .78rem; color: #999; margin-top: 3px; }
.caa-counter.warn { color: #e53935; font-weight: 600; }

/* ─── Domande docente ───────────────────────────────────── */
.caa-domanda-item {
  background: #fff8e1; border: 1.5px solid #ffe082;
  border-radius: 10px; padding: 16px; margin-bottom: 12px; position: relative;
}
.caa-domanda-item .caa-dom-num { font-weight: 700; color: #e65100; margin: 0 0 10px; }
.caa-domanda-item .caa-rm {
  position: absolute; top: 10px; right: 12px;
  background: none; border: none; cursor: pointer; font-size: 1.1rem; color: #e53935; padding: 0;
}
.caa-opz-row { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; }
.caa-opz-row .opz-letter { font-weight: 700; min-width: 20px; font-size: 1rem; }
.caa-opz-row .opz-letter.A { color: #2e7d32; }
.caa-opz-row .opz-letter.B { color: #c62828; }
.caa-opz-row .opz-letter.C { color: #1565c0; }
.caa-opz-row .opz-letter.D { color: #6a1b9a; }
.caa-opz-row input[type="text"] {
  flex: 1; padding: 6px 10px; border-radius: 6px;
  border: 1.5px solid #e0e0e0; font-size: .9rem;
}

/* ─── Bottoni ───────────────────────────────────────────── */
.caa-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 20px; border-radius: 9px; font-size: .92rem;
  font-weight: 600; cursor: pointer; border: none; transition: .15s;
}
.caa-btn-primary   { background: #fb8c00; color: #fff; }
.caa-btn-primary:hover { background: #e65100; }
.caa-btn-secondary { background: #fff3e0; color: #e65100; border: 1.5px solid #ffcc80; }
.caa-btn-secondary:hover { background: #ffe0b2; }
.caa-btn-add       { background: #e8f5e9; color: #2e7d32; border: 1.5px solid #a5d6a7; }
.caa-btn-add:hover { background: #c8e6c9; }
.caa-btn-back      { background: #f5f5f5; color: #555; border: 1.5px solid #ddd; }
.caa-btn-back:hover { background: #eeeeee; }

/* ─── Progress ──────────────────────────────────────────── */
.caa-progress-wrap { margin: 8px 0 12px; }
.caa-progress { height: 7px; background: #ffe0b2; border-radius: 99px; overflow: hidden; }
.caa-progress-bar { height: 100%; background: linear-gradient(90deg,#fb8c00,#ff7043); border-radius: 99px; transition: width .25s; }
.caa-progress-label { font-size: .78rem; color: #f57f17; margin-top: 4px; }

/* ─── Preview ───────────────────────────────────────────── */
.caa-preview-box {
  background: #fffdf5; border: 2px solid #ffe082;
  border-radius: 14px; padding: 20px; margin: 18px 0;
}
.caa-preview-box h4 { margin: 0 0 14px; color: #f57f17; font-size: .95rem; }
.caa-preview-sep { border: none; border-top: 1.5px dashed #ffe082; margin: 18px 0; }
.caa-link-out {
  display: none; background: #e8f5e9;
  border: 2px solid #a5d6a7; border-radius: 10px; padding: 14px 18px; margin-top: 14px;
}
.caa-link-out p { margin: 0 0 8px; font-size: .85rem; color: #2e7d32; font-weight: 600; }
.caa-link-out input { width: 100%; box-sizing: border-box; padding: 8px; border-radius: 6px; border: 1px solid #a5d6a7; font-size: .88rem; }

/* ════════════════════════════════════════════════════════
   RENDERING SIMBOLI CAA
   ════════════════════════════════════════════════════════ */
.caa-flow {
  display: flex; flex-wrap: wrap;
  align-items: flex-end; gap: 6px 10px; padding: 10px 0;
}
.caa-box {
  display: inline-flex; flex-direction: column; align-items: center; gap: 3px;
  border: 2px solid #e0e0e0; border-radius: 9px; padding: 5px 8px;
  background: #fff; min-width: 58px; max-width: 92px;
  box-shadow: 0 1px 4px rgba(0,0,0,.07);
}
.caa-box img.caa-sym { width: 68px; height: 68px; object-fit: contain; display: block; }
.caa-box .caa-lbl {
  font-size: 11px; font-weight: 600;
  text-align: center; color: #333;
  word-break: break-word; line-height: 1.2;
}
.caa-stopword { font-size: 14px; color: #777; align-self: flex-end; padding-bottom: 3px; }
.caa-newline  { width: 100%; flex-basis: 100%; height: 0; }

/* ─── Vista studente CAA ────────────────────────────────── */
.caa-student-wrap { max-width: 1100px; margin: 0 auto; padding: 16px; }
.caa-student-header {
  background: linear-gradient(135deg, #fff8e1, #fff3e0);
  border-radius: 14px; border: 2px solid #ffe082;
  padding: 14px 20px; display: flex; align-items: center; gap: 14px; margin-bottom: 16px;
}
.caa-student-header .caa-titolo { font-size: 1.15rem; font-weight: 700; color: #e65100; flex: 1; }
.caa-student-header .caa-alunno { font-size: .88rem; color: #888; }
.caa-student-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 700px) { .caa-student-cols { grid-template-columns: 1fr; } }
.caa-col {
  background: #fff; border-radius: 14px; border: 2px solid #ffe0b2;
  padding: 18px; overflow-y: auto; max-height: calc(100vh - 220px);
}
.caa-col-title {
  font-size: .88rem; font-weight: 700; color: #f57f17;
  text-transform: uppercase; letter-spacing: .06em;
  margin: 0 0 14px; padding-bottom: 8px; border-bottom: 2px solid #ffe0b2;
}
.caa-q-block { margin-bottom: 26px; }
.caa-q-num   { font-size: .8rem; color: #f57f17; font-weight: 700; margin-bottom: 6px; }
.caa-q-testo { font-weight: 600; color: #333; margin-bottom: 10px; font-size: .95rem; }
.caa-opzioni-list { display: flex; flex-direction: column; gap: 7px; }
.caa-opzione {
  display: flex; align-items: center; gap: 9px;
  border: 2px solid #e0e0e0; border-radius: 10px;
  padding: 8px 12px; cursor: pointer;
  background: #fff; transition: border-color .13s, background .13s;
}
.caa-opzione:hover { border-color: #ffb74d; background: #fff8e7; }
.caa-opzione.sel   { border-color: #fb8c00; background: #fff3e0; }
.caa-opzione .opz-lt { font-weight: 800; font-size: 1rem; min-width: 20px; }
.caa-opzione .opz-lt.A { color: #2e7d32; }
.caa-opzione .opz-lt.B { color: #c62828; }
.caa-opzione .opz-lt.C { color: #1565c0; }
.caa-opzione .opz-lt.D { color: #6a1b9a; }
.caa-opzione .opz-body { flex: 1; }
.caa-submit-bar { margin-top: 20px; text-align: center; }
.caa-submit-btn {
  background: #fb8c00; color: #fff; border: none;
  border-radius: 10px; padding: 13px 36px;
  font-size: 1rem; font-weight: 700; cursor: pointer; transition: background .15s;
}
.caa-submit-btn:hover { background: #e65100; }
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);


  // ──────────────────────────────────────────────────────────────
  //  2. INIETTA HTML – VISTA DOCENTE
  // ──────────────────────────────────────────────────────────────
  const HTML_DOCENTE = `
<div id="vista-caa" style="display:none">
  <button class="caa-btn caa-btn-back" onclick="caaBack()" style="margin-bottom:20px">
    ← Torna al pannello
  </button>

  <h2 style="color:#e65100;margin-bottom:6px;">🗣️ Crea Prova CAA</h2>
  <p style="color:#888;margin-top:0;font-size:.88rem;">
    Simboli ARASAAC (open source, gratuiti). Max 30 righe di testo.
    Articoli e preposizioni compaiono come testo semplice.
  </p>

  <div class="caa-form-section">
    <h3>👤 Alunno e prova</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
      <div class="caa-field">
        <label>Nome alunno *</label>
        <input id="caa-alunno" type="text" placeholder="Es. Marco R.">
      </div>
      <div class="caa-field">
        <label>Classe</label>
        <select id="caa-classe">
          <option>3A</option><option>3E</option>
        </select>
      </div>
      <div class="caa-field">
        <label>Titolo prova</label>
        <input id="caa-titolo" type="text" placeholder="Es. Il bosco in autunno">
      </div>
    </div>
  </div>

  <div class="caa-form-section">
    <h3>📖 Testo (già semplificato, max 30 righe)</h3>
    <div class="caa-field">
      <textarea id="caa-testo"
        placeholder="Incolla il brano semplificato. Usa frasi brevi e parole semplici."
        oninput="caaContaRighe()"></textarea>
      <div class="caa-counter" id="caa-righe-count">0 / 30 righe</div>
    </div>
  </div>

  <div class="caa-form-section">
    <h3>❓ Domande (scelta multipla)</h3>
    <div id="caa-domande-list"></div>
    <button class="caa-btn caa-btn-add" onclick="caaAggiungiDomanda()">+ Aggiungi domanda</button>
  </div>

  <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px;">
    <button class="caa-btn caa-btn-secondary" onclick="caaPreview()">👁 Anteprima con simboli</button>
    <button class="caa-btn caa-btn-primary"   onclick="caaGeneraLink()">🔗 Genera link prova</button>
  </div>

  <div id="caa-progress-wrap" style="display:none" class="caa-progress-wrap">
    <div class="caa-progress">
      <div class="caa-progress-bar" id="caa-prog-bar" style="width:0%"></div>
    </div>
    <div class="caa-progress-label" id="caa-prog-label">Carico simboli ARASAAC…</div>
  </div>

  <div id="caa-preview-box" class="caa-preview-box" style="display:none"></div>

  <div id="caa-link-out" class="caa-link-out">
    <p>✅ Link copiato! Condividilo con l'alunno:</p>
    <input type="text" id="caa-link-text" readonly onclick="this.select()">
  </div>
</div>`;

  // ──────────────────────────────────────────────────────────────
  //  3. INIETTA HTML – VISTA STUDENTE
  // ──────────────────────────────────────────────────────────────
  const HTML_STUDENTE = `
<div id="vista-studente-caa" style="display:none">
  <div class="caa-student-wrap">
    <div class="caa-student-header">
      <span style="font-size:2rem;">🗣️</span>
      <div>
        <div class="caa-titolo" id="caa-s-titolo">Prova CAA</div>
        <div class="caa-alunno" id="caa-s-alunno"></div>
      </div>
    </div>
    <div class="caa-student-cols">
      <div class="caa-col">
        <div class="caa-col-title">📖 Leggi</div>
        <div id="caa-s-testo-render"></div>
      </div>
      <div class="caa-col">
        <div class="caa-col-title">❓ Rispondi</div>
        <div id="caa-s-domande-render"></div>
        <div class="caa-submit-bar">
          <button class="caa-submit-btn" onclick="caaConsegna()">✅ Consegna</button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  document.body.insertAdjacentHTML('beforeend', HTML_DOCENTE);
  document.body.insertAdjacentHTML('beforeend', HTML_STUDENTE);


  // ──────────────────────────────────────────────────────────────
  //  4. INIETTA CARD nel pannello docente
  //  Cerca la griglia delle prove adattate e aggiunge la card CAA.
  //  Adatta il selettore se nel tuo index.html la griglia ha un id diverso.
  // ──────────────────────────────────────────────────────────────
  function injectCard() {
    // Prova i selettori più probabili — adatta se necessario
    const targets = [
      '#prove-adattate-grid',
      '#griglia-prove',
      '.prove-grid',
      '.adattate-grid'
    ];
    let grid = null;
    for (const sel of targets) {
      grid = document.querySelector(sel);
      if (grid) break;
    }

    // Fallback: cerca il contenitore che ha già le altre card simili
    if (!grid) {
      const allCards = document.querySelectorAll('[onclick*="mostraVista"]');
      if (allCards.length) grid = allCards[allCards.length - 1].parentElement;
    }

    if (!grid) {
      // Ultimo fallback: crea un container e lo mette nel pannello docente
      const pannello = document.getElementById('vista-docente') || document.body;
      grid = document.createElement('div');
      grid.style.marginTop = '16px';
      pannello.appendChild(grid);
    }

    const card = document.createElement('div');
    card.className = 'caa-card-grid';
    card.onclick = () => caaApriVista();
    card.innerHTML = `
      <div class="ci">🗣️</div>
      <div class="ct">Prova CAA</div>
      <div class="cd">Simboli ARASAAC per comunicazione aumentativa</div>`;
    grid.appendChild(card);
  }

  // Aspetta che il DOM sia pronto prima di iniettare la card
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCard);
  } else {
    injectCard();
  }


  // ──────────────────────────────────────────────────────────────
  //  5. MONKEY-PATCH DI mostraVista()
  //  Si aggancia alla funzione esistente senza toccarla.
  // ──────────────────────────────────────────────────────────────
  window.addEventListener('load', () => {
    const _origMostraVista = window.mostraVista;

    if (typeof _origMostraVista === 'function') {
      window.mostraVista = function (vista) {
        if (vista === 'caa' || vista === 'studente-caa') {
          // Nasconde tutte le viste come fa l'originale
          document.querySelectorAll('[id^="vista-"]').forEach(el => {
            el.style.display = 'none';
          });
          const target = document.getElementById(`vista-${vista}`);
          if (target) target.style.display = 'block';
          return;
        }
        _origMostraVista(vista);
      };
    } else {
      // mostraVista non trovata: la definiamo noi come fallback minimo
      window.mostraVista = function (vista) {
        document.querySelectorAll('[id^="vista-"]').forEach(el => el.style.display = 'none');
        const el = document.getElementById(`vista-${vista}`);
        if (el) el.style.display = 'block';
      };
    }

    // Monkey-patch di checkSessioneStudente()
    const _origCheck = window.checkSessioneStudente;
    if (typeof _origCheck === 'function') {
      window.checkSessioneStudente = function () {
        const params  = new URLSearchParams(location.search);
        const codice  = params.get('sessione');
        if (!codice) return _origCheck();

        const sessioni = JSON.parse(localStorage.getItem('sessioni') || '[]');
        const sess = sessioni.find(s => s.codice === codice);
        if (sess && sess.tipo === 'caa') {
          avviaProvaCAA(sess);
          return;
        }
        _origCheck();
      };
    }
  });


  // ──────────────────────────────────────────────────────────────
  //  6. COSTANTI ARASAAC
  // ──────────────────────────────────────────────────────────────
  const ARASAAC_SEARCH = w =>
    `https://api.arasaac.org/api/pictograms/it/search/${encodeURIComponent(w)}`;
  const ARASAAC_IMG = id =>
    `https://static.arasaac.org/pictograms/${id}/${id}_500.png`;

  const CAA_STOP = new Set([
    'il','lo','la','i','gli','le','un','uno','una',
    'di','del','dello','della','dei','degli','delle',
    'a','al','allo','alla','ai','agli','alle','ad',
    'da','dal','dallo','dalla','dai','dagli','dalle',
    'in','nel','nello','nella','nei','negli','nelle',
    'su','sul','sullo','sulla','sui','sugli','sulle',
    'con','per','tra','fra',
    'e','o','ma','se','che','non','né','ed','od',
    'è','sono','era','erano','ha','hanno','aveva','avevano',
    'fu','furono','sia','siano','fosse','fossero',
    'si','ci','vi','mi','ti','ne',
    'suo','sua','suoi','sue','mio','mia','miei','mie',
    'tuo','tua','tuoi','tue','nostro','nostra','nostri','nostre',
    'vostro','vostra','vostri','vostre','loro',
    'questo','questa','questi','queste',
    'quello','quella','quelli','quelle',
    'come','quando','dove','perché','però','anche','già','più',
    'poi','ora','qui','qua','là','lì','allora','dunque','quindi',
    'mentre','dopo','prima','c','n','s','m','t','v','l','d','r'
  ]);


  // ──────────────────────────────────────────────────────────────
  //  7. CACHE SIMBOLI (localStorage)
  // ──────────────────────────────────────────────────────────────
  let _caaCache = null;

  function getCache() {
    if (!_caaCache) {
      try { _caaCache = JSON.parse(localStorage.getItem('_caa_sym') || '{}'); }
      catch { _caaCache = {}; }
    }
    return _caaCache;
  }

  function saveCache() {
    try { localStorage.setItem('_caa_sym', JSON.stringify(getCache())); } catch {}
  }


  // ──────────────────────────────────────────────────────────────
  //  8. FETCH SIMBOLO SINGOLO
  // ──────────────────────────────────────────────────────────────
  async function fetchSymbol(word) {
    const k = word.toLowerCase().replace(/[^a-zàèéìòùüáóú]/gi, '');
    if (!k || k.length < 2 || CAA_STOP.has(k)) return null;

    const cache = getCache();
    if (k in cache) return cache[k];

    try {
      const r = await fetch(ARASAAC_SEARCH(k));
      if (!r.ok) { cache[k] = null; return null; }
      const data = await r.json();
      if (!Array.isArray(data) || !data.length) { cache[k] = null; return null; }
      cache[k] = ARASAAC_IMG(data[0]._id);
      saveCache();
      return cache[k];
    } catch {
      cache[k] = null;
      return null;
    }
  }


  // ──────────────────────────────────────────────────────────────
  //  9. RENDER TESTO → container DOM
  // ──────────────────────────────────────────────────────────────
  async function renderText(testo, container, onProgress, small = false) {
    const tokens = [];
    testo.split('\n').forEach((riga, i, arr) => {
      riga.trim().split(/\s+/).filter(Boolean).forEach(p => tokens.push({ w: p }));
      if (i < arr.length - 1) tokens.push({ br: true });
    });

    // Parole uniche da cercare
    const toFetch = [...new Set(
      tokens.filter(t => !t.br)
        .map(t => t.w.toLowerCase().replace(/[^a-zàèéìòùüáóú]/gi, ''))
        .filter(k => k.length > 1 && !CAA_STOP.has(k))
    )];

    let done = 0;
    for (const w of toFetch) {
      await fetchSymbol(w);
      done++;
      if (onProgress) onProgress(done, toFetch.length);
      await new Promise(r => setTimeout(r, 28));
    }

    container.innerHTML = '';
    const flow = document.createElement('div');
    flow.className = 'caa-flow';
    const cache = getCache();
    const imgSize  = small ? '48px' : '68px';
    const boxMin   = small ? '48px' : '58px';
    const boxMax   = small ? '74px' : '92px';
    const fontSize = small ? '10px' : '11px';

    for (const tk of tokens) {
      if (tk.br) {
        const nl = document.createElement('div');
        nl.className = 'caa-newline';
        flow.appendChild(nl);
        continue;
      }

      const raw = tk.w;
      const k   = raw.toLowerCase().replace(/[^a-zàèéìòùüáóú]/gi, '');
      const sym = (!k || k.length < 2 || CAA_STOP.has(k)) ? null : (cache[k] || null);

      if (!sym) {
        const sp = document.createElement('span');
        sp.className = 'caa-stopword';
        sp.textContent = raw;
        flow.appendChild(sp);
      } else {
        const box = document.createElement('div');
        box.className = 'caa-box';
        box.style.minWidth = boxMin;
        box.style.maxWidth = boxMax;

        const img = document.createElement('img');
        img.className = 'caa-sym';
        img.src = sym;
        img.alt = k;
        img.style.width  = imgSize;
        img.style.height = imgSize;
        img.onerror = () => {
          const sp = document.createElement('span');
          sp.className = 'caa-stopword';
          sp.textContent = raw;
          box.replaceWith(sp);
        };
        box.appendChild(img);

        const lbl = document.createElement('span');
        lbl.className = 'caa-lbl';
        lbl.style.fontSize = fontSize;
        lbl.textContent = raw;
        box.appendChild(lbl);

        flow.appendChild(box);
      }
    }

    container.appendChild(flow);
  }


  // ──────────────────────────────────────────────────────────────
  //  10. FUNZIONI GLOBALI (chiamate dall'HTML iniettato)
  // ──────────────────────────────────────────────────────────────

  window.caaBack = function () {
    if (typeof mostraVista === 'function') mostraVista('docente');
  };

  window.caaContaRighe = function () {
    const ta  = document.getElementById('caa-testo');
    const cnt = document.getElementById('caa-righe-count');
    const n   = ta.value.split('\n').length;
    cnt.textContent = `${n} / 30 righe`;
    cnt.className   = 'caa-counter' + (n > 30 ? ' warn' : '');
    if (n > 30) ta.value = ta.value.split('\n').slice(0, 30).join('\n');
  };

  // Apertura vista CAA dal click della card
  window.caaApriVista = function () {
    if (typeof mostraVista === 'function') mostraVista('caa');
  };

  // ─── Aggiungi domanda ────────────────────────────────────────
  let _domN = 0;
  window.caaAggiungiDomanda = function () {
    _domN++;
    const n    = _domN;
    const list = document.getElementById('caa-domande-list');
    const div  = document.createElement('div');
    div.className = 'caa-domanda-item';
    div.id = `caa-d-${n}`;
    div.innerHTML = `
      <p class="caa-dom-num">Domanda ${n}</p>
      <button class="caa-rm" onclick="this.parentElement.remove()" title="Rimuovi">✕</button>
      <div class="caa-field" style="margin-bottom:10px;">
        <input type="text" id="caa-d${n}-q" placeholder="Testo della domanda..." style="width:100%;box-sizing:border-box;">
      </div>
      ${['A','B','C','D'].map(l => `
        <div class="caa-opz-row">
          <span class="opz-letter ${l}">${l}</span>
          <input type="text" id="caa-d${n}-o${l}" placeholder="Opzione ${l}">
          <label style="display:flex;align-items:center;gap:4px;font-size:.78rem;color:#888;cursor:pointer;">
            <input type="radio" name="caa-corr-${n}" value="${l}"> corretta
          </label>
        </div>`).join('')}`;
    list.appendChild(div);
  };

  // ─── Raccoglie dati dal form ─────────────────────────────────
  function raccogliDati() {
    const alunno = document.getElementById('caa-alunno').value.trim();
    const classe = document.getElementById('caa-classe').value;
    const titolo = document.getElementById('caa-titolo').value.trim() || 'Prova CAA';
    const testo  = document.getElementById('caa-testo').value.trim();

    if (!alunno) { alert('⚠️ Inserisci il nome dell\'alunno.'); return null; }
    if (!testo)  { alert('⚠️ Inserisci il testo del brano.');  return null; }

    const domande = [];
    document.querySelectorAll('.caa-domanda-item').forEach(item => {
      const id  = item.id.replace('caa-d-', '');
      const q   = document.getElementById(`caa-d${id}-q`)?.value.trim();
      if (!q) return;
      const opzioni = ['A','B','C','D'].map(l =>
        document.getElementById(`caa-d${id}-o${l}`)?.value.trim() || ''
      );
      const corr = item.querySelector('input[type="radio"]:checked');
      domande.push({ testo: q, opzioni, corretta: corr ? corr.value : 'A' });
    });

    return { type: 'caa', titolo, alunno, classe, testo, domande };
  }

  // ─── Anteprima ───────────────────────────────────────────────
  window.caaPreview = async function () {
    const dati = raccogliDati();
    if (!dati) return;

    const progWrap   = document.getElementById('caa-progress-wrap');
    const progBar    = document.getElementById('caa-prog-bar');
    const progLbl    = document.getElementById('caa-prog-label');
    const previewBox = document.getElementById('caa-preview-box');

    progWrap.style.display = 'block';
    previewBox.style.display = 'none';
    progBar.style.width = '0%';
    progLbl.textContent = 'Cerco simboli ARASAAC…';

    const wrap = document.createElement('div');

    // Brano
    const h1 = document.createElement('h4');
    h1.textContent = '📖 Brano';
    wrap.appendChild(h1);
    const testoEl = document.createElement('div');
    wrap.appendChild(testoEl);
    await renderText(dati.testo, testoEl, (done, tot) => {
      const pct = Math.round(done / tot * 100);
      progBar.style.width = pct + '%';
      progLbl.textContent = `Simboli brano: ${done}/${tot}`;
    });

    // Domande
    if (dati.domande.length) {
      const sep = document.createElement('hr');
      sep.className = 'caa-preview-sep';
      wrap.appendChild(sep);
      const h2 = document.createElement('h4');
      h2.textContent = '❓ Domande';
      wrap.appendChild(h2);

      const lCols = { A:'#2e7d32', B:'#c62828', C:'#1565c0', D:'#6a1b9a' };

      for (const [qi, dom] of dati.domande.entries()) {
        const qWrap = document.createElement('div');
        qWrap.style.cssText = 'margin-bottom:20px;background:#fff;border-radius:10px;padding:14px;border:1.5px solid #ffe082;';
        const qt = document.createElement('p');
        qt.style.cssText = 'font-weight:700;margin:0 0 10px;color:#333;';
        qt.textContent = `${qi+1}. ${dom.testo}`;
        qWrap.appendChild(qt);

        for (const [oi, opz] of dom.opzioni.entries()) {
          if (!opz) continue;
          const l = ['A','B','C','D'][oi];
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:6px;';
          const lt = document.createElement('span');
          lt.style.cssText = `font-weight:800;color:${lCols[l]};min-width:18px;`;
          lt.textContent = l;
          row.appendChild(lt);
          const oc = document.createElement('div');
          await renderText(opz, oc, null, true);
          row.appendChild(oc);
          if (l === dom.corretta) {
            const tick = document.createElement('span');
            tick.textContent = '✓';
            tick.style.cssText = 'color:#2e7d32;font-weight:700;';
            row.appendChild(tick);
          }
          qWrap.appendChild(row);
        }
        wrap.appendChild(qWrap);
      }
    }

    progWrap.style.display = 'none';
    previewBox.innerHTML = '';
    previewBox.appendChild(wrap);
    previewBox.style.display = 'block';
    previewBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ─── Genera link ─────────────────────────────────────────────
  window.caaGeneraLink = function () {
    const dati = raccogliDati();
    if (!dati) return;

    const codice   = 'CAA' + Date.now().toString(36).toUpperCase();
    const sessioni = JSON.parse(localStorage.getItem('sessioni') || '[]');
    sessioni.push({
      codice,
      tipo:    'caa',
      titolo:  dati.titolo,
      alunno:  dati.alunno,
      classe:  dati.classe,
      data:    new Date().toLocaleDateString('it-IT'),
      stato:   'aperta',
      studenti: 0,
      datiCAA:  dati
    });
    localStorage.setItem('sessioni', JSON.stringify(sessioni));

    const link = `${location.origin}${location.pathname}?sessione=${codice}`;
    const out  = document.getElementById('caa-link-out');
    document.getElementById('caa-link-text').value = link;
    out.style.display = 'block';
    navigator.clipboard.writeText(link).catch(() => {});
    out.scrollIntoView({ behavior: 'smooth' });
  };

  // ─── Vista studente ──────────────────────────────────────────
  let _risposte = {};
  let _datiCorrente = null;

  window.avviaProvaCAA = async function (sessione) {
    _datiCorrente = sessione.datiCAA;
    _risposte     = {};

    document.getElementById('caa-s-titolo').textContent = _datiCorrente.titolo;
    document.getElementById('caa-s-alunno').textContent =
      `👤 ${_datiCorrente.alunno} — ${_datiCorrente.classe}`;

    if (typeof mostraVista === 'function') mostraVista('studente-caa');

    const testoEl = document.getElementById('caa-s-testo-render');
    testoEl.innerHTML =
      '<div style="color:#f57f17;padding:20px;text-align:center;">⏳ Carico simboli…</div>';
    await renderText(_datiCorrente.testo, testoEl, null);

    const domEl = document.getElementById('caa-s-domande-render');
    domEl.innerHTML = '';
    const lCols = { A:'#2e7d32', B:'#c62828', C:'#1565c0', D:'#6a1b9a' };

    for (const [qi, dom] of _datiCorrente.domande.entries()) {
      const block = document.createElement('div');
      block.className = 'caa-q-block';

      const num = document.createElement('div');
      num.className = 'caa-q-num';
      num.textContent = `Domanda ${qi + 1}`;
      block.appendChild(num);

      const qt = document.createElement('div');
      qt.className = 'caa-q-testo';
      qt.textContent = dom.testo;
      block.appendChild(qt);

      const opList = document.createElement('div');
      opList.className = 'caa-opzioni-list';

      for (const [oi, opz] of dom.opzioni.entries()) {
        if (!opz) continue;
        const l = ['A','B','C','D'][oi];

        const btn = document.createElement('div');
        btn.className = 'caa-opzione';
        btn.dataset.qi   = qi;
        btn.dataset.lett = l;

        const ltEl = document.createElement('span');
        ltEl.className = `opz-lt ${l}`;
        ltEl.textContent = l;
        btn.appendChild(ltEl);

        const body = document.createElement('div');
        body.className = 'opz-body';
        await renderText(opz, body, null, true);
        btn.appendChild(body);

        btn.onclick = () => {
          document.querySelectorAll(`.caa-opzione[data-qi="${qi}"]`)
            .forEach(el => el.classList.remove('sel'));
          btn.classList.add('sel');
          _risposte[qi] = l;
        };

        opList.appendChild(btn);
      }

      block.appendChild(opList);
      domEl.appendChild(block);
    }
  };

  // ─── Consegna studente ───────────────────────────────────────
  window.caaConsegna = function () {
    if (!_datiCorrente) return;
    const dom      = _datiCorrente.domande;
    const corrette = dom.filter((d, i) => _risposte[i] === d.corretta).length;
    const pct      = dom.length > 0 ? Math.round(corrette / dom.length * 100) : 100;

    const ris = JSON.parse(localStorage.getItem('risultati_caa') || '[]');
    ris.push({
      alunno:   _datiCorrente.alunno,
      classe:   _datiCorrente.classe,
      titolo:   _datiCorrente.titolo,
      data:     new Date().toLocaleDateString('it-IT'),
      corrette, totale: dom.length, pct, risposte: _risposte
    });
    localStorage.setItem('risultati_caa', JSON.stringify(ris));

    alert(`✅ Prova consegnata!\n\n` +
          `Risposte corrette: ${corrette} su ${dom.length}\n` +
          `Punteggio: ${pct}%\n\n` +
          `Bravo, ${_datiCorrente.alunno}! 🌟`);
  };

})(); // fine IIFE
