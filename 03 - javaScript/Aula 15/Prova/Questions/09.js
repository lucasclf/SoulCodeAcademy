/* 09. Crie um script para alertar "Hello World" se x for maior que y, caso
contrário, alertar "Goodbye". */

var x = 0, y = 0;

x = parseInt(prompt("Informe um valor: "))
y = parseInt(prompt("Informe outro valor: "))

if (x > y) {
    alert("Hello World")
} else if (x < y) {
    alert("Goodbye")
} else if (x == y) {
    alert("Desculpe, mas, o exercicio não previa valores iguais. Para obter essa funcionalidade me contate para acertarmos os valores.")
} else alert("Tem certeza que você informou um numero?")

document.write("<br>")