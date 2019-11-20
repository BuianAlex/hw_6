import Carousel from "./modules/mySlider/slider";

const mySlider = new Carousel({
  wraper: document.querySelector(".wraper-carousel"),
  autoSide: true,
  autoSideTimeOut: 4000
});

document.querySelector(".slide-next").addEventListener("click", () => {
  mySlider.moveRight();
});

document.querySelector(".slide-prev").addEventListener("click", () => {
  mySlider.moveLeft();
});

const carousel = document.querySelector(".carousel");
let touchstart;
let touchCurent;

carousel.addEventListener(
  "touchstart",
  e => {
    touchstart = e.touches[0].pageX;
  },
  false
);

carousel.addEventListener(
  "touchend",
  () => {
    if (touchCurent > touchstart) {
      mySlider.moveLeft();
    } else if (touchCurent < touchstart) {
      mySlider.moveRight();
    }
  },
  false
);

carousel.addEventListener(
  "touchmove",
  e => {
    touchCurent = e.touches[0].pageX;
  },
  false
);

window.addEventListener("scroll", () => {
  mySlider.autoStop();
});
