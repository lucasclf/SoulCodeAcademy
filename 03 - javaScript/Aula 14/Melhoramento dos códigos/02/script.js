var ano = 0, idade = 0;

ano = parseInt(prompt("Informe seu ano de nascimento "));

function maioridade (val1) {
    idade = 2021 - val1
    if(idade < 0) {
        return "Não é possivel inserir um valor negativo"
    } else if(idade < 18){
        return "Você é menor de idade"
    } else if(idade >= 18 && idade < 131){
        return "Você é maior de idade"
    } else if (idade >= 130) {
        return "Desculpa, mas, eu não acredito que você tenha mais de 130 anos"
    }
    console.log("val1", val1, "idade", idade)
}

    document.write(maioridade(ano),".")