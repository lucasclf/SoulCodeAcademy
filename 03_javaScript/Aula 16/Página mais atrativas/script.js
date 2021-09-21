function modoNoturno() {
  var x = document.getElementsByTagName("body")[0].style.background;
  if (x != "rgb(32, 33, 36)") {
    document.getElementsByTagName("body")[0].style.background = "#202124";
    document.getElementsByTagName("body")[0].style.color = "#f6f6f6";
  } else if (x == "rgb(32, 33, 36)") {
    document.getElementsByTagName("body")[0].style.background = "#f6f6f6";
    document.getElementsByTagName("body")[0].style.color = "#202124";
  }
}

function modoAcessivo() {
  var y = document.getElementsByTagName("body")[0].style.fontSize;
  if (y != "1.35em") {
    var inputElements = document.getElementsByTagName("input");
    var labelElements = document.getElementsByTagName("label");
    for (var i = 0; i < inputElements.length; i++) {
        document.getElementsByTagName("input")[i].style.fontSize = "1em";
    }
    for (var j = 0; j < labelElements.length; j++) {
        document.getElementsByTagName("label")[j].style.fontSize = "1em";
    }
    document.getElementsByTagName("body")[0].style.fontSize = "1.35em";
    document.getElementsByClassName("submit-btn")[0].style.fontSize = "1em";
    document.getElementsByClassName("submit-btn")[1].style.fontSize = "1em";
  } else if (y == "1.35em") {
    document.getElementsByTagName("body")[0].style.fontSize = "1em";
  }
}

function validarSangue() {
    var sangue = document.forms["formulario"]["sangue"].value;
    if(sangue != "a"  && sangue != "A" && sangue != "b" && sangue != "B" && sangue != "o" && sangue != "O" && sangue != "ab" && sangue != "AB" && sangue != "aB" && sangue != "Ab"){
        document.getElementById("tipo-sanguineo").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("tipo-sanguineo").style.background = "#33ca7f";
        return true;
    }
}

function validarRH() {
    var rh = document.forms["formulario"]["rh"].value;
    if(rh != "+"  && rh != "-"){ // alterei aqui
        document.getElementById("rh-input").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("rh-input").style.background = "#33ca7f";
        return true;
    }
}

function validarNome() {
    var x = document.forms["formulario"]["nome2"].value;
    if(!isNaN(x) || x == ""){
        document.getElementById("nome1").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("nome1").style.background = "#33ca7f";
        return true;
    }
}

function validarEstado() {
    var x = document.forms["formulario"]["estado"].value;
    if(!isNaN(x) || x == ""){
        document.getElementById("estado").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("estado").style.background = "#33ca7f";
        return true;
    }
}

function validarBairro() {
    var x = document.forms["formulario"]["bairro"].value;
    if(!isNaN(x) || x == ""){
        document.getElementById("bairro").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("bairro").style.background = "#33ca7f";
        return true;
    }
}

function validarCidade() {
    var x = document.forms["formulario"]["cidade"].value;
    if(!isNaN(x) || x == ""){
        document.getElementById("cidade").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("cidade").style.background = "#33ca7f";
        return true;
    }
}

function validarVacinas() {
    var x = document.forms["formulario"]["vacinas"].value;
    if(!isNaN(x) || x == ""){
        document.getElementById("vacinas").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("vacinas").style.background = "#33ca7f";
        return true;
    }
}

function validarRua() {
    var x = document.forms["formulario"]["rua"].value;
    if(!isNaN(x) || x == ""){
        document.getElementById("rua").style.background = "#c1292e";
        return false;
    } else {
        document.getElementById("rua").style.background = "#33ca7f";
        return true;
    }
}

function validarTudo() {
    var randomNumber = parseInt(Math.random() * 1000);
    // var z = document.forms["formulario"]["nome"].value;
    if (validarNome() && validarEstado() && validarBairro() && validarCidade() && validarVacinas() && validarRua() && validarSangue() && validarRH()) {
        alert("Formulário enviado, número de protocolo: " + randomNumber);
    }
    else {
        alert("Alguma informação não foi informada ou estava errada.");
    }
}

function copiar() {
    document.getElementById("titulo").innerHTML = "Pq você copiou o titulo?"
}

function colorirVermelho(x) {
    x.style.background = "red";
}

function colorirVerde(x) {
    x.style.background = "none";
}