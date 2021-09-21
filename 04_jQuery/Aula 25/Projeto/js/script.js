$(document).ready(function () {
  
  var fontSize = parseInt($("body").css("font-size"));
  $("#btnFontMaior").click(function() {
    fontSize = fontSize + 1
		$("body").css({"font-size": fontSize});
  });

  $("#btnFontMenor").click(function() {
    fontSize = fontSize - 1
		$("body").css({"font-size": fontSize});
  });

})

