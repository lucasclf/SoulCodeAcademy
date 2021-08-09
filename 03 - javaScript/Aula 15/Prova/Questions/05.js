/* 05. Faça um script que pede dois inteiros e armazene eles em duas
variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o
antes e o depois em uma janela de alert ou document. */

var num1 = 0, num2 = 0, aux = 0;

num1 = parseInt(prompt("Informe o primeiro valor: "))

num2 = parseInt(prompt("Informe o segundo valor: "))

alert("O primeiro valor é "+ num1+" e o segundo valor é "+ num2)

aux = num1
num1 = num2
num2 = aux

alert("Invertemos os valores para você, agora o primeiro valor é de "+ num1+ " e o segundo valor é de "+ num2)

document.write("<br>")