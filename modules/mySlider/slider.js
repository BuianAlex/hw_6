export default class Carousel {
  constructor(param) {
    this.wraper = param.wraper;
    this.dotsWraper = this.wraper.querySelector(".slider-dots");
    this.stateTimeOut = true;
    this.autoSideTimeOut = param.autoSideTimeOut;
    this.autoTime = null;
    this.carousel = this.wraper.querySelector(".carousel");
    param.autoSide ? this.autoSlide() : false;
    this.list();
    this.autoStop();
    this.createDots();
  }

  list() {
    for (let i = 0; i < this.carousel.children.length; i += 1) {
      this.carousel.children[i].setAttribute("slide-order", i);
      // delete for prod
      const span = document.createElement("span");
      span.classList.add("num");
      span.textContent = i;
      this.carousel.children[i].appendChild(span);
    }
  }

  createDots() {
    const dotsWraper = this.wraper.querySelector(".slider-dots");
    const rest = this.carousel.children.length % 3 === 0 ? 0 : 1;
    const calcDots = Math.floor(this.carousel.children.length / 3) + rest;
    let index = 0;
    while (index < calcDots) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.setAttribute("order-dot", index);
      dot.addEventListener(
        "click",
        e => {
          this.dotClick(e.target.getAttribute("order-dot"));
        },
        this
      );
      dotsWraper.appendChild(dot);
      index += 1;
    }
    this.dotsState();
  }

  dotsState() {
    const dods = [...this.dotsWraper.children];
    dods.forEach(node => {
      node.classList.remove("dotActive");
    });
    const slideOder = parseInt(
      this.carousel.children[0].getAttribute("slide-order"),
      10
    );
    let n = 0;
    let dotActive = 0;
    while (n < this.dotsWraper.children.length) {
      if (slideOder <= 3 * n + slideOder && slideOder >= n * 3) {
        dotActive = n;
      }
      n += 1;
    }
    dods[dotActive].classList.add("dotActive");
  }

  dotClick(data) {
    clearTimeout(this.autoTime);
    const slids = [...this.carousel.children];
    const curPosition = slids.findIndex(item => {
      return item.getAttribute("slide-order") === (data * 3).toString();
    });
    const endss = slids.splice(0, curPosition);
    let index = 0;
    while (index < 3) {
      const slideImg = slids[index].querySelector("img");
      this.getLazyUrl(slideImg);
      index += 1;
    }
    const newList = [...slids, ...endss];
    this.carousel.innerHTML = "";
    newList.forEach(item => {
      this.carousel.appendChild(item);
    });
    this.dotsState();
  }

  moveRight() {
    clearTimeout(this.autoTime);
    this.carousel.appendChild(this.carousel.children[0]);
    const slideImg = this.carousel.children[2].querySelector("img");
    this.getLazyUrl(slideImg);
    this.dotsState();
    // this.autoSlide();
  }

  moveLeft() {
    clearTimeout(this.autoTime);
    this.carousel.prepend(
      this.carousel.children[this.carousel.children.length - 1]
    );
    const slideImg = this.carousel.children[0].querySelector("img");
    this.getLazyUrl(slideImg);
    this.dotsState();
    // this.autoSlide();
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

  getLazyUrl(slideImg) {
    if (slideImg.getAttribute("src") === null) {
      const srcSlide = slideImg.getAttribute("data-src");
      slideImg.setAttribute("src", srcSlide);
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
      }, then.autoSideTimeOut);
    }
    auto();
  }
}
