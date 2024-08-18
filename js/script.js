"use strict";

let storedLink = "";

const textElement = document.querySelector(".text");
const button1 = document.querySelector(".toggle__btn");
const button2 = document.querySelector(".toggle__btn-link");

button1.addEventListener("click", () => {
  const request = prompt("Enter your link");
  if (!request?.trim()) {
    alert("You entered a empty string");
  } else {
    storedLink = request;
    alert("Link saved!");
  }
});

button2.addEventListener("click", () => {
  if (storedLink) {
    window.location.href = storedLink;
  } else {
    alert("No link has been saved yet");
  }
});
