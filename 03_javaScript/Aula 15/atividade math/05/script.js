var num1 = 0;

num1 = parseInt(prompt("Insira o primeiro valor: "))

function angulo(val1) {
    sen = 0, cos = 0, tan = 0;
    sen = Math.sin(val1), cos = Math.cos(val1), tan = Math.tan(val1);
    document.write("Você escolheu o angulo ", val1, "º e seu seno é de ", sen," rad.<br> Seu cosseno é de ", cos, " rad.<br> E sua tangente é de ", tan, " rad.")
}

angulo(num1)