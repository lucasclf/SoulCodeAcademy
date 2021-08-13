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