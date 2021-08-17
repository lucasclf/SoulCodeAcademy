$(document).ready(function () {
    $("#botao").click(function () {
        $("section").find("p").css({ backgroundColor: "yellow", color: "red", border: "1px solid black", margin: "10px" })
    })

    $("#botao2").click(function () {
        $("span").parent().css({ backgroundColor: "purple", border: "1px solid yellow", margin: "10px" })   
    })

    $("#botao3").click(function () {
        $("p").parents().css({ backgroundColor: "green", border: "1px solid yellow", margin: "10px" })
    })

    $("#botao4").click(function () {
        $(document).find("article").eq(1).css({ backgroundColor: "black", color: "white", border: "1px solid yellow", margin: "10px" })
    })
})