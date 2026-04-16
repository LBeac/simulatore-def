window.PROVE_MAT = window.PROVE_MAT || [];
(function(){
const SM=(id,sez,comp,testo,ops,ok)=>({id,sez,tipo:'sm',comp,testo,ops,ok});
const VF=(id,sez,comp,testo,r)=>({id,sez,tipo:'vf',comp,testo,righeVF:r});
const RA=(id,sez,comp,testo,ok_num,unita,tol,s)=>({id,sez,tipo:'ra',comp,testo,ok_num,unita,tolleranza:tol||0,suggerimento:s||''});
const COMP=(id,sez,comp,testo,parole,gaps)=>({id,sez,tipo:'comp',comp,testo,parole,gaps});
const COL=(id,sez,comp,testo,sx,dx,coppie)=>({id,sez,tipo:'col',comp,testo,sx,dx,coppie});
const B=t=>'<div style="margin:8px 0;padding:8px 12px;background:#f3f0fa;border-left:3px solid #6a1b9a;border-radius:0 6px 6px 0;font-size:13px">'+t+'</div>';
const SVG=(c,w,h)=>`<div style="text-align:center;margin:12px 0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" style="max-width:100%;max-height:260px;display:inline-block">${c}</svg></div>`;

window.PROVE_MAT.push({id:5, titolo:'Prova 5', domande:[

SM('m5_1',0,'numeri',
SVG(`
<rect x="20" y="15" width="170" height="145" fill="#e3f2fd" stroke="#1565c0" stroke-width="2" rx="6"/>
<text x="30" y="40" font-size="12" fill="#333" font-weight="bold">Lucchetto a 4 cifre</text>
<text x="30" y="62" font-size="12" fill="#555">• 1ª cifra: 3</text>
<text x="30" y="82" font-size="12" fill="#555">• 2ª cifra: pari (0,2,4,6,8)</text>
<text x="30" y="102" font-size="12" fill="#555">• 3ª cifra: 7 oppure 9</text>
<text x="30" y="122" font-size="12" fill="#555">• 4ª cifra: 1</text>
<text x="30" y="148" font-size="12" fill="#c62828">Quante combinazioni?</text>
`, 210, 170)
+'Quante combinazioni al massimo deve provare Luisa?',
['2','5','10','20'],2),

SM('m5_2',0,'frazioni',
B('Una società investe: 2/5 in ricerca, 1/4 in marketing. Il resto è 42 000 €.')
+'Qual è il guadagno totale?',
['€ 120 000','€ 105 000','€ 168 000','€ 84 000'],1),

RA('m5_3',0,'algebra',
B('In una classe: maschi = 3 × femmine. Se si aggiungono 4 femmine, il rapporto diventa 2:1.')
+'Quanti studenti ci sono in totale nella classe originaria?',
16,'studenti',0,'Poni f = femmine: 3f = 2(f+4)'),

SM('m5_4',0,'potenze',
'Massa del Sole: 2 × 10³⁰ kg. Massa della Terra: 6 × 10²⁴ kg.<br>Quante volte la Terra è più piccola del Sole?',
['Circa 3,3 × 10⁵','Circa 3,3 × 10⁶','Circa 8 × 10⁵⁴','Circa 3 × 10⁵'],0),

VF('m5_vf1',0,'algebra',
B('Considera le seguenti affermazioni algebriche.')
+'<strong>Indica V o F:</strong>',
[
  {t:'La soluzione di 2x − 5 = 3 è x = 4.',ok:'V'},
  {t:'L\'equazione x² = 9 ha una sola soluzione.',ok:'F'},
  {t:'Se x > 3 allora 2x > 7 è sempre vero.',ok:'V'},
  {t:'La soluzione di x/3 + 1 = 5 è x = 12.',ok:'V'},
]),

RA('m5_5',0,'percentuali',
B('Un prodotto viene scontato del 30%, poi del 20% sul prezzo già scontato. Il prezzo finale è 56 €.')
+'Qual era il prezzo originale?',
100,'€',0.5,'56 = p × 0,70 × 0,80'),

COMP('m5_6',0,'proporzioni',
B('Ricetta gelato per 6 persone: 400 mL panna, 150 g zucchero, 4 tuorli.')
+'Per 9 persone, completa le quantità:',
['600','225','6'],
[
  {prima:'Panna:',dopo:'mL.',ok_idx:0},
  {prima:'Zucchero:',dopo:'g.',ok_idx:1},
  {prima:'Tuorli:',dopo:'',ok_idx:2},
]),

SM('m5_7',1,'geometria_piana',
SVG(`
<polygon points="20,160 100,20 180,160 140,160 140,80 100,20 60,80 60,160" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2.5"/>
<text x="7" y="170" font-size="10" fill="#333">A</text>
<text x="95" y="15" font-size="10" fill="#333">B</text>
<text x="180" y="170" font-size="10" fill="#333">C</text>
<text x="55" y="170" font-size="10" fill="#333">D</text>
<text x="138" y="170" font-size="10" fill="#333">E</text>
<line x1="20" y1="160" x2="180" y2="160" stroke="#555" stroke-width="1.5"/>
<text x="85" y="105" font-size="10" fill="#1b5e20">?</text>
`, 210, 185)
+B('L\'area del triangolo grigio A (nel quadrato di lato 4 m) misura 8 m².')
+'Quanto misura il perimetro del quadrato?',
['8 m','12 m','16 m','20 m'],2),

RA('m5_8',1,'pitagora',
SVG(`
<line x1="30" y1="20" x2="30" y2="170" stroke="#1565c0" stroke-width="3"/>
<line x1="30" y1="170" x2="170" y2="170" stroke="#555" stroke-width="2"/>
<line x1="30" y1="20" x2="170" y2="170" stroke="#c62828" stroke-width="2.5"/>
<rect x="30" y="158" width="12" height="12" fill="none" stroke="#555" stroke-width="1.5"/>
<text x="4" y="100" font-size="11" fill="#1565c0">h</text>
<text x="95" y="190" font-size="11" fill="#555">12 dm</text>
<text x="108" y="90" font-size="11" fill="#c62828">13 dm</text>
`, 195, 200)
+'Un\'asta lunga 13 dm è appoggiata diagonalmente. La proiezione orizzontale è 12 dm.<br>A quanti dm è alta la punta?',
5,'dm',0.1,'13² − 12² = ?'),

VF('m5_vf2',1,'geometria',
SVG(`
<circle cx="110" cy="90" r="70" fill="#fff9e6" stroke="#e65100" stroke-width="2.5"/>
<path d="M110,90 L110,20 A70,70 0 0,1 171,125 Z" fill="#ffcc80"/>
<text x="115" y="88" font-size="11" fill="#e65100">O</text>
<text x="112" y="20" font-size="10" fill="#333">A</text>
<text x="173" y="128" font-size="10" fill="#333">B</text>
<text x="148" y="48" font-size="10" fill="#333">120°</text>
<line x1="110" y1="90" x2="110" y2="20" stroke="#e65100" stroke-width="1.5"/>
<line x1="110" y1="90" x2="171" y2="125" stroke="#e65100" stroke-width="1.5"/>
`, 220, 180)
+B('Settore circolare con raggio 6 cm e angolo al centro 120°. (π ≈ 3,14)')
+'<strong>Indica V o F:</strong>',
[
  {t:'L\'area del settore è 37,68 cm².',ok:'V'},
  {t:'La corda AB è più lunga del raggio.',ok:'V'},
  {t:'Il settore è esattamente 1/3 del cerchio intero.',ok:'V'},
]),

RA('m5_9',1,'geometria_solida',
SVG(`
<ellipse cx="110" cy="40" rx="60" ry="18" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
<line x1="50" y1="40" x2="50" y2="145" stroke="#1565c0" stroke-width="2"/>
<line x1="170" y1="40" x2="170" y2="145" stroke="#1565c0" stroke-width="2"/>
<ellipse cx="110" cy="145" rx="60" ry="18" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
<line x1="110" y1="40" x2="170" y2="40" stroke="#c62828" stroke-width="2"/>
<text x="135" y="35" font-size="10" fill="#c62828">r = 5</text>
<text x="175" y="96" font-size="11" fill="#1565c0">h = 10</text>
`, 230, 175)
+'Cilindro: r = 5 cm, h = 10 cm. (π ≈ 3,14)<br>Qual è il volume in cm³?',
785,'cm³',1),

SM('m5_10',1,'similitudine',
B('Su una mappa in scala 1:50 000, un lago occupa 6 cm². Qual è l\'area reale in km²?')
+'',
['0,15 km²','1,5 km²','15 km²','150 km²'],0),

COL('m5_11',1,'geometria_solida',
'Collega ogni formula alla grandezza che calcola per il cilindro (r = raggio, h = altezza):',
['Volume','Area base','Area laterale','Area totale'],
['π × r²','2 × π × r × h','π × r² × h','2 × π × r² + 2 × π × r × h'],
[2,0,1,3]),

SM('m5_12',1,'misura',
B('Un recipiente cilindrico (r = 10 cm) contiene acqua fino a 15 cm. Si immerge un cubo di metallo (spigolo 5 cm) che affonda. (π ≈ 3,14)')
+'Di quanto si alza approssimativamente il livello dell\'acqua?',
['Circa 0,04 cm','Circa 0,4 cm','Circa 4 cm','Circa 1 cm'],1),

SM('m5_13',2,'statistica',
SVG(`
<rect x="20" y="15" width="175" height="115" fill="#f5f5f5" stroke="#bbb" stroke-width="1"/>
<rect x="20" y="15" width="175" height="25" fill="#6a1b9a"/>
<text x="28" y="32" font-size="10" fill="white" font-weight="bold">Punteggi tiro con l\'arco (10 tiri)</text>
<text x="28" y="58" font-size="11" fill="#333">8 · 10 · 7 · 9 · 8 · 6 · 10 · 8 · 9 · 5</text>
<line x1="20" y1="65" x2="195" y2="65" stroke="#ddd" stroke-width="1"/>
<text x="28" y="84" font-size="11" fill="#555">Somma = 80, media = 8</text>
<text x="28" y="104" font-size="11" fill="#555">Moda = 8</text>
<text x="28" y="124" font-size="11" fill="#c62828">11° tiro: quale punteggio per media = 8?</text>
`, 215, 145)
+'Quanti punti deve ottenere nell\'11° tiro per media esattamente 8?',
['7 punti','8 punti','10 punti','Non è possibile'],1),

SM('m5_14',2,'grafici',
SVG(`
<line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="150" x2="185" y2="150" stroke="#555" stroke-width="1.5"/>
<polygon points="30,150 60,130 90,110 110,110 130,90 155,40 180,40" fill="rgba(21,101,192,0.15)" stroke="#1565c0" stroke-width="2.5"/>
<text x="32" y="163" font-size="9" fill="#555">0</text>
<text x="55" y="163" font-size="9" fill="#555">30'</text>
<text x="105" y="163" font-size="9" fill="#555">90'</text>
<text x="150" y="163" font-size="9" fill="#555">120'</text>
<text x="175" y="163" font-size="9" fill="#555">t</text>
<text x="2" y="43" font-size="9" fill="#555">90</text>
<text x="2" y="115" font-size="9" fill="#555">v</text>
<text x="170" y="42" font-size="9" fill="#1565c0">km/h</text>
<line x1="18" y1="40" x2="22" y2="40" stroke="#555" stroke-width="1"/>
<line x1="18" y1="110" x2="22" y2="110" stroke="#555" stroke-width="1"/>
`, 205, 175)
+B('Il grafico velocità-tempo mostra: 0-30 min accelerazione, 30-90 min velocità costante 90 km/h, 90-120 min frenata.')
+'Cosa rappresenta l\'area sotto la curva nel grafico velocità-tempo?',
['Il consumo di benzina','La distanza percorsa','L\'accelerazione media','Il tempo totale'],1),

RA('m5_15',2,'probabilita',
B('In una classe di 30 studenti: 18 hanno visto un film, 20 hanno letto un libro, 10 hanno fatto entrambe le cose.')
+'Quanti studenti non hanno fatto né l\'una né l\'altra cosa?',
2,'studenti',0,'Usa il principio di inclusione-esclusione: 18+20−10=28, poi 30−28'),

SM('m5_16',2,'funzioni',
B('La formula dell\'area di un cerchio è A = πr². Se si raddoppia il raggio...')
+'L\'area diventa:',
['Doppia','Tripla','Quadrupla','Dipende dal valore di r'],2),

VF('m5_vf3',2,'dati',
SVG(`
<rect x="20" y="10" width="175" height="30" fill="#1b5e20"/>
<text x="28" y="30" font-size="11" fill="white" font-weight="bold">Conti di risparmio su 1 000 €</text>
<rect x="20" y="40" width="175" height="90" fill="#f9f9f9" stroke="#bbb" stroke-width="1"/>
<text x="28" y="62" font-size="11" fill="#333">Conto A: interesse semplice 3%/anno</text>
<text x="28" y="82" font-size="11" fill="#333">Conto B: interesse composto 2,5%/anno</text>
<line x1="20" y1="67" x2="195" y2="67" stroke="#ddd" stroke-width="1"/>
<text x="28" y="112" font-size="10" fill="#c62828">Dopo 1 anno: A → 1030 €, B → 1025 €</text>
<text x="28" y="128" font-size="10" fill="#c62828">Dopo 10 anni: A → 1300 €, B → 1280,08 €</text>
`, 215, 145)
+'<strong>Indica V o F:</strong>',
[
  {t:'Dopo 1 anno, il Conto A rende di più del Conto B.',ok:'V'},
  {t:'Dopo 10 anni con interesse semplice al 3%, si ottengono esattamente 1 300 €.',ok:'V'},
  {t:'Con l\'interesse composto, dopo molti anni il Conto B supererà sempre il Conto A.',ok:'V'},
]),

SM('m5_17',2,'relazioni',
B('Paola corre (60 kcal/km) e cammina (30 kcal/km). Totale: 10 km, 480 kcal.')
+'Quanti km ha corso?',
['4 km','5 km','6 km','8 km'],2),

SM('m5_18',2,'statistica',
B('Produzione settimanale (pezzi): 840, 920, 780, 960, 890, 850, 830.')
+'Il direttore dice: "La media supera 870". Ha ragione?',
['Sì, la media è circa 867 pezzi','No, la media è 867 pezzi','Sì, la media è 877 pezzi','No, la media è 870 pezzi'],2),

RA('m5_19',2,'funzioni',
SVG(`
<line x1="30" y1="10" x2="30" y2="155" stroke="#555" stroke-width="1.5"/>
<line x1="25" y1="150" x2="185" y2="150" stroke="#555" stroke-width="1.5"/>
<text x="2" y="15" font-size="9" fill="#555">y</text>
<text x="180" y="158" font-size="9" fill="#555">x</text>
<polyline points="45,60 70,20 110,10 150,30 175,75" fill="none" stroke="#6a1b9a" stroke-width="2.5"/>
<circle cx="70" cy="20" r="4" fill="#6a1b9a"/>
<circle cx="150" cy="30" r="4" fill="#6a1b9a"/>
<text x="60" y="15" font-size="9" fill="#333">massimo</text>
<text x="32" y="150" font-size="9" fill="#555">0</text>
<line x1="110" y1="145" x2="110" y2="155" stroke="#555" stroke-width="1"/>
<text x="105" y="163" font-size="9" fill="#555">2</text>
`, 200, 175)
+B('Il grafico mostra una parabola y = −x² + 4x − 3. Trova i due zeri (dove y = 0).<br>Scrivi il valore più piccolo dei due zeri:',),
1,'',0,'Risolvi −x² + 4x − 3 = 0, le soluzioni sono x=1 e x=3'),

SM('m5_20',2,'probabilita',
B('Un test ha 20 domande a risposta multipla con 4 opzioni ciascuna. Uno studente risponde a caso a tutte le domande.')
+'Qual è il numero atteso di risposte corrette?',
['4','5','8','10'],1),

]});
})();
