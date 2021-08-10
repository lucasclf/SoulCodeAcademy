var alunos = []

alunos["nome"] = []
alunos["nota_html"] = []
alunos["nota_CSS"] = []
alunos["nota_Java"] = []
alunos["media"] = []

alunos["nome"][0] = "João"
alunos["nota_html"][0] = 70
alunos["nota_CSS"][0] = 60
alunos["nota_Java"][0] = 60

alunos["nome"][1] = "Maria"
alunos["nota_html"][1] = 50
alunos["nota_CSS"][1] = 50
alunos["nota_Java"][1] = 50

alunos["nome"][2] = "Cesar"
alunos["nota_html"][2] = 100
alunos["nota_CSS"][2] = 100
alunos["nota_Java"][2] = 100

for(i=0; i<alunos["nome"].length; i++){
    alunos["media"][i] = (alunos["nota_html"][i]+alunos["nota_CSS"][i]+alunos["nota_Java"][i])/3
}

for(i=0; i<3; i++) {
    document.writeln(alunos["nome"][i], " ",alunos["nota_html"][i], " ", alunos["nota_CSS"][i], " ", alunos["nota_Java"][i], " ", alunos["media"][i], "<br>")
}