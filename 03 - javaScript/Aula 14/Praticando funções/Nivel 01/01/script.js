var multiplo5 = function() {
    numero = parseInt(prompt("Informe um numero"))
    if (numero % 5 == 0) {
        return numero+" é multiplo de 5."
    } else return numero+" não é multiplo de 5."
}

document.write(multiplo5())