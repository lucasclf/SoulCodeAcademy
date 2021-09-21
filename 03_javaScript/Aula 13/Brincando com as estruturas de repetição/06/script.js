/* var numero = 0, fatorial = 1, i = 1;

numero = parseInt(prompt("Informe o valor que você deseja saber o fatorial: "))

for(i ; i<=numero ; i++) {
	fatorial *= i;
}

document.writeln(fatorial) */

var valor = 0, total = 0, i = 1;

valor = prompt("Digite o valor que você quer saber o fatorial: ")

if (valor == 0) {
	document.write("0! = 1");
} else {
	total = valor;
	document.write(valor, `! = ${valor} X `)
	for (i; i < valor; i++) {
		total *= valor - i;
		if (i != valor - 1) {
			document.write(valor - i, " X ");
		} else document.write(valor - i, " = ")
	}
}

document.write(total)