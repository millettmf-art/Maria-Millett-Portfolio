// Mobile hamburger toggle script
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!toggle || !nav) return;

  const setOpen = (isOpen) => {
    nav.classList.toggle('open', isOpen);
    nav.classList.toggle('collapsed', !isOpen);
    toggle.setAttribute('aria-expanded', String(!!isOpen));
      toggle.classList.toggle('open', isOpen);
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.contains('open');
    setOpen(!isOpen);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(e.target) || toggle.contains(e.target)) return;
    setOpen(false);
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
