$(document).ready(function () {
    var valida = [false, false, false] 
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
            valida[0] = false
        } else if($(this).val() != ""){
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" });
            valida[0] = true
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
            valida[1] = false
        } else if (cpf[0] == 0 && cpf[1] == 0 && cpf[2] == 0 && cpf[3] == 0 && cpf[4] == 0 && cpf[5] == 0 && cpf[6] == 0 && cpf[7] == 0 && cpf[8] == 0 && cpf[9] == 0 && cpf[10] == 0) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" });
            valida[1] = false
        } else if (primeiroDigito != cpf[9] || segundoDigito != cpf[10] || verifica == true) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" });
            valida[1] = false
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" });
            valida[1] = true
        };

    });

     /* Validação de idade */

     $("#nasc").blur(function () {
        let dataAtual = new Date()
        let nascimento = $(this).val().substring(0, 4)
        let mes = $(this).val().substring(5, 7)
        let dia = $(this).val().substring(8, 10)
        idade = parseInt(dataAtual.getFullYear()) - nascimento

        if ($(this).val() == "") {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            valida[2] = false
            return
        }

        if (mes > dataAtual.getMonth() + 1) {
            idade--
        } else if (mes == dataAtual.getMonth() + 1 && dia > dataAtual.getDate()) {
            idade--
        }
        if (idade < 0 || idade > 130) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
            valida[2] = false
            alert("Idade inferior a 0 ou superior a 130. Conferir.")
            $(this).val("")
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
            valida[2] = true
        }
    })

    $("#btnAluno").click(function() {
        console.log("Função ativando")
        for (i = 0; i <= valida.length; i++) {
            console.log("for iniciando")
            if(valida[i] == false || valida[i] == "") {
                alert("Confira a validade dos campos.");
                break
            }
        }
        $("#formAluno").submit()

    })
})

