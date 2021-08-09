var idade = 0;

idade = parseInt(prompt("Informe sua idade: "))

if (idade >= 70) {
    document.write("Voto opcional.");
} else if (idade >= 18) {
    document.write("Voto obrigatório.");
} else if (idade >= 16) {
    document.write("Voto opcional.")
} else {
    document.write("Não pode votar.")
}