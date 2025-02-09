const escolhas = document.querySelectorAll('.escolha');
const mensagemResultado = document.getElementById('mensagem-resultado');
const mensagemResultadoFinal = document.getElementById('mensagem-resultado-final');
const escolhaResultado = document.getElementById('escolha-resultado');
const mensagemFinal = document.getElementById('mensagem-final');
const imagemUsuario = document.getElementById('imagem-usuario');
const imagemComputador = document.getElementById('imagem-computador');
const novasEscolhasDiv = document.getElementById('novas-escolhas');

const opcoes = ['pedra', 'papel', 'tesoura'];

function determinarVencedor(escolhaUsuario, escolhaComputador) {
    if (escolhaUsuario === escolhaComputador) {
        return 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        return 'Você ganhou!';
    } else {
        return 'Você perdeu!';
    }
}

function mostrarResultado(escolhaUsuario, escolhaComputador, resultado) {
    imagemUsuario.src = `${escolhaUsuario}.png`;
    imagemComputador.src = `${escolhaComputador}.png`;
    escolhaResultado.style.display = 'flex';
    mensagemResultadoFinal.textContent = resultado;

    mensagemFinal.style.display = 'block';

    setTimeout(reiniciarJogo, 5000); // Reinicia o jogo após 2 segundos
}

escolhas.forEach(escolha => {
    escolha.addEventListener('click', () => {
        const escolhaUsuario = escolha.id;
        const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
        const resultado = determinarVencedor(escolhaUsuario, escolhaComputador);

        mostrarResultado(escolhaUsuario, escolhaComputador, resultado);
    });
});

function reiniciarJogo() {
    mensagemResultado.textContent = 'Faça sua escolha!';
    escolhaResultado.style.display = 'none';
    mensagemFinal.style.display = 'none';
}