const toggle = document.querySelector('.nav-toggle');
const panel = document.querySelector('.nav-panel');
const overlay = document.querySelector('.nav-overlay');
const closeBtn = document.querySelector('.nav-close');
const body = document.body;

if (toggle && panel && overlay && closeBtn) {
  toggle.addEventListener('click', () => {
    panel.classList.add('show');
    overlay.classList.add('show');
    body.classList.add('menu-open');
  });

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    panel.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('menu-open');
  }
}