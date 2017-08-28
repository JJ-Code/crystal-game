$(document).ready(function(){

// Creating variables
var wins = 0;
var losses = 0;
var userScore = 0;
var computerScore = Math.floor(Math.random() * 102) + 19;
//crystal random number generator
var purpleCrystal = Math.floor(Math.random() * 12) + 1;
var pinappleCrystal = Math.floor(Math.random() * 12) + 1;
var diamondCrystal = Math.floor(Math.random() * 12) + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;

//appends random number of 19 and 121 to computer score class and ties variables to classes for dynamic update of numbers.
$('.computer-score').text(computerScore);
$('.user-score').text(userScore);
$('win-score').text(wins);
$('loss-score').text(losses);

//reset function
function reset() {
      userScore = 0;
      computerScore = Math.floor(Math.random() * 102) + 19;
      purpleCrystal = Math.floor(Math.random() * 12) + 1;
      pinappleCrystal = Math.floor(Math.random() * 12) + 1;
      diamondCrystal = Math.floor(Math.random() * 12) + 1;
      greenCrystal = Math.floor(Math.random() * 12) + 1;
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


//This makes the crystal images clickabe and updaes the user score.
$('#purple-crystal').on('click', function(){
   userScore = userScore + purpleCrystal;
   $('.user-score').text(userScore);
   if (userScore == computerScore){
     win();
  }
    else if (userScore > computerScore){
      loss();
  }
   console.log(userScore);

});

$('#pinapple-crystal').on('click', function(){
   userScore = userScore + pinappleCrystal;
   $('.user-score').text(userScore);
   if (userScore == computerScore){
     win();
  }
    else if (userScore > computerScore){
      loss();
  }
   console.log(userScore);
});

$('#diamond-crystal').on('click', function(){
   userScore = userScore + diamondCrystal;
   $('.user-score').text(userScore);
   if (userScore == computerScore){
     win();
  }
    else if (userScore > computerScore){
      loss();
  }
   console.log(userScore);
});

$('#green-crystal').on('click', function(){
   userScore = userScore + greenCrystal;
   $('.user-score').text(userScore);
   if (userScore == computerScore){
     win();
  }
    else if (userScore > computerScore){
      loss();
  }
   console.log(userScore);
});



});
