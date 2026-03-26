// ============================================================
//  PROVE 1-5 – SIMULAZIONE INVALSI ITALIANO TERZA MEDIA
//  Struttura fedele alle prove INVALSI reali:
//  - Testo A: narrativo 60-80 righe (pubblico dominio o originale)
//  - Testo B: espositivo/argomentativo 40-50 righe (originale)
//  - Tipologie: SM, VF, AP, COMP, COL
//  - Grammatica su frasi specifiche
// ============================================================
//
//  COSTRUTTORI:
//  T(id,sez,tit,testo,fonte)            → blocco testo
//  SM(id,sez,comp,testo,ops,ok)         → scelta multipla (ok=indice 0-3)
//  VF(id,sez,comp,testo,righe)          → vero/falso tabella
//                                         righe=[{testo,ok:true/false},...]
//  AP(id,sez,comp,testo,ok_open)        → risposta aperta (ok_open=array parole chiave)
//  COMP(id,sez,comp,testo,gaps,parole)  → completamento con parole date
//                                         gaps=[{prima,dopo,ok_idx}]
//                                         parole=['word1','word2',...]
//  COL(id,sez,comp,testo,sx,dx,coppie)  → collegamento colonne
//                                         sx=['A','B',...] dx=['1','2',...]
//                                         coppie={0:2, 1:0, ...} (sx_idx→dx_idx)
// ============================================================

const PROVE_NUOVE = (function(){

function T(id,sez,tit,testo,fonte){ return {id,sez,tipo:'testo',tit,testo,fonte:fonte||''}; }
function SM(id,sez,comp,testo,ops,ok){ return {id,sez,tipo:'sm',comp,testo,ops,ok}; }
function VF(id,sez,comp,testo,righe){ return {id,sez,tipo:'vf',comp,testo,righe}; }
function AP(id,sez,comp,testo,ok_open){ return {id,sez,tipo:'ap',comp,testo,ok_open}; }
function COMP(id,sez,comp,testo,gaps,parole){ return {id,sez,tipo:'comp',comp,testo,gaps,parole}; }
function COL(id,sez,comp,testo,sx,dx,coppie){ return {id,sez,tipo:'col',comp,testo,sx,dx,coppie}; }

// ══════════════════════════════════════════════════════════════
//  PROVA 1 – "Rosso Malpelo" / Lettura e ambiente
// ══════════════════════════════════════════════════════════════
const p1 = {id:1, titolo:"Rosso Malpelo", domande:[

T("1_t1",0,"Testo A – Rosso Malpelo (Giovanni Verga, 1880)",
`Malpelo si chiamava così perché aveva i capelli rossi; ed aveva i capelli rossi perché era un ragazzo malizioso e cattivo, che prometteva di riuscire un fior di birbone. Sicché tutti alla cava della rena rossa lo chiamavano Malpelo; e perfino sua madre, col sentirgli dir sempre così, aveva quasi dimenticato il suo nome di battesimo.
Del resto ella lo vedeva soltanto il sabato sera, quando tornava a casa con quei pochi soldi della settimana; e siccome il ragazzo era malpelo, c'era sempre qualche differenza sui conti, e qualche bernoccolo sul capo, che suo padre Misciu gli aveva lasciato in eredità assieme all'asino, alla roba da lavoro, e al posto nella cava.
Suo padre, il padrone della cava chiamava mastro Misciu, e tutta la gente per bene lo chiamava bestia da soma, perché solamente una bestia da soma si sarebbe adattata a fare quel lavoro a quel prezzo. Per questo motivo, come mastro Misciu fu schiacciato dalla rena, mentre scavava in una galleria, tutti dissero che se l'era cercata, e che il Signore non vuole che si tenti la Provvidenza. Malpelo invece si ostinò a rimaner nella cava, come se le ossa di suo padre fossero state affidate in custodia a lui, e avesse paura che a quello sventurato dovessero romperle anche morte.
Nei primi tempi soleva dire: – Mio padre era un buon lavorante, non faceva chiasso, non aveva mai liti, e han dovuto ammazzarlo loro, perché era troppo buono.
Ogni volta che Malpelo tirava fuori il sacco della settimana, e il caporale faceva il conto, diceva che ci mancava un soldo o due, e Malpelo si pigliava i ceffoni senza fiatare. Ma il lunedì poi tornava alla cava, e se ne stava rinchiuso nella galleria come una bestia selvatica, a grattare la rena rossa, e riempire i sacchi.
Aveva undici anni, e sua madre non l'aveva più visto piangere, dacché era morto suo padre, sebbene avesse ricevuto tanti ceffoni che un altro al posto suo ne avrebbe pianto parecchi. Così pure non si era mai visto mangiare la sua parte di pane all'ombra del carrubo, o leccarsi le dita dopo che aveva finito il suo desinare, come facevano gli altri. Egli stava sempre appartato, e si levava tardi la sera, come se non gli importasse andare a dormire.
Vero è che la gente diceva ch'egli era un ragazzo cattivo, che dava schiaffi e calci ai compagni, senza dir perché né come, tanto per far del male; e si vedevano sempre le pedate di lui sulle gambe dei piccoli; e capocciate e lividi sulle ossa dei più deboli. Si vedeva poi che aveva fissato d'accanirsi contro un certo Ranocchio, un povero ragazzo sciancato che gli era stato dato per compagno, il quale non aveva ancora undici anni, ed era venuto a lavorare alla cava da poco tempo. I monelli gli avevano appioppato quel nomignolo perché aveva le gambe storte e camminava adagio adagio; e Malpelo lo tormentava di santa ragione, senza che Ranocchio si lamentasse mai.
Un giorno che Malpelo l'aveva preso a sassate, perché si era fermato a riposare prima dell'ora, uno dei garzoni gli disse che doveva levarsi quella soddisfazione dopo la giornata, se voleva godersela; ma Malpelo rispose che lui non aveva mai di queste soddisfazioni, e a Ranocchio faceva quello che il padrone faceva a lui e il caporale ai muli, – cioè lo batteva per fargli fare il suo dovere.
Non rispondeva mai quando lo sgridavano, e qualche volta lo si vedeva fissar lo sguardo in faccia a chi lo batteva, di quel certo modo che aveva, come se volesse tenersi a mente la faccia. Solamente una volta aveva dato fuori, e aveva detto: – Se mio padre non fosse morto, nessuno avrebbe osato farlo.`,
"Giovanni Verga, Vita dei campi (1880) – opera in pubblico dominio"),

SM("1_1",0,"comprensione_globale","Il soprannome 'Malpelo' deriva da:",
["Il carattere violento e malvagio del ragazzo.",
 "Il colore dei capelli associato a una valutazione negativa del suo carattere.",
 "Il lavoro pericoloso che svolgeva nella cava.",
 "Il fatto che era orfano di padre."],1),

SM("1_2",0,"comprensione_locale","Perché Malpelo rimane a lavorare nella stessa cava dove è morto suo padre?",
["Perché è l'unico lavoro disponibile in paese.",
 "Perché il padrone lo costringe a restare.",
 "Per una sorta di fedeltà alla memoria del padre, come se ne custodisse le ossa.",
 "Perché guadagna più degli altri ragazzi."],2),

VF("1_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Malpelo vede sua madre ogni giorno.",ok:false},
 {t:"Il padre di Malpelo era considerato un lavoratore diligente ma troppo remissivo.",ok:true},
 {t:"Malpelo piange spesso, di nascosto, dopo aver ricevuto le botte.",ok:false},
 {t:"Ranocchio è un ragazzo con una disabilità fisica.",ok:true},
 {t:"Malpelo spiega ai compagni le ragioni del suo comportamento violento.",ok:false}]),

SM("1_4",0,"comprensione_locale","Come giustifica Malpelo il suo comportamento duro verso Ranocchio?",
["Dice che lo odia perché è debole.",
 "Dice che lo fa per noia, perché non ha altro da fare.",
 "Dice che fa con Ranocchio quello che il padrone fa con lui e il caporale con i muli.",
 "Dice di volerlo rendere più forte per aiutarlo."],2),

SM("1_5",0,"inferenza","La frase finale del testo ('Se mio padre non fosse morto, nessuno avrebbe osato farlo') rivela che:",
["Malpelo ha paura e vorrebbe fuggire dalla cava.",
 "Sotto la durezza di Malpelo si nasconde il dolore per la perdita del padre e il senso di abbandono.",
 "Malpelo vuole vendicarsi dei suoi colleghi.",
 "Malpelo sa che suo padre era potente e rispettato."],1),

AP("1_6",0,"inferenza","Perché l'autore dice che Malpelo fissava in volto chi lo batteva 'come se volesse tenersi a mente la faccia'? Cosa suggerisce questo gesto?",
["memoria vendetta ricordo rabbia repressa",
"non dimentica chi lo maltratta",
"rabbia silenziosa",
"memorizza volti nemici",
"guarda per ricordare",
"vendetta futura",
"rabbia trattenuta",
"non dimentica",
"segna in mente",
"fissa per ricordare chi"]),

SM("1_7",0,"struttura_testo","Il narratore descrive Malpelo come 'cattivo' e 'birbone', ma il testo suggerisce un'altra interpretazione del suo carattere. Quale?",
["Malpelo è davvero malvagio, senza motivo.",
 "Malpelo è vittima di un ambiente brutale che ha trasformato il suo dolore in aggressività.",
 "Malpelo è furbissimo e si finge cattivo per non essere sfruttato.",
 "Malpelo è mentalmente disturbato a causa del lavoro in miniera."],1),

SM("1_8",0,"lessico_contesto","Nel testo, 'bestia da soma' (riga 8) viene usata in senso:",
["Letterale: il padre allevava animali da soma.",
 "Figurato: indica chi lavora con fatica eccessiva senza lamentarsi, come un animale.",
 "Ironico: il padre era in realtà molto pigro.",
 "Tecnico: era un termine del mestiere nella cava."],1),

VF("1_9",0,"struttura_testo","Per ogni affermazione, indica se descrive il punto di vista della gente del paese o quello che il testo fa capire al lettore.",
[{t:"Malpelo è cattivo per natura.",ok:false},
 {t:"La morte del padre è stata causata dalla sua eccessiva docilità.",ok:true},
 {t:"Malpelo non ha affetti né sentimenti.",ok:false},
 {t:"Malpelo lavora duramente senza lamentarsi.",ok:true}]),

SM("1_10",0,"lessico_contesto","La parola 'ostinò' (riga 12) significa:",
["Si stancò e smise di lavorare.",
 "Continuò con fermezza e determinazione nonostante tutto.",
 "Si arrabbiò violentemente.",
 "Chiese il permesso di restare."],1),

AP("1_11",0,"comprensione_globale","In poche righe, descrivi il tipo di ambiente sociale rappresentato nel testo e il rapporto tra i personaggi.",
["lavoro minorile sfruttamento cava violenza",
"ambiente brutale povero sfruttato",
"miseria ingiustizia sociale",
"bambini lavorano",
"poveri sfruttati",
"cava pericolosa",
"ingiusto crudele",
"miseria povertà",
"nessuna protezione",
"senza diritti"]),

T("1_t2",0,"Testo B – Il lavoro minorile oggi",
`Secondo i dati dell'Organizzazione Internazionale del Lavoro, nel mondo circa 160 milioni di bambini e adolescenti tra i 5 e i 17 anni sono costretti a lavorare. Di questi, quasi la metà svolge attività pericolose per la salute e la sicurezza: lavori in miniera, nei campi con pesticidi, nelle fabbriche tessili, nelle discariche. Non si tratta di un fenomeno lontano: riguarda ogni continente, anche se con intensità molto diverse.
Le cause sono complesse e spesso si intrecciano. La povertà è il fattore principale: quando una famiglia non riesce a sopravvivere con il solo reddito degli adulti, i figli vengono avviati al lavoro precocemente. A questo si aggiunge la mancanza di accesso all'istruzione: laddove le scuole sono rare, costose o culturalmente svalutate, il lavoro diventa l'unica alternativa per i bambini. In alcuni contesti, infine, lavorare è considerato un valore formativo, parte dell'educazione tradizionale.
Le conseguenze sul lungo periodo sono gravi. I bambini che lavorano rinunciano agli anni della scuola e si trovano da adulti privi delle competenze necessarie per accedere a lavori meglio retribuiti. Si crea così un circolo vizioso: la povertà genera lavoro minorile, che a sua volta genera altra povertà. A livello fisico, molti riportano danni permanenti: problemi alla schiena, alle articolazioni, danni polmonari da esposizione a sostanze tossiche.
Le organizzazioni internazionali e molti governi hanno adottato misure per contrastare il fenomeno: leggi che fissano l'età minima lavorativa, programmi di trasferimento monetario alle famiglie povere in cambio della frequenza scolastica dei figli, campagne di sensibilizzazione. I risultati ci sono stati: negli ultimi vent'anni il numero di bambini lavoratori si è ridotto di circa il 40%. Ma la crisi economica globale, aggravata dalla pandemia del 2020, ha invertito questa tendenza in molte regioni del mondo.
Il problema non riguarda solo i paesi in via di sviluppo. Anche in Europa si registrano casi di sfruttamento minorile, spesso legati ai flussi migratori: bambini e ragazzi non accompagnati vengono impiegati nell'agricoltura stagionale, nell'economia informale, o peggio, nel lavoro forzato. Riconoscere il problema è il primo passo per affrontarlo.`,
"Testo originale a fini didattici"),

SM("1_12",0,"comprensione_globale","Qual è l'idea principale del testo B?",
["Il lavoro minorile è un fenomeno del passato ormai superato.",
 "Il lavoro minorile è un problema complesso e globale, con cause e conseguenze precise.",
 "Il lavoro minorile riguarda solo i paesi poveri dell'Asia e dell'Africa.",
 "Le leggi internazionali hanno già risolto il problema del lavoro minorile."],1),

SM("1_13",0,"comprensione_locale","Qual è la causa principale del lavoro minorile secondo il testo?",
["La tradizione culturale di molti paesi.",
 "La mancanza di scuole nel mondo.",
 "La povertà delle famiglie.",
 "La disorganizzazione dei governi locali."],2),

VF("1_14",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo B.",
[{t:"Il numero di bambini lavoratori è diminuito del 40% negli ultimi vent'anni.",ok:true},
 {t:"Il lavoro minorile non riguarda l'Europa.",ok:false},
 {t:"I bambini che lavorano spesso non frequentano la scuola.",ok:true},
 {t:"Le conseguenze fisiche del lavoro minorile sono sempre temporanee.",ok:false},
 {t:"La pandemia del 2020 ha peggiorato la situazione in molte regioni.",ok:true}]),

SM("1_15",0,"inferenza","L'espressione 'circolo vizioso' (terzo paragrafo) si riferisce a:",
["Il fatto che i bambini girano in tondo nelle fabbriche.",
 "Un meccanismo per cui la povertà produce lavoro minorile che a sua volta produce povertà.",
 "La difficoltà di cambiare le leggi internazionali sul lavoro.",
 "Il rapporto tra lavoro agricolo e danni alla salute."],1),

AP("1_16",0,"struttura_testo","Quali sono i due aspetti che secondo il testo rendono il problema del lavoro minorile difficile da risolvere definitivamente? Rispondi usando le informazioni del testo.",
["circolo vizioso povertà",
"crisi pandemia inversione tendenza",
"cause intrecciate complesse",
"due aspetti",
"pandemia peggiora",
"povertà si ripete",
"difficile uscire",
"povertà trasmessa",
"famiglie povere",
"crisi economica"]),

COMP("1_17",0,"lessico_contesto","Completa le frasi scegliendo la parola giusta dall'elenco.",
[{prima:"I bambini che lavorano spesso non riescono ad accedere a lavori meglio ",dopo:" da adulti.",ok:0},
 {prima:"La povertà è il fattore ",dopo:" del fenomeno del lavoro minorile.",ok:1},
 {prima:"Alcuni governi hanno adottato programmi di trasferimento ",dopo:" alle famiglie povere.",ok:2}],
["retribuiti","principale","monetario","secondario","gratuiti","spirituale"]),

T("1_t3",1,"SEZIONE B – LESSICO","",""),

SM("1_18",1,"lessico","Quale parola è sinonimo di 'precocemente' nel contesto del testo?",
["Tardi","In anticipo rispetto all'età adeguata","Con molta lentezza","Con grande entusiasmo"],1),

SM("1_19",1,"lessico_contesto","In quale frase la parola 'circolo' è usata in senso figurato?",
["Il circolo sportivo del paese ha aperto una nuova palestra.",
 "I bambini formavano un circolo intorno al fuoco.",
 "Siamo intrappolati in un circolo di problemi che si alimentano a vicenda.",
 "Il treno percorre un circolo di cento chilometri."],2),

SM("1_20",1,"lessico","Qual è il contrario di 'precoce'?",
["Tardivo","Veloce","Antico","Lontano"],0),

SM("1_21",1,"lessico","La parola 'svalutate' (secondo paragrafo del testo B) significa:",
["Vendute a prezzo basso.",
 "Considerate poco importanti, di scarso valore.",
 "Distrutte completamente.",
 "Gestite in modo scorretto."],1),

COL("1_22",1,"lessico","Collega ogni parola della colonna sinistra con il suo significato nella colonna destra.",
["precoce","retribuito","ostinato","remissivo"],
["che accade prima del tempo normale","che viene pagato per il proprio lavoro","che non reagisce alle offese, troppo docile","che non cede, che persiste con fermezza"],
{0:0,1:1,2:3,3:2}),

SM("1_23",1,"lessico","Completa: 'Le autorità hanno adottato misure per _____ il fenomeno del lavoro minorile.'",
["aumentare","promuovere","contrastare","ignorare"],2),

SM("1_24",1,"lessico","Quale delle seguenti parole appartiene all'area semantica del 'lavoro'?",
["Retribuzione","Tramonto","Melodia","Costellazione"],0),

SM("1_25",1,"lessico_contesto","Nel testo A, 'desinare' significa:",
["Il momento del risveglio mattutino.",
 "Il pasto di mezzogiorno.",
 "Il pagamento settimanale.",
 "Il riposo serale."],1),

T("1_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("1_26",2,"morfologia","In 'Malpelo si chiamava così perché aveva i capelli rossi', il verbo 'si chiamava' è alla forma:",
["Attiva.","Riflessiva.","Passiva.","Impersonale."],1),

VF("1_27",2,"morfologia","Indica se è vero (V) o falso (F) che le seguenti voci verbali siano all'indicativo.",
[{t:"aveva (riga 1)",ok:true},
 {t:"fosse morto (ultima riga)",ok:false},
 {t:"tornava (riga 5)",ok:true},
 {t:"avesse osato (ultima riga)",ok:false},
 {t:"dissero (riga 11)",ok:true}]),

SM("1_28",2,"sintassi","In 'sicché tutti alla cava lo chiamavano Malpelo', la congiunzione 'sicché' introduce:",
["Una proposizione causale.","Una proposizione consecutiva.","Una proposizione concessiva.","Una proposizione temporale."],1),

SM("1_29",2,"ortografia","Quale delle seguenti frasi è scritta correttamente?",
["Se mio padre non fosse morto, nessuno avrebbe osato farlo.",
 "Se mio padre non fosse morto nessuno avrebbe osato farlo.",
 "Se mio padre non fosse morto; nessuno avrebbe osato farlo.",
 "Se mio padre non fossi morto, nessuno avrebbe osato farlo."],0),

AP("1_30",2,"sintassi","Nella frase 'Malpelo si ostinò a rimaner nella cava, come se le ossa di suo padre fossero state affidate in custodia a lui', individua la proposizione principale e scrivi di che tipo è la proposizione introdotta da 'come se'.",
["principale: Malpelo si ostinò comparativa ipotetica congiuntivo",
"comparativa modale ipotetica",
"come se congiuntivo trapassato",
"principale ostinò",
"comparativa come se",
"congiuntivo trapassato fossero",
"come se fossero",
"ipotetica modale",
"subordinata comparativa"]),

COMP("1_31",2,"morfologia","Completa le frasi con la forma corretta del verbo indicato tra parentesi.",
[{prima:"Malpelo sperava che suo padre non ",dopo:" mai.",ok:0},
 {prima:"Se Malpelo ",dopo:" aiuto, la sua vita sarebbe stata diversa.",ok:1},
 {prima:"Era necessario che i ragazzi ",dopo:" a lavorare.",ok:2}],
["fosse morto","chiedesse","andassero","era morto","chiese","andavano"]),

SM("1_32",2,"punteggiatura","In 'Malpelo – un ragazzo dai capelli rossi – lavorava nella cava', i trattini racchiudono:",
["Un'esclamazione.","Un inciso esplicativo.","Un elenco di elementi.","Una citazione diretta."],1),

SM("1_33",2,"morfologia","In 'Ella lo vedeva soltanto il sabato sera', il pronome 'lo' ha funzione di:",
["Soggetto.","Complemento oggetto.","Complemento di termine.","Complemento di specificazione."],1),

SM("1_34",2,"sintassi","Individua la proposizione relativa nella seguente frase: 'Malpelo batté Ranocchio, che non si lamentò mai'.",
["'Malpelo batté Ranocchio'","'che non si lamentò mai'","'batté Ranocchio, che non si lamentò'","Non c'è una proposizione relativa."],1),

SM("1_35",2,"coesione","In quale delle seguenti frasi la parola 'come' introduce una proposizione comparativa?",
["Come mai sei arrivato tardi?",
 "Malpelo trattava Ranocchio come il padrone trattava lui.",
 "Come sai, il lavoro in miniera è pericoloso.",
 "Non capisco come tu possa sopportarlo."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 2 – Il fu Mattia Pascal / Identità digitale
// ══════════════════════════════════════════════════════════════
const p2 = {id:2, titolo:"Il fu Mattia Pascal", domande:[

T("2_t1",0,"Testo A – Il fu Mattia Pascal (Luigi Pirandello, 1904)",
`Ebbene, sì: mi chiamo Mattia Pascal. Questo almeno lo so. Delle altre cose di me, delle mie origini, del mio stato civile, dei miei casi e di tutta la mia vita, invece, non ne so nulla, o quasi, o almeno, non sapevo sapere.
Eppure le cose che mi sono capitate sono di quelle che non capitano forse a nessuno: di esse ho discorso e ridiscorso, tanto che ormai – strana cosa – ciò che riguarda me stesso è diventato per me materia di studio e di meraviglia.
E prima di tutto ecco una curiosa avventura che mi è accaduta: per due anni almeno non ho saputo nemmeno come mi chiamassi. Ma ora ne rido. Né so se sia preferibile trovarsi in quella condizione, o nella contraria: quella di sapersi benissimo chi si è, ma di non poter essere altro da quello che si è.
Il notaro Romitelli, che fu uno dei miei guardiani, mi diceva sempre: «Mattia Pascal, tu non sai quello che hai. Sei libero! libero! libero!». Ed effettivamente lo ero; ma di quella libertà di cui un uomo potrebbe godere soltanto se fosse senza padri, senza fratelli, senza parenti, senza amici, senza amori: di quella libertà, cioè, che rende l'uomo solitario in mezzo alla gente, solo con se stesso. Troppa libertà, poi, se non si sa come usarla, è peggio di nessuna libertà.
Ho voluto vedere come stesse la mia casa, dov'ero cresciuto e poi mi ero maritato e poi avevo perduto in breve la moglie e le due figliuole e il padre e la madre; dove tutto pareva dirmi: «Tu sei un ombra!». Ed effettivamente mi sentivo un'ombra. Ogni cosa attorno a me, le persone, i luoghi, le abitudini, tutto m'era diventato strano.
Mi chiamavano il fu Mattia Pascal. Io, allora, mi ci mettevo a ridere, ché avevo la prova più sicura di essere ancora in vita: ero lì a sentirmelo dire. Ma che vita era la mia? Ogni giorno era uguale all'altro: mi alzavo la mattina, mi facevo la barba, mangiavo, uscivo, stavo un po' al sole – se c'era sole – poi rientravo, mangiavo di nuovo, andavo a letto. Così un giorno, così l'altro, così l'altro ancora, finché – grazie a Dio – sarei morto davvero.
Eppure sentivo che non potevo più essere quello di prima, e che quello di prima, il vero Mattia Pascal, era morto davvero: quella vita, quell'identità erano finite per sempre. E mi chiedevo: chi sono io adesso? Non avevo più un nome riconosciuto, non avevo più una famiglia, non avevo più un posto nel mondo.
Capii allora che la libertà senza identità non è libertà: è solo vuoto. L'uomo non vive soltanto nel corpo: vive nello sguardo degli altri, nel riconoscimento, nel nome che gli viene dato. Togliere il nome a un uomo è come togliergli il respiro: gli lasci il corpo, ma uccidi la persona.`,
"Luigi Pirandello, Il fu Mattia Pascal (1904) – opera in pubblico dominio (adattamento con aggiunta originale per fini didattici)"),

SM("2_1",0,"comprensione_globale","Qual è il tema centrale del brano?",
["La morte prematura di tutta la famiglia del protagonista.",
 "Il problema dell'identità personale e del significato della libertà senza radici.",
 "La critica alla burocrazia e al sistema notarile del tempo.",
 "La noia della vita quotidiana in un piccolo paese italiano."],1),

SM("2_2",0,"comprensione_locale","Perché il notaro Romitelli diceva che Mattia Pascal era 'libero'?",
["Perché era uscito di prigione.",
 "Perché non aveva più obblighi verso nessuno, essendo rimasto senza famiglia né legami.",
 "Perché aveva ereditato una grande fortuna.",
 "Perché poteva finalmente lasciare il paese."],1),

VF("2_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Mattia Pascal sa con certezza chi è fin dall'inizio del brano.",ok:false},
 {t:"Il protagonista ha perso moglie, figlie, padre e madre.",ok:true},
 {t:"Il protagonista trova piacevole e soddisfacente la sua nuova libertà.",ok:false},
 {t:"Mattia Pascal viene chiamato 'il fu Mattia Pascal' perché si credeva fosse morto.",ok:true},
 {t:"Il protagonista cambia continuamente abitudini per riempire le sue giornate.",ok:false}]),

SM("2_4",0,"inferenza","Cosa intende Pirandello con la frase 'l'uomo non vive soltanto nel corpo: vive nello sguardo degli altri'?",
["Gli esseri umani hanno bisogno di essere osservati fisicamente.",
 "L'identità personale esiste solo nel riconoscimento degli altri, non nella sola esistenza fisica.",
 "Gli uomini sono fondamentalmente egoisti e vivono solo per compiacere gli altri.",
 "Senza gli altri l'uomo diventa pazzo."],1),

AP("2_5",0,"inferenza","Spiega con parole tue perché Mattia Pascal afferma che 'troppa libertà è peggio di nessuna libertà'.",
["identità vuoto solitudine senso senza radici",
"libertà senza identità significato",
"libertà assoluta alienazione",
"troppa libertà isola",
"senza nome senza identità",
"libertà non basta",
"solitudine vuoto",
"non sa chi è",
"libertà senza senso",
"peggio della prigione"]),

SM("2_6",0,"struttura_testo","Il brano è narrato in prima persona. Quale effetto produce questa scelta narrativa?",
["Rende il racconto più oggettivo e distaccato.",
 "Permette al lettore di entrare direttamente nei pensieri e nelle contraddizioni del protagonista.",
 "Indica che il racconto è autobiografico al 100%.",
 "Rende la storia più facile da leggere."],1),

SM("2_7",0,"lessico_contesto","Nel testo, 'ombra' (quinta strofa) viene usata in senso:",
["Letterale: il protagonista cammina sempre in zone d'ombra.",
 "Figurato: indica qualcuno che ha perso consistenza, che non esiste più pienamente.",
 "Metereologico: si riferisce al tempo nuvoloso.",
 "Ironico: il protagonista era molto popolare."],1),

VF("2_8",0,"struttura_testo","Indica se è vero (V) o falso (F) che le seguenti frasi esprimano una certezza del protagonista (falso = dubbio o paradosso).",
[{t:"Ebbene, sì: mi chiamo Mattia Pascal.",ok:true},
 {t:"Non so se sia preferibile trovarsi in quella condizione, o nella contraria.",ok:false},
 {t:"Ero lì a sentirmelo dire.",ok:true},
 {t:"Chi sono io adesso?",ok:false}]),

AP("2_9",0,"comprensione_globale","In che senso la condizione di Mattia Pascal può essere considerata moderna e attuale? Fai riferimento al testo.",
["identità perduta nome riconoscimento",
"uomo senza radici contemporaneo",
"libertà senza significato identità crisi",
"identità digitale",
"oggi ci definiamo online",
"nome profilo social",
"senza nome nessuno",
"moderno attuale oggi",
"identità fragile",
"riconoscimento altrui"]),

SM("2_10",0,"lessico_contesto","La parola 'maritato' nel testo significa:",
["Accompagnato da qualcuno.","Sposato.","Impiegato in un lavoro.","Partito per un viaggio."],1),

T("2_t2",0,"Testo B – Identità digitale e persona reale",
`Viviamo in un'epoca in cui l'identità si costruisce anche – e sempre di più – online. I profili sui social network, gli account di posta elettronica, le credenziali di accesso a servizi digitali: tutto questo forma ciò che gli esperti chiamano 'identità digitale'. Ma quanto questa identità digitale corrisponde alla persona reale?
La questione è più complessa di quanto sembri. Da un lato, l'identità digitale può arricchire la nostra presenza nel mondo: permette di mantenere relazioni a distanza, di esprimersi, di creare, di lavorare. Dall'altro lato, può diventare una gabbia: quando l'immagine che costruiamo online diverge troppo dalla nostra vita reale, si crea un disagio profondo. Psicologi e ricercatori hanno documentato un fenomeno noto come 'dissonanza identitaria digitale': la fatica di dover gestire versioni diverse di se stessi.
Un caso estremo è quello del furto d'identità digitale: qualcuno si impossessa dei dati di un'altra persona – nome, foto, informazioni personali – e agisce in suo nome. Le conseguenze possono essere gravi: danni economici, reputazionali, psicologici. La vittima si trova nella paradossale condizione di dover dimostrare di essere chi è davvero.
Ma c'è anche il problema opposto: la cancellazione digitale. Quando un profilo viene eliminato, sospeso o bloccato senza preavviso, la persona perde non solo l'accesso a un servizio, ma spesso anni di contenuti, di relazioni, di lavoro. Per molte persone, la scomparsa digitale è vissuta come una forma di morte sociale.
Tutto questo ci pone davanti a domande che non hanno risposte semplici: chi siamo quando non siamo online? L'identità digitale è un prolungamento del sé o un personaggio distinto? E soprattutto: siamo davvero 'noi' a controllare la nostra identità digitale, o sono le piattaforme a definirla?`,
"Testo originale a fini didattici"),

SM("2_11",0,"comprensione_globale","Il testo B tratta principalmente:",
["I rischi dei social network per i giovani.",
 "Il rapporto tra identità digitale e identità reale, con i problemi che ne derivano.",
 "Il funzionamento tecnico dei sistemi di identità digitale.",
 "Come proteggere le password dai furti informatici."],1),

SM("2_12",0,"comprensione_locale","Cosa si intende per 'dissonanza identitaria digitale'?",
["Il furto dell'identità da parte di hacker.",
 "La fatica derivante dal dover gestire versioni diverse di se stessi online e offline.",
 "La difficoltà di ricordare tutte le password.",
 "Il disagio causato dall'uso eccessivo degli schermi."],1),

VF("2_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"L'identità digitale ha solo aspetti negativi.",ok:false},
 {t:"Il furto d'identità può avere conseguenze economiche e psicologiche.",ok:true},
 {t:"La cancellazione digitale è vissuta da molti come una forma di morte sociale.",ok:true},
 {t:"Le piattaforme digitali non influenzano mai l'identità degli utenti.",ok:false}]),

SM("2_14",0,"inferenza","Qual è il collegamento tematico tra il testo A (Pirandello) e il testo B?",
["Entrambi i testi parlano di solitudine.",
 "Entrambi affrontano il tema dell'identità personale: il primo in chiave letteraria, il secondo in chiave contemporanea.",
 "Entrambi descrivono personaggi che scompaiono fisicamente.",
 "Entrambi criticano l'uso della tecnologia."],1),

AP("2_15",0,"struttura_testo","Spiega la differenza tra 'furto d'identità digitale' e 'cancellazione digitale' come presentata nel testo B.",
["furto qualcuno impersona cancellazione scomparsa profilo",
"furto identità rubata cancellazione eliminata",
"opposti furto cancellazione",
"furto qualcuno si finge",
"cancellazione scompare",
"opposti contrari",
"rubare identità",
"eliminare profilo",
"impersonare qualcuno",
"due opposti"]),

T("2_t3",1,"SEZIONE B – LESSICO","",""),

SM("2_16",1,"lessico","Quale parola è sinonimo di 'paradossale'?",
["Ovvio e scontato.","Contraddittorio, che contiene un'apparente contraddizione.","Pericoloso e grave.","Antico e superato."],1),

SM("2_17",1,"lessico_contesto","In quale frase 'gabbia' è usata in senso figurato?",
["L'uccello era rinchiuso in una gabbia dorata.",
 "Il lavoro è diventato una gabbia da cui non riesco a uscire.",
 "La gabbia era troppo piccola per l'animale.",
 "Il circo aveva molte gabbie per i leoni."],1),

SM("2_18",1,"lessico","'Reputazionale' (terzo paragrafo del testo B) si riferisce a:",
["La salute fisica di una persona.",
 "Il patrimonio economico.",
 "Il giudizio e la considerazione che gli altri hanno di una persona.",
 "Le competenze professionali."],2),

COMP("2_19",1,"lessico_contesto","Completa le frasi scegliendo la parola corretta.",
[{prima:"L'identità digitale può ",dopo:" la nostra presenza nel mondo.",ok:0},
 {prima:"Il furto d'identità causa danni ",dopo:", economici e psicologici.",ok:1},
 {prima:"La scomparsa digitale è vissuta come una forma di morte ",dopo:".",ok:2}],
["arricchire","reputazionali","sociale","impoverire","fisici","privata"]),

COL("2_20",1,"lessico","Collega ogni termine con la sua definizione.",
["dissonanza","credenziali","prolungamento","diverge"],
["dati di accesso a un sistema","si allontana, si differenzia","continuazione di qualcosa","tensione tra elementi che non si accordano"],
{0:3,1:0,2:2,3:1}),

SM("2_21",1,"lessico","Qual è il contrario di 'arricchire' nel senso usato nel testo?",
["Impoverire","Aumentare","Amplificare","Costruire"],0),

SM("2_22",1,"lessico","La parola 'prolungamento' contiene:",
["Un prefisso di negazione + un suffisso.",
 "Un prefisso di 'avanti/fuori' (pro-) + la radice 'lungo' + un suffisso nominale.",
 "Solo un suffisso, senza prefisso.",
 "Due suffissi sovrapposti."],1),

T("2_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("2_23",2,"morfologia","In 'Mi chiamavano il fu Mattia Pascal', il verbo 'chiamavano' è:",
["Indicativo presente passivo.","Indicativo imperfetto attivo.","Indicativo passato prossimo.","Congiuntivo imperfetto."],1),

VF("2_24",2,"morfologia","Indica la categoria grammaticale delle parole sottolineate nella frase: 'Ogni giorno era uguale all'altro: mi alzavo la mattina, mi facevo la barba'.",
[{t:"'Ogni' è un aggettivo indefinito.",ok:true},
 {t:"'uguale' è un avverbio.",ok:false},
 {t:"'mi alzavo' contiene un pronome riflessivo.",ok:true},
 {t:"'la mattina' è un complemento di specificazione.",ok:false}]),

SM("2_25",2,"sintassi","In 'Togliere il nome a un uomo è come togliergli il respiro', la proposizione principale è:",
["'Togliere il nome a un uomo'","'è come togliergli il respiro'","'Togliere il nome a un uomo è'","L'intera frase è una sola proposizione semplice."],0),

AP("2_26",2,"sintassi","Nella frase 'Capii allora che la libertà senza identità non è libertà', individua la proposizione principale e la proposizione subordinata e indica di che tipo è quest'ultima.",
["principale capii subordinata oggettiva completiva",
"capii principale che libertà subordinata",
"subordinata oggettiva completiva",
"principale capii",
"che la libertà subordinata",
"oggettiva completiva",
"capii allora principale",
"dipendente da capii",
"subordinata oggetto"]),

SM("2_27",2,"morfologia","'Maritato' è il participio passato del verbo 'maritare'. Quale significato ha qui?",
["Partito per un viaggio.","Che si è sposato.","Che ha trovato lavoro.","Che è tornato a casa."],1),

COMP("2_28",2,"morfologia","Volgi le seguenti frasi dalla forma attiva alla forma passiva.",
[{prima:"Il notaro Romitelli ",dopo:" sempre Mattia Pascal. (sogg. → il notaro Romitelli)",ok:0},
 {prima:"Tutti ",dopo:" il protagonista 'il fu Mattia Pascal'. (sogg. → tutti)",ok:1}],
["chiamava sempre Mattia Pascal → Mattia Pascal era sempre chiamato dal notaro Romitelli","chiamavano il protagonista → il protagonista era chiamato da tutti","diceva → veniva detto","vedevano → veniva visto"]),

SM("2_29",2,"punteggiatura","I due punti nella frase 'Ogni giorno era uguale all'altro: mi alzavo la mattina...' introducono:",
["Un elenco che specifica il concetto precedente.","Una citazione diretta.","Una domanda retorica.","Una spiegazione causale."],0),

SM("2_30",2,"coesione","Nella frase 'Ed effettivamente lo ero', il pronome 'lo' si riferisce a:",
["Mattia Pascal come persona.",
 "L'aggettivo 'libero' usato nella frase precedente.",
 "Il notaro Romitelli.",
 "Il paese in cui viveva."],1),

SM("2_31",2,"morfologia","Qual è il modo e il tempo di 'fosse' nella frase 'come se fosse senza padri'?",
["Indicativo imperfetto.","Congiuntivo imperfetto.","Condizionale presente.","Congiuntivo presente."],1),

SM("2_32",2,"sintassi","In quale delle seguenti frasi c'è una proposizione concessiva?",
["Mattia Pascal rise perché era ancora vivo.",
 "Mattia Pascal rise sebbene fosse disperato dentro.",
 "Mattia Pascal rise quando sentì il suo soprannome.",
 "Mattia Pascal rise per nascondere la sua paura."],1),

SM("2_33",2,"ortografia","Quale forma è corretta?",
["Chi siei tu adesso?","Chi sei tu adesso?","Chi sèi tu adesso?","Chi sei tù adesso?"],1),

SM("2_34",2,"morfologia","In 'Non avevo più un nome riconosciuto', 'riconosciuto' ha funzione di:",
["Predicato verbale.","Aggettivo (participio passato con funzione attributiva).","Avverbio.","Complemento oggetto."],1),

SM("2_35",2,"coesione","'Eppure sentivo che non potevo più essere quello di prima' – 'eppure' introduce:",
["Una causa.","Un contrasto rispetto a quanto appena affermato.","Una conseguenza logica.","Un esempio."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 3 – Cuore (De Amicis) / La scuola nel mondo
// ══════════════════════════════════════════════════════════════
const p3 = {id:3, titolo:"Il tamburino sardo", domande:[

T("3_t1",0,"Testo A – Il tamburino sardo (Edmondo De Amicis, Cuore, 1886)",
`Ieri mattina il maestro ci disse: – Ragazzi, sentirete oggi una storia vera che vi farà bene al cuore.
E ci raccontò la storia del tamburino sardo, che io vi scrivo come mi ricordo.
Nel 1848, durante la prima guerra per l'indipendenza d'Italia, un reggimento di fanteria, dopo una lunga marcia, era accampato in una pianura del Veneto; poco distante scorreva un fiume, e al di là del fiume c'era il nemico. Era sera; i soldati erano stanchi, e molti dormivano già; attorno ai fuochi, altri fumavano e parlavano sottovoce. Vicino a un fuoco era seduto il tamburino del reggimento, un ragazzo sardo di quattordici anni, figlio d'un caporale morto in battaglia. Era piccolo, coraggioso, affezionatissimo al suo colonnello.
Il colonnello aveva bisogno di sapere con precisione dove stesse appostato il nemico, e non c'era altro mezzo che mandar qualcuno a esplorare il terreno al di là del fiume. Era un'impresa pericolosa: si doveva traversare il fiume a guado, camminare nel buio tra gli appostamenti nemici, e tornare indietro senza esser visti né uditi. Ci voleva qualcuno di coraggio, di sveltezza e di giudizio. Il colonnello guardò i suoi soldati. Il tamburino, che l'aveva sentito dire questo, si alzò e disse: – Mando me.
Il colonnello lo guardò in faccia. Quel ragazzo lo conosceva da due anni; sapeva quel che valeva. – Vai, gli disse.
Il ragazzo rimise il tamburo, buttò via tutto ciò che poteva fare rumore, e si avviò verso il fiume. Il colonnello lo seguì cogli occhi finché poté vederlo; poi rimase ad aspettare, fumando e passeggiando.
Passò una mezz'ora. I soldati attorno al fuoco non parlavano più; guardavano tutti verso il fiume, nell'oscurità. Cominciavano a stare in pensiero. Un'ora passò. Il colonnello passeggiava a passi lunghi, e tratto tratto si fermava ad ascoltare. Due ore! Tre ore! La notte era silenziosa; i fuochi si spegnevano; il colonnello non camminava più; seduto sur un sasso, con la fronte sulla mano, aspettava.
Finalmente, verso le quattro del mattino, s'udì uno sciacquio leggero nel fiume: tutti si alzarono. Il tamburino uscì dall'acqua, bianco come un morto, con la ferita d'una baionetta nel fianco, e a stento si reggeva in piedi. Il colonnello gli corse incontro. – Sei ferito! – disse. – Sì, rispose il ragazzo, ma ho visto tutto. E cadde.
Lo portarono a curare: guarì, e il colonnello lo raccontò a tutti con ammirazione, come un atto d'eroismo tra i più belli che avesse mai veduto. Il ragazzo disse soltanto: – Ho fatto il mio dovere.`,
"Edmondo De Amicis, Cuore (1886) – opera in pubblico dominio"),

SM("3_1",0,"comprensione_globale","Qual è il messaggio principale della storia del tamburino sardo?",
["La guerra è un'esperienza formativa per i giovani.",
 "Il coraggio e il senso del dovere possono portare a compiere gesti straordinari.",
 "I bambini sono più coraggiosi degli adulti.",
 "L'esercito italiano era il migliore d'Europa nel 1848."],1),

SM("3_2",0,"comprensione_locale","Perché il colonnello aveva bisogno di inviare qualcuno oltre il fiume?",
["Per portare un messaggio al nemico.",
 "Per sapere dove fossero esattamente appostati i soldati nemici.",
 "Per trovare un guado più sicuro per far passare le truppe.",
 "Per recuperare l'equipaggiamento perduto durante la marcia."],1),

VF("3_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Il tamburino aveva sedici anni al momento dei fatti.",ok:false},
 {t:"Il padre del tamburino era morto in battaglia.",ok:true},
 {t:"Il colonnello conosceva il ragazzo da due anni.",ok:true},
 {t:"Il tamburino tornò illeso dalla sua esplorazione.",ok:false},
 {t:"La missione durò circa mezz'ora.",ok:false}]),

SM("3_4",0,"inferenza","Perché il tamburino 'buttò via tutto ciò che poteva fare rumore' prima di partire?",
["Perché voleva viaggiare più velocemente.",
 "Per non essere sentito dal nemico durante la missione di esplorazione.",
 "Perché il colonnello glielo aveva ordinato.",
 "Per alleggerire il peso dello zaino."],1),

AP("3_5",0,"inferenza","Descrivi lo stato d'animo del colonnello durante le ore di attesa. Usa le informazioni del testo.",
["preoccupato attesa ansioso passeggiava fronte mano",
"inquieto teso aspettava silenzio",
"angoscia attesa soldati fuochi",
"preoccupato ansioso",
"angosciato teso",
"aspettava in silenzio",
"passeggiava nervoso",
"mano sulla fronte",
"paura per i soldati",
"stato d'animo angoscia"]),

SM("3_6",0,"struttura_testo","Il testo è una storia raccontata all'interno di un'altra storia (il maestro racconta ai ragazzi). Come si chiama questa tecnica narrativa?",
["Flashback.","Narratore inattendibile.","Storia nella storia (racconto incorniciato).",
 "Monologo interiore."],2),

SM("3_7",0,"lessico_contesto","La parola 'guado' nel testo indica:",
["Un tipo di barca militare.",
 "Un punto poco profondo del fiume dove si può attraversare a piedi.",
 "Un ponte militare temporaneo.",
 "Una zona paludosa pericolosa."],1),

VF("3_8",0,"struttura_testo","Indica se le seguenti affermazioni sono vere (V) o false (F).",
[{t:"Aspettava seduto su un sasso con la fronte sulla mano. (si riferisce al colonnello)",ok:true},
 {t:"Era figlio di un caporale morto in battaglia. (si riferisce al tamburino)",ok:true},
 {t:"Passeggiava a passi lunghi durante l'attesa. (si riferisce al tamburino)",ok:false},
 {t:"Disse solo 'Ho fatto il mio dovere'. (si riferisce al tamburino)",ok:true}]),

AP("3_9",0,"comprensione_globale","Perché, secondo te, il tamburino risponde 'Ho fatto il mio dovere' invece di vantarsi del suo coraggio? Cosa rivela questa frase del suo carattere?",
["umiltà senso del dovere modestia",
"non cerca gloria dovere",
"riservatezza virtù",
"umile modesto",
"non vuole gloria",
"fa il suo dovere",
"non si vanta",
"semplice essenziale",
"risponde con semplicità",
"basta fare il dovere"]),

SM("3_10",0,"lessico_contesto","'A stento si reggeva in piedi' significa:",
["Stava cadendo e non riusciva a camminare quasi.",
 "Stava correndo verso il colonnello.",
 "Stava nuotando nel fiume.",
 "Stava cercando di rialzarsi da terra."],0),

T("3_t2",0,"Testo B – Il diritto all'istruzione nel mondo",
`L'istruzione è riconosciuta come un diritto fondamentale da quasi tutti i trattati internazionali sui diritti umani. L'articolo 26 della Dichiarazione Universale dei Diritti dell'Uomo, approvata nel 1948, afferma che 'ogni individuo ha diritto all'istruzione'. Eppure, a distanza di oltre settant'anni da quella dichiarazione, milioni di bambini nel mondo non hanno ancora accesso a una scuola.
Secondo i dati UNESCO aggiornati al 2023, circa 244 milioni di bambini e adolescenti tra i 6 e i 18 anni non frequentano la scuola. Le ragioni sono molteplici: povertà, conflitti armati, discriminazione di genere, distanza dalle scuole, lavoro minorile, mancanza di insegnanti qualificati. In alcuni paesi in conflitto, le scuole vengono deliberatamente distrutte o usate come bersagli militari.
La discriminazione di genere rimane uno degli ostacoli più persistenti. In molte regioni dell'Asia meridionale, dell'Africa subsahariana e del Medio Oriente, le famiglie privilegiano l'istruzione dei figli maschi rispetto alle femmine. Le bambine, in questi contesti, vengono spesso avviate precocemente al matrimonio o ai lavori domestici. Eppure le ricerche dimostrano che ogni anno in più di scolarizzazione femminile riduce la mortalità infantile, aumenta il reddito familiare e migliora la salute pubblica.
Le tecnologie digitali hanno aperto nuove possibilità: lezioni online, tablet distribuiti nelle scuole rurali, programmi radio per le zone senza connessione. Ma queste soluzioni funzionano solo dove c'è già una minima infrastruttura: elettricità, connessione, dispositivi. Nei contesti più poveri, la tecnologia rischia di ampliare il divario invece di colmarlo.
La scuola non è solo apprendimento di contenuti: è socializzazione, costruzione dell'identità, sviluppo del pensiero critico. Un bambino che non va a scuola perde non solo conoscenze, ma anche la possibilità di diventare un cittadino consapevole. Investire nell'istruzione è la scelta più efficace e duratura che una società possa fare.`,
"Testo originale a fini didattici"),

SM("3_11",0,"comprensione_globale","L'idea principale del testo B è:",
["Le tecnologie digitali risolveranno il problema dell'istruzione nel mondo.",
 "Il diritto all'istruzione è formalmente riconosciuto ma ancora lontano dall'essere realizzato per tutti.",
 "I paesi ricchi devono finanziare le scuole dei paesi poveri.",
 "La discriminazione di genere è il solo ostacolo all'istruzione nel mondo."],1),

SM("3_12",0,"comprensione_locale","Quanti bambini e adolescenti non frequentano la scuola secondo i dati UNESCO 2023?",
["Circa 100 milioni.","Circa 160 milioni.","Circa 244 milioni.","Circa 500 milioni."],2),

VF("3_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"Il diritto all'istruzione è riconosciuto dalla Dichiarazione Universale dei Diritti dell'Uomo del 1948.",ok:true},
 {t:"Le tecnologie digitali funzionano bene in tutti i contesti, anche i più poveri.",ok:false},
 {t:"La scolarizzazione femminile ha effetti positivi sulla salute pubblica.",ok:true},
 {t:"I conflitti armati non influenzano l'accesso all'istruzione.",ok:false},
 {t:"La scuola contribuisce allo sviluppo del pensiero critico.",ok:true}]),

SM("3_14",0,"inferenza","Perché l'autore afferma che 'la tecnologia rischia di ampliare il divario invece di colmarlo'?",
["Perché i giovani usano la tecnologia solo per divertirsi.",
 "Perché le soluzioni digitali funzionano solo dove esistono già le infrastrutture necessarie, escludendo i più poveri.",
 "Perché i docenti non sanno usare la tecnologia.",
 "Perché la tecnologia è troppo costosa per le scuole."],1),

AP("3_15",0,"struttura_testo","In che modo il testo B si collega tematicamente al testo A? Individua almeno due elementi in comune.",
["istruzione scuola bambini diritto formazione",
"accesso istruzione bambini poveri",
"scuola fondamentale crescita",
"testo A bambino guerra",
"testo B diritto istruzione",
"bambini scuola",
"coraggio e istruzione",
"entrambi parlano di bambini",
"diritto negato",
"formazione fondamentale"]),

T("3_t3",1,"SEZIONE B – LESSICO","",""),

SM("3_16",1,"lessico","Sinonimo di 'scolarizzazione':",
["L'insieme delle attività scolastiche.","Il processo di frequenza e accesso alla scuola.","I risultati ottenuti a scuola.","La costruzione di edifici scolastici."],1),

SM("3_17",1,"lessico_contesto","In quale frase 'discriminazione' è usata nel senso del testo?",
["Quella persona ha una grande capacità di discriminazione tra i sapori.",
 "La discriminazione di genere impedisce a molte bambine di andare a scuola.",
 "Il giudice ha fatto una discriminazione precisa tra i fatti.",
 "Una buona discriminazione tra dati è fondamentale in statistica."],1),

COMP("3_18",1,"lessico_contesto","Completa le frasi scegliendo la parola corretta.",
[{prima:"L'istruzione è riconosciuta come un diritto ",dopo:" da quasi tutti i trattati internazionali.",ok:0},
 {prima:"Nei paesi in conflitto, le scuole vengono ",dopo:" distrutte.",ok:1},
 {prima:"Investire nell'istruzione è la scelta più efficace e ",dopo:" che una società possa fare.",ok:2}],
["fondamentale","deliberatamente","duratura","opzionale","accidentalmente","temporanea"]),

SM("3_19",1,"lessico","'Persistente' (terzo paragrafo) significa:",
["Che dura nel tempo, che non scompare facilmente.","Che è comparso di recente.","Che è molto violento.","Che è difficile da comprendere."],0),

COL("3_20",1,"lessico","Collega ogni parola con il suo contrario.",
["deliberato","persistente","fondamentale","consapevole"],
["casuale, non intenzionale","secondario, non essenziale","inconsapevole, ignaro","temporaneo, passeggero"],
{0:0,1:3,2:1,3:2}),

SM("3_21",1,"lessico","La parola 'infrastruttura' si riferisce a:",
["L'organizzazione interna di una scuola.",
 "L'insieme degli impianti e delle strutture di base necessarie al funzionamento di un sistema.",
 "Il programma didattico di un corso.",
 "Il personale amministrativo di un ente."],1),

SM("3_22",1,"lessico","Quale delle seguenti parole appartiene alla stessa famiglia di 'scolarizzazione'?",
["Scolastico","Scalare","Scolorire","Scolare"],0),

T("3_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("3_23",2,"morfologia","In 'Era un'impresa pericolosa: si doveva traversare il fiume a guado', il verbo 'si doveva' è alla forma:",
["Passiva.","Riflessiva.","Impersonale.","Attiva."],2),

VF("3_24",2,"morfologia","Per ognuna delle seguenti affermazioni sulla categoria grammaticale, indica se è vera (V) o falsa (F).",
[{t:"'coraggioso' (nel testo A) è un aggettivo.",ok:true},
 {t:"'finalmente' (nel testo A) è un nome.",ok:false},
 {t:"'pericolosa' (nel testo A) è un aggettivo.",ok:true},
 {t:"'deliberatamente' (nel testo B) è un avverbio.",ok:true}]),

SM("3_25",2,"sintassi","In 'Ci voleva qualcuno di coraggio, di sveltezza e di giudizio', i tre complementi di qualità sono uniti da:",
["Asindeto.","Polisindeto.","Coordinazione con 'oppure'.","Subordinazione."],1),

AP("3_26",2,"sintassi","Analizza la struttura della frase 'Il tamburino uscì dall'acqua, bianco come un morto, con la ferita d'una baionetta nel fianco, e a stento si reggeva in piedi'. Quante proposizioni contiene? Di che tipo sono?",
["due proposizioni coordinate principali",
"principale uscì coordinata si reggeva",
"due principali coordinate",
"due principali",
"coordinate virgola",
"uscì e si reggeva",
"due verbi principali",
"proposizioni allo stesso livello",
"coordinate per giustapposizione"]),

SM("3_27",2,"morfologia","'Appostato' (nel testo) è il participio passato del verbo:",
["Apporre.","Appoggiare.","Appostare.","Appoggiarsi."],2),

COMP("3_28",2,"morfologia","Completa le frasi con il passato remoto o il trapassato prossimo del verbo indicato.",
[{prima:"Quando il tamburino tornò, il colonnello capì che ",dopo:" tutto.",ok:0},
 {prima:"Il reggimento ",dopo:" a lungo prima di accamparsi. (marciare)",ok:1},
 {prima:"Il padre del tamburino ",dopo:" in battaglia prima che il ragazzo partisse.",ok:2}],
["aveva visto","aveva marciato / marciò","era morto","vide","marciava","moriva"]),

SM("3_29",2,"punteggiatura","I punti e virgola nella frase 'si doveva traversare il fiume a guado; camminare nel buio; tornare senza esser visti' separano:",
["Proposizioni principali coordinate.","Elementi di un elenco di azioni legate al tema della missione.","Proposizioni subordinate di tipo diverso.","Elementi in opposizione tra loro."],1),

SM("3_30",2,"coesione","A cosa si riferisce il pronome 'lo' nella frase 'Il colonnello lo seguì cogli occhi'?",
["Il tamburo abbandonato dal ragazzo.",
 "Il tamburino che si avviava verso il fiume.",
 "Il fiume davanti all'accampamento.",
 "Il fuoco attorno a cui erano seduti i soldati."],1),

SM("3_31",2,"morfologia","'Bianco come un morto' è una:",
["Metafora.","Similitudine.","Metonimia.","Personificazione."],1),

SM("3_32",2,"sintassi","In quale delle seguenti frasi c'è una proposizione finale?",
["Il tamburino partì perché era coraggioso.",
 "Il tamburino partì sebbene fosse solo un ragazzo.",
 "Il tamburino partì affinché il colonnello potesse conoscere le posizioni nemiche.",
 "Il tamburino partì quando il colonnello lo guardò."],2),

SM("3_33",2,"ortografia","Quale forma è corretta?",
["Aveva butatto via tutto ciò che poteva fare rumore.",
 "Aveva buttato via tutto ciò che poteva fare rumore.",
 "Aveva buttato via tutto cio che poteva fare rumore.",
 "Aveva buttatto via tutto ciò che poteva fare rumore."],1),

SM("3_34",2,"morfologia","In 'rimase ad aspettare', 'ad aspettare' è:",
["Un infinito con funzione di complemento predicativo.",
 "Un gerundio presente.",
 "Un infinito con funzione di proposizione finale implicita.",
 "Un participio presente."],2),

SM("3_35",2,"coesione","'Eppure, a distanza di oltre settant'anni da quella dichiarazione, milioni di bambini...' – 'eppure' introduce:",
["Una conferma di quanto detto prima.",
 "Un contrasto tra il principio dichiarato e la realtà.",
 "Una spiegazione della causa.",
 "Una conclusione del ragionamento."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 4 – Testo originale (narrativo) / Scienza e memoria
// ══════════════════════════════════════════════════════════════
const p4 = {id:4, titolo:"Il quaderno di Sofia", domande:[

T("4_t1",0,"Testo A – Il quaderno di Sofia (testo originale)",
`Sofia aveva tredici anni quando sua nonna cominciò a dimenticare le cose. Prima erano piccole distrazioni: le chiavi lasciate in frigorifero, il nome di un vicino di casa che non veniva più, la pentola messa sul fuoco e dimenticata lì. Poi vennero le dimenticanze più grandi, quelle che facevano paura: il nome di Sofia, per esempio, che la nonna confondeva con quello di sua madre, chiamandola Irene, come se i decenni si fossero appiattiti e i vivi e i morti occupassero lo stesso piano del tempo.
Il medico aveva spiegato ai genitori di Sofia che si trattava di Alzheimer, una malattia che non si guarisce ma si può rallentare, che mangia la memoria come un'acqua lenta mangia una riva, un po' per volta, senza che tu te ne accorga finché non è troppo tardi.
Sofia non aveva capito bene la parola 'Alzheimer', ma aveva capito benissimo la cosa. Sua nonna stava scomparendo. Non tutta insieme, non di colpo, ma a pezzi: prima i nomi, poi i luoghi, poi i volti.
Fu allora che Sofia ebbe l'idea del quaderno. Non lo disse a nessuno: comprò un quaderno con la copertina azzurra, e ogni sera, dopo cena, andava dalla nonna e le faceva domande. Non grandi domande sulla vita, ma piccole: come si chiamava la tua maestra delle elementari? Come era il cortile della casa dove sei cresciuta? Qual era il tuo piatto preferito da bambina?
La nonna, sorpresa da quelle domande, rispondeva. E Sofia scriveva tutto. Scriveva la maestra Giovannina dal cappello di piume nere; scriveva il cortile con il fico e il pozzo; scriveva la torta di riso della domenica con la crosta che sapeva di caramello.
Ci volle del tempo prima che Sofia capisse perché lo facesse. Non era per restituire i ricordi alla nonna – quelli, una volta andati, non tornavano più. Era per tenerli al sicuro, quei ricordi, come si tengono al sicuro gli oggetti preziosi: mettendoli in un posto dove non possano andare persi.
Un giorno la nonna non la riconobbe più, nemmeno come Irene. La guardò a lungo con occhi chiari e tranquilli, come se la vedesse per la prima volta. «Sei bella», le disse. «Come ti chiami?»
Sofia aprì il quaderno azzurro. «Mi chiamo Sofia», disse. «E questa è la storia di tua nipote che ti ha voluto bene.»`,
"Testo originale a fini didattici"),

SM("4_1",0,"comprensione_globale","Qual è il tema principale del testo?",
["La difficoltà di essere adolescenti in una famiglia con un malato.",
 "L'amore di Sofia per la nonna espresso attraverso il gesto di conservare i suoi ricordi.",
 "La malattia di Alzheimer e i suoi sintomi clinici.",
 "Il rapporto difficile tra genitori e figli adolescenti."],1),

SM("4_2",0,"comprensione_locale","Perché Sofia inizia a fare domande alla nonna?",
["Per allenarsi a scrivere storie.",
 "Per aiutare il medico a capire lo stadio della malattia.",
 "Per raccogliere e conservare i ricordi della nonna prima che scompaiano.",
 "Perché la nonna glielo aveva chiesto."],2),

VF("4_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"La nonna chiama Sofia con il nome di sua sorella.",ok:false},
 {t:"Sofia spiega subito ai suoi genitori del quaderno azzurro.",ok:false},
 {t:"Il medico dice che l'Alzheimer può essere rallentata ma non guarita.",ok:true},
 {t:"La nonna risponde volentieri alle piccole domande di Sofia.",ok:true},
 {t:"Alla fine la nonna non riconosce più Sofia nemmeno come Irene.",ok:true}]),

SM("4_4",0,"inferenza","La similitudine 'come un'acqua lenta mangia una riva' descrive:",
["La velocità improvvisa con cui si manifesta l'Alzheimer.",
 "Il modo graduale e inesorabile con cui la malattia consuma la memoria.",
 "La tristezza che circonda la nonna malata.",
 "Il rumore dell'acqua che accompagna i ricordi della nonna."],1),

AP("4_5",0,"inferenza","Perché Sofia scrive i ricordi della nonna, se sa che non potrà restituirglieli? Spiega il significato del suo gesto.",
["conservare preservare memoria perdita",
"tenere al sicuro ricordi preziosi",
"non per lei per sé",
"salvare i ricordi",
"nonna dimentica",
"memoria che scompare",
"per non perdere",
"conservare prima che svanisca",
"atti d'amore",
"per se stessa o per la nonna"]),

SM("4_6",0,"struttura_testo","La scena finale del testo (nonna che non riconosce Sofia) ha una funzione:",
["Dimostrare che la terapia medica non ha funzionato.",
 "Mostrare il momento più doloroso e al tempo stesso più significativo: Sofia si presenta con il quaderno come atto d'amore.",
 "Concludere la storia con un lieto fine.",
 "Introdurre un nuovo personaggio nella vicenda."],1),

SM("4_7",0,"lessico_contesto","L'espressione 'i decenni si fossero appiattiti' (primo paragrafo) significa:",
["Gli anni fossero sembrati lunghi e pesanti.",
 "Il tempo avesse perso la sua profondità, confondendo passato e presente.",
 "La nonna fosse diventata molto magra con gli anni.",
 "I ricordi lontani fossero tornati nitidissimi."],1),

VF("4_8",0,"struttura_testo","Per ognuna delle seguenti affermazioni sulla struttura del testo, indica se è vera (V) o falsa (F).",
[{t:"Sofia compra il quaderno azzurro e comincia a fare domande alla nonna: questa scena è lo sviluppo del testo.",ok:true},
 {t:"La nonna che non riconosce più Sofia è la scena conclusiva del testo.",ok:true},
 {t:"La nonna che comincia a dimenticare le cose piccole è la scena iniziale del testo.",ok:true},
 {t:"Sofia capisce perché tiene il quaderno è la scena iniziale del testo.",ok:false}]),

AP("4_9",0,"comprensione_globale","Descrivi il personaggio di Sofia: che tipo di ragazza è? Che valori dimostra? Usa le informazioni del testo.",
["sensibile premurosa amore cura discreta",
"agisce in silenzio amore",
"generosa attenta nonna",
"premurosa generosa",
"ama la nonna",
"discreta silenziosa",
"agisce senza chiedere",
"sensibile empatica",
"matura responsabile",
"si prende cura"]),

SM("4_10",0,"lessico_contesto","'Appiattiti' nel testo ha un significato:",
["Letterale: i decenni erano diventati piatti come fogli di carta.",
 "Figurato: il tempo aveva perso la sua normale struttura e profondità.",
 "Tecnico: si riferisce a un procedimento scientifico.",
 "Ironico: la nonna apprezzava la piattezza."],1),

T("4_t2",0,"Testo B – Come funziona la memoria",
`La memoria non è un archivio fisso dove le informazioni vengono conservate immutate: è un processo dinamico, continuamente rimodellato ogni volta che ricordiamo. Quando richiamiamo un ricordo, non stiamo leggendo un file salvato, ma ricostruendo attivamente un'esperienza: ogni volta che lo facciamo, il ricordo viene leggermente modificato dal contesto in cui lo richiamiamo, dal nostro stato emotivo, da ciò che sappiamo nel momento presente.
Gli scienziati distinguono diversi tipi di memoria. La memoria a breve termine, o memoria di lavoro, tiene attive le informazioni per pochi secondi o minuti: è quella che usiamo quando ricordiamo un numero di telefono il tempo necessario per digitarlo. La memoria a lungo termine, invece, può conservare informazioni per tutta la vita. Si divide a sua volta in memoria dichiarativa (fatti ed eventi) e memoria procedurale (abilità motorie, come andare in bicicletta).
Il processo di consolidamento della memoria avviene principalmente durante il sonno: il cervello 'riordina' le informazioni ricevute durante la giornata e le trasferisce dalla memoria a breve termine a quella a lungo termine. Per questo dormire poco compromette la capacità di apprendere.
La malattia di Alzheimer colpisce inizialmente la memoria dichiarativa, in particolare quella episodica: i ricordi di eventi recenti scompaiono prima di quelli lontani. Per questo molti malati ricordano perfettamente l'infanzia ma non sanno dire cosa hanno mangiato a pranzo. Con il progredire della malattia, anche la memoria procedurale viene intaccata, rendendo difficili gesti quotidiani come vestirsi o mangiare.
La ricerca scientifica sta lavorando a farmaci e tecniche per rallentare il declino cognitivo. Ma la prevenzione resta il miglior strumento: stimolazione mentale, attività fisica, relazioni sociali attive e sonno regolare sono i fattori che più contribuiscono a mantenere il cervello in salute nel tempo.`,
"Testo originale a fini didattici"),

SM("4_11",0,"comprensione_globale","L'idea principale del testo B è:",
["La memoria è un processo dinamico con diversi tipi e meccanismi, non un archivio statico.",
 "Il sonno è l'unico fattore che influenza la memoria.",
 "L'Alzheimer è una malattia incurabile e inevitabile.",
 "La memoria procedurale è più importante di quella dichiarativa."],0),

SM("4_12",0,"comprensione_locale","Qual è la differenza tra memoria dichiarativa e procedurale?",
["La dichiarativa è più antica, la procedurale è più recente.",
 "La dichiarativa riguarda fatti ed eventi; la procedurale riguarda le abilità motorie.",
 "La dichiarativa si perde con l'Alzheimer; la procedurale no.",
 "La dichiarativa è consapevole; la procedurale è inconscia e non esiste davvero."],1),

VF("4_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"Ogni volta che richiamiamo un ricordo, lo modifichiamo leggermente.",ok:true},
 {t:"Il consolidamento della memoria avviene principalmente durante la veglia.",ok:false},
 {t:"L'Alzheimer colpisce prima i ricordi lontani e poi quelli recenti.",ok:false},
 {t:"L'attività fisica contribuisce a mantenere il cervello in salute.",ok:true},
 {t:"La memoria a breve termine può conservare informazioni per tutta la vita.",ok:false}]),

SM("4_14",0,"inferenza","In che modo il testo B aiuta a comprendere meglio la storia di Sofia nel testo A?",
["Spiega come costruire un quaderno di ricordi.",
 "Fornisce la base scientifica per capire cosa sta perdendo la nonna e perché i ricordi lontani restano più a lungo.",
 "Indica quali farmaci potrebbero aiutare la nonna di Sofia.",
 "Spiega perché Sofia non riesce a restituire i ricordi alla nonna."],1),

AP("4_15",0,"struttura_testo","Come è organizzato il testo B? Descrivi la struttura dei paragrafi e la progressione dei contenuti.",
["definizione tipi processi malattia prevenzione",
"da generale a specifico memoria tipi Alzheimer",
"struttura espositiva progressiva",
"espositivo informativo",
"prima la memoria poi Alzheimer",
"tipi di memoria",
"dal generale al particolare",
"paragrafi progressivi",
"spiegazione scientifica",
"struttura ordinata"]),

T("4_t3",1,"SEZIONE B – LESSICO","",""),

SM("4_16",1,"lessico","'Inesorabile' nel testo significa:",
["Molto veloce e improvviso.","Che non si può fermare né evitare.","Molto doloroso fisicamente.","Difficile da capire."],1),

SM("4_17",1,"lessico_contesto","In quale frase 'consolidare' è usato in senso figurato?",
["Il muro è stato consolidato con del cemento.",
 "Bisogna consolidare la propria posizione prima di procedere.",
 "Il tecnico ha consolidato la struttura dell'edificio.",
 "Hanno consolidato il terreno franoso con dei pali."],1),

COMP("4_18",1,"lessico_contesto","Completa le frasi scegliendo la parola corretta.",
[{prima:"La memoria non è un archivio fisso, ma un processo ",dopo:".",ok:0},
 {prima:"Il cervello 'riordina' le informazioni durante il ",dopo:".",ok:1},
 {prima:"La stimolazione mentale è uno dei fattori di ",dopo:" del cervello.",ok:2}],
["dinamico","sonno","prevenzione","statico","giorno","deterioramento"]),

SM("4_19",1,"lessico","Sinonimo di 'compromette':",
["Migliora significativamente.","Danneggia, riduce la qualità di qualcosa.","Consolida e rafforza.","Misura con precisione."],1),

COL("4_20",1,"lessico","Collega ogni termine del testo con la sua definizione.",
["dichiarativa","procedurale","episodica","consolidamento"],
["relativa a episodi e fatti della propria vita","relativa ad abilità e automatismi motori","processo di stabilizzazione dei ricordi nella memoria a lungo termine","relativa a fatti e informazioni esplicite"],
{0:3,1:1,2:0,3:2}),

SM("4_21",1,"lessico","Quale delle seguenti parole contiene un prefisso con significato negativo?",
["Rimodellato","Incurabile","Procedurale","Episodica"],1),

SM("4_22",1,"lessico","'Declino cognitivo' si riferisce a:",
["Un miglioramento progressivo delle facoltà mentali.",
 "Una riduzione progressiva delle capacità mentali.",
 "Un cambiamento improvviso del comportamento.",
 "Un aumento del volume del cervello."],1),

T("4_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("4_23",2,"morfologia","In 'La nonna non la riconobbe più, nemmeno come Irene', la costruzione 'non... più... nemmeno' esprime:",
["Una progressione positiva.","Una negazione totale e definitiva.","Un dubbio del narratore.","Una domanda implicita."],1),

VF("4_24",2,"morfologia","Indica la funzione grammaticale delle parole sottolineate nella frase: 'Sofia non aveva capito bene la parola, ma aveva capito benissimo la cosa'.",
[{t:"'bene' è un avverbio di modo.",ok:true},
 {t:"'benissimo' è un aggettivo al superlativo assoluto.",ok:false},
 {t:"'ma' è una congiunzione coordinante avversativa.",ok:true},
 {t:"'la cosa' è il soggetto della proposizione.",ok:false}]),

SM("4_25",2,"sintassi","In 'Sofia comprò un quaderno e ogni sera andava dalla nonna', le due proposizioni sono:",
["Subordinate.","Coordinate per giustapposizione.","Coordinate con congiunzione copulativa.","Principale e relativa."],2),

AP("4_26",2,"sintassi","Nella frase 'Era per tenerli al sicuro, quei ricordi, come si tengono al sicuro gli oggetti preziosi', individua: la proposizione principale, l'apposizione e la proposizione comparativa.",
["principale era per tenerli apposizione quei ricordi comparativa come si tengono",
"apposizione quei ricordi comparativa come oggetti preziosi",
"principale comparativa apposizione",
"principale era",
"apposizione quei ricordi",
"comparativa come si tengono",
"come oggetti preziosi",
"ripresa pronominale",
"comparativa al sicuro"]),

SM("4_27",2,"morfologia","'Scomparendo' è la forma del gerundio presente del verbo 'scomparire'. In quale frase è usato correttamente?",
["La nonna stava scomparendo a pezzi.",
 "La nonna scomparendo era triste.",
 "Scomparendo la nonna, Sofia aprì il quaderno.",
 "Sofia vide scomparendo la nonna."],0),

COMP("4_28",2,"morfologia","Completa le frasi con il verbo corretto al modo e tempo indicati.",
[{prima:"La nonna ",dopo:" Sofia ogni volta che la vedeva.",ok:0},
 {prima:"Sofia sperava che la nonna ",dopo:" i ricordi del passato.",ok:1},
 {prima:"Se la nonna ",dopo:" il quaderno, avrebbe pianto.",ok:2}],
["riconosceva","ricordasse","avesse visto","riconobbe","ricordò","vide"]),

SM("4_29",2,"punteggiatura","In 'scriveva la maestra Giovannina dal cappello di piume nere; scriveva il cortile con il fico e il pozzo; scriveva la torta di riso della domenica', i punti e virgola separano:",
["Proposizioni in opposizione tra loro.",
 "Elementi di un elenco che presentano struttura parallela.",
 "Proposizioni subordinate di tipo diverso.",
 "Proposizioni principali con soggetti diversi."],1),

SM("4_30",2,"coesione","'Fu allora che Sofia ebbe l'idea del quaderno' – a cosa si riferisce 'allora'?",
["Al momento in cui il medico visitò la nonna.",
 "Al momento in cui la nonna smise di riconoscere Sofia come Irene.",
 "Al momento in cui la nonna cominciò a dimenticare cose piccole.",
 "Al momento in cui la nonna non riconobbe più Sofia."],1),

SM("4_31",2,"morfologia","In 'come se la vedesse per la prima volta', il modo verbale di 'vedesse' è:",
["Indicativo imperfetto.","Condizionale presente.","Congiuntivo imperfetto.","Congiuntivo presente."],2),

SM("4_32",2,"sintassi","'Non grandi domande sulla vita, ma piccole' – quale elemento è sottinteso in questa frase?",
["Il soggetto 'Sofia'.",
 "Il sostantivo 'domande' (non grandi domande... ma piccole [domande]).",
 "Il verbo 'fare'.",
 "Il pronome 'quelle'."],1),

SM("4_33",2,"ortografia","Quale delle seguenti frasi è scritta correttamente?",
["La nonna non si accorgeva di niente; la malattia avanzava.",
 "La nonna non si accorgeva di niente, la malattia avanzava.",
 "La nonna non si accorgeva di niente: la malattia avanzava.",
 "Tutte e tre le forme sono corrette."],3),

SM("4_34",2,"morfologia","In 'Come ti chiami?', il verbo 'ti chiami' è alla forma:",
["Passiva.","Impersonale.","Riflessiva.","Attiva con oggetto diretto."],2),

SM("4_35",2,"coesione","Il pronome 'quelli' nella frase 'quelli, una volta andati, non tornavano più' si riferisce a:",
["I quaderni di Sofia.","I ricordi della nonna.","I medici che curavano la nonna.","I genitori di Sofia."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 5 – Novelle pirandelliane / Il linguaggio del cinema
// ══════════════════════════════════════════════════════════════
const p5 = {id:5, titolo:"La giara", domande:[

T("5_t1",0,"Testo A – La giara (Luigi Pirandello, 1909)",
`Don Lollò Zirafa aveva una campagna che quell'anno, Dio sia lodato, aveva dato un'ottima produzione d'olive. L'oliveto era ricchissimo, e siccome anche l'anno avanti le olive erano state abbondanti, e il deposito di due grandi giare di creta murate, ch'egli aveva in cantina, non era più sufficiente, aveva ordinato in tempo una terza giara, più capiente delle altre due, nuova e bella, come una canonica.
Don Lollò Zirafa si recò dalla bottega con l'ortolano che gli aveva dato la notizia, per vedere la giara rotta. Aveva la ventre panciuta, bassa e larga, e il collo stretto: era stata rotta in un modo che sembrava quasi impossibile, da cima a fondo, in due pezzi netti netti, come se qualcuno ci avesse lavorato sopra di proposito.
Don Lollò Zirafa, infuriatissimo, voleva subito andare dal conciatore a urlare; ma l'ortolano disse che era impossibile: la giara era arrivata intera, ne era sicurissimo; si vedeva dal modo in cui era rotta, che si trattava di vizio di cottura: era suonata vuota; il conciatore non ne aveva colpa.
Zì Dima si presentò con gli attrezzi dell'arte: era un vecchio bitorzoluto, con le mani nodose e il mestiere perenne di chi ha aggiustato cose tutta la vita. Propose a don Lollò di aggiustar la giara alla sua maniera, che doveva reggere anche a chi ci battesse su un bastone. Don Lollò gli rispose che doveva voler dire, se il mastice era buono, che la giara si potrebbe vendere anche come intera.
La riparazione fu affidata a zì Dima, che aveva portato con sé anche una specie di chiodo fatto di pece greca e guttaperca, e che ci si servì anche di certi fiocchetti di filo di ferro: quando finì, la giara era aggiustata che sembrava nuova.
Ma ecco che nel tirarsi su per uscire, zì Dima s'accorse di non poter uscire dalla giara: era rimasto prigioniero dentro. La pancia della giara era larga e bassa, e il collo stretto: lui ci era entrato senza riflettere e ora, tentando di uscire, si trovava incastrato.
– Ma come? – rispose zì Dima. – Ho aggiustato la giara dall'interno, e ora non ci passo.
Don Lollò, come il vecchio gli ebbe spiegato la cosa, rimase come impietrito, interdetto, come non capisse. Ma poi, tutto in una volta, si diede una gran manata sulla fronte e cominciò a rotolar dalla risata, mordendosi le dita per il dispetto.
Don Lollò si mordeva le mani dalla rabbia. Come si faceva? Rompere la giara per liberare il vecchio voleva dire perdere il prezzo dell'aggiustatura. Tenerlo lì dentro non si poteva.`,
"Luigi Pirandello, Novelle per un anno (1922) – adattamento didattico"),

SM("5_1",0,"comprensione_globale","La situazione paradossale al centro del testo è:",
["Don Lollò che non riesce a vendere le olive.",
 "Zì Dima rimasto prigioniero dentro la giara che ha appena riparato.",
 "La giara che si rompe di notte senza spiegazione.",
 "Il contrasto tra don Lollò e l'ortolano."],1),

SM("5_2",0,"comprensione_locale","Perché don Lollò aveva bisogno di nuove giare?",
["Le vecchie erano rotte da anni.",
 "Voleva ampliare la cantina con un terzo contenitore più capiente.",
 "Le aveva rotte lui stesso per rabbia.",
 "Le aveva prestate al vicino."],1),

VF("5_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"La giara si rompe perché qualcuno la spacca intenzionalmente.",ok:false},
 {t:"Zì Dima propone di aggiustare la giara con mastice e filo di ferro.",ok:true},
 {t:"Don Lollò è contento della riparazione prima che si scopra il problema.",ok:true},
 {t:"Zì Dima entra nella giara di proposito, sapendo di potervi rimanere bloccato.",ok:false},
 {t:"Don Lollò è disposto a rompere subito la giara per liberare zì Dima.",ok:false}]),

SM("5_4",0,"inferenza","Don Lollò si trova in un dilemma: perché non può né rompere la giara né tenervi zì Dima dentro?",
["Perché la giara è di valore storico e non può essere toccata.",
 "Perché rompendola perderebbe il valore dell'aggiustatura, ma tenerci dentro una persona è impossibile.",
 "Perché la legge vieta di rompere le giare.",
 "Perché zì Dima si rifiuta di uscire."],1),

AP("5_5",0,"inferenza","Pirandello usa questa situazione comica per parlare di qualcosa di più profondo. Secondo te, che cosa vuole dire sul rapporto tra le leggi, i contratti e la vita reale?",
["regole rigide assurde legge vita reale paradosso",
 "contratto proprietà formale assurdo",
 "legge formale non basta situazione reale",
 "regole non tengono conto vita",
 "diritto proprietà vs umanità",
 "legge assurda contraddizione",
 "regole assurde",
 "legge rigida",
 "contratto stupido",
 "norme non funzionano",
 "regole non si adattano",
 "leggi non bastano",
 "formale vs reale",
 "contratto vs vita",
 "assurdo paradosso legge",
 "rigido non funziona vita",
 "regole creano problemi",
 "legge crea situazioni assurde",
 "norme rigide realtà",
 "proprietà soldi regole"]),

SM("5_6",0,"struttura_testo","Il testo usa la tecnica del paradosso comico: una situazione inizialmente normale che diventa assurda. Quale frase segna la svolta paradossale?",
["'Don Lollò Zirafa aveva una campagna che quell'anno aveva dato un'ottima produzione d'olive.'",
 "'La riparazione fu affidata a zì Dima.'",
 "'Ma ecco che nel tirarsi su per uscire, zì Dima s'accorse di non poter uscire dalla giara.'",
 "'Rompere la giara per liberare il vecchio voleva dire perdere il prezzo dell'aggiustatura.'"],2),

SM("5_7",0,"lessico_contesto","'Bitorzoluto' (quarto paragrafo) descrive:",
["Una persona molto anziana e stanca.",
 "Una superficie o un corpo con molti rilievi e protuberanze irregolari.",
 "Un oggetto di argilla di cattiva qualità.",
 "Un movimento goffo e sgraziato."],1),

VF("5_8",0,"struttura_testo","Indica se le seguenti affermazioni sui personaggi sono vere (V) o false (F).",
[{t:"È arrabbiato con il primo conciatore per la rottura della giara. (si riferisce a don Lollò)",ok:true},
 {t:"Ha già riparato molte giare in passato. (si riferisce a zì Dima)",ok:true},
 {t:"Propone subito di rompere la giara per uscire. (si riferisce a zì Dima)",ok:false},
 {t:"Inizia a ridere quando capisce la situazione assurda. (si riferisce a don Lollò)",ok:true}]),

AP("5_9",0,"comprensione_globale","Descrivi con parole tue il carattere di don Lollò come emerge dal testo. Usa almeno due esempi tratti dal racconto.",
["avaro tirchio attaccato denaro irascibile",
 "arrabbiato giara soldi rabbioso",
 "possessivo beni economici",
 "irascibile furioso beni materiali",
 "avido denaro arrabbiato mordeva mani",
 "attaccato roba proprietà",
 "collerico iracondo interessi economici",
 "taccagno furioso perdere soldi",
 "avaro arrabbiato",
 "taccagno irascibile",
 "attaccato soldi",
 "non vuole perdere soldi",
 "pensa solo ai soldi",
 "arrabbiato denaro",
 "furioso avaro",
 "mordeva mani rabbia",
 "non vuole rompere giara",
 "interessato denaro",
 "tirchio iracondo",
 "ossessionato denaro giara",
 "agitato arrabbiato beni",
 "egoista soldi"]),

SM("5_10",0,"lessico_contesto","'Mastice' (quarto paragrafo) si riferisce a:",
["Un tipo di oliva particolare.",
 "Una sostanza adesiva usata per riparare oggetti.",
 "Un attrezzo del falegname.",
 "Il compenso pagato a zì Dima."],1),

T("5_t2",0,"Testo B – Il linguaggio del cinema","Il cinema è un linguaggio. Come ogni linguaggio, ha le sue regole, le sue convenzioni, la sua grammatica. Quando guardiamo un film, non riceviamo semplicemente delle immagini in movimento: decodifichiamo un sistema di segni che il regista ha costruito per comunicare qualcosa.\nIl piano sequenza, il campo lungo, il primo piano, il montaggio: ogni scelta tecnica produce un effetto sul pubblico. Un campo lungo comunica solitudine o grandiosità; un primo piano avvicina il volto di un personaggio e crea empatia o tensione; il montaggio veloce crea agitazione, quello lento malinconia.\nIl famoso esperimento di Kulešov, realizzato negli anni Venti del Novecento in Unione Sovietica, dimostrò che lo stesso volto di un attore appariva di volta in volta triste, affamato o spaventato a seconda dell'inquadratura che lo precedeva. Il significato, insomma, nasce dal montaggio: non dalle immagini singole, ma dalle relazioni tra esse.\nConoscere il linguaggio cinematografico non trasforma lo spettatore in un critico freddo e distaccato: al contrario, ne arricchisce il godimento. Capire come un regista costruisce la tensione, come sceglie la musica, come usa il colore come metafora, ci rende spettatori più consapevoli e, come si dice, più difficili da manipolare.\nIl cinema è anche uno specchio della società. Un film non è mai neutro: riflette i valori, le paure, le speranze di un'epoca. Sapere leggere un film, perciò, significa anche capire meglio il mondo in cui viviamo.","Testo originale a fini didattici"),

SM("5_11",0,"comprensione_globale","Il testo B tratta principalmente:",
["La storia del cinema dalle origini a oggi.",
 "Gli elementi del linguaggio cinematografico e il loro effetto sullo spettatore.",
 "Le differenze tra cinema americano ed europeo.",
 "Come diventare un regista professionista."],1),

SM("5_12",0,"comprensione_locale","Cosa dimostrò l'esperimento di Kulešov?",
["Che gli attori russi erano i migliori del mondo.",
 "Che lo stesso volto di un attore assume significati diversi a seconda dell'inquadratura precedente.",
 "Che il montaggio lento è più efficace di quello veloce.",
 "Che il pubblico non riesce a distinguere le emozioni dei personaggi."],1),

VF("5_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"Un campo lungo comunica solitudine o grandiosità.",ok:true},
 {t:"Il primo piano allontana emotivamente lo spettatore dal personaggio.",ok:false},
 {t:"Il montaggio veloce crea un senso di agitazione.",ok:true},
 {t:"Conoscere il linguaggio cinematografico rende lo spettatore freddo e distaccato.",ok:false},
 {t:"Un film riflette i valori e le paure di un'epoca.",ok:true}]),

SM("5_14",0,"inferenza","Perché l'autore afferma che conoscere il linguaggio cinematografico ci rende 'più difficili da manipolare'?",
["Perché capire le tecniche ci permette di non essere ingannati da chi usa il cinema per scopi politici.",
 "Perché chi conosce il cinema non va più al cinema.",
 "Perché il cinema moderno usa troppi effetti speciali.",
 "Perché le regole del cinema sono uguali in tutto il mondo."],0),

AP("5_15",0,"struttura_testo","Qual è il collegamento tra il testo A (La giara) e il testo B? Potresti vedere La giara come un film? Quali tecniche cinematografiche descriveresti per raccontarla?",
["primo piano dettaglio giara paradosso montaggio",
 "regia camera close up inquadratura",
 "linguaggio visivo primo piano campo lungo",
 "primo piano giara montaggio paradosso",
 "immagini movimento sequenza",
 "campo lungo personaggio closeup",
 "tecniche cinematografiche racconto visivo",
 "film immagini visivo scena",
 "primo piano",
 "campo lungo",
 "montaggio",
 "inquadratura",
 "scena",
 "ripresa",
 "telecamera",
 "regia",
 "film giara",
 "immagini visive",
 "linguaggio cinema",
 "visivo racconto",
 "cinepresa",
 "fotogramma",
 "zoom giara",
 "sequenza scene",
 "schermo visivo linguaggio"]),

T("5_t3",1,"SEZIONE B – LESSICO","",""),

SM("5_16",1,"lessico","Sinonimo di 'paradosso':",
["Una situazione ovvia e logica.",
 "Una situazione contraddittoria che sembra impossibile ma esiste.",
 "Un gioco di parole senza senso.",
 "Un errore grammaticale nel discorso."],1),

SM("5_17",1,"lessico_contesto","In quale frase 'inquadratura' è usata in senso figurato?",
["Il direttore della fotografia ha scelto un'inquadratura ravvicinata.",
 "L'inquadratura del problema è fondamentale per trovare la soluzione.",
 "Il regista ha cambiato l'inquadratura durante le riprese.",
 "Il campo lungo è un tipo di inquadratura cinematografica."],1),

SM("5_18_0",1,"lessico_contesto","Completa: 'Il cinema è un linguaggio con una propria ___, cioè un insieme di regole.'",
["vocabolario","grammatica","sintassi","punteggiatura"],1),

SM("5_18_1",1,"lessico_contesto","Completa: 'Il montaggio ___ crea tensione e agitazione.'",
["lento","sonoro","veloce","visivo"],2),

SM("5_18_2",1,"lessico_contesto","Completa: 'Conoscere il linguaggio cinematografico ci rende spettatori più ___.'",
["ingenui","passivi","emotivi","consapevoli"],3),

SM("5_19",1,"lessico","'Malinconia' appartiene alla stessa area semantica di:",
["Allegria e gioia.","Tristezza e nostalgia.","Agitazione e tensione.","Sorpresa e meraviglia."],1),

COL("5_20",1,"lessico","Collega ogni elemento cinematografico con il suo significato o effetto principale.",
["campo lungo","primo piano","montaggio veloce","montaggio lento"],
["crea agitazione e tensione","comunica solitudine o grandiosità","crea malinconia","avvicina il volto, crea empatia"],
{0:1,1:3,2:0,3:2}),

SM("5_21",1,"lessico","La parola 'perenne' (quarto paragrafo del testo A) significa:",
["Molto raro e insolito.","Continuo, che dura per sempre senza interruzione.","Legato alla primavera.","Di scarso valore."],1),

SM("5_22",1,"lessico","Quale delle seguenti parole contiene un prefisso con significato 'contro/insieme'?",
["Arricchire","Contrastare","Rimodellare","Disperdere"],1),

T("5_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("5_23",2,"morfologia","In 'don Lollò si mordeva le mani dalla rabbia', il verbo 'si mordeva' è alla forma:",
["Passiva.","Riflessiva propria.","Reciproca.","Impersonale."],1),

VF("5_24",2,"morfologia","Per ognuna delle seguenti affermazioni sulla funzione grammaticale, indica se è vera (V) o falsa (F).",
[{t:"'subito' in 'voleva subito andare' è un avverbio di tempo.",ok:true},
 {t:"'capiente' è un aggettivo qualificativo.",ok:true},
 {t:"'prigioniero' in 'era rimasto prigioniero' ha funzione di soggetto.",ok:false},
 {t:"'infuriatissimo' è un superlativo assoluto.",ok:true}]),

SM("5_25",2,"sintassi","In 'siccome anche l'anno avanti le olive erano state abbondanti', la congiunzione 'siccome' introduce:",
["Una proposizione causale.",
 "Una proposizione temporale.",
 "Una proposizione concessiva.",
 "Una proposizione consecutiva."],0),

AP("5_26",2,"sintassi","Nella frase 'Don Lollò si mordeva le mani dalla rabbia, perché non sapeva come risolvere il problema senza perdere il denaro dell'aggiustatura', individua la proposizione principale e le subordinate, specificandone il tipo.",
["principale si mordeva causale perché non sapeva finale senza perdere",
 "principale subordinate causale finale",
 "si mordeva principale causale perché",
 "principale mordeva mani causale perché finale senza",
 "proposizione principale causale finale implicita",
 "si mordeva principale perché causale senza finale",
 "principale causale finale subordinate",
 "principale causale",
 "principale e causale",
 "causale perché",
 "finale senza perdere",
 "principale causale finale",
 "si mordeva principale",
 "perché causale subordinata",
 "senza perdere finale",
 "principale subordinata causale",
 "causale finale proposizioni",
 "principale e due subordinate",
 "principale perché causale senza finale"]),

SM("5_27",2,"morfologia","'Aggiustata' nella frase 'la giara era aggiustata che sembrava nuova' è:",
["Participio passato con funzione di predicato nominale.",
 "Participio passato con funzione di attributo.",
 "Gerundio.",
 "Aggettivo qualificativo."],0),

SM("5_28_0",2,"morfologia","Discorso indiretto: 'Don Lollò gridò: Rompila!' → Don Lollò gridò che ___.",
["la rompa.","la rompesse.","la romperà.","la rompeva."],1),

SM("5_28_1",2,"morfologia","Discorso indiretto: 'Zì Dima rispose: Ho aggiustato la giara dall'interno.' → Zì Dima rispose che ___.",
["ha aggiustato la giara dall'interno.",
 "aggiusta la giara dall'interno.",
 "aveva aggiustato la giara dall'interno.",
 "avesse aggiustato la giara dall'interno."],2),

SM("5_29",2,"punteggiatura","I trattini nel dialogo ('– Ma come? – rispose zì Dima. – Ho aggiustato la giara dall'interno, e ora non ci passo.') segnalano:",
["Un inciso esplicativo del narratore.",
 "Il cambio di battuta nel dialogo tra i personaggi.",
 "Una pausa lunga nella narrazione.",
 "Un pensiero interiore del personaggio."],1),

SM("5_30",2,"coesione","In 'lui ci era entrato senza riflettere' (sesto paragrafo), il pronome 'lui' si riferisce a:",
["A don Lollò.",
 "A zì Dima.",
 "All'ortolano.",
 "Al conciatore."],1),

SM("5_31",2,"morfologia","'Capiente' è un aggettivo derivato da:",
["Capire.","Capace.","Capo.","Capire + tenere."],1),

SM("5_32",2,"sintassi","In quale delle seguenti frasi c'è una proposizione concessiva?",
["Zì Dima riparò la giara perché il mastice era buono.",
 "Zì Dima riparò la giara sebbene fosse molto difficile.",
 "Zì Dima riparò la giara quando arrivò al mattino.",
 "Zì Dima riparò la giara così bene che sembrava nuova."],1),

SM("5_33",2,"ortografia","Quale forma è scritta correttamente?",
["Zì Dima aveva portato con sé i suoi attrezzi.",
 "Zì Dima aveva portato con se i suoi attrezzi.",
 "Zì Dima aveva portato con sè i suoi attrezzi.",
 "Zì Dima aveva portato con sé i suoi attrezi."],0),

SM("5_34",2,"morfologia","In 'come se qualcuno ci avesse lavorato sopra di proposito', il modo di 'avesse lavorato' è:",
["Indicativo imperfetto.","Congiuntivo imperfetto.","Condizionale presente.","Congiuntivo trapassato."],3),

SM("5_35",2,"coesione","'Ma ecco che nel tirarsi su per uscire...' – la congiunzione 'ma' in questo contesto introduce:",
["Una causa.","Un contrasto che segna la svolta inaspettata della storia.","Una conclusione.","Un elenco."],1),

]};

return [p1, p2, p3, p4, p5];
})();

// Registra le prove nel sistema
if(typeof PROVE !== 'undefined'){
  PROVE_NUOVE.forEach(p => {
    const idx = PROVE.findIndex(x => x.id === p.id);
    if(idx >= 0) PROVE[idx] = p; else PROVE.push(p);
  });
  PROVE.sort((a,b) => a.id - b.id);
}
