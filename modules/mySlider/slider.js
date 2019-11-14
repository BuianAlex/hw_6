// import "./slider.scss";

export default class Carousel {
  constructor(param) {
    this.wraper = param.wraper;
    this.carousel = this.wraper.querySelector(".carousel");
    param.autoSide ? this.autoSlide(true) : false;
    // this.calcWraperWidth();
    this.createDots();
    this.autoTime;
  }

  // calcWraperWidth() {
  //   // const carousel = this.wraper.querySelector(".carousel");
  //   const slide = document.querySelector(".slide");
  //   const slideRect = slide.getBoundingClientRect();

  //   const calcSlides = this.carousel.querySelectorAll(".slide").length;
  //   const marginSliders = 20;
  //   console.log(slideRect.width * 3);
  //   console.log();

  //   this.carousel.style.width = `${slideRect.width * 9 * 20}px`;
  // }

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
