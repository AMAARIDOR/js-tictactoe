"use strict";

let gameStartButtonElement = document.getElementById("gameStart");
let allGridItems = document.querySelectorAll(".cell");

let playerSwitch = 1;
let gameLogicBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const checkForWin = () => {
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
      gameLogicBoard[8] === "X9")
  ) {
    console.log("X Wins");
  }
};

let handleClicks = () => {
  gameStartButtonElement.textContent = "Reset";

  allGridItems.forEach((e) =>
    e.addEventListener("click", () => {
      //   gameStartButtonElement.addEventListener("click", () => {
      //     allGridItems.forEach((d) => (d.textContent = "."));
      //   });

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

gameStartButtonElement.addEventListener("click", handleClicks);
