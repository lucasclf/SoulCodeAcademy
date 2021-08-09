var val1 = 0, val2 = 0, val3 = 0, media = () => document.write(soma(val1, val2, val3) / 3);

val1 = parseInt(prompt("Informe o primeiro valor: "))

val2 = parseInt(prompt("Informe o segundo valor: "))

val3 = parseInt(prompt("Informe o terceiro valor: "))

function soma(val1, val2, val3) {
    var resultado;
    resultado = val1+val2+val3
    return resultado
}