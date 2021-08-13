class Pessoa {
  
  constructor(nome_construtor, email_construtor, idade_construtor) {
    this.nome = nome_construtor
    this.email = email_construtor
    this.idade = idade_construtor
  }
  mostrar_dados(){
    return "Nome: "+this.nome+"<br> Idade: "+this.idade+"<br> E-mail: "+this.email
  }

}


function enviar_dados() {
  
  var nome_input = document.getElementById("nome").value
  var idade_input = document.getElementById("idade").value
  var email_input = document.getElementById("email").value
  var pessoa_1 = new Pessoa(nome_input, email_input, idade_input)
  document.write(pessoa_1.mostrar_dados())
}
