window.PROVE_MAT = window.PROVE_MAT || [];
(function(){
const SM=(id,sez,comp,testo,ops,ok)=>({id,sez,tipo:'sm',comp,testo,ops,ok});
const VF=(id,sez,comp,testo,r)=>({id,sez,tipo:'vf',comp,testo,righeVF:r});
const RA=(id,sez,comp,testo,ok_num,unita,tol,s)=>({id,sez,tipo:'ra',comp,testo,ok_num,unita,tolleranza:tol||0,suggerimento:s||''});
const COMP=(id,sez,comp,testo,parole,gaps)=>({id,sez,tipo:'comp',comp,testo,parole,gaps});
const COL=(id,sez,comp,testo,sx,dx,coppie)=>({id,sez,tipo:'col',comp,testo,sx,dx,coppie});
const B=t=>'<div style="margin:8px 0;padding:8px 12px;background:#f3f0fa;border-left:3px solid #6a1b9a;border-radius:0 6px 6px 0;font-size:13px">'+t+'</div>';
const SVG=(c,w,h)=>`<div style="text-align:center;margin:12px 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;max-height:260px;display:inline-block">${c}</svg></div>`;

window.PROVE_MAT.push({id:4, titolo:'Prova 4', domande:[

SM('m4_1',0,'numeri',
B('Luisa non ricorda la combinazione del lucchetto. La combinazione ha 4 cifre. Sa che:<br>• la prima cifra è 3 · la seconda è pari · la terza è 7 o 9 · l\'ultima è 1')
+'Quante combinazioni al massimo deve provare?',
['2','5','10','20'],2),

SM('m4_2',0,'frazioni',
B('Una società investe: 2/5 in ricerca, 1/4 in marketing. Il resto (42 000 €) in formazione.')
+'Qual è il guadagno totale della società?',
['€ 120 000','€ 105 000','€ 168 000','€ 84 000'],1),

RA('m4_3',0,'algebra',
SVG(`
<rect x="20" y="15" width="175" height="120" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2" rx="6"/>
<text x="30" y="40" font-size="12" fill="#333">In una classe:</text>
<text x="30" y="62" font-size="12" fill="#1b5e20">maschi = 3 × femmine</text>
<text x="30" y="84" font-size="12" fill="#c62828">Se aggiungo 4 femmine:</text>
<text x="30" y="106" font-size="12" fill="#c62828">maschi : femmine = 2 : 1</text>
<text x="30" y="128" font-size="12" fill="#555" font-weight="bold">Quanti studenti in totale?</text>
`, 215, 150)
+'Quanti studenti ci sono in totale nella classe originaria?',
16,'studenti',0,'Poni f = femmine; allora 3f = 2(f+4)'),

COMP('m4_4',0,'potenze',
B('Il Sole ha massa ≈ 2 × 10³⁰ kg. La Terra ha massa ≈ 6 × 10²⁴ kg.')
+'Completa:',
['5','6','10','5 o 6'],
[
  {prima:'Il rapporto massa Sole / massa Terra è circa 3,3 × 10 elevato alla',dopo:'.',ok_idx:0},
]),

VF('m4_vf1',0,'algebra',
B('Considera le seguenti affermazioni sulle equazioni e disequazioni.')
+'<strong>Indica V o F:</strong>',
[
  {t:'La soluzione di 2x − 5 = 3 è x = 4.',ok:'V'},
  {t:'L\'equazione x² = 9 ha una sola soluzione.',ok:'F'},
  {t:'Se x > 3 allora 2x > 7.',ok:'V'},
  {t:'La soluzione di x/3 + 1 = 5 è x = 12.',ok:'V'},
]),

RA('m4_5',0,'percentuali',
B('Un\'azienda ha 80 dipendenti. Il 15% lavora part-time. Assumeranno 20 nuovi dipendenti a tempo pieno.')
+'Quale percentuale di part-time ci sarà sul totale dei dipendenti?<br>(arrotonda al numero intero)',
12,'%',0.5),

SM('m4_6',0,'proporzioni',
B('6 lavoratori costruiscono un muro in 8 giorni (8 ore/giorno). Quanti giorni servono a 4 lavoratori che lavorano 6 ore al giorno?')
+'Il numero di giorni necessari è:',
['12','14','16','18'],2),

SM('m4_7',1,'geometria_piana',
SVG(`
<polygon points="100,20 20,170 180,170" fill="#fff3e0" stroke="#e65100" stroke-width="2.5"/>
<line x1="100" y1="20" x2="100" y2="170" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="94" y="14" font-size="11" fill="#333">A</text>
<text x="10" y="180" font-size="11" fill="#333">B</text>
<text x="180" y="180" font-size="11" fill="#333">C</text>
<text x="102" y="100" font-size="11" fill="#c62828">h=?</text>
<text x="35" y="182" font-size="10" fill="#555">10 cm</text>
<text x="135" y="182" font-size="10" fill="#555">10 cm</text>
<text x="55" y="130" font-size="10" fill="#e65100">13 cm</text>
<text x="130" y="130" font-size="10" fill="#e65100">13 cm</text>
`, 210, 195)
+B('Triangolo isoscele: AB = AC = 13 cm, BC = 20 cm.')
+'Quale affermazione sull\'altezza relativa a BC è corretta?',
['h = 5 cm, area = 50 cm²','h = 12 cm, area = 120 cm²','h = 8 cm, area = 80 cm²','h = 10 cm, area = 100 cm²'],1),

RA('m4_8',1,'pitagora',
SVG(`
<line x1="30" y1="20" x2="30" y2="160" stroke="#1565c0" stroke-width="3"/>
<line x1="30" y1="160" x2="160" y2="160" stroke="#555" stroke-width="2"/>
<line x1="30" y1="20" x2="160" y2="160" stroke="#c62828" stroke-width="2.5"/>
<text x="5" y="95" font-size="11" fill="#1565c0">h=?</text>
<text x="85" y="180" font-size="11" fill="#555">12 km</text>
<text x="100" y="85" font-size="11" fill="#c62828">c</text>
<text x="35" y="155" width="10" height="10" fill="none"/>
<rect x="30" y="148" width="12" height="12" fill="none" stroke="#555" stroke-width="1.5"/>
`, 190, 195)
+B('Una barca percorre 9 km verso nord, poi 12 km verso est.')
+'A quanti km è dal punto di partenza?',
15,'km',0.1,'Usa Pitagora: c² = 9² + 12²'),

VF('m4_vf2',1,'geometria',
SVG(`
<polygon points="110,20 30,170 190,170" fill="#e3f2fd" stroke="#1565c0" stroke-width="2.5"/>
<line x1="110" y1="20" x2="110" y2="170" stroke="#1565c0" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="100" y="14" font-size="11" fill="#333">A</text>
<text x="18" y="180" font-size="11" fill="#333">B</text>
<text x="190" y="180" font-size="11" fill="#333">C</text>
<text x="115" y="105" font-size="10" fill="#c62828">h = 8 cm</text>
<text x="50" y="195" font-size="10" fill="#555">6 cm</text>
<text x="155" y="195" font-size="10" fill="#555">6 cm</text>
`, 220, 205)
+B('Piramide a base quadrata: lato di base 6 cm, altezza 8 cm.')
+'<strong>Indica V o F:</strong>',
[
  {t:'Il volume della piramide è 96 cm³.',ok:'V'},
  {t:'L\'apotema della faccia triangolare misura 10 cm.',ok:'V'},
  {t:'L\'area della base è uguale all\'area di una faccia laterale.',ok:'F'},
]),

SM('m4_9',1,'geometria_piana',
SVG(`
<circle cx="110" cy="90" r="70" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
<path d="M110,90 L110,20 A70,70 0 0,1 171,55 Z" fill="#a5d6a7"/>
<text x="138" y="52" font-size="11" fill="#333">60°</text>
<line x1="110" y1="90" x2="171" y2="55" stroke="#2e7d32" stroke-width="1.5"/>
<line x1="110" y1="90" x2="110" y2="20" stroke="#2e7d32" stroke-width="1.5"/>
<text x="113" y="88" font-size="11" fill="#1b5e20">O</text>
<text x="115" y="30" font-size="10" fill="#555">r = 12 cm</text>
`, 220, 180)
+'Il settore circolare colorato ha raggio 12 cm e angolo 60°. (π ≈ 3,14)<br>Quale affermazione è corretta?',
['Area = 75,36 cm²','Area = 150,72 cm²','Area = 25,12 cm²','Area = 452,16 cm²'],0),

RA('m4_10',1,'similitudine',
B('Sul terreno: un palo di 2 m ha ombra di 1,6 m. Vicino c\'è un albero con ombra di 12 m.')
+'Quanto è alto l\'albero in metri?',
15,'m',0.1),

COL('m4_11',1,'geometria_piana',
'Collega ogni figura alla proprietà che la descrive:',
['Quadrato','Rettangolo','Rombo','Trapezio'],
['Almeno una coppia di lati paralleli','4 lati uguali e 4 angoli retti','4 angoli retti, lati opposti uguali','4 lati uguali, angoli non necessariamente retti'],
[2,1,0,3]),

SM('m4_12',1,'misura',
B('Stanza 4,5 m × 3,2 m. Piastrelle quadrate con lato 40 cm (= 0,4 m).')
+'Quante piastrelle intere (senza tagli) ci vogliono al minimo?',
['90','80','100','72'],0),

SM('m4_13',2,'statistica',
SVG(`
<rect x="20" y="10" width="175" height="130" fill="#f9f9f9" stroke="#bbb" stroke-width="1"/>
<rect x="20" y="10" width="175" height="25" fill="#1565c0"/>
<text x="30" y="27" font-size="11" fill="white" font-weight="bold">Voto</text>
<text x="90" y="27" font-size="11" fill="white" font-weight="bold">N° studenti</text>
<text x="30" y="52" font-size="11" fill="#333">6</text><text x="110" y="52" font-size="11" fill="#333">2</text>
<text x="30" y="72" font-size="11" fill="#333">7</text><text x="110" y="72" font-size="11" fill="#333">6</text>
<text x="30" y="92" font-size="11" fill="#333">8</text><text x="110" y="92" font-size="11" fill="#333">8</text>
<text x="30" y="112" font-size="11" fill="#333">9</text><text x="110" y="112" font-size="11" fill="#333">4</text>
<text x="30" y="132" font-size="11" fill="#333" font-weight="bold">Totale</text><text x="110" y="132" font-size="11" fill="#333" font-weight="bold">20</text>
<line x1="20" y1="35" x2="195" y2="35" stroke="#ddd" stroke-width="1"/>
<line x1="20" y1="57" x2="195" y2="57" stroke="#ddd" stroke-width="1"/>
<line x1="20" y1="77" x2="195" y2="77" stroke="#ddd" stroke-width="1"/>
<line x1="20" y1="97" x2="195" y2="97" stroke="#ddd" stroke-width="1"/>
<line x1="20" y1="117" x2="195" y2="117" stroke="#ddd" stroke-width="1"/>
`, 215, 155)
+'Qual è la moda dei voti?',
['6','7','8','9'],2),

SM('m4_14',2,'grafici',
SVG(`
<line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="150" x2="185" y2="150" stroke="#555" stroke-width="1.5"/>
<polyline points="45,145 75,120 105,100 135,70 165,40" fill="none" stroke="#c62828" stroke-width="2.5"/>
<polyline points="45,130 75,140 105,120 135,90 165,65" fill="none" stroke="#1565c0" stroke-width="2.5" stroke-dasharray="6,3"/>
<text x="0" y="30" font-size="8" fill="#c62828">Estivi</text>
<text x="0" y="65" font-size="8" fill="#1565c0">Invern.</text>
<text x="38" y="162" font-size="8" fill="#555">2020</text>
<text x="68" y="162" font-size="8" fill="#555">2021</text>
<text x="98" y="162" font-size="8" fill="#555">2022</text>
<text x="128" y="162" font-size="8" fill="#555">2023</text>
<text x="158" y="162" font-size="8" fill="#555">2024</text>
`, 205, 170)
+'In quale anno le due produzioni si incrociano (sono uguali)?',
['2021','2022','2023','2024'],2),

RA('m4_15',2,'probabilita',
B('Un\'urna con palline numerate da 1 a 20. Si estrae una pallina a caso.')
+'Quante palline con numero primo ci sono? (2,3,5,7,11,13,17,19)',
8,'',0),

COMP('m4_16',2,'funzioni',
B('Il valore di un\'auto: Anno 0 → 20 000 €. Ogni anno perde il 15%.')
+'Completa i valori:',
['17 000','14 450','12 282,50'],
[
  {prima:'Dopo 1 anno il valore è',dopo:'€.',ok_idx:0},
  {prima:'Dopo 2 anni il valore è',dopo:'€.',ok_idx:1},
]),

VF('m4_vf3',2,'dati',
SVG(`
<line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="150" x2="185" y2="150" stroke="#555" stroke-width="1.5"/>
<polyline points="40,140 75,105 110,78 145,55 180,35" fill="none" stroke="#6a1b9a" stroke-width="2.5"/>
<line x1="30" y1="78" x2="185" y2="78" stroke="#ccc" stroke-width="1" stroke-dasharray="4,3"/>
<text x="32" y="77" font-size="9" fill="#555">450</text>
<text x="32" y="108" font-size="9" fill="#555">360</text>
<text x="32" y="143" font-size="9" fill="#555">270</text>
<text x="40" y="163" font-size="8" fill="#555">1</text>
<text x="108" y="163" font-size="8" fill="#555">3</text>
<text x="175" y="163" font-size="8" fill="#555">5 mesi</text>
<text x="2" y="15" font-size="9" fill="#555">€</text>
`, 200, 175)
+B('Il grafico mostra i risparmi mensili accumulati di Marco.')
+'<strong>Indica V o F:</strong>',
[
  {t:'Marco risparmia 90 € al mese.',ok:'V'},
  {t:'Dopo 12 mesi ha accumulato 1 080 €.',ok:'V'},
  {t:'Il grafico mostra una relazione di proporzionalità diretta tra mesi e risparmio.',ok:'V'},
]),

SM('m4_17',2,'relazioni',
B('Paola corre e consuma 60 kcal/km; camminando consuma 30 kcal/km. Oggi ha fatto 10 km totali consumando 480 kcal.')
+'Quanti km ha corso?',
['4 km','5 km','6 km','8 km'],2),

SM('m4_18',2,'statistica',
B('Tempi di 10 corridori (min): 45, 38, 52, 41, 39, 47, 44, 40, 38, 56.')
+'Qual è il range (campo di variazione)?',
['14 min','16 min','18 min','20 min'],2),

RA('m4_19',2,'probabilita',
'Si lancia una moneta 4 volte. Qual è la probabilità di ottenere esattamente 3 teste?<br>Esprimi come n/16 (scrivi solo il numeratore):',
4,'/ 16',0,'Ci sono 4 modi su 16 possibili esiti'),

SM('m4_20',2,'funzioni',
B('Ricavo: R = 5q + 200. Costo: C = 3q + 500. Da quante unità l\'impresa realizza profitto?')
+'Il punto di pareggio (R = C) è:',
['100 unità','150 unità','200 unità','250 unità'],1),

]});
})();
