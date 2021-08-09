var idade = 0;

function get_idade() {
    var idade = 10;
    document.write(idade, " dentro da função <br>")
    return idade;
}

idade = 22;
document.write(idade, " fora da função <br>")
idade = get_idade()
document.write(idade, " fora da função <br>")
