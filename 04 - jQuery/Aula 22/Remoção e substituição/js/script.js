$(document).ready(function () {
    var itens = $("#lista").detach()
    $("#principal").replaceWith(itens)
})