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
    document.getElementById("sobreNos").style.color = "white";
    document.getElementById("Paragrafos").style.color = "white";
    document.getElementById("desenvolvimento").style.color = "white";
    document.getElementById("fundadores1").style.color = "white";
    document.getElementById("cadastro").style.color = "white";
    document.getElementById("cadastro_p").style.color = "white";
    document.getElementById("label_nome").style.color = "white";
    document.getElementById("label_cpf").style.color = "white";
    document.getElementById("label_nascimento").style.color = "white";
    document.getElementById("label_email").style.color = "white";
    document.getElementById("label_cpf").style.color = "white";
    document.getElementById("retorno").style.color = "white";
}

function modo_noturno2(){
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("body")[0].style.Color = "black";
    document.getElementById("sobreNos").style.color = "black";
    document.getElementById("Paragrafos").style.color = "black";
    document.getElementById("desenvolvimento").style.color = "black";
    document.getElementById("fundadores1").style.color = "black";
    }
