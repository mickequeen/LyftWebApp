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
  $('#signUp').click(function(){
    $(".content").css('display', 'none');
    $("#signIn").css('display', 'block')
  })
  /*
  *validar longitud de input teléfono 
  */
  $('#phone').keyup(function(){
    if($(this).val().length ===10){
      $('#nextOne').removeClass('disabled');
    }if($(this).val().length > 10){
      $('#nextOne').addClass('disabled');
    }if($(this).val().length < 10){
      $('#nextOne').addClass('disabled');
    }if (isNaN($(this).val())){
      $('#alert').text('Favor ingresar sólo números');
      $('#nextOne').addClass('disabled');
    }else{
      $('#alert').text('');
    }
    return false;
  })

});