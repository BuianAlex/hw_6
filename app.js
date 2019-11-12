const tagList = [
  {
    id: '0',
    name: 'first',
    x: 20,
    y: 20,
  },
  {
    id: '1',
    name: 'second',
    x: 40,
    y: 40,
  },
  {
    id: '2',
    name: 'third',
    x: 70,
    y: 70,
  },
  {
    id: '3',
    name: 'fourth',
    x: 100,
    y: 100,
  },
];

class Tagging {
  constructor() {
    this.wraper = document.querySelector('#app');
    this.renderAll();
  }

  renderAll() {
    this.wraper.innerHTML = '';
    tagList.forEach((item) => {
      const teg = document.createElement('div');
      teg.classList.add('teg');
      teg.setAttribute(
        'style',
        `z-index: 0; left: ${item.x}px; top: ${item.y}px;`,
      );
      teg.setAttribute('data-teg', item.id);

      const tegTitle = document.createElement('span');
      tegTitle.textContent = item.name;
      tegTitle.classList.add('tegTitle');
      teg.appendChild(tegTitle);

      const tegDelete = document.createElement('span');
      tegDelete.textContent = 'X';
      tegDelete.classList.add('tegDelete');
      tegDelete.classList.add('tegDelete-left');
      teg.appendChild(tegDelete);

      this.wraper.appendChild(teg);
    });
  }

  moveTeg() {}
}
const test = new Tagging();

const cursor = { x: 0, y: 0 };

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('tegTitle')) {
    const rect = document.querySelector('#app').getBoundingClientRect();
    console.log(rect);

    const tegId = e.target.parentNode.getAttribute('data-teg');
    document.addEventListener('mousemove', (em) => {
      for (let index = 0; index < tagList.length; index += 1) {
        if (tagList[index].id === tegId) {
          tagList[index].x = em.clientX - rect.x;
          tagList[index].y = em.clientY - rect.y;
        }
      }
      // console.log(tagList);

      test.renderAll();
    });
  }
});
document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', (em) => {
    test.moveTeg();
  });
});
