class Game{
  constructor(nome, genero, plataforma){
    this.nome = nome;
    this.genero = genero;
    this.plataforma = plataforma;
  }

  mostrar_dados(){
    var dados
    dados = ("Nome do jogo: "+ this.nome+ "<br> Genero do jogo: "+ this.genero+ "<br> Plataforma do jogo: "+ this.plataforma+ "<br>")
    return dados
  }
}

var jogo1 = new Game("Final Fantasy XIV", "MMORPG", [" PC", " PS3", " PS4", " PS5"])

var jogo2 = new Game("Mario Odissey", "Plataforma", ["Switch"])

document.write(jogo1.mostrar_dados(), "<br>")

document.write(jogo2.mostrar_dados())
  
/* var Final_Fantasy_XIV = new Game();
Final_Fantasy_XIV.genero = "MMORPG";
Final_Fantasy_XIV.plataforma = [" PC", " PS3", " PS4", " PS5"];

var Mario_Odissey = new Game();
Mario_Odissey.genero = "Plataforma";
Mario_Odissey.plataforma = ["Switch"]; */



