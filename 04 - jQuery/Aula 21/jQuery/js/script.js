$(document).ready(function () {
    $("#botao1").click(function () {
        alert("Você apertou o primeiro botão.")
    })
    $("a, #menu, h1").css("font-family", "Verdana");
})

function mostraParagrafo() {
    $("#paragrafo").fadeIn("slow");
}

function mostraParagrafo2() {
    $(".paragrafo").slideDown("slow");
}

$(document).ready(function () {
    $("#botao2").click(function () {
        $("p:first").css("background-color", "red");
    });
});