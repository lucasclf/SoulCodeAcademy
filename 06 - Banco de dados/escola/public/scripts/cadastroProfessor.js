$(document).ready(function () {

    /* Bloqueio de numeros no input nome */

    $("#nome").keypress(function (e) {

        var tecla = new Number();

        if (window.event) {
            tecla = e.keyCode;
        }
        else if (e.which) {
            tecla = e.which;
        }
        else {
            return true;
        }
        if ((tecla >= "48") && (tecla <= "57")) {
            return false;
        }

    })

    $("#nome").blur(function () {
        if($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" });
        } else if($(this).val() != ""){
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" });
        }
    })

    /* Validação de CPF */

    $("#cpf").blur(function () {
        var primeiroDigito;
        var segundoDigito;
        var verifica;
        cpf = [];
        cpf = $(this).val();
        cpf = cpf.replace(/\.|-/g, "");
        primeiroDigito = 0;
        segundoDigito = 0;

        for (i = 0; i <= 8; i++) {
            primeiroDigito += cpf[i] * (10 - i);
        }

        primeiroDigito = (primeiroDigito * 10) % 11;

        if (primeiroDigito == 10 || primeiroDigito == 11){
            primeiroDigito = 0;
        }
        for (i = 0; i <= 9; i++) {
            segundoDigito += cpf[i] * (11 - i);
        };

        segundoDigito = (segundoDigito * 10) % 11;

        if (segundoDigito == 10 || segundoDigito == 11) {
            segundoDigito = 0;
        };

        if (cpf[0] == 1 && cpf[1] == 1 && cpf[2] == 1 && cpf[3] == 1 && cpf[4] == 1 && cpf[5] == 1 && cpf[6] == 1 && cpf[7] == 1 && cpf[8] == 1 && cpf[9] == 1 && cpf[10] == 1) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" });
        } else if (cpf[0] == 0 && cpf[1] == 0 && cpf[2] == 0 && cpf[3] == 0 && cpf[4] == 0 && cpf[5] == 0 && cpf[6] == 0 && cpf[7] == 0 && cpf[8] == 0 && cpf[9] == 0 && cpf[10] == 0) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" });
        } else if (primeiroDigito != cpf[9] || segundoDigito != cpf[10] || verifica == true) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" });
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" });
        };

    });

     /* Validação de idade */

    $("#idade").blur(function (){
        if($(this).val() < 18 || $(this).val() > 130){
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" });
            $(this).val("")
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" });
        };
    });

})