"use strict";
let logoBurger = document.querySelector(".menu__burger_logo");
let burgerContent = document.querySelector(".menu__burger_content");
logoBurger.onclick = (event) => {
  burgerContent.classList.toggle("menu__burger_active");
};
