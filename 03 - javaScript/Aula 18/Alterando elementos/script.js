var numeros = [];
var triploNumeros = [] 
var numerosPares = []

for (i = 0; i < 4; i++){
    numeros.push(parseInt(prompt("Digite um numero: ")))
}

triploNumeros = numeros.map(elemento => elemento*3)

numerosPares = triploNumeros.filter(elemento => elemento % 2 == 0)

document.writeln("Numeros originais: ", numeros, "<br>")

document.writeln("Triplo dos numeros: ", triploNumeros, "<br>")

document.writeln("Numeros pares: ", numerosPares, "<br>")

document.writeln("Função every para triplo menores que 4: ", triploNumeros.every(elementos => elementos < 4), "<br>")

document.writeln("Função some para triplo menores que 4: ", triploNumeros.some(elementos => elementos > 4), "<br>")

document.writeln("Função find para triplo menores que 4: ", triploNumeros.find(elementos => elementos > 4), "<br>")