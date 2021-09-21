var arrayDia = new Array(7);
arrayDia[0] = "Domingo", arrayDia[1] = "Segunda", arrayDia[2] = "Terça", arrayDia[3] = "Quarta", arrayDia[4] = "Quinta", arrayDia[5] = "Sexta", arrayDia[6] = "Sábado";

var arrayMes = new Array(12);

arrayMes[0] = "Janeiro", arrayMes[1] = "Fevereiro", arrayMes[2] = "Março", arrayMes[3] = "Abril", arrayMes[4] = "Maio", arrayMes[5] = "Junho", arrayMes[6] = "Julho", arrayMes[7] = "Agosto", arrayMes[8] = "Setembro", arrayMes[9] = "Outubro", arrayMes[10] = "Novembro",arrayMes[11] = "Dezembro";

function atualizarDataHora() {

    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var diaSemana = getDiaExtenso(dataAtual.getDay());
    var mes = getMesExtenso(dataAtual.getMonth());
    var ano = dataAtual.getYear();
    var hora = dataAtual.getHours();
    var minuto = dataAtual.getMinutes();
    var segundo = dataAtual.getSeconds();
    var horaImprimivel = hora + ":" + minuto + ":" + segundo;

    mostrarDataHora(horaImprimivel, diaSemana, dia, mes, ano);
    setTimeout("atualizarDataHora()", 1000);
}

function mostrarDataHora(hora, diaSemana, dia, mes, ano){

    retorno = "" + hora + ""
    retorno += "" + diaSemana + ", " + dia + " de " + mes + " de " + ano;
    document.getElementById("datahora").innerHTML = retorno;

}

function getMesExtenso(mes){

    return this.arrayMes[mes];
}

function getDiaExtenso(dia){

    return this.arrayDia[dia];
}

