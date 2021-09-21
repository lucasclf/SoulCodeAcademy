class Carro{
    marca!:string
    placa!:string
    chassi!:string

    constructor(marca:string, placa:string, chassi:string){
        this.marca = marca
        this.placa = placa
        this.chassi = chassi
    }

    escreverPropriedades(){
        console.log(this.marca)
        console.log(this.placa)
        console.log(this.chassi)
    }

}

let carro = new Carro("FiatK", "EJS-111", "ASDQ1345L67JH890AS")

console.log(carro.escreverPropriedades())