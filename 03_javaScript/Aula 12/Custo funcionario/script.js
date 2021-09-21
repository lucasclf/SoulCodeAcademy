var salario = 1800;
var fgtsInss = 0.2;
var decimoTerceiro = salario;
var ferias = 1/3 * salario;
var custoFuncionario = 0;
var imposto = 0;

document.write("O valor das férias é R$ ", ferias, ".<br><br><br>")

imposto = 13 * (0.2 * (1800)) + 0.2 * (ferias);

custoFuncionario = 13 * ((salario) + (salario * fgtsInss))  + ferias + (ferias * fgtsInss);

document.write("O custo do funcionário é de R$ ", custoFuncionario, ".<br><br><br>")

custoFuncionario = (13 * salario) + imposto + ferias;

document.write("O custo do funcionário é de R$ ", custoFuncionario, ".<br><br><br>")