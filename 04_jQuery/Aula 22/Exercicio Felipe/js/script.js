$(document).ready(function () { 
    var lista1 = $("#lista1").html()
    var lista2 = $("#lista2").html()

    $("#btn1").click(function () {
        $("#lista2").html(lista1)
    });

    $("#btn2").click(function () {
        $("#lista1").html(lista2)
    });

    $("#btn3").click(function () {
        var aux = 0
        lista1 = $("#lista1").html()
        lista2 = $("#lista2").html()

        if(aux == 0) {
            $("#lista2").html(lista1)
            $("#lista1").html(lista2)
            aux++
        } else if(aux ==1) {
            $("#lista1").html(lista1)
            $("#lista2").html(lista2)
            aux = 0
        }
    });
})

