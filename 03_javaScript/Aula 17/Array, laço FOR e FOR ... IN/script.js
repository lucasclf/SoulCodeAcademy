var alunos = new Array(), soma = 0;

alunos.length = parseInt(prompt("Favor informar quantos alunos existem: "))

for (i = 0; i < alunos.length; i++) {
    alunos[i] = parseInt(prompt("Favor informar a nota do "+(i+1)+"º aluno: "))
}

for (i in alunos) {
    soma += alunos[i]
}

document.write("A nota média da sala é ", soma/alunos.length)
