/* function cadastrarFuncionarios() {
    var funcionarios = []

    while(true) {
        aux = prompt("Digite o nome do próximo funcionário ou 0 para sair.")
        if(aux == 0){
            break;
        } else funcionarios.unshift(aux)
    }

    for (i in funcionarios){
        document.write("<br>  nome é: ", funcionarios[i])
    }
}

cadastrarFuncionarios() */

function cadastrarFrutas() {
    var frutas = []

    while(true) {
        aux = prompt("Digite quais frutas você deseja comprar, ou sair para encerrar suas compras.")
        if(aux == "sair"){
            break;
        } else frutas.push(aux)
    }

    for (i in frutas) {
        document.write("<br> O ", parseInt(i)+1, "º item do seu carrinho é ", frutas[i])
    }
}

cadastrarFrutas()