var salario = 0, plano = 0

salario = parseInt(prompt("Informe o seu salário: "))
plano = prompt("Informe seu plano, entre A, B ou C: ")

switch (plano) {
    case "A":
        document.write("Seu novo salário é de R$ ", salario*1.1)
        break;
    case "B":
        document.write("Seu novo salário é de R$ ", salario*1.15)
        break;
    case "C":
        document.write("Seu novo salário é de R$ ", salario*1.2)
        break;
    default:
        document.write("ERRO")
}