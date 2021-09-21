var frutas = ["banana", "manga", "pera", "jaca"], legumes = [];
var pessoa = {"nome":"Sayure", "endereço":"Rua b", "idade":15};
var multidimensional = []
    multidimensional[0] = []
    multidimensional[0][0] = "João"
    multidimensional[0][1] = "Carla"
    multidimensional[0][2] = "Maria"
    multidimensional[1] = []
    multidimensional[1][0] = "20"
    multidimensional[1][1] = "15"
    multidimensional[1][2] = "40"


for (i = 0; i < 4; i++) {
    legumes[i] = prompt("Digite um legumes: ")
}

console.log("frutas: ", frutas)
console.log("legumes: ", legumes)
console.log("pessoa:", pessoa)
console.log("multidimensional:"+ multidimensional)



