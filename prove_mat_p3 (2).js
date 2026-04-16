window.PROVE_MAT = window.PROVE_MAT || [];
(function(){
const SM=(id,sez,comp,testo,ops,ok)=>({id,sez,tipo:'sm',comp,testo,ops,ok});
const VF=(id,sez,comp,testo,r)=>({id,sez,tipo:'vf',comp,testo,righeVF:r});
const RA=(id,sez,comp,testo,ok_num,unita,tol,s)=>({id,sez,tipo:'ra',comp,testo,ok_num,unita,tolleranza:tol||0,suggerimento:s||''});
const COMP=(id,sez,comp,testo,parole,gaps)=>({id,sez,tipo:'comp',comp,testo,parole,gaps});
const COL=(id,sez,comp,testo,sx,dx,coppie)=>({id,sez,tipo:'col',comp,testo,sx,dx,coppie});
const B=t=>'<div style="margin:8px 0;padding:8px 12px;background:#f3f0fa;border-left:3px solid #6a1b9a;border-radius:0 6px 6px 0;font-size:13px">'+t+'</div>';
const SVG=(c,w,h)=>`<div style="text-align:center;margin:12px 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;max-height:260px;display:inline-block">${c}</svg></div>`;

window.PROVE_MAT.push({id:3, titolo:'Prova 3', domande:[

SM('m3_1',0,'numeri',
B('Il numero di follower di un account è passato da 2 400 a 3 000 in un mese.')
+'Di quale percentuale sono aumentati?',
['20%','25%','60%','80%'],1),

RA('m3_2',0,'frazioni',
'Qual è il risultato di: <strong>³⁄₄ × ⁸⁄₉ − ¹⁄₆</strong>? (scrivi la risposta come decimale, es. 0.5)',
0.5,'',0.01,'Prima moltiplica, poi sottrai: 2/3 − 1/6 = ?'),

SM('m3_3',0,'algebra',
SVG(`
<rect x="20" y="30" width="170" height="110" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2.5" rx="4"/>
<text x="35" y="55" font-size="12" fill="#1b5e20">• Tre numeri consecutivi</text>
<text x="35" y="80" font-size="12" fill="#1b5e20">• La loro somma è 93</text>
<text x="35" y="105" font-size="12" fill="#1b5e20">• Trova il numero medio</text>
<text x="35" y="130" font-size="12" fill="#c62828" font-weight="bold">  n − 1, n, n + 1</text>
`, 210, 155)
+'Qual è il numero medio dei tre interi consecutivi la cui somma è 93?',
['29','30','31','32'],2),

SM('m3_4',0,'potenze',
'La distanza Terra-Sole è circa 1,5 × 10⁸ km. La luce percorre 3 × 10⁵ km/s.<br>In quanti secondi circa la luce raggiunge la Terra?',
['500 s','5 000 s','50 s','50 000 s'],0),

VF('m3_vf1',0,'numeri',
SVG(`
<rect x="20" y="15" width="170" height="110" fill="#fff8e1" stroke="#f57c00" stroke-width="2" rx="5"/>
<text x="35" y="40" font-size="12" fill="#333">Marco: 240 figurine</text>
<text x="35" y="62" font-size="12" fill="#e65100">→ regala 1/5 al fratello</text>
<text x="35" y="84" font-size="12" fill="#e65100">→ compra altre 30</text>
<text x="35" y="110" font-size="12" font-weight="bold" fill="#c62828">Quante ha ora?</text>
`, 210, 140)
+'<strong>Indica V o F:</strong>',
[
  {t:'Dopo aver regalato le figurine, Marco ne ha 192.',ok:'V'},
  {t:'Il fratello ha ricevuto esattamente 50 figurine.',ok:'F'},
  {t:'Dopo aver comprato quelle nuove, Marco ha più figurine di prima.',ok:'V'},
  {t:'Il numero finale di figurine di Marco è multiplo di 6.',ok:'V'},
]),

COMP('m3_5',0,'algebra',
B('Due treni partono contemporaneamente da due città distanti 360 km. Il treno A va a 90 km/h, il treno B a 120 km/h. Si dirigono l\'uno verso l\'altro.')
+'Completa la soluzione:',
['210','2','360','90','120'],
[
  {prima:'La velocità di avvicinamento è 90 + 120 =',dopo:'km/h.',ok_idx:0},
  {prima:'Il tempo di incontro è 360 ÷ 210 ≈',dopo:'ore.',ok_idx:1},
]),

RA('m3_6',0,'proporzioni',
B('In una ricetta per 6 persone: 180 g farina, 90 g burro, 60 g zucchero, 2 uova.')
+'Quante uova servono per 9 persone?',
3,'uova',0),

SM('m3_7',1,'geometria_piana',
SVG(`
<polygon points="30,160 110,20 190,160" fill="#fff9e6" stroke="#e65100" stroke-width="2.5"/>
<polygon points="110,20 130,80 90,80" fill="#ffe0b2" stroke="#e65100" stroke-width="1"/>
<text x="104" y="14" font-size="11" fill="#333">A</text>
<text x="15" y="170" font-size="11" fill="#333">B</text>
<text x="190" y="170" font-size="11" fill="#333">C</text>
<text x="118" y="55" font-size="10" fill="#c62828">M</text>
<text x="60" y="115" font-size="10" fill="#555">BM = mediana</text>
<line x1="30" y1="160" x2="150" y2="90" stroke="#c62828" stroke-width="1.5" stroke-dasharray="5,3"/>
`, 220, 185)
+B('Nel triangolo ABC, M è il punto medio di AC. Il segmento BM è la mediana relativa ad AC.')
+'Quale affermazione è corretta?',
['I triangoli ABM e BCM hanno la stessa area e lo stesso perimetro','I triangoli ABM e BCM hanno la stessa area ma perimetro diverso','I triangoli ABM e BCM sono congruenti','I triangoli ABM e BCM hanno aree diverse'],1),

RA('m3_8',1,'geometria_piana',
SVG(`
<rect x="30" y="30" width="160" height="100" fill="#e3f2fd" stroke="#1565c0" stroke-width="2.5"/>
<line x1="30" y1="130" x2="190" y2="30" stroke="#c62828" stroke-width="2" stroke-dasharray="5,3"/>
<text x="25" y="145" font-size="11" fill="#555">105 m</text>
<text x="193" y="85" font-size="11" fill="#555">68 m</text>
<text x="85" y="88" font-size="11" fill="#c62828">d = ?</text>
`, 225, 160)
+'Un campo da calcio è 105 m × 68 m.<br>Quanto misura la diagonale in m? (arrotonda a 1 decimale)',
125.5,'m',1,'Usa Pitagora: d² = 105² + 68²'),

SM('m3_9',1,'geometria_piana',
SVG(`
<polygon points="100,10 190,160 10,160" fill="#fce4ec" stroke="#c62828" stroke-width="2.5"/>
<text x="95" y="8" font-size="11" fill="#333">A</text>
<text x="4" y="170" font-size="11" fill="#333">B</text>
<text x="192" y="170" font-size="11" fill="#333">C</text>
<text x="90" y="40" font-size="11" fill="#c62828">40°</text>
<text x="20" y="155" font-size="11" fill="#c62828">70°</text>
<text x="163" y="155" font-size="11" fill="#333">?</text>
`, 210, 180)
+'Nel triangolo ABC: angolo A = 40°, angolo B = 70°. Quanto misura l\'angolo C?',
['60°','70°','80°','90°'],1),

VF('m3_vf2',1,'geometria',
SVG(`
<rect x="30" y="20" width="150" height="120" fill="#e8f4e8" stroke="#2e7d32" stroke-width="2"/>
<line x1="30" y1="20" x2="180" y2="140" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="6,3"/>
<text x="25" y="145" font-size="11" fill="#555">l = 6 cm</text>
<text x="185" y="80" font-size="11" fill="#555">h = 5 cm</text>
<text x="185" y="150" font-size="11" fill="#555">p = 4 cm</text>
<text x="55" y="85" font-size="12" fill="#1b5e20" font-weight="bold">Parallelepipedo</text>
`, 220, 160)
+'<strong>Indica V o F per il parallelepipedo 6 cm × 4 cm × 5 cm:</strong>',
[
  {t:'Il volume è 120 cm³.',ok:'V'},
  {t:'La superficie totale è 148 cm².',ok:'V'},
  {t:'Raddoppiando tutti i lati, il volume diventa il doppio.',ok:'F'},
]),

RA('m3_10',1,'geometria_solida',
SVG(`
<ellipse cx="110" cy="130" rx="70" ry="20" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
<polygon points="110,20 40,130 180,130" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
<line x1="110" y1="20" x2="110" y2="130" stroke="#c62828" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="115" y="78" font-size="11" fill="#c62828">h = 9 cm</text>
<text x="135" y="128" font-size="10" fill="#1565c0">r = 4 cm</text>
`, 220, 155)
+'Un cono ha raggio di base <strong>4 cm</strong> e altezza <strong>9 cm</strong>. (π ≈ 3,14, V = ⅓ × π × r² × h)<br>Quale è il suo volume in cm³?',
150.72,'cm³',1,'(1/3) × 3.14 × 16 × 9'),

COL('m3_11',1,'similitudine',
'In una mappa in scala 1:50 000, collega ogni misura reale alla sua corrispondente nella mappa:',
['1 km reale','500 m reali','200 m reali','5 km reali'],
['10 cm in mappa','4 cm in mappa','2 cm in mappa','1 cm in mappa'],
[2,1,3,0]),

SM('m3_12',1,'misura',
'Converti: <strong>2,5 dm³</strong> = _____ cm³',
['25 cm³','250 cm³','2 500 cm³','25 000 cm³'],2),

SM('m3_13',2,'statistica',
SVG(`
<line x1="30" y1="10" x2="30" y2="150" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="145" x2="185" y2="145" stroke="#555" stroke-width="1.5"/>
<polyline points="45,130 75,90 105,110 135,50 165,80" fill="none" stroke="#c62828" stroke-width="2.5"/>
<circle cx="45" cy="130" r="4" fill="#c62828"/>
<circle cx="75" cy="90" r="4" fill="#c62828"/>
<circle cx="105" cy="110" r="4" fill="#c62828"/>
<circle cx="135" cy="50" r="4" fill="#c62828"/>
<circle cx="165" cy="80" r="4" fill="#c62828"/>
<text x="38" y="160" font-size="9" fill="#555">Gen</text>
<text x="68" y="160" font-size="9" fill="#555">Feb</text>
<text x="98" y="160" font-size="9" fill="#555">Mar</text>
<text x="128" y="160" font-size="9" fill="#555">Apr</text>
<text x="158" y="160" font-size="9" fill="#555">Mag</text>
<text x="38" y="128" font-size="8" fill="#555">18</text>
<text x="68" y="88" font-size="8" fill="#555">22</text>
<text x="108" y="108" font-size="8" fill="#555">19</text>
<text x="128" y="48" font-size="8" fill="#555">25</text>
<text x="158" y="78" font-size="8" fill="#555">23</text>
`, 210, 170)
+B('Temperature massime (°C): Gen 18, Feb 22, Mar 19, Apr 25, Mag 23.')
+'Qual è la temperatura mediana della settimana?',
['19°C','21°C','22°C','23°C'],2),

SM('m3_14',2,'grafici',
B('Un grafico mostra il valore di un\'auto nel tempo: Anno 0 → 20 000 €. Ogni anno perde il 15% del valore dell\'anno precedente.')
+'Qual è il valore dopo <strong>2 anni</strong>?',
['14 450 €','14 000 €','17 000 €','15 500 €'],0),

RA('m3_15',2,'probabilita',
B('Un\'urna contiene palline numerate da 1 a 20. Si estrae una pallina a caso.')
+'Quante sono le palline con numero primo? (I numeri primi fino a 20 sono: 2,3,5,7,11,13,17,19)',
8,'palline prime',0),

COMP('m3_16',2,'funzioni',
B('Costo taxi: C = 3 + 1,20 × km. Marco paga 16,20 €.')
+'Completa la risoluzione dell\'equazione:',
['11','13,20','16,20'],
[
  {prima:'16,20 = 3 + 1,20 × km → 1,20 × km =',dopo:'.',ok_idx:0},
]),

VF('m3_vf3',2,'dati',
SVG(`
<rect x="20" y="10" width="175" height="30" fill="#6a1b9a"/>
<text x="28" y="30" font-size="11" fill="white" font-weight="bold">Sondaggio studenti: materia preferita</text>
<rect x="20" y="40" width="175" height="110" fill="#f9f9f9" stroke="#bbb" stroke-width="1"/>
<text x="28" y="60" font-size="11" fill="#333">Matematica</text><text x="158" y="60" font-size="11" fill="#333">160</text>
<text x="28" y="80" font-size="11" fill="#333">Scienze</text><text x="158" y="80" font-size="11" fill="#333">120</text>
<text x="28" y="100" font-size="11" fill="#333">Storia</text><text x="158" y="100" font-size="11" fill="#333">80</text>
<text x="28" y="120" font-size="11" fill="#333">Arte</text><text x="158" y="120" font-size="11" fill="#333">40</text>
<text x="28" y="140" font-size="11" fill="#333" font-weight="bold">Totale</text><text x="158" y="140" font-size="11" fill="#333" font-weight="bold">400</text>
`, 215, 160)
+'<strong>Indica V o F:</strong>',
[
  {t:'Il 40% degli studenti preferisce matematica.',ok:'V'},
  {t:'Più della metà preferisce matematica o scienze.',ok:'V'},
  {t:'Arte è preferita da 1/10 degli studenti.',ok:'V'},
]),

SM('m3_17',2,'relazioni',
B('In una gara di tiro con l\'arco, Alessio ottiene: 8, 10, 7, 9, 8, 6, 10, 8, 9, 5.<br>Ha bisogno di media ≥ 8 per qualificarsi.')
+'Quanti punti deve ottenere nell\'11° tiro per raggiungere media esattamente 8?',
['8 punti','10 punti','9 punti','11 punti'],1),

SM('m3_18',2,'funzioni',
SVG(`
<line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="150" x2="185" y2="150" stroke="#555" stroke-width="1.5"/>
<polyline points="30,120 55,90 80,68 105,50 130,35 155,22 175,12" fill="none" stroke="#2e7d32" stroke-width="2.5"/>
<text x="178" y="14" font-size="9" fill="#2e7d32">y = 2x+1</text>
<text x="35" y="165" font-size="9" fill="#555">0</text>
<text x="65" y="165" font-size="9" fill="#555">1</text>
<text x="95" y="165" font-size="9" fill="#555">2</text>
<text x="125" y="165" font-size="9" fill="#555">3</text>
<text x="155" y="165" font-size="9" fill="#555">4</text>
<text x="2" y="13" font-size="9" fill="#555">y</text>
<text x="175" y="157" font-size="9" fill="#555">x</text>
`, 200, 175)
+'La funzione mostrata nel grafico è y = 2x + 1. Qual è il valore di y quando x = 5?',
['9','10','11','12'],2),

RA('m3_19',2,'statistica',
B('Una classe ha 20 studenti con media voti 7,2. Si aggiunge uno studente con voto 9.')
+'Qual è la nuova media? (es. scrivi 7.3)',
7.3,'',0.05),

SM('m3_20',2,'probabilita',
'Si lanciano due dadi. Qual è la probabilità che il <strong>prodotto</strong> dei risultati sia esattamente <strong>12</strong>?',
['1/9','4/36','2/36','3/36'],1),

]});
})();
