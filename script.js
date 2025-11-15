// Preguntas iniciales (20) - puedes editar o ampliar
const questions = [
  {question:"¿Cuál es el océano más grande del mundo?", options:["Océano Índico","Océano Pacífico","Océano Atlántico","Océano Ártico"], correct:1},
  {question:"¿Cuál es la capital de Francia?", options:["Roma","París","Madrid","Berlín"], correct:1},
  {question:"¿Cuántos continentes hay en la Tierra?", options:["5","6","7","8"], correct:2},
  {question:"¿Quién pintó La Mona Lisa?", options:["Miguel Ángel","Picasso","Da Vinci","Van Gogh"], correct:2},
  {question:"¿Cuál es la fórmula química del agua?", options:["H2O","CO2","O2","NaCl"], correct:0},
  {question:"¿Qué planeta es conocido como el planeta rojo?", options:["Venus","Marte","Júpiter","Saturno"], correct:1},
  {question:"¿En qué año llegó el hombre a la Luna por primera vez?", options:["1965","1969","1972","1959"], correct:1},
  {question:"¿Cuál es el idioma con más hablantes nativos?", options:["Inglés","Chino mandarín","Español","Hindi"], correct:1},
  {question:"¿Qué instrumento tiene teclas, cuerdas y pedales?", options:["Guitarra","Piano","Violín","Trompeta"], correct:1},
  {question:"¿Quién escribió 'Cien años de soledad'?", options:["Mario Vargas Llosa","Jorge Luis Borges","Gabriel García Márquez","Pablo Neruda"], correct:2},
  {question:"¿Cuál es la capital de Japón?", options:["Seúl","Beijing","Tokio","Bangkok"], correct:2},
  {question:"¿Qué gas respiran las plantas en la fotosíntesis?", options:["Oxígeno","Nitrógeno","Dióxido de carbono","Helio"], correct:2},
  {question:"¿Cuál es la moneda oficial del Reino Unido?", options:["Euro","Libra esterlina","Dólar","Franco"], correct:1},
  {question:"¿Cuál es el metal líquido a temperatura ambiente?", options:["Hierro","Mercurio","Plata","Oro"], correct:1},
  {question:"¿Quién formuló la ley de la gravitación universal?", options:["Einstein","Newton","Galileo","Bohr"], correct:1},
  {question:"¿Cuál es la ciudad más poblada del mundo aproximadamente?", options:["Tokio","Delhi","Shanghai","Sao Paulo"], correct:0},
  {question:"¿Qué elemento tiene el símbolo 'O'?", options:["Oro","Oxígeno","Osmio","Obsidiana"], correct:1},
  {question:"¿En qué continente está Egipto?", options:["África","Asia","Europa","Oceanía"], correct:0},
  {question:"¿Qué movimiento artístico pertenece a van Gogh?", options:["Impresionismo","Cubismo","Postimpresionismo","Barroco"], correct:2},
  {question:"¿Cuál es el animal terrestre más rápido?", options:["León","Tigre","Guepardo","Leopardo"], correct:2}
];

const moneySteps = [
  "1.500.000.000","1.000.000.000","500.000.000","250.000.000","150.000.000",
  "100.000.000","50.000.000","10.000.000","7.000.000","5.000.000","3.000.000","1.000.000","500.000","250.000","100.000"
];

let index = 0;
let canAnswer = true;
let usedFifty = false;
let usedCall = false;
let usedAud = false;

const qText = document.getElementById('questionText');
const optionsEl = document.getElementById('options');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');

function renderMoney() {
  const ul = document.getElementById('moneyList');
  ul.innerHTML = '';
  for(let i=0;i<moneySteps.length;i++){
    const li = document.createElement('li');
    const stepIdx = moneySteps.length - i -1;
    li.innerHTML = `<span>${i+1}</span><strong>${moneySteps[stepIdx]}</strong>`;
    if(stepIdx === index) li.classList.add('current');
    ul.appendChild(li);
  }
}

function loadQuestion(){
  const q = questions[index];
  qText.innerText = q.question;
  const btns = Array.from(document.getElementsByClassName('opt'));
  btns.forEach((b,i)=>{
    b.disabled = false;
    b.style.background = ''; // reset
    b.style.display = '';
    b.querySelector('.opt-text').innerText = q.options[i];
  });
  feedback.innerText = '';
  nextBtn.style.display = 'none';
  canAnswer = true;
  renderMoney();
}

function selectAnswer(i){
  if(!canAnswer) return;
  const q = questions[index];
  const btns = Array.from(document.getElementsByClassName('opt'));
  canAnswer = false;

  if(i === q.correct){
    btns[i].style.background = 'linear-gradient(90deg,#28a745,#18d08a)';
    feedback.innerText = '¡Correcto!';
  } else {
    btns[i].style.background = 'linear-gradient(90deg,#dc3545,#ff6b6b)';
    btns[q.correct].style.background = 'linear-gradient(90deg,#28a745,#18d08a)';
    feedback.innerText = 'Incorrecto';
  }

  btns.forEach(b => b.disabled = true);
  nextBtn.style.display = 'inline-block';
}

function nextQuestion(){
  index++;
  if(index >= questions.length){
    qText.innerText = '¡Has terminado el juego! Felicitaciones';
    optionsEl.style.display = 'none';
    feedback.innerText = '';
    nextBtn.style.display = 'none';
    renderMoney();
    return;
  }
  loadQuestion();
}

// Lifelines
document.getElementById('fiftyBtn').addEventListener('click', ()=>{
  if(usedFifty) return;
  usedFifty = true;
  const q = questions[index];
  const btns = Array.from(document.getElementsByClassName('opt'));
  let wrongIndexes = [0,1,2,3].filter(i=> i!== q.correct);
  wrongIndexes = wrongIndexes.sort(()=>0.5 - Math.random()).slice(0,2);
  wrongIndexes.forEach(i => { btns[i].style.display = 'none'; });
  document.getElementById('fiftyBtn').disabled = true;
});

document.getElementById('callBtn').addEventListener('click', ()=>{
  if(usedCall) return;
  usedCall = true;
  document.getElementById('callBtn').disabled = true;
  const q = questions[index];
  const chance = Math.random();
  let suggestion;
  if(chance < 0.8) suggestion = q.correct;
  else suggestion = [0,1,2,3].filter(i=> i!== q.correct)[Math.floor(Math.random()*3)];
  alert('Amigo sugiere la opción: ' + ['A','B','C','D'][suggestion]);
});

document.getElementById('audBtn').addEventListener('click', ()=>{
  if(usedAud) return;
  usedAud = true;
  document.getElementById('audBtn').disabled = true;
  const q = questions[index];
  let percentages = [10,10,10,10];
  let major = Math.floor(Math.random()*30)+50;
  percentages[q.correct] = major;
  let remaining = 100 - major;
  const others = [0,1,2,3].filter(i=> i!== q.correct);
  for(let i=0;i<others.length;i++){
    const val = i < others.length-1 ? Math.floor(Math.random() * (remaining/(others.length-i))*1.0) : remaining;
    percentages[others[i]] = val;
    remaining -= val;
  }
  alert('Resultados del público:\nA: ' + percentages[0] + '%\nB: ' + percentages[1] + '%\nC: ' + percentages[2] + '%\nD: ' + percentages[3] + '%');
});

// Add question
document.getElementById('addQuestionBtn').addEventListener('click', ()=>{
  const q = prompt('Texto de la pregunta:');
  if(!q) return;
  const a = prompt('Opción A:');
  const b = prompt('Opción B:');
  const c = prompt('Opción C:');
  const d = prompt('Opción D:');
  const correct = prompt('Letra correcta (A/B/C/D):');
  const map = {'A':0,'B':1,'C':2,'D':3,'a':0,'b':1,'c':2,'d':3};
  const corrIndex = map[correct] ?? 0;
  questions.push({question:q, options:[a,b,c,d], correct:corrIndex});
  alert('Pregunta agregada. Usa Siguiente para avanzar.');
});

// init
(function init(){
  const btns = Array.from(document.getElementsByClassName('opt'));
  btns.forEach((b,i)=>{ if(!b.querySelector('.opt-text').innerText) b.querySelector('.opt-text').innerText = ''; });
  renderMoney();
  loadQuestion();
})();
