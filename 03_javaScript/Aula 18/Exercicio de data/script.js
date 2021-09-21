var datetime=[], data=[], hora=[];
datetime[0]="01/10/1980 14:05:10";
datetime[1]="20/05/2000 18:00:59";
datetime[2]="1/4/21 20:00";


for (i=0; i<datetime.length; i++) {
    data.push(datetime[i].slice(0, datetime[i].indexOf(" ")))
    hora.push(datetime[i].slice(datetime[i].indexOf(" ")), datetime[i].length)
}

for (i=0; i<datetime.length; i++) {
    document.write("Antes: <br> Data:", datetime[i], "<br>")
    document.write("Depois: <br> Data: ", data[i], " Horario: ", hora[i], "<br><br>")
}