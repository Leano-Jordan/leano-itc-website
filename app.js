/* Leano ITC — interactions */
(function () {
  'use strict';

  const root = document.documentElement;
  const mediaQuery = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null;
  const reducedMotionQuery = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;

  /* ---------- Theme toggle ---------- */
  const sun =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moon =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  const toggle = document.querySelector('[data-theme-toggle]');

  function getStoredTheme() {
    try {
      return window.localStorage.getItem('site-theme');
    } catch (error) {
      return null;
    }
  }

  function storeTheme(value) {
    try {
      window.localStorage.setItem('site-theme', value);
    } catch (error) {
      // Storage may be disabled or unavailable in private/restricted contexts.
    }
  }

  let mode = getStoredTheme() || (mediaQuery && mediaQuery.matches ? 'dark' : 'light');

  function paint() {
    root.setAttribute('data-theme', mode);
    if (!toggle) return;
    toggle.innerHTML = mode === 'dark' ? sun : moon;
    toggle.setAttribute(
      'aria-label',
      'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode'
    );
  }

  paint();

  if (toggle) {
    toggle.addEventListener('click', function () {
      mode = mode === 'dark' ? 'light' : 'dark';
      storeTheme(mode);
      paint();
    });
  }

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('site-header');
  const onScroll = function () {
    if (header) {
      header.classList.toggle('header--scrolled', window.scrollY > 8);
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile drawer ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.getElementById('drawer');

  if (menuBtn && drawer) {
    const drawerLinks = drawer.querySelectorAll('a');

    const setOpen = function (open) {
      drawer.setAttribute('data-open', String(open));
      drawer.setAttribute('aria-hidden', String(!open));
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');

      drawerLinks.forEach(function (link) {
        link.tabIndex = open ? 0 : -1;
      });
    };

    setOpen(false);

    menuBtn.addEventListener('click', function () {
      const open = drawer.getAttribute('data-open') !== 'true';
      setOpen(open);
      if (open) {
        const firstLink = drawer.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    function scrollToTarget(target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      const smooth = !(reducedMotionQuery && reducedMotionQuery.matches);

      try {
        window.scrollTo({
          top: top,
          behavior: smooth ? 'smooth' : 'auto',
        });
      } catch (error) {
        window.scrollTo(0, top);
      }
    }

    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        const href = link.getAttribute('href') || '';
        setOpen(false);
        menuBtn.focus();

        if (href.charAt(0) !== '#') return;
        event.preventDefault();

        const target = document.querySelector(href);
        if (!target) return;

        window.setTimeout(function () {
          scrollToTarget(target);
        }, 380);
      });
    });

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && drawer.getAttribute('data-open') === 'true') {
        setOpen(false);
        menuBtn.focus();
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  const items = document.querySelectorAll('[data-reveal]');
  const canReveal =
    !(reducedMotionQuery && reducedMotionQuery.matches) &&
    'IntersectionObserver' in window;

  if (canReveal) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, index) {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Math.min(index * 70, 280);
          window.setTimeout(function () {
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
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        if (status) {
          status.textContent = 'Please add your name, email and a short description.';
        }
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

      if (status) status.textContent = 'Opening your email client…';
      window.location.href = href;
    });
  }

  /* ---------- Year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
