// Preguntas por defecto (puedes agregar más con el botón "Agregar pregunta")
const questions = [
  {
    question: "¿Cuál es el océano más grande del mundo?",
    options: ["Océano Índico", "Océano Pacífico", "Océano Atlántico", "Océano Ártico"],
    correct: 1
  },
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["Roma","París","Madrid","Berlín"],
    correct: 1
  }
];

const moneySteps = [
  "150.000.000","100.000.000","50.000.000","10.000.000","7.000.000",
  "5.000.000","3.000.000","1.000.000","500.000","250.000","100.000"
]; // orden visual ascendente (ajusta según prefieras)

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
    b.querySelector('.opt-text').innerText = q.options[i];
    b.style.display = ''; // ensure visible
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

  // strip extra whitespace issues by comparing index
  if(i === q.correct){
    btns[i].style.background = 'linear-gradient(90deg,#28a745,#18d08a)';
    feedback.innerText = '¡Correcto!';
  } else {
    btns[i].style.background = 'linear-gradient(90deg,#dc3545,#ff6b6b)';
    btns[q.correct].style.background = 'linear-gradient(90deg,#28a745,#18d08a)';
    feedback.innerText = 'Incorrecto';
  }

  // disable buttons
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
  // hide two wrong answers
  let wrongIndexes = [0,1,2,3].filter(i=> i!== q.correct);
  // random remove 2 of wrongIndexes
  wrongIndexes = wrongIndexes.sort(()=>0.5 - Math.random()).slice(0,2);
  wrongIndexes.forEach(i => {
    btns[i].style.display = 'none';
  });
  document.getElementById('fiftyBtn').disabled = true;
});

document.getElementById('callBtn').addEventListener('click', ()=>{
  if(usedCall) return;
  usedCall = true;
  document.getElementById('callBtn').disabled = true;
  // Simulate friend suggestion (80% correct)
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
  // create percentages with majority to correct
  let percentages = [10,10,10,10];
  let major = Math.floor(Math.random()*30)+50; // between 50 and 80
  percentages[q.correct] = major;
  // distribute remaining
  let remaining = 100 - major;
  const others = [0,1,2,3].filter(i=> i!== q.correct);
  for(let i=0;i<others.length;i++){
    const val = i < others.length-1 ? Math.floor(Math.random() * (remaining/(others.length-i))*1.0) : remaining;
    percentages[others[i]] = val;
    remaining -= val;
  }
  alert('Resultados del público:\nA: ' + percentages[0] + '%\nB: ' + percentages[1] + '%\nC: ' + percentages[2] + '%\nD: ' + percentages[3] + '%');
});

// Add question flow
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
  alert('Pregunta agregada. Avanza con Siguiente para probarla.');
});

// initialize options text nodes
(function init(){
  const btns = Array.from(document.getElementsByClassName('opt'));
  btns.forEach((b, i)=>{
    // ensure inner span for text exists (HTML built accordingly)
    if(!b.querySelector('.opt-text').innerText) b.querySelector('.opt-text').innerText = '';
  });
  renderMoney();
  loadQuestion();
})();
