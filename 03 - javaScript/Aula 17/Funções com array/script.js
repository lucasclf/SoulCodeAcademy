var vetor = new Array(6);

for (i = 0; i < vetor.length; i++) {
    vetor[i] = i
    document.writeln("Vetor ", i, ": ", vetor[i], "<br>")
}

function sobra(){
    document.write("<br>")
    for (i = 0; i < vetor.length; i++) {
        vetor[i] = i*2
        document.writeln("Dobro ", i, ": ", vetor[i], "<br>")
    }
}

sobra()

