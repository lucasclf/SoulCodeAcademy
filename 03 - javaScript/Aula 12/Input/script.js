var altura = 0, peso = 0, imc = 0

peso = parseInt(prompt("Digite seu peso."))

if (!peso) {
    peso = parseInt(prompt("Peso invalido, digite novamente"))
}

altura = parseFloat(prompt("Digite sua altura."))

if (!altura) {
    altura = parseInt(prompt("Altura invalidA, digite novamente"))
}

imc = peso / (altura * altura)

document.write("IMC: ", imc, "<br><br>")

if (imc >= 40) {
    document.write("Obesidade grau III");
} else if (imc >= 34.9) {
    document.write("Obesidade grau II")
} else if (imc >= 29.9) {
    document.write("Obesidade grau I")
} else if (imc >= 24.9) {
    document.write("Sobrepeso")
} else if (imc >= 18.5) {
    document.write("Peso ideal")
} else {
    document.write("Abaixo do peso")
}