class Pessoa {
  constructor(nome, genero, idade, salario){
    this.nome = nome;
    this.genero = genero;
    this.idade = idade;
    this.salario = salario
  }

}

class Cliente extends Pessoa {
  
  mostrar_dados(){
    var dados
    dados = ("CLIENTE<BR><BR>Nome do cliente: "+ this.nome+ "<br> Genero do cliente: "+ this.genero+ "<br> Idade do cliente: "+ this.idade+ "<br>")
    return dados
  }

}

class Funcionario extends Pessoa {
  
  mostrar_dados(){
    var dados
    dados = ("FUNCIONÁRIO<BR><BR>Nome do funcionário: "+ this.nome+ "<br> Genero do funcionário: "+ this.genero+ "<br> Salário: R$ "+this.salario+"<br>")
    return dados
  }

}

var pessoa1 = new Cliente("João", "Masculino", "32", "")
var pessoa2 = new Funcionario("Maria", "Prefere não identificar", "20", "2.500,00")
var pessoa3 = new Funcionario("Larissa", "Feminino", "25", "2.300,00")

document.write(pessoa1.mostrar_dados(), "<br>")

document.write(pessoa2.mostrar_dados(), "<br>") 

document.write(pessoa3.mostrar_dados(), "<br>") 