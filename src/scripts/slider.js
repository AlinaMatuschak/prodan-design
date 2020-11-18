import { projects } from '../api/projects';

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider__button--previous');
const nextButton = document.querySelector('.slider__button--next');

let slideIndex = 0;

showSlides(slideIndex);

prevButton.addEventListener('click', () => {
  showSlides(slideIndex -= 1);
});

nextButton.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});

function showSlides(n) {
  if (n >= projects.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = projects.length - 1;
  }

  slider.style['background-image'] = `url(${projects[slideIndex].url})`;
}
