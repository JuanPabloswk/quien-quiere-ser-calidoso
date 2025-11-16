let questionIndex = 0; // Índice para las preguntas
let canAnswer = true;
let usedFifty = false;
let usedCall = false;
let usedAud = false;
let lastAnswerCorrect = false;
let timerInterval = null;
let timeLeft = 30;
let accumulatedPoints = 0; // Puntos acumulados
let gameStarted = false; // Indica si el juego ya ha comenzado

const qText = document.getElementById('questionText');
const optionsEl = document.getElementById('options');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const relojSound = document.getElementById('relojSound'); // Audio del reloj
const aciertoSound = document.getElementById('aciertoSound'); // Audio de acierto
const errorSound = document.getElementById('errorSound'); // Audio de error

function renderMoney() {
  const pointsDisplay = document.getElementById('pointsDisplay');
  if (pointsDisplay) {
    pointsDisplay.textContent = accumulatedPoints + ' puntos';
  }
}

function startTimer() {
  // Detener cualquier temporizador existente
  stopTimer();
  
  timeLeft = 30;
  const timerBar = document.getElementById('timerBar');
  timerBar.style.width = '100%';
  
  // Reproducir el audio del reloj si está cargado
  if (relojSound) {
    relojSound.loop = true;
    relojSound.play().catch(e => console.log('Error al reproducir audio:', e));
  }
  
  timerInterval = setInterval(() => {
    timeLeft--;
    const percentage = (timeLeft / 30) * 100;
    timerBar.style.width = percentage + '%';
    
    // Cambiar color cuando queda poco tiempo
    if (timeLeft <= 10) {
      timerBar.style.background = 'linear-gradient(90deg,#dc3545,#ff6b6b)';
    } else {
      timerBar.style.background = 'linear-gradient(90deg,#2e6bd5,#1b9bd4)';
    }
    
    if (timeLeft <= 0) {
      stopTimer();
      // El usuario pierde por tiempo
      canAnswer = false;
      const btns = Array.from(document.getElementsByClassName('opt'));
      btns.forEach(b => b.disabled = true);
      feedback.innerText = '¡Se acabó el tiempo!';
      
      // Reproducir sonido de error
      if (errorSound) {
        errorSound.currentTime = 0; // Reiniciar el audio al inicio
        errorSound.play().catch(e => console.log('Error al reproducir audio de error:', e));
      }
      
      resetGame();
      setTimeout(() => {
        showLoseModal();
      }, 1500);
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  // Detener el audio del reloj
  if (relojSound) {
    relojSound.pause();
    relojSound.currentTime = 0;
  }
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  // Pausar el audio del reloj
  if (relojSound) {
    relojSound.pause();
  }
  // El tiempo restante ya está guardado en timeLeft
}

function resumeTimer() {
  // Solo reanudar si hay tiempo restante y no hay un intervalo activo
  if (!timerInterval && timeLeft > 0 && canAnswer) {
    const timerBar = document.getElementById('timerBar');
    
    // Actualizar la barra visual con el tiempo restante
    const percentage = (timeLeft / 30) * 100;
    timerBar.style.width = percentage + '%';
    
    // Cambiar color cuando queda poco tiempo
    if (timeLeft <= 10) {
      timerBar.style.background = 'linear-gradient(90deg,#dc3545,#ff6b6b)';
    } else {
      timerBar.style.background = 'linear-gradient(90deg,#2e6bd5,#1b9bd4)';
    }
    
    // Reanudar el audio del reloj
    if (relojSound) {
      relojSound.play().catch(e => console.log('Error al reproducir audio:', e));
    }
    
    timerInterval = setInterval(() => {
      timeLeft--;
      const percentage = (timeLeft / 30) * 100;
      timerBar.style.width = percentage + '%';
      
      // Cambiar color cuando queda poco tiempo
      if (timeLeft <= 10) {
        timerBar.style.background = 'linear-gradient(90deg,#dc3545,#ff6b6b)';
      } else {
        timerBar.style.background = 'linear-gradient(90deg,#2e6bd5,#1b9bd4)';
      }
      
      if (timeLeft <= 0) {
        stopTimer();
        // El usuario pierde por tiempo
        canAnswer = false;
        const btns = Array.from(document.getElementsByClassName('opt'));
        btns.forEach(b => b.disabled = true);
        feedback.innerText = '¡Se acabó el tiempo!';
        
        resetGame();
        setTimeout(() => {
          showLoseModal();
        }, 1500);
      }
    }, 1000);
  }
}

function loadQuestion(){
  const q = questions[questionIndex];
  qText.innerText = q.question;
  // Resetear el color del texto de la pregunta
  qText.style.color = '';
  const btns = Array.from(document.getElementsByClassName('opt'));
  btns.forEach((b,i)=>{
    // Limpiar todos los estilos
    b.style.background = '';
    b.style.display = '';
    b.querySelector('.opt-text').innerText = q.options[i];
    
    // Solo deshabilitar si el juego no ha comenzado
    if (!gameStarted) {
      b.disabled = true;
      canAnswer = false;
    } else {
      b.disabled = false;
      canAnswer = true;
      // Si el juego ya comenzó, iniciar el temporizador automáticamente
      startTimer();
    }
  });
  feedback.innerText = '';
  nextBtn.style.display = 'none';
  renderMoney();
}

function selectAnswer(i){
  if(!canAnswer) return;
  
  // Detener el temporizador cuando se responde
  stopTimer();
  
  const q = questions[questionIndex];
  const btns = Array.from(document.getElementsByClassName('opt'));
  canAnswer = false;

  if(i === q.correct){
    btns[i].style.background = 'linear-gradient(90deg,#28a745,#18d08a)';
    feedback.innerText = '¡Correcto!';
    lastAnswerCorrect = true;
    
    // Reproducir sonido de acierto
    if (aciertoSound) {
      aciertoSound.currentTime = 0; // Reiniciar el audio al inicio
      aciertoSound.play().catch(e => console.log('Error al reproducir audio de acierto:', e));
    }
    
    // Sumar 2 puntos por cada respuesta correcta
    accumulatedPoints += 2;
    renderMoney();
    
    btns.forEach(b => b.disabled = true);
    nextBtn.style.display = 'inline-block';
  } else {
    btns[i].style.background = 'linear-gradient(90deg,#dc3545,#ff6b6b)';
    // No mostrar la respuesta correcta cuando se responde incorrectamente
    feedback.innerText = 'Incorrecto';
    lastAnswerCorrect = false;
    btns.forEach(b => b.disabled = true);
    
    // Reproducir sonido de error
    if (errorSound) {
      errorSound.currentTime = 0; // Reiniciar el audio al inicio
      errorSound.play().catch(e => console.log('Error al reproducir audio de error:', e));
    }
    
    // Mostrar modal después de un breve delay para que se vea la respuesta incorrecta
    // NO llamar a resetGame() aquí, se llamará cuando se cierre el modal
    setTimeout(() => {
      showLoseModal();
    }, 1500);
  }
}

function resetGame() {
  // Detener el temporizador
  stopTimer();
  
  // Marcar que el juego no ha comenzado
  gameStarted = false;
  
  // Reiniciar el índice de preguntas
  questionIndex = 0;
  
  // Reiniciar puntos acumulados
  accumulatedPoints = 0;
  
  // Reiniciar las ayudas
  usedFifty = false;
  usedCall = false;
  usedAud = false;
  
  // Habilitar los botones de ayuda
  document.getElementById('fiftyBtn').disabled = false;
  document.getElementById('callBtn').disabled = false;
  document.getElementById('audBtn').disabled = false;
  
  // Mostrar las opciones si estaban ocultas
  optionsEl.style.display = '';
  
  // Limpiar todos los estilos de los botones
  const btns = Array.from(document.getElementsByClassName('opt'));
  btns.forEach(b => {
    b.style.background = '';
    b.style.display = '';
    b.disabled = true;
  });
  canAnswer = false;
  
  // Limpiar el feedback
  feedback.innerText = '';
  
  // Resetear el color del texto de la pregunta
  qText.style.color = '';
  
  // Actualizar la visualización de puntos
  renderMoney();
  
  // Cargar la pregunta para resetear todo
  loadQuestion();
  
  // NO mostrar el modal de reglas aquí, se mostrará después de cerrar el modal de perder
}

function showLoseModal() {
  const modal = document.getElementById('loseModal');
  modal.style.display = 'flex';
}

function hideLoseModal() {
  const modal = document.getElementById('loseModal');
  modal.style.display = 'none';
  // Reiniciar el juego cuando se cierra el modal de perder
  resetGame();
  // Mostrar el modal de reglas después de cerrar el modal de perder
  showRulesModal();
}

function showRulesModal() {
  const modal = document.getElementById('rulesModal');
  modal.style.display = 'flex';
}

function hideRulesModal() {
  const modal = document.getElementById('rulesModal');
  modal.style.display = 'none';
}

function showCallModal() {
  // Pausar el temporizador cuando se abre el modal
  pauseTimer();
  const modal = document.getElementById('callModal');
  modal.style.display = 'flex';
}

function hideCallModal() {
  const modal = document.getElementById('callModal');
  modal.style.display = 'none';
  // Reanudar el temporizador cuando se cierra el modal
  resumeTimer();
}

function showAudienceModal() {
  // Pausar el temporizador cuando se abre el modal
  pauseTimer();
  const modal = document.getElementById('audienceModal');
  modal.style.display = 'flex';
}

function hideAudienceModal() {
  const modal = document.getElementById('audienceModal');
  modal.style.display = 'none';
  // Reanudar el temporizador cuando se cierra el modal
  resumeTimer();
}

function nextQuestion(){
  // Solo avanza el índice de preguntas si la respuesta fue correcta
  if(lastAnswerCorrect){
    questionIndex++;
  }
  
  if(questionIndex >= questions.length){
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
  const q = questions[questionIndex];
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
  
  // Mostrar modal sin sugerencia
  showCallModal();
});

document.getElementById('audBtn').addEventListener('click', ()=>{
  if(usedAud) return;
  usedAud = true;
  document.getElementById('audBtn').disabled = true;
  
  // Mostrar modal sin resultados
  showAudienceModal();
});

// Botón de reiniciar en el modal
document.getElementById('restartBtn').addEventListener('click', ()=>{
  hideLoseModal();
});

// Botones para cerrar modales de ayudas
document.getElementById('closeCallBtn').addEventListener('click', ()=>{
  hideCallModal();
});

document.getElementById('closeAudienceBtn').addEventListener('click', ()=>{
  hideAudienceModal();
});

// Botón de iniciar en el modal de reglas
document.getElementById('startGameBtn').addEventListener('click', ()=>{
  // Cerrar el modal de reglas
  hideRulesModal();
  
  // Marcar que el juego ha comenzado
  gameStarted = true;
  
  // Iniciar el temporizador
  startTimer();
  
  // Habilitar las opciones
  const btns = Array.from(document.getElementsByClassName('opt'));
  btns.forEach(b => b.disabled = false);
  
  // Permitir responder
  canAnswer = true;
});

// init
(function init(){
  const btns = Array.from(document.getElementsByClassName('opt'));
  btns.forEach((b,i)=>{ if(!b.querySelector('.opt-text').innerText) b.querySelector('.opt-text').innerText = ''; });
  renderMoney();
  loadQuestion();
  // Mostrar el modal de reglas al inicio
  showRulesModal();
})();
