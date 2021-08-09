var altura = 0, peso = 0, imc = 0;

peso = parseFloat(prompt("Favor informar seu peso: "));

altura = parseFloat(prompt("Favor informar sua altura: "));

imc = peso / (altura * altura);

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

