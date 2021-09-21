$(document).ready(function () {

  $("#box1").hover( function() {
    $("#box1").css({backgroundColor: "violet"});
  }, function() {
    $("#box1").css({backgroundColor: "blue"});
  })

  $("#box2").hover( function() {
    $("#box2").css({backgroundColor: "purple"});
  }, function() {
    $("#box2").css({backgroundColor: "green"});
  })

  $("#box3").hover( function() {
    $("#box3").css({backgroundColor: "crimson"});
  }, function() {
    $("#box3").css({backgroundColor: "yellow"});
  })
})
