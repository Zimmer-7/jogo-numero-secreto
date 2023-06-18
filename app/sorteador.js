const maiorValor = 1000;

const numeroAleatorio = sorteio();
console.log(numeroAleatorio)

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor

function sorteio() {
    return parseInt(Math.random() * maiorValor + 1);
}


