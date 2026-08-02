/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  INVALSI BEAC — Banca domande PEI matematica
 *  ───────────────────────────────────────────────────────────────────────────
 *  531 domande pre-generate (59 obiettivi × 9 domande)
 *  Livelli: facile (F), medio (M), difficile (D)
 *  Tipi: aperta, multipla, vero_falso
 * ═══════════════════════════════════════════════════════════════════════════
 */

window.BANCA_PEI_MAT = {
  
  "NUM-B-01": {
    nome: "Numeri entro 100",
    domande: [
      // FACILI
      {
        id: "NUM-B-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Scrivi il numero che viene subito dopo il 49.",
        risposta: "50"
      },
      {
        id: "NUM-B-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale numero è più grande?",
        opzioni: ["23", "32", "28", "20"],
        corretta: 1
      },
      {
        id: "NUM-B-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il numero 67 è più grande di 76.",
        risposta: false
      },
      
      // MEDIE
      {
        id: "NUM-B-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Metti in ordine dal più piccolo al più grande: 58, 85, 48. Scrivi il numero centrale.",
        risposta: "58"
      },
      {
        id: "NUM-B-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "In quale numero la cifra 7 vale 70?",
        opzioni: ["17", "72", "7", "47"],
        corretta: 1
      },
      {
        id: "NUM-B-01-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Quanti numeri ci sono tra 40 e 50 (esclusi)?",
        risposta: "9"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Tre bambini hanno rispettivamente 64, 46 e 59 figurine. Chi ne ha di più?",
        opzioni: ["Il primo", "Il secondo", "Il terzo", "Ne hanno tutti uguali"],
        corretta: 0
      },
      {
        id: "NUM-B-01-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Nei numeri da 1 a 100, la cifra 5 appare nelle unità esattamente 10 volte.",
        risposta: true
      },
      {
        id: "NUM-B-01-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Scrivi il numero più grande di due cifre che ha le unità uguali alle decine.",
        risposta: "99"
      }
    ]
  },

  "NUM-B-02": {
    nome: "Addizione e sottrazione entro 100",
    domande: [
      // FACILI
      {
        id: "NUM-B-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Sofia ha 12 caramelle. La mamma gliene dà altre 8. Quante ne ha in totale?",
        risposta: "20"
      },
      {
        id: "NUM-B-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto fa 25 + 30?",
        opzioni: ["50", "55", "60", "45"],
        corretta: 1
      },
      {
        id: "NUM-B-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "15 + 15 fa 30.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-B-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In un parcheggio ci sono 63 auto. Ne escono 28. Quante auto restano?",
        risposta: "35"
      },
      {
        id: "NUM-B-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Marco ha 50 euro. Compra un libro da 18 euro. Quanti euro gli restano?",
        opzioni: ["28", "32", "38", "42"],
        corretta: 1
      },
      {
        id: "NUM-B-02-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Quanto fa 47 + 29?",
        risposta: "76"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Anna compra due giochi: uno costa 38 euro, l'altro 45 euro. Quanto spende in totale?",
        opzioni: ["73 euro", "83 euro", "78 euro", "88 euro"],
        corretta: 1
      },
      {
        id: "NUM-B-02-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se sottraggo 39 da 82, il risultato è maggiore di 40.",
        risposta: true
      },
      {
        id: "NUM-B-02-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Luca ha 90 figurine. Ne regala 37 a Pietro. Quante ne ha adesso?",
        risposta: "53"
      }
    ]
  },

  "NUM-B-03": {
    nome: "Tabelline e moltiplicazione",
    domande: [
      // FACILI
      {
        id: "NUM-B-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto fa 3 × 4?",
        risposta: "12"
      },
      {
        id: "NUM-B-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto fa 5 × 2?",
        opzioni: ["7", "10", "12", "15"],
        corretta: 1
      },
      {
        id: "NUM-B-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "2 × 6 fa 12.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-B-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Ogni scatola contiene 7 pennarelli. Quanti pennarelli ci sono in 6 scatole?",
        risposta: "42"
      },
      {
        id: "NUM-B-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto fa 8 × 9?",
        opzioni: ["63", "72", "81", "56"],
        corretta: 1
      },
      {
        id: "NUM-B-03-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Un quaderno costa 4 euro. Quanto costano 9 quaderni?",
        risposta: "36"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "In una palestra ci sono 8 file di sedie. Ogni fila ha 12 sedie. Quante sedie in totale?",
        opzioni: ["84", "96", "102", "88"],
        corretta: 1
      },
      {
        id: "NUM-B-03-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "7 × 8 dà lo stesso risultato di 8 × 7.",
        risposta: true
      },
      {
        id: "NUM-B-03-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanto fa 11 × 6?",
        risposta: "66"
      }
    ]
  },

  "NUM-B-04": {
    nome: "Divisione semplice",
    domande: [
      // FACILI
      {
        id: "NUM-B-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "12 biscotti divisi tra 3 bambini. Quanti ne riceve ciascuno?",
        risposta: "4"
      },
      {
        id: "NUM-B-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto fa 10 : 2?",
        opzioni: ["3", "5", "6", "4"],
        corretta: 1
      },
      {
        id: "NUM-B-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "20 : 5 fa 4.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-B-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Giulia ha 35 figurine. Le vuole mettere in 5 album uguali. Quante figurine per album?",
        risposta: "7"
      },
      {
        id: "NUM-B-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto fa 48 : 6?",
        opzioni: ["6", "7", "8", "9"],
        corretta: 2
      },
      {
        id: "NUM-B-04-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "In una scatola ci sono 54 caramelle. Vengono divise tra 9 bambini. Quante ne riceve ciascuno?",
        risposta: "6"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un maestro deve distribuire 72 fogli a 8 alunni. Quanti fogli per alunno?",
        opzioni: ["8", "9", "10", "7"],
        corretta: 1
      },
      {
        id: "NUM-B-04-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "63 : 7 dà come risultato 9.",
        risposta: true
      },
      {
        id: "NUM-B-04-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanto fa 96 : 8?",
        risposta: "12"
      }
    ]
  },

  "NUM-B-05": {
    nome: "Euro e centesimi",
    domande: [
      // FACILI
      {
        id: "NUM-B-05-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Una gomma costa 1,50 euro. Quanto costano 2 gomme?",
        risposta: "3"
      },
      {
        id: "NUM-B-05-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale prezzo è più alto?",
        opzioni: ["2,30 euro", "2,03 euro", "2,20 euro", "2,10 euro"],
        corretta: 0
      },
      {
        id: "NUM-B-05-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "3 euro e 50 centesimi si scrive 3,50.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-B-05-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un gelato costa 2,80 euro. Quanto costano 3 gelati?",
        risposta: "8.40"
      },
      {
        id: "NUM-B-05-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Metti in ordine dal più caro al meno caro: 4,50 - 4,05 - 4,55 euro. Quale costa di più?",
        opzioni: ["4,50", "4,05", "4,55", "Costano uguale"],
        corretta: 2
      },
      {
        id: "NUM-B-05-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Ho 10 euro. Compro un libro da 6,75 euro. Quanto resto ricevo?",
        risposta: "3.25"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-05-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Sara compra 4 quaderni a 1,85 euro l'uno. Quanto spende in totale?",
        opzioni: ["7,20 euro", "7,40 euro", "7,60 euro", "7,80 euro"],
        corretta: 1
      },
      {
        id: "NUM-B-05-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "5,90 euro è meno di 6 euro.",
        risposta: true
      },
      {
        id: "NUM-B-05-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un panino costa 3,20 euro e una bibita 1,75 euro. Quanto spendo per entrambi?",
        risposta: "4.95"
      }
    ]
  },

  "NUM-B-06": {
    nome: "Frazioni visuali",
    domande: [
      // FACILI
      {
        id: "NUM-B-06-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto è 1/2 di 10?",
        risposta: "5"
      },
      {
        id: "NUM-B-06-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto è 1/4 di 8?",
        opzioni: ["1", "2", "3", "4"],
        corretta: 1
      },
      {
        id: "NUM-B-06-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "1/2 di 6 fa 3.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-B-06-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In una classe di 24 alunni, 1/3 sono assenti. Quanti sono assenti?",
        risposta: "8"
      },
      {
        id: "NUM-B-06-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto è 1/4 di 20?",
        opzioni: ["4", "5", "6", "10"],
        corretta: 1
      },
      {
        id: "NUM-B-06-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Paolo ha 18 euro. Spende 1/3 dei suoi soldi. Quanto spende?",
        risposta: "6"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-06-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "In un gruppo di 36 bambini, 1/4 gioca a calcio. Quanti giocano a calcio?",
        opzioni: ["6", "8", "9", "12"],
        corretta: 2
      },
      {
        id: "NUM-B-06-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "1/2 di 30 è uguale a 1/3 di 45.",
        risposta: true
      },
      {
        id: "NUM-B-06-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanto è 1/2 di 1/2 di 16?",
        risposta: "4"
      }
    ]
  },

  "NUM-B-07": {
    nome: "Doppio, metà, triplo",
    domande: [
      // FACILI
      {
        id: "NUM-B-07-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Qual è il doppio di 6?",
        risposta: "12"
      },
      {
        id: "NUM-B-07-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Qual è la metà di 14?",
        opzioni: ["5", "6", "7", "8"],
        corretta: 2
      },
      {
        id: "NUM-B-07-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il doppio di 10 fa 20.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-B-07-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Elena ha 15 matite. Sua sorella ne ha il doppio. Quante matite ha la sorella?",
        risposta: "30"
      },
      {
        id: "NUM-B-07-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Qual è il triplo di 12?",
        opzioni: ["24", "30", "36", "42"],
        corretta: 2
      },
      {
        id: "NUM-B-07-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Qual è la metà di 50?",
        risposta: "25"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-07-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Marco ha 18 figurine. Luca ne ha il triplo di Marco. Quante figurine ha Luca?",
        opzioni: ["36", "45", "54", "63"],
        corretta: 2
      },
      {
        id: "NUM-B-07-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "La metà del doppio di 20 è uguale a 20.",
        risposta: true
      },
      {
        id: "NUM-B-07-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Il triplo di un numero è 60. Qual è il numero?",
        risposta: "20"
      }
    ]
  },

  "NUM-B-08": {
    nome: "Problema con una operazione",
    domande: [
      // FACILI
      {
        id: "NUM-B-08-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Tommaso ha 9 caramelle. Il papà gliene regala altre 6. Quante caramelle ha ora?",
        risposta: "15"
      },
      {
        id: "NUM-B-08-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "In un cestino ci sono 12 mele. Ne vengono mangiate 5. Quante mele restano?",
        opzioni: ["5", "6", "7", "8"],
        corretta: 2
      },
      {
        id: "NUM-B-08-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Se ho 8 euro e spendo 3 euro, mi restano 5 euro.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-B-08-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In un parcheggio ci sono 45 auto. Ne arrivano altre 28. Quante auto ci sono ora?",
        risposta: "73"
      },
      {
        id: "NUM-B-08-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Chiara ha 60 euro. Compra un gioco da 38 euro. Quanti euro le restano?",
        opzioni: ["18", "22", "28", "32"],
        corretta: 1
      },
      {
        id: "NUM-B-08-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Ogni giorno Davide legge 7 pagine di un libro. Quante pagine legge in 8 giorni?",
        risposta: "56"
      },
      
      // DIFFICILI
      {
        id: "NUM-B-08-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un cinema ha 96 posti. Sono occupati 59 posti. Quanti posti sono liberi?",
        opzioni: ["35", "37", "39", "41"],
        corretta: 1
      },
      {
        id: "NUM-B-08-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se compro 9 pacchi di figurine e ogni pacco contiene 6 figurine, in totale ho 54 figurine.",
        risposta: true
      },
      {
        id: "NUM-B-08-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Una biblioteca ha 120 libri. Ne presta 47. Quanti libri restano in biblioteca?",
        risposta: "73"
      }
    ]
  },

  "NUM-I-01": {
    nome: "Numeri decimali",
    domande: [
      // FACILI
      {
        id: "NUM-I-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Nel numero 4,7 quale cifra rappresenta i decimi?",
        risposta: "7"
      },
      {
        id: "NUM-I-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale numero è più grande?",
        opzioni: ["0,5", "0,8", "0,3", "0,6"],
        corretta: 1
      },
      {
        id: "NUM-I-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "0,9 è maggiore di 0,10.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-I-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Nel numero 12,456 quale cifra rappresenta i centesimi?",
        risposta: "5"
      },
      {
        id: "NUM-I-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Metti in ordine crescente: 0,45 - 0,54 - 0,405. Quale è il più piccolo?",
        opzioni: ["0,45", "0,54", "0,405", "Sono uguali"],
        corretta: 2
      },
      {
        id: "NUM-I-01-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Scrivi come numero decimale: 3 unità e 25 centesimi.",
        risposta: "3.25"
      },
      
      // DIFFICILI
      {
        id: "NUM-I-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Nel numero 78,392 quale cifra ha il valore minore?",
        opzioni: ["7", "3", "9", "2"],
        corretta: 3
      },
      {
        id: "NUM-I-01-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "0,500 è uguale a 0,5.",
        risposta: true
      },
      {
        id: "NUM-I-01-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quale numero viene subito dopo 2,99?",
        risposta: "3"
      }
    ]
  },

  "NUM-I-02": {
    nome: "Operazioni con decimali",
    domande: [
      // FACILI
      {
        id: "NUM-I-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto fa 2,5 + 1,5?",
        risposta: "4"
      },
      {
        id: "NUM-I-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto fa 5,0 - 2,3?",
        opzioni: ["2,3", "2,7", "3,3", "3,7"],
        corretta: 1
      },
      {
        id: "NUM-I-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "0,5 + 0,5 fa 1.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-I-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un libro pesa 1,8 kg. Quanto pesano 4 libri uguali?",
        risposta: "7.2"
      },
      {
        id: "NUM-I-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto fa 8,6 + 3,7?",
        opzioni: ["11,3", "12,3", "11,9", "12,9"],
        corretta: 1
      },
      {
        id: "NUM-I-02-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Ho 10 euro. Compro qualcosa che costa 7,65 euro. Quanto resto ricevo?",
        risposta: "2.35"
      },
      
      // DIFFICILI
      {
        id: "NUM-I-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Una penna costa 1,25 euro. Quanto costano 8 penne?",
        opzioni: ["9 euro", "10 euro", "11 euro", "12 euro"],
        corretta: 1
      },
      {
        id: "NUM-I-02-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "15,8 - 9,2 dà come risultato 6,6.",
        risposta: true
      },
      {
        id: "NUM-I-02-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanto fa 12,4 × 3?",
        risposta: "37.2"
      }
    ]
  }

,

"NUM-I-03": {
    nome: "Frazioni equivalenti",
    domande: [
      // FACILI
      {
        id: "NUM-I-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quale frazione è equivalente a 1/2? Scrivi il numeratore se il denominatore è 4.",
        risposta: "2"
      },
      {
        id: "NUM-I-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale frazione è equivalente a 2/4?",
        opzioni: ["1/2", "2/8", "3/4", "1/4"],
        corretta: 0
      },
      {
        id: "NUM-I-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "3/6 è equivalente a 1/2.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-I-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Riduci ai minimi termini la frazione 4/8. Scrivi il numeratore della frazione ridotta.",
        risposta: "1"
      },
      {
        id: "NUM-I-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Tra 3/8 e 5/8 quale frazione è più grande?",
        opzioni: ["3/8", "5/8", "Sono uguali", "Non si può dire"],
        corretta: 1
      },
      {
        id: "NUM-I-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "4/6 è equivalente a 2/3.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-I-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quale di queste frazioni NON è equivalente a 3/4?",
        opzioni: ["6/8", "9/12", "12/15", "15/20"],
        corretta: 2
      },
      {
        id: "NUM-I-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Riduci ai minimi termini: 12/16. Scrivi il denominatore.",
        risposta: "4"
      },
      {
        id: "NUM-I-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "5/10, 10/20 e 15/30 sono tutte equivalenti.",
        risposta: true
      }
    ]
  },

  "NUM-I-04": {
    nome: "Frazione di un numero",
    domande: [
      // FACILI
      {
        id: "NUM-I-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto è 1/2 di 12?",
        risposta: "6"
      },
      {
        id: "NUM-I-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto è 1/4 di 16?",
        opzioni: ["2", "4", "6", "8"],
        corretta: 1
      },
      {
        id: "NUM-I-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "1/3 di 9 fa 3.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-I-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In una classe di 28 alunni, 3/4 vanno in gita. Quanti alunni vanno in gita?",
        risposta: "21"
      },
      {
        id: "NUM-I-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto è 2/5 di 30?",
        opzioni: ["10", "12", "15", "20"],
        corretta: 1
      },
      {
        id: "NUM-I-04-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Marta ha 40 euro. Spende 3/8 dei suoi soldi. Quanto spende?",
        risposta: "15"
      },
      
      // DIFFICILI
      {
        id: "NUM-I-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un libro ha 120 pagine. Roberto ne ha letto 5/6. Quante pagine ha letto?",
        opzioni: ["90", "100", "110", "115"],
        corretta: 1
      },
      {
        id: "NUM-I-04-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "3/5 di 50 è uguale a 30.",
        risposta: true
      },
      {
        id: "NUM-I-04-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanto è 7/8 di 64?",
        risposta: "56"
      }
    ]
  },

  "NUM-I-05": {
    nome: "Potenze semplici",
    domande: [
      // FACILI
      {
        id: "NUM-I-05-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto fa 2 alla seconda (2²)?",
        risposta: "4"
      },
      {
        id: "NUM-I-05-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto fa 3 alla seconda (3²)?",
        opzioni: ["6", "9", "12", "15"],
        corretta: 1
      },
      {
        id: "NUM-I-05-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "5 alla prima (5¹) fa 5.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-I-05-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Nel numero 4³, quanto vale la base?",
        risposta: "4"
      },
      {
        id: "NUM-I-05-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto fa 2 alla terza (2³)?",
        opzioni: ["6", "8", "10", "12"],
        corretta: 1
      },
      {
        id: "NUM-I-05-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "4² è uguale a 2⁴.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-I-05-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quanto fa 5 alla terza (5³)?",
        opzioni: ["75", "100", "125", "150"],
        corretta: 2
      },
      {
        id: "NUM-I-05-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quale numero elevato alla seconda dà 49?",
        risposta: "7"
      },
      {
        id: "NUM-I-05-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "3³ è maggiore di 10².",
        risposta: false
      }
    ]
  },

  "NUM-I-06": {
    nome: "Multipli e divisori",
    domande: [
      // FACILI
      {
        id: "NUM-I-06-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Scrivi un multiplo di 5 compreso tra 20 e 30.",
        risposta: "25"
      },
      {
        id: "NUM-I-06-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale di questi numeri è divisore di 12?",
        opzioni: ["5", "4", "7", "8"],
        corretta: 1
      },
      {
        id: "NUM-I-06-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "6 è un divisore di 18.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-I-06-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Quanti sono i divisori di 10? (considera anche 1 e 10)",
        risposta: "4"
      },
      {
        id: "NUM-I-06-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale di questi numeri è primo?",
        opzioni: ["15", "17", "18", "21"],
        corretta: 1
      },
      {
        id: "NUM-I-06-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Tutti i numeri pari hanno 2 come divisore.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-I-06-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Qual è il più piccolo multiplo comune tra 4 e 6?",
        opzioni: ["8", "10", "12", "24"],
        corretta: 2
      },
      {
        id: "NUM-I-06-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Scrivi tutti i divisori di 20 separati da virgole (dal più piccolo al più grande).",
        risposta: "1, 2, 4, 5, 10, 20"
      },
      {
        id: "NUM-I-06-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "29 è un numero primo.",
        risposta: true
      }
    ]
  },

  "NUM-I-07": {
    nome: "Problema con due operazioni",
    domande: [
      // FACILI
      {
        id: "NUM-I-07-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Federica ha 10 caramelle. Ne compra altre 6, poi ne mangia 3. Quante gliene restano?",
        risposta: "13"
      },
      {
        id: "NUM-I-07-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Ho 20 euro. Compro un gioco da 8 euro e un libro da 5 euro. Quanti euro mi restano?",
        opzioni: ["5", "7", "9", "11"],
        corretta: 1
      },
      {
        id: "NUM-I-07-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Se parto da 15, aggiungo 10 e poi tolgo 5, arrivo a 20.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-I-07-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In un sacchetto ci sono 30 biglie. Ne tolgo 8, poi aggiungo 12. Quante biglie ci sono ora?",
        risposta: "34"
      },
      {
        id: "NUM-I-07-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Compro 5 quaderni a 3 euro l'uno. Pago con 20 euro. Quanto resto ricevo?",
        opzioni: ["3 euro", "5 euro", "7 euro", "10 euro"],
        corretta: 1
      },
      {
        id: "NUM-I-07-M3",
        livello: "medio",
        tipo: "aperta",
        testo: "Valentina legge 12 pagine il lunedì e 15 pagine il martedì. Quante pagine ha letto in totale?",
        risposta: "27"
      },
      
      // DIFFICILI
      {
        id: "NUM-I-07-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un negozio ha 48 giochi. Ne vende 19 la mattina e 14 il pomeriggio. Quanti ne restano?",
        opzioni: ["13", "15", "17", "19"],
        corretta: 1
      },
      {
        id: "NUM-I-07-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se ho 50 euro, spendo 18 euro e poi altri 12 euro, mi restano 20 euro.",
        risposta: true
      },
      {
        id: "NUM-I-07-D3",
        livello: "difficile",
        tipo: "aperta",
        testo: "Andrea ha 24 figurine. Ne regala 9 a Luca, poi ne compra 15 nuove. Quante ne ha ora?",
        risposta: "30"
      }
    ]
  },

  "NUM-A-01": {
    nome: "Percentuali",
    domande: [
      // FACILI
      {
        id: "NUM-A-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto è il 50% di 20?",
        risposta: "10"
      },
      {
        id: "NUM-A-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto è il 10% di 30?",
        opzioni: ["1", "2", "3", "4"],
        corretta: 2
      },
      {
        id: "NUM-A-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il 25% di 100 è 25.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-A-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un paio di scarpe costa 80 euro. Con lo sconto del 25% quanto costa?",
        risposta: "60"
      },
      {
        id: "NUM-A-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto è il 75% di 60?",
        opzioni: ["40", "45", "50", "55"],
        corretta: 1
      },
      {
        id: "NUM-A-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Il 50% di 40 è uguale al 25% di 80.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-A-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un computer costa 400 euro. Con lo sconto del 20% quanto si risparmia?",
        opzioni: ["60 euro", "70 euro", "80 euro", "90 euro"],
        corretta: 2
      },
      {
        id: "NUM-A-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "In una classe di 25 alunni, il 60% sono maschi. Quanti sono i maschi?",
        risposta: "15"
      },
      {
        id: "NUM-A-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Il 10% di 150 è maggiore del 15% di 100.",
        risposta: false
      }
    ]
  },

  "NUM-A-02": {
    nome: "Proporzioni semplici",
    domande: [
      // FACILI
      {
        id: "NUM-A-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Nella proporzione 2 : 4 = 3 : x, quanto vale x?",
        risposta: "6"
      },
      {
        id: "NUM-A-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Se 1 kg di mele costa 2 euro, quanto costano 3 kg?",
        opzioni: ["4 euro", "5 euro", "6 euro", "8 euro"],
        corretta: 2
      },
      {
        id: "NUM-A-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nella proporzione 3 : 6 = 5 : 10, i numeri sono in proporzione.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-A-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Se 4 penne costano 6 euro, quanto costano 6 penne?",
        risposta: "9"
      },
      {
        id: "NUM-A-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Nella proporzione 5 : 10 = x : 8, quanto vale x?",
        opzioni: ["2", "4", "6", "8"],
        corretta: 1
      },
      {
        id: "NUM-A-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Se raddoppio il primo e il terzo termine di una proporzione, resta una proporzione.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-A-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Una ricetta per 4 persone richiede 200 g di farina. Quanta farina serve per 10 persone?",
        opzioni: ["400 g", "450 g", "500 g", "550 g"],
        corretta: 2
      },
      {
        id: "NUM-A-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Se 3 operai completano un lavoro in 12 giorni, quanti giorni servono a 4 operai? (proporzione inversa)",
        risposta: "9"
      },
      {
        id: "NUM-A-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Nella proporzione 12 : 3 = 20 : 5, il prodotto degli estremi è uguale al prodotto dei medi.",
        risposta: true
      }
    ]
  },

  "NUM-A-03": {
    nome: "Numeri relativi: concetto",
    domande: [
      // FACILI
      {
        id: "NUM-A-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quale numero viene prima di 0 sulla retta dei numeri?",
        risposta: "-1"
      },
      {
        id: "NUM-A-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale temperatura è più fredda?",
        opzioni: ["-5°C", "0°C", "+3°C", "+5°C"],
        corretta: 0
      },
      {
        id: "NUM-A-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "-3 è minore di 0.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-A-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "La temperatura è -4°C. Sale di 7 gradi. Che temperatura c'è ora?",
        risposta: "3"
      },
      {
        id: "NUM-A-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale numero è più grande tra -8 e -3?",
        opzioni: ["-8", "-3", "Sono uguali", "Dipende"],
        corretta: 1
      },
      {
        id: "NUM-A-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Il numero opposto di +5 è -5.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-A-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Una grotta è a -30 metri sotto il livello del mare. Un aereo vola a +500 metri. Quanti metri li separano?",
        opzioni: ["470 m", "500 m", "530 m", "560 m"],
        corretta: 2
      },
      {
        id: "NUM-A-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Metti in ordine crescente: +2, -5, 0, -1. Scrivi il secondo numero.",
        risposta: "-1"
      },
      {
        id: "NUM-A-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "La distanza tra -6 e +6 sulla retta è 12.",
        risposta: true
      }
    ]
  },

  "NUM-A-04": {
    nome: "Operazioni con numeri relativi",
    domande: [
      // FACILI
      {
        id: "NUM-A-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto fa (+3) + (+2)?",
        risposta: "5"
      },
      {
        id: "NUM-A-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto fa (+5) - (+3)?",
        opzioni: ["+1", "+2", "+8", "-2"],
        corretta: 1
      },
      {
        id: "NUM-A-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "(-2) + (+2) fa 0.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-A-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Quanto fa (+6) + (-4)?",
        risposta: "2"
      },
      {
        id: "NUM-A-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto fa (-5) - (-2)?",
        opzioni: ["-7", "-3", "+3", "+7"],
        corretta: 1
      },
      {
        id: "NUM-A-04-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "(+8) + (-8) è uguale a 0.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-A-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quanto fa (-7) + (-5)?",
        opzioni: ["-2", "+2", "-12", "+12"],
        corretta: 2
      },
      {
        id: "NUM-A-04-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanto fa (-10) - (-15)?",
        risposta: "5"
      },
      {
        id: "NUM-A-04-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "(-3) + (+8) - (+2) è uguale a +3.",
        risposta: true
      }
    ]
  },

  "SPA-B-01": {
    nome: "Riconoscimento figure piane",
    domande: [
      // FACILI
      {
        id: "SPA-B-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Una figura con 4 lati tutti uguali e 4 angoli retti si chiama...",
        risposta: "quadrato"
      },
      {
        id: "SPA-B-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanti lati ha un triangolo?",
        opzioni: ["2", "3", "4", "5"],
        corretta: 1
      },
      {
        id: "SPA-B-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un cerchio ha dei lati.",
        risposta: false
      },
      
      // MEDIE
      {
        id: "SPA-B-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Come si chiama un quadrilatero con 4 angoli retti ma lati non tutti uguali?",
        risposta: "rettangolo"
      },
      {
        id: "SPA-B-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale figura NON ha angoli?",
        opzioni: ["Quadrato", "Triangolo", "Cerchio", "Rettangolo"],
        corretta: 2
      },
      {
        id: "SPA-B-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Un rombo ha 4 lati tutti uguali.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-B-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quale figura ha esattamente 5 lati?",
        opzioni: ["Esagono", "Pentagono", "Ettagono", "Ottagono"],
        corretta: 1
      },
      {
        id: "SPA-B-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanti vertici ha un triangolo?",
        risposta: "3"
      },
      {
        id: "SPA-B-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un trapezio ha almeno due lati paralleli.",
        risposta: true
      }
    ]
  },
"SPA-B-02": {
    nome: "Linee: tipi e direzioni",
    domande: [
      // FACILI
      {
        id: "SPA-B-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Una linea che va da sinistra a destra è orizzontale o verticale?",
        risposta: "orizzontale"
      },
      {
        id: "SPA-B-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Una linea che va dall'alto verso il basso è:",
        opzioni: ["Orizzontale", "Verticale", "Obliqua", "Curva"],
        corretta: 1
      },
      {
        id: "SPA-B-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Una linea retta non ha curve.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-B-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Come si chiama una linea che non è né orizzontale né verticale?",
        risposta: "obliqua"
      },
      {
        id: "SPA-B-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale linea forma un angolo retto con una linea orizzontale?",
        opzioni: ["Obliqua", "Verticale", "Curva", "Spezzata"],
        corretta: 1
      },
      {
        id: "SPA-B-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Una linea chiusa divide il piano in una parte interna e una esterna.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-B-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Due linee che non si incontrano mai sono:",
        opzioni: ["Incidenti", "Parallele", "Perpendicolari", "Secanti"],
        corretta: 1
      },
      {
        id: "SPA-B-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Come si chiama una linea formata da segmenti uniti?",
        risposta: "spezzata"
      },
      {
        id: "SPA-B-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Due linee perpendicolari formano angoli di 90 gradi.",
        risposta: true
      }
    ]
  },

  "SPA-B-03": {
    nome: "Solidi: riconoscimento",
    domande: [
      // FACILI
      {
        id: "SPA-B-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un dado ha la forma di quale solido?",
        risposta: "cubo"
      },
      {
        id: "SPA-B-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Una palla ha la forma di quale solido?",
        opzioni: ["Cubo", "Cilindro", "Sfera", "Cono"],
        corretta: 2
      },
      {
        id: "SPA-B-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un cubo ha 6 facce.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-B-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un cappello da festa a forma di punta è un...",
        risposta: "cono"
      },
      {
        id: "SPA-B-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale solido ha 2 basi circolari e una superficie curva?",
        opzioni: ["Cono", "Cilindro", "Sfera", "Piramide"],
        corretta: 1
      },
      {
        id: "SPA-B-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Una piramide ha una base e un vertice in alto.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-B-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quante facce ha un parallelepipedo?",
        opzioni: ["4", "5", "6", "8"],
        corretta: 2
      },
      {
        id: "SPA-B-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanti spigoli ha un cubo?",
        risposta: "12"
      },
      {
        id: "SPA-B-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Una sfera non ha spigoli né vertici.",
        risposta: true
      }
    ]
  },

  "SPA-B-04": {
    nome: "Posizioni nello spazio",
    domande: [
      // FACILI
      {
        id: "SPA-B-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Se una penna è sul tavolo, dove si trova rispetto al pavimento?",
        risposta: "sopra"
      },
      {
        id: "SPA-B-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Lo zaino è dentro l'armadio. Dove si trova?",
        opzioni: ["Sopra", "Sotto", "Dentro", "Fuori"],
        corretta: 2
      },
      {
        id: "SPA-B-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Davanti è il contrario di dietro.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-B-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Il gatto è sotto il letto e il cane è sopra il divano. Chi è più in alto?",
        risposta: "cane"
      },
      {
        id: "SPA-B-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "La lampada è sopra il tavolo. La sedia è sotto il tavolo. Cosa sta nel mezzo?",
        opzioni: ["La lampada", "La sedia", "Il tavolo", "Niente"],
        corretta: 2
      },
      {
        id: "SPA-B-04-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Se guardo avanti, la mia destra è sempre dalla stessa parte.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-B-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Sono di fronte a te. La tua destra è la mia:",
        opzioni: ["Destra", "Sinistra", "Davanti", "Dietro"],
        corretta: 1
      },
      {
        id: "SPA-B-04-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un libro è tra il quaderno e la penna. Quanti oggetti ci sono in totale?",
        risposta: "3"
      },
      {
        id: "SPA-B-04-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se cammino in avanti e poi giro a destra, per tornare indietro devo girare a sinistra.",
        risposta: false
      }
    ]
  },

  "SPA-B-05": {
    nome: "Misurare lunghezze",
    domande: [
      // FACILI
      {
        id: "SPA-B-05-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanti centimetri ci sono in 1 metro?",
        risposta: "100"
      },
      {
        id: "SPA-B-05-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Una matita lunga 18 cm e una penna lunga 14 cm. Quale è più lunga?",
        opzioni: ["La matita", "La penna", "Sono uguali", "Non si può dire"],
        corretta: 0
      },
      {
        id: "SPA-B-05-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "10 centimetri sono meno di 1 metro.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-B-05-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un nastro è lungo 2 metri. Quanti centimetri sono?",
        risposta: "200"
      },
      {
        id: "SPA-B-05-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Una corda lunga 150 cm. Un'altra lunga 1 metro e 60 cm. Quale è più lunga?",
        opzioni: ["La prima", "La seconda", "Sono uguali", "Mancano dati"],
        corretta: 1
      },
      {
        id: "SPA-B-05-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "3 metri sono 300 centimetri.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-B-05-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un campo è lungo 50 metri. Quanto è lungo in centimetri?",
        opzioni: ["500 cm", "5000 cm", "50000 cm", "500000 cm"],
        corretta: 1
      },
      {
        id: "SPA-B-05-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Una finestra è larga 120 cm. Quanto manca per arrivare a 2 metri?",
        risposta: "80"
      },
      {
        id: "SPA-B-05-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "1 chilometro sono 1000 metri.",
        risposta: true
      }
    ]
  },

  "SPA-B-06": {
    nome: "Perimetro come somma dei lati",
    domande: [
      // FACILI
      {
        id: "SPA-B-06-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un quadrato ha tutti i lati di 4 cm. Quanto misura il perimetro?",
        risposta: "16"
      },
      {
        id: "SPA-B-06-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Un triangolo ha i lati di 3, 4 e 5 cm. Quanto misura il perimetro?",
        opzioni: ["10 cm", "11 cm", "12 cm", "15 cm"],
        corretta: 2
      },
      {
        id: "SPA-B-06-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il perimetro è la somma di tutti i lati.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-B-06-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un rettangolo ha due lati di 7 cm e due lati di 3 cm. Quanto misura il perimetro?",
        risposta: "20"
      },
      {
        id: "SPA-B-06-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un quadrato ha perimetro 32 cm. Quanto misura ogni lato?",
        opzioni: ["6 cm", "7 cm", "8 cm", "10 cm"],
        corretta: 2
      },
      {
        id: "SPA-B-06-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Due figure con lo stesso perimetro hanno sempre la stessa forma.",
        risposta: false
      },
      
      // DIFFICILI
      {
        id: "SPA-B-06-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un triangolo equilatero ha perimetro 45 cm. Quanto misura ogni lato?",
        opzioni: ["12 cm", "13 cm", "15 cm", "18 cm"],
        corretta: 2
      },
      {
        id: "SPA-B-06-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un rettangolo ha base 12 cm e altezza 8 cm. Quanto misura il perimetro?",
        risposta: "40"
      },
      {
        id: "SPA-B-06-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un pentagono regolare con lato 6 cm ha perimetro 30 cm.",
        risposta: true
      }
    ]
  },

  "SPA-I-01": {
    nome: "Angoli: tipi e misura",
    domande: [
      // FACILI
      {
        id: "SPA-I-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanti gradi misura un angolo retto?",
        risposta: "90"
      },
      {
        id: "SPA-I-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Un angolo di 90 gradi è:",
        opzioni: ["Acuto", "Retto", "Ottuso", "Piatto"],
        corretta: 1
      },
      {
        id: "SPA-I-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un angolo piatto misura 180 gradi.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-I-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Come si chiama un angolo che misura meno di 90 gradi?",
        risposta: "acuto"
      },
      {
        id: "SPA-I-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un angolo di 120 gradi è:",
        opzioni: ["Acuto", "Retto", "Ottuso", "Piatto"],
        corretta: 2
      },
      {
        id: "SPA-I-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Un angolo ottuso è maggiore di 90 gradi ma minore di 180 gradi.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-I-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quanti gradi misura un angolo giro completo?",
        opzioni: ["180°", "270°", "360°", "450°"],
        corretta: 2
      },
      {
        id: "SPA-I-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Due angoli complementari sommano 90°. Se uno misura 35°, quanto misura l'altro?",
        risposta: "55"
      },
      {
        id: "SPA-I-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un angolo di 45° è la metà di un angolo retto.",
        risposta: true
      }
    ]
  },

  "SPA-I-02": {
    nome: "Triangoli: classificazione",
    domande: [
      // FACILI
      {
        id: "SPA-I-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Come si chiama un triangolo con tutti i lati uguali?",
        risposta: "equilatero"
      },
      {
        id: "SPA-I-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Un triangolo con un angolo di 90 gradi si chiama:",
        opzioni: ["Acutangolo", "Rettangolo", "Ottusangolo", "Equilatero"],
        corretta: 1
      },
      {
        id: "SPA-I-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un triangolo ha sempre 3 lati.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-I-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Come si chiama un triangolo con due lati uguali?",
        risposta: "isoscele"
      },
      {
        id: "SPA-I-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un triangolo con tutti gli angoli minori di 90° si chiama:",
        opzioni: ["Rettangolo", "Acutangolo", "Ottusangolo", "Scaleno"],
        corretta: 1
      },
      {
        id: "SPA-I-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Un triangolo scaleno ha tutti i lati di lunghezza diversa.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-I-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un triangolo ha un angolo di 110°. Come si classifica per gli angoli?",
        opzioni: ["Acutangolo", "Rettangolo", "Ottusangolo", "Equiangolo"],
        corretta: 2
      },
      {
        id: "SPA-I-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "In un triangolo, la somma degli angoli interni è sempre... (scrivi il numero di gradi)",
        risposta: "180"
      },
      {
        id: "SPA-I-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un triangolo equilatero è sempre anche equiangolo (angoli tutti uguali).",
        risposta: true
      }
    ]
  },

  "SPA-I-03": {
    nome: "Quadrilateri: classificazione",
    domande: [
      // FACILI
      {
        id: "SPA-I-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanti lati ha un quadrilatero?",
        risposta: "4"
      },
      {
        id: "SPA-I-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Un quadrato ha:",
        opzioni: ["4 lati uguali", "3 lati uguali", "2 lati uguali", "Nessun lato uguale"],
        corretta: 0
      },
      {
        id: "SPA-I-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un rettangolo ha 4 angoli retti.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-I-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Come si chiama un quadrilatero con 4 lati uguali ma angoli non retti?",
        risposta: "rombo"
      },
      {
        id: "SPA-I-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un trapezio ha:",
        opzioni: ["4 lati paralleli", "3 lati paralleli", "2 lati paralleli", "Nessun lato parallelo"],
        corretta: 2
      },
      {
        id: "SPA-I-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Un parallelogramma ha i lati opposti paralleli.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-I-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quale quadrilatero NON ha lati paralleli?",
        opzioni: ["Trapezio", "Rombo", "Deltoide", "Parallelogramma"],
        corretta: 2
      },
      {
        id: "SPA-I-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanti assi di simmetria ha un quadrato?",
        risposta: "4"
      },
      {
        id: "SPA-I-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un rombo è sempre anche un quadrato.",
        risposta: false
      }
    ]
  },

  "SPA-I-04": {
    nome: "Perimetro con formule",
    domande: [
      // FACILI
      {
        id: "SPA-I-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un quadrato ha lato 5 cm. Quanto misura il perimetro?",
        risposta: "20"
      },
      {
        id: "SPA-I-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La formula del perimetro del quadrato è:",
        opzioni: ["lato + lato", "lato × 2", "lato × 4", "lato × lato"],
        corretta: 2
      },
      {
        id: "SPA-I-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il perimetro di un rettangolo si calcola: (base + altezza) × 2.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-I-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un rettangolo ha base 9 cm e altezza 5 cm. Quanto misura il perimetro?",
        risposta: "28"
      },
      {
        id: "SPA-I-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un triangolo equilatero ha lato 8 cm. Quanto misura il perimetro?",
        opzioni: ["16 cm", "20 cm", "24 cm", "32 cm"],
        corretta: 2
      },
      {
        id: "SPA-I-04-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Il perimetro di un rombo con lato 7 cm è 28 cm.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-I-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un rettangolo ha perimetro 50 cm e base 15 cm. Quanto misura l'altezza?",
        opzioni: ["8 cm", "10 cm", "12 cm", "15 cm"],
        corretta: 1
      },
      {
        id: "SPA-I-04-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un quadrato ha perimetro 60 cm. Quanto misura il lato?",
        risposta: "15"
      },
      {
        id: "SPA-I-04-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un esagono regolare con lato 6 cm ha perimetro 36 cm.",
        risposta: true
      }
    ]
  },

  "SPA-I-05": {
    nome: "Area di quadrato e rettangolo",
    domande: [
      // FACILI
      {
        id: "SPA-I-05-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un quadrato ha lato 3 cm. Quanto misura l'area?",
        risposta: "9"
      },
      {
        id: "SPA-I-05-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La formula dell'area del quadrato è:",
        opzioni: ["lato + lato", "lato × 2", "lato × 4", "lato × lato"],
        corretta: 3
      },
      {
        id: "SPA-I-05-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "L'area di un rettangolo si calcola: base × altezza.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-I-05-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un rettangolo ha base 8 cm e altezza 5 cm. Quanto misura l'area?",
        risposta: "40"
      },
      {
        id: "SPA-I-05-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un quadrato ha area 64 cm². Quanto misura il lato?",
        opzioni: ["6 cm", "7 cm", "8 cm", "9 cm"],
        corretta: 2
      },
      {
        id: "SPA-I-05-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Due rettangoli con lo stesso perimetro hanno sempre la stessa area.",
        risposta: false
      },
      
      // DIFFICILI
      {
        id: "SPA-I-05-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un rettangolo ha area 72 cm² e base 9 cm. Quanto misura l'altezza?",
        opzioni: ["6 cm", "7 cm", "8 cm", "9 cm"],
        corretta: 2
      },
      {
        id: "SPA-I-05-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un quadrato ha perimetro 32 cm. Quanto misura la sua area?",
        risposta: "64"
      },
      {
        id: "SPA-I-05-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un rettangolo 12×3 ha la stessa area di un rettangolo 9×4.",
        risposta: true
      }
    ]
  },

  "REL-B-01": {
    nome: "Lettura di tabelle semplici",
    domande: [
      // FACILI
      {
        id: "REL-B-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "In una tabella, lunedì sono stati venduti 15 gelati e martedì 20. Quanti gelati martedì?",
        risposta: "20"
      },
      {
        id: "REL-B-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "In una tabella vedo: Gatti 12, Cani 18. Ci sono più gatti o cani?",
        opzioni: ["Gatti", "Cani", "Sono uguali", "Non si sa"],
        corretta: 1
      },
      {
        id: "REL-B-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Una tabella aiuta a organizzare i dati in modo ordinato.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-B-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Tabella temperature: Lun 18°, Mar 20°, Mer 22°. Quale giorno fa più caldo?",
        risposta: "mercoledì"
      },
      {
        id: "REL-B-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Tabella punti: Anna 85, Marco 92, Lucia 88. Chi ha il punteggio più basso?",
        opzioni: ["Anna", "Marco", "Lucia", "Tutti uguali"],
        corretta: 0
      },
      {
        id: "REL-B-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "In una tabella a doppia entrata si possono incrociare righe e colonne.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-B-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Tabella visitatori museo: Sab 245, Dom 318, Lun 156. Quanti visitatori nel weekend?",
        opzioni: ["401", "474", "563", "719"],
        corretta: 2
      },
      {
        id: "REL-B-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Tabella libri letti: Gen 12, Feb 15, Mar 18. Quanti libri in più a marzo rispetto a gennaio?",
        risposta: "6"
      },
      {
        id: "REL-B-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se una colonna della tabella mostra sempre valori crescenti, i dati sono in ordine crescente.",
        risposta: true
      }
    ]
  },
"REL-B-02": {
    nome: "Classificare per attributi",
    domande: [
      // FACILI
      {
        id: "REL-B-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quale di questi numeri è pari: 7, 12, 15, 19?",
        risposta: "12"
      },
      {
        id: "REL-B-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale animale è un mammifero?",
        opzioni: ["Serpente", "Cane", "Pesce", "Uccello"],
        corretta: 1
      },
      {
        id: "REL-B-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "I numeri pari finiscono per 0, 2, 4, 6 o 8.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-B-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Classifica questi numeri in pari e dispari: 13, 28, 35, 42. Quanti sono i pari?",
        risposta: "2"
      },
      {
        id: "REL-B-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale gruppo contiene SOLO multipli di 5?",
        opzioni: ["10, 15, 22", "5, 10, 15", "5, 12, 20", "15, 18, 25"],
        corretta: 1
      },
      {
        id: "REL-B-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Tutti i numeri che finiscono per 5 sono multipli di 5.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-B-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quale numero NON appartiene al gruppo: 12, 18, 24, 31, 36?",
        opzioni: ["12", "18", "31", "36"],
        corretta: 2
      },
      {
        id: "REL-B-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Tra i numeri da 20 a 30, quanti sono divisibili per 3?",
        risposta: "4"
      },
      {
        id: "REL-B-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un numero può essere sia pari che multiplo di 3 contemporaneamente.",
        risposta: true
      }
    ]
  },

  "REL-B-03": {
    nome: "Successioni semplici",
    domande: [
      // FACILI
      {
        id: "REL-B-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Completa la successione: 5, 10, 15, 20, ...",
        risposta: "25"
      },
      {
        id: "REL-B-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quale numero manca? 2, 4, 6, ..., 10",
        opzioni: ["5", "7", "8", "9"],
        corretta: 2
      },
      {
        id: "REL-B-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nella successione 10, 20, 30, 40 ogni numero aumenta di 10.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-B-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Completa: 3, 6, 9, 12, ..., 18. Quale numero manca?",
        risposta: "15"
      },
      {
        id: "REL-B-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale regola segue la successione 100, 90, 80, 70?",
        opzioni: ["Aumenta di 10", "Diminuisce di 10", "Raddoppia", "Dimezza"],
        corretta: 1
      },
      {
        id: "REL-B-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Nella successione 4, 8, 12, 16 ogni numero è multiplo di 4.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-B-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quale numero completa la successione: 2, 4, 8, 16, ...?",
        opzioni: ["20", "24", "28", "32"],
        corretta: 3
      },
      {
        id: "REL-B-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Successione: 50, 45, 40, 35. Quale numero viene dopo?",
        risposta: "30"
      },
      {
        id: "REL-B-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Nella successione 1, 4, 9, 16, 25 ogni numero è un quadrato perfetto.",
        risposta: true
      }
    ]
  },

  "REL-B-04": {
    nome: "Vero/falso su frasi numeriche",
    domande: [
      // FACILI
      {
        id: "REL-B-04-F1",
        livello: "facile",
        tipo: "vero_falso",
        testo: "5 + 3 = 8",
        risposta: true
      },
      {
        id: "REL-B-04-F2",
        livello: "facile",
        tipo: "vero_falso",
        testo: "10 - 4 = 7",
        risposta: false
      },
      {
        id: "REL-B-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "6 × 2 = 12",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-B-04-M1",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Tutti i numeri pari sono divisibili per 2.",
        risposta: true
      },
      {
        id: "REL-B-04-M2",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Alcuni numeri dispari sono divisibili per 5.",
        risposta: true
      },
      {
        id: "REL-B-04-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Nessun numero pari è primo tranne il 2.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-B-04-D1",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Il prodotto di due numeri dispari è sempre dispari.",
        risposta: true
      },
      {
        id: "REL-B-04-D2",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "La somma di tre numeri consecutivi è sempre divisibile per 3.",
        risposta: true
      },
      {
        id: "REL-B-04-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se un numero è divisibile per 6, allora è divisibile sia per 2 che per 3.",
        risposta: true
      }
    ]
  },

  "REL-I-01": {
    nome: "Proporzionalità diretta",
    domande: [
      // FACILI
      {
        id: "REL-I-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Se 1 kg di mele costa 3 euro, quanto costano 2 kg?",
        risposta: "6"
      },
      {
        id: "REL-I-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Se 2 matite costano 4 euro, quanto costano 4 matite?",
        opzioni: ["6 euro", "8 euro", "10 euro", "12 euro"],
        corretta: 1
      },
      {
        id: "REL-I-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Se raddoppio i kg di pane, raddoppia anche il prezzo.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-I-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Una ricetta per 4 persone richiede 200 g di riso. Quanto riso serve per 8 persone?",
        risposta: "400"
      },
      {
        id: "REL-I-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Se 3 metri di stoffa costano 15 euro, quanto costano 5 metri?",
        opzioni: ["20 euro", "25 euro", "30 euro", "35 euro"],
        corretta: 1
      },
      {
        id: "REL-I-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "In una proporzione diretta, se una grandezza triplica, anche l'altra triplica.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-I-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un'auto consuma 6 litri ogni 100 km. Quanti litri servono per 350 km?",
        opzioni: ["18 litri", "21 litri", "24 litri", "27 litri"],
        corretta: 1
      },
      {
        id: "REL-I-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Se 5 operai costruiscono un muro in 12 giorni, quanti giorni servono a 10 operai? (proporzionalità inversa)",
        risposta: "6"
      },
      {
        id: "REL-I-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Velocità e tempo per percorrere una distanza fissa sono in proporzionalità diretta.",
        risposta: false
      }
    ]
  },

  "REL-I-02": {
    nome: "Proporzionalità inversa: concetto",
    domande: [
      // FACILI
      {
        id: "REL-I-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Se vado più veloce, impiego più o meno tempo?",
        risposta: "meno"
      },
      {
        id: "REL-I-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Se più persone fanno un lavoro, il tempo necessario:",
        opzioni: ["Aumenta", "Diminuisce", "Resta uguale", "Raddoppia"],
        corretta: 1
      },
      {
        id: "REL-I-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Velocità e tempo sono grandezze inversamente proporzionali.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-I-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Se 4 rubinetti riempiono una vasca in 20 minuti, quanti minuti servono a 8 rubinetti?",
        risposta: "10"
      },
      {
        id: "REL-I-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale coppia di grandezze è inversamente proporzionale?",
        opzioni: ["Kg e prezzo", "Operai e tempo", "Km e litri", "Ore e stipendio"],
        corretta: 1
      },
      {
        id: "REL-I-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Se raddoppio il numero di operai, il tempo si dimezza.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-I-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "3 macchine stampano 1000 fogli in 15 minuti. Quanto tempo servono a 5 macchine?",
        opzioni: ["7 minuti", "9 minuti", "11 minuti", "13 minuti"],
        corretta: 1
      },
      {
        id: "REL-I-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Se 6 persone mangiano una torta in 12 minuti, quanti minuti servono a 4 persone?",
        risposta: "18"
      },
      {
        id: "REL-I-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Nella proporzionalità inversa, il prodotto delle due grandezze è costante.",
        risposta: true
      }
    ]
  },

  "REL-I-03": {
    nome: "Lettura del piano cartesiano",
    domande: [
      // FACILI
      {
        id: "REL-I-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Nel punto (3, 5) quale numero indica l'asse orizzontale?",
        risposta: "3"
      },
      {
        id: "REL-I-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Il punto (0, 0) si chiama:",
        opzioni: ["Centro", "Origine", "Inizio", "Punto zero"],
        corretta: 1
      },
      {
        id: "REL-I-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "In un punto (x, y), x è l'ascissa e y è l'ordinata.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-I-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un punto ha ascissa 4 e ordinata 6. Scrivi le sue coordinate.",
        risposta: "(4, 6)"
      },
      {
        id: "REL-I-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quale punto è più in alto sul piano: (2, 5) o (2, 3)?",
        opzioni: ["(2, 5)", "(2, 3)", "Sono alla stessa altezza", "Non si può dire"],
        corretta: 0
      },
      {
        id: "REL-I-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "I punti sull'asse x hanno ordinata uguale a 0.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-I-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quale punto si trova nel secondo quadrante?",
        opzioni: ["(3, 4)", "(-2, 5)", "(4, -1)", "(-3, -2)"],
        corretta: 1
      },
      {
        id: "REL-I-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Qual è la distanza tra i punti (2, 3) e (2, 7)?",
        risposta: "4"
      },
      {
        id: "REL-I-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Due punti con la stessa ascissa giacciono su una retta verticale.",
        risposta: true
      }
    ]
  },

  "REL-I-04": {
    nome: "Tabelle di proporzionalità",
    domande: [
      // FACILI
      {
        id: "REL-I-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Tabella: kg 1→2 euro, kg 2→4 euro, kg 3→? euro",
        risposta: "6"
      },
      {
        id: "REL-I-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Tabella: ore 1→5 km, ore 2→10 km, ore 3→15 km. Quanto vale il rapporto km/ore?",
        opzioni: ["3", "5", "10", "15"],
        corretta: 1
      },
      {
        id: "REL-I-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "In una tabella di proporzionalità, se raddoppio la prima grandezza, raddoppia anche la seconda.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-I-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Tabella: persone 2→8 panini, persone 4→16 panini, persone 6→? panini",
        risposta: "24"
      },
      {
        id: "REL-I-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Completa: metri 5→15 euro, metri 10→30 euro, metri 15→?",
        opzioni: ["40 euro", "45 euro", "50 euro", "55 euro"],
        corretta: 1
      },
      {
        id: "REL-I-04-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "In una tabella proporzionale, il rapporto tra i valori corrispondenti è sempre costante.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-I-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Tabella: giorni 3→72 pagine, giorni 5→120 pagine. Quante pagine in 8 giorni?",
        opzioni: ["168", "180", "192", "200"],
        corretta: 2
      },
      {
        id: "REL-I-04-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Se 4 bottiglie costano 12 euro, quanto costa 1 bottiglia?",
        risposta: "3"
      },
      {
        id: "REL-I-04-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Una tabella con valori 2→6, 4→12, 6→18 rappresenta proporzionalità diretta.",
        risposta: true
      }
    ]
  },

  "REL-A-01": {
    nome: "Equazione di primo grado semplice",
    domande: [
      // FACILI
      {
        id: "REL-A-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Risolvi: x + 5 = 12. Quanto vale x?",
        risposta: "7"
      },
      {
        id: "REL-A-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Risolvi: x - 3 = 10. Quanto vale x?",
        opzioni: ["7", "10", "13", "30"],
        corretta: 2
      },
      {
        id: "REL-A-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nell'equazione x + 8 = 15, x vale 7.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-A-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Risolvi: 2x = 18. Quanto vale x?",
        risposta: "9"
      },
      {
        id: "REL-A-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Risolvi: 3x = 21. Quanto vale x?",
        opzioni: ["6", "7", "8", "9"],
        corretta: 1
      },
      {
        id: "REL-A-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "L'equazione x/4 = 5 ha soluzione x = 20.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-A-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Risolvi: 2x + 5 = 17. Quanto vale x?",
        opzioni: ["4", "5", "6", "7"],
        corretta: 2
      },
      {
        id: "REL-A-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Risolvi: 3x - 4 = 14. Quanto vale x?",
        risposta: "6"
      },
      {
        id: "REL-A-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "L'equazione 5x = 35 e l'equazione x + 30 = 37 hanno la stessa soluzione.",
        risposta: true
      }
    ]
  },

  "REL-A-02": {
    nome: "Lettura di una formula",
    domande: [
      // FACILI
      {
        id: "REL-A-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Nella formula P = 4 × l, quanto vale P se l = 5?",
        risposta: "20"
      },
      {
        id: "REL-A-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Nella formula A = l × l, quanto vale A se l = 6?",
        opzioni: ["12", "24", "30", "36"],
        corretta: 3
      },
      {
        id: "REL-A-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nella formula C = 2 × r, se r = 3 allora C = 6.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-A-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Nella formula A = b × h, quanto vale A se b = 8 e h = 5?",
        risposta: "40"
      },
      {
        id: "REL-A-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Nella formula P = 2 × (b + h), quanto vale P se b = 7 e h = 4?",
        opzioni: ["18", "20", "22", "24"],
        corretta: 2
      },
      {
        id: "REL-A-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Nella formula V = l × l × l, se l = 3 allora V = 27.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-A-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Nella formula A = (b × h) / 2, quanto vale A se b = 10 e h = 6?",
        opzioni: ["25", "30", "35", "40"],
        corretta: 1
      },
      {
        id: "REL-A-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Nella formula d = v × t, se v = 60 e t = 3, quanto vale d?",
        risposta: "180"
      },
      {
        id: "REL-A-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Nella formula A = π × r², se r raddoppia, A quadruplica.",
        risposta: true
      }
    ]
  },

  "REL-A-03": {
    nome: "Punti sul piano cartesiano",
    domande: [
      // FACILI
      {
        id: "REL-A-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Il punto P ha coordinate (4, 3). Qual è la sua ascissa?",
        risposta: "4"
      },
      {
        id: "REL-A-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Il punto (0, 5) si trova:",
        opzioni: ["Sull'asse x", "Sull'asse y", "Nell'origine", "Fuori dagli assi"],
        corretta: 1
      },
      {
        id: "REL-A-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il punto (3, 3) ha ascissa e ordinata uguali.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "REL-A-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Collegando i punti (0,0), (4,0), (4,3), (0,3) quale figura si forma?",
        risposta: "rettangolo"
      },
      {
        id: "REL-A-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Il punto P(5, -2) si trova:",
        opzioni: ["Primo quadrante", "Secondo quadrante", "Terzo quadrante", "Quarto quadrante"],
        corretta: 3
      },
      {
        id: "REL-A-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "I punti con ordinata negativa si trovano sotto l'asse x.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "REL-A-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Collegando (1,1), (4,1), (4,4), (1,4) e tornando a (1,1), quale figura si forma?",
        opzioni: ["Rettangolo", "Quadrato", "Rombo", "Trapezio"],
        corretta: 1
      },
      {
        id: "REL-A-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Qual è la distanza tra (0, 0) e (3, 4)?",
        risposta: "5"
      },
      {
        id: "REL-A-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Il punto medio tra (2, 4) e (6, 4) è (4, 4).",
        risposta: true
      }
    ]
  },

  "DAT-B-01": {
    nome: "Lettura di un grafico semplice",
    domande: [
      // FACILI
      {
        id: "DAT-B-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "In un grafico vedo: lunedì 10 visitatori, martedì 15. Quanti visitatori martedì?",
        risposta: "15"
      },
      {
        id: "DAT-B-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Grafico preferenze: pizza 20, pasta 15, riso 10. Quale piatto piace di più?",
        opzioni: ["Pizza", "Pasta", "Riso", "Tutti uguali"],
        corretta: 0
      },
      {
        id: "DAT-B-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un grafico aiuta a vedere i dati in modo visivo.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-B-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Grafico vendite: lun 25, mar 30, mer 35. Quale giorno ha venduto di più?",
        risposta: "mercoledì"
      },
      {
        id: "DAT-B-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Grafico temperature: lun 18°, mar 22°, mer 20°. Qual è la temperatura media?",
        opzioni: ["18°", "19°", "20°", "21°"],
        corretta: 2
      },
      {
        id: "DAT-B-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "In un istogramma, l'altezza delle barre indica la quantità.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-B-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Grafico presenze: gen 120, feb 105, mar 135. Quante presenze totali nel trimestre?",
        opzioni: ["340", "350", "360", "370"],
        corretta: 2
      },
      {
        id: "DAT-B-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Grafico libri: Anna 12, Marco 18, Lucia 15. Quanti libri in più Marco rispetto ad Anna?",
        risposta: "6"
      },
      {
        id: "DAT-B-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se due barre di un istogramma hanno la stessa altezza, i valori corrispondenti sono uguali.",
        risposta: true
      }
    ]
  },
"NUM-A-05": {
    nome: "Radice di quadrati perfetti",
    domande: [
      // FACILI
      {
        id: "NUM-A-05-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanto fa la radice quadrata di 4?",
        risposta: "2"
      },
      {
        id: "NUM-A-05-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanto fa la radice quadrata di 9?",
        opzioni: ["2", "3", "4", "5"],
        corretta: 1
      },
      {
        id: "NUM-A-05-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "La radice quadrata di 16 è 4.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-A-05-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Quanto fa la radice quadrata di 36?",
        risposta: "6"
      },
      {
        id: "NUM-A-05-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanto fa la radice quadrata di 49?",
        opzioni: ["6", "7", "8", "9"],
        corretta: 1
      },
      {
        id: "NUM-A-05-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "La radice quadrata di 64 è 8.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-A-05-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quanto fa la radice quadrata di 81?",
        opzioni: ["7", "8", "9", "10"],
        corretta: 2
      },
      {
        id: "NUM-A-05-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Quanto fa la radice quadrata di 100?",
        risposta: "10"
      },
      {
        id: "NUM-A-05-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "La radice quadrata di 25 è la metà di 10.",
        risposta: true
      }
    ]
  },

  "NUM-A-06": {
    nome: "Problema con percentuale",
    domande: [
      // FACILI
      {
        id: "NUM-A-06-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un libro costa 20 euro. Con lo sconto del 50% quanto costa?",
        risposta: "10"
      },
      {
        id: "NUM-A-06-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Un gioco costa 30 euro. Con lo sconto del 10% quanto si risparmia?",
        opzioni: ["2 euro", "3 euro", "4 euro", "5 euro"],
        corretta: 1
      },
      {
        id: "NUM-A-06-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Se un oggetto costa 40 euro e ha lo sconto del 25%, costa 30 euro.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "NUM-A-06-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In una classe di 30 alunni, il 60% sono femmine. Quante sono le femmine?",
        risposta: "18"
      },
      {
        id: "NUM-A-06-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Una bici costa 150 euro. Con lo sconto del 20% quanto costa?",
        opzioni: ["100 euro", "110 euro", "120 euro", "130 euro"],
        corretta: 2
      },
      {
        id: "NUM-A-06-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Se il 75% di 80 è 60, allora il 25% di 80 è 20.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "NUM-A-06-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un negozio vende 200 magliette. Il 35% sono rosse. Quante magliette rosse ci sono?",
        opzioni: ["60", "65", "70", "75"],
        corretta: 2
      },
      {
        id: "NUM-A-06-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Una TV costa 400 euro. Con lo sconto del 15% quanto si risparmia?",
        risposta: "60"
      },
      {
        id: "NUM-A-06-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se un prezzo aumenta del 20% e poi diminuisce del 20%, torna al prezzo originale.",
        risposta: false
      }
    ]
  },

  "SPA-I-06": {
    nome: "Equivalenze tra unità di misura",
    domande: [
      // FACILI
      {
        id: "SPA-I-06-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Quanti centimetri sono 2 metri?",
        risposta: "200"
      },
      {
        id: "SPA-I-06-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Quanti grammi sono 1 kg?",
        opzioni: ["10 g", "100 g", "1000 g", "10000 g"],
        corretta: 2
      },
      {
        id: "SPA-I-06-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "1 litro sono 1000 millilitri.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-I-06-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Quanti millilitri sono 3 litri?",
        risposta: "3000"
      },
      {
        id: "SPA-I-06-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Quanti grammi sono 2,5 kg?",
        opzioni: ["250 g", "2500 g", "25000 g", "250000 g"],
        corretta: 1
      },
      {
        id: "SPA-I-06-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "500 centimetri sono 5 metri.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-I-06-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Quanti metri sono 4,5 km?",
        opzioni: ["45 m", "450 m", "4500 m", "45000 m"],
        corretta: 2
      },
      {
        id: "SPA-I-06-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Una bottiglia contiene 750 ml. Quanti litri sono?",
        risposta: "0.75"
      },
      {
        id: "SPA-I-06-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "3,2 kg sono 3200 grammi.",
        risposta: true
      }
    ]
  },

  "SPA-A-01": {
    nome: "Area del triangolo",
    domande: [
      // FACILI
      {
        id: "SPA-A-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un triangolo ha base 6 cm e altezza 4 cm. Quanto misura l'area?",
        risposta: "12"
      },
      {
        id: "SPA-A-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La formula dell'area del triangolo è:",
        opzioni: ["base × altezza", "(base × altezza) / 2", "base + altezza", "(base + altezza) / 2"],
        corretta: 1
      },
      {
        id: "SPA-A-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "L'area di un triangolo è sempre la metà di un rettangolo con stessa base e altezza.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-A-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un triangolo ha base 10 cm e altezza 7 cm. Quanto misura l'area?",
        risposta: "35"
      },
      {
        id: "SPA-A-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un triangolo ha area 24 cm² e base 6 cm. Quanto misura l'altezza?",
        opzioni: ["6 cm", "7 cm", "8 cm", "9 cm"],
        corretta: 2
      },
      {
        id: "SPA-A-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Due triangoli con stessa base e stessa altezza hanno sempre la stessa area.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-A-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un triangolo ha area 60 cm² e altezza 12 cm. Quanto misura la base?",
        opzioni: ["8 cm", "10 cm", "12 cm", "15 cm"],
        corretta: 1
      },
      {
        id: "SPA-A-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un triangolo equilatero con lato 10 cm ha altezza 8,66 cm. Quanto misura l'area?",
        risposta: "43.3"
      },
      {
        id: "SPA-A-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un triangolo rettangolo con cateti 6 cm e 8 cm ha area 24 cm².",
        risposta: true
      }
    ]
  },

  "SPA-A-02": {
    nome: "Area di parallelogramma e rombo",
    domande: [
      // FACILI
      {
        id: "SPA-A-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un parallelogramma ha base 5 cm e altezza 3 cm. Quanto misura l'area?",
        risposta: "15"
      },
      {
        id: "SPA-A-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La formula dell'area del parallelogramma è:",
        opzioni: ["base × altezza", "(base × altezza) / 2", "lato × lato", "base + altezza"],
        corretta: 0
      },
      {
        id: "SPA-A-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un parallelogramma ha area uguale a un rettangolo con stessa base e altezza.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-A-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un rombo ha diagonali di 8 cm e 6 cm. Quanto misura l'area?",
        risposta: "24"
      },
      {
        id: "SPA-A-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un parallelogramma ha area 42 cm² e base 7 cm. Quanto misura l'altezza?",
        opzioni: ["5 cm", "6 cm", "7 cm", "8 cm"],
        corretta: 1
      },
      {
        id: "SPA-A-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "L'area del rombo si calcola: (diagonale maggiore × diagonale minore) / 2.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-A-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un rombo ha area 48 cm² e diagonale maggiore 12 cm. Quanto misura la diagonale minore?",
        opzioni: ["6 cm", "7 cm", "8 cm", "9 cm"],
        corretta: 2
      },
      {
        id: "SPA-A-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un parallelogramma ha base 15 cm e altezza 9 cm. Quanto misura l'area?",
        risposta: "135"
      },
      {
        id: "SPA-A-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Un rombo con lato 5 cm ha necessariamente area 25 cm².",
        risposta: false
      }
    ]
  },

  "SPA-A-03": {
    nome: "Cerchio: circonferenza e area",
    domande: [
      // FACILI
      {
        id: "SPA-A-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un cerchio ha raggio 2 cm. Quanto misura il diametro?",
        risposta: "4"
      },
      {
        id: "SPA-A-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La formula della circonferenza è:",
        opzioni: ["π × r", "2 × π × r", "π × r²", "2 × r"],
        corretta: 1
      },
      {
        id: "SPA-A-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il diametro è il doppio del raggio.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-A-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un cerchio ha raggio 5 cm. Quanto misura la circonferenza? (usa π = 3,14)",
        risposta: "31.4"
      },
      {
        id: "SPA-A-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un cerchio ha raggio 3 cm. Quanto misura l'area? (usa π = 3,14)",
        opzioni: ["18,84 cm²", "28,26 cm²", "37,68 cm²", "47,1 cm²"],
        corretta: 1
      },
      {
        id: "SPA-A-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "L'area del cerchio si calcola con la formula π × r².",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-A-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un cerchio ha diametro 10 cm. Quanto misura l'area? (usa π = 3,14)",
        opzioni: ["62,8 cm²", "78,5 cm²", "94,2 cm²", "100 cm²"],
        corretta: 1
      },
      {
        id: "SPA-A-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un cerchio ha circonferenza 31,4 cm (π = 3,14). Quanto misura il raggio?",
        risposta: "5"
      },
      {
        id: "SPA-A-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se il raggio raddoppia, l'area del cerchio quadruplica.",
        risposta: true
      }
    ]
  },

  "SPA-A-04": {
    nome: "Teorema di Pitagora applicato",
    domande: [
      // FACILI
      {
        id: "SPA-A-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "In un triangolo rettangolo, i cateti sono 3 cm e 4 cm. Quanto misura l'ipotenusa?",
        risposta: "5"
      },
      {
        id: "SPA-A-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Il teorema di Pitagora vale per quali triangoli?",
        opzioni: ["Tutti", "Solo equilateri", "Solo rettangoli", "Solo isosceli"],
        corretta: 2
      },
      {
        id: "SPA-A-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nel teorema di Pitagora, l'ipotenusa è il lato più lungo.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-A-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un triangolo rettangolo ha cateti 6 cm e 8 cm. Quanto misura l'ipotenusa?",
        risposta: "10"
      },
      {
        id: "SPA-A-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un triangolo rettangolo ha ipotenusa 13 cm e un cateto 5 cm. Quanto misura l'altro cateto?",
        opzioni: ["10 cm", "11 cm", "12 cm", "13 cm"],
        corretta: 2
      },
      {
        id: "SPA-A-04-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "In un triangolo con lati 5, 12, 13 l'angolo retto è opposto al lato di 13.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-A-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un triangolo rettangolo ha cateti 9 cm e 12 cm. Quanto misura l'ipotenusa?",
        opzioni: ["13 cm", "15 cm", "17 cm", "20 cm"],
        corretta: 1
      },
      {
        id: "SPA-A-04-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un triangolo rettangolo ha ipotenusa 25 cm e un cateto 7 cm. Quanto misura l'altro cateto?",
        risposta: "24"
      },
      {
        id: "SPA-A-04-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se i cateti di un triangolo rettangolo sono entrambi 5 cm, l'ipotenusa è 10 cm.",
        risposta: false
      }
    ]
  },

  "SPA-A-05": {
    nome: "Volume del cubo e parallelepipedo",
    domande: [
      // FACILI
      {
        id: "SPA-A-05-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Un cubo ha spigolo 2 cm. Quanto misura il volume?",
        risposta: "8"
      },
      {
        id: "SPA-A-05-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La formula del volume del cubo è:",
        opzioni: ["lato × lato", "lato × lato × lato", "lato × 6", "lato × 4"],
        corretta: 1
      },
      {
        id: "SPA-A-05-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Il volume si misura in centimetri cubi (cm³).",
        risposta: true
      },
      
      // MEDIE
      {
        id: "SPA-A-05-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Un parallelepipedo ha dimensioni 4 cm, 3 cm, 2 cm. Quanto misura il volume?",
        risposta: "24"
      },
      {
        id: "SPA-A-05-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Un cubo ha spigolo 5 cm. Quanto misura il volume?",
        opzioni: ["100 cm³", "125 cm³", "150 cm³", "175 cm³"],
        corretta: 1
      },
      {
        id: "SPA-A-05-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Il volume del parallelepipedo si calcola: lunghezza × larghezza × altezza.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "SPA-A-05-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Un parallelepipedo ha volume 120 cm³, base 6 cm e larghezza 4 cm. Quanto misura l'altezza?",
        opzioni: ["3 cm", "4 cm", "5 cm", "6 cm"],
        corretta: 2
      },
      {
        id: "SPA-A-05-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Un cubo ha volume 64 cm³. Quanto misura lo spigolo?",
        risposta: "4"
      },
      {
        id: "SPA-A-05-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se raddoppio tutti gli spigoli di un cubo, il volume diventa 8 volte maggiore.",
        risposta: true
      }
    ]
  },

  "DAT-B-02": {
    nome: "Costruire una tabella",
    domande: [
      // FACILI
      {
        id: "DAT-B-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "In una tabella scrivo: Lunedì 5 presenti. Martedì quanti? (dato mancante: martedì 7 presenti)",
        risposta: "7"
      },
      {
        id: "DAT-B-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Una tabella serve a:",
        opzioni: ["Disegnare", "Organizzare dati", "Calcolare", "Misurare"],
        corretta: 1
      },
      {
        id: "DAT-B-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "In una tabella i dati devono essere ordinati.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-B-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Tabella temperature: Lun 18°, Mar 20°, Mer 22°, Gio ?. Se continua a salire di 2°, che temperatura giovedì?",
        risposta: "24"
      },
      {
        id: "DAT-B-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "In una tabella mancano 3 dati su 10. Quanti dati ci sono?",
        opzioni: ["3", "7", "10", "13"],
        corretta: 1
      },
      {
        id: "DAT-B-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Una tabella a doppia entrata ha righe e colonne.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-B-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Tabella vendite: Gen 120, Feb 135, Mar 150. Se la crescita è costante, quanto ad Aprile?",
        opzioni: ["160", "165", "170", "175"],
        corretta: 1
      },
      {
        id: "DAT-B-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Tabella punti: Anna 85, Marco ?, Lucia 92. La media è 90. Quanti punti Marco?",
        risposta: "93"
      },
      {
        id: "DAT-B-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "In una tabella ben costruita, ogni colonna rappresenta una categoria diversa.",
        risposta: true
      }
    ]
  },

  "DAT-B-03": {
    nome: "Certo, possibile, impossibile",
    domande: [
      // FACILI
      {
        id: "DAT-B-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Lanciando un dado normale, ottenere un 7 è certo, possibile o impossibile?",
        risposta: "impossibile"
      },
      {
        id: "DAT-B-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Domani sorgerà il sole. Questo evento è:",
        opzioni: ["Certo", "Possibile", "Impossibile", "Improbabile"],
        corretta: 0
      },
      {
        id: "DAT-B-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Un evento impossibile non può mai accadere.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-B-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In un sacchetto ci sono solo palline rosse. Estrarre una pallina blu è... (certo/possibile/impossibile)?",
        risposta: "impossibile"
      },
      {
        id: "DAT-B-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Lanciando una moneta, ottenere testa o croce è:",
        opzioni: ["Certo", "Possibile", "Impossibile", "Improbabile"],
        corretta: 0
      },
      {
        id: "DAT-B-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Un evento possibile può accadere oppure no.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-B-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "In un mazzo di 40 carte, pescare un asso è:",
        opzioni: ["Certo", "Possibile", "Impossibile", "Sempre vero"],
        corretta: 1
      },
      {
        id: "DAT-B-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Lanciando due dadi, la somma può essere 1? (certo/possibile/impossibile)",
        risposta: "impossibile"
      },
      {
        id: "DAT-B-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Estrarre una pallina rossa da un sacchetto con 5 rosse e 5 blu è un evento certo.",
        risposta: false
      }
    ]
  },

  "DAT-I-01": {
    nome: "Media aritmetica",
    domande: [
      // FACILI
      {
        id: "DAT-I-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Qual è la media di 4 e 6?",
        risposta: "5"
      },
      {
        id: "DAT-I-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Qual è la media di 10, 20, 30?",
        opzioni: ["15", "20", "25", "30"],
        corretta: 1
      },
      {
        id: "DAT-I-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "La media di 2, 4, 6 è 4.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-I-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Marco ha preso 7, 8, 6, 9 in matematica. Qual è la sua media?",
        risposta: "7.5"
      },
      {
        id: "DAT-I-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "La media di 12, 15, 18, 19 è:",
        opzioni: ["14", "15", "16", "17"],
        corretta: 2
      },
      {
        id: "DAT-I-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Per calcolare la media si sommano i numeri e si divide per quanti sono.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-I-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Cinque amici hanno 12, 14, 16, 18, 20 anni. Qual è l'età media?",
        opzioni: ["14", "15", "16", "17"],
        corretta: 2
      },
      {
        id: "DAT-I-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "La media di tre numeri è 15. Due numeri sono 12 e 18. Qual è il terzo?",
        risposta: "15"
      },
      {
        id: "DAT-I-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se aggiungo un numero uguale alla media, la media non cambia.",
        risposta: true
      }
    ]
  },

  "DAT-I-02": {
    nome: "Moda",
    domande: [
      // FACILI
      {
        id: "DAT-I-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Nella serie 2, 3, 3, 5, 3, 7, qual è la moda?",
        risposta: "3"
      },
      {
        id: "DAT-I-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La moda è:",
        opzioni: ["Il numero più grande", "Il numero che appare più volte", "La media", "Il numero più piccolo"],
        corretta: 1
      },
      {
        id: "DAT-I-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nella serie 5, 5, 5, 8, 9 la moda è 5.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-I-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Voti in classe: 6, 7, 7, 8, 7, 9, 6. Qual è la moda?",
        risposta: "7"
      },
      {
        id: "DAT-I-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Nella serie 10, 12, 12, 15, 12, 18 quale numero appare più spesso?",
        opzioni: ["10", "12", "15", "18"],
        corretta: 1
      },
      {
        id: "DAT-I-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Una serie può avere più di una moda.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-I-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Serie: 4, 5, 5, 6, 6, 7. Questa serie:",
        opzioni: ["Ha moda 4", "Ha moda 5 e 6", "Non ha moda", "Ha moda 7"],
        corretta: 1
      },
      {
        id: "DAT-I-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "In una classe, 8 alunni hanno 12 anni, 6 hanno 13 anni, 4 hanno 14 anni. Qual è l'età modale?",
        risposta: "12"
      },
      {
        id: "DAT-I-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se tutti i numeri appaiono una volta sola, la serie non ha moda.",
        risposta: true
      }
    ]
  },

  "DAT-I-03": {
    nome: "Interpretare un istogramma",
    domande: [
      // FACILI
      {
        id: "DAT-I-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "In un istogramma, il calcio ha barra alta 25, il basket 15. Quale sport è più praticato?",
        risposta: "calcio"
      },
      {
        id: "DAT-I-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "In un istogramma, cosa indica l'altezza della barra?",
        opzioni: ["Il colore", "La quantità", "Il nome", "L'ordine"],
        corretta: 1
      },
      {
        id: "DAT-I-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "In un istogramma, la barra più alta rappresenta il valore maggiore.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-I-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Istogramma sport: calcio 30, nuoto 20, tennis 15. Quanti alunni in più scelgono calcio rispetto a tennis?",
        risposta: "15"
      },
      {
        id: "DAT-I-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Istogramma materie preferite: mate 18, italiano 22, inglese 16, storia 14. Quale la meno preferita?",
        opzioni: ["Matematica", "Italiano", "Inglese", "Storia"],
        corretta: 3
      },
      {
        id: "DAT-I-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "In un istogramma si possono confrontare facilmente i dati.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-I-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Istogramma vendite: gen 120, feb 105, mar 135, apr 150. In quale mese le vendite sono cresciute di più rispetto al mese precedente?",
        opzioni: ["Gennaio", "Febbraio", "Marzo", "Aprile"],
        corretta: 2
      },
      {
        id: "DAT-I-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Istogramma: lun 45, mar 50, mer 55, gio 60, ven 65. Qual è la crescita media giornaliera?",
        risposta: "5"
      },
      {
        id: "DAT-I-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se due barre hanno altezze molto diverse, i valori corrispondenti sono molto diversi.",
        risposta: true
      }
    ]
  },

  "DAT-I-04": {
    nome: "Frequenza assoluta",
    domande: [
      // FACILI
      {
        id: "DAT-I-04-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Nella serie 4, 5, 4, 6, 4, qual è la frequenza assoluta del numero 4?",
        risposta: "3"
      },
      {
        id: "DAT-I-04-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La frequenza assoluta indica:",
        opzioni: ["Il valore medio", "Quante volte appare un dato", "Il valore più alto", "La differenza tra valori"],
        corretta: 1
      },
      {
        id: "DAT-I-04-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nella serie 2, 2, 3, 2, 5 il numero 2 ha frequenza 3.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-I-04-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Voti: 6, 7, 6, 8, 6, 7, 9. Qual è la frequenza del voto 6?",
        risposta: "3"
      },
      {
        id: "DAT-I-04-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Serie: 10, 12, 10, 15, 10, 12, 18. Quale numero ha frequenza 3?",
        opzioni: ["10", "12", "15", "18"],
        corretta: 0
      },
      {
        id: "DAT-I-04-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Il dato con frequenza più alta è la moda.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-I-04-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "In una classe: 12 alunni con 12 anni, 8 con 13 anni, 5 con 14 anni. Qual è la frequenza totale?",
        opzioni: ["20", "25", "30", "35"],
        corretta: 1
      },
      {
        id: "DAT-I-04-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Serie: A, B, A, C, A, B, D, A. Qual è la frequenza di A?",
        risposta: "4"
      },
      {
        id: "DAT-I-04-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "La somma di tutte le frequenze assolute è uguale al numero totale di dati.",
        risposta: true
      }
    ]
  },

  "DAT-A-01": {
    nome: "Mediana",
    domande: [
      // FACILI
      {
        id: "DAT-A-01-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Qual è la mediana di 3, 5, 7?",
        risposta: "5"
      },
      {
        id: "DAT-A-01-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "La mediana è:",
        opzioni: ["Il valore più grande", "Il valore centrale", "La media", "La moda"],
        corretta: 1
      },
      {
        id: "DAT-A-01-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "Nella serie ordinata 2, 4, 6, 8, 10 la mediana è 6.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-A-01-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Qual è la mediana di 10, 15, 20, 25, 30?",
        risposta: "20"
      },
      {
        id: "DAT-A-01-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Qual è la mediana di 4, 6, 8, 10? (numero pari di dati)",
        opzioni: ["6", "7", "8", "9"],
        corretta: 1
      },
      {
        id: "DAT-A-01-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Per trovare la mediana i dati devono essere ordinati.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-A-01-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Qual è la mediana di 12, 15, 18, 20, 22, 25?",
        opzioni: ["18", "19", "20", "21"],
        corretta: 1
      },
      {
        id: "DAT-A-01-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Età: 11, 13, 12, 14, 15. Ordina e trova la mediana.",
        risposta: "13"
      },
      {
        id: "DAT-A-01-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se aggiungo un valore molto grande, la mediana può non cambiare.",
        risposta: true
      }
    ]
  },

  "DAT-A-02": {
    nome: "Probabilità classica semplice",
    domande: [
      // FACILI
      {
        id: "DAT-A-02-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "Lanciando un dado, qual è la probabilità di ottenere 6? (scrivi come frazione: 1/6)",
        risposta: "1/6"
      },
      {
        id: "DAT-A-02-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "Lanciando una moneta, la probabilità di ottenere testa è:",
        opzioni: ["1/4", "1/3", "1/2", "1"],
        corretta: 2
      },
      {
        id: "DAT-A-02-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "La probabilità è sempre un numero tra 0 e 1.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-A-02-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "In un sacchetto: 3 palline rosse e 2 blu. Probabilità di estrarre una rossa? (scrivi come frazione)",
        risposta: "3/5"
      },
      {
        id: "DAT-A-02-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Lanciando un dado, la probabilità di ottenere un numero pari è:",
        opzioni: ["1/6", "1/3", "1/2", "2/3"],
        corretta: 2
      },
      {
        id: "DAT-A-02-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Se un evento è impossibile, la sua probabilità è 0.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-A-02-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "Sacchetto: 4 palline verdi, 3 gialle, 2 nere. Probabilità di estrarre una gialla?",
        opzioni: ["1/3", "3/9", "4/9", "2/9"],
        corretta: 1
      },
      {
        id: "DAT-A-02-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Lanciando un dado, probabilità di ottenere un numero maggiore di 4? (scrivi come frazione)",
        risposta: "1/3"
      },
      {
        id: "DAT-A-02-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "Se un evento è certo, la sua probabilità è 1.",
        risposta: true
      }
    ]
  },

  "DAT-A-03": {
    nome: "Percentuale come dato statistico",
    domande: [
      // FACILI
      {
        id: "DAT-A-03-F1",
        livello: "facile",
        tipo: "aperta",
        testo: "In un grafico a torta, una fetta rappresenta il 50%. Che frazione del totale è?",
        risposta: "1/2"
      },
      {
        id: "DAT-A-03-F2",
        livello: "facile",
        tipo: "multipla",
        testo: "In un grafico, il 25% corrisponde a:",
        opzioni: ["1/2", "1/3", "1/4", "1/5"],
        corretta: 2
      },
      {
        id: "DAT-A-03-F3",
        livello: "facile",
        tipo: "vero_falso",
        testo: "In un grafico a torta, tutte le percentuali sommate fanno 100%.",
        risposta: true
      },
      
      // MEDIE
      {
        id: "DAT-A-03-M1",
        livello: "medio",
        tipo: "aperta",
        testo: "Su 200 alunni, il 30% ha gli occhi azzurri. Quanti sono?",
        risposta: "60"
      },
      {
        id: "DAT-A-03-M2",
        livello: "medio",
        tipo: "multipla",
        testo: "Grafico a torta sport: calcio 40%, nuoto 35%, tennis 25%. Quale sport è più praticato?",
        opzioni: ["Calcio", "Nuoto", "Tennis", "Tutti uguali"],
        corretta: 0
      },
      {
        id: "DAT-A-03-M3",
        livello: "medio",
        tipo: "vero_falso",
        testo: "Il 75% di 80 è uguale al 50% di 120.",
        risposta: true
      },
      
      // DIFFICILI
      {
        id: "DAT-A-03-D1",
        livello: "difficile",
        tipo: "multipla",
        testo: "In un sondaggio di 500 persone, il 18% preferisce il rosso. Quante persone?",
        opzioni: ["80", "85", "90", "95"],
        corretta: 2
      },
      {
        id: "DAT-A-03-D2",
        livello: "difficile",
        tipo: "aperta",
        testo: "Grafico: A = 35%, B = 40%, C = ?%. Quanto vale C?",
        risposta: "25"
      },
      {
        id: "DAT-A-03-D3",
        livello: "difficile",
        tipo: "vero_falso",
        testo: "In un grafico a torta con 4 fette uguali, ogni fetta rappresenta il 25%.",
        risposta: true
      }
    ]
  }

};
