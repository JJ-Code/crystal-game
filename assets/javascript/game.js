// Nice job putting all of your code in a document ready block 👌
$(document).ready(function(){

// Creating variables
var wins = 0;
var losses = 0;
var userScore = 0;

// Since the string of code for generating random numbers
// is rather unwieldy I'd suggest placing it in a utility function
var computerScore = getRandomNum(102, 19);
//crystal random number generator

// See my note below all of your listeners to see why 
// I've moved these variables into an object.
//
var crystalValues = {
  purpleCrystal: getRandomNum(12, 1),
  pinappleCrystal: getRandomNum(12, 1),
  diamondCrystal: getRandomNum(12, 1),
  greenCrystal: getRandomNum(12, 1)
}

function getRandomNum (max, min) {
  return Math.floor(Math.random() * (max - min) + min)
}

//appends random number of 19 and 121 to computer score class and ties variables to classes for dynamic update of numbers.
$('.computer-score').text(computerScore);
$('.user-score').text(userScore);
$('win-score').text(wins);
$('loss-score').text(losses);

//reset function
function reset() {
      userScore = 0;
      computerScore = getRandomNum(102, 19)
      crystalValues['purpleCrystal'] = getRandomNum(12, 1)
      crystalValues['pinappleCrystal'] = getRandomNum(12, 1)
      crystalValues['diamondCrystal'] = getRandomNum(12, 1)
      crystalValues['greenCrystal'] = getRandomNum(12, 1)
      $('.computer-score').text(computerScore);
      $('.user-score').text(userScore);
};


//If a user wins
function win(){
    wins ++;
    alert("You win!");
    $('.win-score').text(wins);
    reset();

};
//If a user does not win
function loss(){
    losses ++;
    alert('You did not win, loser!');
    $('.loss-score').text(losses);
    reset();
};

// Your  event listener code was pretty repetitive, so in an effort to DRY it up I'd suggest combining
// them all into 1 and then determining the value of the clicked crystal by checking its id.
// I moved all of the crystal values into an object for this so I could leverage bracket notation
// which will try to access the property that the expression inside of the brackets evaluates to.
// Take the following object:
// 
// var obj = { name: 'Jaymee' }
// 
// You could do the following to access the name property:
// 
// var firstHalf = 'na'
// var secondHalf = 'me'
// 
// obj[ firstHalf + secondHalf ] // would return 'Jaymee'
// 

$('.crystal-pic').on('click', function() {

  // grab the elements id
  var crystalId = $(this).attr('id') 

  // access the corresponding value using the id and add it to the sum
  userScore += crystalValues[ crystalId ]

  $('.user-score').text(userScore);

  // You should try to get into the habit of using triple equals for equality checking
  if (userScore === computerScore){
    win()
  }
  else if (userScore > computerScore){
    loss()
  }

})



});
