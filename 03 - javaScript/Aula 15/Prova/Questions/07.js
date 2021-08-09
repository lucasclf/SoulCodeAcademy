/* 07. Crie uma função que retorno a multiplicação de um numero por 2 e com
o resultado, eleve ao quadrado. */

function questao7(num) {
    resultado = num*2
    return num+" multiplicado por 2 e elevado a segunda potência dá "+Math.pow(resultado,2)
}

document.write(questao7(parseInt(prompt("Informe um valor: "))))

document.write("<br>")