var aluno1 = "Jorge"
var aluno2 = "Carla";
var aluno3 = "Maria";
var aluno1Nota1 = 10;
var aluno1Nota2 = 5;
var aluno1Nota3 = 1;
var aluno2Nota1 = 10;
var aluno2Nota2 = 7;
var aluno2Nota3 = 6;
var aluno3Nota1 = 1;
var aluno3Nota2 = 9;
var aluno3Nota3 = 8;
var aluno1Media = (aluno1Nota1+aluno1Nota2+aluno1Nota3) / 3;
var aluno2Media = (aluno2Nota1+aluno2Nota2+aluno2Nota3) / 3;
var aluno3Media = (aluno3Nota1+aluno3Nota2+aluno3Nota3) / 3;

document.write(aluno1+" sua média é de "+aluno1Media+".<br><br>")
document.write(aluno1+". "+aluno1Media >= 7 ? "Você foi aprovado!" : "Você foi reprovado", "<br><br><br><br>")

document.write(aluno2+" sua média é de "+aluno2Media+".<br><br>")
document.write(aluno2+". "+aluno2Media >= 7 ? "Você foi aprovado!" : "Você foi reprovado", "<br><br><br><br>")

document.write(aluno3+" sua média é de "+aluno3Media+".<br><br>")
document.write(aluno3+". "+aluno3Media >= 7 ? "Você foi aprovado!" : "Você foi reprovado", "<br><br><br><br>")