export default class Carousel {
  constructor(param) {
    this.wraper = param.wraper;
    this.stateTimeOut = true;
    this.autoTime;
    this.carousel = this.wraper.querySelector(".carousel");
    param.autoSide ? this.autoSlide(true) : false;
    this.autoStop();
    this.createDots();
  }

  createDots() {
    const dotsWraper = this.wraper.querySelector(".slider-dots");
    const rest = this.carousel.children.length % 3 === 0 ? 0 : 1;
    const calcDots = Math.floor(this.carousel.children.length / 3) + rest;
    let index = 0;
    while (index < calcDots) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dotsWraper.appendChild(dot);
      index += 1;
    }
  }

  moveRight() {
    clearTimeout(this.autoTime);
    this.carousel.appendChild(this.carousel.children[0]);
    const slideImg = this.carousel.children[2].querySelector("img");
    if (slideImg.getAttribute("src") === null) {
      const srcSlide = slideImg.getAttribute("data-src");
      slideImg.setAttribute("src", srcSlide);
    }
    this.autoSlide();
  }

  moveLeft() {
    clearTimeout(this.autoTime);
    this.carousel.prepend(
      this.carousel.children[this.carousel.children.length - 1]
    );
    const slideImg = this.carousel.children[0].querySelector("img");
    if (slideImg.getAttribute("src") === null) {
      const srcSlide = slideImg.getAttribute("data-src");
      slideImg.setAttribute("src", srcSlide);
    }
    this.autoSlide();
  }

  autoStop() {
    const carouselRct = this.carousel.getBoundingClientRect();
    if (
      (carouselRct.height + carouselRct.top < 0 && this.stateTimeOut) ||
      carouselRct.top > window.innerHeight
    ) {
      clearTimeout(this.autoTime);
      this.stateTimeOut = false;
    }
    if (
      carouselRct.height + carouselRct.top > 0 &&
      !this.stateTimeOut &&
      carouselRct.top < window.innerHeight
    ) {
      this.autoSlide();
      this.stateTimeOut = true;
    }
  }

  autoSlide() {
    const then = this;
    function auto() {
      then.autoTime = setTimeout(() => {
        if (then.stateTimeOut) {
          then.moveRight();
          auto();
        }
      }, 4000);
    }
    auto();
  }
}
