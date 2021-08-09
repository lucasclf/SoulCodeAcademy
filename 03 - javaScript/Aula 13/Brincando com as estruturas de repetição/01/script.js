var menor = 100, maior = 0, altura = 0, loop=1;

while(loop < 16){
	msg = "Informe a altura da " + loop + "º"
	altura = prompt(msg);
	loop++
	if(altura < menor){
		menor = altura
	} 
	if(altura > maior){
		maior = altura
	}
	console.log(altura, maior, menor)
}
document.write("A maior altura é ", maior, " e a menor altura é ", menor)