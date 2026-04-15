// ══════════════════════════════════════════════════════
//  PROVE INGLESE — Prova 3
//  Argomenti: Viaggi, Ambiente e natura
//  Struttura: Reading A1 + Reading A2 | Listening A1 + Listening A2
//  Durata: 90 minuti · Grado 8 · Livelli A1–A2 QCER
// ══════════════════════════════════════════════════════

window.PROVE_ENG = window.PROVE_ENG || [];

(function(){
const T  = (id,sez,tit,testo,fonte) => ({id,sez,tipo:'testo',tit,testo,fonte:fonte||''});
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops:ops,ok});

window.PROVE_ENG.push({ id:3, titolo:'Prova 3', domande:[

// ════════════════════════════════════════════════
// SEZIONE A — READING
// ════════════════════════════════════════════════
T('e3_t1',0,'📖 READING — Task 1 (Level A1)',
`Last summer, my family went on holiday to Scotland. We travelled by train from London. The journey took about five hours. We stayed in a small hotel near a lake called Loch Ness. The weather was cold and rainy, but we loved it! We went hiking in the mountains every morning. In the afternoon, we visited castles and small villages. I took a lot of photos. Scotland is beautiful and I want to go back next year.`,
'Original text for educational purposes'),

SM('e3_1',0,'reading_locale',
'How did the family travel to Scotland?',
['By car','By plane','By train','By boat'],2),

SM('e3_2',0,'reading_locale',
'How long did the journey take?',
['Three hours','Four hours','Five hours','Six hours'],2),

SM('e3_3',0,'reading_locale',
'What was the weather like in Scotland?',
['Hot and sunny','Warm and cloudy','Cold and rainy','Windy and dry'],2),

SM('e3_4',0,'reading_locale',
'What did the family do every morning?',
['Visited castles','Went hiking','Went swimming','Took photos'],1),

SM('e3_5',0,'reading_globale',
'What is the writer\'s opinion of Scotland?',
['It was disappointing','It was too cold','It was beautiful and they want to return','It was boring'],2),

T('e3_t2',0,'📖 READING — Task 2 (Level A2)',
`Climate change is one of the biggest challenges facing our planet today. Scientists agree that the Earth's temperature has risen by about 1.2 degrees Celsius since the beginning of the industrial revolution, mainly because of the burning of fossil fuels like coal and oil. The consequences are already visible: more frequent extreme weather events, rising sea levels and the disappearance of many animal and plant species.

Young people around the world are increasingly concerned about these issues. Since 2018, millions of students have joined climate strikes inspired by the Swedish activist Greta Thunberg. Many schools have introduced environmental education programmes to help students understand the problem and find solutions.

Experts agree that individual actions matter, but that real change requires decisions at the governmental and industrial level. Renewable energies like solar and wind power are growing fast, but the transition needs to happen more quickly. As the United Nations warns, we have a limited time to act — and every year counts.`,
'Original text for educational purposes'),

SM('e3_6',0,'reading_globale',
'What is the main topic of the text?',
['The history of fossil fuels','Climate change and what can be done about it','Greta Thunberg\'s life story','How schools teach science'],1),

SM('e3_7',0,'reading_locale',
'By how much has the Earth\'s temperature risen since the industrial revolution?',
['0.5 degrees','1 degree','1.2 degrees','2 degrees'],2),

SM('e3_8',0,'reading_locale',
'What year did student climate strikes begin?',
['2015','2016','2018','2020'],2),

SM('e3_9',0,'reading_locale',
'According to experts, where does real change need to happen?',
['Only in schools','Only in individuals\' lives','At governmental and industrial level','In young people\'s behaviour only'],2),

SM('e3_10',0,'reading_locale',
'Which renewable energies are mentioned in the text?',
['Nuclear and water','Solar and wind','Gas and electric','Coal and oil'],1),

SM('e3_11',0,'vocabulary',
'In the text, "transition" means:',
['A type of energy','A change from one system to another','A problem with the weather','A kind of government'],1),

SM('e3_12',0,'reading_globale',
'What is the tone of the final paragraph?',
['Optimistic — things will be fine','Humorous — climate change is not serious','Urgent — time is limited and action is needed','Angry — governments are doing nothing'],2),

// ════════════════════════════════════════════════
// SEZIONE B — LISTENING
// ════════════════════════════════════════════════
T('e3_t3',1,'🎧 LISTENING — Task 1 (Level A1)',
`[Listen carefully. The text will be read twice.]

Hi! I'm Zara. I'm going on holiday next week! I'm really excited. We're going to Rome in Italy. We're travelling by plane — the flight is only two hours. We're staying in a hotel near the Colosseum. I want to visit the Trevi Fountain and eat real Italian pizza! The weather forecast says it will be hot and sunny — about thirty degrees. I'm packing my summer clothes and sunscreen. I can't wait!`,
'Listening transcript — read by text-to-speech'),

SM('e3_13',1,'listening_locale',
'Where is Zara going on holiday?',
['To Paris','To London','To Rome','To Madrid'],2),

SM('e3_14',1,'listening_locale',
'How long is the flight?',
['One hour','Two hours','Three hours','Four hours'],1),

SM('e3_15',1,'listening_locale',
'What is the weather forecast?',
['Cold and rainy','Cloudy and windy','Hot and sunny','Warm and cloudy'],2),

SM('e3_16',1,'listening_globale',
'How does Zara feel about her holiday?',
['Nervous','Bored','Very excited','Worried'],2),

T('e3_t4',1,'🎧 LISTENING — Task 2 (Level A2)',
`[Listen carefully. The text will be read twice.]

Good afternoon. I'm Sophie, and I'm here today to tell you about our school's new Eco-Club. We started it six months ago because we were worried about the amount of plastic waste in our school. At first we had only eight members, but now we have over forty students involved.

We have done several projects. First, we persuaded the school to replace all plastic bottles in the canteen with reusable metal ones. Then we organised a "clean-up day" where students collected rubbish from the local park. We also planted twenty trees in the school garden with the help of our science teacher.

Our next project is even bigger. We want to install solar panels on the school roof. We have already applied for a local government grant and we are waiting for the answer. If we get the money, the panels will produce enough energy to power all the school's computers. I believe young people can make a real difference if they work together. Join us — everyone is welcome!`,
'Listening transcript — read by text-to-speech'),

SM('e3_17',1,'listening_locale',
'Why did Sophie and her friends start the Eco-Club?',
['They wanted to plant more trees','They were worried about plastic waste','Their teacher asked them to','They needed to do a school project'],1),

SM('e3_18',1,'listening_locale',
'How many students are now involved in the Eco-Club?',
['Eight','Twenty','Over forty','Over one hundred'],2),

SM('e3_19',1,'listening_locale',
'What did the club persuade the school to do in the canteen?',
['Stop selling food','Use metal bottles instead of plastic ones','Plant a vegetable garden','Turn off the lights'],1),

SM('e3_20',1,'listening_locale',
'What is the club\'s next big project?',
['Build a new school garden','Install solar panels on the roof','Organise another clean-up day','Create a recycling programme'],1),

SM('e3_21',1,'listening_locale',
'What do the solar panels need before being installed?',
['Permission from students','A government grant','New science teachers','More members in the club'],1),

SM('e3_22',1,'vocabulary',
'Sophie says the panels will "produce enough energy to power" the computers. What does "power" mean here?',
['To make something stronger','To supply electricity to make something work','To build something new','To clean something carefully'],1),

]});
})();
