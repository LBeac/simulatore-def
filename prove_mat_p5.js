// ══════════════════════════════════════════════════════
//  PROVE MATEMATICA — Prova 5
//  30 domande · 90 minuti · Grado 8
// ══════════════════════════════════════════════════════

window.PROVE_MAT = window.PROVE_MAT || [];

(function(){
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,opts:ops,ok});

window.PROVE_MAT.push({
id:5, titolo:'Prova 5', domande:[

// ── SEZIONE A – NUMERI E ALGEBRA ──────────────────────
SM('m5_1',0,'numeri',
'Una sequenza numerica inizia: 2, 6, 18, 54, … Qual è il termine successivo?',
['108','162','216','270'],1),

SM('m5_2',0,'algebra',
'Risolvi la disequazione: 2x − 3 > 7',
['x > 5','x < 5','x > 2','x < −2'],0),

SM('m5_3',0,'numeri',
'Quanti multipli di 7 ci sono tra 1 e 100?',
['13','14','15','16'],1),

SM('m5_4',0,'frazioni',
'Marta spende ¹⁄₃ del suo stipendio in affitto e ¹⁄₄ in cibo. Che frazione dello stipendio le rimane?',
['⁵⁄₁₂','⁷⁄₁₂','¹⁄₂','⁴⁄₇'],1),

SM('m5_5',0,'percentuali',
'Una banca offre un interesse annuo del 3% su un deposito di 2000 €. Dopo 2 anni (interesse semplice), quanto si è guadagnato?',
['60 €','120 €','180 €','240 €'],1),

SM('m5_6',0,'algebra',
'Il prodotto di due numeri interi consecutivi è 72. Quali sono i due numeri?',
['8 e 9','7 e 8','9 e 10','6 e 7'],0),

SM('m5_7',0,'potenze',
'Calcola: (3² + 4²) × 2 − 10',
['40','50','90','15'],0),

SM('m5_8',0,'numeri',
'Quale delle seguenti affermazioni sul numero 0 è vera?',
['0 è un numero positivo','0 non è intero','0 è divisibile per qualsiasi numero intero non nullo','0 è irrazionale'],2),

SM('m5_9',0,'proporzioni',
'Una città produce 450 kg di rifiuti al giorno con 900 abitanti. Quanti kg produrrà con 1200 abitanti?',
['500 kg','550 kg','600 kg','650 kg'],2),

SM('m5_10',0,'algebra',
'Un negozio vende le mele a 2,40 € al kg. Quanti kg può comprare Luca con 15 €?',
['5 kg','6 kg','6,25 kg','6,5 kg'],2),

// ── SEZIONE B – GEOMETRIA E MISURA ────────────────────
SM('m5_11',1,'pitagora',
'In una scala mobile lunga 13 m, la proiezione orizzontale è 5 m. A che altezza arriva? (usa il Teorema di Pitagora)',
['8 m','10 m','12 m','√194 m'],2),

SM('m5_12',1,'geometria_piana',
'Un esagono regolare ha lato di 6 cm. Sapendo che la sua area è 3√3 × l²/2, qual è la sua area approssimativa? (√3 ≈ 1,73)',
['93,5 cm²','56 cm²','72 cm²','46,7 cm²'],0),

SM('m5_13',1,'geometria_solida',
'Un prisma triangolare ha come base un triangolo rettangolo con cateti 3 cm e 4 cm, e altezza (del prisma) di 10 cm. Qual è il suo volume?',
['60 cm³','120 cm³','24 cm³','30 cm³'],0),

SM('m5_14',1,'geometria_piana',
'Quale delle seguenti formule dà l\'area di un trapezio con basi a e b e altezza h?',
['A = (a+b) × h','A = (a+b) × h / 2','A = a × b × h','A = (a−b) × h / 2'],1),

SM('m5_15',1,'similitudine',
'In una fotografia, una persona alta 1,70 m è rappresentata alta 8,5 cm. Qual è la scala della foto?',
['1:50','1:20','1:200','1:2'],1),

SM('m5_16',1,'misura',
'Converti 5,4 dm³ in cm³.',
['540 cm³','54 cm³','5400 cm³','5 400 000 cm³'],2),

SM('m5_17',1,'pitagora',
'Il diagonale di un rettangolo misura 17 cm e un lato misura 8 cm. Qual è l\'area del rettangolo?',
['100 cm²','120 cm²','136 cm²','150 cm²'],1),

SM('m5_18',1,'geometria_piana',
'Quanto è grande l\'angolo esterno di un poligono regolare con 9 lati?',
['40°','36°','45°','30°'],0),

SM('m5_19',1,'geometria_solida',
'Una scatola cubica di lato 5 cm viene riempita con cubetti di lato 1 cm. Quanti cubetti ci entrano?',
['25','100','125','250'],2),

SM('m5_20',1,'geometria_piana',
'Due rette parallele sono tagliate da una trasversale. Gli angoli alterni interni sono:',
['Supplementari','Uguali','Complementari','Il doppio l\'uno dell\'altro'],1),

// ── SEZIONE C – DATI, PREVISIONI E FUNZIONI ───────────
SM('m5_21',2,'funzioni',
'Una funzione è espressa dalla tabella: x = 1→y = 5; x = 2→y = 8; x = 3→y = 11. Quale formula la descrive?',
['y = 3x + 2','y = 5x','y = 2x + 3','y = x + 4'],0),

SM('m5_22',2,'grafici',
'Il grafico di y = |x| ha la forma di:',
['Una retta con pendenza positiva','Una parabola','Una "V" con vertice nell\'origine','Un cerchio'],2),

SM('m5_23',2,'probabilita',
'In un torneo a eliminazione diretta ci sono 16 squadre. Quante partite si giocano in totale?',
['15','16','8','32'],0),

SM('m5_24',2,'statistica',
'Un sondaggio su 400 persone mostra che il 35% preferisce la pizza. L\'intervallo di confidenza approssimativo è ± 5%. Quante persone al massimo potrebbero preferire la pizza nella popolazione?',
['140','160','180','200'],1),

SM('m5_25',2,'relazioni',
'Se raddoppio i lati di un quadrato, come cambia la sua area?',
['Raddoppia','Triplica','Quadruplica','Aumenta di 4 cm²'],2),

SM('m5_26',2,'funzioni',
'Una macchina produce 240 pezzi in 8 ore. Quanti ne produce in 5 ore?',
['120','150','180','200'],1),

SM('m5_27',2,'probabilita',
'In una classe di 30 studenti, 18 hanno visto un film e 20 hanno letto un libro. 10 hanno fatto entrambe le cose. Quanti non hanno fatto nessuna delle due?',
['2','4','8','12'],0),

SM('m5_28',2,'grafici',
'In un grafico che mostra la temperatura nel corso di una giornata, l\'asse x rappresenta le ore e l\'asse y la temperatura. A quale ora corrisponde il punto più alto del grafico?',
['L\'ora più calda della giornata','L\'ora più fredda','Mezzogiorno','Le 3 di notte'],0),

SM('m5_29',2,'relazioni',
'Quale delle seguenti situazioni descrive una proporzionalità inversa?',
['Il perimetro di un quadrato al variare del lato','La velocità di un viaggio al variare del tempo (distanza fissa)','Il prezzo totale di libri identici al variare della quantità','L\'area di un rettangolo a base fissa al variare dell\'altezza'],1),

SM('m5_30',2,'statistica',
'Il range (campo di variazione) di una serie è:',
['La media dei valori','La differenza tra il valore massimo e minimo','Il valore che compare più spesso','Il valore centrale della serie'],1),

]});
})();
