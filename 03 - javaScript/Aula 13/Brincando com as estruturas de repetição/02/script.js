var quantidade = 0, loop = 0, soma = 0, aux = 0, positivo = 0, negativo = 0;

quantidade = prompt("Para calcular a média aritimética, precisamos que você nos informe quantos numeros serão informados.")

while (quantidade != loop) {
	aux = parseInt(prompt("Informe o numero."));
	loop++;
	soma += aux;
	if(aux>0) positivo++
	if(aux<0) negativo++
}

document.write("A média aritmética é: ", (soma / quantidade), "<br><br><br> Você informou ", positivo, " numeros positivos e ", negativo, " numeros negativos.")
