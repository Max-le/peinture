console.log('Hello world !')


$(document).ready(function() {


 $(".galerie").fadeIn(2500);

});
$(".jumbotron").ready(function() {
console.log("Jumbotron ready !");

$( "#hello" ).fadeIn(2000);

$("#description").fadeIn(5000);

$(".jumbotron").delay(1000).fadeIn(2000);
});
