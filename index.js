// O array de funcionárias continua o mesmo
const funcionarias = [
  {
    nome: "Sâmela Lira",
    imagem: "assets/Imagens/Samela.png",
    descricao: "Designer de presença digital"
  },
  {
    nome: "Thalia Vitoria",
    imagem: "assets/Imagens/Thalia.png",
    descricao: "Diretora de conteúdo visual e storyteller"
  },
  {
    nome: "Maelly Soares",
    imagem: "assets/Imagens/Maelly.png",
    descricao: "Gestora de conteúdo informativo e analista de comunicação"
  },
  {
    nome: "Alissa Risatto",
    imagem: "assets/Imagens/Alissa.png",
    descricao: "Diretora de processos"
  },
  {
    nome: "Thatiany Reis",
    imagem: "assets/Imagens/Thatiany.png",
    descricao: "Gestora de processos criativos"
  }
];

let atual = 0;

// Esta função agora encontra o container da funcionária
const containerFunc = document.getElementById("funcionaria");

// As funções agora só precisam existir, não precisam ser globais
function mostrarFunc() {
  if (containerFunc) { // Boa prática: checar se o elemento existe
    const f = funcionarias[atual];
    containerFunc.innerHTML = `
      <img src="${f.imagem}" alt="Foto de ${f.nome}">
      <h3>${f.nome}</h3>
      <p>${f.descricao}</p>
    `;
  }
}

function avancar() {
  atual = (atual + 1) % funcionarias.length;
  mostrarFunc();
}

function voltar() {
  atual = (atual - 1 + funcionarias.length) % funcionarias.length;
  mostrarFunc();
}

// --- A MÁGICA ESTÁ AQUI ---
// Isso "liga" o JavaScript ao HTML de forma limpa.
// Espera o HTML carregar...
document.addEventListener('DOMContentLoaded', () => {
  
  // ...encontra os botões pelos IDs que demos...
  const btnAvancar = document.getElementById('btn-avancar');
  const btnVoltar = document.getElementById('btn-voltar');

  // ...e adiciona um "escutador" de clique neles.
  if (btnAvancar) {
    btnAvancar.addEventListener('click', avancar);
  }

  if (btnVoltar) {
    btnVoltar.addEventListener('click', voltar);
  }

  // E já que estamos aqui, vamos carregar a primeira funcionária
  // assim que a página abre, em vez de mostrar um espaço vazio.
  mostrarFunc(); 
});