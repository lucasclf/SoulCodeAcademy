function imprimir() {
    /* document.getElementById("local").innerHTML = "teste" */
    local.innerHTML = "teste"
}

function validarVacinas() {
    var x = document.forms["formulario"]["vacinas"].value
    if(!isNaN(x)){
        document.getElementById("vacinas").style.background = "red"
    } else {
        document.getElementById("vacinas").style.background = "green"
        }
}