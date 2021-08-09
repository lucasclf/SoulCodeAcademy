var val1 = 0, val2 = 0, val3 = 0;

val1 = parseInt(prompt("Informe o primeiro valor: "))

val2 = parseInt(prompt("Informe o segundo valor: "))

val3 = parseInt(prompt("Informe o terceiro valor: "))

function menor(val1, val2, val3) {
    var aux;
    if (val1 < val2 && val1 < val3) {
        aux = val1
    } else if (val2 < val3){
        aux = val2
    } else aux = val3
    return "O menor valor é "+aux
}

function maior(val1, val2, val3) {
    var aux;
    if (val1 > val2 && val1 > val3) {
        aux = val1
    } else if (val2 > val3){
        aux = val2
    } else aux = val3
    return "O maior valor é "+aux
}

document.write(menor(val1, val2, val3),"<br>", maior(val1, val2, val3))