"use strict";

let allGridItems = document.querySelectorAll(".cell");

let playerSwitch = 1;
let gameLogicBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winner;

const checkForWin = () => {
  // X Winning Combinations:
  if (
    (gameLogicBoard[0] === "X1" &&
      gameLogicBoard[1] === "X2" &&
      gameLogicBoard[2] === "X3") ||
    (gameLogicBoard[3] === "X4" &&
      gameLogicBoard[4] === "X5" &&
      gameLogicBoard[5] === "X6") ||
    (gameLogicBoard[6] === "X7" &&
      gameLogicBoard[7] === "X8" &&
      gameLogicBoard[8] === "X9") ||
    (gameLogicBoard[0] === "X1" &&
      gameLogicBoard[3] === "X4" &&
      gameLogicBoard[6] === "X7") ||
    (gameLogicBoard[1] === "X2" &&
      gameLogicBoard[4] === "X5" &&
      gameLogicBoard[7] === "X8") ||
    (gameLogicBoard[2] === "X3" &&
      gameLogicBoard[5] === "X6" &&
      gameLogicBoard[8] === "X9") ||
    (gameLogicBoard[0] === "X1" &&
      gameLogicBoard[4] === "X5" &&
      gameLogicBoard[8] === "X9") ||
    (gameLogicBoard[2] === "X3" &&
      gameLogicBoard[4] === "X5" &&
      gameLogicBoard[6] === "X7")
  ) {
    winner = "X";
    console.log(winner);
  }
  // O Winning Combinations:
  if (
    (gameLogicBoard[0] === "O1" &&
      gameLogicBoard[1] === "O2" &&
      gameLogicBoard[2] === "O3") ||
    (gameLogicBoard[3] === "O4" &&
      gameLogicBoard[4] === "O5" &&
      gameLogicBoard[5] === "O6") ||
    (gameLogicBoard[6] === "O7" &&
      gameLogicBoard[7] === "O8" &&
      gameLogicBoard[8] === "O9") ||
    (gameLogicBoard[0] === "O1" &&
      gameLogicBoard[3] === "O4" &&
      gameLogicBoard[6] === "O7") ||
    (gameLogicBoard[1] === "O2" &&
      gameLogicBoard[4] === "O5" &&
      gameLogicBoard[7] === "O8") ||
    (gameLogicBoard[2] === "O3" &&
      gameLogicBoard[5] === "O6" &&
      gameLogicBoard[8] === "O9") ||
    (gameLogicBoard[0] === "O1" &&
      gameLogicBoard[4] === "O5" &&
      gameLogicBoard[8] === "O9") ||
    (gameLogicBoard[2] === "O3" &&
      gameLogicBoard[4] === "O5" &&
      gameLogicBoard[6] === "O7")
  ) {
    winner = "O";
    console.log(winner);
  }
};

let handleClicks = () => {
  allGridItems.forEach((e) =>
    e.addEventListener("click", () => {
      if (playerSwitch === 1) {
        e.textContent = "X";
        gameLogicBoard[Number(e.dataset.cell) - 1] = "X" + e.dataset.cell;
        console.log(gameLogicBoard);
        playerSwitch = 0;
      } else {
        e.textContent = "O";
        gameLogicBoard[Number(e.dataset.cell) - 1] = "O" + e.dataset.cell;
        console.log(gameLogicBoard);
        playerSwitch = 1;
      }

      checkForWin();
    })
  );
};

handleClicks();
