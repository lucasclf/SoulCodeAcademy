function btn(botao) {
    if (!document.calc.telaSimbolo.value) {
        document.calc.tela1.value += botao
    } else
        document.calc.tela2.value += botao
    //função geral dos botões numéricos, basicamente ele soma ao valor dos inputs "tela" e concatena com o valor do botão(numérico ou simbolo)
}

function btnPonto(botao) {
    aux1 = document.calc.tela1.value.indexOf(".")
    aux2 = document.calc.tela2.value.indexOf(".")
    if (!document.calc.telaSimbolo.value && aux1 == -1) {
        document.calc.tela1.value += botao
    } else if (document.calc.telaSimbolo.value && aux2 == -1)
        document.calc.tela2.value += botao
    //função geral dos botões numéricos, basicamente ele soma ao valor dos inputs "tela" e concatena com o valor do botão(numérico ou simbolo)
}

function btnSimbolo(botao) {
    if (document.calc.tela1.value) {
    document.calc.telaSimbolo.value = botao
    }

    //função geral dos botões aritiméticos ele acrescenta o simbolo aritimético ao input "telaSimbolo" caso esteja em branco, ou substituindo ele caso esteja com outro simbolo.
}

function btnReset() {
    document.calc.tela1.value = ""
    document.calc.tela2.value = ""
    document.calc.telaSimbolo.value = ""
    //função do botão "C" que apaga todos os input tela
}

function btnResult() {
    var aux = document.calc.tela1.value + document.calc.telaSimbolo.value + document.calc.tela2.value, resultado
    if (aux) {
        resultado = eval(aux)
        document.calc.tela1.value = resultado
        document.calc.tela2.value = ""
        document.calc.telaSimbolo.value = ""
    } else {
        resultado = "0"
        document.calc.tela1.value = resultado
        document.calc.tela2.value = ""
        document.calc.telaSimbolo.value = ""
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
        document.calc.tela1.value = Math.sqrt(aux)
    } else
        alert("A função de raiz só pode ser utilizada caso o segundo valor esteja em branco, favor apaga-lo")

    //Função para o botão de calcular a raiz quadrada, primeiro ele joga o valor do input "tela" na função eval e define o resultado para a variavel aux. Por fim, ele cálcula a raiz quadrada de aux e joga no valor do input "tela"    

}

function btnElev(num) {
    if (!document.calc.tela2.value) {
        var aux = eval(document.calc.tela1.value)
        var potencia = num.substring(1)
        console.log(potencia)
        document.calc.tela1.value = Math.pow(aux, potencia)
    } else
        alert("A função de potencia só pode ser utilizada caso o segundo valor esteja em branco, favor apaga-lo")

    //Função para os botões de calcular elevado, primeiro ele joga o valor do input "tela" na função eval e define o resultado para a variavel aux. Tambem pega o valor do botão, e joga na variavel potencia, utilizando por substring apena o ultimo valor(que em teoria é o numérico), por fim, joga aux, potencia no objeto Math.pow e o resultado vai para o input "tela"

}

function btnSimples() {

    if (document.calc.querySelectorAll(".adv")[1].style.visibility == "hidden") {
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

function btnNegativo1() {
    var aux = document.calc.tela1.value.indexOf("-")
    if (aux == -1) {
        document.calc.tela1.value = ("-" + document.calc.tela1.value)
    } else if (aux == 0) {
        document.calc.tela1.value = document.calc.tela1.value.substring(1)
    }

    //Função para inserir o valor negativo na tela1.

}

function btnNegativo2() {
    var aux = document.calc.tela2.value.indexOf("-")
    if (aux == -1) {
        document.calc.tela2.value = ("-" + document.calc.tela2.value)
    } else if (aux == 0) {
        document.calc.tela2.value = document.calc.tela2.value.substring(1)
    }

    //Função para inserir o valor negativo na tela1.

}

function modo_noturno1() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementById("tela1").style.color = "white"
    document.getElementById("tela2").style.color = "white"
    document.getElementById("telaSimbolo").style.color = "white"
}







/* PROBLEMAS A SEREM SOLUCIONADOS:

1 - Se a calculadora iniciar em modo simples(linha CSS - 54 = hidden) o botão só funciona no segundo clique.
2 - Não conseguir alterar o valor de uma variavel global, dentro de uma função, dessa forma tive que criar dois visores, onde os valores sempre estarão lá para ser armazenados.
3 - Tendo 2 visores, ficou mais fácil que a positividade dos valores, fosse atribuida por um botão a parte, e não pelo próprio botão -.
*/