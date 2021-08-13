var fim

function btn(botao){
    document.calc.tela.value += botao
//função geral dos botões numéricos de simbolo, basicamente ele soma ao valor do input "tela" e concatena com o valor do botão(numérico ou simbolo)
}

function btnReset(){
    document.calc.tela.value = ""
//função do botão "C" que apaga o input "tela"
}

function btnResult(){
    var aux = document.calc.tela.value, resultado
    if(aux){
    resultado = eval(aux)
    document.calc.tela.value = resultado
    } else{
        resultado = "0"
        document.calc.tela.value = resultado
    }
    
//função do botão "=", ele pega o valor do input "tela" joga na variavel aux, depois se aux tiver algum valor(true), ele joga aux na função nativa eval e define esse valor para a variavel resultado e altera o valor do input "tela" para resultado. Por fim, se aux não tiver valor(false), ele retorna o valor 0 no input "tela"

}

function btnApagar(){
    var aux = document.calc.tela.value
    document.calc.tela.value = document.calc.tela.value.substring(0, aux.length-1)

//Função para o botão de apgar, ele apaga 1 caracter por vez, ele joga o valor do input "tela" na variavel aux e depois altera o valor do input "tela" usando a função substring(,) para valor do input "tela" ate o fim do tamanho de aux-1.

}

function btnPi() {
    document.calc.tela.value += Math.PI

//Função para o botão de PI ele concatena no input "tela" o valor de pi, usando o objeto Math.    

}

function btnRaiz() {
    var aux = eval(document.calc.tela.value)
    document.calc.tela.value = Math.sqrt(aux)

//Função para o botão de calcular a raiz quadrada, primeiro ele joga o valor do input "tela" na função eval e define o resultado para a variavel aux. Por fim, ele cálcula a raiz quadrada de aux e joga no valor do input "tela"    

}

function btnElev(num) {
    var aux = eval(document.calc.tela.value)
    var potencia = num.substring(1)
    console.log(potencia)
    document.calc.tela.value = Math.pow(aux, potencia)

//Função para os botões de calcular elevado, primeiro ele joga o valor do input "tela" na função eval e define o resultado para a variavel aux. Tambem pega o valor do botão, e joga na variavel potencia, utilizando por substring apena o ultimo valor(que em teoria é o numérico), por fim, joga aux, potencia no objeto Math.pow e o resultado vai para o input "tela"

}

function btnSimples(){
    var aux = []
    aux = document.calc.querySelectorAll(".adv")
    for (i = 0; i < aux.length; i++) {
        aux[i].style.visibility = "hidden";
    }

//Função para o botão de calculadora simples, ele pega o valor de todos os itens com classe ".adv" e joga para dentro da variavel aux que foi definida como array. Depois passa um for em cada uma das posições de aux e altera o style.visibility para hidden, escondendo assim os botões da calculadora avançada.

}


function btnCien() {
    var aux = []
    aux = document.calc.querySelectorAll(".adv")
    for (i = 0; i < aux.length; i++) {
        aux[i].style.visibility = "visible";
    }

//Função para o botão de calculadora cientifica, ele pega o valor de todos os itens com classe ".adv" e joga para dentro da variavel aux que foi definida como array. Depois passa um for em cada uma das posições de aux e altera o style.visibility para visible, mostrando assim os botões da calculadora avançada.

}

console.log ("fora da função", fim)