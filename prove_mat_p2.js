// ══════════════════════════════════════════════════════
//  PROVE MATEMATICA — Prova 2
//  30 domande · 90 minuti · Grado 8
// ══════════════════════════════════════════════════════

window.PROVE_MAT = window.PROVE_MAT || [];

(function(){
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops:ops,ok});

window.PROVE_MAT.push({
id:2, titolo:'Prova 2', domande:[

// ── SEZIONE A – NUMERI E ALGEBRA ──────────────────────
SM('m2_1',0,'numeri',
'Quale dei seguenti numeri è irrazionale?',
['√9','√4','√16','√5'],3),

SM('m2_2',0,'numeri',
'Quanto fa (−2)³ + 5²?',
['17','33','−33','−17'],0),

SM('m2_3',0,'frazioni',
'Qual è il risultato di ³⁄₄ × ⁸⁄₉?',
['²⁴⁄₃₆','²⁄₃','¹¹⁄₁₃','³⁄₂'],1),

SM('m2_4',0,'percentuali',
'Un televisore costa 400 €. Il negoziante guadagna il 20% sul prezzo di acquisto. Quanto ha pagato il negoziante?',
['320 €','380 €','360 €','350 €'],0),

SM('m2_5',0,'algebra',
'Qual è la soluzione di 2x + 5 = x − 3?',
['x = 8','x = −8','x = 2','x = −2'],1),

SM('m2_6',0,'algebra',
'Il triplo di un numero, diminuito di 9, dà 15. Qual è il numero?',
['6','7','8','9'],2),

SM('m2_7',0,'numeri',
'Metti in ordine crescente: ²⁄₃, ³⁄₅, ⁵⁄₈, ⁷⁄₁₂',
['²⁄₃ < ⁵⁄₈ < ³⁄₅ < ⁷⁄₁₂','⁷⁄₁₂ < ³⁄₅ < ⁵⁄₈ < ²⁄₃','³⁄₅ < ⁷⁄₁₂ < ⁵⁄₈ < ²⁄₃','⁷⁄₁₂ < ⁵⁄₈ < ³⁄₅ < ²⁄₃'],3),

SM('m2_8',0,'potenze',
'Semplifica: 3² · 3³ = ?',
['3⁵','3⁶','9⁵','6³'],0),

SM('m2_9',0,'proporzioni',
'In una ricetta per 4 persone servono 300 g di farina. Quanta farina serve per 6 persone?',
['400 g','450 g','500 g','350 g'],1),

SM('m2_10',0,'algebra',
'Due numeri consecutivi hanno somma 31. Qual è il più grande?',
['15','16','17','18'],1),

// ── SEZIONE B – GEOMETRIA E MISURA ────────────────────
SM('m2_11',1,'geometria_piana',
'Un rombo ha diagonali di 8 cm e 6 cm. Qual è la sua area?',
['48 cm²','24 cm²','14 cm²','28 cm²'],1),

SM('m2_12',1,'geometria_piana',
'Qual è la circonferenza di un cerchio con diametro 10 cm? (π ≈ 3,14)',
['62,8 cm','31,4 cm','15,7 cm','314 cm'],1),

SM('m2_13',1,'geometria_piana',
'Un trapezio ha basi di 12 cm e 8 cm, e altezza 5 cm. Qual è la sua area?',
['50 cm²','100 cm²','60 cm²','40 cm²'],0),

SM('m2_14',1,'pitagora',
'Un rettangolo ha lati di 5 cm e 12 cm. Quanto misura la diagonale?',
['13 cm','17 cm','11 cm','√119 cm'],0),

SM('m2_15',1,'geometria_solida',
'Un parallelepipedo rettangolo ha dimensioni 3 cm × 4 cm × 5 cm. Qual è il suo volume?',
['60 cm³','12 cm³','47 cm³','120 cm³'],0),

SM('m2_16',1,'geometria_piana',
'Quanti gradi ha ciascun angolo interno di un esagono regolare?',
['60°','90°','120°','180°'],2),

SM('m2_17',1,'misura',
'Una piscina è lunga 25 m, larga 10 m e profonda 1,8 m. Quanti litri d\'acqua contiene al massimo? (1 m³ = 1000 L)',
['450 000 L','45 000 L','4 500 L','4 500 000 L'],0),

SM('m2_18',1,'geometria_piana',
'Quale figura ha la stessa area di un quadrato di lato 6 cm?',
['Rettangolo 9 cm × 4 cm','Rettangolo 4 cm × 7 cm','Rettangolo 6 cm × 5 cm','Rettangolo 3 cm × 14 cm'],0),

SM('m2_19',1,'similitudine',
'In una pianta in scala 1:200, una stanza è rappresentata con 3 cm × 2,5 cm. Quanti m² misura nella realtà?',
['6 m²','30 m²','600 m²','15 m²'],1),

SM('m2_20',1,'pitagora',
'Quali misure possono essere i tre lati di un triangolo rettangolo?',
['3, 4, 6','5, 12, 13','6, 8, 11','7, 9, 11'],1),

// ── SEZIONE C – DATI, PREVISIONI E FUNZIONI ───────────
SM('m2_21',2,'statistica',
'Le temperature di una settimana sono: 18, 20, 15, 22, 19, 21, 17. Qual è la temperatura media?',
['18,86 °C','19 °C','20 °C','18 °C'],0),

SM('m2_22',2,'statistica',
'Quale valore divide in due parti uguali una serie ordinata di 9 dati?',
['La media','Il 5° valore','Il 4° valore','La moda'],1),

SM('m2_23',2,'probabilita',
'In una classe ci sono 15 femmine e 10 maschi. Si estrae a caso uno studente. Qual è la probabilità che sia femmina?',
['1/2','3/5','2/5','3/4'],1),

SM('m2_24',2,'grafici',
'Un grafico mostra che la temperatura sale di 2°C ogni ora. Se alle 8:00 è 10°C, a che ora sarà 18°C?',
['12:00','13:00','14:00','11:00'],0),

SM('m2_25',2,'funzioni',
'Una funzione lineare ha formula y = −2x + 4. Per quale valore di x si ha y = 0?',
['x = 2','x = 4','x = −2','x = 1'],0),

SM('m2_26',2,'probabilita',
'Si estraggono due carte da un mazzo di 40. La prima estratta è un asso e non viene rimessa. Qual è la probabilità che anche la seconda sia un asso? (nel mazzo ci sono 4 assi)',
['3/39','4/40','1/10','3/40'],0),

SM('m2_27',2,'statistica',
'In un grafico a torta, il settore "sport" occupa 90°. Quale percentuale rappresenta?',
['25%','30%','20%','22,5%'],0),

SM('m2_28',2,'funzioni',
'La formula dell\'area di un cerchio è A = πr². Se raddoppio il raggio, come cambia l\'area?',
['Raddoppia','Quadruplica','Triplica','Rimane uguale'],1),

SM('m2_29',2,'relazioni',
'Marco guadagna 12 € all\'ora. Quale tabella descrive il suo guadagno G al variare delle ore h?',
['h=1→G=12; h=2→G=24; h=3→G=36','h=1→G=13; h=2→G=26; h=3→G=39','h=1→G=10; h=2→G=22; h=3→G=34','h=1→G=12; h=2→G=23; h=3→G=35'],0),

SM('m2_30',2,'probabilita',
'Un dado truccato ha probabilità doppia di uscire 6 rispetto agli altri numeri uguali tra loro. Qual è la probabilità di ottenere 6?',
['2/7','1/6','2/12','1/3'],0),

]});
})();
