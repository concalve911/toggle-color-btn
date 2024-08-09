"use strict";

const textElement = document.getElementsByClassName("text")[0];
const button = document.getElementsByClassName("toggle__btn")[0];

let isOrigin = true;

button.addEventListener("click", function () {
  if (isOrigin) {
    textElement.style.color = "blue";
  } else {
    textElement.style.color = "yellow";
  }
  isOrigin = !isOrigin;
});
