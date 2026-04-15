// ══════════════════════════════════════════════════════
//  PROVE INGLESE — Prova 5
//  Argomenti: Tradizioni e feste, Salute e benessere
//  Struttura: Reading A1 + Reading A2 | Listening A1 + Listening A2
//  Durata: 90 minuti · Grado 8 · Livelli A1–A2 QCER
// ══════════════════════════════════════════════════════

window.PROVE_ENG = window.PROVE_ENG || [];

(function(){
const T  = (id,sez,tit,testo,fonte) => ({id,sez,tipo:'testo',tit,testo,fonte:fonte||''});
const SM = (id,sez,comp,testo,ops,ok) => ({id,sez,tipo:'sm',comp,testo,ops:ops,ok});

window.PROVE_ENG.push({ id:5, titolo:'Prova 5', domande:[

// ════════════════════════════════════════════════
// SEZIONE A — READING
// ════════════════════════════════════════════════
T('e5_t1',0,'📖 READING — Task 1 (Level A1)',
`In Britain, Bonfire Night is celebrated on the 5th of November every year. People light big bonfires and watch fireworks in the sky. Children eat toffee apples and hot soup to keep warm. The tradition started over four hundred years ago when a man called Guy Fawkes tried to blow up the Houses of Parliament. He did not succeed. Some people put a model of Guy Fawkes on the bonfire. It is a very popular festival and families go to the park together to enjoy the fireworks.`,
'Original text for educational purposes'),

SM('e5_1',0,'reading_locale',
'When is Bonfire Night celebrated?',
['31st October','5th November','25th December','1st January'],1),

SM('e5_2',0,'reading_locale',
'What did Guy Fawkes try to do?',
['Start a fire in London','Blow up the Houses of Parliament','Celebrate a festival','Win a competition'],1),

SM('e5_3',0,'reading_locale',
'What do children eat on Bonfire Night?',
['Pizza and chips','Toffee apples and hot soup','Cakes and biscuits','Sandwiches and juice'],1),

SM('e5_4',0,'reading_locale',
'How long ago did the tradition start?',
['About two hundred years ago','About three hundred years ago','Over four hundred years ago','Over five hundred years ago'],2),

SM('e5_5',0,'reading_globale',
'What kind of text is this?',
['A story about a real person','A description of a British tradition','An advertisement for a festival','A school timetable'],1),

T('e5_t2',0,'📖 READING — Task 2 (Level A2)',
`Sleep is one of the most important factors for good physical and mental health, yet many teenagers do not get enough of it. Doctors recommend that young people between the ages of 13 and 18 sleep between eight and ten hours per night. However, a large international study found that over 70% of teenagers regularly sleep less than eight hours.

The reasons are complex. Many young people spend hours on social media and video streaming services late at night, making it harder to fall asleep. Additionally, some researchers argue that school start times — often before eight o'clock in the morning — are not suitable for teenage biology. Studies show that during puberty, the body's internal clock shifts, making teenagers naturally want to sleep later and wake up later.

The consequences of poor sleep are serious: reduced concentration, lower academic performance, increased risk of anxiety and depression. Some schools in the United States have already experimented with later start times, reporting positive results in student performance and wellbeing. Experts believe it is time for a wider conversation about how society can better support teenagers' sleep needs.`,
'Original text for educational purposes'),

SM('e5_6',0,'reading_globale',
'What is the main topic of the text?',
['How to fall asleep quickly','The importance of sleep for teenagers and related problems','Social media and its dangers','School timetables in the USA'],1),

SM('e5_7',0,'reading_locale',
'How many hours of sleep do doctors recommend for teenagers?',
['Six to eight hours','Seven to nine hours','Eight to ten hours','Nine to eleven hours'],2),

SM('e5_8',0,'reading_locale',
'What percentage of teenagers sleep less than eight hours per night?',
['More than 50%','More than 70%','About 40%','Less than 30%'],1),

SM('e5_9',0,'reading_locale',
'What do researchers say about teenage biology during puberty?',
['Teenagers need less sleep than adults','Teenagers\' internal clock shifts, making them want to sleep and wake later','Teenagers sleep too much naturally','School times are perfect for teenagers'],1),

SM('e5_10',0,'reading_locale',
'What have some schools in the USA done?',
['Banned smartphones in school','Introduced longer holidays','Experimented with later start times','Reduced the number of lessons'],2),

SM('e5_11',0,'vocabulary',
'In the text, "wellbeing" means:',
['Academic success only','The state of being healthy, comfortable and happy','Physical fitness and sport','A specific medical treatment'],1),

SM('e5_12',0,'reading_globale',
'Which statement best describes the writer\'s view?',
['Teenagers are lazy and should go to bed earlier','Sleep is not really important for teenagers','Society needs to take teenagers\' sleep needs more seriously','Social media should be completely banned for young people'],2),

// ════════════════════════════════════════════════
// SEZIONE B — LISTENING
// ════════════════════════════════════════════════
T('e5_t3',1,'🎧 LISTENING — Task 1 (Level A1)',
`[Listen carefully. The text will be read twice.]

Hi! My name is Fatima. I want to tell you about Eid, which is one of the most important celebrations in Islam. Eid al-Fitr comes at the end of Ramadan, which is a month of fasting. On Eid day, we wake up very early and put on new clothes. Then we go to the mosque to pray with our community. After that, we visit family and friends. We give money to children as gifts. We eat delicious food — my favourite is a sweet dish called baklava. It is a happy day for everyone in my family.`,
'Listening transcript — read by text-to-speech'),

SM('e5_13',1,'listening_locale',
'When does Eid al-Fitr take place?',
['At the beginning of Ramadan','During Ramadan','At the end of Ramadan','One month after Ramadan'],2),

SM('e5_14',1,'listening_locale',
'What do people wear on Eid day?',
['Traditional costumes from the past','Their school uniform','New clothes','Sports clothes'],2),

SM('e5_15',1,'listening_locale',
'What is given to children as gifts on Eid?',
['Sweets','New clothes','Money','Books'],2),

SM('e5_16',1,'listening_globale',
'What is Fatima\'s general feeling about Eid?',
['It is tiring and difficult','It is a very happy celebration','It is too long and boring','It is only for adults'],1),

T('e5_t4',1,'🎧 LISTENING — Task 2 (Level A2)',
`[Listen carefully. The text will be read twice.]

Welcome back to Teen Talk, the podcast about issues that matter to young people. Today I'm interviewing Oliver, who is fifteen and has recently become a mental health ambassador at his school. Oliver, what does that actually mean?

Well, it means I'm trained to listen to other students who might be going through a difficult time. I learned to recognise signs of stress and anxiety, and I know how to direct people to professional support if they need it. I did a two-day training course last autumn, organised by a mental health charity.

What made you want to do this?

Honestly, I went through a really tough period last year — exam pressure, problems at home. I felt I couldn't talk to anyone. Luckily, a teacher noticed and helped me get support. That experience made me want to help others in the same situation.

Has it been difficult?

Sometimes yes. It's not easy to hear that a friend is struggling. But we are not counsellors — we just listen and point them in the right direction. The school has also introduced a weekly wellbeing session during form time, where we talk about stress management and healthy habits. The feedback from students has been really positive. Mental health is just as important as physical health, and I think more schools should take it seriously.`,
'Listening transcript — read by text-to-speech'),

SM('e5_17',1,'listening_locale',
'What is Oliver\'s role at school?',
['He is a sports teacher','He is a mental health ambassador','He is the headteacher\'s assistant','He organises school events'],1),

SM('e5_18',1,'listening_locale',
'How long was Oliver\'s training course?',
['One day','Two days','One week','Two weeks'],1),

SM('e5_19',1,'listening_locale',
'What personal experience motivated Oliver to become an ambassador?',
['He was bullied at school','He failed all his exams','He went through a tough period with exam pressure and home problems','He wanted to be a doctor'],2),

SM('e5_20',1,'listening_locale',
'What has the school introduced to support students?',
['A daily exercise programme','A weekly wellbeing session during form time','A special counselling room','Extra lessons in health science'],1),

SM('e5_21',1,'listening_globale',
'What does Oliver say about mental health?',
['It is less important than physical health','Only doctors can help with mental health problems','It is just as important as physical health and more schools should take it seriously','Young people should not talk about their problems'],2),

SM('e5_22',1,'vocabulary',
'Oliver says students "go through a difficult time". This expression means:',
['They travel somewhere far away','They experience a hard or challenging period in their life','They fail an important exam','They argue with their teachers'],1),

]});
})();
