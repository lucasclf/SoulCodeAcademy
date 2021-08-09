var loop = 0, idade = 0, temp = 0, maior = 0, menor = 0;

while (loop < 10) {
	idade = parseInt(prompt("Informe uma idade."));
	loop++
	if(idade >= 18){
		maior++
	} else {menor++}
}

document.write(maior, " pessoas são maiores de idade.<br><br><br>")

document.write(menor, " pessoas são menores de idade.<br><br><br>")