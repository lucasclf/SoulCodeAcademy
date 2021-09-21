class Pessoa{

    constructor(private nome:string, private idade:number, private cpf:string){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    escreverPropriedades(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.cpf)
    }

    getNome(){
        return this.nome;
    }

    setNome(nome: string){
        this.nome = nome;
    }

    getIdade(){
        return this.idade;
    }

    setIdade(idade: number){
        this.idade = idade;
    }

    getCpf(){
        return this.cpf;
    }

    setCpf(Cpf: string){
        this.cpf = Cpf;
    }

}

let pessoa = new Pessoa("Lucas", 34, "111.111.111-11")

/* console.log(pessoa.escreverPropriedades()) */

pessoa.setNome("Pedro")
console.log(pessoa.getNome())

interface propriedadesCarro{
    marca: string
}

class Carro implements propriedadesCarro{
    marca!: string
}