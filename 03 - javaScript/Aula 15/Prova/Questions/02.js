/* 02.Considerando a, b, c e d como variáveis com valores iniciais iguais a 5, 7, 3 e 9,
respectivamente, assinale a opção correta.
a. O resultado da expressão (a != 3 || b < 10 || c == 5) é falso.
b. O resultado da expressão (d > 8 && c == 3 || a >= 10) é verdadeiro.
O resultado da expressão !(d == 12 && a != 10) é falso.
d. O resultado da expressão (c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) ) é
falso.
e. O resultado da expressão (a == 3 || b > 10 || d == 8 ) é verdadeiro. */

var a = 5, b = 7, c = 3, d = 9;

document.write("A opção <strong>B</strong> é a unica correta, tendo em vista que:<br><br>")

document.write("<strong>a</strong> é")

if (a != 3 || b < 10 || c == 5) {
    document.write(" verdadeiro. <br>")
} else document.write(" falso. <br>")

document.write("<strong>b</strong> é")

if (d > 8 && c == 3 || a >= 10) {
    document.write(" verdadeiro. <br>")
} else document.write(" falso. <br>")

document.write("<strong>c</strong> é")

if (!(d == 12 && a != 10)) {
    document.write(" verdadeiro. <br>")
} else document.write(" falso. <br>")

document.write("<strong>d</strong> é")

if ((c == 4 || d <=6) && (a >= 5 && b !=9) || ( ! (a < 5) )) {
    document.write(" verdadeiro. <br>")
} else document.write(" falso. <br>")

document.write("<strong>e</strong> é")

if (a == 3 || b > 10 || d == 8 ) {
    document.write(" verdadeiro. <br>")
} else document.write(" falso. <br>")

document.write("<br>")
