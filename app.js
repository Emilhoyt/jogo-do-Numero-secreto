let ListaDeNumeroSorteado = []
let numeroLimite = 10
let numeroSecreto = gerarNumero(); 
let tentativa = 1;

function exibirNaTela(tag, texto) { 
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
    

function exibirMensagemInicial() {
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número de 1 a 10')}

    exibirMensagemInicial();

function verificarChute() { 
    let chute = document.querySelector('input').value; 
    if (chute == numeroSecreto) { 
        exibirNaTela('h1', 'Acertou!');
         let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
         let mesagemTentativas = `Você Adivinhou o número secreto com ${tentativa} ${palavraTentativa}`;
         exibirNaTela('p', mesagemTentativas); 

        document.getElementById('reiniciar').removeAttribute('disabled');
        } else{ 
            if (chute > numeroSecreto) { 
                exibirNaTela('h1', 'Tente novamente!');
                exibirNaTela('p', 'O número secreto é menor do que ' + chute); } 
            else { 
                exibirNaTela('h1', 'Tente novamente!');
                exibirNaTela('p', 'O número secreto é maior do que ' + chute); }
        }    
        tentativa++
        limpaCampo();
 }

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = ListaDeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        ListaDeNumeroSorteado = [];
    }

    if (ListaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        ListaDeNumeroSorteado.push(numeroEscolhido);
        console.log(ListaDeNumeroSorteado);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limpaCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


 