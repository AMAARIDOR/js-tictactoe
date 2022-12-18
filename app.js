"use strict";

let playerSwitch = 1;
let gameStartButtonElement = document.getElementById("gameStart");
let allGridItems = document.querySelectorAll(".cell");

let handleClicks = () => {
  gameStartButtonElement.textContent = "Reset";

  document.querySelectorAll("[data-cell]").forEach((e) =>
    e.addEventListener("click", () => {
      gameStartButtonElement.addEventListener("click", () => {
        allGridItems.forEach((d) => (d.textContent = "."));
      });

      if (playerSwitch === 1) {
        e.textContent = "X";
        playerSwitch = 0;
      } else {
        e.textContent = "O";
        playerSwitch = 1;
      }
    })
  );
};

gameStartButtonElement.addEventListener("click", handleClicks);
