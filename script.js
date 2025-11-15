const questions = [
  {
    question: "¿Cuál es el país más grande del mundo?",
    options: ["China", "Canadá", "Rusia", "Estados Unidos"],
    correct: 2
  },
  {
    question: "¿Cuántos planetas hay en el sistema solar?",
    options: ["7", "8", "9", "10"],
    correct: 1
  },
  {
    question: "¿Quién pintó La Mona Lisa?",
    options: ["Miguel Ángel", "Picasso", "Da Vinci", "Van Gogh"],
    correct: 2
  }
];

let index = 0;
let canAnswer = true;

function loadQuestion() {
  const q = questions[index];

  document.getElementById("question").innerText = q.question;

  const buttons = document.getElementsByClassName("option-btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = q.options[i];
    buttons[i].style.background = "#141e61";
  }

  document.getElementById("status").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  canAnswer = true;
}

function selectAnswer(i) {
  if (!canAnswer) return;

  const q = questions[index];

  const buttons = document.getElementsByClassName("option-btn");

  if (i === q.correct) {
    buttons[i].style.background = "green";
    document.getElementById("status").innerText = "¡Correcto!";
  } else {
    buttons[i].style.background = "red";
    buttons[q.correct].style.background = "green";
    document.getElementById("status").innerText = "Incorrecto";
  }

  canAnswer = false;
  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  index++;

  if (index >= questions.length) {
    document.getElementById("question").innerText = "¡Has terminado el juego!";
    document.getElementById("options").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    return;
  }

  loadQuestion();
}

loadQuestion();