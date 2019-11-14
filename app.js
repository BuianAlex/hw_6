import Carousel from "./modules/mySlider/app";

const mySlider = new Carousel({
  wraper: document.querySelector(".wraper-carousel"),
  autoSide: true
});
document.querySelector(".slide-next").addEventListener("click", e => {
  mySlider.moveLeft();
});
document.querySelector(".slide-prev").addEventListener("click", e => {
  mySlider.moveRight();
});
