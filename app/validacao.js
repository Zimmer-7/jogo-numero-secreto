function validaChute(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += `<div>valor inválido</div>`;
    }

    if (numero < 1 || numero > maiorValor) {
        elementoChute.innerHTML += `<div>O númeno deve estar entre 1 e ${maiorValor}</div>`;
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h1>Parabéns. Você acertou!</h1>
            <h3>O número secreto era ${numeroAleatorio}</h3>

            <button id="jogar-novamente" class="btn-reset">Jogar Novamente</button>
        `;     
    } else if (numero < numeroAleatorio) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long fa-beat-fade"></i></div>
        `;
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long fa-beat-fade"></i></div>
        `;
    }

}

document.body.addEventListener('click', evento => {
    if (evento.target.id === "jogar-novamente") {
        window.location.reload();
    }

})
