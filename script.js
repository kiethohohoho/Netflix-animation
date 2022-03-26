let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

setTimeout(() => {
  slide1.style.transform = "translateY(-100%)";
}, 1000);

setTimeout(() => {
  slide2.style.transform = "translateY(100%)";
}, 1600);

setTimeout(() => {
  slide3.style.transform = "translateY(-100%)";
}, 2200);
