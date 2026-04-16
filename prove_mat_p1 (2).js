// PROVE MATEMATICA — Prova 1 · Grado 8 · 90 min
// Tipologie: SM, VF, RA, COMP, COL + figure SVG inline
window.PROVE_MAT = window.PROVE_MAT || [];
(function(){
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops,ok});
const VF = (id,sez,comp,testo,righeVF) => ({id,sez,tipo:'vf',comp,testo,righeVF});
const RA = (id,sez,comp,testo,ok_num,unita,tol,suggerimento) => ({id,sez,tipo:'ra',comp,testo,ok_num,unita,tolleranza:tol||0,suggerimento:suggerimento||''});
const COMP = (id,sez,comp,testo,parole,gaps) => ({id,sez,tipo:'comp',comp,testo,parole,gaps});
const COL = (id,sez,comp,testo,sx,dx,coppie) => ({id,sez,tipo:'col',comp,testo,sx,dx,coppie});
const B = t => '<div style="margin:8px 0;padding:8px 12px;background:#f3f0fa;border-left:3px solid #6a1b9a;border-radius:0 6px 6px 0;font-size:13px">'+t+'</div>';
const SVG = (content, w, h) => `<div style="text-align:center;margin:12px 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;max-height:260px;display:inline-block">${content}</svg></div>`;

window.PROVE_MAT.push({id:1, titolo:'Prova 1', domande:[

// ════ SEZ A – NUMERI E ALGEBRA ════

SM('m1_1',0,'numeri',
B('Una fabbrica produce <strong>1 500 pezzi al giorno</strong>, di cui il <strong>4%</strong> risultano difettosi.')
+'Quanti pezzi difettosi produce in una settimana lavorativa di 5 giorni?',
['60','150','300','375'],2),

SM('m1_2',0,'frazioni',
'Marta divide una torta in 12 fette. Mangia <sup>1</sup>/<sub>4</sub> sabato e <sup>1</sup>/<sub>3</sub> domenica.<br>Quante fette le restano?',
['3','4','5','6'],1),

RA('m1_3',0,'percentuali',
B('Saldi: prima sconto del 20%, poi ulteriore 10% sul prezzo già scontato.')
+'Un giubbotto costa originariamente <strong>90 €</strong>. Qual è il prezzo finale?',
64.8,'€',0.05,'Calcola il 20% di 90, sottrai, poi calcola il 10% e sottrai di nuovo'),

SM('m1_4',0,'algebra',
'Quale delle seguenti affermazioni è corretta?',
['2⁵ = 10','(−3)² = −9','10³ = 1 000','3² + 4² = (3+4)²'],2),

VF('m1_vf1',0,'numeri',
B('Considera i numeri: √9, −2,5, 0, ³⁄₄, −√7')
+'<strong>Indica per ogni affermazione se è vera (V) o falsa (F):</strong>',
[
  {t:'Tra questi numeri, quelli interi sono esattamente due.',ok:'V'},
  {t:'Il numero √7 è razionale perché è una radice quadrata.',ok:'F'},
  {t:'Tutti i numeri razionali dell\'elenco si possono scrivere come frazioni.',ok:'V'},
  {t:'La somma di tutti e cinque i numeri è positiva.',ok:'F'},
]),

SM('m1_5',0,'algebra',
'Un numero moltiplicato per 3 e diminuito di 7 dà lo stesso risultato del numero aumentato di 9. Qual è il numero?',
['7','8','9','10'],1),

COMP('m1_6',0,'proporzioni',
B('Per produrre formaggio servono 10 litri di latte per ogni kg.')
+'Completa le frasi con il numero corretto:',
['35','3,5','350','0,35'],
[
  {prima:'Per produrre 3,5 kg di formaggio servono',dopo:'litri di latte.',ok_idx:0},
  {prima:'Con 7 litri di latte si producono',dopo:'kg di formaggio.',ok_idx:1},
]),

// ════ SEZ B – GEOMETRIA E MISURA ════

SM('m1_7',1,'geometria_piana',
SVG(`
<rect x="10" y="10" width="160" height="110" fill="#e8f4e8" stroke="#2e7d32" stroke-width="2"/>
<rect x="112" y="70" width="58" height="50" fill="white" stroke="#2e7d32" stroke-width="2" stroke-dasharray="5,3"/>
<text x="10" y="140" font-size="11" fill="#333">20 m</text>
<text x="175" y="65" font-size="11" fill="#333">15 m</text>
<text x="115" y="155" font-size="10" fill="#888">8 m</text>
<text x="190" y="100" font-size="10" fill="#888">5 m</text>
<text x="45" y="55" font-size="12" fill="#1b5e20" font-weight="bold">Prato</text>
<text x="125" y="100" font-size="9" fill="#999">tagliato</text>
<path d="M10 150 L170 150" stroke="#555" stroke-width="1" marker-end="url(#arr)"/>
<path d="M200 10 L200 120" stroke="#555" stroke-width="1" marker-end="url(#arr)"/>
`, 220, 165)
+B('Il prato di una scuola ha forma di L: rettangolo 20m×15m a cui è stato tolto un angolo rettangolo 8m×5m.')
+'Qual è l\'area del prato?',
['300 m²','260 m²','340 m²','240 m²'],1),

RA('m1_8',1,'pitagora',
SVG(`
<line x1="20" y1="20" x2="20" y2="150" stroke="#1565c0" stroke-width="3"/>
<line x1="20" y1="150" x2="110" y2="150" stroke="#555" stroke-width="2"/>
<line x1="20" y1="20" x2="110" y2="150" stroke="#c62828" stroke-width="3"/>
<text x="4" y="90" font-size="12" fill="#1565c0">h=?</text>
<text x="55" y="170" font-size="12" fill="#555">3 m</text>
<text x="75" y="80" font-size="12" fill="#c62828">5 m</text>
<rect x="20" y="140" width="10" height="10" fill="none" stroke="#555" stroke-width="1.5"/>
`, 140, 185)
+'Una scala lunga <strong>5 m</strong> è appoggiata a un muro. La base è a <strong>3 m</strong> dal muro.<br>A quanti metri tocca il muro?',
4,'m',0.05,'Usa il Teorema di Pitagora: c² = a² + b²'),

VF('m1_vf2',1,'geometria',
SVG(`
<rect x="30" y="20" width="120" height="80" fill="#e3f2fd" stroke="#1565c0" stroke-width="2.5"/>
<text x="25" y="115" font-size="11" fill="#333">6 cm</text>
<text x="155" y="65" font-size="11" fill="#333">4 cm</text>
<path d="M30 20 L30 15 M150 20 L150 15 M27 15 L153 15" stroke="#555" stroke-width="1"/>
<path d="M155 20 L160 20 M160 100 L155 100 M160 17 L160 103" stroke="#555" stroke-width="1"/>
<text x="60" y="65" font-size="11" fill="#1565c0">h = 5 cm</text>
`, 200, 130)
+B('Il parallelepipedo ha: lunghezza 6 cm, larghezza 4 cm, altezza 5 cm.')
+'<strong>Indica V o F per ciascuna affermazione:</strong>',
[
  {t:'Il volume del parallelepipedo è 120 cm³.',ok:'V'},
  {t:'La superficie totale del parallelepipedo è 148 cm².',ok:'V'},
  {t:'La diagonale spaziale misura esattamente 9 cm.',ok:'F'},
]),

SM('m1_9',1,'geometria_piana',
SVG(`
<polygon points="100,20 20,160 180,160" fill="#fff9e6" stroke="#e65100" stroke-width="2.5"/>
<text x="90" y="15" font-size="11" fill="#333">A</text>
<text x="8" y="170" font-size="11" fill="#333">B</text>
<text x="183" y="170" font-size="11" fill="#333">C</text>
<text x="78" y="105" font-size="11" fill="#e65100">x</text>
<text x="38" y="150" font-size="10" fill="#555">2x</text>
<text x="145" y="150" font-size="10" fill="#555">3x</text>
`, 200, 185)
+'In un triangolo, gli angoli sono in rapporto <strong>1:2:3</strong>. Qual è la misura dell\'angolo maggiore?',
['30°','60°','90°','120°'],2),

RA('m1_10',1,'misura',
B('Bolletta luce: consumo 3,6 kWh/giorno, costo 0,25 € per kWh.')
+'Quanto si spende in un mese di <strong>30 giorni</strong>?',
27,'€',0.01),

COL('m1_11',1,'geometria_piana',
'Collega ogni formula all\'area che calcola:',
['b × h','(b × h) ÷ 2','(a + b) ÷ 2 × h','π × r²'],
['Area del trapezio','Area del triangolo','Area del cerchio','Area del rettangolo/parallelogramma'],
[3,1,0,2]),

SM('m1_12',1,'similitudine',
B('In una carta geografica in scala 1 : 250 000, due città distano 8 cm.')
+'Qual è la distanza reale in km?',
['2 km','20 km','200 km','2 000 km'],1),

// ════ SEZ C – DATI, PREVISIONI E FUNZIONI ════

SM('m1_13',2,'statistica',
SVG(`
<rect x="30" y="20" width="160" height="100" fill="#f5f5f5" stroke="#999" stroke-width="1"/>
<line x1="30" y1="120" x2="190" y2="120" stroke="#555" stroke-width="1.5"/>
<line x1="30" y1="20" x2="30" y2="120" stroke="#555" stroke-width="1.5"/>
<rect x="50" y="50" width="22" height="70" fill="#1565c0"/>
<rect x="85" y="35" width="22" height="85" fill="#1565c0"/>
<rect x="120" y="60" width="22" height="60" fill="#1565c0"/>
<rect x="155" y="45" width="22" height="75" fill="#1565c0"/>
<text x="52" y="135" font-size="9" fill="#555">Gen</text>
<text x="87" y="135" font-size="9" fill="#555">Feb</text>
<text x="121" y="135" font-size="9" fill="#555">Mar</text>
<text x="155" y="135" font-size="9" fill="#555">Apr</text>
<text x="56" y="46" font-size="9" fill="white">320</text>
<text x="91" y="31" font-size="9" fill="white">415</text>
<text x="126" y="56" font-size="9" fill="white">290</text>
<text x="160" y="41" font-size="9" fill="white">375</text>
<text x="5" y="80" font-size="9" fill="#555" transform="rotate(-90,15,80)">presenze</text>
`, 210, 145)
+B('Presenze a teatro: Gen 320, Feb 415, Mar 290, Apr 375.')
+'Qual è la media mensile?',
['350','360','365','400'],1),

RA('m1_14',2,'probabilita',
SVG(`
<circle cx="100" cy="90" r="70" fill="#fff8e1" stroke="#f57c00" stroke-width="2"/>
<path d="M100,90 L100,20 A70,70 0 0,1 161,55 Z" fill="#ef9a9a"/>
<path d="M100,90 L161,55 A70,70 0 0,1 161,125 Z" fill="#90caf9"/>
<path d="M100,90 L161,125 A70,70 0 0,1 100,160 Z" fill="#a5d6a7"/>
<path d="M100,90 L100,160 A70,70 0 0,1 39,125 Z" fill="#ce93d8"/>
<path d="M100,90 L39,125 A70,70 0 0,1 39,55 Z" fill="#90caf9"/>
<path d="M100,90 L39,55 A70,70 0 0,1 100,20 Z" fill="#ef9a9a"/>
<text x="120" y="45" font-size="10" fill="#333">rosse(4)</text>
<text x="145" y="90" font-size="10" fill="#333">blu(3)</text>
<text x="120" y="140" font-size="10" fill="#333">gialle(2)</text>
<text x="30" y="160" font-size="10" fill="#333">verde(1)</text>
`, 210, 175)
+B('Sacchetto con 4 palline rosse, 3 blu, 2 gialle, 1 verde (10 totali).')
+'Qual è la probabilità (come frazione) di estrarne una <strong>non rossa</strong>? Scrivi il numeratore (su 10):',
6,'/ 10',0),

SM('m1_15',2,'funzioni',
SVG(`
<line x1="20" y1="140" x2="180" y2="140" stroke="#555" stroke-width="1.5"/>
<line x1="20" y1="10" x2="20" y2="145" stroke="#555" stroke-width="1.5"/>
<polyline points="30,120 60,105 90,90 120,75 150,60 175,47" fill="none" stroke="#c62828" stroke-width="2.5"/>
<text x="25" y="155" font-size="10" fill="#555">0</text>
<text x="165" y="155" font-size="10" fill="#555">t (ore)</text>
<text x="2" y="13" font-size="10" fill="#555">h(cm)</text>
<text x="25" y="118" font-size="9" fill="#555">24</text>
<text x="25" y="48" font-size="9" fill="#555">12</text>
<line x1="18" y1="115" x2="22" y2="115" stroke="#555" stroke-width="1"/>
<line x1="18" y1="45" x2="22" y2="45" stroke="#555" stroke-width="1"/>
`, 200, 165)
+B('Il grafico mostra l\'altezza di una candela nel tempo. A t=0 è alta 24 cm.')
+'Quale formula esprime l\'altezza <em>h</em> in cm dopo <em>t</em> ore?',
['h = 24 + 1,5t','h = 1,5t','h = 24 − 1,5t','h = t − 24'],2),

VF('m1_vf3',2,'dati',
SVG(`
<rect x="20" y="10" width="165" height="25" fill="#6a1b9a"/>
<text x="30" y="27" font-size="11" fill="white" font-weight="bold">Mese</text>
<text x="115" y="27" font-size="11" fill="white" font-weight="bold">Vendite (k)</text>
<rect x="20" y="35" width="165" height="22" fill="#f3e5f5"/>
<text x="30" y="51" font-size="11" fill="#333">Gennaio</text><text x="150" y="51" font-size="11" fill="#333">12</text>
<rect x="20" y="57" width="165" height="22" fill="white"/>
<text x="30" y="73" font-size="11" fill="#333">Febbraio</text><text x="150" y="73" font-size="11" fill="#333">9</text>
<rect x="20" y="79" width="165" height="22" fill="#f3e5f5"/>
<text x="30" y="95" font-size="11" fill="#333">Marzo</text><text x="150" y="95" font-size="11" fill="#333">15</text>
<rect x="20" y="101" width="165" height="22" fill="white"/>
<text x="30" y="117" font-size="11" fill="#333">Aprile</text><text x="150" y="117" font-size="11" fill="#333">18</text>
<rect x="20" y="10" width="165" height="113" fill="none" stroke="#9e9e9e" stroke-width="1"/>
`, 210, 135)
+'<strong>Indica V o F per ciascuna affermazione:</strong>',
[
  {t:'La media mensile è 13 500 pezzi.',ok:'V'},
  {t:'Le vendite di marzo sono aumentate del 25% rispetto a febbraio.',ok:'F'},
  {t:'Le vendite di aprile sono il 50% in più di quelle di gennaio.',ok:'V'},
]),

SM('m1_16',2,'relazioni',
B('Il costo di un taxi: C = 3 + 1,20 × km')
+'Marco paga <strong>16,20 €</strong>. Quanti km ha percorso?',
['9 km','10 km','11 km','13,5 km'],2),

SM('m1_17',2,'probabilita',
'Si lanciano <strong>due dadi</strong> a 6 facce. Qual è la probabilità che la somma sia <strong>7</strong>?',
['1/6','5/36','7/36','1/12'],0),

RA('m1_18',2,'statistica',
B('In una classe di 25 studenti: 40% fa sport, 28% segue musica, 16% fa entrambe.')
+'Quanti studenti <strong>non fanno né sport né musica</strong>?',
4,'studenti',0),

SM('m1_19',2,'funzioni',
SVG(`
<line x1="20" y1="150" x2="180" y2="150" stroke="#555" stroke-width="1.5" marker-end="url(#a)"/>
<line x1="20" y1="10" x2="20" y2="155" stroke="#555" stroke-width="1.5" marker-end="url(#b)"/>
<polyline points="30,140 65,110 100,80 135,50 165,27" fill="none" stroke="#1565c0" stroke-width="2.5"/>
<circle cx="30" cy="140" r="3" fill="#1565c0"/>
<circle cx="65" cy="110" r="3" fill="#1565c0"/>
<circle cx="100" cy="80" r="3" fill="#1565c0"/>
<text x="28" y="163" font-size="9" fill="#555">1</text>
<text x="63" y="163" font-size="9" fill="#555">2</text>
<text x="98" y="163" font-size="9" fill="#555">3</text>
<text x="163" y="163" font-size="9" fill="#555">5</text>
<text x="170" y="157" font-size="10" fill="#555">mesi</text>
<text x="22" y="143" font-size="9" fill="#555">270</text>
<text x="22" y="113" font-size="9" fill="#555">360</text>
<text x="22" y="83" font-size="9" fill="#555">450</text>
<text x="2" y="13" font-size="9" fill="#555">€</text>
`, 200, 175)
+B('Marco risparmia ogni mese una somma fissa. Il grafico mostra il risparmio accumulato.')
+'Quanti euro risparmia al mese?',
['70 €','80 €','90 €','100 €'],2),

SM('m1_20',2,'statistica',
B('La media di 4 numeri è 15. Tre di essi sono 12, 18 e 14.')
+'Qual è il quarto numero?',
['14','16','18','15'],1),

]});
})();
