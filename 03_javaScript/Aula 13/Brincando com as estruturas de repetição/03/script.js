var loop = 0, aux = 0, temp = 0, intervalo0_25 = 0, intervalo26_50 = 0, intervalo51_75 = 0, intervalo76_100 = 0;

while (loop < 10) {
	aux = parseInt(prompt("Informe o numero."));
	do {
		if(aux >= 0){
			alert("Numero informado válido!");
			temp = 1;
		} else {
			temp = 0;
			alert("Numero informado inválido!");
			aux = parseInt(prompt("Informe o numero."));
		}
	} while(temp != 1);
		if(aux >= 0 && aux <=25){
			intervalo0_25++;
		} else if (aux >= 26 && aux <=50){
			intervalo26_50++;
		} else if (aux >= 51 && aux <=75){
			intervalo51_75++;
		} else if (aux >= 76 && aux <=100){
			intervalo76_100++;
		}
	loop++;

	console.log("loop", loop, "aux", aux);
}

document.write("Você forneceu ", intervalo0_25, " valores entre 0 e 25. <br><br><br>");

document.write("Você forneceu ", intervalo26_50, " valores entre 26 e 50. <br><br><br>");

document.write("Você forneceu ", intervalo51_75, "valores entre 51 e 75. <br><br><br>");

document.write("Você forneceu ", intervalo76_100, " valores entre 76 e 100. <br><br><br>");