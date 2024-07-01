function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTelaNaTela('h1', 'Acertou!');
        exibirTelaNaTela('p', 'Você Descobriu o Numero Secreto');
    } else {
        if (chute > numeroSecreto)
            exibirTelaNaTela('p', 'O número secreto é menor');
    } {
    }
}
