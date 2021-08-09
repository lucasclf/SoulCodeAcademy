var num1 = 0, num2 = 0, raiz1 = 0, raiz2 = 0;

num1 = parseInt(prompt("Insira o primeiro valor: "))

num2 = parseInt(prompt("Insira o primeiro valor: "))

function potencia(val1, val2) {
    raiz1 = Math.round(Math.sqrt(val1))
    raiz2 = Math.round(Math.sqrt(val2))
    document.write("Você digitou ", val1, " e ", val2, " e suas raizes quadradas arredondas são respectivamente ", raiz1, " e ", raiz2)
}

potencia(num1, num2)