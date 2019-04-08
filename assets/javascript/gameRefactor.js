$(document).ready(function () {

  // Creating variables
  var wins = 0;
  var losses = 0;
  var userScore = 0;
  var computerScore = Math.floor(Math.random() * 102) + 19;
  //crystal random number generator
  var crystalPic = [
    ['purple-crystal', 0],
    ['pinapple-crystal', 0],
    ['diamond-crystal', 0],
    ['green-crystal', 0]
  ];

  function randomNumGenerator(array) {

    for (i = 0; i < crystalPic.length; i++) {
      var x = Math.floor(Math.random() * 12) + 1;
      array[i][1] = Math.floor(Math.random() * 12) + 1;
      console.log(array[i][0] + ': ' + array[i][1]);
    }
  }

  randomNumGenerator(crystalPic);


  //appends random number of 19 and 121 to computer score class and ties variables to classes for dynamic update of numbers.
  function gameBoard() {
      $('.computer-score').text(computerScore);
      $('.user-score').text(userScore);
      $('.win-score').text(wins);
      $('.loss-score').text(losses);
  };

  gameBoard(); 

  console.log(crystalPic);
  //reset function
  function reset() {
    userScore = 0;
    computerScore = Math.floor(Math.random() * 102) + 19;
    randomNumGenerator(crystalPic);
    $('.computer-score').text(computerScore);
    $('.user-score').text(userScore);

  };


  //If a user wins
  function win() {
    wins++;
    alert("You win!");
    $('.win-score').text(wins);
    reset();

  };
  //If a user does not win
  function loss() {
    losses++;
    alert('You did not win, loser!');
    $('.loss-score').text(losses);
    reset();
  };

    //This makes the crystal images clickabe and updaes the user score.
  function gamePlay(array) {
    $('body').on('click', '.crystal-pic', function () {
      var idCrystalPic = $(this).attr('id');
      console.log(idCrystalPic);
      console.log('clicked')
      var foundPic = array.findIndex(crystal => {
        return crystal[0] === idCrystalPic

      })
      userScore = userScore + array[foundPic][1]
      console.log(userScore)
      console.log(array[foundPic][1])

      $('.user-score').text(userScore);
      if (userScore == computerScore) {
        win();
      } else if (userScore > computerScore) {
        loss();
      }
      console.log(userScore);

    });

  }

  gamePlay(crystalPic);

  

});