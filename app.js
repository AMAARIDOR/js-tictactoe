"use strict";

let allGridItems = document.querySelectorAll(".cell");
let resultElement = document.getElementById("result");
let restartButtonElement = document.getElementById("restartButton");

let playerSwitch = 1;
let gameLogicBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winner;

const checkForWin = () => {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    if (combination.every((index) => gameLogicBoard[index] === "X")) {
      winner = "X";
      resultElement.textContent = `${winner} is the winner! 🎉`;
      restartButtonElement.classList.remove("hidden");
      console.log("X is the winner");
    } else if (combination.every((index) => gameLogicBoard[index] === "O")) {
      winner = "O";
      resultElement.textContent = `${winner} is the winner! 🎉`;
      restartButtonElement.classList.remove("hidden");
      console.log("O is the winner");
    }
  }
};

let handleClicks = () => {
  allGridItems.forEach((e) =>
    e.addEventListener("click", () => {
      if (playerSwitch === 1) {
        e.textContent = "X";
        gameLogicBoard[Number(e.dataset.cell) - 1] = "X";
        console.log(gameLogicBoard);
        playerSwitch = 0;
      } else {
        e.textContent = "O";
        gameLogicBoard[Number(e.dataset.cell) - 1] = "O";
        console.log(gameLogicBoard);
        playerSwitch = 1;
      }
      console.log(gameLogicBoard);
      checkForWin();
    })
  );
};

document.getElementById("restartButton").addEventListener("click", () => {
  document.getElementById("restartButton").classList.add("hidden");
  playerSwitch = 1;
  gameLogicBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  winner = "";
  document.getElementById("result").textContent = "";
  allGridItems.forEach((e) => (e.textContent = ""));
});

handleClicks();
