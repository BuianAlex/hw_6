let tagList = [
  {
    id: "0",
    name: "first",
    x: 20,
    y: 20
  },
  {
    id: "1",
    name: "second",
    x: 40,
    y: 40
  },
  {
    id: "2",
    name: "third",
    x: 70,
    y: 70
  },
  {
    id: "3",
    name: "fourth",
    x: 100,
    y: 100
  }
];

class Tagging {
  constructor() {
    this.wraper = document.querySelector("#app");
    this.renderAll();
    this.isDrawing = false;
    this.rightBorder = false;
    //this.activeTeg;
  }

  renderAll() {
    this.wraper.innerHTML = "";
    tagList.forEach(item => {
      const teg = document.createElement("div");
      teg.classList.add("teg");
      teg.setAttribute(
        "style",
        `z-index: 0; left: ${item.x}px; top: ${item.y}px;`
      );
      teg.setAttribute("data-teg", item.id);

      const tegTitle = document.createElement("span");
      tegTitle.textContent = item.name;
      tegTitle.classList.add("tegTitle");
      teg.appendChild(tegTitle);

      const tegDelete = document.createElement("span");
      tegDelete.textContent = "X";
      tegDelete.classList.add("tegDelete");
      if (this.rightBorder) {
        tegDelete.classList.add("tegDelete-left");
      } else {
        tegDelete.classList.remove("tegDelete-left");
      }
      if (item.active) {
        tegDelete.classList.add("active");
      }

      teg.appendChild(tegDelete);

      this.wraper.appendChild(teg);
    });
  }

  moveTeg(e) {
    if (this.isDrawing) {
      for (let index = 0; index < tagList.length; index += 1) {
        if (tagList[index].active) {
          this.rightBorder = false;
          let newPosX = e.clientX - rect.x;
          let newPosY = e.clientY - rect.y;
          if (newPosX < 0) {
            tagList[index].x = 0;
          } else if (newPosX > rect.width - rectTarget.width) {
            tagList[index].x = rect.width - rectTarget.width;
          } else {
            tagList[index].x = newPosX;
          }
          if (newPosY < 0) {
            tagList[index].y = 0;
          } else if (newPosY > rect.height - rectTarget.height) {
            tagList[index].y = rect.height - rectTarget.height;
          } else {
            tagList[index].y = newPosY;
          }
          if (newPosX > rect.width - rectTarget.width - 30) {
            this.rightBorder = true;
          }
        }
      }
      test.renderAll();
    }
  }
  renderOne() {
    const rer = document.createElement("p");
    this.wraper.childNodes.forEach((node, i) => {
      if (node.getAttribute("data-teg") === "3") {
        console.log(node);
        node.style.left = "500px";
      }
    });
  }

  deleteTeg() {
    let filtered = tagList.filter(item => item.id !== tegId);
    tagList = filtered;
    this.wraper.childNodes.forEach((node, i) => {
      if (node.getAttribute("data-teg") === tegId) {
        this.wraper.removeChild(this.wraper.childNodes[i]);
      }
    });
    // let filtered = tagList.filter(item => item.id !== tegId);
    // tagList = filtered;
    // this.renderAll();
  }
  setActive(id) {
    console.log("aaa");
    this.renderOne();
    for (let index = 0; index < tagList.length; index += 1) {
      if (tagList[index].id === id) {
        tagList[index].active = true;
      } else {
        tagList[index].active = false;
      }
    }
    this.renderAll();
  }
}
const test = new Tagging();

let tegId;
const rect = document.querySelector("#app").getBoundingClientRect();
let rectTarget;
let activeTeg;
console.log(rect);

document.addEventListener("click", e => {
  if (e.target.classList.contains("tegTitle")) {
    activeTeg = e.target.parentNode;
    tegId = activeTeg.getAttribute("data-teg");
    rectTarget = e.target.parentNode.getBoundingClientRect();
    test.setActive(tegId);
    //e.target.nextSibling.classList.add("active");
  }
  if (e.target.classList.contains("tegDelete")) {
    test.deleteTeg();
  }
  if (e.target.parentNode !== activeTeg) {
    test.setActive();
  }
});

document.addEventListener("mousedown", e => {
  if (e.target.classList.contains("tegTitle")) {
    test.isDrawing = true;
  }
});

document.addEventListener("mouseup", () => {
  test.isDrawing = false;
});

document.addEventListener("mousemove", e => {
  test.moveTeg(e);
});
