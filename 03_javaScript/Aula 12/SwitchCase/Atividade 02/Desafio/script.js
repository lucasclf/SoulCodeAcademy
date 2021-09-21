var codigo = 0, quantidade = 0

codigo = parseInt(prompt("Informe o código do seu lanche: "))

quantidade = parseInt(prompt("Informe a quantidade de lanches: "))

switch (codigo) {
    case 100:
        document.write("O valor do cachorro quente é R$ 1.20, logo você pagará R$ ", quantidade * 1.2)
        break;
     case 101:
        document.write("O valor do bauru  é R$ 1.30, logo você pagará R$ ", quantidade * 1.3)
        break;
    case 102:
        document.write("O valor do bauru com ovo é R$ 1.50, logo você pagará R$ ", quantidade * 1.5)
        break;
    case 103:
        document.write("O valor do hamburguer é R$ 1.20, logo você pagará R$ ", quantidade * 1.2)
        break;
    case 104:
        document.write("O valor do cheeseburguer é R$ 1.30, logo você pagará R$ ", quantidade * 1.3)
        break;
    case 105:
        document.write("O valor do refrigerante é R$ 1.00, logo você pagará R$ ", quantidade)
        break; 
    default:
        document.write("ERRO")
}