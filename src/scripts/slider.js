import { projects } from '../api/projects';

const slider = document.querySelector(".slider");
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
  // let i;
  // const slides = document.getElementsByClassName('slider__slide');

  if (n >= projects.length) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = projects.length - 1;
  }

  console.log(slideIndex);

  console.dir(slider.style);

  slider.style.backgroundImage = `url(${projects[slideIndex].url})`;

  console.log(projects[slideIndex].url)

  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = 'none';
  // }

  // slides[slideIndex - 1].style.display = 'block';
}
