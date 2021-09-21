var valor = 0;

valor = parseInt(prompt("Informe o dividendo: "));

function desconto (val1) {
    return val1 * 0.05
}

    document.write("O desconto será de ", desconto(valor), ".")