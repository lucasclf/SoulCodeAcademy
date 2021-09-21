$(document).ready(function () {
    $("#btn0").click(function () {
        $("#divPrincipal").append("<h1 style='background-color: red'>Título</h1>")
    });
})

$(document).ready(function () {
    $("#btn1").click(function () {
        $("<h1 style='background-color: green'>Título</h1>").appendTo("#divPrincipal");
    });
})

$(document).ready(function () {
    $("#btn2").click(function () {
        $("<h1 style='background-color: yellow'>Título</h1>").prependTo("#divPrincipal");
    });
}) 

$(document).ready(function () {
    $("#btn3").click(function () {
        $("<h1 style='background-color: blue'>Título</h1>").prependTo("#divPrincipal");
    });
})

$(document).ready(function () {
    $("#btn4").click(function () {
        var conteudo = $("#divPrincipal").html()
        alert(conteudo)
    });
})

$(document).ready(function () {
    $("#btn5").click(function () {
        $("#divPrincipal").html("<h3 style='background-color: purple'> Novo conteudo </h3>")
    });
})
