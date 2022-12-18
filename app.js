"use strict";

let playerSwitch = 1;

document.querySelectorAll("[data-cell]").forEach((e) =>
  e.addEventListener("click", () => {
    if (playerSwitch === 1) {
      e.textContent = "X";
      playerSwitch = 0;
    } else {
      e.textContent = "O";
      playerSwitch = 1;
    }
  })
);
