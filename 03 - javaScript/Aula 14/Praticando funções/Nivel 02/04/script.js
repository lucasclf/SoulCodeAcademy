var numero = 0, aux2 = 0;

numero = parseInt(prompt("Informe um numero: "))

function validarPerfeito(num) {
    var aux1 = 0, aux2 = 0
    for (count = 1; count < num; count++){
        if (num % count == 0) {
            aux1 = count
            aux2 = aux2 + aux1    
        }
    }
    if (aux2 == num){
        return true
    }
}

function listarPerfeito(limite) {
    for (i = 1; i <= limite; i++) {
        if (validarPerfeito(i)) {
            document.write(i," É um numero perfeito! <br>")
        }
    }
    return "fim"
} 

(listarPerfeito(numero))