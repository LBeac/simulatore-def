// ══════════════════════════════════════════════════════
//  PROVE MATEMATICA — Prova 4
//  30 domande · 90 minuti · Grado 8
// ══════════════════════════════════════════════════════

window.PROVE_MAT = window.PROVE_MAT || [];

(function(){
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,opts:ops,ok});

window.PROVE_MAT.push({
id:4, titolo:'Prova 4', domande:[

// ── SEZIONE A – NUMERI E ALGEBRA ──────────────────────
SM('m4_1',0,'numeri',
'Quale delle seguenti espressioni ha risultato negativo?',
['(−3) × (−4)','(−2)³','(−5) + 7','2² − 3'],1),

SM('m4_2',0,'numeri',
'Qual è il minimo comune multiplo (mcm) di 12 e 18?',
['6','24','36','72'],2),

SM('m4_3',0,'frazioni',
'Qual è il risultato di ⁵⁄₆ − ²⁄₃?',
['³⁄₃','¹⁄₆','¹⁄₃','³⁄₆'],1),

SM('m4_4',0,'percentuali',
'Una classe ha 25 studenti. Il 40% sono femmine. Quante femmine ci sono?',
['8','10','12','15'],1),

SM('m4_5',0,'algebra',
'Trova x: ⁽ˣ⁺¹⁾⁄₃ = 4',
['x = 11','x = 13','x = 10','x = 12'],0),

SM('m4_6',0,'proporzioni',
'Se 3 operai costruiscono un muro in 12 giorni, in quanti giorni lo costruiscono 4 operai (stessa produttività)?',
['9 giorni','8 giorni','10 giorni','16 giorni'],0),

SM('m4_7',0,'numeri',
'Qual è la massima cifra delle unità che può avere 4ⁿ (con n numero naturale)?',
['2','4','6','8'],1),

SM('m4_8',0,'potenze',
'Scrivi 0,000045 in notazione scientifica.',
['4,5 × 10⁻⁵','4,5 × 10⁵','45 × 10⁻⁶','0,45 × 10⁻⁴'],0),

SM('m4_9',0,'algebra',
'Un pullman ha 54 posti. È occupato per ²⁄₃. Quante persone viaggiano?',
['27','36','40','38'],1),

SM('m4_10',0,'numeri',
'Quale delle seguenti disuguaglianze è vera?',
['−3 > −1','−0,5 < −1','|−4| = 4','|−3| > |4|'],2),

// ── SEZIONE B – GEOMETRIA E MISURA ────────────────────
SM('m4_11',1,'geometria_piana',
'Un parallelogramma ha base 9 cm e altezza 6 cm. Qual è la sua area?',
['54 cm²','30 cm²','27 cm²','45 cm²'],0),

SM('m4_12',1,'pitagora',
'Un terreno rettangolare ha lati di 40 m e 30 m. Quanto misura la diagonale?',
['35 m','50 m','60 m','70 m'],1),

SM('m4_13',1,'geometria_piana',
'L\'area di un cerchio di raggio r è 25π cm². Qual è il raggio r?',
['25 cm','5 cm','√25π cm','12,5 cm'],1),

SM('m4_14',1,'similitudine',
'Due triangoli simili hanno perimetri di 24 cm e 36 cm. Se l\'area del primo è 48 cm², qual è l\'area del secondo?',
['72 cm²','96 cm²','108 cm²','120 cm²'],2),

SM('m4_15',1,'geometria_solida',
'Una sfera ha raggio 3 cm. Qual è il suo volume? (V = ⁴⁄₃πr³, π ≈ 3,14)',
['113,04 cm³','37,68 cm³','56,52 cm³','100 cm³'],0),

SM('m4_16',1,'geometria_piana',
'Qual è l\'area della corona circolare tra due cerchi concentrici con raggio 5 cm e 3 cm? (π ≈ 3,14)',
['50,24 cm²','28,26 cm²','78,5 cm²','6,28 cm²'],0),

SM('m4_17',1,'misura',
'Un pavimento quadrato di 4 m × 4 m va ricoperto con piastrelle di 20 cm × 20 cm. Quante piastrelle servono?',
['400','800','200','100'],0),

SM('m4_18',1,'pitagora',
'In un triangolo rettangolo, un cateto è 7 cm e l\'ipotenusa è 25 cm. Quanto misura l\'altro cateto?',
['18 cm','24 cm','20 cm','16 cm'],1),

SM('m4_19',1,'geometria_piana',
'Quante diagonali ha un pentagono?',
['3','4','5','6'],2),

SM('m4_20',1,'geometria_solida',
'Un cono ha raggio di base 4 cm e altezza 9 cm. Qual è il suo volume? (V = ¹⁄₃πr²h, π ≈ 3,14)',
['150,72 cm³','37,68 cm³','113,04 cm³','200 cm³'],0),

// ── SEZIONE C – DATI, PREVISIONI E FUNZIONI ───────────
SM('m4_21',2,'statistica',
'In una scuola il 60% degli studenti fa sport. In un campione di 200 studenti, quanti ci si aspetta facciano sport?',
['100','120','130','140'],1),

SM('m4_22',2,'grafici',
'Il grafico di una funzione lineare ha pendenza negativa. Cosa significa?',
['Al crescere di x, y aumenta','Al crescere di x, y diminuisce','La retta è orizzontale','La retta è verticale'],1),

SM('m4_23',2,'probabilita',
'Da un sacchetto con 3 palline rosse, 4 blu e 5 verdi, si estrae una pallina. Qual è la probabilità che sia rossa o verde?',
['²⁄₃','³⁄₄','⁸⁄₁₂','⁷⁄₁₂'],0),

SM('m4_24',2,'funzioni',
'Il prezzo di un prodotto segue la formula P = 5q + 20, dove q è la quantità. Quanto si paga per 6 unità?',
['50 €','56 €','46 €','42 €'],0),

SM('m4_25',2,'statistica',
'La varianza misura:',
['La differenza tra il valore massimo e minimo','La dispersione dei dati attorno alla media','Il valore centrale della serie','La frequenza del valore più comune'],1),

SM('m4_26',2,'relazioni',
'y è inversamente proporzionale a x. Se x = 4, y = 9. Quanto vale y quando x = 6?',
['6','12','13,5','3'],0),

SM('m4_27',2,'probabilita',
'Si lanciano 3 monete. Qual è la probabilità che escano esattamente 2 teste?',
['3/8','1/4','1/2','3/4'],0),

SM('m4_28',2,'grafici',
'In un diagramma a dispersione, i punti si dispongono lungo una retta con pendenza positiva. Che tipo di correlazione c\'è?',
['Negativa','Nulla','Positiva','Non lineare'],2),

SM('m4_29',2,'funzioni',
'Data la funzione f(x) = x² − 4, per quale valore di x si ha f(x) = 0?',
['x = 4','x = ±2','x = 2','x = ±4'],1),

SM('m4_30',2,'statistica',
'Un campione di 5 dati ha media 10 e quattro dei valori sono 8, 9, 11, 12. Qual è il quinto valore?',
['9','10','11','12'],1),

]});
})();
