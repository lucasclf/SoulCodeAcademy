var num1 = 0, num2 = 0;

num1 = parseInt(prompt("Informe um numero: "));
num2 = parseInt(prompt("Informe um numero: "));

function divisao (val1, val2) {
    if(val1 == 0 || val2 == 0) {
        return "Não é possivel efetuar divisão por 0, e 0 dividido por qualquer numero será 0"
    } else if(val1 > val2){
        return "O valor da divisão é de "+parseInt(val1 / val2)
    } else if(val1 < val2){
        return "O valor da divisão é de "+parseInt(val2 / val1)
    } else if (val1 == val2) {
        return "O valor da divisão é de 1"
    } else return "Valores informados inválidos."
}

    document.write(divisao(num1, num2),".")