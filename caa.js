/**
 * ════════════════════════════════════════════════════════════════
 *  CAA.JS v3 – Modulo Prova CAA per Simulatore INVALSI
 *  INTEGRAZIONE: <script src="caa.js"></script> alla fine del <body>
 *
 *  Novità v3:
 *  - Fix link sessione: ?sessione=CAA... apre direttamente la prova
 *  - Layout studente: testo a sinistra, domande a destra (come prove disabilità)
 *  - Audio TTS con evidenziazione frase per frase, back/next, speed control
 * ════════════════════════════════════════════════════════════════
 */

(function () {
  'use strict';

  // ──────────────────────────────────────────────────────────────
  //  1. CSS
  // ──────────────────────────────────────────────────────────────
  var CSS = [
/* ─── Card CAA ──────────────────────────────────────────── */
'.caa-card-grid{',
'  background:linear-gradient(135deg,#fffde7 0%,#fff8e1 60%,#ffecb3 100%);',
'  border:2px solid #ffd54f;border-radius:14px;',
'  padding:22px 18px;cursor:pointer;',
'  transition:transform .15s,box-shadow .15s;text-align:center;}',
'.caa-card-grid:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(255,193,7,.28);}',
'.caa-card-grid .ci{font-size:2.6rem;}',
'.caa-card-grid .ct{font-weight:700;font-size:1rem;color:#e65100;margin:6px 0 3px;}',
'.caa-card-grid .cd{font-size:.78rem;color:#bf360c;}',

/* ─── Form docente ───────────────────────────────────────── */
'.caa-form-section{background:#fff;border-radius:14px;border:2px solid #ffe0b2;padding:22px;margin-bottom:18px;}',
'.caa-form-section h3{margin:0 0 16px;color:#e65100;font-size:1.05rem;}',
'.caa-field{margin-bottom:14px;}',
'.caa-field label{display:block;font-size:.82rem;font-weight:600;color:#555;margin-bottom:4px;}',
'.caa-field input,.caa-field select,.caa-field textarea{width:100%;box-sizing:border-box;padding:9px 12px;border:1.5px solid #ffe082;border-radius:8px;font-size:.95rem;background:#fffdf7;transition:border-color .15s;}',
'.caa-field input:focus,.caa-field select:focus,.caa-field textarea:focus{outline:none;border-color:#fb8c00;}',
'.caa-field textarea{resize:vertical;min-height:140px;font-family:inherit;}',
'.caa-counter{text-align:right;font-size:.78rem;color:#999;margin-top:3px;}',
'.caa-counter.warn{color:#e53935;font-weight:600;}',

/* ─── Domande docente ───────────────────────────────────── */
'.caa-domanda-item{background:#fff8e1;border:1.5px solid #ffe082;border-radius:10px;padding:16px;margin-bottom:12px;position:relative;}',
'.caa-domanda-item .caa-dom-num{font-weight:700;color:#e65100;margin:0 0 10px;}',
'.caa-domanda-item .caa-rm{position:absolute;top:10px;right:12px;background:none;border:none;cursor:pointer;font-size:1.1rem;color:#e53935;padding:0;}',
'.caa-opz-row{display:flex;align-items:center;gap:8px;margin-bottom:7px;}',
'.caa-opz-row .opz-letter{font-weight:700;min-width:20px;font-size:1rem;}',
'.caa-opz-row .opz-letter.A{color:#2e7d32;}',
'.caa-opz-row .opz-letter.B{color:#c62828;}',
'.caa-opz-row .opz-letter.C{color:#1565c0;}',
'.caa-opz-row .opz-letter.D{color:#6a1b9a;}',
'.caa-opz-row input[type="text"]{flex:1;padding:6px 10px;border-radius:6px;border:1.5px solid #e0e0e0;font-size:.9rem;}',

/* ─── AI box ─────────────────────────────────────────────── */
'.caa-ai-box{background:linear-gradient(135deg,#fff3e0,#fce4ec 120%);border:2px solid #ffcc80;border-radius:12px;padding:16px 18px;margin-bottom:16px;}',
'.caa-ai-box-title{font-weight:700;font-size:.92rem;color:#e65100;margin:0 0 12px;display:flex;align-items:center;gap:7px;}',
'.caa-ai-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}',
'.caa-ai-row label{font-size:.83rem;color:#555;font-weight:600;}',
'.caa-ai-row select{padding:7px 10px;border-radius:8px;border:1.5px solid #ffcc80;background:#fff;font-size:.9rem;}',
'.caa-ai-row input[type="password"]{flex:1;min-width:200px;padding:7px 12px;border:1.5px solid #ffcc80;border-radius:8px;font-size:.9rem;background:#fff;}',
'.caa-ai-note{font-size:.75rem;color:#888;margin:8px 0 0;line-height:1.4;}',
'.caa-ai-status{margin-top:10px;font-size:.83rem;color:#e65100;display:none;align-items:center;gap:8px;}',
'.caa-ai-status.visible{display:flex;}',
'.caa-spinner{width:16px;height:16px;border:2px solid #ffcc80;border-top-color:#fb8c00;border-radius:50%;animation:caa-spin .7s linear infinite;flex-shrink:0;}',
'@keyframes caa-spin{to{transform:rotate(360deg);}}',
'.caa-ai-warn{background:#fff3e0;border:1.5px solid #ffcc80;border-radius:8px;padding:8px 12px;font-size:.8rem;color:#e65100;margin-top:10px;display:none;}',
'.caa-ai-warn.visible{display:block;}',

/* ─── Bottoni ───────────────────────────────────────────── */
'.caa-btn{display:inline-flex;align-items:center;gap:7px;padding:10px 20px;border-radius:9px;font-size:.92rem;font-weight:600;cursor:pointer;border:none;transition:.15s;}',
'.caa-btn:disabled{opacity:.5;cursor:not-allowed;}',
'.caa-btn-primary{background:#fb8c00;color:#fff;}',
'.caa-btn-primary:hover:not(:disabled){background:#e65100;}',
'.caa-btn-secondary{background:#fff3e0;color:#e65100;border:1.5px solid #ffcc80;}',
'.caa-btn-secondary:hover:not(:disabled){background:#ffe0b2;}',
'.caa-btn-ai{background:linear-gradient(135deg,#ff7043,#e91e63);color:#fff;}',
'.caa-btn-ai:hover:not(:disabled){opacity:.9;}',
'.caa-btn-add{background:#e8f5e9;color:#2e7d32;border:1.5px solid #a5d6a7;}',
'.caa-btn-add:hover{background:#c8e6c9;}',
'.caa-btn-back{background:#f5f5f5;color:#555;border:1.5px solid #ddd;}',
'.caa-btn-back:hover{background:#eeeeee;}',

/* ─── Progress simboli ──────────────────────────────────── */
'.caa-progress-wrap{margin:8px 0 12px;}',
'.caa-progress{height:7px;background:#ffe0b2;border-radius:99px;overflow:hidden;}',
'.caa-progress-bar{height:100%;background:linear-gradient(90deg,#fb8c00,#ff7043);border-radius:99px;transition:width .25s;}',
'.caa-progress-label{font-size:.78rem;color:#f57f17;margin-top:4px;}',

/* ─── Preview / link ─────────────────────────────────────── */
'.caa-preview-box{background:#fffdf5;border:2px solid #ffe082;border-radius:14px;padding:20px;margin:18px 0;}',
'.caa-preview-box h4{margin:0 0 14px;color:#f57f17;font-size:.95rem;}',
'.caa-preview-sep{border:none;border-top:1.5px dashed #ffe082;margin:18px 0;}',
'.caa-link-out{display:none;background:#e8f5e9;border:2px solid #a5d6a7;border-radius:10px;padding:14px 18px;margin-top:14px;}',
'.caa-link-out p{margin:0 0 8px;font-size:.85rem;color:#2e7d32;font-weight:600;}',
'.caa-link-out input{width:100%;box-sizing:border-box;padding:8px;border-radius:6px;border:1px solid #a5d6a7;font-size:.88rem;}',

/* ════════════════════════════════════════════════════════
   RENDERING SIMBOLI CAA
   ════════════════════════════════════════════════════════ */
'.caa-flow{display:flex;flex-wrap:wrap;align-items:flex-end;gap:6px 10px;padding:10px 0;}',
'.caa-box{display:inline-flex;flex-direction:column;align-items:center;gap:3px;border:2px solid #e0e0e0;border-radius:9px;padding:5px 8px;background:#fff;min-width:58px;max-width:92px;box-shadow:0 1px 4px rgba(0,0,0,.07);transition:all .2s;}',
'.caa-box img.caa-sym{width:68px;height:68px;object-fit:contain;display:block;}',
'.caa-box .caa-lbl{font-size:11px;font-weight:600;text-align:center;color:#333;word-break:break-word;line-height:1.2;}',
'.caa-stopword{font-size:14px;color:#777;align-self:flex-end;padding-bottom:3px;transition:all .2s;}',
'.caa-newline{width:100%;flex-basis:100%;height:0;}',

/* ─── Highlight TTS ─────────────────────────────────────── */
'.caa-box.caa-hl{border-color:#fb8c00!important;background:#fff3e0!important;box-shadow:0 0 0 3px rgba(251,140,0,.3)!important;transform:scale(1.1);}',
'.caa-stopword.caa-hl{background:#fff3e0;border-radius:4px;padding:0 4px;color:#e65100;font-weight:700;}',

/* ════════════════════════════════════════════════════════
   STUDENT FULL-SCREEN MODE
   ════════════════════════════════════════════════════════ */
'body.caa-student-mode{overflow:hidden;}',
'body.caa-student-mode>*:not(#vista-studente-caa):not(style):not(link):not(script){display:none!important;}',
'body.caa-student-mode #vista-studente-caa{',
'  display:flex!important;flex-direction:column;',
'  position:fixed;inset:0;z-index:9000;background:#f0f2f5;}',

/* ─── Studente: header ───────────────────────────────────── */
'.caa-s-hdr{',
'  background:linear-gradient(135deg,#fff8e1,#fff3e0);',
'  border-bottom:2px solid #ffe082;',
'  padding:10px 20px;',
'  display:flex;align-items:center;gap:14px;',
'  flex-shrink:0;position:relative;z-index:2;}',
'.caa-s-hdr .caa-s-ico{font-size:1.8rem;}',
'.caa-s-hdr .caa-s-title{font-size:1rem;font-weight:800;color:#e65100;}',
'.caa-s-hdr .caa-s-sub{font-size:.78rem;color:#888;margin-top:2px;}',

/* ─── Audio bar ──────────────────────────────────────────── */
'.caa-audio-bar{',
'  background:#fff;border-bottom:2px solid #ffe082;',
'  padding:8px 16px;',
'  display:flex;align-items:center;gap:10px;flex-wrap:wrap;',
'  flex-shrink:0;z-index:2;}',
'.caa-tts-btn{',
'  display:inline-flex;align-items:center;gap:5px;',
'  padding:7px 14px;border-radius:8px;font-size:.85rem;',
'  font-weight:700;cursor:pointer;border:none;transition:.15s;',
'  font-family:inherit;white-space:nowrap;}',
'.caa-tts-play{background:#fb8c00;color:#fff;}',
'.caa-tts-play:hover{background:#e65100;}',
'.caa-tts-play.is-paused{background:#2e7d32;}',
'.caa-tts-play.is-paused:hover{background:#1b5e20;}',
'.caa-tts-nav{background:#fff3e0;color:#e65100;border:1.5px solid #ffcc80;}',
'.caa-tts-nav:hover:not(:disabled){background:#ffe0b2;}',
'.caa-tts-nav:disabled{opacity:.35;cursor:not-allowed;}',
'.caa-tts-speed-wrap{display:flex;align-items:center;gap:6px;font-size:.78rem;color:#7a4000;white-space:nowrap;}',
'.caa-tts-speed-wrap select{padding:4px 8px;border-radius:6px;border:1.5px solid #ffcc80;font-size:.78rem;background:#fffdf7;cursor:pointer;}',
'.caa-tts-info{flex:1;min-width:100px;}',
'.caa-tts-lbl{font-size:.78rem;color:#f57f17;font-weight:600;}',
'.caa-tts-counter{font-size:.72rem;color:#aaa;margin-top:1px;}',

/* ─── Split layout ───────────────────────────────────────── */
'.caa-s-split{display:grid;grid-template-columns:1fr 1fr;flex:1;overflow:hidden;gap:0;}',

'.caa-s-text-col{',
'  background:#fff;border-right:3px solid #ffe082;',
'  overflow-y:auto;padding:14px 16px;position:relative;}',

'.caa-s-dom-col{',
'  background:#fffdf5;overflow-y:auto;',
'  padding:14px 18px 80px;}',

'.caa-s-col-hdr{',
'  font-size:.75rem;font-weight:800;color:#f57f17;',
'  text-transform:uppercase;letter-spacing:.07em;',
'  margin-bottom:12px;padding-bottom:8px;',
'  border-bottom:2px solid #ffe082;',
'  position:sticky;top:0;background:inherit;z-index:1;}',

/* ─── Domande studente ──────────────────────────────────── */
'.caa-q-block{margin-bottom:24px;background:#fff;border-radius:12px;border:1.5px solid #ffe0b2;padding:14px;box-shadow:0 1px 6px rgba(0,0,0,.05);}',
'.caa-q-num{font-size:.75rem;color:#f57f17;font-weight:800;margin-bottom:4px;text-transform:uppercase;letter-spacing:.05em;}',
'.caa-q-testo{font-weight:700;color:#333;margin-bottom:10px;font-size:.95rem;line-height:1.5;}',
'.caa-opzioni-list{display:flex;flex-direction:column;gap:7px;}',
'.caa-opzione{display:flex;align-items:center;gap:9px;border:2px solid #e0e0e0;border-radius:10px;padding:8px 12px;cursor:pointer;background:#fff;transition:border-color .13s,background .13s;}',
'.caa-opzione:hover{border-color:#ffb74d;background:#fff8e7;}',
'.caa-opzione.sel{border-color:#fb8c00;background:#fff3e0;}',
'.caa-opzione .opz-lt{font-weight:800;font-size:1rem;min-width:20px;}',
'.caa-opzione .opz-lt.A{color:#2e7d32;}',
'.caa-opzione .opz-lt.B{color:#c62828;}',
'.caa-opzione .opz-lt.C{color:#1565c0;}',
'.caa-opzione .opz-lt.D{color:#6a1b9a;}',
'.caa-opzione .opz-body{flex:1;}',

/* ─── Submit bar ─────────────────────────────────────────── */
'.caa-submit-bar{margin-top:20px;padding-top:16px;border-top:2px solid #ffe082;text-align:center;}',
'.caa-submit-btn{background:#fb8c00;color:#fff;border:none;border-radius:10px;padding:13px 36px;font-size:1rem;font-weight:700;cursor:pointer;transition:background .15s;}',
'.caa-submit-btn:hover{background:#e65100;}',

/* ─── Responsive ─────────────────────────────────────────── */
'@media(max-width:700px){',
'  .caa-s-split{grid-template-columns:1fr;overflow:visible;}',
'  .caa-s-text-col{border-right:none;border-bottom:3px solid #ffe082;max-height:45vh;}',
'  .caa-s-dom-col{padding-bottom:20px;}',
'  .caa-audio-bar{padding:6px 10px;gap:6px;}',
'  .caa-tts-btn{padding:5px 10px;font-size:.78rem;}',
'  .caa-tic-bar{gap:4px;}',
'  .caa-tic-btn{padding:4px 7px;font-size:.72rem;}',
'}',

/* ─── TIC panel nella vista studente ─────────────────────── */
'.caa-tic-bar{display:flex;align-items:center;gap:6px;margin-left:auto;flex-shrink:0;}',
'.caa-tic-btn{',
'  padding:5px 11px;border-radius:7px;border:1.5px solid #ffcc80;',
'  background:#fff;cursor:pointer;font-size:.8rem;font-weight:700;',
'  color:#e65100;transition:all .15s;font-family:inherit;white-space:nowrap;}',
'.caa-tic-btn.active{background:#fb8c00;color:#fff;border-color:#fb8c00;}',
'.caa-tic-btn:hover:not(.active){background:#fff3e0;}',

/* TIC grande */
'#vista-studente-caa.tic-grande .caa-box img.caa-sym{width:96px!important;height:96px!important;}',
'#vista-studente-caa.tic-grande .caa-box{min-width:82px!important;max-width:120px!important;}',
'#vista-studente-caa.tic-grande .caa-lbl{font-size:13px!important;}',
'#vista-studente-caa.tic-grande .caa-stopword{font-size:18px!important;}',
'#vista-studente-caa.tic-grande .caa-q-testo{font-size:1.1rem!important;line-height:1.7!important;}',

/* TIC alto contrasto */
'#vista-studente-caa.tic-contrasto{background:#000!important;}',
'#vista-studente-caa.tic-contrasto .caa-s-hdr{background:#111!important;border-color:#444!important;}',
'#vista-studente-caa.tic-contrasto .caa-audio-bar{background:#111!important;border-color:#444!important;}',
'#vista-studente-caa.tic-contrasto .caa-s-text-col{background:#111!important;border-color:#444!important;}',
'#vista-studente-caa.tic-contrasto .caa-s-dom-col{background:#1a1a1a!important;}',
'#vista-studente-caa.tic-contrasto .caa-box{background:#222!important;border-color:#fff!important;}',
'#vista-studente-caa.tic-contrasto .caa-box .caa-lbl{color:#fff!important;}',
'#vista-studente-caa.tic-contrasto .caa-stopword{color:#ffe082!important;}',
'#vista-studente-caa.tic-contrasto .caa-q-block{background:#222!important;border-color:#555!important;}',
'#vista-studente-caa.tic-contrasto .caa-q-num{color:#ffd54f!important;}',
'#vista-studente-caa.tic-contrasto .caa-q-testo,.caa-tic-contrasto .caa-q-testo *{color:#fff!important;}',
'#vista-studente-caa.tic-contrasto .caa-opzione{background:#222!important;border-color:#666!important;}',
'#vista-studente-caa.tic-contrasto .caa-opzione:hover{background:#333!important;}',
'#vista-studente-caa.tic-contrasto .caa-opzione.sel{background:#4a2000!important;border-color:#fb8c00!important;}',
'#vista-studente-caa.tic-contrasto .caa-s-col-hdr{color:#ffd54f!important;border-color:#555!important;background:#111!important;}',
'#vista-studente-caa.tic-contrasto .caa-s-title{color:#ffd54f!important;}',
'#vista-studente-caa.tic-contrasto .caa-s-sub{color:#aaa!important;}',
'#vista-studente-caa.tic-contrasto .caa-tts-lbl{color:#ffd54f!important;}',

/* TIC interlinea */
'#vista-studente-caa.tic-interlinea .caa-flow{gap:16px 20px!important;}',
'#vista-studente-caa.tic-interlinea .caa-opzioni-list{gap:12px!important;}',
'#vista-studente-caa.tic-interlinea .caa-q-block{margin-bottom:32px!important;}',
'#vista-studente-caa.tic-interlinea .caa-opzione{padding:12px 14px!important;}'
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.textContent = CSS;
  document.head.appendChild(styleEl);


  // ──────────────────────────────────────────────────────────────
  //  2. HTML – VISTA DOCENTE
  // ──────────────────────────────────────────────────────────────
  var HTML_DOCENTE = [
'<div id="vista-caa" style="display:none">',
'  <button class="caa-btn caa-btn-back" onclick="caaBack()" style="margin-bottom:20px">← Torna al pannello</button>',
'  <h2 style="color:#e65100;margin-bottom:6px;">🗣️ Crea Prova CAA</h2>',
'  <p style="color:#888;margin-top:0;font-size:.88rem;">Simboli ARASAAC (open source, gratuiti). Max 30 righe. Articoli e preposizioni compaiono come testo semplice.</p>',
// Alunno
'  <div class="caa-form-section">',
'    <h3>👤 Alunno e prova</h3>',
'    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">',
'      <div class="caa-field"><label>Nome alunno *</label><input id="caa-alunno" type="text" placeholder="Es. Marco R."></div>',
'      <div class="caa-field"><label>Classe</label><select id="caa-classe"><option>3A</option><option>3E</option></select></div>',
'      <div class="caa-field"><label>Titolo prova</label><input id="caa-titolo" type="text" placeholder="Es. Il bosco in autunno"></div>',
'    </div>',
'  </div>',
// Testo
'  <div class="caa-form-section">',
'    <h3>📖 Testo (già semplificato, max 30 righe)</h3>',
'    <div class="caa-field">',
'      <textarea id="caa-testo" placeholder="Incolla il brano semplificato. Usa frasi brevi e parole semplici." oninput="caaContaRighe()"></textarea>',
'      <div class="caa-counter" id="caa-righe-count">0 / 30 righe</div>',
'    </div>',
'  </div>',
// Domande
'  <div class="caa-form-section">',
'    <h3>❓ Domande</h3>',
'    <div class="caa-ai-box">',
'      <div class="caa-ai-box-title">✨ Genera domande automaticamente con AI</div>',
'      <div class="caa-ai-row">',
'        <label>Numero domande</label>',
'        <select id="caa-ai-ndm">',
'          <option value="3">3</option><option value="4">4</option><option value="5" selected>5</option>',
'          <option value="6">6</option><option value="7">7</option><option value="8">8</option>',
'          <option value="9">9</option><option value="10">10</option>',
'        </select>',
'        <input type="password" id="caa-ai-key" placeholder="Chiave Groq (se non già salvata nella piattaforma)">',
'        <button class="caa-btn caa-btn-ai" id="caa-ai-btn" onclick="caaGeneraAI()">✨ Genera</button>',
'      </div>',
'      <div class="caa-ai-note">La chiave Groq viene letta automaticamente se già salvata. Le domande sono modificabili prima di procedere.</div>',
'      <div class="caa-ai-status" id="caa-ai-status"><div class="caa-spinner"></div><span id="caa-ai-status-txt">Genero le domande…</span></div>',
'      <div class="caa-ai-warn" id="caa-ai-warn"></div>',
'    </div>',
'    <div id="caa-domande-list"></div>',
'    <button class="caa-btn caa-btn-add" onclick="caaAggiungiDomanda()" style="margin-top:4px">+ Aggiungi domanda manualmente</button>',
'  </div>',
// Azioni
'  <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px;">',
'    <button class="caa-btn caa-btn-secondary" onclick="caaPreview()">👁 Anteprima con simboli</button>',
'    <button class="caa-btn caa-btn-primary" onclick="caaGeneraLink()">🔗 Genera link prova</button>',
'  </div>',
'  <div id="caa-progress-wrap" style="display:none" class="caa-progress-wrap">',
'    <div class="caa-progress"><div class="caa-progress-bar" id="caa-prog-bar" style="width:0%"></div></div>',
'    <div class="caa-progress-label" id="caa-prog-label">Carico simboli ARASAAC…</div>',
'  </div>',
'  <div id="caa-preview-box" class="caa-preview-box" style="display:none"></div>',
'  <div id="caa-link-out" class="caa-link-out">',
'    <p>✅ Link copiato! Condividilo con l\'alunno:</p>',
'    <input type="text" id="caa-link-text" readonly onclick="this.select()">',
'  </div>',
'</div>'
  ].join('');


  // ──────────────────────────────────────────────────────────────
  //  3. HTML – VISTA STUDENTE (split layout + audio bar)
  // ──────────────────────────────────────────────────────────────
  var HTML_STUDENTE = [
'<div id="vista-studente-caa" style="display:none">',

// Header
'  <div class="caa-s-hdr">',
'    <div class="caa-s-ico">🗣️</div>',
'    <div>',
'      <div class="caa-s-title" id="caa-s-titolo">Prova CAA</div>',
'      <div class="caa-s-sub" id="caa-s-alunno"></div>',
'    </div>',
'    <div class="caa-tic-bar">',
'      <button class="caa-tic-btn" id="caa-tic-grande"     onclick="caaTIC(\'grande\')"     title="Testo grande">🔍 A+</button>',
'      <button class="caa-tic-btn" id="caa-tic-contrasto"  onclick="caaTIC(\'contrasto\')"  title="Alto contrasto">◑</button>',
'      <button class="caa-tic-btn" id="caa-tic-interlinea" onclick="caaTIC(\'interlinea\')" title="Spaziatura aumentata">↔</button>',
'    </div>',
'  </div>',

// Audio bar
'  <div class="caa-audio-bar" id="caa-audio-bar">',
'    <button class="caa-tts-btn caa-tts-nav" id="caa-tts-prev" onclick="caaTTSPrev()" disabled>← Frase</button>',
'    <button class="caa-tts-btn caa-tts-play" id="caa-tts-play" onclick="caaTTSToggle()">🔊 Ascolta</button>',
'    <button class="caa-tts-btn caa-tts-nav" id="caa-tts-next" onclick="caaTTSNext()" disabled>Frase →</button>',
'    <div class="caa-tts-speed-wrap">',
'      <span>Velocità:</span>',
'      <select id="caa-tts-speed" onchange="caaTTSSetSpeed(this.value)">',
'        <option value="0.7">🐢 Lenta</option>',
'        <option value="0.85" selected>🚶 Normale</option>',
'        <option value="1.1">🏃 Veloce</option>',
'      </select>',
'    </div>',
'    <div class="caa-tts-info">',
'      <div class="caa-tts-lbl" id="caa-tts-lbl">🔊 Premi Ascolta per sentire il testo</div>',
'      <div class="caa-tts-counter" id="caa-tts-counter"></div>',
'    </div>',
'  </div>',

// Split content
'  <div class="caa-s-split">',

// Left: text
'    <div class="caa-s-text-col" id="caa-s-text-col">',
'      <div class="caa-s-col-hdr">📖 Leggi il testo</div>',
'      <div id="caa-s-testo-render"></div>',
'    </div>',

// Right: questions
'    <div class="caa-s-dom-col" id="caa-s-dom-col">',
'      <div class="caa-s-col-hdr">❓ Rispondi alle domande</div>',
'      <div id="caa-s-domande-render"></div>',
'      <div class="caa-submit-bar">',
'        <button class="caa-submit-btn" onclick="caaConsegna()">✅ Consegna</button>',
'      </div>',
'    </div>',
'  </div>',
'</div>'
  ].join('');

  document.body.insertAdjacentHTML('beforeend', HTML_DOCENTE);
  document.body.insertAdjacentHTML('beforeend', HTML_STUDENTE);


  // ──────────────────────────────────────────────────────────────
  //  4. CARD nel pannello docente
  // ──────────────────────────────────────────────────────────────
  function injectCard () {
    // Evita doppia iniezione
    if (document.getElementById('caa-card-btn')) return;

    // 1. Cerca il grid delle prove adattate con selettori specifici
    var targets = ['#prove-adattate-grid','#griglia-prove','.prove-grid','.adattate-grid'];
    var grid = null;
    for (var i = 0; i < targets.length; i++) {
      grid = document.querySelector(targets[i]);
      if (grid) break;
    }

    // 2. Fallback sicuro: SOLO dentro #vista-docente (mai nel body generico)
    if (!grid) {
      var vistaDoc = document.getElementById('vista-docente');
      if (!vistaDoc) return; // panel docente non ancora nel DOM – riprova dopo
      grid = document.createElement('div');
      grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:16px;';
      vistaDoc.appendChild(grid);
    }

    var card = document.createElement('div');
    card.id        = 'caa-card-btn';
    card.className = 'caa-card-grid';
    card.onclick   = function () { window.caaApriVista(); };
    card.innerHTML = '<div class="ci">🗣️</div><div class="ct">Prova CAA</div><div class="cd">Simboli ARASAAC per comunicazione aumentativa</div>';
    grid.appendChild(card);
  }

  // Tenta subito; se il pannello docente non è ancora nel DOM,
  // ci riprova al load (quando mostraVista avrà già aggiunto tutto)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectCard();
      // Secondo tentativo al load completo (alcuni pannelli sono iniettati dinamicamente)
      window.addEventListener('load', injectCard);
    });
  } else {
    injectCard();
    window.addEventListener('load', injectCard);
  }


  // ──────────────────────────────────────────────────────────────
  //  5. LOAD HANDLER – session detection + monkey-patches
  // ──────────────────────────────────────────────────────────────
  window.addEventListener('load', function () {

    // ── Monkey-patch mostraVista ─────────────────────────────
    var _origMV = window.mostraVista;
    if (typeof _origMV === 'function') {
      window.mostraVista = function (vista) {
        if (vista === 'caa' || vista === 'studente-caa') {
          document.querySelectorAll('[id^="vista-"]').forEach(function (el) { el.style.display = 'none'; });
          var t = document.getElementById('vista-' + vista);
          if (t) t.style.display = 'block';
          return;
        }
        _origMV(vista);
      };
    } else {
      window.mostraVista = function (vista) {
        document.querySelectorAll('[id^="vista-"]').forEach(function (el) { el.style.display = 'none'; });
        var el = document.getElementById('vista-' + vista);
        if (el) el.style.display = 'block';
      };
    }

    // ── Monkey-patch checkSessioneStudente ───────────────────
    var _origCS = window.checkSessioneStudente;
    if (typeof _origCS === 'function') {
      window.checkSessioneStudente = function () {
        var codice = new URLSearchParams(location.search).get('sessione');
        if (!codice) return _origCS();
        var sessioni = JSON.parse(localStorage.getItem('sessioni') || '[]');
        var sess = sessioni.find(function (s) { return s.codice === codice; });
        if (sess && sess.tipo === 'caa') { avviaProvaCAA(sess); return; }
        _origCS();
      };
    }

    // ── RILEVAMENTO DIRETTO sessione CAA da URL ──────────────
    // Gestisce il caso in cui checkSessioneStudente non esiste
    // oppure la pagina mostra la schermata di login invece della prova
    var urlCodice = new URLSearchParams(location.search).get('sessione');
    if (urlCodice) {
      var sessioni = JSON.parse(localStorage.getItem('sessioni') || '[]');
      var sessCAA  = sessioni.find(function (s) { return s.codice === urlCodice && s.tipo === 'caa'; });
      if (sessCAA) {
        // Sopprimi l'animazione di benvenuto e avvia subito la prova CAA
        var bv = document.getElementById('scr-benvenuto');
        if (bv) { bv.style.display = 'none'; bv.style.opacity = '0'; }
        // Nascondi tutte le schermate principali
        ['scr-acc','scr-istr','scr-test','scr-ris','scr-doc'].forEach(function (id) {
          var el = document.getElementById(id);
          if (el) { el.style.display = 'none'; el.classList.add('hidden'); }
        });
        // Avvia prova CAA (con piccolo delay per assicurarsi che il DOM sia pronto)
        setTimeout(function () { avviaProvaCAA(sessCAA); }, 50);
      }
    }
  });


  // ──────────────────────────────────────────────────────────────
  //  6. ARASAAC – fetch e cache
  // ──────────────────────────────────────────────────────────────
  var ARASAAC_SEARCH = function (w) {
    return 'https://api.arasaac.org/api/pictograms/it/search/' + encodeURIComponent(w);
  };
  var ARASAAC_IMG = function (id) {
    return 'https://static.arasaac.org/pictograms/' + id + '/' + id + '_500.png';
  };

  var CAA_STOP = new Set([
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

  var _caaCache = null;
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

  function fetchSymbol (word) {
    var k = word.toLowerCase().replace(/[^a-zàèéìòùüáóú]/gi, '');
    if (!k || k.length < 2 || CAA_STOP.has(k)) return Promise.resolve(null);
    var cache = getCache();
    if (k in cache) return Promise.resolve(cache[k]);
    return fetch(ARASAAC_SEARCH(k))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!Array.isArray(data) || !data.length) { cache[k] = null; return null; }
        cache[k] = ARASAAC_IMG(data[0]._id);
        saveCache();
        return cache[k];
      })
      .catch(function () { cache[k] = null; return null; });
  }


  // ──────────────────────────────────────────────────────────────
  //  7. RENDER TESTO → DOM
  //  Restituisce array di elementi DOM nell'ordine delle parole
  //  (per il TTS sentence mapping)
  // ──────────────────────────────────────────────────────────────
  function renderText (testo, container, onProgress, small) {
    small = small || false;
    var tokens = [];
    testo.split('\n').forEach(function (riga, i, arr) {
      riga.trim().split(/\s+/).filter(Boolean).forEach(function (p) { tokens.push({ w: p }); });
      if (i < arr.length - 1) tokens.push({ br: true });
    });

    var toFetch = [];
    var seen = {};
    tokens.filter(function (t) { return !t.br; }).forEach(function (t) {
      var k = t.w.toLowerCase().replace(/[^a-zàèéìòùüáóú]/gi, '');
      if (k.length > 1 && !CAA_STOP.has(k) && !seen[k]) { seen[k] = true; toFetch.push(k); }
    });

    // Fetch con delay
    var fetchChain = Promise.resolve();
    var done = 0;
    toFetch.forEach(function (w) {
      fetchChain = fetchChain.then(function () {
        return fetchSymbol(w).then(function () {
          done++;
          if (onProgress) onProgress(done, toFetch.length);
          return new Promise(function (r) { setTimeout(r, 28); });
        });
      });
    });

    return fetchChain.then(function () {
      container.innerHTML = '';
      var flow = document.createElement('div');
      flow.className = 'caa-flow';
      var cache    = getCache();
      var imgSize  = small ? '48px' : '68px';
      var boxMin   = small ? '48px' : '58px';
      var boxMax   = small ? '74px' : '92px';
      var fontSize = small ? '10px' : '11px';
      var wordEls  = []; // tutti gli elementi parola, in ordine

      tokens.forEach(function (tk) {
        if (tk.br) {
          var nl = document.createElement('div');
          nl.className = 'caa-newline';
          flow.appendChild(nl);
          return;
        }
        var raw = tk.w;
        var k   = raw.toLowerCase().replace(/[^a-zàèéìòùüáóú]/gi, '');
        var sym = (!k || k.length < 2 || CAA_STOP.has(k)) ? null : (cache[k] || null);

        if (!sym) {
          var sp = document.createElement('span');
          sp.className = 'caa-stopword';
          sp.textContent = raw;
          flow.appendChild(sp);
          wordEls.push(sp);
        } else {
          var box = document.createElement('div');
          box.className = 'caa-box';
          box.style.minWidth = boxMin;
          box.style.maxWidth = boxMax;

          var img = document.createElement('img');
          img.className = 'caa-sym';
          img.src = sym; img.alt = k;
          img.style.width = imgSize; img.style.height = imgSize;
          img.onerror = function () {
            var sp2 = document.createElement('span');
            sp2.className = 'caa-stopword'; sp2.textContent = raw;
            box.replaceWith(sp2);
          };
          box.appendChild(img);

          var lbl = document.createElement('span');
          lbl.className = 'caa-lbl';
          lbl.style.fontSize = fontSize;
          lbl.textContent = raw;
          box.appendChild(lbl);

          flow.appendChild(box);
          wordEls.push(box);
        }
      });

      container.appendChild(flow);
      return wordEls; // ← restituisce per il TTS
    });
  }


  // ──────────────────────────────────────────────────────────────
  //  8. TTS ENGINE con sentence highlighting
  // ──────────────────────────────────────────────────────────────
  var _tts = {
    sentences:   [],
    sentenceEls: [],
    cur:         -1,
    playing:     false,
    paused:      false,
    speed:       0.85,
    voice:       null,
    utt:         null,
    ignoreEnd:   false   // ← v4: evita che onend/onerror sparino dopo un cancel volontario
  };

  // Trovare la voce italiana migliore (senza cache: ricalcola sempre, evita voci stantie)
  function ttsGetVoce () {
    var voci = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    var priorita = [
      function (v) { return v.lang === 'it-IT' && /natural|neural|premium|online/i.test(v.name); },
      function (v) { return /Elsa|Alice|Google\s+italiano/i.test(v.name); },
      function (v) { return v.lang === 'it-IT' && !/espeak/i.test(v.name); },
      function (v) { return v.lang === 'it-IT'; },
      function (v) { return v.lang.startsWith('it'); }
    ];
    for (var i = 0; i < priorita.length; i++) {
      var v = voci.find(priorita[i]);
      if (v) return v;
    }
    return voci[0] || null;
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function () { ttsGetVoce(); };
  }

  // Divide testo in frasi
  function ttsSplitSentences (testo) {
    return testo
      .replace(/\r\n/g, '\n')
      .split(/(?<=[.!?;])\s+|\n+/)
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 2; });
  }

  // Mappa: quali elementi DOM corrispondono a quale frase
  function ttsMapSentences (sentences, wordEls) {
    var allWords = [];
    sentences.forEach(function (s) {
      s.split(/\s+/).filter(Boolean).forEach(function (w) { allWords.push(w); });
    });

    var map = [];
    var elIdx = 0;

    sentences.forEach(function (s) {
      var count = s.split(/\s+/).filter(Boolean).length;
      var els = wordEls.slice(elIdx, elIdx + count);
      elIdx += count;
      map.push(els);
    });

    return map;
  }

  // Evidenzia una frase (rimuove le precedenti)
  function ttsHighlight (sentIdx) {
    // Rimuovi highlight precedenti
    document.querySelectorAll('#caa-s-testo-render .caa-hl')
      .forEach(function (el) { el.classList.remove('caa-hl'); });

    if (sentIdx < 0 || !_tts.sentenceEls[sentIdx]) return;

    _tts.sentenceEls[sentIdx].forEach(function (el) { el.classList.add('caa-hl'); });

    // Scrolla al primo elemento evidenziato
    var first = _tts.sentenceEls[sentIdx][0];
    if (first) {
      first.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Aggiorna UI pulsanti
  function ttsUpdateUI () {
    var playBtn  = document.getElementById('caa-tts-play');
    var prevBtn  = document.getElementById('caa-tts-prev');
    var nextBtn  = document.getElementById('caa-tts-next');
    var lbl      = document.getElementById('caa-tts-lbl');
    var counter  = document.getElementById('caa-tts-counter');

    if (!playBtn) return;

    if (_tts.playing && !_tts.paused) {
      playBtn.textContent = '⏸ Pausa';
      playBtn.classList.remove('is-paused');
      if (lbl) lbl.textContent = '🔊 Lettura in corso…';
    } else if (_tts.paused) {
      playBtn.textContent = '▶ Riprendi';
      playBtn.classList.add('is-paused');
      if (lbl) lbl.textContent = '⏸ In pausa';
    } else {
      playBtn.textContent = '🔊 Ascolta';
      playBtn.classList.remove('is-paused');
      if (lbl) lbl.textContent = '🔊 Premi Ascolta per sentire il testo';
    }

    if (prevBtn) prevBtn.disabled = (!_tts.playing && !_tts.paused) || _tts.cur <= 0;
    if (nextBtn) nextBtn.disabled = (!_tts.playing && !_tts.paused) || _tts.cur >= _tts.sentences.length - 1;

    if (counter && _tts.sentences.length > 0 && (_tts.playing || _tts.paused)) {
      counter.textContent = 'Frase ' + (_tts.cur + 1) + ' di ' + _tts.sentences.length;
    } else if (counter) {
      counter.textContent = '';
    }
  }

  // Keep-alive RIMOSSO in v4: leggendo frase-per-frase ogni utterance è breve (~5s)
  // quindi il bug Chrome da 15s non si applica. Il pause()/resume() del keepAlive
  // era la causa principale dell'audio metallico/strozzato.

  // Legge la frase corrente
  function ttsReadCurrent () {
    if (_tts.cur < 0 || _tts.cur >= _tts.sentences.length) {
      ttsStop();
      return;
    }
    if (!window.speechSynthesis) return;

    // v4 FIX: segnala che il cancel seguente è intenzionale
    // In Chrome, speechSynthesis.cancel() fa sparare onend/onerror
    // sull'utterance precedente. Con ignoreEnd=true li ignoriamo.
    _tts.ignoreEnd = true;
    window.speechSynthesis.cancel();

    var frase = _tts.sentences[_tts.cur];
    ttsHighlight(_tts.cur);
    ttsUpdateUI();

    // v4 FIX: piccolo delay (80ms) per permettere al cancel di completarsi
    // prima di creare il nuovo SpeechSynthesisUtterance
    setTimeout(function () {
      if (!_tts.playing || _tts.paused) return; // fermato/messo in pausa nel frattempo

      _tts.ignoreEnd = false;

      var utt = new SpeechSynthesisUtterance(frase);
      utt.lang  = 'it-IT';
      utt.rate  = _tts.speed;
      utt.pitch = 1;
      var v = ttsGetVoce();
      if (v) utt.voice = v;

      utt.onend = function () {
        if (_tts.ignoreEnd) return;        // cancel volontario → non avanzare
        if (!_tts.playing || _tts.paused) return;
        _tts.cur++;
        if (_tts.cur < _tts.sentences.length) {
          ttsReadCurrent();
        } else {
          ttsStop(); // fine testo
        }
      };

      utt.onerror = function (e) {
        // Ignora errori dovuti al nostro cancel intenzionale
        if (_tts.ignoreEnd) return;
        if (e && (e.error === 'interrupted' || e.error === 'canceled')) return;
        ttsStop();
      };

      _tts.utt = utt;
      window.speechSynthesis.speak(utt);
      ttsUpdateUI();
    }, 80);
  }

  // Avvia / pausa / riprendi
  window.caaTTSToggle = function () {
    if (!window.speechSynthesis) return;

    if (_tts.playing && !_tts.paused) {
      // v4 FIX: usa cancel+ricorda posizione invece di speechSynthesis.pause()
      // pause() è inaffidabile su molti browser e causa glitch audio.
      // Ricordiamo _tts.cur per riprendere dalla stessa frase.
      _tts.paused    = true;
      _tts.ignoreEnd = true;
      window.speechSynthesis.cancel();
      ttsUpdateUI();
      return;
    }

    if (_tts.paused) {
      // Riprendi dalla frase corrente (quella interrotta)
      _tts.paused    = false;
      _tts.ignoreEnd = false;
      ttsReadCurrent();
      return;
    }

    // Nuova lettura dall'inizio
    if (_tts.sentences.length === 0) return;
    _tts.playing = true;
    _tts.paused  = false;
    _tts.cur     = 0;
    ttsReadCurrent();
  };

  // Frase precedente
  window.caaTTSPrev = function () {
    if (!_tts.playing && !_tts.paused) return;
    _tts.playing   = true;
    _tts.paused    = false;
    _tts.ignoreEnd = false;
    _tts.cur = Math.max(0, _tts.cur - 1);
    ttsReadCurrent();
  };

  // Frase successiva
  window.caaTTSNext = function () {
    if (!_tts.playing && !_tts.paused) return;
    _tts.playing   = true;
    _tts.paused    = false;
    _tts.ignoreEnd = false;
    _tts.cur = Math.min(_tts.sentences.length - 1, _tts.cur + 1);
    ttsReadCurrent();
  };

  // Cambia velocità (applicata dalla prossima frase)
  window.caaTTSSetSpeed = function (v) {
    _tts.speed = parseFloat(v);
    // Se sta leggendo, riavvia la frase corrente con la nuova velocità
    if (_tts.playing && !_tts.paused) {
      ttsReadCurrent();
    }
  };

  // Stop completo
  function ttsStop () {
    _tts.ignoreEnd = true;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    _tts.playing = false;
    _tts.paused  = false;
    _tts.cur     = -1;
    ttsHighlight(-1); // rimuovi highlight
    ttsUpdateUI();
    // Resetta ignoreEnd dopo che il cancel si è propagato
    setTimeout(function () { _tts.ignoreEnd = false; }, 200);
  }
  window.caaTTSStop = ttsStop;

  // Inizializza TTS con testo e mappa elementi
  function ttsInit (testo, wordEls) {
    ttsStop();
    _tts.sentences   = ttsSplitSentences(testo);
    _tts.sentenceEls = ttsMapSentences(_tts.sentences, wordEls);
    ttsUpdateUI();
    var pb = document.getElementById('caa-tts-play');
    if (pb) pb.disabled = false;
  }


  // ──────────────────────────────────────────────────────────────
  //  9. GLOBALI – navigazione e form docente
  // ──────────────────────────────────────────────────────────────
  window.caaBack = function () {
    if (typeof mostraVista === 'function') mostraVista('docente');
  };
  window.caaApriVista = function () {
    if (typeof mostraVista === 'function') mostraVista('caa');
  };
  window.caaContaRighe = function () {
    var ta  = document.getElementById('caa-testo');
    var cnt = document.getElementById('caa-righe-count');
    var n   = ta.value.split('\n').length;
    cnt.textContent = n + ' / 30 righe';
    cnt.className   = 'caa-counter' + (n > 30 ? ' warn' : '');
    if (n > 30) ta.value = ta.value.split('\n').slice(0, 30).join('\n');
  };


  // ──────────────────────────────────────────────────────────────
  //  10. AGGIUNGI DOMANDA
  // ──────────────────────────────────────────────────────────────
  var _domN = 0;

  function esc (s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
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
        '<input type="text" id="caa-d' + n + '-q" placeholder="Testo della domanda…"' +
          ' value="' + (prefill ? esc(prefill.testo) : '') + '"' +
          ' style="width:100%;box-sizing:border-box;">' +
      '</div>' +
      ['A','B','C','D'].map(function (l) {
        return '<div class="caa-opz-row">' +
          '<span class="opz-letter ' + l + '">' + l + '</span>' +
          '<input type="text" id="caa-d' + n + '-o' + l + '" placeholder="Opzione ' + l + '"' +
            ' value="' + (prefill ? esc(prefill[l]) : '') + '">' +
          '<label style="display:flex;align-items:center;gap:4px;font-size:.78rem;color:#888;cursor:pointer;">' +
            '<input type="radio" name="caa-corr-' + n + '" value="' + l + '"' +
              (prefill && prefill.corretta === l ? ' checked' : '') + '> corretta' +
          '</label></div>';
      }).join('');
    list.appendChild(div);
  };


  // ──────────────────────────────────────────────────────────────
  //  11. GROQ AI – genera domande
  // ──────────────────────────────────────────────────────────────
  function leggiChiaveGroq () {
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
      '- Ogni domanda: frasi BREVISSIME (max 8 parole)\n' +
      '- Solo parole semplici e concrete\n' +
      '- 4 opzioni: A, B, C, D\n' +
      '- Una sola risposta corretta\n' +
      '- Opzioni brevi (max 5 parole)\n' +
      '- NO negazioni nelle domande\n\n' +
      'TESTO:\n' + testo + '\n\n' +
      'Rispondi SOLO con JSON valido, senza markdown:\n' +
      '[{"testo":"…","A":"…","B":"…","C":"…","D":"…","corretta":"A"}]';

    try {
      var resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          model:       'llama-3.3-70b-versatile',
          temperature: 0.4,
          max_tokens:  1800,
          messages: [
            { role: 'system', content: 'Sei un assistente per la didattica speciale. Rispondi solo con JSON valido, senza markdown.' },
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
      raw = raw.replace(/```json|```/gi, '').trim();
      var start = raw.indexOf('['), end = raw.lastIndexOf(']');
      if (start === -1 || end === -1) throw new Error('Risposta AI non valida.');
      raw = raw.slice(start, end + 1);

      var domande = JSON.parse(raw);
      if (!Array.isArray(domande) || !domande.length) throw new Error('Nessuna domanda generata.');

      stTxt.textContent = '✅ ' + Math.min(domande.length, 10) + ' domande generate!';

      domande.slice(0, 10).forEach(function (d) {
        window.caaAggiungiDomanda({
          testo: d.testo||'', A: d.A||'', B: d.B||'',
          C: d.C||'', D: d.D||'', corretta: d.corretta||'A'
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
  //  12. RACCOGLIE DATI DAL FORM
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
  //  13. ANTEPRIMA CON SIMBOLI
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
  //  14. GENERA LINK SESSIONE
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
  //  15. VISTA STUDENTE – avvio
  // ──────────────────────────────────────────────────────────────
  var _risposte     = {};
  var _datiCorrente = null;

  window.avviaProvaCAA = async function (sessione) {
    _datiCorrente = sessione.datiCAA;
    _risposte     = {};

    // Reset stato TIC (se prova riaperta)
    ['grande','contrasto','interlinea'].forEach(function (t) {
      var vistaCaa = document.getElementById('vista-studente-caa');
      if (vistaCaa) vistaCaa.classList.remove('tic-' + t);
      var btn = document.getElementById('caa-tic-' + t);
      if (btn) btn.classList.remove('active');
    });

    // Nascondi TUTTE le schermate di index.html e attiva la modalità full-screen CAA
    ['scr-acc','scr-istr','scr-test','scr-ris','scr-doc','scr-benvenuto'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.style.display = 'none'; el.classList.add('hidden'); }
    });
    document.querySelectorAll('[id^="vista-"]').forEach(function (el) { el.style.display = 'none'; });

    // Attiva la vista CAA studente in modalità full-screen
    document.body.classList.add('caa-student-mode');
    var caaEl = document.getElementById('vista-studente-caa');
    if (!caaEl) return;

    // Popola header
    document.getElementById('caa-s-titolo').textContent = _datiCorrente.titolo;
    document.getElementById('caa-s-alunno').textContent =
      '👤 ' + _datiCorrente.alunno + ' — ' + _datiCorrente.classe;

    // Reset TTS
    ttsStop();

    // Mostra loading nel testo
    var testoEl = document.getElementById('caa-s-testo-render');
    testoEl.innerHTML = '<div style="color:#f57f17;padding:30px;text-align:center;font-size:1.1rem;">⏳ Carico simboli ARASAAC…</div>';

    // Render testo e avvia TTS
    var wordEls = await renderText(_datiCorrente.testo, testoEl, null);
    ttsInit(_datiCorrente.testo, wordEls);

    // Render domande (v4: anche il testo della domanda è in CAA)
    var domEl = document.getElementById('caa-s-domande-render');
    domEl.innerHTML = '';

    for (var qi = 0; qi < _datiCorrente.domande.length; qi++) {
      var dom   = _datiCorrente.domande[qi];
      var block = document.createElement('div');
      block.className = 'caa-q-block';

      var num = document.createElement('div');
      num.className = 'caa-q-num';
      num.textContent = 'Domanda ' + (qi + 1) + ' di ' + _datiCorrente.domande.length;
      block.appendChild(num);

      // v4 FIX: testo domanda in CAA (pictogrammi sopra le parole chiave)
      var qtWrap = document.createElement('div');
      qtWrap.className = 'caa-q-testo';
      await renderText(dom.testo, qtWrap, null, true); // small=true per compattezza
      block.appendChild(qtWrap);

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
  //  16. CONSEGNA STUDENTE
  // ──────────────────────────────────────────────────────────────
  window.caaConsegna = function () {
    if (!_datiCorrente) return;
    ttsStop();

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

  // ──────────────────────────────────────────────────────────────
  //  17. TIC – Tasto Ingrandimento / Contrasto / Interlinea
  // ──────────────────────────────────────────────────────────────
  window.caaTIC = function (nome) {
    var vistaCaa = document.getElementById('vista-studente-caa');
    if (!vistaCaa) return;
    var attivo = vistaCaa.classList.toggle('tic-' + nome);
    var btn    = document.getElementById('caa-tic-' + nome);
    if (btn) btn.classList.toggle('active', attivo);
  };

})();
