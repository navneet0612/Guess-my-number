"use strict";
//console.log(document.querySelector(".message").textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number!";
    displayMessage("No message!");
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("congratulation you got correct number!!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess < secretNumber ? "Too low!" : "Too high!");
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      displayMessage("GAME over!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is low
  //   else if (guess < secretNumber) {
  //     document.querySelector(".message").textContent = "Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     if (score < 1) {
  //       document.querySelector(".message").textContent = "GAME over!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     //when guess is high
  //   } else if (guess > secretNumber) {
  //     document.querySelector(".message").textContent = "Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "GAME OVER!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});
// -----again button working-----
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
