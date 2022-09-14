'use strict';
// console.log(document.querySelector('.message').textContent);
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener(`click`, function () {
  const guess = document.querySelector('.guess').value;
  document.querySelector('main').style.height = '87vh';
  if (!guess) {
    displayMessage(`abe sale vosdike`);
  } else if (guess == secretNumber) {
    displayMessage(`🥰correct number🙈`);
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.tnr1').style.display = 'none';
    document.querySelector('.tnr2').style.display = 'none';
    document.querySelector('.tnr3').style.display = 'inline-block';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `মামা নাম্বার তো বড়` : `আহা মামা এতো ছোট নাম্বার কেও দেয় নাকি? `
      );

      score--;
      document.querySelector('.score').textContent = score;
      guess > secretNumber
        ? (document.querySelector('.tnr1').style.display = 'inline-block')
        (document.querySelector('.tnr2').style.display = 'none')
        : (document.querySelector('.tnr2').style.display = 'inline-block')
        (document.querySelector('.tnr1').style.display = 'none') 
        
    
    }
  } else {
    displayMessage( `you lost the game`) 
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `start guessing...`;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = ``;
  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
  document.querySelector('.tnr3').style.display = 'none';
});
