var num1 = 0, numAleatorio = 0;

num1 = parseInt(prompt("Insira um numero valor: "))


function aleatorio(val1) {
    numAleatorio = Math.round(Math.random()*1000)
    absoluto = Math.abs(val1 - numAleatorio)

    document.write("O numero escolhido foi :", val1, "<br>")
    document.write("O numero aleatorio gerado foi : ", numAleatorio, "<br>")
    document.write("O numero absoluto da subtração do seu numero escolhido pelo aleatório gerado é de: ", absoluto, "<br>")

}

aleatorio(num1)