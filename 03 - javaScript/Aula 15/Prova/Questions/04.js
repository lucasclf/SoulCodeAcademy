var num1 = 0;

num1 = parseInt(prompt("Informe um numero a ser validado: "))
num2 = parseInt(prompt("Informe um numero a ser comparado com o numero anterior: "))

function primo(num) {
    count = 0, divisores = 0
    for (count = 1; count <= num; count++){
        if (num % count == 0) {
            divisores++;
        }
    }
        if (divisores == 2){
            return true;
            } else return false
}

if (num1 % 2 == 0){
    document.write(num1, " é par.<br>")
} else document.write(num1, " é impar.<br>")
if (num1 % 3 == 0){
    document.write(num1, " é multiplo de 3.<br>")
} else document.write(num1, " não é multiplo de 3.<br>")
if (num1 > num2) {
    document.write(num1, " é maior que ", num2, ".<br>")
} else if (num1 == num2){
    document.write(num1, " é igual a ", num2, ".<br>")
} else document.write(num1, " é menor que ", num2, ".<br>")
if (primo(num1)) {
    document.write(num1, " é um numero primo.<br>")
} else document.write(num1, " não é um numero primo.<br>")

document.write("<br>")