var numero1 = 0, numero2 = 0

numero1 = parseInt(prompt("Digite o primeiro numero: "))

numero2 = parseInt(prompt("Digite o segundo numero: "))

if (numero1 < numero2) {
    document.write(numero1, " é menor que ", numero2)
} else if (numero2 < numero1) {
    document.write(numero2, " é menor que ", numero1)
} else {
    document.write("Estes numeros são iguais.")
}