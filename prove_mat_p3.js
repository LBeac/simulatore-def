// ══════════════════════════════════════════════════════
//  PROVE MATEMATICA — Prova 3
//  30 domande · 90 minuti · Grado 8
// ══════════════════════════════════════════════════════

window.PROVE_MAT = window.PROVE_MAT || [];

(function(){
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,opts:ops,ok});

window.PROVE_MAT.push({
id:3, titolo:'Prova 3', domande:[

// ── SEZIONE A – NUMERI E ALGEBRA ──────────────────────
SM('m3_1',0,'numeri',
'Qual è il valore di √144 + √25?',
['17','19','13','23'],0),

SM('m3_2',0,'potenze',
'Quale affermazione è corretta?',
['10³ = 300','10⁴ = 1000','10⁰ = 1','10⁻¹ = −10'],2),

SM('m3_3',0,'numeri',
'Ordina dal più piccolo al più grande: −2, 0, −½, 1, −3',
['−3, −2, −½, 0, 1','−½, −2, −3, 0, 1','1, 0, −½, −2, −3','−3, −½, −2, 0, 1'],0),

SM('m3_4',0,'algebra',
'Risolvi l\'equazione: 4(x − 2) = 2x + 6',
['x = 7','x = 5','x = 3','x = −7'],0),

SM('m3_5',0,'frazioni',
'Un serbatoio è ²⁄₅ pieno. Si aggiungono 40 litri e ora è ³⁄₄ pieno. Quanti litri contiene al massimo?',
['100 litri','110 litri','120 litri','140 litri'],2),

SM('m3_6',0,'percentuali',
'Il prezzo di un libro aumenta del 10% e poi viene scontato del 10%. Il prezzo finale rispetto a quello iniziale è:',
['Uguale','Maggiore dell\'1%','Minore dell\'1%','Non si può determinare'],2),

SM('m3_7',0,'proporzioni',
'In una classe il rapporto maschi:femmine è 3:4. Se ci sono 21 maschi, quante femmine ci sono?',
['24','28','27','32'],1),

SM('m3_8',0,'potenze',
'Semplifica: (2³)² = ?',
['2⁵','2⁶','4⁵','4⁶'],1),

SM('m3_9',0,'numeri',
'Quale delle seguenti è una lista di numeri primi?',
['2, 3, 5, 7, 11','1, 3, 5, 7, 9','2, 4, 6, 8, 10','3, 6, 9, 12, 15'],0),

SM('m3_10',0,'algebra',
'La somma di tre numeri interi consecutivi è 57. Qual è il più piccolo?',
['18','19','20','17'],0),

// ── SEZIONE B – GEOMETRIA E MISURA ────────────────────
SM('m3_11',1,'geometria_solida',
'Un cilindro ha raggio di base 3 cm e altezza 10 cm. Qual è il suo volume? (π ≈ 3,14)',
['282,6 cm³','94,2 cm³','188,4 cm³','62,8 cm³'],0),

SM('m3_12',1,'geometria_piana',
'Un poligono regolare ha angoli interni di 135°. Quanti lati ha?',
['6','7','8','9'],2),

SM('m3_13',1,'pitagora',
'Una barca parte da un porto e percorre 9 km verso nord, poi 12 km verso est. A che distanza è dal porto?',
['21 km','15 km','18 km','√225 km'],1),

SM('m3_14',1,'geometria_piana',
'L\'area di un settore circolare con raggio 6 cm e angolo al centro 60° è: (π ≈ 3,14)',
['18,84 cm²','6,28 cm²','37,68 cm²','12,56 cm²'],0),

SM('m3_15',1,'geometria_solida',
'Una piramide a base quadrata ha lato di base 6 cm e altezza 8 cm. Qual è il suo volume?',
['96 cm³','144 cm³','48 cm³','288 cm³'],0),

SM('m3_16',1,'misura',
'Un campo rettangolare è lungo 80 m e largo 45 m. Quanti metri di recinzione servono per recintarlo?',
['250 m','200 m','3600 m','125 m'],0),

SM('m3_17',1,'similitudine',
'Due rettangoli sono simili. Il primo ha lati 4 cm e 6 cm. Il secondo ha il lato corrispondente a 4 cm uguale a 10 cm. Quanto misura l\'altro lato del secondo rettangolo?',
['12 cm','15 cm','8 cm','20 cm'],1),

SM('m3_18',1,'geometria_piana',
'Quale delle seguenti affermazioni sui quadrilateri è SEMPRE vera?',
['Un rettangolo è un quadrato','Un quadrato è un rettangolo','Un rombo è un rettangolo','Un trapezio è un parallelogramma'],1),

SM('m3_19',1,'geometria_solida',
'Quante facce, spigoli e vertici ha un cubo?',
['6 facce, 12 spigoli, 8 vertici','4 facce, 6 spigoli, 4 vertici','8 facce, 12 spigoli, 6 vertici','6 facce, 8 spigoli, 12 vertici'],0),

SM('m3_20',1,'pitagora',
'Una scala di 5 m è appoggiata a un muro. Il piede è a 3 m dal muro. A quale altezza tocca il muro?',
['2 m','3 m','4 m','√34 m'],2),

// ── SEZIONE C – DATI, PREVISIONI E FUNZIONI ───────────
SM('m3_21',2,'funzioni',
'Una candela è alta 30 cm e si consuma di 0,5 cm ogni ora. Quale formula dà l\'altezza h dopo t ore?',
['h = 30 + 0,5t','h = 0,5t','h = 30 − 0,5t','h = 30 × 0,5t'],2),

SM('m3_22',2,'grafici',
'Un grafico cartesiano mostra la retta y = 2x − 1. La retta passa per il punto:',
['(0; 1)','(1; 1)','(0; −1)','(−1; 3)'],1),

SM('m3_23',2,'statistica',
'In una classe di 25 studenti, 8 hanno preso 8, 10 hanno preso 7, 5 hanno preso 6 e 2 hanno preso 9. Qual è la moda?',
['7','8','6','Non esiste'],1),

SM('m3_24',2,'probabilita',
'Da un mazzo di 40 carte si estrae una carta. Qual è la probabilità che sia di cuori o di quadri?',
['1/4','1/2','2/5','3/4'],1),

SM('m3_25',2,'relazioni',
'Una vasca si riempie con 30 litri al minuto. Se è già piena a metà con 150 litri, dopo quanti minuti sarà piena? (capacità totale: 300 L)',
['5 minuti','10 minuti','15 minuti','3 minuti'],0),

SM('m3_26',2,'funzioni',
'La funzione y = x² è definita per x = −3. Quanto vale y?',
['−9','9','6','−6'],1),

SM('m3_27',2,'statistica',
'Le altezze in cm di 6 studenti sono: 165, 172, 168, 175, 170, 162. Qual è la mediana?',
['168','169','170','167'],1),

SM('m3_28',2,'probabilita',
'Si lanciano due dadi. Qual è la probabilità che la somma sia esattamente 7?',
['1/6','5/36','6/36','7/36'],2),

SM('m3_29',2,'grafici',
'In un grafico velocità-tempo, l\'area sottesa dalla curva rappresenta:',
['La velocità media','L\'accelerazione','Lo spazio percorso','Il tempo'],2),

SM('m3_30',2,'relazioni',
'Quale tra le seguenti è una relazione di proporzionalità diretta?',
['Il perimetro e l\'area di un quadrato','La velocità e il tempo per percorrere una distanza fissa','Il costo totale e il numero di articoli allo stesso prezzo','Il numero di lavoratori e il tempo per finire un lavoro'],2),

]});
})();
