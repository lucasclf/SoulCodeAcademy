var peso = 50, altura = 1.70, result = 0

function imc (val1, val2) {
    result = val1 / (val2*val2);
    return result
}

    document.write(imc(peso, altura))