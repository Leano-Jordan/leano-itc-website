/* Leano ITC — interactions */
(function () {
  const root = document.documentElement;

  /* ---------- Theme toggle ---------- */
  const sun =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moon =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  const toggle = document.querySelector('[data-theme-toggle]');
  let mode = localStorage.getItem('leano-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function paint() {
    root.setAttribute('data-theme', mode);
    if (!toggle) return;
    toggle.innerHTML = mode === 'dark' ? sun : moon;
    toggle.setAttribute('aria-label', 'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode');
  }
  paint();
  if (toggle) {
    toggle.addEventListener('click', function () {
  mode = mode === 'dark' ? 'light' : 'dark';
  localStorage.setItem('leano-theme', mode);
  paint();
});
  }

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('site-header');
  const onScroll = function () {
    header.classList.toggle('header--scrolled', window.scrollY > 8);
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile drawer ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.getElementById('drawer');
  if (menuBtn && drawer) {
    const setOpen = function (open) {
      drawer.setAttribute('data-open', String(open));
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    menuBtn.addEventListener('click', function () {
      setOpen(drawer.getAttribute('data-open') !== 'true');
    });
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function (e) {
        const href = a.getAttribute('href') || '';
        setOpen(false);
        if (href.charAt(0) !== '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        // Wait for the drawer collapse to finish so the offset is correct.
        setTimeout(function () {
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }, 380);
      });
    });
    addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ---------- Scroll reveal ---------- */
  const items = document.querySelectorAll('[data-reveal]');
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Math.min(i * 70, 280);
          setTimeout(function () {
            el.classList.add('is-in');
          }, delay);
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.1 }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add('is-in');
    });
  }

  /* ---------- Enquiry form → pre-filled email ---------- */
  const form = document.getElementById('enquiry');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
  status.textContent = 'Please add your name, email and a short description.';
  return;
}

if (!email.includes('@')) {
  status.textContent = 'Please enter a valid email address.';
  return;
}

      const body = [
        'Name: ' + name,
        'Company: ' + ((data.get('company') || '').toString().trim() || '—'),
        'Email: ' + email,
        'Needs: ' + (data.get('topic') || '—'),
        '',
        message,
      ].join('\n');

      const href =
        'mailto:maluleka.isaacjr@gmail.com?subject=' +
        encodeURIComponent('Project enquiry — ' + name) +
        '&body=' +
        encodeURIComponent(body);

      status.textContent = 'Opening your email client…';
      window.open(href, '_blank', 'noopener');
    });
  }

  /* ---------- Year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
