import Carousel from "./modules/mySlider/slider";

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
const carousel = document.querySelector(".carousel");
let touchstart;
let touchCurent;
carousel.addEventListener(
  "touchstart",
  e => {
    touchstart = e.touches[0].pageX;
    console.log("touchstart");
  },
  false
);
carousel.addEventListener(
  "touchend",
  e => {
    console.log(e);

    // const currentX = e.touches[0].pageX;
    if (touchCurent > touchstart) {
      console.log("move to the right");
      mySlider.moveRight();
    } else if (touchCurent < touchstart) {
      console.log("move to the left");
      mySlider.moveLeft();
    }
    console.log("touchend");
  },
  false
);

// document.addEventListener(
//   "touchcancel",
//   () => {
//     console.log("touchcancel");
//   },
//   false
// );
carousel.addEventListener(
  "touchmove",
  e => {
    touchCurent = e.touches[0].pageX;
  },
  false
);
