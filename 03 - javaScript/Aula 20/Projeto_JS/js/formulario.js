function aumenta_fonte() {
  var elemento = document.getElementById("principal");
  var tamanho_fonte = getComputedStyle(elemento).fontSize;
  tamanho_atual = parseFloat(tamanho_fonte);
  elemento.style.fontSize = (tamanho_atual + 1) + 'px';
}

function diminui_fonte() {
  var elemento = document.getElementById("principal");
  var tamanho_fonte = getComputedStyle(elemento).fontSize;
  tamanho_atual = parseFloat(tamanho_fonte);
  elemento.style.fontSize = (tamanho_atual - 1) + 'px';
}

function modo_noturno1() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  document.getElementById("cadastro").style.color = "white";
  document.getElementById("cadastro_p").style.color = "white";
  document.getElementById("label_nome").style.color = "white";
  document.getElementById("label_cpf").style.color = "white";
  document.getElementById("label_nascimento").style.color = "white";
  document.getElementById("label_email").style.color = "white";
  document.getElementById("retorno").style.color = "white";
}

function modo_noturno2(){
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  document.getElementsByTagName("body")[0].style.Color = "black";
  document.getElementById("cadastro").style.color = "black";
  document.getElementById("cadastro_p").style.color = "black";
  document.getElementById("label_nome").style.color = "black";
  document.getElementById("label_cpf").style.color = "black";
  document.getElementById("label_nascimento").style.color = "black";
  document.getElementById("label_email").style.color = "black";
  document.getElementById("retorno").style.color = "black";
  }

/*Script para validar formulario de cadastro*/

function retornaInf() {
  const dataNascimento = new Date(document.getElementById("nascimento").value);
  const idade = calculaidade(dataNascimento)
  document.getElementById("retorno").innerHTML = ("Olá " + document.getElementById("nome").value + " seu login é " + document.getElementById("email").value + " Você tem " + idade + " anos. Se define com uma pessoa do sexo " + document.getElementById("selecao").value + " e pode usar " + document.getElementById("cpf").value + " como senha.")
}

//validando nome digitado pelo usuário*****ok
function validaNome(nome) {
  if (!isNaN(nome.value)) {
    nome.style.border = "red solid 3px";
    nome.style.boxShadow = "0px 0px 4px red";
  } else {
    nome.style.border = "green solid 3px";
    nome.style.boxShadow = "0px 0px 4px green";
  }
  document.getElementById("nome").value = document.getElementById("nome").value.toUpperCase();
}

//validando cpf digitado pelo usuário *******ok
function validaCPF(cpf) {
  var cpfValue = parseInt(cpf.value)

  if (cpfValue == "" || isNaN(cpfValue)) {
    cpf.style.border = "red solid 3px";
    cpf.style.boxShadow = "0px 0px 4px red";
  } else {
    cpf.style.border = "green solid 3px";
    cpf.style.boxShadow = "0px 0px 4px green";
  }
  console.log(cpf);
}

cpf.addEventListener("blur", () => {
  var value = cpf.value.replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");
  cpf.value = value;
})

function calculaidade(dataNascimento){
  const now = new Date()
  let idade = now.getFullYear() - dataNascimento.getFullYear();

  const diffMonths = now.getMonth() - dataNascimento.getMonth()
  if (diffMonths < 0) {
    idade--;
  } else if (diffMonths == 0 && ((now.getUTCDate() - dataNascimento.getUTCDate()) < 0)) {
    idade--;
  }
 return idade;
}

//validando a data de nascimento digitada pelo usuário
function validaNascimento(nascimento) {

  const dataNascimento = new Date(nascimento.value);
  const idade = calculaidade(dataNascimento)
  
  if (idade < 0 || idade > 130) {
    nascimento.style.border = "red solid 3px";
    nascimento.style.boxShadow = "0px 0px 4px red";
  } else {
    nascimento.style.border = "green solid 3px";
    nascimento.style.boxShadow = "0px 0px 4px green";
  }
}

//validando o email digitado pelo usuário *******ok
function validaEmail(email) {

  document.getElementById("email").value;

  if (email.value == "" || email.value.indexOf('@') < 0) {
    email.style.border = "red solid 3px";
    email.style.boxShadow = "0px 0px 4px red";
  } else {
    email.style.border = "green solid 3px";
    email.style.boxShadow = "0px 0px 4px green";
  }

}
