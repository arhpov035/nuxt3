$(document).ready(function () {
  $(".mask-email").inputmask("email");
  $(".mask-phone").mask("+7 (999) 999-99-99");
  
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("start").setAttribute("min", today);
});
