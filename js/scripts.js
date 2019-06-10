
$(document).ready(function(){
$('form#container').submit(function(event){

  event.preventDefault();
var nameInput = $('input#name').val();
var question1 = $("input:radio[name=purpose]:checked").val();
var question2 = $("input:radio[name=activities]:checked").val();
var question3 = $("input:radio[name=food]:checked").val();
var question4 = $("input:radio[name=music]:checked").val();
var question5 = $("input:radio[name=season]:checked").val();
var suggester = $('#suggester').prop("checked", true);


if (question1=== "party" && question2 === "dance" && question3 === "fastfood" && question4 === "salsa" && question5=== "summer") {
$('#place1').show();
} else if (question1 === "learn" && question2 === "walk" && question3 === "vegetarian" && question4 === "classic" && question5 === "spring") {
$('#place2').show();
} else if (question1 === "relax" && question2 === "swim" && question3 === "seafood" && question4 === "rock" && question5 === "fall") {
$('#place3').show();
}  else {
alert("please select all the options");
}
$('.name').text(nameInput);


});

});
