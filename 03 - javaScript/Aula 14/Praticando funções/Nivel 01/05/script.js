var divisores = 0

function primo(num) {
    for (count = 1; count <= num; count++){
        if (num % count == 0) {
            divisores++;
        }
    }
        if (divisores == 2){
            return num+" é um numero primo e seu cubo é "+num*num*num;
            } else return num+" não é um numero primo."
}

    document.write(primo(parseInt(prompt("Informe um valor: "))))