const projects = document.querySelectorAll('.gallery__project');

export const loadProjectsToSlider = (slider) => {
  projects.forEach(project => {
    const link = document.createElement('a');
    const img = document.createElement('img');
    const projectImg = [...project.children]
      .find(element => element.tagName === 'IMG');

    img.classList.add('slider__image');
    img.src = projectImg.src;
    img.alt = projectImg.alt;

    link.classList.add('slider__item');
    link.href = project.attributes.href.value;

    link.append(img);

    slider.append(link);
  });
};
