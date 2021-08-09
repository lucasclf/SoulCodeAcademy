var sexo = function() {
    genero = prompt("Informe F para feminino e M para masculino: ")
    if (genero == "f" || genero == "F") {
        return "Genero feminino."
    } else if (genero == "m" || genero == "M"){
         return "Genermo masculino."
    } else return "Opção inexistente."
}

document.write(sexo())