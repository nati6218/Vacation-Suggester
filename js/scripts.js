
$(document).ready(function(){
$('form#container').submit(function(event){
  var question1 = $("input:radio[name=purpose]:checked").val();
  var question2 = $("input:radio[name=activities]:checked").val();
  var question3 = $("input:radio[name=food]:checked").val();
  var question4 = $("input:radio[name=music]:checked").val();
  var question5 = $("input:radio[name=season]:checked").val();


if (question1==="relax" && question2 === "walk" && question3 === "vegetarian") {
  $('#place2').show()
} else {
  $('#place3').show();
}
  event.preventDefault();
});

});
