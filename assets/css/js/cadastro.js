// --- Suas funções continuam aqui em cima, sem mudar ---

const senha = document.getElementById('password')
const confirma = document.getElementById('confirmarpassword')

function cadastrarusuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')

    if (senha.value == confirma.value) {
        // ... (resto da sua lógica de salvar no localStorage)
        let lista = window.localStorage.getItem('usuarios')
        let usuario = {
            'nome': nome.value,
            'email': email.value,
            'password': senha.value
        }

        if (lista == undefined) {
            lista = []
        } else {
            lista = JSON.parse(lista)
        }

        lista.push(usuario)
        window.localStorage.setItem('usuarios', JSON.stringify(lista))
        alert('Usuário cadastrado')

        nome.value = ''
        email.value = ''
        senha.value = ''
        confirma.value = ''
    } else {
        alert('Senha não confere, verifique e tente novamente')
        senha.value = ''
        confirma.value = ''
    }
}

function toogglesenha() {
    // 'exibirsenha' agora é pego por ID aqui dentro
    const exibirsenha = document.getElementById('exibirsenha') 

    if (exibirsenha.checked) {
        senha.type = 'text'
        confirma.type = 'text'
    } else {
        senha.type = 'password'
        confirma.type = 'password'
    }
}


// --- A MÁGICA ACONTECE AQUI ---
// Isso espera o HTML carregar antes de "ligar" os botões.
document.addEventListener('DOMContentLoaded', () => {

    // Encontra o botão de cadastro pelo ID e "escuta" por um clique
    const btnCadastro = document.getElementById('btn-cadastro');
    if (btnCadastro) {
        btnCadastro.addEventListener('click', cadastrarusuario);
    }

    // Encontra o checkbox pelo ID e "escuta" por um clique
    const checkSenha = document.getElementById('exibirsenha');
    if (checkSenha) {
        checkSenha.addEventListener('click', toogglesenha);
    }
});