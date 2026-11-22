// COMENTÁRIO: Lista com os 12 itens (flashcards) que serão estudados
// --> AQUI VOCÊ VAI ESCREVER OS 12 ITENS À MÃO DEPOIS
// --> PARA CADA ITEM, ALTERE O "term" (texto na frente) e o "definition" (texto no verso)

const flashcards = [
  {
    // COMENTÁRIO: Texto do item 1 (frente do card) - ALTERAR DEPOIS
    term: "O que é a CPU?",
    // COMENTÁRIO: Explicação/definição do item 1 (verso do card) - ALTERAR DEPOIS
    definition: "É o componente formado pela ULA, UC e os Registradores. Ela é o principal componente responsável pela execução das instruções do computador.",
  },
  {
    // COMENTÁRIO: Texto do item 2 (frente do card) - ALTERAR DEPOIS
    term: "Qual a diferença de um microprocessador e um microcontrolador?",
    // COMENTÁRIO: Explicação/definição do item 2 (verso do card) - ALTERAR DEPOIS
    definition: "O microprocessador é uma CPU construída em um único chip, mas que sozinho não funciona, por mais que seja capaz de processar os dados, ela não tem como realizar o armazenamento dos mesmos, por exemplo. O microcontrolador, por sua vez, reúne não somente a CPU, mas também a memória e os circuitos de entrada e saída. Ele é como um computador completo que tem como objetivo realizar uma tarefa específica, como ler um sensor (que é o caso do Arduino Uno R3).",
  },
  {
    // COMENTÁRIO: Texto do item 3 (frente do card) - ALTERAR DEPOIS
    term: "O que é UC?",
    // COMENTÁRIO: Explicação/definição do item 3 (verso do card) - ALTERAR DEPOIS
    definition: "É a Unidade de Controle, responsável por ler as instruções e identificar o que deve ser feito e, depois disso, distribuiu as responsabilidades do que precisa ser feito.",
  },
  {
    // COMENTÁRIO: Texto do item 4 (frente do card) - ALTERAR DEPOIS
    term: "O que são os registradores?",
    // COMENTÁRIO: Explicação/definição do item 4 (verso do card) - ALTERAR DEPOIS
    definition: "São um tipo de memória bem pequena que fica dentro da CPU. Ela é a memória mais rápida do computador por conta da sua proximidade com a ULA (Unidade Lógica de Processamento). Ela fica responsável por guardar o dado que está sendo utilizado no momento.",
  },
  {
    // COMENTÁRIO: Texto do item 5 (frente do card) - ALTERAR DEPOIS
    term: "O que é ROM?",
    // COMENTÁRIO: Explicação/definição do item 5 (verso do card) - ALTERAR DEPOIS
    definition: "É um tipo de memória não volátil, responsável por armazenar itens indispensáveis para que o equipamento seja capaz de inicializar seu funcionamento. Por exemplo: a BIOS (firmware de inicialização). Seus dados, por usa vez, não são modificáveis.",
  },
  {
    // COMENTÁRIO: Texto do item 6 (frente do card) - ALTERAR DEPOIS
    term: "O que é EEPROM?",
    // COMENTÁRIO: Explicação/definição do item 6 (verso do card) - ALTERAR DEPOIS
    definition: "É um tipo de memória parecida com a Flash, também sendo não volátil, mas que permite apagar pequenas unidades de dados. Ela é encontrada dentro de microcontroladores e quaisquer dispositivos eletrônicos que precisam guarda configurações.",
  },
  {
    // COMENTÁRIO: Texto do item 7 (frente do card) - ALTERAR DEPOIS
    term: "O que é data bus?",
    // COMENTÁRIO: Explicação/definição do item 7 (verso do card) - ALTERAR DEPOIS
    definition: "O barramento de dados é o meio pelo qual os dados se movem dentro do computador.",
  },
  {
    // COMENTÁRIO: Texto do item 8 (frente do card) - ALTERAR DEPOIS
    term: "O que é o tipo de memória cache e o que ela faz?",
    // COMENTÁRIO: Explicação/definição do item 8 (verso do card) - ALTERAR DEPOIS
    definition: "Uma pequena memória, muito rápida, que fica dentro do processador auxiliando no armazenamento volátil de dados e instruções que a CPU usou recentemente. Ela facilita o processo pois assim não é preciso buscar essas informações na memória RAM.",
  },
  {
    // COMENTÁRIO: Texto do item 9 (frente do card) - ALTERAR DEPOIS
    term: "O que é DMA?",
    // COMENTÁRIO: Explicação/definição do item 9 (verso do card) - ALTERAR DEPOIS
    definition: "É um recurso que possibilita a transferência de dados com a memória RAM de forma direta.",
  },
  {
    // COMENTÁRIO: Texto do item 10 (frente do card) - ALTERAR DEPOIS
    term: "O que é address bus?",
    // COMENTÁRIO: Explicação/definição do item 10 (verso do card) - ALTERAR DEPOIS
    definition: "O barramento de endereço é responsável por indiciar a localização dos dados que a CPU está buscando.",
  },
  {
    // COMENTÁRIO: Texto do item 11 (frente do card) - ALTERAR DEPOIS
    term: "Qual a diferença entre dual core e quad core?",
    // COMENTÁRIO: Explicação/definição do item 11 (verso do card) - ALTERAR DEPOIS
    definition: "A diferença se trata da quantidade de núcleos que cada um deles possuiu, onde o dual core possuiu dois núcleos de processamento, enquanto o quad core possuiu quatro.",
  },
  {
    // COMENTÁRIO: Texto do item 12 (frente do card) - ALTERAR DEPOIS
    term: "O que é a memória Flash?",
    // COMENTÁRIO: Explicação/definição do item 12 (verso do card) - ALTERAR DEPOIS
    definition: "É um tipo de memória não volátil, muito utilizada em pen drives, no cartão SD, SSD e em celulares, mas que trabalha com blocos de dados. Ela permite a gravação e manipulação dessas informações e não precisa de energia para armazenar essas informações.",
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
