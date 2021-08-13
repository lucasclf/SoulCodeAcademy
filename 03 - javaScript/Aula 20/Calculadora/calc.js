function btn(botao) {
    if (!document.calc.telaSimbolo.value) {
        document.calc.tela1.value += botao
    } else
        document.calc.tela2.value += botao
    //função geral dos botões numéricos, basicamente ele soma ao valor dos inputs "tela" e concatena com o valor do botão(numérico ou simbolo)
}

function btnSimbolo(botao) {
    if (document.calc.tela1.value) {
        document.calc.telaSimbolo.value = botao
    }
    //função geral dos botões aritiméticos, basicamente ele acrescenta o simbolo aritimético ao input "telaSimbolo" caso esteja em branco, ou substituindo ele caso esteja com outro simbolo.
}

function btnReset() {
    document.calc.tela1.value = ""
    document.calc.tela2.value = ""
    document.calc.telaSimbolo.value = ""
    document.calc.telaResultado.value = ""
    //função do botão "C" que apaga todos os input tela
}

function btnResult() {
    var aux = document.calc.tela1.value + document.calc.telaSimbolo.value + document.calc.tela2.value, resultado
    if (aux) {
        resultado = eval(aux)
        document.calc.telaResultado.value = resultado
    } else {
        resultado = "0"
        document.calc.telaResultado.value = resultado
    }

    //função do botão "=", ele pega o valor do input "tela" joga na variavel aux, depois se aux tiver algum valor(true), ele joga aux na função nativa eval e define esse valor para a variavel resultado e altera o valor do input "tela" para resultado. Por fim, se aux não tiver valor(false), ele retorna o valor 0 no input "tela"

}

function btnApagar() {
    if (document.calc.tela2.value) {
        document.calc.tela2.value = document.calc.tela2.value.substring(0, (document.calc.tela2.value.length - 1))
    } else if (document.calc.telaSimbolo.value) {
        document.calc.telaSimbolo.value = ""
    } else document.calc.tela1.value = document.calc.tela1.value.substring(0, (document.calc.tela1.value.length - 1))

    //Função para o botão de apagar apaga em ordem o input de numero 1, simbolo e depois numero 2.

}

function btnPi() {
    if (document.calc.tela1.value && document.calc.tela2.value) {
        alert("A função pi, só pode ser usada se um dos valores a serem computados estiverem em branco.")
    } else if (!document.calc.telaSimbolo.value) {
        document.calc.tela1.value = Math.PI
    } else
        document.calc.tela2.value = Math.PI


    //Função para o botão de PI ele concatena no input "tela" o valor de pi, usando o objeto Math.    

}

function btnRaiz() {
    var aux = eval(document.calc.tela1.value)
    if (!document.calc.tela2.value) {
        document.calc.telaResultado.value = Math.sqrt(aux)
    } else
        alert("A função de raiz só pode ser utilizada caso o segundo valor esteja em branco, favor apaga-lo")

    //Função para o botão de calcular a raiz quadrada, primeiro ele joga o valor do input "tela" na função eval e define o resultado para a variavel aux. Por fim, ele cálcula a raiz quadrada de aux e joga no valor do input "tela"    

}

function btnElev(num) {
    var aux = eval(document.calc.tela1.value)
    var potencia = num.substring(1)
    console.log(potencia)
    document.calc.tela1.value = Math.pow(aux, potencia)

    //Função para os botões de calcular elevado, primeiro ele joga o valor do input "tela" na função eval e define o resultado para a variavel aux. Tambem pega o valor do botão, e joga na variavel potencia, utilizando por substring apena o ultimo valor(que em teoria é o numérico), por fim, joga aux, potencia no objeto Math.pow e o resultado vai para o input "tela"

}

function btnSimples() {
    
    if (document.calc.querySelectorAll(".adv")[1].style.visibility == "hidden"){
        for (i = 0; i < document.calc.querySelectorAll(".adv").length; i++) {
            document.calc.querySelectorAll(".adv")[i].style.visibility = "visible";
        }
        document.calc.simples.value = "Simples"
    } else if (document.calc.querySelectorAll(".adv")[1].style.visibility != "hidden") {
        for (i = 0; i < document.calc.querySelectorAll(".adv").length; i++) {
            document.calc.querySelectorAll(".adv")[i].style.visibility = "hidden";
        }
        document.calc.simples.value = "Cientifica"
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

function btnNegativo1(){
    var aux = document.calc.tela1.value.indexOf("-")
    if (aux  == -1){
    document.calc.tela1.value = ("-"+document.calc.tela1.value)
    } else if (aux == 0){
        document.calc.tela1.value = document.calc.tela1.value.substring(1)
    }

    //Função para inserir o valor negativo na tela1.

}

function btnNegativo2(){
    var aux = document.calc.tela2.value.indexOf("-")
    if (aux  == -1){
    document.calc.tela2.value = ("-"+document.calc.tela2.value)
    } else if (aux == 0){
        document.calc.tela2.value = document.calc.tela2.value.substring(1)
    }

        //Função para inserir o valor negativo na tela1.

}










/* PROBLEMAS A SEREM SOLUCIONADOS:

1 - Se a calculadora iniciar em modo simples(linha CSS - 54 = hidden) o botão só funciona no segundo clique.
2 - */