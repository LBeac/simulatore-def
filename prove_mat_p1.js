// ══════════════════════════════════════════════════════
//  PROVE MATEMATICA — Prova 1
//  30 domande · 90 minuti · Grado 8
//  Sezione A: Numeri e Algebra (10 dom.)
//  Sezione B: Geometria e Misura (10 dom.)
//  Sezione C: Dati, Previsioni e Funzioni (10 dom.)
// ══════════════════════════════════════════════════════

window.PROVE_MAT = window.PROVE_MAT || [];

(function(){
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops:ops,ok});
const VF = (id,sez,comp,testo,righe) => ({id,sez,tipo:'vf',comp,testo,righeVF:righe});

window.PROVE_MAT.push({
id:1, titolo:'Prova 1', domande:[

// ── SEZIONE A – NUMERI E ALGEBRA ──────────────────────
SM('m1_1',0,'numeri',
'Quale delle seguenti espressioni ha il valore più grande?',
['2³ · 3','5² – 4','(−3)² + 7','4² : 2'],2),

SM('m1_2',0,'numeri',
'Qual è il valore di −3 · (−4) + 2 · (−5)?',
['22','2','−22','−2'],1),

SM('m1_3',0,'frazioni',
'Un barattolo contiene ³⁄₄ di litro di miele. Se ne usano ²⁄₃, quanto miele rimane?',
['¹⁄₄ di litro','¹⁄₃ di litro','¹⁄₂ di litro','¹⁄₁₂ di litro'],0),

SM('m1_4',0,'percentuali',
'Un giubbotto costa 80 €. Viene scontato del 15%. Qual è il nuovo prezzo?',
['65 €','68 €','70 €','72 €'],1),

SM('m1_5',0,'proporzioni',
'Se 5 matite costano 3,50 €, quanto costano 8 matite?',
['5,20 €','5,60 €','6,00 €','4,90 €'],1),

SM('m1_6',0,'potenze',
'Quale delle seguenti affermazioni è corretta?',
['2⁵ = 10','3³ = 27','4² = 8','2⁴ = 6'],1),

SM('m1_7',0,'algebra',
'Qual è la soluzione dell\'equazione 3x − 7 = 8?',
['x = 3','x = 4','x = 5','x = −5'],2),

SM('m1_8',0,'algebra',
'Una scatola contiene palline rosse e blu in rapporto 2:3. Se ci sono 12 palline rosse, quante sono quelle blu?',
['8','16','18','20'],2),

SM('m1_9',0,'numeri',
'Quale numero è compreso tra √20 e √30?',
['4','5','6','3'],1),

SM('m1_10',0,'frazioni',
'Il risultato di ²⁄₅ + ³⁄₄ è:',
['⁵⁄₉','²³⁄₂₀','¹³⁄₂₀','¹⁄₂'],1),

// ── SEZIONE B – GEOMETRIA E MISURA ────────────────────
SM('m1_11',1,'geometria_piana',
'Un rettangolo ha base 12 cm e altezza 7 cm. Qual è il suo perimetro?',
['84 cm','38 cm','42 cm','19 cm'],1),

SM('m1_12',1,'geometria_piana',
'Un triangolo rettangolo ha i cateti di 6 cm e 8 cm. Quanto misura l\'ipotenusa?',
['10 cm','14 cm','12 cm','7 cm'],0),

SM('m1_13',1,'geometria_piana',
'L\'area di un triangolo con base 10 cm e altezza 6 cm è:',
['60 cm²','30 cm²','16 cm²','20 cm²'],1),

SM('m1_14',1,'geometria_piana',
'Un cerchio ha raggio 5 cm. Quanto misura la sua area? (usa π ≈ 3,14)',
['31,4 cm²','78,5 cm²','15,7 cm²','25 cm²'],1),

SM('m1_15',1,'misura',
'Quanti cm² sono 3,5 m²?',
['350 cm²','3500 cm²','35 000 cm²','350 000 cm²'],2),

SM('m1_16',1,'geometria_solida',
'Un cubo ha lo spigolo di 4 cm. Qual è il suo volume?',
['16 cm³','48 cm³','64 cm³','96 cm³'],2),

SM('m1_17',1,'pitagora',
"Un'asta di 10 m è appoggiata a un muro verticale. Il piede dell'asta è a 6 m dal muro. A che altezza tocca il muro?",
['4 m','6 m','8 m','√136 m'],2),

SM('m1_18',1,'geometria_piana',
'Due angoli di un triangolo misurano 55° e 75°. Quanto misura il terzo angolo?',
['40°','50°','60°','70°'],1),

SM('m1_19',1,'geometria_piana',
'Un quadrato ha perimetro 36 cm. Qual è la sua area?',
['81 cm²','72 cm²','36 cm²','9 cm²'],0),

SM('m1_20',1,'similitudine',
'Due triangoli sono simili con rapporto di similitudine 1:3. Se il lato più corto del primo misura 4 cm, quanto misura il corrispondente nel secondo?',
['9 cm','12 cm','6 cm','3 cm'],1),

// ── SEZIONE C – DATI, PREVISIONI E FUNZIONI ───────────
SM('m1_21',2,'statistica',
'I voti di 5 studenti sono: 6, 7, 8, 6, 8. Qual è la media?',
['6','7','8','6,5'],1),

SM('m1_22',2,'statistica',
'Nella serie di dati 3, 5, 5, 7, 9, 11, qual è la moda?',
['5','7','3','Non esiste'],0),

SM('m1_23',2,'probabilita',
'Si lancia un dado regolare a 6 facce. Qual è la probabilità di ottenere un numero maggiore di 4?',
['1/6','2/6','3/6','4/6'],1),

SM('m1_24',2,'probabilita',
'In un sacchetto ci sono 4 palline rosse e 6 blu. Si estrae una pallina a caso. Qual è la probabilità che sia rossa?',
['4/10','6/10','2/5 e 4/10 sono la stessa cosa','Sia A che C'],3),

SM('m1_25',2,'grafici',
'Una macchina percorre 120 km in 2 ore a velocità costante. Quale formula esprime la distanza d al variare del tempo t (in ore)?',
['d = 60t','d = 120t','d = t + 60','d = 120 – t'],0),

SM('m1_26',2,'funzioni',
'Nella formula y = 2x + 1, se x = 3, quanto vale y?',
['5','7','8','6'],1),

SM('m1_27',2,'statistica',
'Un grafico a barre mostra le vendite mensili di un negozio. A gennaio si vendono 80 pezzi, a febbraio 60, a marzo 100. Qual è la media delle tre vendite?',
['70','80','90','100'],1),

SM('m1_28',2,'funzioni',
'Quale coppia di valori (x; y) soddisfa l\'equazione y = 3x − 2?',
['(1; 1)','(2; 4)','(0; −2)','Sia B che C'],3),

SM('m1_29',2,'probabilita',
'Marco lancia due monete. Qual è la probabilità che escano due teste?',
['1/4','1/2','2/4','1/3'],0),

SM('m1_30',2,'statistica',
'Il mediano di una serie ordinata di 7 valori si trova in quale posizione?',
['3ª','4ª','5ª','Dipende dai valori'],1),

]});
})();
