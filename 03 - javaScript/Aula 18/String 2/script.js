var teste = [], nomes_corrigidos = [], telefones_corrigidos = []

teste[0] = "João Arara da Silva (22) 9 1515 9834"
teste[1] = "Maria Antonia Lacerda (11) 9 6378 8554"
teste[2] = "Roberta Faria (17) 9 9telefone roberta 9 6331 2587" 

for (i=0; i<teste.length; i++) {
    nomes_corrigidos.push(teste[i].slice(0, teste[i].indexOf(" (")))
    telefones_corrigidos.push(teste[i].slice(teste[i].indexOf(" (")+1, teste[i].length))
    telefones_corrigidos[i] = telefones_corrigidos[i].replace("(", " ")
    telefones_corrigidos[i] = telefones_corrigidos[i].replace(")", "")
}

for (i=0; i<teste.length; i++) {
    document.write("Antes: <br> Nome:", teste[i], "<br>")
    document.write("Depois: <br> Nome: ", nomes_corrigidos[i], " Telefone: ", telefones_corrigidos[i], "<br><br>")
}