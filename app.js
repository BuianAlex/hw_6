import Carousel from "./modules/mySlider/slider";

const mySlider = new Carousel({
  wraper: document.querySelector("#sl-1"),
  autoSide: true,
  autoSideTimeOut: 4000,
  displaySlide: 3
});
const mySlider2 = new Carousel({
  wraper: document.querySelector("#sl-2"),
  autoSide: true,
  autoSideTimeOut: 4000,
  displaySlide: 1
});
