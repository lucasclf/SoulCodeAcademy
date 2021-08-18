$(document).ready(function () {
 
  function tamanhoTela(){
    var tam = $(window).width();
    if (tam >=1024){
      $("#menu li").css({float: "left"});
      $("main").css({float: "none"})
    }else{
      $("#menu li").css({float: "none"});
      $("#menu li").css({width: "200px"})
      $("nav").css({float: "left"})
      $("main").css({float: "right"})

    } 
  }
  
  tamanhoTela()
  
  window.addEventListener("resize", function () {tamanhoTela()})

  $("#btn1").click(function () {
    var posicaoScroll = $("#texto").scrollTop()
    alert("O scroll está em: "+posicaoScroll)
  });

  $("#btn2").click(function () {
    var textoPosicao = $("#texto").position()
    alert("Posição superior: "+textoPosicao.top+" Posição direita: "+textoPosicao.left)
  });

  $("#btn3").click(function () {
    var textoff =  $("#texto").offset()
    alert("Offset superior: "+textoff.top+" Offset direita: "+textoff.left)
  });

  
  

  /*//Questão 01
  $("div").height(500).width(500)
  //Questão 02
  console.log($("div").height())
  //Questão 03
  console.log($("div").innerHeight())*/

})
