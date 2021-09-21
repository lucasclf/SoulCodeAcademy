function sorteia_um_numero(){
    var num = 0;
    while (true){
        num = Math.round(Math.random() * 100);
        if(num > 0 && num <= 60)
            return num;
    }
}

function veririfica_repetidos(vetor, numero){
    var i = 0;
    for(i in vetor){
        if(vetor[i] == numero)
            return true;
    }
    return false;
}

function sortear_sena(){
    var aposta = [], aux = 0, i;
    document.write("Aposta valida da sena: <br>")
    for(i=0;i<6;i++){
        aux = sorteia_um_numero();
        while(veririfica_repetidos(aposta, aux))
            aux = sorteia_um_numero();
        aposta.push(aux)
    }
    document.write(aposta)
}