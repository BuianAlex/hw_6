// import "./slider.scss";

export default class Carousel {
  constructor(param) {
    this.wraper = param.wraper;
    this.carousel = this.wraper.querySelector(".carousel");
    param.autoSide ? this.autoSlide(true) : false;
    // /console.log(param);
    this.calcWraperWidth();
    this.autoTime;
  }

  calcWraperWidth() {
    // const carousel = this.wraper.querySelector(".carousel");
    const slide = document.querySelector(".slide");
    const slideRect = slide.getBoundingClientRect();
    const calcSlides = this.carousel.querySelectorAll(".slide").length;
    const marginSliders = 20;
    console.log(slideRect);
    console.log(calcSlides);

    console.log(slideRect.width * calcSlides);
    this.carousel.style.width = `${slideRect.width *
      calcSlides *
      calcSlides *
      marginSliders}px`;
  }

  moveLeft() {
    clearTimeout(this.autoTime);
    this.carousel.appendChild(this.carousel.children[0]);
    this.autoSlide();
    // setTimeout(() => {
    //   this.autoSlide();
    // }, 4000).bind(this);
  }

  moveRight() {
    clearTimeout(this.autoTime);
    this.carousel.prepend(
      this.carousel.children[this.carousel.children.length - 1]
    );
    this.autoSlide();
  }

  autoSlide() {
    const then = this;
    function auto() {
      then.autoTime = setTimeout(() => {
        then.moveLeft();
        auto();
      }, 4000);
    }
    auto();
  }
}
