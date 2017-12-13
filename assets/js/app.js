$(document).ready(function(){
  /*
  *función de splash
  */
  setTimeout(function() {
    $(".splash").fadeOut(1500);
  },2500);
  /*
  *función para mostrar contenido de la página
  */
  setTimeout(function() {
      $(".content").fadeIn(1500);
  },3500);

  
});