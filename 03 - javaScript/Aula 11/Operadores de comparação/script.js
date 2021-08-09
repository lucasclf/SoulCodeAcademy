var idadeMinha = 33;
var moduloIdade = idadeMinha%2;
var peso = 130;
var altura = 1.80;
var idade = 0;
var indice = peso / (altura ^ 2)

document.write("Minha idade é maior que 25?<br>");
document.write(idadeMinha >= 25 ? "Sim, minha idade é maior que 25." : "Não, minha idade não é maior que 25.", "<br><br><br>");


document.write("Essa idade é par?<br>");
document.write(moduloIdade = 0 ? "Sim, o numero é par" : "Não, o numero não é par", "<br><br><br>");

document.write(indice >= 30 ? "Você está obeso, procure um aconselhamento médico." : "Você não está obeso, ainda assim procure um médico e mantenha seus exames em dia.")