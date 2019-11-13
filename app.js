let startTaggList = [
  {
    id: "0",
    name: "first",
    x: 20,
    y: 20
  },
  {
    id: "1",
    name: "second",
    x: 145,
    y: 170
  },
  {
    id: "2",
    name: "third",
    x: 14,
    y: 320
  },
  {
    id: "3",
    name: "fourth",
    x: 370,
    y: 260
  }
];

class Tagging {
  constructor(startTaggList) {
    this.wraper = document.querySelector("#app");
    this.taggList = startTaggList;
    this.renderAll();
    this.isMovable = false;
    this.activeTagg;
  }

  renderAll() {
    this.wraper.innerHTML = "";
    this.taggList.forEach(item => {
      const tagg = document.createElement("div");
      tagg.classList.add("tagg");
      tagg.setAttribute("style", `left: ${item.x}px; top: ${item.y}px;`);
      tagg.setAttribute("data-tagg", item.id);

      const taggTitle = document.createElement("span");
      taggTitle.textContent = item.name;
      taggTitle.classList.add("taggTitle");
      tagg.appendChild(taggTitle);

      const taggDelete = document.createElement("span");
      taggDelete.textContent = "X";
      taggDelete.classList.add("taggDelete");

      tagg.appendChild(taggDelete);

      this.wraper.appendChild(tagg);
    });
  }

  moveTagg(pos) {
    if (this.isMovable && this.activeTagg) {
      const rectWraper = this.wraper.getBoundingClientRect();
      const rectActive = this.activeTagg.getBoundingClientRect();
      const deleteBtn = this.activeTagg.querySelector(".taggDelete");
      deleteBtn.classList.remove("taggDelete-left");
      let newPosX = pos.clientX - rectWraper.x - rectActive.width * 0.5;
      let newPosY = pos.clientY - rectWraper.y - rectActive.height * 0.5;
      if (newPosX < 0) {
        this.activeTagg.style.left = 0 + "px";
      } else if (newPosX > rectWraper.width - rectActive.width) {
        this.activeTagg.style.left = rectWraper.width - rectActive.width + "px";
      } else {
        this.activeTagg.style.left = newPosX + "px";
      }
      if (newPosY < 0) {
        this.activeTagg.style.top = 0 + "px";
      } else if (newPosY > rectWraper.height - rectActive.height) {
        this.activeTagg.style.top =
          rectWraper.height - rectActive.height + "px";
      } else {
        this.activeTagg.style.top = newPosY + "px";
      }
      if (newPosX > rectWraper.width - rectActive.width - 30) {
        deleteBtn.classList.add("taggDelete-left");
      }
    }
  }

  deleteTagg() {
    let taggId = this.activeTagg.getAttribute("data-tagg");
    let filtered = this.taggList.filter(item => item.id !== taggId);
    this.taggList = filtered;
    this.wraper.childNodes.forEach((node, i) => {
      if (node.getAttribute("data-tagg") === taggId) {
        this.wraper.removeChild(this.wraper.childNodes[i]);
      }
    });
  }

  setActive(active) {
    this.activeTagg = active;
    this.activeTagg.classList.add("active");
    let deleteBtn = this.activeTagg.querySelector(".taggDelete");
    deleteBtn.classList.add("active");
  }

  setMovable(target) {
    this.isMovable = false;
    if (target) {
      if (target.parentNode === this.activeTagg) {
        this.isMovable = true;
      }
    }
  }

  cleanActive() {
    this.Movable = false;
    if (this.activeTagg) {
      this.activeTagg.classList.remove("active");
      this.activeTagg = "";
    }
  }
}

const test = new Tagging(startTaggList);

document.addEventListener("click", e => {
  if (e.target.classList.contains("taggTitle")) {
    test.cleanActive();
    test.setActive(e.target.parentNode);
  }
  if (e.target.classList.contains("taggDelete")) {
    test.deleteTagg();
  }
  if (!e.target.classList.contains("taggTitle")) {
    test.cleanActive();
  }
});

document.addEventListener("mousedown", e => {
  test.setMovable(e.target);
});

document.addEventListener("mouseup", () => {
  test.setMovable();
});

document.addEventListener("mousemove", e => {
  test.moveTagg(e);
});
