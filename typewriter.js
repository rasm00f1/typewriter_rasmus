"use strict";

window.addEventListener("DOMContentLoaded", initialize);

const inputString = document.querySelector("#typewriter").textContent;
const inputStringLength = inputString.length;
let n = 1;

function initialize() {
  console.log("initialize");
  // clear the text input
  document.querySelector("#typewriter").textContent = "";
  // start loop
  document.querySelector("#initializer_button").addEventListener("click", loop);
}

function loop() {
  console.log("loop");
  // remove button
  document.querySelector("#initializer_button").classList.add("hidden");
  // show the Nth letter:
  document.querySelector("#typewriter").textContent = inputString.substring(0, n);
  // increment N
  n++;
  // get random number
  let intervalTime = Math.random() * (450 - 250) + 250;
  // play sound
  let soundRandomizer = Math.round(Math.random() * 2 + 0.5);

  if (inputString.substring(n - 1, n) === " ") {
    let audio = new Audio(`typespace.mp3`);
    audio.play();
  } else if (n === inputStringLength) {
    let audio = new Audio(`typelastkey.mp3`);
    audio.play();
  } else {
    let audio = new Audio(`typekey${soundRandomizer}.mp3`);
    audio.play();
  }

  // wait before calling loop() again
  if (n <= inputStringLength) {
    console.log("interval");
    setTimeout(loop, intervalTime);
  } else {
    end();
  }
}

function end() {
  console.log("jobs done");
}
