

function parImpar () {
    numero = parseInt(prompt("Informe o valor a ser avaliado: "))
    if (numero % 2 == 0){
        return "Esse valor é par."
    } else return "Esse valor é impar."
}

    document.write(parImpar())