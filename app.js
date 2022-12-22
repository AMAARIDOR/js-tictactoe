"use strict";

let allGridItems = document.querySelectorAll(".cell");
let resultElement = document.getElementById("result");
let restartButtonElement = document.getElementById("restartButton");

let currentPlayer = 1;
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
    } else if (combination.every((index) => gameLogicBoard[index] === "O")) {
      winner = "O";
      resultElement.textContent = `${winner} is the winner! 🎉`;
      restartButtonElement.classList.remove("hidden");
    } else if (gameLogicBoard.every((index) => index !== 0 && !winner)) {
      resultElement.textContent = `It's a draw! 🏳`;
      restartButtonElement.classList.remove("hidden");
    }
  }
};

let handleClicks = () => {
  allGridItems.forEach((event) =>
    event.addEventListener("click", () => {
      if (event.textContent !== "" || winner) return;

      if (currentPlayer === 1) {
        event.textContent = "X";
        gameLogicBoard[Number(event.dataset.cell) - 1] = "X";
        currentPlayer = 0;
      } else {
        event.textContent = "O";
        gameLogicBoard[Number(event.dataset.cell) - 1] = "O";
        currentPlayer = 1;
      }

      checkForWin();
    })
  );
};

document.getElementById("restartButton").addEventListener("click", () => {
  document.getElementById("restartButton").classList.add("hidden");
  currentPlayer = 1;
  gameLogicBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  winner = "";
  document.getElementById("result").textContent = "";
  allGridItems.forEach((e) => (e.textContent = ""));
});

handleClicks();
