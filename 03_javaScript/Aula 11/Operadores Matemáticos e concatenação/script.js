var idadeLucas = 33;
var idadeLenin = 2;
var idadePai = 62;
var idadeIrmao1 = 10;
var idadeIrmao2 = 22;
var idadeIrmao3 = 15;
var familiaMembros = 2;
var renda = 4000;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;

total1 = idadeLucas + idadeLenin
total2 = total1 * idadePai
totalIrmao = idadeIrmao1 + idadeIrmao2 + idadeIrmao3
total3 = (totalIrmao * idadeLucas) / total1
total4 = (renda / familiaMembros) * 30

document.write("A minha idade somada a do meu filho cachorro é de "+total1+"."+"<br><br><br>")

document.write("A soma da minha idade ("+idadeLucas+") com a do meu filho cachorro("+idadeLenin+") dará o <strong>item 1</strong> cujo valor é "+total1+". <br><br>Multiplicando esse valor pela idade do meu pai ("+idadePai+") teremos o valor de "+total2+", sendo esse o <strong>item 2</strong> da atividade.<br><br> O <strong>item 2</strong> somado com a idade dos meus irmãos, sendo elas "+idadeIrmao1+", "+idadeIrmao2+", "+idadeIrmao3+"multiplicada pela minha idade ("+idadeLucas+") e dividido pelo resultado do <strong>item 1</strong>, teremos o resultado do <strong>item 3</strong>, sendo esse "+total3+".<br><br> Por fim teremos o <strong>item 4</strong>, que pede para dividirmos a renda familiar de "+renda+"pelo numero de pessoas na familia ("+familiaMembros+") sendo o resultado: "+total4)


