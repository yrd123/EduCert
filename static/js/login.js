
  function validatelogin()
  {
    if( document.loginform.email.value == "" ) {
      document.getElementById('loginwarning').innerHTML = "***Email ID Cannot be Blank***";
      document.loginform.email.focus() ;
      return false;
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.loginform.email.value)){
      document.getElementById('loginwarning').innerHTML = "***Invalid Email Address***";
      document.loginform.email.focus() ;
      return false;
    }
    if( document.loginform.password.value == "" ) {
      document.getElementById('loginwarning').innerHTML = "***Password Cannot be Blank***";
      document.loginform.password.focus() ;
      return false;
    }
    return true;
  }

  function validatesignup(){
    var letters = /^[A-Za-z]+$/;

    if( document.signupform.fullName.value == "" ) {
      document.getElementById('signupwarning').innerHTML = "***Name cannot be Blank***";
      document.signupform.fullName.focus() ;
      return false;
    }
    if( !/^[A-Za-z\s]+$/.test(document.signupform.fullName.value) ) {
      document.getElementById('signupwarning').innerHTML = "***Name can only Contain Alphabets and Space***";
      document.signupform.fullName.focus() ;
      return false;
    }
    if( document.signupform.email.value == "" ) {
      document.getElementById('signupwarning').innerHTML = "***Email ID Cannot be Blank***";
      document.signupform.email.focus() ;
      return false;
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.signupform.email.value)){
      document.getElementById('signupwarning').innerHTML = "***Invalid Email Address***";
      document.signupform.email.focus() ;
      return false;
    }
    if( document.signupform.contactNumber.value == "" ) {
      document.getElementById('signupwarning').innerHTML = "***Mobile Number Cannot be Blank***";
      document.signupform.contactNumber.focus() ;
      return false;
    }
    if( document.signupform.contactNumber.value.length != 10 ){
      document.getElementById('signupwarning').innerHTML = "***Mobile Number Must be 10 Digits***";
      document.signupform.contactNumber.focus() ;
      return false;
    }
    if( document.signupform.year.value == "-1" ) {
      document.getElementById('signupwarning').innerHTML = "***Please Select Year of Study***";
      document.signupform.year.focus() ;
      return false;
    }
    if( document.signupform.branch.value == "-1" ) {
      document.getElementById('signupwarning').innerHTML = "***Please Select Branch***";
      document.signupform.branch.focus() ;
      return false;
    }
    if( document.signupform.password.value == "" ) {
      document.getElementById('signupwarning').innerHTML = "***Password Cannot be Blank***";
      document.signupform.password.focus() ;
      return false;
    }
    if( document.signupform.password.value.length<6 ){
      document.getElementById('signupwarning').innerHTML = "***Password Too Short***";
      document.signupform.password.focus() ;
      return false;
    }
    if( document.signupform.password.value != document.signupform.confirmPassword.value ){
      document.getElementById('signupwarning').innerHTML = "***Password and Confirm Password Fields Do Not Match***";
      document.signupform.confirmPassword.focus() ;
      return false;
    }
    

return true;
}

function validateprofile(){
  
  var letters = /^[A-Za-z]+$/;
  if( document.signupform.contactNumber.value == "" ) {
    document.getElementById('signupwarning').innerHTML = "***Mobile Number Cannot be Blank***";
    document.signupform.contactNumber.focus() ;
    return false;
  }
  if( document.signupform.contactNumber.value.length != 10 ){
    document.getElementById('signupwarning').innerHTML = "***Mobile Number Must be 10 Digits***";
    document.signupform.contactNumber.focus() ;
    return false;
  }
  if( document.signupform.year.value == "-1" ) {
    document.getElementById('signupwarning').innerHTML = "***Please Select Year of Study***";
    document.signupform.year.focus() ;
    return false;
  }
  if( document.signupform.branch.value == "-1" ) {
    document.getElementById('signupwarning').innerHTML = "***Please Select Branch***";
    document.signupform.branch.focus() ;
    return false;
  }
  // if( document.signupform.password.value == "" ) {
  //   document.getElementById('signupwarning').innerHTML = "***Password Cannot be Blank***";
  //   document.signupform.password.focus() ;
  //   return false;
  // }
  // if( document.signupform.password.value.length<6 ){
  //   document.getElementById('signupwarning').innerHTML = "***Password Too Short***";
  //   document.signupform.password.focus() ;
  //   return false;
  // }
  // if( document.signupform.password.value != document.signupform.confirmPassword.value ){
  //   document.getElementById('signupwarning').innerHTML = "***Password and Confirm Password Fields Do Not Match***";
  //   document.signupform.confirmPassword.focus() ;
  //   return false;
  // }
  

return true;
}
$(document).ready(function(){
	  $('.tab a').on('click', function (e) {
	  e.preventDefault();
	  
	  $(this).parent().addClass('active');
	  $(this).parent().siblings().removeClass('active');
	  
	  var href = $(this).attr('href');
	  $('.forms > form').hide();
	  $(href).fadeIn(500);
	});
});

$(document).ready(function(){
  $('#tosignup').on('click', function (e) {
  e.preventDefault();
  
  $('#signupbutton').addClass('active');
  $('#loginbutton').removeClass('active');
  
  var href = $(this).attr('href');
  $('.forms > form').hide();
  $(href).fadeIn(500);
});
});

$(document).ready(function(){
  $('#tologin').on('click', function (e) {
  e.preventDefault();
  
  $('#loginbutton').addClass('active');
  $('#signupbutton').removeClass('active');
  
  var href = $(this).attr('href');
  $('.forms > form').hide();
  $(href).fadeIn(500);
});
});

