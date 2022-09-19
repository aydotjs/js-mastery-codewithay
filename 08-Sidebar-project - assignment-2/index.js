"use strict";
const navbar = document.querySelector(".fa-bars");
const side = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".fa-times");
navbar.addEventListener("click", function(){
    side.classList.toggle("show-sidebar")
})
closeSidebar.addEventListener("click", function(){
    side.classList.remove("show-sidebar")
})