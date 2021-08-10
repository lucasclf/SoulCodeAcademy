var teste = ["F","r",2,3,5,2,6,"J","a","T",1,2,4];

document.write(teste, "<br>")

for (i=0; i<=13; i++){
    aux = teste[13-i]
    teste.push(aux)
}

for (i=0; i<=13; i++){
    teste.shift()
}

document.write(teste)