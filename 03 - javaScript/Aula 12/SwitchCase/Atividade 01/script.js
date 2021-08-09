var mes = 0

mes = prompt("Informe o mês a ser analisado: ")

switch (mes) {
    case "janeiro":
        document.write(mes, " tem 31 dias")
        break;
    case "fevereiro":
        document.write(mes, " tem 28 dias(29 em anos bissextos)")
        break;
    case "março":
        document.write(mes, " tem 31 dias")
        break;
    case "abril":
        document.write(mes, " tem 30 dias")
        break;
    case "maio":
        document.write(mes, " tem 31 dias")
        break;
    case "junho":
        document.write(mes, " tem 30 dias")
        break;
    case "julho":
        document.write(mes, " tem 31 dias")
        break;
    case "agosto":
        document.write(mes, " tem 31 dias")
        break;
    case "setembro":
        document.write(mes, " tem 30 dias")
        break;
    case "outubro":
        document.write(mes, " tem 31 dias")
        break;
    case "novembro":
        document.write(mes, " tem 30 dias")
        break;
    case "dezembro":
        document.write(mes, " tem 31 dias")
        break;
    default:
        document.write("ERRO")
}