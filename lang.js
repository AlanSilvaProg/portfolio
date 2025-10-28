document.addEventListener('DOMContentLoaded', () => {
  // --- Language setup ---
  const LANG_KEY = 'site_lang_v1';
  let lang = localStorage.getItem(LANG_KEY) || 'pt';
  const langButtons = Array.from(document.querySelectorAll('.lang-toggle'));

  const translations = {
    pt: {
      headerTitle: 'Alan Silva',
      headerSub: 'Desenvolvedor de Jogos e Engenheiro de Software',
      showMore: 'Mostrar Mais',
      showLess: 'Mostrar Menos',
      footer: '© 2025 Alan Silva — Todos os direitos reservados.',
      back: '← Voltar'
    },
    en: {
      headerTitle: 'Alan Silva',
      headerSub: 'Game Developer & Software Engineer',
      showMore: 'Show More',
      showLess: 'Show Less',
      footer: '© 2025 Alan Silva — All rights reserved.',
      back: '← Back'
    }
  };

  function applyLanguage() {
    const t = translations[lang];
    // header
    document.querySelectorAll('[data-i18n="headerTitle"]').forEach(e => e.textContent = t.headerTitle);
    document.querySelectorAll('[data-i18n="headerSub"]').forEach(e => e.textContent = t.headerSub);
    // show-more button
    document.querySelectorAll('.show-more').forEach(b => {
      b.textContent = showingAll ? t.showLess : t.showMore;
    });
    // footer
    document.querySelectorAll('[data-i18n="footer"]').forEach(e => e.textContent = t.footer);
    // back link (on project pages)
    document.querySelectorAll('[data-i18n="back"]').forEach(e => e.textContent = t.back);

    // update flags on all language buttons
    langButtons.forEach(btn => btn.textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸');
  }

  // toggle handler (shared by all lang-toggle buttons)
  function toggleLang() {
    lang = (lang === 'pt') ? 'en' : 'pt';
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage();
  }

  // attach click handlers to all existing lang buttons
  langButtons.forEach(btn => {
    btn.addEventListener('click', toggleLang);
    // ensure button is accessible
    btn.setAttribute('aria-label', 'Mudar idioma / Change language');
  });

  // --- Fade-in observer ---
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // --- Projects "Mostrar mais" logic ---
  const INITIAL_VISIBLE = 3;
  const projects = Array.from(document.querySelectorAll('.project'));
  const showMoreBtn = document.querySelector('.show-more');
  let showingAll = false;

  function updateProjectsVisibility() {
    projects.forEach((p, i) => {
      if (!showingAll && i >= INITIAL_VISIBLE) {
        p.classList.add('hidden'); // hidden by CSS (keeps markup but visually hidden)
      } else {
        p.classList.remove('hidden');
      }
    });
    if (showMoreBtn) {
      const t = translations[lang];
      showMoreBtn.style.display = projects.length > INITIAL_VISIBLE ? 'inline-block' : 'none';
      showMoreBtn.textContent = showingAll ? t.showLess : t.showMore;
    }
  }

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      showingAll = !showingAll;
      updateProjectsVisibility();
      // scroll to grid top when expanded
      if (showingAll) {
        const grid = document.querySelector('.projects-grid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // initial calls
  applyLanguage();
  updateProjectsVisibility();

  // expose for debugging (optional)
  window.__siteLang = { get: () => lang, set: (v) => { lang = v; localStorage.setItem(LANG_KEY, v); applyLanguage(); } };
});
