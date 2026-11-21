const toggle = document.querySelector('.nav-toggle');
const panel = document.querySelector('.nav-panel');
const overlay = document.querySelector('.nav-overlay');
const closeBtn = document.querySelector('.nav-close');
const body = document.body;

if (toggle && panel && overlay && closeBtn) {
  function openMenu() {
    panel.classList.add('show');
    overlay.classList.add('show');
    body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }

  toggle.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('show')) {
      closeMenu();
      toggle.focus();
    }
  });

  function closeMenu() {
    panel.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
}