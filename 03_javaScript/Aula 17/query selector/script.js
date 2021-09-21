function colorirVermelho() {
    document.querySelector(".example").style.backgroundColor = "red"
}

function colorirVerde() {
    var x = document.querySelectorAll(".example")
    
    for(i = 0; i < x.length; i++) {
        x[i].style = "background: green; color: red"
    }
}