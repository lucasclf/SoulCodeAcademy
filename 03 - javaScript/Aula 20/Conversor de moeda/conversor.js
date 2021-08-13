function converterMoeda() {
    
    aux1 = document.getElementById("currency1"); //Aqui a variavel aux1 está pegando todos os elementos do seletor de id="currency1"
    moeda1 = aux1.options[aux1.selectedIndex].value //Aqui a variavel moeda1 está pegando está pegando especificamente o valor do item selecionado em currency1(cujos valores agora estão dentro de aux1)
    aux2 = document.getElementById("currency2"); //Aqui a variavel aux2 está pegando todos os elementos do seletor de id="currency2"
    moeda2 = aux2.options[aux2.selectedIndex].value //Aqui a variavel moeda2 está pegando está pegando especificamente o valor do item selecionado em currency2(cujos valores agora estão dentro de aux2)
    valor = document.getElementById("valor").value //Aqui a variavel valor está pegando o valor do input de id="valor"

    console.log(moeda1, moeda2, valor)

    switch (moeda1) {
        case "real":
            switch (moeda2) {
                case "real":
                    document.getElementById("resposta").innerHTML = "Mesmas moedas escolhidas, favor escolhere novamente."
                    break
                case "dolarAmericano":

                    document.getElementById("resposta").innerHTML = ("R$ "+valor+" equivale a "+(valor*5.24)+" dolares americanos.")
                    break
                case "dolarCanadense":

                    document.getElementById("resposta").innerHTML = ("R$ "+valor+" equivale a "+(valor*4.18)+" dolares canadenses.")
                    break
            }
        break
        case "dolarAmericano":
            switch (moeda2) {
                case "real":

                    document.getElementById("resposta").innerHTML = (valor+" dolares americanos equivalem a R$ "+(valor*0.19))
                    break
                case "dolarAmericano":

                    document.getElementById("resposta").innerHTML = "Mesmas moedas escolhidas, favor escolhere novamente."
                    break
                case "dolarCanadense":

                    document.getElementById("resposta").innerHTML = (valor+" dolares americanos equivalem a "+(valor*0.79))+" dolares canadenses."
                    break
            }
        break
        case "dolarCanadense":
            switch (moeda2) {
                case "real":

                    document.getElementById("resposta").innerHTML = (valor+" dolares canadenses equivalem a R$ "+(valor*4.18))
                    break
                case "dolarAmericano":

                    document.getElementById("resposta").innerHTML = (valor+" dolares canadenses equivalem a "+(valor*0.79))+" dolares americanos."
                    break
                case "dolarCanadense":

                    document.getElementById("resposta").innerHTML = "Mesmas moedas escolhidas, favor escolhere novamente."
                    break
            }
    }
}
