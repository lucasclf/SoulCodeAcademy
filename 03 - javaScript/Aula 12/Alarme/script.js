var sensorIncendio1 = false;
var sensorIncendio2 = false;
var maquinaLigada = true;
var alimentacaoEletrica = true;
var alarme = false;

alarme = sensorIncendio1 || sensorIncendio2 || !alimentacaoEletrica || !maquinaLigada ? true : false;

document.write(alarme)