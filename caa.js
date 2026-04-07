/**
 * ════════════════════════════════════════════════════════════════
 *  CAA.JS  –  Modulo Prova CAA per Simulatore INVALSI
 *  Repo: lbeac/simulatore-def
 *
 *  INTEGRAZIONE IN INDEX.HTML → UNA SOLA RIGA:
 *    <script src="caa.js"></script>
 *  da aggiungere ALLA FINE del <body>, dopo tutti gli altri <script>
 *
 *  Funzionalità:
 *  - Simboli ARASAAC (API gratuita, no chiave)
 *  - Cache simboli in localStorage
 *  - Domande manuali
 *  - Generazione domande con Groq AI (riusa chiave già salvata)
 *  - Vista studente con consegna e salvataggio risultati
 * ════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  // ──────────────────────────────────────────────────────────────
  //  1. CSS
  // ──────────────────────────────────────────────────────────────
  const CSS = `
/* ─── Card CAA ──────────────────────────────────────────── */
.caa-card-grid {
  background: linear-gradient(135deg,#fffde7 0%,#fff8e1 60%,#ffecb3 100%);
  border: 2px solid #ffd54f; border-radius: 14px;
  padding: 22px 18px; cursor: pointer;
  transition: transform .15s, box-shadow .15s; text-align: center;
}
.caa-card-grid:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(255,193,7,.28); }
.caa-card-grid .ci { font-size: 2.6rem; }
.caa-card-grid .ct { font-weight: 700; font-size: 1rem; color: #e65100; margin: 6px 0 3px; }
.caa-card-grid .cd { font-size: .78rem; color: #bf360c; }

/* ─── Sezioni form ──────────────────────────────────────── */
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

/* ─── Domande ───────────────────────────────────────────── */
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

/* ─── Box generazione AI ────────────────────────────────── */
.caa-ai-box {
  background: linear-gradient(135deg,#fff3e0,#fce4ec 120%);
  border: 2px solid #ffcc80; border-radius: 12px;
  padding: 16px 18px; margin-bottom: 16px;
}
.caa-ai-box-title {
  font-weight: 700; font-size: .92rem; color: #e65100;
  margin: 0 0 12px; display: flex; align-items: center; gap: 7px;
}
.caa-ai-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.caa-ai-row label { font-size: .83rem; color: #555; font-weight: 600; }
.caa-ai-row select {
  padding: 7px 10px; border-radius: 8px;
  border: 1.5px solid #ffcc80; background: #fff; font-size: .9rem;
}
.caa-ai-row input[type="password"] {
  flex: 1; min-width: 200px; padding: 7px 12px;
  border: 1.5px solid #ffcc80; border-radius: 8px;
  font-size: .9rem; background: #fff;
}
.caa-ai-note { font-size: .75rem; color: #888; margin: 8px 0 0; line-height: 1.4; }
.caa-ai-status {
  margin-top: 10px; font-size: .83rem; color: #e65100;
  display: none; align-items: center; gap: 8px;
}
.caa-ai-status.visible { display: flex; }
.caa-spinner {
  width: 16px; height: 16px; border: 2px solid #ffcc80;
  border-top-color: #fb8c00; border-radius: 50%;
  animation: caa-spin .7s linear infinite; flex-shrink: 0;
}
@keyframes caa-spin { to { transform: rotate(360deg); } }
.caa-ai-warn {
  background: #fff3e0; border: 1.5px solid #ffcc80;
  border-radius: 8px; padding: 8px 12px;
  font-size: .8rem; color: #e65100; margin-top: 10px; display: none;
}
.caa-ai-warn.visible { display: block; }

/* ─── Bottoni ───────────────────────────────────────────── */
.caa-btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 20px; border-radius: 9px; font-size: .92rem;
  font-weight: 600; cursor: pointer; border: none; transition: .15s;
}
.caa-btn:disabled { opacity: .5; cursor: not-allowed; }
.caa-btn-primary   { background: #fb8c00; color: #fff; }
.caa-btn-primary:hover:not(:disabled)   { background: #e65100; }
.caa-btn-secondary { background: #fff3e0; color: #e65100; border: 1.5px solid #ffcc80; }
.caa-btn-secondary:hover:not(:disabled) { background: #ffe0b2; }
.caa-btn-ai { background: linear-gradient(135deg,#ff7043,#e91e63); color: #fff; }
.caa-btn-ai:hover:not(:disabled) { opacity: .9; }
.caa-btn-add { background: #e8f5e9; color: #2e7d32; border: 1.5px solid #a5d6a7; }
.caa-btn-add:hover { background: #c8e6c9; }
.caa-btn-back { background: #f5f5f5; color: #555; border: 1.5px solid #ddd; }
.caa-btn-back:hover { background: #eeeeee; }

/* ─── Progress simboli ──────────────────────────────────── */
.caa-progress-wrap { margin: 8px 0 12px; }
.caa-progress { height: 7px; background: #ffe0b2; border-radius: 99px; overflow: hidden; }
.caa-progress-bar { height: 100%; background: linear-gradient(90deg,#fb8c00,#ff7043); border-radius: 99px; transition: width .25s; }
.caa-progress-label { font-size: .78rem; color: #f57f17; margin-top: 4px; }

/* ─── Preview e link ────────────────────────────────────── */
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
.caa-link-out input {
  width: 100%; box-sizing: border-box; padding: 8px;
  border-radius: 6px; border: 1px solid #a5d6a7; font-size: .88rem;
}

/* ════════════════════════════════════════════════════════
   SIMBOLI CAA – rendering
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
  text-align: center; color: #333; word-break: break-word; line-height: 1.2;
}
.caa-stopword { font-size: 14px; color: #777; align-self: flex-end; padding-bottom: 3px; }
.caa-newline  { width: 100%; flex-basis: 100%; height: 0; }

/* ─── Vista studente ────────────────────────────────────── */
.caa-student-wrap { max-width: 1100px; margin: 0 auto; padding: 16px; }
.caa-student-header {
  background: linear-gradient(135deg,#fff8e1,#fff3e0);
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
  //  2. HTML VISTA DOCENTE
  // ──────────────────────────────────────────────────────────────
  const HTML_DOCENTE = `
<div id="vista-caa" style="display:none">
  <button class="caa-btn caa-btn-back" onclick="caaBack()" style="margin-bottom:20px">
    ← Torna al pannello
  </button>

  <h2 style="color:#e65100;margin-bottom:6px;">🗣️ Crea Prova CAA</h2>
  <p style="color:#888;margin-top:0;font-size:.88rem;">
    Simboli ARASAAC (open source, gratuiti). Max 30 righe.
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
        <select id="caa-classe"><option>3A</option><option>3E</option></select>
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
    <h3>❓ Domande</h3>

    <!-- Generazione AI -->
    <div class="caa-ai-box">
      <div class="caa-ai-box-title">✨ Genera domande automaticamente con AI</div>
      <div class="caa-ai-row">
        <label>Numero domande</label>
        <select id="caa-ai-ndm">
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" selected>5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input type="password" id="caa-ai-key"
          placeholder="Chiave Groq (se non già salvata nella piattaforma)">
        <button class="caa-btn caa-btn-ai" id="caa-ai-btn" onclick="caaGeneraAI()">
          ✨ Genera
        </button>
      </div>
      <div class="caa-ai-note">
        La chiave Groq viene letta automaticamente se già salvata nella piattaforma.
        Le domande generate sono modificabili prima di procedere.
        Le domande vengono aggiunte in fondo — puoi eliminare quelle che non ti convincono.
      </div>
      <div class="caa-ai-status" id="caa-ai-status">
        <div class="caa-spinner"></div>
        <span id="caa-ai-status-txt">Genero le domande…</span>
      </div>
      <div class="caa-ai-warn" id="caa-ai-warn"></div>
    </div>

    <!-- Lista domande -->
    <div id="caa-domande-list"></div>
    <button class="caa-btn caa-btn-add" onclick="caaAggiungiDomanda()" style="margin-top:4px">
      + Aggiungi domanda manualmente
    </button>
  </div>

  <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px;">
    <button class="caa-btn caa-btn-secondary" onclick="caaPreview()">
      👁 Anteprima con simboli
    </button>
    <button class="caa-btn caa-btn-primary" onclick="caaGeneraLink()">
      🔗 Genera link prova
    </button>
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
  //  3. HTML VISTA STUDENTE
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
  //  4. CARD nel pannello docente
  // ──────────────────────────────────────────────────────────────
  function injectCard () {
    const targets = [
      '#prove-adattate-grid','#griglia-prove','.prove-grid','.adattate-grid'
    ];
    let grid = null;
    for (const sel of targets) { grid = document.querySelector(sel); if (grid) break; }
    if (!grid) {
      const cards = document.querySelectorAll('[onclick*="mostraVista"]');
      if (cards.length) grid = cards[cards.length - 1].parentElement;
    }
    if (!grid) {
      grid = document.createElement('div');
      grid.style.marginTop = '16px';
      (document.getElementById('vista-docente') || document.body).appendChild(grid);
    }
    const card = document.createElement('div');
    card.className = 'caa-card-grid';
    card.onclick = () => window.caaApriVista();
    card.innerHTML = `
      <div class="ci">🗣️</div>
      <div class="ct">Prova CAA</div>
      <div class="cd">Simboli ARASAAC per comunicazione aumentativa</div>`;
    grid.appendChild(card);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCard);
  } else {
    injectCard();
  }


  // ──────────────────────────────────────────────────────────────
  //  5. MONKEY-PATCH mostraVista + checkSessioneStudente
  // ──────────────────────────────────────────────────────────────
  window.addEventListener('load', () => {
    const _origMV = window.mostraVista;
    if (typeof _origMV === 'function') {
      window.mostraVista = function (vista) {
        if (vista === 'caa' || vista === 'studente-caa') {
          document.querySelectorAll('[id^="vista-"]').forEach(el => { el.style.display = 'none'; });
          const t = document.getElementById('vista-' + vista);
          if (t) t.style.display = 'block';
          return;
        }
        _origMV(vista);
      };
    } else {
      window.mostraVista = function (vista) {
        document.querySelectorAll('[id^="vista-"]').forEach(el => { el.style.display = 'none'; });
        const el = document.getElementById('vista-' + vista);
        if (el) el.style.display = 'block';
      };
    }

    const _origCS = window.checkSessioneStudente;
    if (typeof _origCS === 'function') {
      window.checkSessioneStudente = function () {
        const codice = new URLSearchParams(location.search).get('sessione');
        if (!codice) return _origCS();
        const sessioni = JSON.parse(localStorage.getItem('sessioni') || '[]');
        const sess = sessioni.find(s => s.codice === codice);
        if (sess && sess.tipo === 'caa') { window.avviaProvaCAA(sess); return; }
        _origCS();
      };
    }
  });


  // ──────────────────────────────────────────────────────────────
  //  6. ARASAAC – fetch e cache
  // ──────────────────────────────────────────────────────────────
  const ARASAAC_SEARCH = w =>
    'https://api.arasaac.org/api/pictograms/it/search/' + encodeURIComponent(w);
  const ARASAAC_IMG = id =>
    'https://static.arasaac.org/pictograms/' + id + '/' + id + '_500.png';

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
    'questo','questa','questi','queste','quello','quella','quelli','quelle',
    'come','quando','dove','perché','però','anche','già','più',
    'poi','ora','qui','qua','là','lì','allora','dunque','quindi',
    'mentre','dopo','prima','c','n','s','m','t','v','l','d','r'
  ]);

  let _caaCache = null;
  function getCache () {
    if (!_caaCache) {
      try { _caaCache = JSON.parse(localStorage.getItem('_caa_sym') || '{}'); }
      catch (e) { _caaCache = {}; }
    }
    return _caaCache;
  }
  function saveCache () {
    try { localStorage.setItem('_caa_sym', JSON.stringify(getCache())); } catch (e) {}
  }

  async function fetchSymbol (word) {
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
    } catch (e) { cache[k] = null; return null; }
  }


  // ──────────────────────────────────────────────────────────────
  //  7. RENDER TESTO → DOM
  // ──────────────────────────────────────────────────────────────
  async function renderText (testo, container, onProgress, small) {
    small = small || false;
    const tokens = [];
    testo.split('\n').forEach(function (riga, i, arr) {
      riga.trim().split(/\s+/).filter(Boolean).forEach(function (p) { tokens.push({ w: p }); });
      if (i < arr.length - 1) tokens.push({ br: true });
    });

    const toFetch = [];
    const seen = {};
    tokens.filter(function (t) { return !t.br; }).forEach(function (t) {
      const k = t.w.toLowerCase().replace(/[^a-zàèéìòùüáóú]/gi, '');
      if (k.length > 1 && !CAA_STOP.has(k) && !seen[k]) { seen[k] = true; toFetch.push(k); }
    });

    let done = 0;
    for (let i = 0; i < toFetch.length; i++) {
      await fetchSymbol(toFetch[i]);
      done++;
      if (onProgress) onProgress(done, toFetch.length);
      await new Promise(function (r) { setTimeout(r, 28); });
    }

    container.innerHTML = '';
    const flow = document.createElement('div');
    flow.className = 'caa-flow';
    const cache    = getCache();
    const imgSize  = small ? '48px' : '68px';
    const boxMin   = small ? '48px' : '58px';
    const boxMax   = small ? '74px' : '92px';
    const fontSize = small ? '10px' : '11px';

    tokens.forEach(function (tk) {
      if (tk.br) {
        const nl = document.createElement('div');
        nl.className = 'caa-newline';
        flow.appendChild(nl);
        return;
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
        img.src = sym; img.alt = k;
        img.style.width = imgSize; img.style.height = imgSize;
        img.onerror = function () {
          const sp = document.createElement('span');
          sp.className = 'caa-stopword'; sp.textContent = raw;
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
    });

    container.appendChild(flow);
  }


  // ──────────────────────────────────────────────────────────────
  //  8. GLOBALI – navigazione e form
  // ──────────────────────────────────────────────────────────────
  window.caaBack = function () {
    if (typeof mostraVista === 'function') mostraVista('docente');
  };
  window.caaApriVista = function () {
    if (typeof mostraVista === 'function') mostraVista('caa');
  };
  window.caaContaRighe = function () {
    const ta  = document.getElementById('caa-testo');
    const cnt = document.getElementById('caa-righe-count');
    const n   = ta.value.split('\n').length;
    cnt.textContent = n + ' / 30 righe';
    cnt.className   = 'caa-counter' + (n > 30 ? ' warn' : '');
    if (n > 30) ta.value = ta.value.split('\n').slice(0, 30).join('\n');
  };


  // ──────────────────────────────────────────────────────────────
  //  9. AGGIUNGI DOMANDA (manuale o pre-compilata dall'AI)
  //  prefill = { testo, A, B, C, D, corretta }  — opzionale
  // ──────────────────────────────────────────────────────────────
  let _domN = 0;

  function esc (s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;')
                          .replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  window.caaAggiungiDomanda = function (prefill) {
    _domN++;
    var n    = _domN;
    var list = document.getElementById('caa-domande-list');
    var div  = document.createElement('div');
    div.className = 'caa-domanda-item';
    div.id = 'caa-d-' + n;
    div.innerHTML =
      '<p class="caa-dom-num">Domanda ' + n + '</p>' +
      '<button class="caa-rm" onclick="this.parentElement.remove()" title="Rimuovi">✕</button>' +
      '<div class="caa-field" style="margin-bottom:10px;">' +
        '<input type="text" id="caa-d' + n + '-q"' +
          ' placeholder="Testo della domanda…"' +
          ' value="' + (prefill ? esc(prefill.testo) : '') + '"' +
          ' style="width:100%;box-sizing:border-box;">' +
      '</div>' +
      ['A','B','C','D'].map(function (l) {
        return '<div class="caa-opz-row">' +
          '<span class="opz-letter ' + l + '">' + l + '</span>' +
          '<input type="text" id="caa-d' + n + '-o' + l + '"' +
            ' placeholder="Opzione ' + l + '"' +
            ' value="' + (prefill ? esc(prefill[l]) : '') + '">' +
          '<label style="display:flex;align-items:center;gap:4px;font-size:.78rem;color:#888;cursor:pointer;">' +
            '<input type="radio" name="caa-corr-' + n + '" value="' + l + '"' +
              (prefill && prefill.corretta === l ? ' checked' : '') + '> corretta' +
          '</label></div>';
      }).join('');
    list.appendChild(div);
  };


  // ──────────────────────────────────────────────────────────────
  //  10. GENERA DOMANDE CON GROQ AI
  // ──────────────────────────────────────────────────────────────
  function leggiChiaveGroq () {
    // 'gemini_api_key_invalsi' è il nome usato da index.html (var GEMINI_KEY_LS)
    var candidates = [
      'gemini_api_key_invalsi',
      'groqApiKey','groq_key','groqKey','GROQ_KEY','groq_api_key','apiKeyGroq','groq'
    ];
    for (var i = 0; i < candidates.length; i++) {
      var v = localStorage.getItem(candidates[i]);
      if (v && v.trim().startsWith('gsk_')) return v.trim();
    }
    return null;
  }

  window.caaGeneraAI = async function () {
    var testo = document.getElementById('caa-testo').value.trim();
    if (!testo) { alert('⚠️ Inserisci prima il testo del brano.'); return; }

    var n      = parseInt(document.getElementById('caa-ai-ndm').value, 10);
    var apiKey = document.getElementById('caa-ai-key').value.trim() || leggiChiaveGroq();
    if (!apiKey) {
      mostraWarn('⚠️ Chiave Groq non trovata. Inseriscila nel campo sopra.');
      return;
    }
    if (!leggiChiaveGroq()) localStorage.setItem('groqApiKey', apiKey);

    var btn    = document.getElementById('caa-ai-btn');
    var status = document.getElementById('caa-ai-status');
    var stTxt  = document.getElementById('caa-ai-status-txt');
    var warn   = document.getElementById('caa-ai-warn');

    btn.disabled = true;
    status.classList.add('visible');
    warn.classList.remove('visible');
    stTxt.textContent = 'Genero ' + n + ' domande…';

    var PROMPT =
      'Sei un esperto di Comunicazione Aumentativa Alternativa (CAA).\n' +
      'Leggi il testo seguente e genera esattamente ' + n + ' domande di comprensione.\n\n' +
      'REGOLE OBBLIGATORIE:\n' +
      '- Ogni domanda deve avere frasi BREVISSIME (max 8 parole)\n' +
      '- Usa solo parole semplici e concrete (evita astrazioni)\n' +
      '- Ogni domanda ha 4 opzioni: A, B, C, D\n' +
      '- Una sola risposta è corretta\n' +
      '- Le opzioni sono brevi (max 5 parole ciascuna)\n' +
      '- Le opzioni errate devono essere plausibili ma chiaramente sbagliate\n' +
      '- Non usare negazioni nelle domande\n\n' +
      'TESTO:\n' + testo + '\n\n' +
      'Rispondi SOLO con un array JSON valido, senza markdown, senza backtick:\n' +
      '[{"testo":"…","A":"…","B":"…","C":"…","D":"…","corretta":"A"}]';

    try {
      var resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          model:       'llama3-70b-8192',
          temperature: 0.4,
          max_tokens:  1800,
          messages: [
            { role: 'system', content: 'Sei un assistente per la didattica speciale. Rispondi sempre e solo con JSON valido, senza markdown.' },
            { role: 'user',   content: PROMPT }
          ]
        })
      });

      if (!resp.ok) {
        var errData = await resp.json().catch(function () { return {}; });
        throw new Error(errData.error ? errData.error.message : 'HTTP ' + resp.status);
      }

      var data = await resp.json();
      var raw  = (data.choices && data.choices[0] && data.choices[0].message)
                   ? data.choices[0].message.content : '';

      // pulizia robusta
      raw = raw.replace(/```json|```/gi, '').trim();
      var start = raw.indexOf('[');
      var end   = raw.lastIndexOf(']');
      if (start === -1 || end === -1) throw new Error('Risposta AI non valida.');
      raw = raw.slice(start, end + 1);

      var domande = JSON.parse(raw);
      if (!Array.isArray(domande) || !domande.length) throw new Error('Nessuna domanda generata.');

      stTxt.textContent = '✅ ' + Math.min(domande.length, 10) + ' domande generate!';

      domande.slice(0, 10).forEach(function (d) {
        window.caaAggiungiDomanda({
          testo:    d.testo    || '',
          A:        d.A        || '',
          B:        d.B        || '',
          C:        d.C        || '',
          D:        d.D        || '',
          corretta: d.corretta || 'A'
        });
      });

      document.getElementById('caa-domande-list')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (err) {
      mostraWarn('❌ Errore: ' + err.message);
      stTxt.textContent = 'Generazione fallita.';
    } finally {
      btn.disabled = false;
      setTimeout(function () { status.classList.remove('visible'); }, 2500);
    }
  };

  function mostraWarn (msg) {
    var warn = document.getElementById('caa-ai-warn');
    warn.textContent = msg;
    warn.classList.add('visible');
  }


  // ──────────────────────────────────────────────────────────────
  //  11. RACCOGLIE DATI DAL FORM
  // ──────────────────────────────────────────────────────────────
  function raccogliDati () {
    var alunno = document.getElementById('caa-alunno').value.trim();
    var classe = document.getElementById('caa-classe').value;
    var titolo = document.getElementById('caa-titolo').value.trim() || 'Prova CAA';
    var testo  = document.getElementById('caa-testo').value.trim();

    if (!alunno) { alert('⚠️ Inserisci il nome dell\'alunno.'); return null; }
    if (!testo)  { alert('⚠️ Inserisci il testo del brano.');  return null; }

    var domande = [];
    document.querySelectorAll('.caa-domanda-item').forEach(function (item) {
      var id = item.id.replace('caa-d-', '');
      var qEl = document.getElementById('caa-d' + id + '-q');
      var q   = qEl ? qEl.value.trim() : '';
      if (!q) return;
      var opzioni = ['A','B','C','D'].map(function (l) {
        var el = document.getElementById('caa-d' + id + '-o' + l);
        return el ? el.value.trim() : '';
      });
      var corrEl = item.querySelector('input[type="radio"]:checked');
      domande.push({ testo: q, opzioni: opzioni, corretta: corrEl ? corrEl.value : 'A' });
    });

    return { type: 'caa', titolo: titolo, alunno: alunno, classe: classe, testo: testo, domande: domande };
  }


  // ──────────────────────────────────────────────────────────────
  //  12. ANTEPRIMA CON SIMBOLI
  // ──────────────────────────────────────────────────────────────
  window.caaPreview = async function () {
    var dati = raccogliDati();
    if (!dati) return;

    var progWrap   = document.getElementById('caa-progress-wrap');
    var progBar    = document.getElementById('caa-prog-bar');
    var progLbl    = document.getElementById('caa-prog-label');
    var previewBox = document.getElementById('caa-preview-box');

    progWrap.style.display = 'block';
    previewBox.style.display = 'none';
    progBar.style.width = '0%';
    progLbl.textContent = 'Cerco simboli ARASAAC…';

    var wrap = document.createElement('div');

    var h1 = document.createElement('h4');
    h1.textContent = '📖 Brano';
    wrap.appendChild(h1);
    var testoEl = document.createElement('div');
    wrap.appendChild(testoEl);
    await renderText(dati.testo, testoEl, function (done, tot) {
      progBar.style.width = Math.round(done / tot * 100) + '%';
      progLbl.textContent = 'Simboli brano: ' + done + '/' + tot;
    });

    if (dati.domande.length) {
      var sep = document.createElement('hr');
      sep.className = 'caa-preview-sep';
      wrap.appendChild(sep);
      var h2 = document.createElement('h4');
      h2.textContent = '❓ Domande';
      wrap.appendChild(h2);

      var lCols = { A:'#2e7d32', B:'#c62828', C:'#1565c0', D:'#6a1b9a' };

      for (var qi = 0; qi < dati.domande.length; qi++) {
        var dom = dati.domande[qi];
        var qw = document.createElement('div');
        qw.style.cssText = 'margin-bottom:20px;background:#fff;border-radius:10px;padding:14px;border:1.5px solid #ffe082;';
        var qt = document.createElement('p');
        qt.style.cssText = 'font-weight:700;margin:0 0 10px;color:#333;';
        qt.textContent = (qi + 1) + '. ' + dom.testo;
        qw.appendChild(qt);

        for (var oi = 0; oi < dom.opzioni.length; oi++) {
          var opz = dom.opzioni[oi];
          if (!opz) continue;
          var l   = ['A','B','C','D'][oi];
          var row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:6px;';
          var lt = document.createElement('span');
          lt.style.cssText = 'font-weight:800;color:' + lCols[l] + ';min-width:18px;';
          lt.textContent = l;
          row.appendChild(lt);
          var oc = document.createElement('div');
          await renderText(opz, oc, null, true);
          row.appendChild(oc);
          if (l === dom.corretta) {
            var tick = document.createElement('span');
            tick.textContent = '✓';
            tick.style.cssText = 'color:#2e7d32;font-weight:700;margin-left:4px;';
            row.appendChild(tick);
          }
          qw.appendChild(row);
        }
        wrap.appendChild(qw);
      }
    }

    progWrap.style.display = 'none';
    previewBox.innerHTML = '';
    previewBox.appendChild(wrap);
    previewBox.style.display = 'block';
    previewBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  // ──────────────────────────────────────────────────────────────
  //  13. GENERA LINK SESSIONE
  // ──────────────────────────────────────────────────────────────
  window.caaGeneraLink = function () {
    var dati = raccogliDati();
    if (!dati) return;

    var codice   = 'CAA' + Date.now().toString(36).toUpperCase();
    var sessioni = JSON.parse(localStorage.getItem('sessioni') || '[]');
    sessioni.push({
      codice:   codice,
      tipo:     'caa',
      titolo:   dati.titolo,
      alunno:   dati.alunno,
      classe:   dati.classe,
      data:     new Date().toLocaleDateString('it-IT'),
      stato:    'aperta',
      studenti: 0,
      datiCAA:  dati
    });
    localStorage.setItem('sessioni', JSON.stringify(sessioni));

    var link = location.origin + location.pathname + '?sessione=' + codice;
    document.getElementById('caa-link-text').value = link;
    document.getElementById('caa-link-out').style.display = 'block';
    navigator.clipboard.writeText(link).catch(function () {});
    document.getElementById('caa-link-out').scrollIntoView({ behavior: 'smooth' });
  };


  // ──────────────────────────────────────────────────────────────
  //  14. VISTA STUDENTE – avvio
  // ──────────────────────────────────────────────────────────────
  var _risposte     = {};
  var _datiCorrente = null;

  window.avviaProvaCAA = async function (sessione) {
    _datiCorrente = sessione.datiCAA;
    _risposte     = {};

    document.getElementById('caa-s-titolo').textContent = _datiCorrente.titolo;
    document.getElementById('caa-s-alunno').textContent =
      '👤 ' + _datiCorrente.alunno + ' — ' + _datiCorrente.classe;

    if (typeof mostraVista === 'function') mostraVista('studente-caa');

    var testoEl = document.getElementById('caa-s-testo-render');
    testoEl.innerHTML = '<div style="color:#f57f17;padding:20px;text-align:center;">⏳ Carico simboli…</div>';
    await renderText(_datiCorrente.testo, testoEl, null);

    var domEl = document.getElementById('caa-s-domande-render');
    domEl.innerHTML = '';

    for (var qi = 0; qi < _datiCorrente.domande.length; qi++) {
      var dom   = _datiCorrente.domande[qi];
      var block = document.createElement('div');
      block.className = 'caa-q-block';

      var num = document.createElement('div');
      num.className = 'caa-q-num';
      num.textContent = 'Domanda ' + (qi + 1);
      block.appendChild(num);

      var qt = document.createElement('div');
      qt.className = 'caa-q-testo';
      qt.textContent = dom.testo;
      block.appendChild(qt);

      var opList = document.createElement('div');
      opList.className = 'caa-opzioni-list';

      for (var oi = 0; oi < dom.opzioni.length; oi++) {
        var opz = dom.opzioni[oi];
        if (!opz) continue;
        var l   = ['A','B','C','D'][oi];
        var btn = document.createElement('div');
        btn.className = 'caa-opzione';
        btn.dataset.qi   = qi;
        btn.dataset.lett = l;

        var ltEl = document.createElement('span');
        ltEl.className = 'opz-lt ' + l;
        ltEl.textContent = l;
        btn.appendChild(ltEl);

        var body = document.createElement('div');
        body.className = 'opz-body';
        await renderText(opz, body, null, true);
        btn.appendChild(body);

        (function (qiCopy, btnCopy, lCopy) {
          btnCopy.onclick = function () {
            document.querySelectorAll('.caa-opzione[data-qi="' + qiCopy + '"]')
              .forEach(function (el) { el.classList.remove('sel'); });
            btnCopy.classList.add('sel');
            _risposte[qiCopy] = lCopy;
          };
        })(qi, btn, l);

        opList.appendChild(btn);
      }

      block.appendChild(opList);
      domEl.appendChild(block);
    }
  };


  // ──────────────────────────────────────────────────────────────
  //  15. CONSEGNA STUDENTE
  // ──────────────────────────────────────────────────────────────
  window.caaConsegna = function () {
    if (!_datiCorrente) return;
    var dom      = _datiCorrente.domande;
    var corrette = dom.filter(function (d, i) { return _risposte[i] === d.corretta; }).length;
    var pct      = dom.length > 0 ? Math.round(corrette / dom.length * 100) : 100;

    var ris = JSON.parse(localStorage.getItem('risultati_caa') || '[]');
    ris.push({
      alunno:   _datiCorrente.alunno,
      classe:   _datiCorrente.classe,
      titolo:   _datiCorrente.titolo,
      data:     new Date().toLocaleDateString('it-IT'),
      corrette: corrette,
      totale:   dom.length,
      pct:      pct,
      risposte: _risposte
    });
    localStorage.setItem('risultati_caa', JSON.stringify(ris));

    alert(
      '✅ Prova consegnata!\n\n' +
      'Risposte corrette: ' + corrette + ' su ' + dom.length + '\n' +
      'Punteggio: ' + pct + '%\n\n' +
      'Bravo, ' + _datiCorrente.alunno + '! 🌟'
    );
  };

})();
