var codevar = "";

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
    $("#signIn").css('display', 'block');
  })
  /*
  *validar longitud de input teléfono, 
  *contenido alfanumérico y activación de botón
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
  });
  /*
  *función para código aleat.
  */
  function code() {
  var str = "123456789";
  for (var i = 0; i < 3; i++) {
    codevar += str.charAt(Math.floor(Math.random() * str.length));
  }
  return codevar;
  };
  /*
  *función al presionar botón de continua
  */
  $('#nextOne').click(function(){
    $('#codigo').text(code());
  });
  $('#nextTwo').click(function(){
    $('#verify').css('display', 'none');
    $('#signUpForm').css('display', 'block')
  });
  /*
  *funcionalidad botones para atrás
  */
  $('#firstBack').click(function(){
    $(".content").css('display', 'block');
    $("#signIn").css('display', 'none');
  });
  $('#secondBack').click(function(){
    $('#verify').css('display', 'none');
    $("#signIn").css('display', 'block');
  });

  /*
  *función para verificar codigo de verificación
  */
  $('#codeButton').click(function(){
    $("#signIn").css('display', 'none');
    $("#verify").css('display', 'block');
  })
  $('#enterCode').keyup(function(){
    if ($(this).val()==codevar) {
      $('#nextTwo').removeClass('disabled');
    }else{
      $('#nextTwo').addClass('disabled');
    }
    if($(this).val().length > 3){
      $('#alertTwo').text('Favor ingrese sólo 3 dígitos');
    }else{
      $('#alertTwo').text('');
    }
    return false;
  });

});