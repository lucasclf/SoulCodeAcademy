function modoNoturno() {
    var x = document.getElementsByTagName("body")[0].style.background
    if(x != "black"){
        document.getElementsByTagName("body")[0].style.background = "black"
        document.getElementsByTagName("body")[0].style.color = "white"
    } else if (x == "black"){
        document.getElementsByTagName("body")[0].style.background = "white"
        document.getElementsByTagName("body")[0].style.color = "black"
    }
}

function modoAcessibilidade() {
    var x = document.getElementsByTagName("body")[0].style.fontSize
    if(x != "black"){
        document.getElementsByTagName("body")[0].style.background = "black"
        document.getElementsByTagName("body")[0].style.color = "white"
    } else if (x == "black"){
        document.getElementsByTagName("body")[0].style.background = "white"
        document.getElementsByTagName("body")[0].style.color = "black"
    }
}

function validarSangue() {
    var sangue = document.forms["formulario"]["sangue"].value
    if(sangue != "a"  && sangue != "A" && sangue != "b" && sangue != "B" && sangue != "o" && sangue != "O" && sangue != "ab" && sangue != "AB" && sangue != "aB" && sangue != "Ab"){
        document.getElementById("tipo-sanguineo").style.background = "red"
    } else {
        document.getElementById("tipo-sanguineo").style.background = "green"
        }
}

function validarRH() {
    var rh = document.forms["formulario"]["rh"].value
    if(rh != "+"  && rh != "-"){
        document.getElementById("rh-input").style.background = "red"
    } else {
        document.getElementById("rh-input").style.background = "green"
        }
}

function validarOutros() {
    if (telefone.value == "") {
        alert("Telefone não informado");
        telefone.focus();
        return;
      }
      if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();
        return;
      }
      if (sexo.value == "") {
        alert("CEP não informado");
        sexo.focus();
        return;
      }
      alert("Formulário enviado!");
}