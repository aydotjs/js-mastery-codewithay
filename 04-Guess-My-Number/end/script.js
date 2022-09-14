'use strict';

let randomSecretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  //User inputs no number
  if (!guessedNumber) {
    document.querySelector('.message').textContent = '🔴 No Number';
  }
  //user inputs correct number
  else if (guessedNumber === randomSecretNumber) {
    document.querySelector('.number').textContent = randomSecretNumber;
    displayMessage('You are correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //user inputs wrong number
  else if (guessedNumber !== randomSecretNumber) {
    if (score > 1) {
      displayMessage(guessedNumber > randomSecretNumber ? 'Too high' : "Too low");
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomSecretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
});

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
