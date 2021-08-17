
window.addEventListener('resize', function() {
   var tam = $(window).width();
   if (tam >=1024){
     $("#menu-vertical").hide();
     $("#menu-horizontal").show();
   }else{
     $("#menu-vertical").show();
     $("#menu-horizontal").hide();
   } 
});
