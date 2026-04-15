// ══════════════════════════════════════════════════════
//  PROVE INGLESE — Prova 4
//  Argomenti: Tecnologia, Animali
//  Struttura: Reading A1 + Reading A2 | Listening A1 + Listening A2
//  Durata: 90 minuti · Grado 8 · Livelli A1–A2 QCER
// ══════════════════════════════════════════════════════

window.PROVE_ENG = window.PROVE_ENG || [];

(function(){
const T  = (id,sez,tit,testo,fonte) => ({id,sez,tipo:'testo',tit,testo,fonte:fonte||''});
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops:ops,ok});

window.PROVE_ENG.push({ id:4, titolo:'Prova 4', domande:[

// ════════════════════════════════════════════════
// SEZIONE A — READING
// ════════════════════════════════════════════════
T('e4_t1',0,'📖 READING — Task 1 (Level A1)',
`I have a pet rabbit called Pepper. He is white and grey with long ears. I got him for my birthday last year. Every morning I give him water and fresh vegetables — he loves carrots and broccoli! Pepper lives in a big cage in my bedroom. He is very friendly. He likes to run around the room when I let him out. My cat is not happy about Pepper, but they are learning to be friends. I love my rabbit!`,
'Original text for educational purposes'),

SM('e4_1',0,'reading_locale',
'What colour is Pepper?',
['All white','All grey','White and grey','Brown and white'],2),

SM('e4_2',0,'reading_locale',
'When did the writer get Pepper?',
['Last Christmas','Last year on their birthday','Last summer','Two years ago'],1),

SM('e4_3',0,'reading_locale',
'What does Pepper eat?',
['Dry food and water','Fresh vegetables like carrots and broccoli','Fruit only','Bread and milk'],1),

SM('e4_4',0,'reading_locale',
'Where does Pepper live?',
['In the garden','In the kitchen','In a big cage in the writer\'s bedroom','In the living room'],2),

SM('e4_5',0,'reading_globale',
'What is the writer\'s feeling towards Pepper?',
['Afraid','Bored','Loving and proud','Worried'],2),

T('e4_t2',0,'📖 READING — Task 2 (Level A2)',
`Artificial intelligence, commonly known as AI, is rapidly changing the way we live and work. From voice assistants on our phones to self-driving cars, AI systems are becoming part of our everyday lives. In education, AI tools can now mark essays, suggest personalised learning paths and even detect when a student is struggling with a topic.

Some teachers welcome these developments. They say AI can save them hours of administrative work, giving them more time to focus on teaching. However, others are worried. They fear that if students use AI to write their homework, they will not develop important thinking and writing skills.

Young people have mixed feelings too. A recent survey of two thousand European teenagers found that 65% use AI tools at least once a week for schoolwork. Most say it helps them understand difficult concepts. But 40% admitted they sometimes use it to write answers they should do themselves. Experts are calling for clear rules about how and when AI can be used in schools, to ensure that technology supports learning rather than replacing it.`,
'Original text for educational purposes'),

SM('e4_6',0,'reading_globale',
'What is the main topic of the text?',
['How to use voice assistants on phones','AI and its impact on education','The history of computers in schools','Self-driving cars in the future'],1),

SM('e4_7',0,'reading_locale',
'What can AI tools do in education, according to the text?',
['Replace teachers completely','Mark essays and suggest personalised learning','Only play educational games','Build school websites'],1),

SM('e4_8',0,'reading_locale',
'Why do some teachers welcome AI?',
['It replaces students','It makes school more fun','It saves administrative time so they can focus on teaching','It marks every exam automatically'],2),

SM('e4_9',0,'reading_locale',
'What percentage of teenagers in the survey use AI at least once a week?',
['40%','55%','65%','80%'],2),

SM('e4_10',0,'reading_locale',
'What are experts calling for?',
['Banning AI in schools completely','Clear rules about how and when AI can be used in schools','More AI tools for all students','Reducing the number of lessons'],1),

SM('e4_11',0,'vocabulary',
'In the text, "personalised" means:',
['Available for everyone in the same way','Adapted or designed for a specific individual','Very expensive and rare','Connected to the internet'],1),

SM('e4_12',0,'reading_globale',
'What does the text suggest about AI in education?',
['AI is completely negative and should be stopped','AI has no effect on students','AI can be helpful but needs clear guidelines','AI is only useful for teachers'],2),

// ════════════════════════════════════════════════
// SEZIONE B — LISTENING
// ════════════════════════════════════════════════
T('e4_t3',1,'🎧 LISTENING — Task 1 (Level A1)',
`[Listen carefully. The text will be read twice.]

Hello! I'm Liam. I want to tell you about my favourite animal — the dolphin. Dolphins live in the sea. They are very intelligent and friendly. Dolphins can jump very high out of the water — it's amazing to watch! They communicate with each other using sounds called clicks and whistles. Dolphins eat fish. They usually live in groups called pods. I saw dolphins at the aquarium last month with my school class. One day I want to be a marine biologist and study dolphins in the ocean.`,
'Listening transcript — read by text-to-speech'),

SM('e4_13',1,'listening_locale',
'Where do dolphins live?',
['In rivers only','In the sea','In lakes','In the mountains'],1),

SM('e4_14',1,'listening_locale',
'How do dolphins communicate?',
['By using colours','By moving their fins','Using clicks and whistles','By jumping out of the water'],2),

SM('e4_15',1,'listening_locale',
'What is a group of dolphins called?',
['A herd','A flock','A pod','A pack'],2),

SM('e4_16',1,'listening_globale',
'What does Liam want to be in the future?',
['A dolphin trainer','A marine biologist','A teacher','An aquarium keeper'],1),

T('e4_t4',1,'🎧 LISTENING — Task 2 (Level A2)',
`[Listen carefully. The text will be read twice.]

Hi, I'm Aisha. I'm fourteen and I'm going to tell you about my experience with coding. I started learning to code two years ago when I was twelve. My uncle showed me a free website where you can learn programming languages like Python and JavaScript. I spent my summer holidays practising for about two hours every day.

At first it was really frustrating. I made a lot of mistakes and sometimes my programs didn't work at all. But I didn't give up. I watched video tutorials and asked questions in online forums. After about three months, I built my first app — a simple quiz game about geography.

Last year, I entered a national coding competition for young people. I created an app to help students with disabilities access educational resources more easily. I came second in the competition and won a scholarship to attend a technology summer school in London. Now I help other girls in my school learn to code, because I think it's really important for young women to be part of the technology world. If I can do it, anyone can.`,
'Listening transcript — read by text-to-speech'),

SM('e4_17',1,'listening_locale',
'How old was Aisha when she started learning to code?',
['Ten','Eleven','Twelve','Thirteen'],2),

SM('e4_18',1,'listening_locale',
'How long did Aisha practise each day during her summer holidays?',
['One hour','About two hours','Three hours','All day'],1),

SM('e4_19',1,'listening_locale',
'What was Aisha\'s first app about?',
['A game about animals','A quiz about geography','A cooking programme','A language learning tool'],1),

SM('e4_20',1,'listening_locale',
'What prize did Aisha win in the national competition?',
['First place and a medal','A laptop computer','Second place and a scholarship to a technology summer school','A coding book'],2),

SM('e4_21',1,'listening_globale',
'What does Aisha do now for other girls in her school?',
['She teaches them sport','She helps them with maths','She helps them learn to code','She organises competitions'],2),

SM('e4_22',1,'vocabulary',
'Aisha says it was "frustrating" at first. This means:',
['Very exciting and enjoyable','Causing feelings of annoyance when things don\'t work','Very easy and simple','Boring and uninteresting'],1),

]});
})();
