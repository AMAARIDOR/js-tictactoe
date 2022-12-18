"use strict";

let playerSwitch = 1;

document.querySelectorAll("[data-cell]").forEach((e) =>
  e.addEventListener("click", () => {
    const gridItemValue = e.textContent;

    if (playerSwitch === 1) {
      gridItemValue = "X";
      playerSwitch = 0;
    } else {
      gridItemValue = "O";
      playerSwitch = 1;
    }
  })
);
