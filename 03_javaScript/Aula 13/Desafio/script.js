var tipoDeMedida = 0, valor = 0, unidade = 0;

tipoDeMedida = prompt("Informe se você deseja converter uma medidade de velocidade ou distância: ", "velocidade ou distância")


switch (tipoDeMedida) {
	case "velocidade":

		valor = parseFloat(prompt("Informe o valor da sua medida, utilizando ponto(.) para separar o valoro decimal: ", "Ex.: 1 ou 1.2 ou 3.5"))

		unidade = prompt("Informe o tipo de medida a ser solicitada: ", "km/h ou m/s ou ft/s")

		if (unidade == "km/h") {
			document.write(valor, " km/h equivalem a <br> * ", valor / 3.6, " m/s <br> * ", valor / 1.097, "ft/s");
		} else if (unidade == "m/s") {
			document.write(valor, " m/s equivalem a <br> * ", valor * 3.6, " km/h <br> * ", valor * 3.281, "ft/s");
		} else if (unidade == "ft/s") {
			document.write(valor, " ft/s equivalem a <br> * ", valor / 3281, " km/h <br> * ", valor / 3.281, "m/s");
		};
		break;

	case "distância":
		valor = parseFloat(prompt("Informe o valor da sua medida, utilizando ponto(.) para separar o valoro decimal: ", "Ex.: 1 ou 1.2 ou 3.5"))

		unidade = prompt("Informe o tipo de medida a ser solicitada: ", "m ou cm ou mm ou ft ou yd ou in")

		if (unidade == "m") {
			document.write(valor, " metros equivalem a <br> * ")
			document.write(valor * 100, " centimetros.<br> * ")
			document.write(valor * 1000, " milimetros.<br> * ")
			document.write(valor * 1.094, " jardas.<br> * ")
			document.write(valor * 3.281, " pés.<br> * ")
			document.write(valor * 39.37, " polegadas.<br>");
		} else if (unidade == "cm") {
			document.write(valor, " centimetros equivalem a <br> * ")
			document.write(valor / 100, " metros.<br> * ")
			document.write(valor * 10, " milimetros.<br> * ")
			document.write(valor / 91.44, " jardas.<br> * ")
			document.write(valor * 30.48, " pés.<br> * ")
			document.write(valor * 39.37, " polegadas.<br>");
		} else if (unidade == "mm") {
			document.write(valor, " milimetros equivalem a <br> * ")
			document.write(valor / 1000, " metros.<br> * ")
			document.write(valor * 10, " centimetros.<br> * ")
			document.write(valor / 914, " jardas.<br> * ")
			document.write(valor / 305, " pés.<br> * ")
			document.write(valor / 25.4, " polegadas.<br>")
		} else if (unidade == "yd") {
			document.write(valor, " jardas equivalem a <br> * ")
			document.write(valor / 1.094, " metros.<br> * ")
			document.write(valor * 91.44, " centimetros.<br> * ")
			document.write(valor * 914, " milietros.<br> * ")
			document.write(valor * 3, " pés.<br> * ")
			document.write(valor * 36, " polegadas.<br>")
		} else if (unidade == "ft") {
			document.write(valor, " pés equivalem a <br> * ")
			document.write(valor / 3.281, " metros.<br> * ")
			document.write(valor * 30.48, " centimetros.<br> * ")
			document.write(valor * 304, " milietros.<br> * ")
			document.write(valor / 3, " jardas.<br> * ")
			document.write(valor * 12, " polegadas.<br>")
		} else if (unidade == "in") {
			document.write(valor, " polegadas equivalem a <br> * ")
			document.write(valor / 39.37, " metros.<br> * ")
			document.write(valor * 2.54, " centimetros.<br> * ")
			document.write(valor * 25.4, " milietros.<br> * ")
			document.write(valor / 36, " jardas.<br> * ")
			document.write(valor / 12, " pés.<br>")
		}
		break;
};

