
$(document).ready(function () {
    // Menu padrão
    tam = $(window).width();
    if (tam >= 1024) {
        $("#menu").removeClass('menu_hamburguer');
        $("#menu").addClass('menu_principal');

    } else {
        $("#menu").removeClass('menu_principal');
        $("#menu").addClass('menu_hamburguer');

    }
    
    // Menu lateral
    window.addEventListener('resize', function () {
        var tam = $(window).width();
        if (tam >= 1024) {
            $("#menu").removeClass('menu_hamburguer');
            $("#menu").addClass('menu_principal');

        } else {
            $("#menu").removeClass('menu_principal');
            $("#menu").addClass('menu_hamburguer');

        }
    });

    // Botoes da fonte
    var fontSize = parseInt($("body").css("font-size"));
    var auxFont = 0
    
        $("#btnFontMaior").click(function() {
            if (auxFont < 3){
                fontSize = fontSize + 1
                auxFont++
                $("body").css({"font-size": fontSize});
            }
        })
    
    
    $("#btnFontMenor").click(function() {
        if (auxFont > 0) {
            fontSize = fontSize - 1
            auxFont--
            $("body").css({"font-size": fontSize});
        }
    })

    // VOLTAR AO TOPO
    $("#voltar").hide()
        window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 20){
            $("#voltar").show();
        } else {
            $("#voltar").hide();
        }
    });
});


// function dataFormatada(d) {
//     var data = new Date(d),
//         dia  = data.getDate(),
//         mes  = data.getMonth() + 1,
//         ano  = data.getFullYear();
//     return [dia, mes, ano].join('/');
// }

// Data e HORA INICIO
function mostrarDataHora(hora, dia, mes, ano){
    retorno = "" + hora + "<br>"
    retorno += "" + " " + dia + "/" + mes + "/" + ano;
    document.getElementById("funcao_data_hora").innerHTML = retorno;
}

function atualizarDataHora(){
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth()+1;
    var ano = dataAtual.getFullYear();
    var hora = dataAtual.getHours();
    var minuto = dataAtual.getMinutes();
    var segundo = dataAtual.getSeconds();
    var horaImprimivel = hora + ":" + minuto + ":" + segundo;
    mostrarDataHora(horaImprimivel, dia, mes, ano);
    setTimeOut("atualizarDataHora()", 1000);
}

atualizarDataHora();

// Data e HORA FIM

