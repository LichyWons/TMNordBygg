const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-links a');

function setHeaderHeight() {
  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty(
    '--header-height',
    `${headerHeight}px`,
  );
}

function openMenu() {
  menuOverlay.classList.add('is-open');
  menuBtn.classList.add('is-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.setAttribute('aria-label', 'Lukk meny');
  menuOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  menuOverlay.classList.remove('is-open');
  menuBtn.classList.remove('is-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Åpne meny');
  menuOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const isOpen = menuOverlay.classList.contains('is-open');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuBtn.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

menuOverlay.addEventListener('click', (e) => {
  const clickedOutsidePanel = !menuPanel.contains(e.target);
  if (clickedOutsidePanel) {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  setHeaderHeight();

  if (window.innerWidth > 987) {
    closeMenu();
  }
});

window.addEventListener('load', setHeaderHeight);
setHeaderHeight();
