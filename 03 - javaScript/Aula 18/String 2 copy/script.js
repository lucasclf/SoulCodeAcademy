var datatime = [], nomes_corrigidos = [], telefones_corrigidos = []

datatime[0] = "João Arara da Silva (22) 111111111"
datatime[1] = "Maria Antonia Lacerda (11) 22222222222"
datatime[2] = "Roberta Faria (17) 333333333333"

for (i=0; i<datatime.length; i++) {
    nomes_corrigidos.push(datatime[i].slice(0, datatime[i].indexOf(" (")))
    telefones_corrigidos.push(datatime[i].slice(datatime[i].indexOf(" ("))+1, datatime[i].length)
}

for (i=0; i<datatime.length; i++) {
    document.write("Antes: <br> Nome:", datatime[i], "<br>")
    document.write("Depois: <br> Nome: ", nomes_corrigidos[i], " Telefone: ", telefones_corrigidos, "<br><br>")
}