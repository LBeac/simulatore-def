// ══════════════════════════════════════════════════════
//  PROVE INGLESE — Prova 1
//  Argomenti: Famiglia, Scuola
//  Struttura: Reading A1 + Reading A2 | Listening A1 + Listening A2
//  Durata: 90 minuti · Grado 8 · Livelli A1–A2 QCER
// ══════════════════════════════════════════════════════

window.PROVE_ENG = window.PROVE_ENG || [];

(function(){

// Helpers
const T  = (id,sez,tit,testo,fonte) => ({id,sez,tipo:'testo',tit,testo,fonte:fonte||''});
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops:ops,ok});

window.PROVE_ENG.push({ id:1, titolo:'Prova 1', domande:[

// ════════════════════════════════════════════════
// SEZIONE A — READING
// ════════════════════════════════════════════════
T('e1_t1',0,'📖 READING — Task 1 (Level A1)',
`My name is Tom. I am 13 years old and I live in London with my family. I have a mother, a father and one sister. Her name is Emma and she is 10. My father works in a hospital. He is a doctor. My mother is a teacher. She works at a primary school near our house. We have a dog called Max. On Sundays we always go to the park together.`,
'Original text for educational purposes'),

SM('e1_1',0,'reading_globale',
'What is the text about?',
["Tom's school day","Tom's family and daily life","Tom's dog Max","Tom's job"],1),

SM('e1_2',0,'reading_locale',
'How old is Tom\'s sister Emma?',
['13','12','10','8'],2),

SM('e1_3',0,'reading_locale',
'Where does Tom\'s mother work?',
['In a hospital','At a secondary school','At a primary school near their house','In London centre'],2),

SM('e1_4',0,'reading_locale',
'What does Tom\'s family do on Sundays?',
['They visit grandparents','They go to the park','They stay at home','They go shopping'],1),

SM('e1_5',0,'reading_globale',
'Which word best describes Tom\'s family?',
['Busy and stressed','Small and active','Large and quiet','Rich and famous'],1),

T('e1_t2',0,'📖 READING — Task 2 (Level A2)',
`Every year, thousands of young people in Britain do something called "volunteering". This means they give their free time to help others without getting paid. Some volunteers work with elderly people in care homes, reading books to them or just talking. Others help at local food banks, collecting food donations and giving them to families in need.

Many schools now encourage students to volunteer. Research shows that young people who volunteer feel happier and more confident. They also learn important skills like teamwork and communication. Last year, over 500 students at St. Andrew's School volunteered for at least ten hours during the school year. The school says this experience helps students understand the real world and become better citizens.`,
'Original text for educational purposes'),

SM('e1_6',0,'reading_globale',
'What is the main topic of the text?',
['How to find a job in Britain','Young people doing voluntary work','Schools in Britain','Elderly people in care homes'],1),

SM('e1_7',0,'reading_locale',
'According to the text, what do some volunteers do in care homes?',
['Cook meals for elderly people','Read books and talk to elderly people','Clean the buildings','Teach classes'],1),

SM('e1_8',0,'reading_locale',
'What does research show about young volunteers?',
['They earn a lot of money','They feel happier and more confident','They have less time to study','They become famous'],1),

SM('e1_9',0,'reading_locale',
'How many students at St. Andrew\'s School volunteered last year?',
['More than 50','More than 500','Exactly 100','Less than 200'],1),

SM('e1_10',0,'reading_locale',
'According to the text, what skills do young people learn by volunteering?',
['Cooking and cleaning','Reading and writing','Teamwork and communication','Music and sport'],2),

SM('e1_11',0,'vocabulary',
'In the text, "volunteering" means:',
['Working for a lot of money','Helping others without getting paid','Going to school every day','Joining a sports team'],1),

SM('e1_12',0,'reading_globale',
'What is the attitude of the text towards volunteering?',
['Negative — it wastes time','Neutral — it presents both sides','Positive — it shows the benefits','Worried — it is dangerous'],2),

// ════════════════════════════════════════════════
// SEZIONE B — LISTENING (testo letto dal TTS)
// ════════════════════════════════════════════════
T('e1_t3',1,'🎧 LISTENING — Task 1 (Level A1)',
`[Listen carefully. The text will be read twice.]

Hi! My name is Lucy. I go to school every day from Monday to Friday. My favourite subject is Art because I love drawing and painting. I don't like Maths very much — it's difficult! School starts at eight thirty in the morning and finishes at three thirty in the afternoon. My best friend at school is called Mia. We always eat lunch together in the school canteen. After school, I usually go home and do my homework.`,
'Listening transcript — read by text-to-speech'),

SM('e1_13',1,'listening_locale',
'What is Lucy\'s favourite subject?',
['Maths','English','Art','Science'],2),

SM('e1_14',1,'listening_locale',
'What time does school finish?',
['Three o\'clock','Three fifteen','Three thirty','Four o\'clock'],2),

SM('e1_15',1,'listening_locale',
'Who is Lucy\'s best friend?',
['Emma','Sophie','Mia','Anna'],2),

SM('e1_16',1,'listening_globale',
'What does Lucy do after school?',
['She plays football','She watches TV','She does her homework','She goes to the park'],2),

T('e1_t4',1,'🎧 LISTENING — Task 2 (Level A2)',
`[Listen carefully. The text will be read twice.]

Good morning, everyone. My name is Jake and today I want to talk about my experience at a summer language camp last July. The camp was in Wales, in the countryside. There were about sixty students from different countries — France, Germany, Spain and Italy. Every morning we had English lessons for three hours. The teachers were very friendly and used games and activities to make learning fun.

In the afternoons, we did outdoor activities like hiking, kayaking and team sports. In the evenings, we watched films in English or played board games. It was a great way to practise the language and make new friends. At the end of the camp, I could understand English much better, and I wasn't afraid to speak anymore. I would definitely recommend it to everyone.`,
'Listening transcript — read by text-to-speech'),

SM('e1_17',1,'listening_locale',
'Where was the summer camp?',
['In England','In Scotland','In Wales','In Ireland'],2),

SM('e1_18',1,'listening_locale',
'How long were the English lessons each morning?',
['One hour','Two hours','Three hours','Four hours'],2),

SM('e1_19',1,'listening_globale',
'Which of the following did students NOT do at the camp?',
['Hiking','Kayaking','Cooking classes','Team sports'],2),

SM('e1_20',1,'listening_globale',
'What was the result of the camp for Jake?',
['He learned to play music','He made no new friends','His English improved and he became more confident','He didn\'t enjoy it'],2),

SM('e1_21',1,'listening_locale',
'Students came from how many different countries?',
['Three','Four','Five','Six'],1),

SM('e1_22',1,'vocabulary',
'Jake says he "wasn\'t afraid to speak anymore". This means:',
['He stopped talking to people','He became more confident speaking English','He forgot how to speak','He only spoke Italian'],1),

]});
})();
