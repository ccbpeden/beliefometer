


$(document).ready(function(){
  var inclination = parseInt("0");
  // alert('inclination variable set to ' + inclination);
  $("form#superform").submit(function(event){
    var radio1 = parseInt($("input:radio[name=laws]:checked").val());
    // alert('radio1 has been changed to' + radio1);
    inclination += radio1; //increment or decrement// alert("")
    // alert('inclination variable changed to ' + inclination);
    var radio2 = parseInt($("input:radio[name=healthcare]:checked").val());
    inclination += radio2;
    // alert('inclination variable changed to ' + inclination);
    var radio3 = parseInt($("input:radio[name=economy]:checked").val());
    inclination += radio3;
    // alert('inclination variable changed to ' + inclination);
    var radio4 = parseInt($("input:radio[name=social]:checked").val());
    inclination += radio4;
    // alert('inclination variable changed to ' + inclination);
    var radio5 = parseInt($("input:radio[name=environment]:checked").val());
    inclination += radio5;
    alert('inclination variable changed to ' + inclination);
    $("#superform").hide();
    if (inclination < "-3") {
      alert("trying to show leftist");
      $("#leftist").toggle();
      alert("leftist success");
      } else if (inclination < 0) {
      $("#liberal").show();
      } else if (inclination === 0) {
      $("#neutral").show();
      } else if (inclination < 3) {
      $("#conservative").show();
      } else {
      $("#reactionary").show();
    }
    event.preventDefault();
  });
});
