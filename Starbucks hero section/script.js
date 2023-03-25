'use strict';

const heroImageEl = document.querySelector(".hero-image");
const circleEl = document.querySelector(".circle");
const thumb1El = document.querySelector("#thumb1");
const thumb2El = document.querySelector("#thumb2");
const thumb3El = document.querySelector("#thumb3");

thumb1El.addEventListener("click" , function(){
    heroImageEl.src = "assets/img/img1.png"
    circleEl.style.backgroundColor = "#017143";
});

thumb2El.addEventListener("click" , function(){
    heroImageEl.src = "assets/img/img2.png"
    circleEl.style.backgroundColor = "#eb7495";
});

thumb3El.addEventListener("click" , function(){
    heroImageEl.src = "assets/img/img3.png"
    circleEl.style.backgroundColor = "#d752b1";
});