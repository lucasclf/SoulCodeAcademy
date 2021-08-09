var num1 = 0, num2 = 0, num3 = 0, raiz1 = 0, raiz2 = 0;

num1 = parseInt(prompt("Insira o primeiro valor: "))

num2 = parseInt(prompt("Insira o primeiro valor: "))

num3 = parseInt(prompt("Insira o primeiro valor: "))

function potencia(val1, val2, val3) {
    pot1 = Math.pow(val1, 2)
    pot2 = Math.pow(val2, 3)
    pot3 = Math.pow(val3, 4)
    soma = pot1+pot2+pot3
    document.write(val1, " elevado a segunda potência é ", pot1, "<br>")
    document.write(val2, " elevado a terceira potência é ", pot2, "<br>")
    document.write(val3, " elevado a quarta potência é ", pot3, "<br>")
    document.write("E a soma desses valores é ", soma )
}

potencia(num1, num2, num3)