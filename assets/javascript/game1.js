$(document).ready(function(){

// Creating variables
var wins = 0;
var losses = 0;
var userScore=0;
var computerScore = Math.floor(Math.random() * 101) + 19;
var crystals;

$('.computer-score').append(computerScore);

function crystalNumbers(){
  var random = Math.floor(Math.random() * 10) + 1;
  crystals = Math.round(random);
}

crystalNumbers();

$('.crystal-pic').on('click', function(){
      crystalNumbers();
console.log(crystals);
});




});
