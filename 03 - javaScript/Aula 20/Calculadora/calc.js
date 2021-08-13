function btn(botao){
    document.calc.tela.value += botao
}

function btnReset(){
    document.calc.tela.value = ""
}

function btnResult(){
    aux = document.calc.tela.value
    if(aux){
    resultado = eval(aux)
    document.calc.tela.value = resultado
    } else{
        document.calc.tela.value = "0"
    }
}

function btnApagar(){
    var aux = document.calc.tela.value
    document.calc.tela.value = document.calc.tela.value.substring(0, aux.length-1)
}

function btnPi() {
    document.calc.tela.value += Math.PI
}

function btnRaiz() {
    var aux = eval(document.calc.tela.value)
    document.calc.tela.value = Math.sqrt(aux)
}

function btnElev(num) {
    var aux = eval(document.calc.tela.value)
    var potencia = num.substring(1)
    console.log(potencia)
    document.calc.tela.value = Math.pow(aux, potencia)
}