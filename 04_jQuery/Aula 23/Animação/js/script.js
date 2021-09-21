$(document).ready(function () {

  $("#box1").hover(function () {
    $("#box1").css({ backgroundColor: "violet" }).fadeTo(1000, 1);
  }, function () {
    $("#box1").css({ backgroundColor: "blue" }).fadeTo(1000, 0.1);
  })

  $("#box2").hover(function () {
    $("#box2").css({ backgroundColor: "purple" }).fadeTo(1000, 1);
  }, function () {
    $("#box2").css({ backgroundColor: "green" }).fadeTo(1000, 0.1);
  })

  $("#box3").hover(function () {
    $("#box3").css({ backgroundColor: "crimson" }).fadeTo(1000, 1);
  }, function () {
    $("#box3").css({ backgroundColor: "yellow" }).fadeTo(1000, 0.1);
  })

  $("#btn1").click(function () {
    $("#box1, #box2, #box3").toggle()
  })

  var visivel = 1;
  $("#btn2").click(function () {
    
    if (visivel == 1) {
      visivel = 0;
      $("#box1, #box2, #box3").hide();
    } else {
      visivel = 1;
      $("#box1, #box2, #box3").show();
    }
  })

  $("#btn3").click(function () {
    $("#box1, #box2, #box3").fadeOut(2000)    
  })

  $("#btn4").click(function () {
    $("#box1, #box2, #box3").fadeIn(2000)
  })

  $("#btn5").click(function () {
    $("#box1, #box2, #box3").fadeTo(2000, 0.3)
  })

  $("#btn6").click(function () {
    $("#box1, #box2, #box3").slideUp()
  })

  $("#btn7").click(function () {
    $("#box1, #box2, #box3").slideDown()
  })

  $("#btn8").click(function () {
    $("#box4").css({backgroundColor: "purple" })
  })

  $("#btn9").click(function () {
    $("#box4").css({color: "yellow" })
  })

  $("#btn10").click(function () {
    $("#box4").css({color: "inherit", backgroundColor: "inherit" })
  })

  function fundo(){
    $("#box4").css({backgroundColor: "purple" })
  }

  function letra(){
    $("#box4").css({color: "yellow" })
  }

  function reset(){
    $("#box4").css({color: "inherit", backgroundColor: "inherit" })
  }

  $("#btn11").on({
    mousedown: fundo,
    dblclick: letra,
    mouseup: reset
  })

})
