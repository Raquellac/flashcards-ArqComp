// COMENTÁRIO: Lista com os 12 itens (flashcards) que serão estudados
// --> AQUI VOCÊ VAI ESCREVER OS 12 ITENS À MÃO DEPOIS
// --> PARA CADA ITEM, ALTERE O "term" (texto na frente) e o "definition" (texto no verso)

const flashcards = [
  {
    // COMENTÁRIO: Texto do item 1 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 1",
    // COMENTÁRIO: Explicação/definição do item 1 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 1",
  },
  {
    // COMENTÁRIO: Texto do item 2 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 2",
    // COMENTÁRIO: Explicação/definição do item 2 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 2",
  },
  {
    // COMENTÁRIO: Texto do item 3 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 3",
    // COMENTÁRIO: Explicação/definição do item 3 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 3",
  },
  {
    // COMENTÁRIO: Texto do item 4 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 4",
    // COMENTÁRIO: Explicação/definição do item 4 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 4",
  },
  {
    // COMENTÁRIO: Texto do item 5 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 5",
    // COMENTÁRIO: Explicação/definição do item 5 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 5",
  },
  {
    // COMENTÁRIO: Texto do item 6 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 6",
    // COMENTÁRIO: Explicação/definição do item 6 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 6",
  },
  {
    // COMENTÁRIO: Texto do item 7 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 7",
    // COMENTÁRIO: Explicação/definição do item 7 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 7",
  },
  {
    // COMENTÁRIO: Texto do item 8 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 8",
    // COMENTÁRIO: Explicação/definição do item 8 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 8",
  },
  {
    // COMENTÁRIO: Texto do item 9 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 9",
    // COMENTÁRIO: Explicação/definição do item 9 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 9",
  },
  {
    // COMENTÁRIO: Texto do item 10 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 10",
    // COMENTÁRIO: Explicação/definição do item 10 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 10",
  },
  {
    // COMENTÁRIO: Texto do item 11 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 11",
    // COMENTÁRIO: Explicação/definição do item 11 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 11",
  },
  {
    // COMENTÁRIO: Texto do item 12 (frente do card) - ALTERAR DEPOIS
    term: "TEXTO DO ITEM 12",
    // COMENTÁRIO: Explicação/definição do item 12 (verso do card) - ALTERAR DEPOIS
    definition: "TEXTO DA EXPLICACAO DO ITEM 12",
  },
];

// COMENTÁRIO: Elementos do HTML que o JavaScript vai controlar
const card = document.getElementById("card");
const termText = document.getElementById("term-text");
const definitionText = document.getElementById("definition-text");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const counter = document.getElementById("counter");
const btnCorrect = document.getElementById("btn-correct");
const btnWrong = document.getElementById("btn-wrong");
const scoreScreen = document.getElementById("score-screen");
const scoreText = document.getElementById("score-text");
const btnRestart = document.getElementById("btn-restart");

// COMENTÁRIO: Variáveis de controle do jogo
let currentIndex = 0; // COMENTÁRIO: índice do card atual (começa em 0)
let correctCount = 0; // COMENTÁRIO: contador de acertos
let wrongCount = 0; // COMENTÁRIO: contador de erros

// COMENTÁRIO: Função que mostra o conteúdo do card conforme o item atual
function renderCard() {
  const item = flashcards[currentIndex];

  // COMENTÁRIO: Atualiza o texto do card com o termo e a definição do item atual
  termText.textContent = item.term;
  definitionText.textContent = item.definition;

  // COMENTÁRIO: Atualiza o contador para mostrar "número atual / total"
  counter.textContent = `${currentIndex + 1} / ${flashcards.length}`;
}

// COMENTÁRIO: Função para voltar um item (sem permitir voltar do primeiro para o último)
function prevCard() {
  // COMENTÁRIO: Se já está no primeiro item, não faz nada
  if (currentIndex === 0) {
    return;
  }

  currentIndex--;

  renderCard();
  card.classList.remove("flipped"); // COMENTÁRIO: volta a carta para a frente
}

// COMENTÁRIO: Função para avançar um item (sem permitir ir do último para o primeiro)
function nextCard() {
  // COMENTÁRIO: Se já está no último item, não faz nada
  if (currentIndex === flashcards.length - 1) {
    return;
  }

  currentIndex++;

  renderCard();
  card.classList.remove("flipped"); // COMENTÁRIO: volta a carta para a frente
}

// COMENTÁRIO: Função que mostra a pontuação final com o total de acertos e erros
function showScore() {
  scoreText.textContent = `Você acertou ${correctCount} de ${flashcards.length} itens!`;
  scoreScreen.classList.remove("hidden");
}

// COMENTÁRIO: Função para reiniciar o jogo
function restartGame() {
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  scoreScreen.classList.add("hidden");
  renderCard();
  card.classList.remove("flipped");
}

// COMENTÁRIO: Função que registra a resposta do usuário (true = acertou, false = errou) e avança
function handleAnswer(correct) {
  if (correct) {
    correctCount++;
  } else {
    wrongCount++;
  }

  // COMENTÁRIO: Se o usuário respondeu o último card, mostra a pontuação final
  if (currentIndex === flashcards.length - 1) {
    showScore();
  } else {
    nextCard();
  }
}

// COMENTÁRIO: Função que inverte a carta (frente <-> verso) ao clicar nela
function flipCard() {
  card.classList.toggle("flipped");
}

// COMENTÁRIO: Evento de clique no botão "Anterior"
btnPrev.addEventListener("click", prevCard);

// COMENTÁRIO: Evento de clique no botão "Próximo"
btnNext.addEventListener("click", nextCard);

// COMENTÁRIO: Evento de clique no botão "Acertou" (registra acerto e avança)
btnCorrect.addEventListener("click", () => handleAnswer(true));

// COMENTÁRIO: Evento de clique no botão "Errou" (registra erro e avança)
btnWrong.addEventListener("click", () => handleAnswer(false));

// COMENTÁRIO: Evento de clique no card (vira o card para ver a resposta)
card.addEventListener("click", flipCard);

// COMENTÁRIO: Evento de clique no botão "Reiniciar"
btnRestart.addEventListener("click", restartGame);

// COMENTÁRIO: Renderiza o primeiro card assim que a página carrega
renderCard();
