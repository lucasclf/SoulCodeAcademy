var multiplicacao = function(val1, val2) {
    if (val1 > val2) {
        return val1+" é maior que "+val2
    } else if (val2 > val1){
        return val2+" é maior que "+val1
    } else return "Valores iguais."
}

document.write(multiplicacao(parseInt(prompt("Informe o primeiro valor: ")), (parseInt(prompt("Informe o segundo valor: ")))))