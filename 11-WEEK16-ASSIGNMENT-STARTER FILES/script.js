//Hint
//Critically Examine the mark up and the CSS
//Select the left and right buttons
//Select element with id of imgs
//select all the images
//crate a function to change image on button click
//you may need to learn about about the setInterval method
//you will need to transform the images offscreen to implement sliding effect
//Goodluck😎

"use strict";
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const imageContainer = document.querySelector("#imgs");
const images = document.querySelectorAll("img");

let counter = 0;
const changeImage = function () {
  if (counter > images.length - 1) {
    counter = 0;
  } else if (counter < 0) {
    counter = images.length - 1;
  }
  imageContainer.style.transform = `translateX(${-counter * 500}px)`;
};

rightBtn.addEventListener("click", function () {
  counter++;
  changeImage();
});
leftBtn.addEventListener("click", function () {
  counter--;
  changeImage();
});
