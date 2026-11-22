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

// COMENTÁRIO: Variável que guarda o índice do card atual na lista (começa em 0)
let currentIndex = 0;

// COMENTÁRIO: Função que mostra o conteúdo do card conforme o item atual
function renderCard() {
  const item = flashcards[currentIndex];

  // COMENTÁRIO: Atualiza o texto do card com o termo e a definição do item atual
  termText.textContent = item.term;
  definitionText.textContent = item.definition;

  // COMENTÁRIO: Atualiza o contador para mostrar "número atual / total"
  counter.textContent = `${currentIndex + 1} / ${flashcards.length}`;
}

// COMENTÁRIO: Função para voltar um item (com "loop" no final da lista)
function prevCard() {
  currentIndex--;

  // COMENTÁRIO: Se passar do primeiro item, volta para o último
  if (currentIndex < 0) {
    currentIndex = flashcards.length - 1;
  }

  renderCard();
  card.classList.remove("flipped"); // COMENTÁRIO: volta a carta para a frente
}

// COMENTÁRIO: Função para avançar um item (com "loop" no início da lista)
function nextCard() {
  currentIndex++;

  // COMENTÁRIO: Se passar do último item, volta para o primeiro
  if (currentIndex >= flashcards.length) {
    currentIndex = 0;
  }

  renderCard();
  card.classList.remove("flipped"); // COMENTÁRIO: volta a carta para a frente
}

// COMENTÁRIO: Função que inverte a carta (frente <-> verso) ao clicar nela
function flipCard() {
  card.classList.toggle("flipped");
}

// COMENTÁRIO: Evento de clique no botão "Anterior"
btnPrev.addEventListener("click", prevCard);

// COMENTÁRIO: Evento de clique no botão "Próximo"
btnNext.addEventListener("click", nextCard);

// COMENTÁRIO: Evento de clique no card (vira o card para ver a resposta)
card.addEventListener("click", flipCard);

// COMENTÁRIO: Renderiza o primeiro card assim que a página carrega
renderCard();
