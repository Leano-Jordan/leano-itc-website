/* Rosscore Labs — interactions */
(function () {
  'use strict';

  const root = document.documentElement;
  const mediaQuery = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  const reducedMotionQuery = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const raf = typeof window.requestAnimationFrame === 'function' ? window.requestAnimationFrame.bind(window) : function (callback) { return window.setTimeout(callback, 16); };
  const caf = typeof window.cancelAnimationFrame === 'function' ? window.cancelAnimationFrame.bind(window) : function (id) { window.clearTimeout(id); };
  const getScrollY = function () { return typeof window.scrollY === 'number' ? window.scrollY : window.pageYOffset || 0; };
  let pageExiting = false;

  /* ---------- Theme toggle ---------- */
  const sun = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const toggle = document.querySelector('[data-theme-toggle]');

  function getStoredTheme() {
    try {
      const stored = window.localStorage.getItem('site-theme');
      return stored === 'dark' || stored === 'light' ? stored : null;
    } catch (error) {
      return null;
    }
  }

  function storeTheme(value) {
    try { window.localStorage.setItem('site-theme', value); } catch (error) { /* Storage may be unavailable. */ }
  }

  const storedTheme = getStoredTheme();
  let mode = storedTheme || (mediaQuery && mediaQuery.matches ? 'dark' : 'light');

  function paint() {
    root.setAttribute('data-theme', mode);
    if (!toggle) return;
    toggle.innerHTML = mode === 'dark' ? sun : moon;
    toggle.setAttribute('aria-label', 'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode');
    toggle.setAttribute('aria-pressed', String(mode === 'dark'));
    toggle.title = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  paint();

  if (toggle) {
    toggle.addEventListener('click', function () {
      mode = mode === 'dark' ? 'light' : 'dark';
      storeTheme(mode);
      paint();
    });
  }

  if (!storedTheme && mediaQuery) {
    const onSystemThemeChange = function (event) { mode = event.matches ? 'dark' : 'light'; paint(); };
    if (typeof mediaQuery.addEventListener === 'function') mediaQuery.addEventListener('change', onSystemThemeChange);
    else if (typeof mediaQuery.addListener === 'function') mediaQuery.addListener(onSystemThemeChange);
  }

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('site-header');
  let scrollTicking = false;
  let scrollFrame = 0;
  const onScroll = function () {
    if (scrollTicking) return;
    scrollTicking = true;
    scrollFrame = raf(function () {
      if (header) header.classList.toggle('header--scrolled', getScrollY() > 8);
      scrollTicking = false;
    });
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile drawer ---------- */
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.getElementById('drawer');

  if (menuBtn && drawer) {
    const drawerLinks = drawer.querySelectorAll('a');
    let lastFocused = menuBtn;

    const setOpen = function (open) {
      drawer.setAttribute('data-open', String(open));
      drawer.setAttribute('aria-hidden', String(!open));
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      drawerLinks.forEach(function (link) { link.tabIndex = open ? 0 : -1; });
      if ('inert' in drawer) drawer.inert = !open;
      document.body.classList.toggle('drawer-open', open);
      if (open) lastFocused = document.activeElement || menuBtn;
    };

    const closeDrawer = function (restoreFocus) {
      setOpen(false);
      if (restoreFocus && lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    };

    setOpen(false);

    menuBtn.addEventListener('click', function () {
      const open = drawer.getAttribute('data-open') !== 'true';
      setOpen(open);
      if (open) {
        const firstLink = drawer.querySelector('a');
        if (firstLink) firstLink.focus();
      } else menuBtn.focus();
    });

    function scrollToTarget(target) {
      const top = Math.max(0, target.getBoundingClientRect().top + getScrollY() - 80);
      const smooth = !(reducedMotionQuery && reducedMotionQuery.matches);
      try { window.scrollTo({ top: top, behavior: smooth ? 'smooth' : 'auto' }); }
      catch (error) { window.scrollTo(0, top); }
    }

    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        const href = link.getAttribute('href') || '';
        closeDrawer(false);
        if (href.charAt(0) !== '#') return;
        event.preventDefault();
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        history.replaceState(null, '', href);
        raf(function () { scrollToTarget(target); });
        menuBtn.focus();
      });
    });

    document.addEventListener('click', function (event) {
      if (drawer.getAttribute('data-open') !== 'true') return;
      if (drawer.contains(event.target) || menuBtn.contains(event.target)) return;
      closeDrawer(false);
    });

    window.addEventListener('keydown', function (event) {
      if (drawer.getAttribute('data-open') !== 'true') return;
      if (event.key === 'Escape') { event.preventDefault(); closeDrawer(true); return; }
      if (event.key !== 'Tab') return;
      const focusable = Array.prototype.slice.call(drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900 && drawer.getAttribute('data-open') === 'true') closeDrawer(false);
    }, { passive: true });
  }

  /* ---------- Anchor offset for direct hash loads ---------- */
  function alignInitialHash() {
    const hash = window.location.hash;
    if (!hash || hash === '#top') return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    raf(function () { window.scrollTo(0, Math.max(0, target.getBoundingClientRect().top + getScrollY() - 80)); });
  }
  if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', alignInitialHash, { once: true });
  else alignInitialHash();

  /* ---------- Scroll reveal ---------- */
  const items = document.querySelectorAll('[data-reveal]');
  const canReveal = !(reducedMotionQuery && reducedMotionQuery.matches) && 'IntersectionObserver' in window;
  if (canReveal) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = Math.min(index * 70, 280);
        const timer = window.setTimeout(function () { el.classList.add('is-in'); }, delay);
        el.dataset.revealTimer = String(timer);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
    items.forEach(function (el) { io.observe(el); });
    window.addEventListener('pagehide', function () {
      pageExiting = true;
      io.disconnect();
      items.forEach(function (el) { if (el.dataset.revealTimer) window.clearTimeout(Number(el.dataset.revealTimer)); });
      if (scrollFrame) caf(scrollFrame);
    }, { once: true });
  } else items.forEach(function (el) { el.classList.add('is-in'); });

  /* ---------- Enquiry form → pre-filled email ---------- */
  const form = document.getElementById('enquiry');
  const status = document.getElementById('form-status');
  const submitButton = form ? form.querySelector('button[type="submit"]') : null;
  if (status) status.setAttribute('aria-live', 'polite');

  if (form) {
    const fields = Array.prototype.slice.call(form.querySelectorAll('input, textarea, select'));
    const clearInvalid = function () { this.removeAttribute('aria-invalid'); };
    fields.forEach(function (field) { field.addEventListener('input', clearInvalid); field.addEventListener('change', clearInvalid); });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (submitButton && submitButton.disabled) return;
      if (!form.checkValidity()) {
        fields.forEach(function (field) { if (!field.checkValidity()) field.setAttribute('aria-invalid', 'true'); });
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();
      if (!name || !email || !message) {
        if (status) status.textContent = 'Please add your name, email and a short description.';
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
      const href = 'mailto:maluleka.isaacjr@gmail.com?subject=' + encodeURIComponent('Project enquiry — ' + name) + '&body=' + encodeURIComponent(body);
      if (submitButton) { submitButton.disabled = true; submitButton.setAttribute('aria-disabled', 'true'); }
      if (status) status.textContent = 'Opening your email client…';
      window.setTimeout(function () {
        if (!pageExiting && document.visibilityState === 'visible' && status) {
          status.textContent = 'If your email app did not open, please email maluleka.isaacjr@gmail.com directly.';
          if (submitButton) { submitButton.disabled = false; submitButton.removeAttribute('aria-disabled'); }
        }
      }, 1800);
      window.location.href = href;
    });
  }

  /* ---------- Lifecycle cleanup ---------- */
  window.addEventListener('pagehide', function () {
    pageExiting = true;
    window.removeEventListener('scroll', onScroll);
    if (scrollFrame) caf(scrollFrame);
  }, { once: true });

  /* ---------- Year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
