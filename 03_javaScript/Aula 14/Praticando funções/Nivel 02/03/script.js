var numero = 0;

numero = parseInt(prompt("Informe um numero: "))

function validarPrimo(num) {
    var divisores = 0
    for (count = 1; count <= num; count++){
        if (num % count == 0) {
            divisores++;
        }
    }
        if (divisores == 2){
            return true;
            }
}

function listarPrimo(limite) {
    for (i = 1; i <= limite; i++) {
        if (validarPrimo(i)) {
            document.write(i," É um numero primo! <br>")
        }
    }
    return "fim"
} 

(listarPrimo(numero))
