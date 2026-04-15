// ══════════════════════════════════════════════════════
//  PROVE INGLESE — Prova 2
//  Argomenti: Sport, Cibo e salute
//  Struttura: Reading A1 + Reading A2 | Listening A1 + Listening A2
//  Durata: 90 minuti · Grado 8 · Livelli A1–A2 QCER
// ══════════════════════════════════════════════════════

window.PROVE_ENG = window.PROVE_ENG || [];

(function(){
const T  = (id,sez,tit,testo,fonte) => ({id,sez,tipo:'testo',tit,testo,fonte:fonte||''});
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops:ops,ok});

window.PROVE_ENG.push({ id:2, titolo:'Prova 2', domande:[

// ════════════════════════════════════════════════
// SEZIONE A — READING
// ════════════════════════════════════════════════
T('e2_t1',0,'📖 READING — Task 1 (Level A1)',
`My name is Carlos. I am from Spain but I live in Manchester, England. I love football! I play for my school team every Saturday. My favourite player is called Messi. After training, I always drink water and eat a banana. My coach says it is important to eat well and stay healthy. I go to bed early on Friday nights before a match. Football makes me happy.`,
'Original text for educational purposes'),

SM('e2_1',0,'reading_locale',
'Where does Carlos live?',
['In Spain','In Manchester','In London','In Barcelona'],1),

SM('e2_2',0,'reading_locale',
'When does Carlos play football?',
['Every Sunday','Every Friday','Every Saturday','Every day'],2),

SM('e2_3',0,'reading_locale',
'What does Carlos eat after training?',
['A sandwich and juice','Water and a banana','Pizza and cola','Pasta and milk'],1),

SM('e2_4',0,'reading_globale',
'What is the text mainly about?',
['Carlos\'s family','Carlos\'s love of football','Carlos\'s school','Carlos\'s city'],1),

SM('e2_5',0,'vocabulary',
'In the text, "coach" means:',
['A type of bus','A sports trainer','A school subject','A kind of food'],1),

T('e2_t2',0,'📖 READING — Task 2 (Level A2)',
`Nowadays, many young people in Europe are not eating enough fruits and vegetables. A recent study by the World Health Organisation showed that only one in three teenagers eats the recommended five portions of fruit and vegetables per day. Experts say this is partly because fast food is cheap, convenient and widely advertised on social media.

However, some schools are trying to change this. In Finland, free school meals have been provided since 1948. Finnish students eat warm, balanced meals that include vegetables, fish and whole grains every day. Studies show that students who eat well concentrate better in class and get higher marks. Some Italian schools have also introduced "farm-to-table" programmes, where students grow vegetables in school gardens and then use them in the canteen. These experiences help young people understand where food comes from and develop healthier habits.`,
'Original text for educational purposes'),

SM('e2_6',0,'reading_globale',
'What is the main topic of the text?',
['How to cook Italian food','Young people and healthy eating habits','The history of Finnish schools','Fast food advertising'],1),

SM('e2_7',0,'reading_locale',
'According to the study, how many teenagers eat five portions of fruit and vegetables per day?',
['One in two','One in three','One in four','One in five'],1),

SM('e2_8',0,'reading_locale',
'Since when have Finnish students had free school meals?',
['1928','1938','1948','1958'],2),

SM('e2_9',0,'reading_locale',
'What do "farm-to-table" programmes in Italian schools involve?',
['Students cooking traditional recipes','Students growing vegetables and using them in the canteen','Students visiting local restaurants','Students taking cooking exams'],1),

SM('e2_10',0,'reading_locale',
'According to the text, what is one benefit of eating well for students?',
['They sleep more hours','They earn more money','They concentrate better and get higher marks','They do more sport'],2),

SM('e2_11',0,'vocabulary',
'In the text, "convenient" means:',
['Very expensive','Easy and practical to use','Unhealthy and dangerous','Slow and difficult'],1),

SM('e2_12',0,'reading_globale',
'Which statement best describes the overall message of the text?',
['Fast food is always bad and should be banned','Schools can help young people develop better eating habits','Finnish food is the best in the world','Teenagers today are very healthy'],1),

// ════════════════════════════════════════════════
// SEZIONE B — LISTENING
// ════════════════════════════════════════════════
T('e2_t3',1,'🎧 LISTENING — Task 1 (Level A1)',
`[Listen carefully. The text will be read twice.]

Hello! My name is Sam and I am twelve years old. I love swimming. I go to the swimming pool three times a week — on Monday, Wednesday and Friday. My swimming lessons start at five o'clock and finish at six. My teacher is called Miss Brown. She is very kind and patient. Last month, I won my first competition! I came first in the fifty-metre freestyle race. My parents were very proud of me.`,
'Listening transcript — read by text-to-speech'),

SM('e2_13',1,'listening_locale',
'How many times a week does Sam go swimming?',
['Twice','Three times','Four times','Every day'],1),

SM('e2_14',1,'listening_locale',
'What time do Sam\'s swimming lessons finish?',
['Five o\'clock','Half past five','Six o\'clock','Seven o\'clock'],2),

SM('e2_15',1,'listening_locale',
'What did Sam win last month?',
['A school prize','A swimming competition','A football match','A running race'],1),

SM('e2_16',1,'listening_globale',
'How did Sam\'s parents feel about his success?',
['Surprised','Sad','Proud','Worried'],2),

T('e2_t4',1,'🎧 LISTENING — Task 2 (Level A2)',
`[Listen carefully. The text will be read twice.]

Welcome to SportsTalk Radio. I'm your host, and today I'm speaking with Maya, a sixteen-year-old athlete who has just returned from the National Junior Athletics Championships. Maya, congratulations on your gold medal in the eight hundred metres!

Thank you! I'm really happy. I've been training for this competition for over a year. I train six days a week — usually in the mornings before school, from six to eight. It's tough, but I love it. My coach, Mr Harris, has been amazing. He designed a special training programme for me with interval running and strength exercises.

The hardest part is managing school and training at the same time. Sometimes I'm very tired during lessons. But my teachers are supportive — they let me hand in homework a day late when I have competitions. My advice to young athletes is: never give up, and always believe in yourself, even when things get difficult.`,
'Listening transcript — read by text-to-speech'),

SM('e2_17',1,'listening_locale',
'What did Maya win at the National Junior Athletics Championships?',
['A silver medal','A bronze medal','A gold medal','A trophy'],2),

SM('e2_18',1,'listening_locale',
'How long has Maya been training for this competition?',
['Six months','One year','Over a year','Two years'],2),

SM('e2_19',1,'listening_locale',
'When does Maya usually train?',
['In the evenings after school','In the mornings before school','At weekends only','During lunch break'],1),

SM('e2_20',1,'listening_globale',
'What is the hardest thing for Maya?',
['Finding a good coach','The physical training itself','Managing school and training at the same time','Travelling to competitions'],2),

SM('e2_21',1,'listening_locale',
'What do Maya\'s teachers allow her to do?',
['Leave school early','Skip lessons on competition days','Hand in homework a day late','Choose her own timetable'],2),

SM('e2_22',1,'vocabulary',
'Maya says "never give up". This means:',
['Don\'t start something new','Don\'t stop trying even when it\'s difficult','Always ask for help','Give something to someone'],1),

]});
})();
