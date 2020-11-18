import { loadProjectsToSlider } from '../helpers/loadProjectsToSlider';

const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.slider__projects');

loadProjectsToSlider(sliderWrapper);

const sliderItems = slider.querySelectorAll('.slider__item');
const sliderControls = slider.querySelectorAll('.slider__controls');

let positionLeftItem = 0;
let transform = 0;
const items = [];

sliderItems.forEach((item, index) => {
  items.push({
    item: item,
    position: index,
    transform: 0,
  });
});

const position = {
  getMin: 0,
  getMax: items.length - 1,
};

const transformItem = direction => {
  if (direction === 'right') {
    if (positionLeftItem >= position.getMax) {
      positionLeftItem = 0;
      transform = 0;
    } else {
      positionLeftItem++;
      transform -= 100;
    }
  }

  if (direction === 'left') {
    if (positionLeftItem <= position.getMin) {
      positionLeftItem = position.getMax;
      transform = position.getMax * (-100);
    } else {
      positionLeftItem--;
      transform += 100;
    }
  }

  sliderWrapper.style.transform = `translateX(${transform}%)`;
};

const controlClick = ({ target }) => {
  if (target.classList.contains('slider__control')) {
    const isControlRight = target.classList.contains('slider__control--right');
    const direction = isControlRight ? 'right' : 'left';

    transformItem(direction);
  }
};

sliderControls.forEach(item => {
  item.addEventListener('click', controlClick);
});
