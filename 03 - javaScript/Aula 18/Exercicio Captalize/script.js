var nome = "lucas coquenão lemos ferreira"

/* function captalize(nome) {
    var nome_capitalizado;

    document.write("letra: ", nome[0], " codigo: ", nome.charCodeAt(0), " capitalizada: ", String.fromCharCode(nome.charCodeAt(0)-32))
    return nome_capitalizado
    document.write(nome)
}

captalize(nome) */

function captalize2(nome) {
    var nomeCaps = 0, i = 0, aux = 0
    aux = nome[0];
    nomeCaps = nome.replace(aux, aux.toUpperCase())

    for(i=0; i<nome.length; i++) {
        aux = nome.indexOf(" ")+1
        document.write("<br>", aux)
    }
}

captalize2(nome)