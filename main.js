document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.mobile-panel');
  if (toggle && panel) {
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', panel.classList.contains('open'));
    });
    panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));
  }

  const field = document.querySelector('.hero-points');
  if (field) {
    const count = window.innerWidth < 700 ? 14 : 26;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('i');
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = (Math.random() * 9).toFixed(2) + 's';
      dot.style.animationDuration = (7 + Math.random() * 5).toFixed(2) + 's';
      field.appendChild(dot);
    }
  }
});
