var idade = 16;
var altura = 1.80;
var peso = 95;
var imc =  peso / (altura * altura)

if (idade >= 18) {
    document.write("Plenamente capaz");
} else if (idade >= 16) {
    document.write("Relativamente capaz")
} else {
        document.write("Incapaz")
}

document.write("<br><br><br>");

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

