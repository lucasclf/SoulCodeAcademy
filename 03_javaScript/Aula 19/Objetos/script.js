var myGame = new Object();
myGame.nome = "Final Fantasy XIV";
myGame.genero = "MMORPG";
myGame.plataforma = [" PC", " PS3", " PS4", " PS5"];

/* 
document.write(myGame.plataforma, "<br><br><br>")

myGame.plataforma.unshift ("PC-steam")

document.writeln(myGame.plataforma) */


function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          resultado += nomeDoObj + "." + i + " = " + obj[i] + "<br>";
      }
    }
    return resultado;
  }

document.write(mostrarProps(myGame, "myGame"))


