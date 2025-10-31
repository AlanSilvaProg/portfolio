/* lang.js — robust language toggle + fade-in + show-more
   - Persistência via localStorage (key: site_lang_v1)
   - Attach handlers safely to .lang-toggle buttons (works across pages)
*/

(function() {
  const LANG_KEY = 'site_lang_v1';
  let lang = localStorage.getItem(LANG_KEY) || 'pt';

  const translations = {
    pt: {
      headerTitle: 'Alan Silva',
      headerSub: 'Desenvolvedor de Jogos e Engenheiro de Software',
      showMore: 'Mostrar Mais',
      showLess: 'Mostrar Menos',
      footer: '© 2025 Alan Silva — Todos os direitos reservados.',
      back: '← Voltar',
      // Index
      projectsHeading: 'Projetos',
      projectsPreviewHint: 'Passe o mouse sobre um projeto para ver o preview.',
      // About section
      aboutIntroTitle: 'Introdução',
      aboutIntroP1: 'Graduado em Game Design pela Universidade Anhembi Morumbi (São Paulo, Brasil), sou apaixonado por desenvolvimento de jogos desde 2014. Atuei em um amplo espectro de projetos — de mobile a PC/console, de títulos casuais a produções de maior escala.',
      aboutIntroP2: 'Meu principal stack é Unity Engine com C#, onde concentro a maior parte da minha experiência profissional. Também tenho sólida experiência com JavaScript, Lua e C++, com uma afinidade especial por C++. Profissionalmente, minhas contribuições foram predominantemente em Unity e C#.',
      aboutIntroP3: 'Trabalho com jogos desde meados de 2019, somando mais de 6 anos de experiência prática entregando gameplay, sistemas, ferramentas e experiências de usuário bem polidas.',
      aboutExperienceTitle: 'Experiência',
      skillsTitle: 'Habilidades',
      certCaption: 'Profissional Certificado Unity: Programador (2023–2026)',
      // Platform section titles
      pcConsoleTitle: 'PC/Console',
      webglTitle: 'Jogos WebGL',
      mobileTitle: 'Mobile',
      // Generic sections
      appIcon: 'Ícone do App',
      appScreenshots: 'Screenshots do App',
      gameScreenshots: 'Screenshots do Jogo',
      promotionalImage: 'Imagem Promocional',
      gameTrailer: 'Trailer do Jogo',
      gameplayClips: 'Clipes de Gameplay',
      // Unbinary project translations
      unbinaryTitle: 'Unbinary',
      unbinarySub: 'Um jogo de aventura e quebra-cabeças em um mundo digital',
      unbinaryHeading: 'Unbinary',
      unbinaryDescription: 'Um jogo de aventura e quebra-cabeças onde você navega por um mundo digital resolvendo desafios e descobrindo a história.',
      gameTrailers: 'Trailers do Jogo',
      videoNotSupported: 'Seu navegador não suporta a tag de vídeo.',
      gameplayFeatures: 'Características de Jogabilidade',
      moreGameplay: 'Mais Jogabilidade',
      gameWorld: 'Mundo do Jogo',
      moreEnvironments: 'Mais Ambientes',
      awardsAndPrizes: 'Prêmios & Conquistas',
      achievementAward: 'Prêmio de Conquista',
      excellenceAward: 'Prêmio de Excelência',
      innovationPrize: 'Prêmio de Inovação',
      // Project descriptions
      fillTheBusSub: 'Jogo com screenshots e ícone.',
      ziggySub: 'Projeto com GIFs, screenshots e ícone.',
      gamebanbanbanSub: 'Projeto com GIFs de gameplay.',
      repairKrakenSub: 'Projeto com GIFs e screenshots.',
      locomotiva5Sub: 'Projeto com GIFs e screenshots.',
      salvePiramideSub: 'Projeto da EditoraBrasil com GIFs e screenshots.',
      showMonstroSub: 'Projeto da EditoraBrasil com GIFs e screenshots.',
      harbingerSub: 'Projeto com trailer, clipes de gameplay, GIFs e screenshots.'
    },
    en: {
      headerTitle: 'Alan Silva',
      headerSub: 'Game Developer & Software Engineer',
      showMore: 'Show More',
      showLess: 'Show Less',
      footer: '© 2025 Alan Silva — All rights reserved.',
      back: '← Back',
      // Index
      projectsHeading: 'Projects',
      projectsPreviewHint: 'Hover a project to see the preview.',
      // About section
      aboutIntroTitle: 'Introduction',
      aboutIntroP1: 'Graduated in Game Design from Anhembi Morumbi University (São Paulo, Brazil), I’m a game development enthusiast who has been building and studying games since 2014. I’ve worked across a wide spectrum of projects—from mobile to PC/console, from casual titles to larger-scale productions.',
      aboutIntroP2: 'My primary stack is Unity Engine with C#, where I’ve focused most of my professional experience. I also have solid experience with JavaScript, Lua, and C++, with a special affinity for C++. Professionally, my contributions have predominantly been in Unity and C#.',
      aboutIntroP3: 'I’ve been working in games since mid‑2019, with 6+ years of hands‑on experience delivering gameplay, systems, tools, and polished user experiences.',
      aboutExperienceTitle: 'Experience',
      skillsTitle: 'Skills',
      certCaption: 'Unity Certified Professional: Programmer (2023–2026)',
      // Platform section titles
      pcConsoleTitle: 'PC/Console',
      webglTitle: 'WebGL Games',
      mobileTitle: 'Mobile',
      // Generic sections
      appIcon: 'App Icon',
      appScreenshots: 'App Screenshots',
      gameScreenshots: 'Game Screenshots',
      promotionalImage: 'Promotional Image',
      gameTrailer: 'Game Trailer',
      gameplayClips: 'Gameplay Clips',
      // Unbinary project translations
      unbinaryTitle: 'Unbinary',
      unbinarySub: 'A puzzle adventure game in a digital world',
      unbinaryHeading: 'Unbinary',
      unbinaryDescription: 'A puzzle adventure game where you navigate through a digital world solving challenges and uncovering the story.',
      gameTrailers: 'Game Trailers',
      videoNotSupported: 'Your browser does not support the video tag.',
      gameplayFeatures: 'Gameplay Features',
      moreGameplay: 'More Gameplay',
      gameWorld: 'Game World',
      moreEnvironments: 'More Environments',
      awardsAndPrizes: 'Awards & Prizes',
      achievementAward: 'Achievement Award',
      excellenceAward: 'Excellence Award',
      innovationPrize: 'Innovation Prize',
      // Project descriptions
      fillTheBusSub: 'Game with screenshots and icon.',
      ziggySub: 'Project with gameplay GIFs, screenshots, and icon.',
      gamebanbanbanSub: 'Project with gameplay GIFs.',
      repairKrakenSub: 'Project with GIFs and screenshots.',
      locomotiva5Sub: 'Project with GIFs and screenshots.',
      salvePiramideSub: 'EditoraBrasil project with GIFs and screenshots.',
      showMonstroSub: 'EditoraBrasil project with GIFs and screenshots.',
      harbingerSub: 'Project with trailer, gameplay clips, GIFs, and screenshots.'
    }
  };

  // --- helper: apply translations to data-i18n targets ---
  function applyTranslations(showingAll=false) {
    const t = translations[lang] || translations.pt;
    // generic mapper: apply any known key found in data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(e => {
      const key = e.getAttribute('data-i18n');
      if (key && t[key]) e.textContent = t[key];
    });
    // show-more buttons
    document.querySelectorAll('.show-more').forEach(b => {
      b.textContent = showingAll ? t.showLess : t.showMore;
    });
  }

  // --- language toggle handler (shared) ---
  function toggleLang() {
    lang = (lang === 'pt') ? 'en' : 'pt';
    localStorage.setItem(LANG_KEY, lang);
    // update all related UI strings
    applyTranslations(window.__SHOWING_ALL_PROJECTS === true);
    // update all flag buttons
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
      btn.setAttribute('aria-label', (lang === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'));
    });
  }

  // --- ensure event attached to dynamically present or multiple buttons ---
  function attachLangToggleHandlers() {
    // find all current lang-toggle elements
    const els = Array.from(document.querySelectorAll('.lang-toggle'));
    els.forEach(el => {
      // remove previous to avoid double-bind (safe)
      el.removeEventListener('__langToggle__', toggleLang);
      // add event listener using named function via a wrapper
      // we add actual listener as regular click and mark a property to prevent duplicates
      if (!el.__hasLangHandler) {
        el.addEventListener('click', toggleLang);
        el.__hasLangHandler = true;
      }
      // set current flag icon
      el.textContent = lang === 'pt' ? '🇧🇷' : '🇺🇸';
      el.setAttribute('aria-label', (lang === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'));
    });
  }

  // --- fade-in observer ---
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  function observeFadeIns() {
    document.querySelectorAll('.fade-in').forEach(el => {
      // only observe if not already visible
      if (!el.classList.contains('visible')) fadeObserver.observe(el);
    });
  }

  // --- show more logic (works without requiring project script) ---
  const INITIAL_VISIBLE = 3;
  let showingAll = false;
  window.__SHOWING_ALL_PROJECTS = false;

  function updateProjectsVisibility() {
    const projects = Array.from(document.querySelectorAll('.project'));
    projects.forEach((p, i) => {
      if (!showingAll && i >= INITIAL_VISIBLE) {
        p.classList.add('hidden');
        p.style.pointerEvents = 'none';
      } else {
        p.classList.remove('hidden');
        p.style.pointerEvents = '';
      }
    });
    // update button label
    applyTranslations(showingAll);
    window.__SHOWING_ALL_PROJECTS = showingAll;
  }

  function initShowMoreButtons() {
    document.querySelectorAll('.show-more').forEach(btn => {
      btn.addEventListener('click', () => {
        showingAll = !showingAll;
        updateProjectsVisibility();
        if (showingAll) {
          const grid = document.querySelector('.projects-grid');
          if (grid) grid.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // --- init (safe DOM ready) ---
  function init() {
    attachLangToggleHandlers();
    applyTranslations(showingAll);
    observeFadeIns();
    initShowMoreButtons();
    updateProjectsVisibility();
    // init lightbox only on project pages
    if (document.querySelector('.project-page')) initLightbox();
    // watch for dynamically added lang-toggle buttons (e.g., via AJAX)
    let observerLocked = false;
   
   const bodyObserver = new MutationObserver(() => {
     if (observerLocked) return;
     observerLocked = true;
     requestAnimationFrame(() => {
       attachLangToggleHandlers();
       observerLocked = false;
     });
   });
   bodyObserver.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // expose for debug
  window.__siteLang = {
    get: () => lang,
    set: (v) => { lang = v; localStorage.setItem(LANG_KEY, v); applyTranslations(showingAll); attachLangToggleHandlers(); },
  };
})();

// --- Image Lightbox (click-to-preview) ---
(function(){
  function initLightbox(){
    // Avoid duplicate overlays
    if (document.querySelector('.lightbox-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay fade-in';
    overlay.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">✕</button>
        <img class="lightbox-image" alt="" />
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.lightbox-image');
    const capEl = overlay.querySelector('.lightbox-caption');
    const closeBtn = overlay.querySelector('.lightbox-close');

    function open(src, alt){
      imgEl.src = src;
      imgEl.alt = alt || '';
      capEl.textContent = alt || '';
      overlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
    function close(){
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
      imgEl.src = '';
      capEl.textContent = '';
    }

    overlay.addEventListener('click', (e) => {
      if (!e.target.closest('.lightbox-content') || e.target.classList.contains('lightbox-close')) {
        close();
      }
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Bind click handlers to all images inside project pages
    const imgs = Array.from(document.querySelectorAll('.project-page img'));
    imgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => open(img.src, img.alt));
    });
  }

  // expose for reuse from init()
  window.initLightbox = initLightbox;
})();
