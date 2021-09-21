function exercicio() {
    var tamanhoTemperaturas, temperaturas = [], tamanhoNomes, nomes = [], tempMaior = []

    while (tamanhoTemperaturas < 0 || tamanhoTemperaturas > 10 || isNaN(tamanhoTemperaturas)){
        tamanhoTemperaturas = parseInt(prompt("Informe o numero de temperaturas a serem analisadas entre 0 a 10: "))
    } 

    for (i=0; i<tamanhoTemperaturas; i++){
        while(isNaN(temperaturas[i]))
        temperaturas[i] = parseInt(prompt("Informe a "+(parseInt(i)+1)+"ª temperatura a ser analisada: "))
    }

    while (tamanhoNomes < 0 || tamanhoNomes > 10 || isNaN(tamanhoNomes)){
        tamanhoNomes = parseInt(prompt("Informe o numero de nomes a serem analisados: "))
    }

    for (i=0; i<tamanhoNomes; i++){
        nomes[i] = prompt("Informe o " +(parseInt(i)+1)+ "ª nome a ser analisado: ")
    }

    if (nomes.some(elementos => elementos == "Eliana")){
        document.write("Eliana é um nome cadastrado. <br><br><br>")
    } else document.write("Eliana não é um nome cadastrado. <br><br><br>")

    tempMaior = temperaturas.filter(elemento => elemento > 20)

    document.writeln("As temperatutas maiores que 20 são: ", tempMaior,"<br><br><br>")

    if (nomes.some(elementos => elementos == "Carlos")){
        document.write("O nome Carlos está cadastrado na posição:", nomes.findIndex(elementos => elementos == "Carlos"), "<br><br><br>")
    } else document.write("Carlos não é um nome cadastrado. <br><br><br>")

    temperaturas.forEach(element => {
        document.write("O cubo da temperatura ",element, " é: ", element * element * element,"<br>")
        })
}
