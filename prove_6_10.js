// ============================================================
//  PROVE 6-10 – SIMULAZIONE INVALSI ITALIANO TERZA MEDIA
//  Struttura fedele alle prove INVALSI reali
//  Testi: pubblico dominio + originali
//  Tipologie: SM, VF, AP, COMP, COL
// ============================================================

const PROVE_6_10 = (function(){

function T(id,sez,tit,testo,fonte){ return {id,sez,tipo:'testo',tit,testo,fonte:fonte||''}; }
function SM(id,sez,comp,testo,ops,ok){ return {id,sez,tipo:'sm',comp,testo,ops,ok}; }
function VF(id,sez,comp,testo,righe){ return {id,sez,tipo:'vf',comp,testo,righe}; }
function AP(id,sez,comp,testo,ok_open){ return {id,sez,tipo:'ap',comp,testo,ok_open}; }
function COMP(id,sez,comp,testo,gaps,parole){ return {id,sez,tipo:'comp',comp,testo,gaps,parole}; }
function COL(id,sez,comp,testo,sx,dx,coppie){ return {id,sez,tipo:'col',comp,testo,sx,dx,coppie}; }

// ══════════════════════════════════════════════════════════════
//  PROVA 6 – Cibo e cultura / La dieta mediterranea
// ══════════════════════════════════════════════════════════════
const p6 = {id:6, titolo:"Cibo, memoria e cultura", domande:[

T("6_t1",0,"Testo A – Pane e sale (testo originale)",
`Mia nonna faceva il pane ogni venerdì. Non era una scelta romantica: era una necessità. Vivevano in un paese dell'entroterra siciliano dove il pane del forno arrivava due volte alla settimana, e due volte alla settimana non bastava. Così ogni venerdì mattina la casa si riempiva di quel profumo che per me è rimasto per sempre legato all'idea di casa: farina, lievito, calore del forno a legna.
Ero bambina quando ho imparato a guardare le sue mani. Non le mani di mia nonna in generale – quelle erano mani come le altre, un po' nodose, con le unghie sempre corte e pulite – ma le mani che lavoravano il pane. Era una cosa diversa. Diventavano competenti, sicure, ritmiche. Affondavano nell'impasto con una decisione che non avevo mai visto in nessun altro gesto di lei, così riservata nel resto della vita.
Il pane di mia nonna era un pane scuro, alto, con la crosta spessa e dura che ci spaccavamo i denti da bambini. Non era il pane soffice che vendono nei supermercati, quello che si schiaccia fra le dita e sa di niente. Era un pane che aveva gusto, che resisteva, che si sentiva. Durava una settimana intera senza ammuffire, perché lei ci metteva il sale giusto e lo lasciava raffreddare sul canovaccio per ore.
Quando mia nonna morì, mia madre provò a rifare quel pane. Aveva guardato farlo mille volte. Ma non riuscì mai a venirle uguale. Mancava qualcosa che non si poteva trasmettere a parole né copiare guardando: forse la pressione esatta delle dita, forse la temperatura dell'acqua che lei valutava col palmo, forse semplicemente gli anni di pratica incorporata nel gesto.
Capii allora che certe cose si portano via con le persone. Che la memoria del corpo non è la stessa cosa della memoria della mente: puoi ricordare perfettamente la ricetta, i gesti, le proporzioni – e fare comunque un pane diverso. Che esiste un sapere che abita le mani, non la testa.
Oggi compro il pane al supermercato come tutti. Ma ogni volta che apro un sacchetto di farina – cosa che capita raramente – sento quell'odore e mi fermo un momento. Non è nostalgia, o almeno non solo. È il riconoscimento di qualcosa che ho perso e che non riavrò, e che valeva più di quanto pensassi.`,
"Testo originale a fini didattici"),

SM("6_1",0,"comprensione_globale","Qual è il tema principale del testo?",
["La ricetta del pane tradizionale siciliano.",
 "Il legame tra un gesto artigianale, la memoria e la perdita di un sapere tramandato.",
 "Le difficoltà della vita rurale in Sicilia nel Novecento.",
 "Il confronto tra pane artigianale e pane industriale."],1),

SM("6_2",0,"comprensione_locale","Perché la nonna faceva il pane ogni venerdì?",
["Per tradizione religiosa legata al venerdì.",
 "Perché le piaceva cucinare e lo faceva per passione.",
 "Perché il pane del forno non arrivava abbastanza spesso nel loro paese.",
 "Perché il pane del forno era troppo costoso."],2),

VF("6_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Il pane della nonna era morbido e si conservava pochi giorni.",ok:false},
 {t:"La narratrice ricorda le mani della nonna come particolarmente competenti durante la panificazione.",ok:true},
 {t:"La madre riuscì a rifare lo stesso pane della nonna dopo la sua morte.",ok:false},
 {t:"La narratrice oggi fa regolarmente il pane a casa.",ok:false},
 {t:"La ricetta del pane non è sufficiente a riprodurre il risultato della nonna.",ok:true}]),

SM("6_4",0,"inferenza","Cosa intende la narratrice con l'espressione 'un sapere che abita le mani, non la testa'?",
["Le mani sono più intelligenti del cervello.",
 "Esiste una conoscenza pratica incorporata nel corpo attraverso anni di esperienza, che non può essere trasmessa solo verbalmente.",
 "La memoria muscolare è superiore alla memoria cognitiva in tutti i campi.",
 "La nonna non aveva studiato e sapeva fare solo le cose manuali."],1),

AP("6_5",0,"inferenza","Perché la madre non riesce a rifare lo stesso pane della nonna, pur avendola vista fare mille volte? Spiega con parole tue.",
["sapere corporeo pratica anni esperienza mani","memoria del corpo gesti incorporati","pratica non trasmissibile a parole"]),

SM("6_6",0,"struttura_testo","L'ultima frase del testo ('Non è nostalgia, o almeno non solo') svolge la funzione di:",
["Correggere un errore fatto in precedenza.",
 "Precisare e approfondire il significato emotivo di ciò che è stato detto, evitando una lettura troppo sentimentale.",
 "Introdurre un nuovo argomento.",
 "Concludere il testo con una nota positiva."],1),

SM("6_7",0,"lessico_contesto","Nel testo, 'incorporata' nel gesto (quarto paragrafo) significa:",
["Aggiunta al corpo fisicamente.",
 "Diventata parte integrante del corpo attraverso la pratica ripetuta.",
 "Scritta nel corpo come un tatuaggio.",
 "Insegnata da qualcuno al corpo."],1),

VF("6_8",0,"struttura_testo","Indica se le seguenti caratteristiche stilistiche sono presenti (P) o assenti (A) nel testo.",
[{t:"Il testo è scritto in prima persona.",ok:true},
 {t:"Il testo usa un linguaggio tecnico e specialistico.",ok:false},
 {t:"Il testo contiene una riflessione personale sulla memoria e la perdita.",ok:true},
 {t:"Il testo ha una struttura cronologica con flashback.",ok:true}]),

AP("6_9",0,"comprensione_globale","Descrivi come cambia il tono del testo dall'inizio alla fine: come si trasforma l'atteggiamento della narratrice?",
["nostalgia perdita consapevolezza riconoscimento","dall'infanzia alla riflessione adulta","da descrittivo a riflessivo"]),

SM("6_10",0,"lessico_contesto","'Riservata' (secondo paragrafo) nel contesto significa:",
["Prenotata in anticipo.",
 "Che non esprime facilmente le proprie emozioni, discreta.",
 "Messa da parte per un uso futuro.",
 "Molto timida e impaurita."],1),

T("6_t2",0,"Testo B – La dieta mediterranea tra scienza e cultura",
`Nel 2010 l'UNESCO ha iscritto la dieta mediterranea nella lista del Patrimonio Culturale Immateriale dell'Umanità. Non si trattava di proteggere un elenco di alimenti, ma un intero sistema di valori: la convivialità del pasto condiviso, il rispetto per la stagionalità dei prodotti, il legame tra territorio e cultura alimentare. La decisione riconobbe qualcosa che le scienze mediche stavano documentando da decenni: il modello alimentare mediterraneo è tra i più benefici al mondo per la salute umana.
Gli studi scientifici sono concordi. Il più celebre è il Seven Countries Study, condotto dal fisiologo americano Ancel Keys a partire dagli anni Cinquanta: seguendo per anni la salute di oltre 12.000 uomini in sette paesi diversi, Keys dimostrò che le popolazioni che si nutrivano di cereali, legumi, verdura, frutta, olio d'oliva e pesce presentavano tassi molto più bassi di malattie cardiovascolari rispetto a quelle che consumavano grandi quantità di grassi animali.
La dieta mediterranea non è però un regime fisso e immutabile. Varia da paese a paese, da regione a regione: la cucina greca non è identica a quella siciliana, che non è identica a quella catalana. Ciò che le accomuna non è un menu, ma un approccio: la centralità dei vegetali, l'uso dell'olio d'oliva come grasso principale, il consumo moderato di carne rossa, l'importanza del pasto come momento sociale.
Il paradosso è che proprio nei paesi del Mediterraneo questo modello è oggi messo a rischio. L'industrializzazione del cibo, i ritmi di vita accelerati e la diffusione dei modelli alimentari nordamericani hanno ridotto il consumo di frutta, verdura e legumi, aumentando quello di carne, zuccheri aggiunti e cibi ultraprocessati. I giovani delle città mediterranee mangiano spesso in modo meno 'mediterraneo' dei loro coetanei del Nord Europa, che hanno riscoperto questo modello come scelta salutistica consapevole.
Salvaguardare la dieta mediterranea significa quindi non solo proteggere una tradizione gastronomica, ma difendere un modello di vita sostenibile, un sistema di relazioni tra cibo, territorio, comunità e salute. È, in questo senso, una questione culturale prima ancora che nutrizionale.`,
"Testo originale a fini didattici"),

SM("6_11",0,"comprensione_globale","L'idea principale del testo B è:",
["La dieta mediterranea è la migliore del mondo secondo tutti gli scienziati.",
 "La dieta mediterranea è un patrimonio culturale e scientifico oggi paradossalmente in declino nei paesi di origine.",
 "L'UNESCO tutela soprattutto le tradizioni gastronomiche europee.",
 "Ancel Keys ha inventato la dieta mediterranea negli anni Cinquanta."],1),

SM("6_12",0,"comprensione_locale","Cosa dimostrò lo Seven Countries Study di Ancel Keys?",
["Che la dieta mediterranea è uguale in tutti i paesi del Mediterraneo.",
 "Che le popolazioni che seguivano una dieta mediterranea avevano tassi più bassi di malattie cardiovascolari.",
 "Che il consumo di grassi animali non ha effetti sulla salute.",
 "Che i paesi mediterranei vivono più a lungo degli altri."],1),

VF("6_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"L'UNESCO ha riconosciuto la dieta mediterranea nel 2010.",ok:true},
 {t:"La dieta mediterranea è un menu fisso e identico in tutti i paesi.",ok:false},
 {t:"I giovani mediterranei tendono a mangiare meno mediterraneo dei coetanei nordeuropei.",ok:true},
 {t:"Il testo afferma che la dieta mediterranea è una questione solo nutrizionale.",ok:false},
 {t:"Lo Seven Countries Study ha seguito la salute di oltre 12.000 uomini.",ok:true}]),

SM("6_14",0,"inferenza","Perché l'autore definisce 'paradosso' il fatto che la dieta mediterranea sia in declino proprio nei paesi del Mediterraneo?",
["Perché è strano che i mediterranei mangino cibo nordico.",
 "Perché chi ha inventato e praticato per secoli quel modello lo sta abbandonando, mentre chi ne è estraneo lo adotta.",
 "Perché i dati scientifici contraddicono le abitudini alimentari locali.",
 "Perché l'UNESCO ha fatto un errore a proteggere qualcosa che stava scomparendo."],1),

AP("6_15",0,"struttura_testo","In che modo i testi A e B si completano a vicenda sul tema del cibo e della cultura? Indica almeno due punti di contatto.",
["memoria tradizione perdita sapere tramandato","cibo cultura identità perdita modernità","trasmissione generazioni sapere rischio scomparsa"]),

T("6_t3",1,"SEZIONE B – LESSICO","",""),

SM("6_16",1,"lessico","Sinonimo di 'convivialità' nel contesto del testo B:",
["Competizione durante i pasti.",
 "Piacere di stare e mangiare insieme, in modo festoso e aperto.",
 "Varietà dei cibi serviti a tavola.",
 "Semplicità e frugalità del pasto."],1),

SM("6_17",1,"lessico_contesto","In quale frase 'incorporata' è usata in senso figurato?",
["La pillola è incorporata nel tessuto della tuta.",
 "L'esperienza è incorporata nel gesto dopo anni di pratica.",
 "Il sensore è incorporato nel dispositivo elettronico.",
 "La sostanza viene incorporata nella miscela."],1),

COMP("6_18",1,"lessico_contesto","Completa le frasi scegliendo la parola corretta.",
[{prima:"La dieta mediterranea non è un regime ",dopo:" e immutabile.",ok:0},
 {prima:"Il pasto ha una funzione ",dopo:" importante: è un momento di condivisione.",ok:1},
 {prima:"Salvaguardare la dieta significa difendere un modello di vita ",dopo:".",ok:2}],
["fisso","sociale","sostenibile","variabile","individuale","costoso"]),

SM("6_19",1,"lessico","Quale delle seguenti parole appartiene alla famiglia di 'gastronomia'?",
["Gastroenterico","Gastronomo","Gastropode","Gastronomiche – tutte e tre"],3),

COL("6_20",1,"lessico","Collega ogni parola con il suo significato nel contesto dei testi.",
["stagionalità","ultraprocessato","conviviale","paradosso"],
["affermazione apparentemente contraddittoria ma vera","prodotto industriale con molti additivi artificiali","legato al ritmo delle stagioni naturali","piacevole da condividere con gli altri"],
{0:2,1:1,2:3,3:0}),

SM("6_21",1,"lessico","'Salutistico' (ultimo paragrafo del testo B) significa:",
["Relativo ai saluti formali.",
 "Orientato alla cura e alla promozione della salute.",
 "Relativo alla produzione agricola locale.",
 "Di origine medica o farmaceutica."],1),

SM("6_22",1,"lessico","Quale prefisso in 'ultraprocessato' indica eccesso o superamento?",
["Pro-","Ultra-","Extra- (stesso significato di ultra-)","Sia ultra- che extra- sono corretti"],3),

T("6_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("6_23",2,"morfologia","In 'mia nonna faceva il pane ogni venerdì', il verbo 'faceva' indica:",
["Un'azione passata avvenuta una sola volta.",
 "Un'azione passata abitudinaria e ripetuta.",
 "Un'azione in corso nel momento del racconto.",
 "Un'azione futura rispetto al passato."],1),

VF("6_24",2,"morfologia","Indica se le seguenti voci verbali sono all'indicativo (I) o al congiuntivo (C).",
[{t:"'riuscì' (quarto paragrafo del testo A) è all'indicativo.",ok:true},
 {t:"'potesse' in 'non si poteva trasmettere' è al congiuntivo.",ok:false},
 {t:"'valutava' (quarto paragrafo) è all'indicativo.",ok:true},
 {t:"'venirle' è un infinito (non indicativo né congiuntivo).",ok:true}]),

SM("6_25",2,"sintassi","In 'Capii allora che certe cose si portano via con le persone', la proposizione 'che certe cose si portano via con le persone' è:",
["Una proposizione relativa.",
 "Una proposizione oggettiva (completiva diretta).",
 "Una proposizione causale.",
 "Una proposizione finale."],1),

AP("6_26",2,"sintassi","Analizza la frase 'Non era una scelta romantica: era una necessità'. Che tipo di rapporto logico esprimono i due punti? Riscrivi la frase usando una congiunzione esplicita.",
["contrasto avversativo ma bensì","opposizione correzione bensì","non... ma bensì"]),

SM("6_27",2,"morfologia","'Ultraprocessati' è un aggettivo formato da:",
["Un prefisso intensivo (ultra-) + participio passato (processati).",
 "Un avverbio + un sostantivo.",
 "Due sostantivi composti.",
 "Un prefisso negativo + un aggettivo."],0),

COMP("6_28",2,"morfologia","Completa le frasi con la forma corretta del verbo tra parentesi.",
[{prima:"Mia madre sperava che il pane ",dopo:" uguale a quello della nonna. (venire – congiuntivo imperfetto)",ok:0},
 {prima:"Era necessario che mia nonna ",dopo:" il pane ogni settimana. (fare – congiuntivo imperfetto)",ok:1},
 {prima:"Se mia nonna ",dopo:" ancora, le chiederei la ricetta. (essere – congiuntivo imperfetto)",ok:2}],
["venisse","facesse","fosse","veniva","faceva","era"]),

SM("6_29",2,"punteggiatura","I trattini in 'così riservata nel resto della vita – ma le mani che lavoravano il pane –' hanno la funzione di:",
["Segnare un dialogo tra personaggi.",
 "Isolare un inciso che precisa o corregge quanto detto prima.",
 "Introdurre un elenco di caratteristiche.",
 "Indicare una pausa molto lunga nel discorso."],1),

SM("6_30",2,"coesione","A cosa si riferisce il pronome 'quelle' nella frase 'Non le mani di mia nonna in generale – quelle erano mani come le altre'?",
["Le mani che lavoravano il pane.",
 "Le mani di mia nonna in generale, come le avevo viste sempre.",
 "Le mani di tutte le donne del paese.",
 "Le mani della madre della narratrice."],1),

SM("6_31",2,"morfologia","In 'affonDAvano nell'impasto', la desinenza '-avano' indica:",
["Terza persona singolare, indicativo imperfetto.",
 "Terza persona plurale, indicativo imperfetto.",
 "Terza persona plurale, indicativo passato remoto.",
 "Prima persona plurale, indicativo presente."],1),

SM("6_32",2,"sintassi","In 'quello che si schiaccia fra le dita e sa di niente', la proposizione relativa è retta da:",
["'quello' (pronome dimostrativo con funzione di antecedente).",
 "'pane' (sottinteso).",
 "'dita'.",
 "Non c'è una proposizione relativa."],0),

SM("6_33",2,"ortografia","Quale delle seguenti frasi usa correttamente l'apostrofo?",
["L'odore del pane è un'ricordo indelebile.",
 "L'odore del pane è un ricordo indelebile.",
 "L'odore del pane è un' ricordo indelebile.",
 "Lodore del pane è un ricordo indelebile."],1),

SM("6_34",2,"morfologia","'Panificazione' è un nome derivato dal verbo 'panificare' tramite:",
["Un prefisso.",
 "Un suffisso nominale (-zione) che indica processo o azione.",
 "Un suffisso aggettivale.",
 "La composizione di due sostantivi."],1),

SM("6_35",2,"coesione","'Non è nostalgia, o almeno non solo' – quale funzione svolge 'o almeno non solo' nella frase?",
["Aggiunge un esempio alla definizione precedente.",
 "Corregge e precisa l'affermazione appena fatta, rendendola più sfumata.",
 "Introduce una contraddizione con quanto detto in precedenza.",
 "Conclude il ragionamento con una sintesi."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 7 – L'asino di Buridano (Svevo) / Intelligenza artificiale
// ══════════════════════════════════════════════════════════════
const p7 = {id:7, titolo:"La coscienza e la macchina", domande:[

T("7_t1",0,"Testo A – Una vita (Italo Svevo, 1892) – adattamento",
`Alfonso Nitti era impiegato in una banca di Trieste, e la sua vita scorreva tra le colonne dei libri mastri e i registri delle operazioni giornaliere. Era un lavoro meccanico, ripetitivo, che non richiedeva né immaginazione né coraggio: bastava la precisione e la pazienza di chi sa stare al proprio posto.
Alfonso era intelligente, forse troppo intelligente per quel lavoro. Se ne accorgeva lui stesso, ogni tanto, quando alzava gli occhi dai numeri e si sorprendeva a pensare a tutt'altro: a un libro che aveva letto la sera prima, a un'idea che gli era venuta svegliandosi. Ma quei pensieri erano come bolle d'aria in un liquido denso: salivano, brillavano un momento, e poi sparivano senza lasciare traccia.
Il capo, il signor Maller, era un uomo pratico che stimava la precisione più dell'intelligenza. «L'intelligenza senza disciplina non vale niente», era solito dire, e Alfonso annuiva perché era corretto e perché non voleva contraddire. In fondo pensava che forse il signor Maller aveva ragione: l'intelligenza da sola non produce nulla, se non sa dove andare.
Il problema di Alfonso era proprio questo: non sapeva dove andare. Aveva molte idee ma nessun progetto. Guardava il futuro come si guarda un panorama da lontano: tutto molto bello e molto vago, senza strade percorribili. I colleghi avevano famiglie, fidanzate, ambizioni semplici e precise: una promozione, una casa, una vacanza al mare. Alfonso aveva pensieri che non riusciva a tradurre in azioni.
Un giorno il signor Maller gli affidò un compito nuovo: riorganizzare il sistema di archiviazione della banca, fino ad allora caotico e inefficiente. Era un compito grande, concreto, con un inizio e una fine. Alfonso ci si gettò con un'energia che non sapeva di avere. Lavorò per settimane, trovò soluzioni che nessuno aveva pensato, trasformò il caos in ordine.
Quando finì, il signor Maller lo convocò e gli disse: «Ha fatto un ottimo lavoro. Vedo che quando ha un obiettivo preciso, lei funziona benissimo». Alfonso annuì, come sempre. Ma dentro di sé pensò: forse il problema non era l'intelligenza. Forse era che aveva aspettato sempre che qualcuno gli dicesse dove andare.`,
"Liberamente ispirato a Italo Svevo, Una vita (1892) – riscrittura originale a fini didattici"),

SM("7_1",0,"comprensione_globale","Qual è il tema centrale del testo?",
["La vita difficile degli impiegati di banca nel Novecento.",
 "Il contrasto tra intelligenza senza direzione e la necessità di un obiettivo concreto.",
 "Il rapporto difficile tra Alfonso e il suo superiore.",
 "La critica al mondo del lavoro burocratico e ripetitivo."],1),

SM("7_2",0,"comprensione_locale","Perché i pensieri di Alfonso vengono paragonati a 'bolle d'aria in un liquido denso'?",
["Perché i suoi pensieri erano inutili e vuoti.",
 "Perché affioravano brevemente e poi scomparivano senza lasciare effetti concreti.",
 "Perché la banca era un ambiente soffocante.",
 "Perché Alfonso pensava troppo lentamente."],1),

VF("7_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Il signor Maller stimava l'intelligenza più della precisione.",ok:false},
 {t:"Alfonso aveva molte idee ma nessun progetto concreto.",ok:true},
 {t:"I colleghi di Alfonso avevano ambizioni simili alle sue.",ok:false},
 {t:"Alfonso riorganizzò il sistema di archiviazione della banca.",ok:true},
 {t:"Alfonso alla fine del testo capisce che aspettava sempre indicazioni dagli altri.",ok:true}]),

SM("7_4",0,"inferenza","Cosa significa la frase finale del testo: 'aveva aspettato sempre che qualcuno gli dicesse dove andare'?",
["Alfonso era pigro e non voleva lavorare.",
 "Alfonso aveva bisogno di dipendenza psicologica dagli altri.",
 "Il problema di Alfonso non era la mancanza di intelligenza, ma l'incapacità di darsi autonomamente una direzione.",
 "Alfonso aveva sbagliato lavoro e doveva cambiare carriera."],2),

AP("7_5",0,"inferenza","Spiega con parole tue la differenza tra 'intelligenza' e 'disciplina' come emerge dal testo. Quale delle due ha più valore per il signor Maller? E per Alfonso?",
["Maller disciplina precisione Alfonso intelligenza pensiero","intelligenza senza direzione disciplina esecuzione","entrambe necessarie"]),

SM("7_6",0,"struttura_testo","Il cambiamento di Alfonso nella parte finale del testo (il lavoro di archiviazione) svolge la funzione narrativa di:",
["Dimostrare che Alfonso era sempre stato capace ma pigro.",
 "Offrire la risoluzione che chiarisce il problema centrale: senza obiettivo concreto, l'intelligenza resta inerte.",
 "Criticare il modo di lavorare dei colleghi.",
 "Mostrare che il signor Maller aveva torto a dubitare di lui."],1),

SM("7_7",0,"lessico_contesto","'Inerte' (non nel testo, ma ricavabile dal contesto) è sinonimo di:",
["Attivissimo e produttivo.","Privo di movimento, passivo, che non agisce.","Preciso e metodico.","Creativo e originale."],1),

VF("7_8",0,"struttura_testo","Indica se le seguenti caratteristiche appartengono ad Alfonso (A), al signor Maller (M) o a entrambi (E).",
[{t:"Lavora in una banca di Trieste. (Alfonso)",ok:true},
 {t:"Preferisce la precisione all'intelligenza astratta. (Maller)",ok:true},
 {t:"Riconosce un buon lavoro quando lo vede. (Maller)",ok:true},
 {t:"Ha difficoltà a tradurre i pensieri in azioni concrete. (Alfonso)",ok:true}]),

AP("7_9",0,"comprensione_globale","Descrivi la trasformazione di Alfonso nel corso del testo. Come inizia e come finisce? Cosa capisce alla fine?",
["inerte senza direzione obiettivo concreto trasformazione","pigro pensoso infine consapevole","comprende il suo limite"]),

SM("7_10",0,"lessico_contesto","'Vago' nel quarto paragrafo ('tutto molto bello e molto vago') significa:",
["Molto lontano fisicamente.",
 "Poco definito, senza contorni precisi, indistinto.",
 "Pericoloso e sconosciuto.",
 "Molto attraente e seducente."],1),

T("7_t2",0,"Testo B – Intelligenza artificiale: cosa può fare e cosa no",
`L'intelligenza artificiale (IA) è diventata parte della nostra vita quotidiana: i sistemi di raccomandazione di Netflix e Spotify, i chatbot del servizio clienti, i filtri antispam della posta elettronica. Ma cosa significa esattamente 'intelligenza artificiale', e quanto è davvero 'intelligente'?
I sistemi di IA attuali sono straordinari nel fare ciò per cui sono stati addestrati: riconoscere immagini, tradurre testi, giocare a scacchi, generare testo. Ma operano all'interno di confini precisi. Non hanno curiosità, non si annoiano, non hanno obiettivi propri. Non sanno che esistono. La parola 'intelligenza' applicata alle macchine è in parte metaforica: descrive la capacità di svolgere compiti che negli esseri umani richiederebbero intelligenza, non una facoltà mentale simile a quella umana.
Il confronto più utile non è tra IA e intelligenza umana in generale, ma tra IA e specifiche funzioni cognitive. Un sistema di riconoscimento facciale supera di gran lunga le capacità umane nel riconoscere volti tra milioni di immagini. Ma non capisce che quella persona ha paura, o perché sorride, o cosa stia pensando. Un sistema di traduzione automatica produce traduzioni spesso eccellenti, ma non ha accesso al contesto culturale, alle sfumature emotive, ai doppi sensi intenzionali.
Il problema vero emerge quando si chiede ai sistemi di IA di fare cose per cui non sono stati addestrati, o di adattarsi a situazioni nuove. L'intelligenza umana è plastica: sa usare l'esperienza di un dominio per affrontare problemi in un dominio completamente diverso. L'IA, almeno per ora, è specializzata: eccelle nel suo dominio, ma fuori da esso si perde.
Questo non significa che l'IA sia uno strumento secondario o poco importante. Al contrario: proprio perché sa fare benissimo cose specifiche, libera l'intelligenza umana per fare ciò che le riesce meglio – immaginare, empatizzare, creare significati, stabilire priorità, agire con responsabilità morale.`,
"Testo originale a fini didattici"),

SM("7_11",0,"comprensione_globale","L'idea principale del testo B è:",
["L'intelligenza artificiale è superiore all'intelligenza umana in tutti i campi.",
 "L'IA eccelle in compiti specifici ma è fondamentalmente diversa dall'intelligenza umana, che rimane più flessibile.",
 "L'intelligenza artificiale è pericolosa e va regolamentata.",
 "I sistemi di IA non sono davvero intelligenti e non servono a niente."],1),

SM("7_12",0,"comprensione_locale","Qual è, secondo il testo, il problema principale dei sistemi di IA attuali?",
["Sono troppo costosi da sviluppare e mantenere.",
 "Non riescono a svolgere compiti ripetitivi con precisione.",
 "Faticano ad adattarsi a situazioni nuove e a generalizzare l'esperienza tra domini diversi.",
 "Non capiscono le lingue straniere con precisione."],2),

VF("7_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"I sistemi di IA attuali hanno curiosità e obiettivi propri.",ok:false},
 {t:"Un sistema di riconoscimento facciale supera le capacità umane nel riconoscere volti.",ok:true},
 {t:"L'intelligenza umana è descritta come 'plastica' perché sa trasferire esperienze tra domini diversi.",ok:true},
 {t:"La traduzione automatica coglie sempre le sfumature culturali e i doppi sensi.",ok:false},
 {t:"L'IA libera l'intelligenza umana per compiti più creativi e morali.",ok:true}]),

SM("7_14",0,"inferenza","Quale collegamento tematico esiste tra il personaggio di Alfonso (testo A) e il testo B sull'IA?",
["Entrambi parlano di lavoro in ufficio.",
 "Sia Alfonso sia i sistemi di IA eccellono quando hanno un obiettivo preciso, ma faticano senza direzione o fuori dal loro dominio.",
 "Alfonso vorrebbe diventare un ingegnere informatico.",
 "Il testo B spiega scientificamente il problema psicologico di Alfonso."],1),

AP("7_15",0,"struttura_testo","Il testo B usa molti esempi concreti. Elencane tre e spiega la loro funzione argomentativa.",
["Netflix Spotify scacchi traduzione riconoscimento facciale","esempi concreti rendono comprensibile il concetto astratto","chatbot spam esempi quotidiani"]),

T("7_t3",1,"SEZIONE B – LESSICO","",""),

SM("7_16",1,"lessico","Sinonimo di 'plastica' nel senso del testo B ('intelligenza plastica'):",
["Artificiale e sintetica.","Flessibile, capace di adattarsi e cambiare forma.",
 "Dura e resistente.","Fragile e temporanea."],1),

SM("7_17",1,"lessico_contesto","In quale frase 'meccanico' è usato in senso figurato?",
["Il meccanico ha riparato il motore dell'auto.",
 "Compiva i gesti in modo meccanico, senza pensare.",
 "Il sistema meccanico era molto complesso.",
 "Il meccanismo dell'orologio era preciso."],1),

COMP("7_18",1,"lessico_contesto","Completa le frasi con la parola corretta.",
[{prima:"L'IA è ",dopo:" nel suo dominio ma fatica fuori da esso.",ok:0},
 {prima:"I sistemi di IA operano all'interno di confini ",dopo:".",ok:1},
 {prima:"L'intelligenza umana sa usare l'esperienza di un dominio per ",dopo:" problemi diversi.",ok:2}],
["specializzata","precisi","affrontare","generalizzata","vaghi","evitare"]),

SM("7_19",1,"lessico","Quale delle seguenti parole è un tecnicismo del linguaggio informatico?",
["Libro mastro","Chatbot","Libro paga","Panorama"]),

COL("7_20",1,"lessico","Collega ogni termine con la sua definizione.",
["addestrato","dominio","metaforico","empatizzare"],
["area di competenza specifica","capire e condividere le emozioni altrui","preparato attraverso esempi ripetuti","usato in senso non letterale, figurato"],
{0:2,1:0,2:3,3:1}),

SM("7_21",1,"lessico","'Specializzato' (quarto paragrafo del testo B) è il contrario di:",
["Generale, che si applica a molti ambiti diversi.","Preciso e accurato.","Meccanico e ripetitivo.","Avanzato e sofisticato."],0),

SM("7_22",1,"lessico","Qual è la funzione del prefisso 'anti-' in 'antispam'?",
["Indica ripetizione.","Indica opposizione o protezione contro qualcosa.","Indica superamento o eccesso.","Indica provenienza geografica."],1),

T("7_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("7_23",2,"morfologia","In 'Alfonso annuiva perché era corretto e perché non voleva contraddire', le due proposizioni causali sono collegate da:",
["Una congiunzione avversativa.","La ripetizione della congiunzione causale 'perché' (polisindeto).","Un punto e virgola.","Una proposizione relativa."],1),

VF("7_24",2,"morfologia","Indica se le seguenti affermazioni grammaticali sono vere (V) o false (F).",
[{t:"'meccanico' in 'lavoro meccanico' è un aggettivo qualificativo.",ok:true},
 {t:"'addestrati' in 'per cui sono stati addestrati' è un gerundio.",ok:false},
 {t:"'metaforica' è un aggettivo di relazione derivato dal sostantivo 'metafora'.",ok:true},
 {t:"'salivano' è alla terza persona plurale dell'indicativo imperfetto.",ok:true}]),

SM("7_25",2,"sintassi","In 'la parola intelligenza applicata alle macchine è in parte metaforica', la proposizione 'applicata alle macchine' è:",
["Una proposizione causale implicita.",
 "Una proposizione relativa implicita con participio passato.",
 "Una proposizione temporale implicita.",
 "Un complemento di specificazione."],1),

AP("7_26",2,"sintassi","Nella frase 'Un sistema di riconoscimento facciale supera di gran lunga le capacità umane nel riconoscere volti tra milioni di immagini', individua: il soggetto, il predicato verbale, il complemento oggetto e i complementi circostanziali.",
["soggetto sistema predicato supera oggetto capacità","soggetto un sistema di riconoscimento predicato supera complemento oggetto le capacità umane","soggetto predicato oggetto circostanziali"]),

SM("7_27",2,"morfologia","'Empatizzare' è un verbo derivato da:",
["Empatico + suffisso verbale -izzare.","Empatia + suffisso verbale -izzare.","Em- + patire.","Emot- + izzare."],1),

COMP("7_28",2,"morfologia","Volgi le frasi dal discorso diretto al discorso indiretto.",
[{prima:"Il signor Maller disse: 'Ha fatto un ottimo lavoro.' → Il signor Maller disse che ",dopo:".",ok:0},
 {prima:"Alfonso pensò: 'Il problema non era l'intelligenza.' → Alfonso pensò che ",dopo:".",ok:1}],
["aveva fatto un ottimo lavoro","il problema non era l'intelligenza","ha fatto un ottimo lavoro","il problema non è l'intelligenza"]),

SM("7_29",2,"punteggiatura","I due punti nella frase 'aveva molte idee ma nessun progetto: guardava il futuro come si guarda un panorama da lontano' introducono:",
["Un elenco di idee.",
 "Una specificazione/spiegazione di quanto appena affermato.",
 "Una citazione diretta dal pensiero di Alfonso.",
 "Una causa di quanto detto prima."],1),

SM("7_30",2,"coesione","In 'quei pensieri erano come bolle d'aria in un liquido denso: salivano, brillavano un momento, e poi sparivano', il soggetto sottinteso di 'salivano, brillavano, sparivano' è:",
["Alfonso.","I numeri della banca.","Quei pensieri (soggetto della proposizione precedente).","Le bolle d'aria reali."],2),

SM("7_31",2,"morfologia","'Ripetitivo' è un aggettivo formato da:",
["Ripetere + suffisso -ivo.",
 "Ripetizione + suffisso -ivo.",
 "Ri- (prefisso iterativo) + petere + suffisso aggettivale -ivo.",
 "Ripetuto + suffisso -ivo."],2),

SM("7_32",2,"sintassi","In 'quando alzava gli occhi dai numeri e si sorprendeva a pensare a tutt'altro', la proposizione 'quando alzava gli occhi' è:",
["Causale.","Temporale.","Concessiva.","Finale."],1),

SM("7_33",2,"ortografia","Quale forma è scritta correttamente?",
["L'intelligenza senza disciplina non vale niente.",
 "L'intelligenzia senza disciplina non vale niente.",
 "L'intelligenza senza disciplina non vale niente'.",
 "L'intelligenza senza disciplina non vale niente,"],0),

SM("7_34",2,"morfologia","In 'non sapeva dove andare', 'dove andare' è:",
["Una proposizione interrogativa indiretta con valore di complemento oggetto.",
 "Una proposizione relativa.",
 "Una proposizione finale implicita.",
 "Un complemento di luogo."],0),

SM("7_35",2,"coesione","'Al contrario' all'inizio dell'ultimo paragrafo del testo B introduce:",
["Una conclusione che conferma quanto detto prima.",
 "Un contrasto rispetto all'idea che l'IA sia secondaria o irrilevante.",
 "Un esempio concreto di utilizzo dell'IA.",
 "Una causa delle limitazioni dell'IA."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 8 – Il viaggio / Globalizzazione e identità
// ══════════════════════════════════════════════════════════════
const p8 = {id:8, titolo:"Partire e tornare", domande:[

T("8_t1",0,"Testo A – Partenze (testo originale)",
`La prima volta che presi un aereo avevo quattordici anni. Era il 1994, e mio padre aveva vinto una borsa di studio che lo portava per sei mesi in Germania. Partimmo tutti: mia madre, io e mio fratello minore che ne aveva undici. Partimmo da Napoli un mattino di settembre con quattro valigie e la sensazione che il mondo, fino a quel momento, fosse stato molto più piccolo di quanto pensassimo.
Monaco era diversa da tutto quello che conoscevo. Le strade erano larghe e pulite in un modo che a Napoli non avevo mai visto. I tram arrivavano precisi. Nei negozi la gente aspettava il proprio turno senza spingere. Per le prime settimane pensai che fosse una città di fantasmi: silenziosa, ordinata, con ogni cosa al suo posto. Mi mancava il rumore, il disordine, la vociante imprevedibilità di casa.
Poi imparai a guardare diversamente. Capii che l'ordine non era freddezza: era rispetto reciproco. Che il silenzio non era indifferenza: era la forma che prendeva la privacy in una cultura diversa dalla mia. Che le code ordinate non erano meccaniche: erano gentilezza codificata. Iniziai a vedere Monaco come una conversazione in una lingua che stavo imparando.
Quando tornai a Napoli, sei mesi dopo, fu un altro choc. Tutto sembrava più rumoroso, più caotico, meno controllato di come lo ricordavo. Ma poi, lentamente, ritrovai le cose che amavo: la densità delle relazioni, la musica nelle strade, la bellezza improvvisa di un vicolo, il gesto di un vecchio al bar che ti offre il caffè senza che tu abbia detto niente.
Capii che non si tratta di scegliere tra due modi di stare al mondo: si tratta di imparare a tenere insieme più di una prospettiva. Chi non ha mai lasciato casa sua vede il mondo con un solo occhio. Chi ha vissuto altrove, anche per poco, può imparare a usarne due.
Quella è stata la prima di molte partenze. Ogni volta ho portato via qualcosa e ho lasciato qualcosa. Ma il viaggio più importante non è mai stato quello esterno: è stato imparare che il posto da cui vieni non definisce chi sei, ma è uno dei materiali con cui ti costruisci.`,
"Testo originale a fini didattici"),

SM("8_1",0,"comprensione_globale","Qual è il messaggio principale del testo?",
["La Germania è migliore dell'Italia per vivere.",
 "Viaggiare insegna a vedere il mondo con più prospettive e a capire che le differenze culturali sono forme diverse di stare insieme.",
 "I giovani dovrebbero studiare all'estero per trovare lavoro.",
 "Napoli è una città caotica da cui è meglio allontanarsi."],1),

SM("8_2",0,"comprensione_locale","Come reagisce inizialmente il narratore alla città di Monaco?",
["Con entusiasmo immediato per l'ordine e la pulizia.",
 "Con nostalgia e con la sensazione che fosse una città silenziosa e quasi fantasmatica.",
 "Con indifferenza, perché i luoghi lo interessavano poco.",
 "Con curiosità scientifica per le differenze culturali."],1),

VF("8_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Il padre del narratore era andato in Germania per lavoro.",ok:false},
 {t:"Il narratore aveva quattordici anni quando partì per Monaco.",ok:true},
 {t:"Il narratore non tornò mai a Napoli.",ok:false},
 {t:"Al ritorno a Napoli, il narratore ritrovò cose che amava della sua città.",ok:true},
 {t:"Il narratore conclude che bisogna scegliere tra due modi di stare al mondo.",ok:false}]),

SM("8_4",0,"inferenza","Cosa intende il narratore con 'iniziai a vedere Monaco come una conversazione in una lingua che stavo imparando'?",
["Stava imparando il tedesco e capiva meglio la città.",
 "Comprendere una cultura diversa richiede tempo e disponibilità, come imparare una lingua.",
 "Le culture si comunicano solo attraverso le lingue.",
 "Monaco era una città multiculturale dove si parlavano molte lingue."],1),

AP("8_5",0,"inferenza","Spiega la metafora finale: 'il posto da cui vieni non definisce chi sei, ma è uno dei materiali con cui ti costruisci'. Cosa intende dire il narratore?",
["identità costruzione materiali origini non determinano","origini punto di partenza non destino","chi siamo costruito da molte esperienze non solo le origini"]),

SM("8_6",0,"struttura_testo","Il testo è organizzato come:",
["Un saggio argomentativo con tesi, argomenti e conclusione.",
 "Un racconto autobiografico con riflessione finale.",
 "Una narrazione in terza persona con più personaggi.",
 "Una lettera a un destinatario preciso."],1),

SM("8_7",0,"lessico_contesto","'Codificata' nel terzo paragrafo ('gentilezza codificata') significa:",
["Segreta e incomprensibile agli stranieri.",
 "Espressa attraverso forme e convenzioni sociali precise e condivise.",
 "Scritta in un codice segreto.",
 "Falsa e ipocrita."],1),

VF("8_8",0,"struttura_testo","Indica se le seguenti trasformazioni avvengono nel narratore nel corso del testo.",
[{t:"Impara a interpretare l'ordine tedesco come rispetto reciproco anziché freddezza.",ok:true},
 {t:"Smette di amare Napoli dopo i sei mesi a Monaco.",ok:false},
 {t:"Capisce che avere più prospettive è un vantaggio.",ok:true},
 {t:"Decide di vivere per sempre in Germania.",ok:false}]),

AP("8_9",0,"comprensione_globale","Il narratore usa più volte la parola 'choc'. La prima volta per l'arrivo a Monaco, la seconda per il ritorno a Napoli. Cosa ci dice questo sull'effetto del viaggio?",
["choc doppio partenza ritorno trasformazione prospettiva cambia","il viaggio cambia il modo di vedere anche casa propria","non si torna uguali"]),

SM("8_10",0,"lessico_contesto","'Vociante' (secondo paragrafo) è un aggettivo che significa:",
["Pieno di voci, rumoroso, animato.",
 "Molto solitario e silenzioso.",
 "Affollato di persone sconosciute.",
 "Disorganizzato e confuso."],0),

T("8_t2",0,"Testo B – Globalizzazione e identità culturale",
`La globalizzazione ha reso il mondo più connesso, ma non necessariamente più uguale. Da un lato ha diffuso tecnologie, idee, prodotti e stili di vita su scala planetaria; dall'altro ha prodotto tensioni tra omologazione e differenza, tra identità locale e cultura globale.
Il concetto di 'glocalizzazione', coniato dal sociologo Roland Robertson, descrive questo processo duplice: il globale e il locale non si escludono, ma si combinano in forme ibride e originali. Il jazz americano incontra la musica africana e nasce qualcosa di nuovo. Il ristorante giapponese si adatta al gusto locale e diventa qualcosa che non è né tradizionale né completamente locale. Le identità culturali non sono mai state pure e immutabili: sono sempre state in movimento, in contatto, in trasformazione.
Il problema non è quindi la contaminazione in sé, che è sempre esistita, ma la velocità e l'asimmetria del processo. Quando una cultura economicamente e mediaticamente più potente penetra in una più debole, il rischio è che quest'ultima perda elementi importanti prima di avere il tempo di reinterpretarli. Non è scomparsa della cultura locale, ma impoverimento: si mantiene la forma esteriore, ma si perde il contenuto.
I sostenitori della diversità culturale non chiedono l'isolamento: chiedono che le culture abbiano il tempo e le risorse per elaborare i cambiamenti a modo loro. L'UNESCO, con la Convenzione sulla protezione e promozione della diversità delle espressioni culturali del 2005, ha riconosciuto che le espressioni culturali non sono semplici merci soggette alle leggi del mercato: hanno un valore che va oltre quello economico.
La questione, in ultima analisi, è di potere: chi decide cosa si considera 'cultura globale'? Chi stabilisce le regole dello scambio? Finché queste domande non troveranno risposte più eque, la globalizzazione rischia di essere un altro nome per l'uniformazione imposta dai più forti.`,
"Testo originale a fini didattici"),

SM("8_11",0,"comprensione_globale","Il testo B tratta principalmente:",
["I vantaggi economici della globalizzazione.",
 "Il rapporto complesso tra globalizzazione, identità culturale e rischi di omologazione.",
 "La storia del concetto di glocalizzazione nel pensiero sociologico.",
 "Come l'UNESCO protegge le culture in via di estinzione."],1),

SM("8_12",0,"comprensione_locale","Cosa descrive il concetto di 'glocalizzazione' secondo il testo?",
["Il processo per cui le culture locali scompaiono con la globalizzazione.",
 "La combinazione tra globale e locale che produce forme ibride e nuove.",
 "La resistenza delle culture locali alla globalizzazione.",
 "Il commercio internazionale di prodotti culturali."],1),

VF("8_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"Roland Robertson è il sociologo che ha coniato il termine 'glocalizzazione'.",ok:true},
 {t:"Secondo il testo, le identità culturali sono sempre state pure e immutabili.",ok:false},
 {t:"Il rischio principale non è la contaminazione ma la velocità e l'asimmetria del processo.",ok:true},
 {t:"La Convenzione UNESCO del 2005 considera le espressioni culturali come semplici merci.",ok:false},
 {t:"Il testo chiede l'isolamento delle culture per proteggerle.",ok:false}]),

SM("8_14",0,"inferenza","Cosa significa l'ultima frase del testo: 'la globalizzazione rischia di essere un altro nome per l'uniformazione imposta dai più forti'?",
["La globalizzazione è sempre stata un processo democratico.",
 "Senza regole eque, la globalizzazione può diventare un meccanismo di dominazione culturale dei paesi più potenti.",
 "Le culture dei paesi forti sono superiori a quelle dei paesi deboli.",
 "La globalizzazione è ormai irreversibile e non si può fare nulla."],1),

AP("8_15",0,"struttura_testo","Individua nel testo B la tesi centrale dell'autore e i due argomenti principali che usa per sostenerla.",
["tesi asimmetria potere argomenti glocalizzazione UNESCO","globalizzazione non neutrale potere asimmetrico","culture non merci potere decide"]),

T("8_t3",1,"SEZIONE B – LESSICO","",""),

SM("8_16",1,"lessico","'Omologazione' (primo paragrafo del testo B) significa:",
["Differenziazione progressiva tra culture.",
 "Processo per cui elementi diversi diventano simili o uniformi.",
 "Riconoscimento ufficiale di un prodotto o di una cultura.",
 "Scambio equo tra culture di pari forza."],1),

SM("8_17",1,"lessico_contesto","In quale frase 'ibrido' è usato in senso figurato?",
["La pianta ibrida è stata coltivata in laboratorio.",
 "L'auto ibrida usa sia benzina che elettricità.",
 "Quel genere musicale è un ibrido tra jazz e musica africana.",
 "Il motore ibrido è più efficiente di quello tradizionale."],2),

COMP("8_18",1,"lessico_contesto","Completa le frasi con la parola corretta.",
[{prima:"Le identità culturali non sono mai state ",dopo:" e immutabili.",ok:0},
 {prima:"Le espressioni culturali hanno un valore che va ",dopo:" quello economico.",ok:1},
 {prima:"Chi decide cosa si considera cultura ",dopo:"?",ok:2}],
["pure","oltre","globale","miste","sotto","locale"]),

SM("8_19",1,"lessico","Quale prefisso in 'asimmetria' indica negazione o mancanza?",
["A- (privativo).","As-.","Sim-.","Metri-."],0),

COL("8_20",1,"lessico","Collega ogni termine con il suo significato nel contesto del testo.",
["glocalizzazione","asimmetrica","omologazione","ibride"],
["di forma mista, nata dalla fusione di elementi diversi","processo duplice di combinazione tra globale e locale","uniformazione, riduzione delle differenze","squilibrata, con forze diverse tra i partecipanti"],
{0:1,1:3,2:2,3:0}),

SM("8_21",1,"lessico","Sinonimo di 'penetra' nel senso del terzo paragrafo:",
["Si ritira e si isola.","Si diffonde e si inserisce in profondità.","Si trasforma radicalmente.","Viene rifiutata dalla cultura locale."],1),

SM("8_22",1,"lessico","'Mediaticamente' (terzo paragrafo) è un avverbio derivato da:",
["Medico + suffisso.","Media + suffisso aggettivale -ico + suffisso avverbiale -mente.","Mediare + suffisso.","Medio + suffisso."],1),

T("8_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("8_23",2,"morfologia","In 'partimmo tutti', il verbo 'partimmo' è alla:",
["Prima persona plurale, indicativo passato prossimo.",
 "Prima persona plurale, indicativo passato remoto.",
 "Terza persona plurale, indicativo passato remoto.",
 "Prima persona plurale, congiuntivo imperfetto."],1),

VF("8_24",2,"morfologia","Indica se le seguenti analisi grammaticali sono corrette (V) o errate (F).",
[{t:"'silenziosa' in 'città silenziosa' è un aggettivo qualificativo.",ok:true},
 {t:"'codificata' in 'gentilezza codificata' è un gerundio.",ok:false},
 {t:"'mediaticamente' è un avverbio di modo.",ok:true},
 {t:"'ibride' è un aggettivo al superlativo relativo.",ok:false}]),

SM("8_25",2,"sintassi","In 'capii che non si tratta di scegliere tra due modi di stare al mondo', la proposizione 'che non si tratta di scegliere...' è:",
["Una proposizione relativa.",
 "Una proposizione oggettiva (completiva diretta).",
 "Una proposizione causale.",
 "Una proposizione concessiva."],1),

AP("8_26",2,"sintassi","Analizza la struttura della frase 'Da un lato ha diffuso tecnologie; dall'altro ha prodotto tensioni'. Che tipo di relazione logica esprime? Quale figura retorica riconosci?",
["antitesi parallelismo da un lato dall'altro contrasto","struttura bipartita antitetica","parallelismo coordinazione avversativa"]),

SM("8_27",2,"morfologia","'Coniato' nel testo B è il participio passato del verbo 'coniare'. In questo contesto significa:",
["Prodotto in metallo, come una moneta.",
 "Inventato e introdotto per la prima volta in un contesto linguistico.",
 "Tradotto da un'altra lingua.",
 "Diffuso attraverso i media."],1),

COMP("8_28",2,"morfologia","Completa le frasi con il modo verbale corretto.",
[{prima:"Era necessario che le culture ",dopo:" il tempo per elaborare i cambiamenti. (avere – congiuntivo imperfetto)",ok:0},
 {prima:"Pensai che il mondo ",dopo:" più piccolo di quanto credevo. (essere – congiuntivo imperfetto)",ok:1},
 {prima:"Se le regole fossero più eque, la globalizzazione ",dopo:" un processo più giusto. (essere – condizionale presente)",ok:2}],
["avessero","fosse","sarebbe","hanno","era","è"]),

SM("8_29",2,"punteggiatura","Il punto e virgola in 'da un lato ha diffuso tecnologie, idee, prodotti e stili di vita; dall'altro ha prodotto tensioni' separa:",
["Due proposizioni principali coordinate con valore antitetico.",
 "Due elenchi di elementi simili.",
 "Una proposizione principale e una subordinata causale.",
 "Due citazioni da fonti diverse."],0),

SM("8_30",2,"coesione","In 'quest'ultima', a cosa si riferisce il pronome nel terzo paragrafo del testo B?",
["Alla cultura globale.",
 "Alla cultura economicamente e mediaticamente più debole.",
 "All'UNESCO.",
 "All'identità culturale in generale."],1),

SM("8_31",2,"morfologia","Qual è la funzione di 'né' nella frase 'qualcosa che non è né tradizionale né completamente locale'?",
["Congiunzione coordinante disgiuntiva.",
 "Congiunzione coordinante negativa copulativa (né...né = e non...e non).",
 "Pronome relativo.",
 "Avverbio di negazione semplice."],1),

SM("8_32",2,"sintassi","In 'finché queste domande non troveranno risposte più eque', 'finché' introduce:",
["Una proposizione causale.",
 "Una proposizione temporale con valore limitativo.",
 "Una proposizione concessiva.",
 "Una proposizione consecutiva."],1),

SM("8_33",2,"ortografia","Quale forma è corretta?",
["Non è scomparsa della cultura locale, ma impoverimento.",
 "Non è scomparsa della cultura locale ma impoverimento.",
 "Non è scomparsa della cultura locale: ma impoverimento.",
 "Non è scomparsa della cultura locale; ma impoverimento."],0),

SM("8_34",2,"morfologia","In 'chi non ha mai lasciato casa sua vede il mondo con un solo occhio', il verbo 'vede' è:",
["Presente indicativo con valore generico o gnomica.",
 "Futuro semplice con valore di previsione.",
 "Presente indicativo con valore di azione in corso.",
 "Presente congiuntivo in proposizione dubbitativa."],0),

SM("8_35",2,"coesione","'Al contrario' all'inizio del quinto paragrafo introduce:",
["Una conferma di quanto detto nel paragrafo precedente.",
 "Un contrasto rispetto all'idea che i sostenitori della diversità chiedano l'isolamento.",
 "Un esempio concreto di globallizzazione.",
 "Una conclusione definitiva del ragionamento."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 9 – Montagna e natura / Cambiamenti climatici
// ══════════════════════════════════════════════════════════════
const p9 = {id:9, titolo:"La montagna e il clima", domande:[

T("9_t1",0,"Testo A – L'estate del ghiacciaio (testo originale)",
`Mio nonno era una guida alpina. Aveva guidato persone su quasi tutte le cime delle Alpi Occidentali per quarant'anni, e conosceva ogni pietra, ogni crepa, ogni variazione del cielo. Diceva che la montagna ti insegna a leggere: non i libri, ma i segni. L'odore dell'aria prima di un temporale. Il colore della neve che ti dice se regge o cede. La forma delle nuvole che annunciano il vento.
Quando tornai a camminare sulle montagne dove lui mi aveva portato da bambino, la prima cosa che notai fu l'assenza. C'era qualcosa che mancava, e ci volli del tempo per capire cosa: il ghiacciaio. Non tutto, non ancora, ma una parte enorme: dove da bambino vedevo una distesa di bianco compatto, ora c'era roccia grigia, nuda, come la pelle esposta di una ferita.
Chiesi a un vecchio della zona se fosse normale. Mi guardò a lungo prima di rispondere. «Normale no», disse. «Ma non mi sorprende. L'ho visto succedere piano piano, ogni estate un po' di più. Trent'anni fa arrivava fino là», e indicò un punto della montagna che ora era a cinquanta metri di quota più in basso rispetto al bordo del ghiaccio.
I ghiacciai alpini sono termometri naturali. Crescono quando le temperature sono basse e le nevicate abbondanti, si ritirano quando il calore supera le precipitazioni. Il loro arretramento, iniziato nella seconda metà dell'Ottocento con la fine della Piccola Era Glaciale, si è accelerato drammaticamente negli ultimi decenni. In alcuni casi si parla di perdita del 50-70% del volume glaciale in un secolo.
Tornando al fondovalle, passai vicino a un cimitero di montagna. Sulle lapidi più vecchie c'erano i nomi delle guide alpine, i nonni e i bisnonni di quelli che ancora lavorano lassù. Pensai a mio nonno, a quello che avrebbe detto vedendo il ghiacciaio così ridotto. Non l'avrei potuto sapere con certezza. Ma conoscevo la sua voce, e in quella voce c'era sempre stato un rispetto che sfiorava il sacro. Non avrebbe detto niente. Avrebbe guardato in silenzio.`,
"Testo originale a fini didattici"),

SM("9_1",0,"comprensione_globale","Qual è il tema principale del testo?",
["La vita difficile delle guide alpine nel Novecento.",
 "Il ritiro dei ghiacciai alpini vissuto attraverso la memoria personale e la riflessione ambientale.",
 "La bellezza della montagna e il suo potere spirituale.",
 "Il cambiamento delle tecniche di alpinismo negli ultimi decenni."],1),

SM("9_2",0,"comprensione_locale","Cosa mancava al narratore tornando sulle montagne dell'infanzia?",
["Il sentiero che conosceva da bambino.",
 "La presenza del nonno che lo guidava.",
 "Una parte del ghiacciaio che da bambino aveva visto come distesa bianca.",
 "La neve che rendeva le cime praticabili."],2),

VF("9_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Il nonno del narratore era un ingegnere minerario.",ok:false},
 {t:"Il ghiacciaio si è ritirato di circa 50 metri di quota rispetto a trent'anni prima.",ok:true},
 {t:"I ghiacciai crescono quando le temperature sono alte.",ok:false},
 {t:"Il ritiro dei ghiacciai è iniziato nella seconda metà dell'Ottocento.",ok:true},
 {t:"Il narratore è sicuro di cosa avrebbe detto il nonno vedendo il ghiacciaio.",ok:false}]),

SM("9_4",0,"inferenza","Perché il narratore descrive il ghiacciaio ritirato come 'la pelle esposta di una ferita'?",
["Per indicare che la roccia era di colore rosso.",
 "Per evocare una lesione subita dalla montagna, come se il ritiro del ghiaccio fosse una ferita visibile.",
 "Per spiegare che le rocce erano pericolose da attraversare.",
 "Per descrivere la forma irregolare della roccia riaffiorata."],1),

AP("9_5",0,"inferenza","L'ultima scena al cimitero e il pensiero sul silenzio del nonno: cosa comunica questo finale? Come si collega al tema centrale del testo?",
["rispetto sacro perdita silenzio montagna cambiamento","il silenzio vale più delle parole di fronte alla perdita","nonno guida rispetto natura perdita"]),

SM("9_6",0,"struttura_testo","Il quarto paragrafo ('I ghiacciai alpini sono termometri naturali...') ha una funzione diversa dagli altri nel testo. Quale?",
["È l'unico paragrafo scritto in prima persona.",
 "Introduce un dato scientifico e storico che spiega ciò che il narratore ha osservato.",
 "Racconta un episodio del passato del nonno.",
 "Contiene un dialogo con il vecchio del paese."],1),

SM("9_7",0,"lessico_contesto","'Arretramento' nel quarto paragrafo significa:",
["Avanzamento verso valle.",
 "Ritiro progressivo verso l'alto.",
 "Movimento laterale del ghiaccio.",
 "Aumento del volume glaciale."],1),

VF("9_8",0,"struttura_testo","Indica se le seguenti affermazioni sulla struttura del testo sono vere (V) o false (F).",
[{t:"Il testo alterna narrazione personale e dati scientifici.",ok:true},
 {t:"Il narratore è una voce esterna, non coinvolta nelle vicende.",ok:false},
 {t:"La memoria del nonno è presente in tutto il testo.",ok:true},
 {t:"Il testo si conclude con una soluzione al problema del cambiamento climatico.",ok:false}]),

AP("9_9",0,"comprensione_globale","Descrivi le 'capacità di lettura' della montagna che il nonno aveva insegnato al narratore. Cosa ci dicono queste capacità sul rapporto tra l'uomo e la natura?",
["leggere segni natura odore colore forma nuvole","sapere tradizionale natura osservazione","conoscenza incorporata relazione profonda con ambiente"]),

SM("9_10",0,"lessico_contesto","'Sfiorava il sacro' (ultima frase del testo) significa:",
["Tocca brevemente qualcosa di religioso.",
 "Si avvicinava a un sentimento di reverenza profonda, quasi religiosa.",
 "Superava i limiti del sacro.",
 "Ignorava completamente il senso del sacro."],1),

T("9_t2",0,"Testo B – Il cambiamento climatico: cause e conseguenze",
`Il cambiamento climatico è la sfida più urgente del nostro tempo. La temperatura media della Terra è aumentata di circa 1,2 gradi Celsius rispetto ai livelli preindustriali, e senza interventi drastici le proiezioni indicano aumenti tra 1,5 e 4 gradi entro il 2100. Questi numeri possono sembrare piccoli, ma hanno effetti enormi: ogni grado in più significa più eventi metereologici estremi, più siccità, più inondazioni, più specie a rischio di estinzione.
Le cause sono principalmente umane. La combustione di combustibili fossili – carbone, petrolio, gas naturale – è responsabile di circa il 75% delle emissioni di gas serra, che intrappolano il calore nella bassa atmosfera invece di lasciarlo disperdere nello spazio. La deforestazione è la seconda causa principale: le foreste assorbono CO₂, e distruggerle rilascia nell'atmosfera il carbonio immagazzinato per secoli.
Le conseguenze sono già visibili. I ghiacciai si ritirano in tutti i continenti. Il livello del mare è aumentato di circa 20 centimetri dall'inizio del Novecento e continua a salire. Le ondate di calore sono più frequenti e intense. Le stagioni delle piogge sono sempre meno prevedibili, con effetti devastanti sull'agricoltura in molte regioni del mondo.
Le soluzioni esistono: energia rinnovabile, efficienza energetica, riforestazione, agricoltura sostenibile, cambiamenti nelle abitudini di consumo. Il Accordo di Parigi del 2015 ha impegnato quasi tutti i paesi del mondo a ridurre le emissioni, ma gli esperti concordano che i progressi fatti finora sono insufficienti rispetto all'urgenza del problema.
Non si tratta solo di una questione ambientale: è una questione di giustizia. I paesi e le popolazioni più vulnerabili al cambiamento climatico – le isole del Pacifico, le zone costiere dell'Asia del Sud, le regioni sub-sahariane – sono spesso quelli che hanno contribuito meno al problema. Il cambiamento climatico amplia le disuguaglianze già esistenti.`,
"Testo originale a fini didattici"),

SM("9_11",0,"comprensione_globale","L'idea principale del testo B è:",
["Il cambiamento climatico è un problema principalmente dei paesi poveri.",
 "Il cambiamento climatico ha cause principalmente umane, conseguenze già visibili e soluzioni disponibili ma insufficientemente attuate.",
 "L'Accordo di Parigi ha già risolto il problema del cambiamento climatico.",
 "La temperatura della Terra è aumentata di 4 gradi dall'era preindustriale."],1),

SM("9_12",0,"comprensione_locale","Qual è la principale causa del cambiamento climatico secondo il testo?",
["La deforestazione delle foreste tropicali.",
 "L'aumento della popolazione mondiale.",
 "La combustione di combustibili fossili, responsabile del 75% delle emissioni.",
 "L'agricoltura intensiva e l'allevamento."],2),

VF("9_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"Il livello del mare è aumentato di circa 20 centimetri dall'inizio del Novecento.",ok:true},
 {t:"La deforestazione contribuisce al cambiamento climatico assorbendo CO₂.",ok:false},
 {t:"I paesi più vulnerabili al cambiamento climatico sono spesso quelli che hanno contribuito di meno.",ok:true},
 {t:"L'Accordo di Parigi è stato firmato nel 2020.",ok:false},
 {t:"Secondo gli esperti, i progressi attuali sono sufficienti a risolvere il problema.",ok:false}]),

SM("9_14",0,"inferenza","Perché l'autore afferma che il cambiamento climatico 'amplia le disuguaglianze già esistenti'?",
["Perché i paesi ricchi soffrono di più il caldo.",
 "Perché chi è già più vulnerabile economicamente subisce di più le conseguenze di un problema creato principalmente dai più ricchi.",
 "Perché le ondate di calore colpiscono di più le città.",
 "Perché i paesi poveri non hanno tecnologie per affrontare il problema."],1),

AP("9_15",0,"struttura_testo","In che modo il testo A (personale, narrativo) e il testo B (scientifico, argomentativo) si completano nel trattare il tema dei ghiacciai e del cambiamento climatico?",
["testo A esperienza vissuta emozione testo B dati scientifici spiegazione","personale e scientifico si completano","narrazione e argomentazione stessa realtà prospettive diverse"]),

T("9_t3",1,"SEZIONE B – LESSICO","",""),

SM("9_16",1,"lessico","'Siccità' (terzo paragrafo del testo B) indica:",
["Periodi di piogge intense e prolungate.",
 "Prolungata mancanza di precipitazioni e scarsità d'acqua.",
 "Temperatura molto alta durante l'estate.",
 "Venti forti e tempeste."],1),

SM("9_17",1,"lessico_contesto","In quale frase 'ritiro' è usato in senso figurato?",
["Il ritiro del ghiacciaio è aumentato negli ultimi anni.",
 "Il generale ordinò il ritiro delle truppe.",
 "Dopo la sconfitta, decise il ritiro dalla vita pubblica.",
 "Il ritiro della neve in primavera è normale."],2),

COMP("9_18",1,"lessico_contesto","Completa le frasi con la parola corretta.",
[{prima:"I ghiacciai sono ",dopo:" naturali del clima.",ok:0},
 {prima:"La combustione di combustibili fossili è la causa ",dopo:" del cambiamento climatico.",ok:1},
 {prima:"Le soluzioni al cambiamento climatico esistono ma sono ",dopo:" attuate.",ok:2}],
["termometri","principale","insufficientemente","barometri","secondaria","completamente"]),

SM("9_19",1,"lessico","'Preindustriale' si riferisce al periodo:",
["Dopo la Rivoluzione Industriale.",
 "Precedente allo sviluppo dell'industria moderna.",
 "Durante la prima fase dell'industrializzazione.",
 "Relativo all'industria contemporanea."],1),

COL("9_20",1,"lessico","Collega ogni termine con il suo significato nel contesto dei testi.",
["arretramento","combustibile fossile","deforestazione","proiezione"],
["previsione basata su dati attuali","distruzione sistematica delle foreste","sostanza come carbone o petrolio che bruciata rilascia CO₂","ritiro progressivo verso una posizione precedente"],
{0:3,1:2,2:1,3:0}),

SM("9_21",1,"lessico","'Drastici' (primo paragrafo del testo B) significa:",
["Lenti e graduali.","Decisi, radicali, di grande portata.","Costosi economicamente.","Tecnologicamente avanzati."],1),

SM("9_22",1,"lessico","Quale delle seguenti parole appartiene alla stessa famiglia di 'ghiacciaio'?",
["Ghiaccio","Ghiacciaio – è già un derivato di 'ghiaccio'","Ghiacciato","Tutti e tre"],3),

T("9_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("9_23",2,"morfologia","In 'diceva che la montagna ti insegna a leggere', il verbo 'diceva' è:",
["Indicativo presente.","Indicativo imperfetto con valore di abitudine nel passato.","Indicativo passato prossimo.","Congiuntivo imperfetto."],1),

VF("9_24",2,"morfologia","Indica se le seguenti analisi grammaticali sono vere (V) o false (F).",
[{t:"'naturali' in 'termometri naturali' è un aggettivo qualificativo.",ok:true},
 {t:"'ritirandosi' è un participio presente.",ok:false},
 {t:"'preindustriale' contiene il prefisso 'pre-' con significato di anteriorità.",ok:true},
 {t:"'devastanti' è un aggettivo derivato dal participio presente del verbo 'devastare'.",ok:true}]),

SM("9_25",2,"sintassi","In 'l'odore dell'aria prima di un temporale', il gruppo nominale 'prima di un temporale' ha funzione di:",
["Complemento di specificazione.",
 "Complemento di tempo determinato.",
 "Complemento di causa.",
 "Apposizione al soggetto."],1),

AP("9_26",2,"sintassi","Analizza la frase 'Non avrebbe detto niente. Avrebbe guardato in silenzio.' Che effetto produce la scelta di due frasi brevi invece di una frase lunga? Che cosa comunica stilisticamente?",
["pausa ritmo peso silenzio brevità efficace","frasi brevi impatto emotivo maggiore","sintesi emotiva silenzio vale più delle parole"]),

SM("9_27",2,"morfologia","'Preindustriale' è un aggettivo formato da:",
["Il prefisso 'pre-' (prima di) + aggettivo 'industriale'.",
 "Il sostantivo 'pre' + aggettivo 'industriale'.",
 "L'avverbio 'prima' + sostantivo 'industria'.",
 "Il prefisso negativo 'pre-' + aggettivo 'industriale'."],0),

COMP("9_28",2,"morfologia","Completa le frasi con la forma verbale corretta.",
[{prima:"Era necessario che i paesi ",dopo:" le emissioni di gas serra. (ridurre – congiuntivo imperfetto)",ok:0},
 {prima:"Se la temperatura ",dopo:" di 2 gradi, le conseguenze sarebbero gravi. (aumentare – congiuntivo imperfetto)",ok:1},
 {prima:"Mio nonno sperava che il ghiacciaio non ",dopo:" così rapidamente. (ritirarsi – congiuntivo imperfetto)",ok:2}],
["riducessero","aumentasse","si ritirasse","riducono","aumenta","si ritira"]),

SM("9_29",2,"punteggiatura","I tre punti impliciti nella lista 'L'odore dell'aria prima di un temporale. Il colore della neve. La forma delle nuvole.' comunicano:",
["Una lista incompleta che suggerisce che ci sono altri elementi simili.",
 "Un'interruzione involontaria del discorso.",
 "Una lista completa e definitiva di tutte le cose da imparare.",
 "Un errore di punteggiatura del narratore."],0),

SM("9_30",2,"coesione","In 'Il loro arretramento, iniziato nella seconda metà dell'Ottocento', il pronome 'loro' si riferisce a:",
["Alle guide alpine come il nonno.",
 "Ai ghiacciai alpini citati nella frase precedente.",
 "Ai vecchi del paese.",
 "Alle cime delle Alpi Occidentali."],1),

SM("9_31",2,"morfologia","'Immagazzinato' è il participio passato del verbo 'immagazzinare', che significa:",
["Espellere e disperdere nell'aria.",
 "Accumulare e conservare in un deposito.",
 "Trasformare in energia.",
 "Misurare con strumenti scientifici."],1),

SM("9_32",2,"sintassi","Nella frase 'senza interventi drastici le proiezioni indicano aumenti tra 1,5 e 4 gradi', il gruppo 'senza interventi drastici' ha valore di:",
["Proposizione concessiva implicita.",
 "Proposizione condizionale negativa implicita (= se non ci saranno interventi).",
 "Complemento di mezzo.",
 "Complemento di causa."],1),

SM("9_33",2,"ortografia","Quale forma è corretta?",
["Il cambiamento climatico è la sfida più urgente del nostro tempo.",
 "Il cambiamento climatico è la sfida più urgente del nostro tempo'.",
 "Il cambiamento climàtico è la sfida più urgente del nostro tempo.",
 "Il cambiamento climatico è la sfida più urgente del nostro tempo,"],0),

SM("9_34",2,"morfologia","In 'le stagioni delle piogge sono sempre meno prevedibili', l'avverbio 'sempre' ha la funzione di:",
["Indicare un'azione abituale nel presente.",
 "Intensificare il comparativo 'meno prevedibili', indicando un peggioramento progressivo.",
 "Indicare che le piogge sono costanti.",
 "Negare l'affermazione che segue."],1),

SM("9_35",2,"coesione","'Non si tratta solo di una questione ambientale: è una questione di giustizia' – i due punti introducono:",
["Un elenco di conseguenze.",
 "Una riformulazione più ampia e profonda dell'affermazione precedente.",
 "Una causa dell'affermazione precedente.",
 "Una citazione da un documento ufficiale."],1),

]};

// ══════════════════════════════════════════════════════════════
//  PROVA 10 – Deledda / Il corpo umano e la salute mentale
// ══════════════════════════════════════════════════════════════
const p10 = {id:10, titolo:"Canne al vento", domande:[

T("10_t1",0,"Testo A – Canne al vento (Grazia Deledda, 1913)",
`Efix era il servo delle signorine Pintor; servo non nel senso volgare della parola, ma servo per una specie di feudo morale: serviva quelle nobili donne decadute come si serve un ideale, senza compenso, senza domandare nulla per sé, anzi dando tutto quello che possedeva: il lavoro delle sue mani, il frutto della sua terretta, le primizie dell'orto e del pollaio.
Era chiamato servo, ma era piuttosto il custode di quella casa antica dove la signorina Noemi, la più giovane delle tre sorelle, regnava dispoticamente, mentre le altre due, Ester e Ruth, più anziane e più deboli, la seguivano come pianeti il loro sole.
Efix abitava in una capanna vicino al fiume, nella piccola tenuta delle signorine: una vigna, un orto, un campo di granturco, tutto circondato da un muro a secco in rovina. Ci viveva da trent'anni, da quando le signorine si erano ridotte a quella miseria dopo la morte del padre, e lui le aveva seguite come un cane segue il padrone caduto in disgrazia.
Perché? Qualcuno nel paese diceva che Efix aveva una colpa antica da espiare, legata alla morte del padre delle signorine. Nessuno sapeva esattamente cosa fosse successo, e Efix non parlava mai. Stava chino sul lavoro, i capelli grigi, la schiena curvata dagli anni, lo sguardo sempre basso come chi porta dentro di sé qualcosa di pesante.
Ma c'era qualcos'altro, oltre alla colpa. C'era un affetto vero, muto e ostinato, di quelli che non hanno bisogno di parole per esistere. Efix guardava la casa delle signorine con gli occhi di chi ha costruito qualcosa e sa che gli appartiene, non per diritto, ma per devozione.
Una sera, mentre tornava dalla vigna con il carico delle ultime arance, pensò che la sua vita era stata come quelle canne che crescono lungo il fiume: piegate dal vento, raddrizzate, piegate di nuovo. Non si spezzano, ma non stanno mai dritte. Sempre così, tutta la vita.`,
"Grazia Deledda, Canne al vento (1913) – opera in pubblico dominio (con integrazione originale)"),

SM("10_1",0,"comprensione_globale","Qual è il tema principale del brano?",
["La miseria economica della Sardegna rurale del Novecento.",
 "Il senso del dovere e la devozione silenziosa di Efix verso le signorine Pintor.",
 "Il conflitto tra le tre sorelle Pintor per la gestione della proprietà.",
 "La descrizione paesaggistica della Sardegna."],1),

SM("10_2",0,"comprensione_locale","Perché Efix serve le signorine Pintor?",
["Perché viene pagato molto bene.",
 "Per una forma di fedeltà morale e forse per espiare una colpa antica.",
 "Perché le signorine lo hanno minacciato.",
 "Perché non ha altro posto dove andare."],1),

VF("10_3",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) in base al testo.",
[{t:"Efix abita nella casa delle signorine Pintor.",ok:false},
 {t:"La signorina Noemi è la più autoritaria delle tre sorelle.",ok:true},
 {t:"Efix lavora per le signorine da trent'anni.",ok:true},
 {t:"Tutti nel paese sanno esattamente la colpa di Efix.",ok:false},
 {t:"Efix guarda la casa delle signorine come se gli appartenesse per diritto legale.",ok:false}]),

SM("10_4",0,"inferenza","L'immagine delle 'canne al vento' nel finale del brano descrive la vita di Efix come:",
["Una vita spezzata dalla sfortuna.",
 "Una vita che resiste piegandosi, senza mai rompersi definitivamente.",
 "Una vita serena e tranquilla come quella delle piante lungo il fiume.",
 "Una vita inutile, come le canne che non danno frutti."],1),

AP("10_5",0,"inferenza","Spiega il significato della frase 'servo non nel senso volgare della parola'. Qual è, secondo il testo, il senso in cui Efix è servo?",
["devozione morale ideale non semplice dipendente","servo per scelta non obbligo feudo morale","servire come ideale non come mestiere"]),

SM("10_6",0,"struttura_testo","Il quarto paragrafo ('Perché? Qualcuno nel paese diceva...') introduce nella narrazione:",
["Una spiegazione definitiva della colpa di Efix.",
 "Un elemento di mistero che il narratore presenta senza risolvere.",
 "Un flashback sulla morte del padre delle signorine.",
 "Il punto di vista del paese contrapposto a quello di Efix."],1),

SM("10_7",0,"lessico_contesto","'Espiare' (quarto paragrafo) significa:",
["Espirare profondamente.",
 "Scontare una colpa attraverso il sacrificio o la sofferenza.",
 "Spiegare e giustificare un errore.",
 "Fare un esame approfondito della coscienza."],1),

VF("10_8",0,"struttura_testo","Indica se le seguenti descrizioni si riferiscono alla narrazione esterna (NE) del narratore o al pensiero/sentimento interiore di Efix (IE).",
[{t:"'Era chiamato servo, ma era piuttosto il custode'. (narrazione esterna)",ok:true},
 {t:"'la sua vita era stata come quelle canne che crescono lungo il fiume'. (pensiero interiore di Efix)",ok:true},
 {t:"'Qualcuno nel paese diceva che Efix aveva una colpa antica'. (narrazione esterna)",ok:true},
 {t:"'c'era un affetto vero, muto e ostinato'. (entrambi, narrazione esterna che rivela l'interno)",ok:true}]),

AP("10_9",0,"comprensione_globale","Descrivi il personaggio di Efix: aspetto fisico, carattere, vita. Usa tutte le informazioni fornite dal testo.",
["capelli grigi schiena curva sguardo basso silenzioso devoto fedele","servo devoto colpa silenzio affetto ostinato","fisico consumato dal lavoro interiore profondo"]),

SM("10_10",0,"lessico_contesto","'Muto e ostinato' nell'ultimo paragrafo descrive l'affetto di Efix come:",
["Silenzioso ma tenace, che non ha bisogno di parole per esistere.",
 "Freddo e distaccato, tipico di chi non sa esprimere i sentimenti.",
 "Rabbioso e risentito verso le signorine.",
 "Temporaneo e destinato a finire."],0),

T("10_t2",0,"Testo B – La salute mentale nell'adolescenza",
`La salute mentale è parte integrante della salute. Secondo l'Organizzazione Mondiale della Sanità, la salute non è semplicemente assenza di malattia, ma uno stato di completo benessere fisico, mentale e sociale. Eppure, mentre ci preoccupiamo molto della salute fisica, quella mentale è ancora troppo spesso trascurata, stigmatizzata o negata.
I dati sono preoccupanti. Uno studio del 2021 dell'OMS indica che circa il 15% degli adolescenti tra i 10 e i 19 anni soffre di un disturbo mentale. I più comuni tra i giovani sono ansia, depressione, disturbi del comportamento alimentare e ADHD. La pandemia del 2020-2021 ha aggravato la situazione: l'isolamento sociale, la chiusura delle scuole e l'incertezza sul futuro hanno prodotto un peggioramento significativo del benessere psicologico nella fascia d'età 14-24 anni.
Il problema non è solo nella malattia, ma nello stigma. Molti ragazzi che soffrono non chiedono aiuto perché hanno paura di essere giudicati, di sembrare deboli, di perdere amicizie. In alcune culture, il disagio psicologico è ancora considerato un'invenzione o una debolezza del carattere: «non hai niente, sei solo pigro». Questo pregiudizio ritarda la diagnosi e peggiora la prognosi.
Le scuole stanno iniziando a rispondere: molti istituti hanno introdotto sportelli di ascolto psicologico, programmi di educazione emotiva, spazi sicuri dove i ragazzi possono parlare. Ma c'è ancora molta strada da fare. La formazione dei docenti sul riconoscimento del disagio è insufficiente. Le famiglie spesso non sanno dove rivolgersi. I servizi pubblici di salute mentale per i giovani sono in molte regioni italiane sottodimensionati rispetto al bisogno.
Parlare apertamente di salute mentale non significa enfatizzare il problema o spaventare i ragazzi: significa normalizzare la richiesta di aiuto, così come è normale andare dal medico per un dolore fisico. Un adolescente che impara che i sentimenti difficili si possono nominare, condividere e affrontare, cresce più forte di uno che impara a nasconderli.`,
"Testo originale a fini didattici"),

SM("10_11",0,"comprensione_globale","L'idea principale del testo B è:",
["La salute mentale degli adolescenti è in crisi a causa dei social media.",
 "La salute mentale è parte fondamentale della salute, ma è ancora troppo stigmatizzata e poco supportata.",
 "I disturbi mentali negli adolescenti sono sempre curabili con il giusto trattamento.",
 "La pandemia è la sola causa del peggioramento della salute mentale giovanile."],1),

SM("10_12",0,"comprensione_locale","Qual è il dato citato nel testo sull'incidenza dei disturbi mentali negli adolescenti?",
["Il 5% degli adolescenti soffre di un disturbo mentale.",
 "Il 25% degli adolescenti ha avuto un episodio di depressione.",
 "Circa il 15% degli adolescenti tra 10 e 19 anni soffre di un disturbo mentale.",
 "La metà degli adolescenti sperimenta problemi di ansia."],2),

VF("10_13",0,"comprensione_locale","Indica se le seguenti affermazioni sono vere (V) o false (F) secondo il testo B.",
[{t:"Lo stigma impedisce a molti ragazzi di chiedere aiuto.",ok:true},
 {t:"Tutte le scuole italiane hanno già sportelli di ascolto psicologico adeguati.",ok:false},
 {t:"La pandemia ha migliorato il benessere psicologico degli adolescenti.",ok:false},
 {t:"Secondo l'OMS la salute include il benessere mentale e sociale, non solo fisico.",ok:true},
 {t:"Il testo afferma che parlare di salute mentale spaventa i ragazzi.",ok:false}]),

SM("10_14",0,"inferenza","Cosa intende l'autore con 'normalizzare la richiesta di aiuto'?",
["Rendere normale, cioè non più stigmatizzata, la scelta di rivolgersi a un professionista per il disagio mentale.",
 "Aumentare il numero degli psicologi nelle scuole.",
 "Insegnare ai ragazzi che i loro problemi sono normali e quindi non gravi.",
 "Creare programmi scolastici obbligatori di salute mentale."],0),

AP("10_15",0,"struttura_testo","In che modo la storia di Efix nel testo A può essere letta come esempio di salute mentale non affrontata? Usa informazioni da entrambi i testi.",
["colpa non elaborata silenzio non chiede aiuto porta peso dentro","Efix porta un peso senza parlarne disagio taciuto","silenzio patologico vs normalizzare aiuto"]),

T("10_t3",1,"SEZIONE B – LESSICO","",""),

SM("10_16",1,"lessico","Sinonimo di 'espiare' nel senso usato nel testo A:",
["Respirare profondamente.",
 "Scontare una colpa attraverso sacrificio e sofferenza.",
 "Spiegare chiaramente le proprie ragioni.",
 "Esaminare la propria coscienza."],1),

SM("10_17",1,"lessico_contesto","In quale frase 'stigma' è usato nel senso del testo B?",
["Il medico riconobbe lo stigma della malattia sulla pelle del paziente.",
 "Lo stigma sociale impedisce a molti ragazzi di chiedere aiuto psicologico.",
 "L'animale portava lo stigma del marchio sul fianco.",
 "Il pittore applicò lo stigma come simbolo religioso nel dipinto."],1),

COMP("10_18",1,"lessico_contesto","Completa le frasi con la parola corretta.",
[{prima:"La salute mentale è ancora troppo spesso ",dopo:" nella nostra società.",ok:0},
 {prima:"Lo stigma ",dopo:" la diagnosi e peggiora la prognosi.",ok:1},
 {prima:"I servizi pubblici di salute mentale sono ",dopo:" rispetto al bisogno reale.",ok:2}],
["stigmatizzata","ritarda","sottodimensionati","valorizzata","accelera","sovradimensionati"]),

SM("10_19",1,"lessico","'Prognosi' (terzo paragrafo del testo B) si riferisce a:",
["La diagnosi iniziale di una malattia.",
 "Le previsioni sull'andamento futuro di una malattia.",
 "Il trattamento prescritto dal medico.",
 "La descrizione dei sintomi di una malattia."],1),

COL("10_20",1,"lessico","Collega ogni termine con il suo significato nel contesto dei testi.",
["devozione","dispoticamente","stigma","disagio"],
["marchio di disonore che porta a discriminazione","in modo autoritario e assoluto, senza accettare opposizione","stato di malessere o difficoltà psicologica","dedizione profonda e incondizionata verso qualcuno"],
{0:3,1:1,2:0,3:2}),

SM("10_21",1,"lessico","'Sottodimensionato' (quarto paragrafo del testo B) significa:",
["Più grande del necessario.",
 "Più piccolo o meno fornito di quanto il bisogno richiederebbe.",
 "Organizzato in modo efficiente.",
 "Troppo costoso per essere gestito."],1),

SM("10_22",1,"lessico","Quale prefisso in 'insufficiente' indica negazione o mancanza?",
["In- privativo.","Suf-.","Fici-.","Ente."],0),

T("10_t4",2,"SEZIONE C – RIFLESSIONE SULLA LINGUA","",""),

SM("10_23",2,"morfologia","In 'serviva quelle nobili donne decadute come si serve un ideale', il verbo impersonale 'si serve' esprime:",
["Un'azione svolta da un soggetto preciso.",
 "Un'azione generica, valida per chiunque si trovi in quella condizione.",
 "Un'azione passata avvenuta una sola volta.",
 "Un'azione svolta da Efix in questo momento."],1),

VF("10_24",2,"morfologia","Indica se le seguenti analisi grammaticali sono corrette (V) o errate (F).",
[{t:"'muto e ostinato' sono due aggettivi qualificativi coordinati.",ok:true},
 {t:"'stigmatizzata' in 'troppo spesso stigmatizzata' è un avverbio.",ok:false},
 {t:"'sottodimensionati' contiene il prefisso 'sotto-' con valore di insufficienza.",ok:true},
 {t:"'espiare' è un verbo della prima coniugazione.",ok:false}]),

SM("10_25",2,"sintassi","In 'molti ragazzi che soffrono non chiedono aiuto perché hanno paura di essere giudicati', le proposizioni subordinate sono:",
["Una relativa e una causale.",
 "Due causali coordinate.",
 "Una relativa e una finale.",
 "Una temporale e una causale."],0),

AP("10_26",2,"sintassi","Nella frase 'Efix guardava la casa delle signorine con gli occhi di chi ha costruito qualcosa e sa che gli appartiene, non per diritto, ma per devozione', individua: il soggetto, il predicato, e i due complementi di modo.",
["soggetto Efix predicato guardava modi con gli occhi non per diritto ma per devozione","complementi di modo con gli occhi per devozione","Efix guardava con gli occhi di chi per devozione"]),

SM("10_27",2,"morfologia","'Dispoticamente' è derivato da:",
["Dispotico + suffisso avverbiale -mente.",
 "Dispotismo + suffisso avverbiale.",
 "Despota + suffisso aggettivale + suffisso avverbiale.",
 "Disporre + suffisso avverbiale."],0),

COMP("10_28",2,"morfologia","Completa le frasi con la forma verbale corretta.",
[{prima:"Era necessario che Efix ",dopo:" sempre per le signorine. (lavorare – congiuntivo imperfetto)",ok:0},
 {prima:"I ragazzi speravano che lo stigma ",dopo:" con il tempo. (diminuire – congiuntivo imperfetto)",ok:1},
 {prima:"Se Efix ",dopo:" parlato della sua colpa, forse si sarebbe sentito più libero. (avere – congiuntivo trapassato)",ok:2}],
["lavorasse","diminuisse","avesse","lavorò","diminuì","aveva"]),

SM("10_29",2,"punteggiatura","I due punti nella frase 'la salute non è semplicemente assenza di malattia, ma uno stato di completo benessere fisico, mentale e sociale: è una definizione ampia e inclusiva' introducono:",
["Un elenco di malattie.",
 "Un commento che precisa e approfondisce la definizione precedente.",
 "Una citazione diretta dall'OMS.",
 "Una causa dell'affermazione precedente."],1),

SM("10_30",2,"coesione","In 'Ci viveva da trent'anni', il pronome 'ci' si riferisce a:",
["Alla vigna.",
 "Alla capanna vicino al fiume.",
 "Alla casa delle signorine.",
 "Al paese."],1),

SM("10_31",2,"morfologia","In 'piegate dal vento, raddrizzate, piegate di nuovo', i tre participi passati hanno funzione di:",
["Predicati di proposizioni implicite coordinate.",
 "Complementi oggetto della proposizione principale.",
 "Soggetti sottintesi.",
 "Apposizioni al soggetto 'canne'."],0),

SM("10_32",2,"sintassi","Nella frase 'Parlare apertamente di salute mentale non significa enfatizzare il problema', il soggetto è:",
["'Parlare apertamente di salute mentale' (infinito sostantivato).",
 "'salute mentale'.",
 "'il problema'.",
 "Il soggetto è sottinteso: 'noi'."],0),

SM("10_33",2,"ortografia","Quale forma è corretta?",
["Lo stigma ritarda la diagnosi e peggiora la prognosi.",
 "Lo stigma ritarda la diagnosi e peggiora la prognòsi.",
 "Lo stigma ritardà la diagnosi e peggiora la prognosi.",
 "Lo stigma ritarda la diagnòsi e peggiora la prognosi."],0),

SM("10_34",2,"morfologia","'Decadute' (primo paragrafo del testo A) è il participio passato di 'decadere'. Quale significato ha qui?",
["Che sono cadute fisicamente.",
 "Che hanno perso il benessere e il prestigio sociale di un tempo.",
 "Che sono diventate più anziane.",
 "Che si sono trasferite in un posto migliore."],1),

SM("10_35",2,"coesione","'Eppure, mentre ci preoccupiamo molto della salute fisica, quella mentale è ancora troppo spesso trascurata' – 'eppure' introduce:",
["Una causa di quanto detto prima.",
 "Un contrasto rispetto alla definizione ampia di salute appena data.",
 "Una conseguenza dell'affermazione precedente.",
 "Un esempio concreto di salute mentale."],1),

]};

return [p6, p7, p8, p9, p10];
})();

// Registra le prove nel sistema
if(typeof PROVE !== 'undefined'){
  PROVE_6_10.forEach(p => {
    const idx = PROVE.findIndex(x => x.id === p.id);
    if(idx >= 0) PROVE[idx] = p; else PROVE.push(p);
  });
  PROVE.sort((a,b) => a.id - b.id);
}
