const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.navigation-mobile');

toggle.addEventListener('change', toggleMenu);
window.addEventListener('resize', closeMenu);

function toggleMenu() {
  nav.style.display = getComputedStyle(nav).display === 'none'
    ? 'flex'
    : 'none';
}

function closeMenu() {
  const mediaQuery = window.matchMedia('(min-width: 1051px)');

  if (mediaQuery.matches) {
    nav.style.display = 'none';
    toggle.checked = false;
  }
}
