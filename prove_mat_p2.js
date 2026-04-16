window.PROVE_MAT = window.PROVE_MAT || [];
(function(){
const SM=(id,sez,comp,testo,ops,ok)=>({id,sez,tipo:'sm',comp,testo,ops,ok});
const VF=(id,sez,comp,testo,righeVF)=>({id,sez,tipo:'vf',comp,testo,righeVF});
const RA=(id,sez,comp,testo,ok_num,unita,tol,s)=>({id,sez,tipo:'ra',comp,testo,ok_num,unita,tolleranza:tol||0,suggerimento:s||''});
const COMP=(id,sez,comp,testo,parole,gaps)=>({id,sez,tipo:'comp',comp,testo,parole,gaps});
const COL=(id,sez,comp,testo,sx,dx,coppie)=>({id,sez,tipo:'col',comp,testo,sx,dx,coppie});
const B=t=>'<div style="margin:8px 0;padding:8px 12px;background:#f3f0fa;border-left:3px solid #6a1b9a;border-radius:0 6px 6px 0;font-size:13px">'+t+'</div>';
const SVG=(c,w,h)=>`<div style="text-align:center;margin:12px 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;max-height:260px;display:inline-block">${c}</svg></div>`;

window.PROVE_MAT.push({id:2, titolo:'Prova 2', domande:[

SM('m2_1',0,'numeri',
B('In una scuola di 450 studenti, il 60% sono femmine. Di queste, il 30% partecipa al coro.')
+'Quante studentesse partecipano al coro?',
['81','90','135','270'],0),

SM('m2_2',0,'frazioni',
'Quale delle seguenti frazioni è compresa tra ½ e ⅔?',
['³⁄₈','⁵⁄₉','⁴⁄₅','⁷⁄₈'],1),

RA('m2_3',0,'percentuali',
B('Un prodotto viene scontato del 30%, poi ulteriore sconto del 20% sul prezzo già scontato. Il prezzo finale è 56 €.')
+'Qual era il prezzo originale?',
100,'€',0.5,'56 = prezzo × (1-0.30) × (1-0.20)'),

SM('m2_4',0,'algebra',
B('La somma di tre numeri interi consecutivi è 93.')
+'Quali sono i tre numeri?',
['30, 31, 32','31, 32, 33','29, 31, 33','28, 32, 33'],0),

VF('m2_vf1',0,'numeri',
B('Considera le affermazioni sugli interi a e b.')
+'<strong>Indica V o F per ciascuna affermazione:</strong>',
[
  {t:'Se a è pari e b è pari, allora a + b è sempre pari.',ok:'V'},
  {t:'Se a è dispari e b è dispari, allora a × b è sempre pari.',ok:'F'},
  {t:'Se a è multiplo di 6 e b è multiplo di 4, allora a × b è multiplo di 12.',ok:'V'},
  {t:'Se a + b è dispari, uno dei due è pari e l\'altro dispari.',ok:'V'},
]),

RA('m2_5',0,'potenze',
'Il pianeta Terra dista dal Sole circa 1,5 × 10⁸ km. La luce percorre 3 × 10⁵ km al secondo.<br>Quanti secondi (circa) impiega la luce a raggiungere la Terra?',
500,'s',5,'Dividi 1,5 × 10⁸ per 3 × 10⁵'),

COMP('m2_6',0,'algebra',
SVG(`
<rect x="20" y="20" width="180" height="110" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="6"/>
<text x="30" y="45" font-size="13" fill="#333">Numero misterioso: <tspan font-weight="bold">n</tspan></text>
<text x="30" y="70" font-size="12" fill="#555">• È un multiplo di 6</text>
<text x="30" y="90" font-size="12" fill="#555">• 30 &lt; n &lt; 50</text>
<text x="30" y="110" font-size="12" fill="#555">• La cifra delle unità è 6</text>
`, 220, 145)
+'Completa la soluzione del rompicapo:',
['36','42','48','54'],
[
  {prima:'I multipli di 6 tra 30 e 50 sono: 36, 42 e 48. Il numero con le unità 6 è',dopo:'.',ok_idx:0},
]),

SM('m2_7',1,'geometria_piana',
SVG(`
<rect x="20" y="20" width="160" height="100" fill="#fff9e6" stroke="#e65100" stroke-width="2"/>
<line x1="20" y1="120" x2="180" y2="20" stroke="#e65100" stroke-width="1.5" stroke-dasharray="6,3"/>
<text x="28" y="135" font-size="11" fill="#555">105 m</text>
<text x="188" y="75" font-size="11" fill="#555">68 m</text>
<text x="55" y="75" font-size="12" fill="#e65100" font-weight="bold">Campo da calcio</text>
<text x="80" y="18" font-size="10" fill="#c62828">d = ?</text>
`, 215, 145)
+B('Campo da calcio: 105 m × 68 m. (π non serve)')
+'Quanto misura la diagonale del campo? (arrotonda al metro)',
['124 m','126 m','128 m','175 m'],1),

RA('m2_8',1,'geometria_piana',
SVG(`
<circle cx="100" cy="90" r="70" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2.5"/>
<line x1="30" y1="90" x2="170" y2="90" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="90" y="88" font-size="12" fill="#2e7d32">r = 33 cm</text>
<line x1="100" y1="90" x2="170" y2="90" stroke="#c62828" stroke-width="2.5"/>
<text x="155" y="105" font-size="11" fill="#c62828">33</text>
`, 210, 180)
+'Una ruota di bicicletta ha diametro <strong>66 cm</strong>. (π ≈ 3,14)<br>Quanti <strong>cm</strong> percorre la bicicletta in 50 giri? (scrivi il numero intero)',
10362,'cm',2,'Circonferenza = π × d, poi moltiplica per 50'),

VF('m2_vf2',1,'geometria',
SVG(`
<polygon points="30,170 110,20 190,170" fill="#fff3e0" stroke="#e65100" stroke-width="2.5"/>
<line x1="110" y1="20" x2="110" y2="170" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="35" y="188" font-size="11" fill="#333">B</text>
<text x="104" y="15" font-size="11" fill="#333">A</text>
<text x="188" y="188" font-size="11" fill="#333">C</text>
<text x="112" y="100" font-size="11" fill="#c62828">h</text>
<text x="65" y="188" font-size="10" fill="#555">12 cm</text>
<text x="150" y="188" font-size="10" fill="#555">12 cm</text>
`, 220, 200)
+B('Triangolo isoscele ABC: AB = AC = 13 cm, BC = 24 cm.')
+'<strong>Indica V o F:</strong>',
[
  {t:'L\'altezza relativa a BC misura 5 cm.',ok:'V'},
  {t:'L\'area del triangolo ABC è 60 cm².',ok:'V'},
  {t:'Il triangolo ABC è anche rettangolo.',ok:'F'},
]),

SM('m2_9',1,'geometria_solida',
SVG(`
<ellipse cx="110" cy="40" rx="70" ry="20" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
<line x1="40" y1="40" x2="40" y2="150" stroke="#1565c0" stroke-width="2"/>
<line x1="180" y1="40" x2="180" y2="150" stroke="#1565c0" stroke-width="2"/>
<ellipse cx="110" cy="150" rx="70" ry="20" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
<line x1="110" y1="40" x2="180" y2="40" stroke="#c62828" stroke-width="2"/>
<text x="140" y="35" font-size="11" fill="#c62828">r = 5 cm</text>
<text x="183" y="100" font-size="11" fill="#1565c0">h = 10 cm</text>
`, 230, 175)
+'Un cilindro ha raggio <strong>5 cm</strong> e altezza <strong>10 cm</strong>. (π ≈ 3,14)<br>Quale delle seguenti informazioni è corretta?',
['Volume = 785 cm³ e area totale = 471 cm²','Volume = 785 cm³ e area laterale ≈ 314 cm²','Volume = 500 cm³ e area totale ≈ 471 cm²','Volume = 1570 cm³'],1),

RA('m2_10',1,'similitudine',
B('Una persona alta 1,70 m proietta un\'ombra di 1,36 m. Un albero vicino proietta un\'ombra di 8 m.')
+'Quanti metri è alto l\'albero?',
10,'m',0.1,'Usa la proporzione: altezza/ombra è la stessa per entrambi'),

COL('m2_11',1,'geometria_solida',
'Collega ogni solido alla formula del suo volume:',
['Cubo','Cilindro','Parallelepipedo','Piramide a base quadrata'],
['l × h × p','(1/3) × l² × h','l³','π × r² × h'],
[2,3,0,1]),

SM('m2_12',1,'geometria_piana',
'Un settore circolare ha raggio 12 cm e angolo al centro 60°. (π ≈ 3,14)<br>Qual è l\'area del settore?',
['75,36 cm²','150,72 cm²','25,12 cm²','452,16 cm²'],0),

SM('m2_13',2,'statistica',
SVG(`
<line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="150" x2="185" y2="150" stroke="#555" stroke-width="1.5"/>
<rect x="40" y="90" width="22" height="60" fill="#1565c0"/>
<rect x="70" y="70" width="22" height="80" fill="#1565c0"/>
<rect x="100" y="110" width="22" height="40" fill="#1565c0"/>
<rect x="130" y="50" width="22" height="100" fill="#1565c0"/>
<rect x="160" y="80" width="22" height="70" fill="#1565c0"/>
<text x="40" y="165" font-size="9" fill="#555">L M</text><text x="70" y="165" font-size="9" fill="#555">M A</text>
<text x="100" y="165" font-size="9" fill="#555">M E</text><text x="130" y="165" font-size="9" fill="#555">G I</text>
<text x="160" y="165" font-size="9" fill="#555">L U</text>
<text x="42" y="85" font-size="8" fill="white">120</text>
<text x="72" y="65" font-size="8" fill="white">150</text>
<text x="102" y="105" font-size="8" fill="white">80</text>
<text x="132" y="45" font-size="8" fill="white">180</text>
<text x="162" y="75" font-size="8" fill="white">130</text>
`, 210, 175)
+B('Visitatori mensili: Lug 120, Ago 150, Set 80, Ott 180, Nov 130')
+'Qual è il <strong>mese</strong> con la crescita percentuale maggiore rispetto al mese precedente?',
['Da luglio ad agosto','Da agosto a settembre','Da settembre a ottobre','Da ottobre a novembre'],2),

SM('m2_14',2,'grafici',
SVG(`
<line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="150" x2="185" y2="150" stroke="#555" stroke-width="1.5"/>
<polyline points="45,140 75,110 105,90 135,60 165,30" fill="none" stroke="#c62828" stroke-width="2.5"/>
<polyline points="45,120 75,130 105,105 135,80 165,70" fill="none" stroke="#1565c0" stroke-width="2.5" stroke-dasharray="6,3"/>
<text x="167" y="28" font-size="9" fill="#c62828">— Estivi</text>
<text x="167" y="68" font-size="9" fill="#1565c0">-- Invernali</text>
<text x="38" y="165" font-size="9" fill="#555">2020</text>
<text x="68" y="165" font-size="9" fill="#555">2021</text>
<text x="98" y="165" font-size="9" fill="#555">2022</text>
<text x="128" y="165" font-size="9" fill="#555">2023</text>
<text x="158" y="165" font-size="9" fill="#555">2024</text>
`, 210, 180)
+B('Il grafico mostra la produzione di scarpe estive (linea rossa) e invernali (linea tratteggiata blu) dal 2020 al 2024.')
+'In quale anno le due produzioni sono più vicine tra loro?',
['2020','2021','2022','2024'],3),

RA('m2_15',2,'probabilita',
B('Un\'urna contiene 5 palline bianche e 3 nere. Si estraggono 2 palline senza rimettere la prima.')
+'Qual è il numero di esiti favorevoli (entrambe bianche) su 56 totali?<br>(Es. scrivi solo il numero del numeratore della probabilità ×56)',
20,'/ 56',0,'5/8 × 4/7 = 20/56'),

SM('m2_16',2,'funzioni',
B('Una tariffa telefonica: 5 € fisso + 0,10 € al minuto. Luca spende 11,50 € in un mese.')
+'Quanti minuti ha chiamato?',
['55','65','100','115'],1),

VF('m2_vf3',2,'dati',
SVG(`
<rect x="20" y="10" width="175" height="25" fill="#1565c0"/>
<text x="28" y="27" font-size="10" fill="white" font-weight="bold">Trasporto scolastico (30 alunni)</text>
<rect x="20" y="35" width="175" height="110" fill="#f5f5f5" stroke="#bbb" stroke-width="1"/>
<text x="28" y="52" font-size="11" fill="#333">Autobus</text><text x="150" y="52" font-size="11" fill="#333">12 (40%)</text>
<text x="28" y="72" font-size="11" fill="#333">Bicicletta</text><text x="150" y="72" font-size="11" fill="#333">8</text>
<text x="28" y="92" font-size="11" fill="#333">A piedi</text><text x="150" y="92" font-size="11" fill="#333">7</text>
<text x="28" y="112" font-size="11" fill="#333">Auto</text><text x="150" y="112" font-size="11" fill="#333">3</text>
<line x1="20" y1="35" x2="195" y2="35" stroke="#bbb" stroke-width="1"/>
<line x1="20" y1="57" x2="195" y2="57" stroke="#ddd" stroke-width="1"/>
<line x1="20" y1="77" x2="195" y2="77" stroke="#ddd" stroke-width="1"/>
<line x1="20" y1="97" x2="195" y2="97" stroke="#ddd" stroke-width="1"/>
`, 215, 155)
+'<strong>Indica V o F:</strong>',
[
  {t:'Il 40% degli studenti viene in autobus.',ok:'V'},
  {t:'Più di 1/4 degli studenti usa la bicicletta.',ok:'F'},
  {t:'Meno del 10% degli studenti viene in auto.',ok:'V'},
]),

SM('m2_17',2,'relazioni',
B('Formula IMC: peso (kg) ÷ altezza² (m). Una persona pesa 70 kg, è alta 1,75 m.')
+'Qual è il suo IMC (arrotondato a 1 decimale)?',
['22,9','24,5','28,6','40,0'],0),

RA('m2_18',2,'statistica',
B('La media di 10 studenti è 7,4. Dopo una correzione, un voto sale da 6 a 8.')
+'Qual è la nuova media (arrotondato a 1 decimale)?',
7.6,'',0.05,'(7,4 × 10 − 6 + 8) ÷ 10'),

SM('m2_19',2,'probabilita',
'In un torneo a eliminazione diretta partecipano <strong>16 squadre</strong>.<br>Quante partite si giocano in totale?',
['8','15','16','32'],1),

SM('m2_20',2,'funzioni',
B('Marco risparmia ogni mese una somma fissa. Dopo 3 mesi ha 270 €, dopo 7 mesi ha 630 €.')
+'Quanti euro risparmia al mese?',
['70 €','80 €','90 €','100 €'],2),

]});
})();
