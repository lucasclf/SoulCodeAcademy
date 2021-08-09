var idade = 0, erro = 0;

do {
	idade = prompt("Digite sua idade: ");
	aux = idade - parseInt(idade);
	console.log(aux)
	
	if(idade <= 0 || idade > 200 || aux != 0 || idade == " " || isNaN(aux)){
		alert("Valor de idade inválido!")
		temp = 0
	} else {
		temp = 1
		alert("Valor de idade válida!")
	}

} while(temp != 1)

// idade positiva. ok
// idade < 200 e idade > 0. ok
// idade != " ". ok
// idade != float.
// idade != string. ok