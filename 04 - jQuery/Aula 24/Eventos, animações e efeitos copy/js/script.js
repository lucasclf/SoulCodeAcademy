$(document).ready(function () {

  $("#btn1").click(function () {
    $("#box1").css({ backgroundColor: "#DDA0DD", width: "225px", height: "225px" }).fadeOut(6000)
    $("#box2").css({ backgroundColor: "#EE82EE", width: "180px", height: "245px" }).fadeOut(5000)
    $("#box3").css({ backgroundColor: "#DA70D6", width: "100px", height: "345px" }).fadeOut(4000)
    $("#box4").css({ backgroundColor: "#FF00FF", width: "325px", height: "105px" }).fadeOut(3000)
    $("#box5").css({ backgroundColor: "#8A2BE2", width: "515px", height: "55px" }).fadeOut(2000)
  })

  $("#btn2").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").css({ backgroundColor: "blue", width: "300px", height: "150px" }).fadeIn(1000)
  })

  $("#btn3").dblclick(function () {
    $("#box4, #box5").hide()
  })

  $("#btn4").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").toggle()
  })

  var visivel = 1;
  $("#btn5").click(function () {
       $("#box1, #box2, #box3, #box4, #box5").hide();
  })
  $("#btn6").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").show();    
  })
  
  $("#btn7").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").fadeOut(2000)    
  })

  $("#btn8").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").fadeIn(2000)
  })

  $("#btn9").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").fadeTo(2000, 0.3)
  })

  $("#btn10").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").fadeToggle(2000)
  })
 
  $("#btn11").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").slideUp()
  })

  $("#btn12").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").slideDown()
  })

  $("#btn13").click(function () {
    $("#box1, #box2, #box3, #box4, #box5").slideToggle()
  })

  $("input").on({
    focusin: function () {
      $(this).addClass("sombra")
    }, 
    focusout: function () {
      $(this).removeClass("sombra")
    }
  });

  $("#enviar").click(function(){
    var aux1 = $("#nome").val()
    var aux2 = $("#enderecoEletronico").val()
    $("#resposta").html("Seu nome é: "+aux1+"<br> Seu e-mail é: "+aux2);
  })

})

