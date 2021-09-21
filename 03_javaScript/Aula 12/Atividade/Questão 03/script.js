var formaPagamento = 0, precoEtiqueta = 0;

precoEtiqueta = parseInt(prompt("Informe o valor do produto: "))
formaPagamento = prompt("Escolha a forma de pagamento entre, débito, cheque, dinheiro, 2x ou 3x.")

if (formaPagamento == "débito" || formaPagamento == "cheque") {
    document.write("O valor final será de: ", precoEtiqueta - (precoEtiqueta * 0.1))
} if (formaPagamento == "dinheiro") {
    document.write("O valor final será de: ", precoEtiqueta - (precoEtiqueta * 0.15))
} if (formaPagamento == "2x") {
    document.write("O valor final será de: ", precoEtiqueta)
} if (formaPagamento == "3x") {
    document.write("O valor final será de: ", precoEtiqueta + (precoEtiqueta * 0.10))
}
