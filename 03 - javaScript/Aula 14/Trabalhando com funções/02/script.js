var dividendo = 0, divisor = 0;

dividendo = parseInt(prompt("Informe o dividendo: "));
divisor = parseInt(prompt("Informe o divisor: "));

function divisao (val1, val2) {
    return val1 / val2
}

    document.write("O valor da divisão é de ",divisao(dividendo, divisor),".")