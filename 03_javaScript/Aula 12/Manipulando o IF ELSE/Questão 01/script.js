var numero1 = 0, numero2 = 0, numero3 = 0, numero4 = 0;

numero1 = parseInt(prompt("Informe o primeiro valor: "))

numero2 = parseInt(prompt("Informe o segundo valor: "))

numero3 = parseInt(prompt("Informe o terceiro valor: "))

numero4 = parseInt(prompt("Informe o quarto valor: "))

document.write("Ordem decrescente dos numeros informados: ")

if (numero1 > numero2 && numero2 > numero3 && numero3 > numero4){
    document.write(numero1, numero2, numero3, numero4)
} else if (numero1 > numero2 && numero2 > numero4 && numero4 > numero3){
    document.write(numero1, numero2, numero4, numero3)
} else if (numero1 > numero3 && numero2 > numero4 && numero2 > numero4){
    document.write(numero1, numero3, numero2, numero4)
} else if (numero1 > numero3 && numero3 > numero4 && numero4 > numero2){
    document.write(numero1, numero3, numero4, numero2)
} else if (numero1 > numero4 && numero4 > numero2 && numero2 > numero3) {
    document.write(numero1, numero4, numero2, numero3)
} else if (numero1 > numero4 && numero4 > numero3 && numero3 > numero2) {
    document.write(numero1, numero4, numero3, numero2)
} else if (numero2 > numero1 && numero1 > numero3 && numero3 > numero4) {
    document.write(numero2, numero1, numero3, numero4)
} else if (numero2 > numero1 && numero1 > numero4 && numero4 > numero3) {
    document.write(numero2, numero1, numero4, numero3)
} else if (numero2 > numero3 && numero3 > numero1 && numero1 > numero4) {
    document.write(numero2, numero3, numero1, numero4)
} else if (numero2 > numero3 && numero3 > numero4 && numero4 > numero1) {
    document.write(numero2, numero3, numero4, numero1)
} else if (numero2 > numero4 && numero4 > numero1 && numero1 > numero3) {
    document.write(numero2, numero4, numero1, numero3)
} else if (numero2 > numero4 && numero4 > numero3 && numero3 > numero1) {
    document.write(numero2, numero4, numero3, numero1)
} else if (numero3 > numero1 && numero1 > numero2 && numero2 > numero4) {
    document.write(numero3, numero1, numero2, numero4)
} else if (numero3 > numero1 && numero1 > numero4 && numero4 > numero2) {
    document.write(numero3, numero1, numero4, numero2)
} else if (numero3 > numero2 && numero2 > numero1 && numero1 > numero4) {
    document.write(numero3, numero2, numero1, numero4)
} else if (numero3 > numero2 && numero2 > numero4 && numero4 > numero1) {
    document.write(numero3, numero2, numero4, numero1)
} else if (numero3 > numero4 && numero4 > numero1 && numero1 > numero2) {
    document.write(numero3, numero4, numero1, numero2)
} else if (numero3 > numero4 && numero4 > numero2 && numero2 > numero1) {
    document.write(numero3, numero4, numero2, numero1)
} else if (numero4 > numero1 && numero1 > numero2 && numero2 > numero3) {
    document.write(numero4, numero1, numero2, numero3)
} else if (numero4 > numero1 && numero1 > numero3 && numero3 > numero2) {
    document.write(numero4, numero1, numero3, numero2)
} else if (numero4 > numero2 && numero2 > numero1 && numero1 > numero3) {
    document.write(numero4, numero2, numero1, numero3)
} else if (numero4 > numero2 && numero2 > numero3 && numero3 > numero1) {
    document.write(numero4, numero2, numero3, numero1)
} else if (numero4 > numero3 && numero3 > numero1 && numero1 > numero2) {
    document.write(numero4, numero3, numero1, numero2)
} else if (numero4 > numero3 && numero3 > numero2 && numero2 > numero1) {
    document.write(numero4, numero3, numero2, numero1)
}

document.write("<br><br><br>","Ordem crescente dos numeros informados: ")

if (numero1 < numero2 && numero2 < numero3 && numero3 < numero4){
    document.write(numero1, numero2, numero3, numero4)
} else if (numero1 < numero2 && numero2 < numero4 && numero4 < numero3){
    document.write(numero1, numero2, numero4, numero3)
} else if (numero1 < numero3 && numero2 < numero4 && numero2 < numero4){
    document.write(numero1, numero3, numero2, numero4)
} else if (numero1 < numero3 && numero3 < numero4 && numero4 < numero2){
    document.write(numero1, numero3, numero4, numero2)
} else if (numero1 < numero4 && numero4 < numero2 && numero2 < numero3) {
    document.write(numero1, numero4, numero2, numero3)
} else if (numero1 < numero4 && numero4 < numero3 && numero3 < numero2) {
    document.write(numero1, numero4, numero3, numero2)
} else if (numero2 < numero1 && numero1 < numero3 && numero3 < numero4) {
    document.write(numero2, numero1, numero3, numero4)
} else if (numero2 < numero1 && numero1 < numero4 && numero4 < numero3) {
    document.write(numero2, numero1, numero4, numero3)
} else if (numero2 < numero3 && numero3 < numero1 && numero1 < numero4) {
    document.write(numero2, numero3, numero1, numero4)
} else if (numero2 < numero3 && numero3 < numero4 && numero4 < numero1) {
    document.write(numero2, numero3, numero4, numero1)
} else if (numero2 < numero4 && numero4 < numero1 && numero1 < numero3) {
    document.write(numero2, numero4, numero1, numero3)
} else if (numero2 < numero4 && numero4 < numero3 && numero3 < numero1) {
    document.write(numero2, numero4, numero3, numero1)
} else if (numero3 < numero1 && numero1 < numero2 && numero2 < numero4) {
    document.write(numero3, numero1, numero2, numero4)
} else if (numero3 < numero1 && numero1 < numero4 && numero4 < numero2) {
    document.write(numero3, numero1, numero4, numero2)
} else if (numero3 < numero2 && numero2 < numero1 && numero1 < numero4) {
    document.write(numero3, numero2, numero1, numero4)
} else if (numero3 < numero2 && numero2 < numero4 && numero4 < numero1) {
    document.write(numero3, numero2, numero4, numero1)
} else if (numero3 < numero4 && numero4 < numero1 && numero1 < numero2) {
    document.write(numero3, numero4, numero1, numero2)
} else if (numero3 < numero4 && numero4 < numero2 && numero2 < numero1) {
    document.write(numero3, numero4, numero2, numero1)
} else if (numero4 < numero1 && numero1 < numero2 && numero2 < numero3) {
    document.write(numero4, numero1, numero2, numero3)
} else if (numero4 < numero1 && numero1 < numero3 && numero3 < numero2) {
    document.write(numero4, numero1, numero3, numero2)
} else if (numero4 < numero2 && numero2 < numero1 && numero1 < numero3) {
    document.write(numero4, numero2, numero1, numero3)
} else if (numero4 < numero2 && numero2 < numero3 && numero3 < numero1) {
    document.write(numero4, numero2, numero3, numero1)
} else if (numero4 < numero3 && numero3 < numero1 && numero1 < numero2) {
    document.write(numero4, numero3, numero1, numero2)
} else if (numero4 < numero3 && numero3 < numero2 && numero2 < numero1) {
    document.write(numero4, numero3, numero2, numero1)
}
