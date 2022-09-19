"use strict";
const navbar =document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const preloader = document.querySelector(".preloader")

navbar.addEventListener("click", function(){
    menu.classList.toggle("show-menu")
})

window.addEventListener("load", function(){
    preloader.classList.add("fade-out")
})
