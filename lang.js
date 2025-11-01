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
      linkedinTooltip: 'Ver perfil',
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
      unbinaryTitle: 'Unbinary - Ludact',
      unbinarySub: 'UNBINARY é um jogo em realidade virtual de aventura e quebra-cabeça, totalmente pintado à mão. Conheça Webby, uma super IA feita a partir de dados coletados do comportamento humano e candidata para governar o planeta Terra. Será que ela está mesmo pronta para cumprir seu propósito?',
      unbinaryHeading: 'Participação',
      unbinaryDescription: 'Atuando como principal desenvolvedor, fui responsável por todo o desenvolvimento e finalização do jogo após sua versão DEMO, inicialmente com 5 fases. Ao longo do processo, desenvolvi sistemas e mecânicas para suportar toda a progressão e performance esperada, além de ter passado, com sucesso, por trodo o processo de aceite na loja oficial META Quest, alinhando e melhorando o jogo aos requerimentos da loja.\n\nTecnologia utilizada: Unity, C#, PlayMaker e QUIL.',
      gameTrailers: 'Trailers do Jogo',
      videoNotSupported: 'Seu navegador não suporta a tag de vídeo.',
      platforms: 'Plataformas',
      website: 'Website',
      stores: 'Lojas',
      gameplayFeatures: 'Características de Jogabilidade',
      
      // Stickman vs Zombies project translations
      stickmanTitle: 'Stickman vs Zombies',
      stickmanSub: 'Corra do ataque dos zumbis. Movimentos impressionantes de Parkour: escale plataformas e pendure-se em lugares altos!',
      stickmanHeading: 'Participação',
      stickmanDescription: 'Redução de ANR\'s criticos e crashs. Aprimoramente de performance, atualização de SDK\'s, adição de ADS providers e intermediários. Aprimoramente do load e unload de Asset Bundles, implementação de sistema de Temporadas e download dinâmico de conteúdo.',
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
      linkedinTooltip: 'View profile',
      // Index
      projectsHeading: 'Projects',
      projectsPreviewHint: 'Hover over a project to see the preview.',
      // About section
      aboutIntroTitle: 'Introduction',
      aboutIntroP1: 'Graduated in Game Design from Anhembi Morumbi University (São Paulo, Brazil), I\'ve been passionate about game development since 2014. I\'ve worked on a wide spectrum of projects — from mobile to PC/console, from casual titles to larger scale productions.',
      aboutIntroP2: 'My main stack is Unity Engine with C#, where I focus most of my professional experience. I also have solid experience with JavaScript, Lua, and C++, with a special affinity for C++. Professionally, my contributions have been predominantly in Unity and C#.',
      aboutIntroP3: 'I\'ve been working with games since mid-2019, accumulating over 6 years of practical experience delivering gameplay, systems, tools, and well-polished user experiences.',
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
      unbinaryTitle: 'Unbinary - Ludact',
      unbinarySub: 'UNBINARY is a hand-painted virtual reality adventure puzzle game. Meet Webby, a super AI built from collected human behavior data and a candidate to govern planet Earth. Is she really ready to fulfill her purpose?',
      unbinaryHeading: 'Participation',
      unbinaryDescription: 'Acting as the main developer, I was responsible for all development and finalization of the game after its DEMO version, initially with 5 levels. Throughout the process, I developed systems and mechanics to support all expected progression and performance, and successfully navigated the acceptance process for the official META Quest store, aligning and improving the game to meet store requirements.\n\nTechnology used: Unity, C#, PlayMaker, and QUIL.',
      gameTrailers: 'Game Trailers',
      videoNotSupported: 'Your browser does not support the video tag.',
      platforms: 'Platforms',
      website: 'Website',
      stores: 'Stores',
      gameplayFeatures: 'Gameplay Features',
      
      // Stickman vs Zombies project translations
      stickmanTitle: 'Stickman vs Zombies - Aurecas',
      stickmanSub: 'Run from zombie attacks. Impressive Parkour moves: climb platforms and hang on high places!',
      stickmanHeading: 'Participation',
      stickmanDescription: 'Reduction of critical ANRs and crashes. Performance improvement, SDK updates, addition of ADS providers and intermediaries. Enhancement of Asset Bundle loading and unloading, implementation of Seasons system and dynamic content download.',
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
    // Also control optional groups visibility on index
    const webgl = document.getElementById('webgl-group');
    const mobile = document.getElementById('mobile-group');
    if (webgl) webgl.style.display = showingAll ? 'block' : 'none';
    if (mobile) mobile.style.display = showingAll ? 'block' : 'none';
    // update button label
    applyTranslations(showingAll);
    window.__SHOWING_ALL_PROJECTS = showingAll;
  }

  function initShowMoreButtons() {
    document.querySelectorAll('.show-more').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Prevent index inline script double-toggle
        e.preventDefault();
        e.stopImmediatePropagation();
        showingAll = !showingAll;
        updateProjectsVisibility();
        if (showingAll) {
          const grid = document.querySelector('.projects-grid');
          if (grid) grid.scrollIntoView({ behavior: 'smooth' });
        }
      }, { capture: true });
    });
  }

  // --- init (safe DOM ready) ---
  function init() {
    attachLangToggleHandlers();
    applyTranslations(showingAll);
    observeFadeIns();
    initShowMoreButtons();
    updateProjectsVisibility();
    if (window.initMenuPanel) window.initMenuPanel();
    // If landing on index with a hash to optional groups, auto-expand and scroll
    const onIndex = /\/index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname === '';
    if (onIndex && (location.hash === '#webgl-group' || location.hash === '#mobile-group')) {
      if (window.__projectsVisibility && window.__projectsVisibility.setShowAll) {
        window.__projectsVisibility.setShowAll(true);
      }
      const target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
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

  // --- expose: control project visibility globally (index page) ---
  function setShowAll(expanded){
    showingAll = !!expanded;
    // ensure optional groups visible when expanding
    if (showingAll) {
      const webgl = document.getElementById('webgl-group');
      const mobile = document.getElementById('mobile-group');
      if (webgl) webgl.style.display = 'block';
      if (mobile) mobile.style.display = 'block';
    }
    updateProjectsVisibility();
    applyTranslations(showingAll);
    window.__SHOWING_ALL_PROJECTS = showingAll;
  }
  window.__projectsVisibility = {
    setShowAll,
    isShowAll: () => showingAll,
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
        <button class="lightbox-prev" aria-label="Previous">‹</button>
        <button class="lightbox-next" aria-label="Next">›</button>
        <div class="lightbox-section"></div>
        <img class="lightbox-image" alt="" />
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.lightbox-image');
    const capEl = overlay.querySelector('.lightbox-caption');
    const sectionEl = overlay.querySelector('.lightbox-section');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    let galleryNodes = [];
    let currIndex = 0;
    let sectionTitle = '';
    let containers = [];
    let sectionIndex = 0;

    function collectContainers(){
      containers = Array.from(document.querySelectorAll('.responsive-grid, .project-gallery, .awards-grid'))
        .filter(c => c.querySelector('img'));
      if (!containers.length) {
        const pg = document.querySelector('.project-page');
        if (pg) containers = [pg];
      }
    }

    function setContainer(idx){
      sectionIndex = Math.max(0, Math.min(idx, containers.length - 1));
      const container = containers[sectionIndex];
      galleryNodes = Array.from(container.querySelectorAll('img'));
      sectionTitle = getSectionTitle(container);
      // Re-clamp current index to new container size
      currIndex = Math.max(0, Math.min(currIndex, galleryNodes.length - 1));
    }

    function getSectionTitle(container){
      // Prefer a heading immediately above the container
      let node = container.previousElementSibling;
      while (node) {
        if (node.tagName && /^H[1-6]$/.test(node.tagName)) return node.textContent.trim();
        node = node.previousElementSibling;
      }
      const sec = container.closest('section');
      if (sec) {
        const h = sec.querySelector('h1,h2,h3,h4,h5,h6');
        if (h) return h.textContent.trim();
      }
      return '';
    }

    function updateButtons(){
      const atGlobalStart = (sectionIndex === 0) && (currIndex === 0);
      const atGlobalEnd = (sectionIndex === (containers.length - 1)) && (currIndex === (galleryNodes.length - 1));
      prevBtn.disabled = atGlobalStart; nextBtn.disabled = atGlobalEnd;
      prevBtn.classList.toggle('disabled', atGlobalStart);
      nextBtn.classList.toggle('disabled', atGlobalEnd);
    }

    function show(i){
      if (!galleryNodes.length) return;
      // Non-wrap within current container
      currIndex = Math.max(0, Math.min(i, galleryNodes.length - 1));
      const node = galleryNodes[currIndex];
      imgEl.src = node.src;
      imgEl.alt = node.alt || '';
      capEl.textContent = node.alt || '';
      sectionEl.textContent = sectionTitle || '';
      updateButtons();
    }

    function goNext(){
      if (currIndex < (galleryNodes.length - 1)) {
        show(currIndex + 1);
      } else if (sectionIndex < (containers.length - 1)) {
        setContainer(sectionIndex + 1);
        show(0);
      }
    }

    function goPrev(){
      if (currIndex > 0) {
        show(currIndex - 1);
      } else if (sectionIndex > 0) {
        setContainer(sectionIndex - 1);
        // Jump to last image of previous section
        show(galleryNodes.length - 1);
      }
    }

    function openFrom(img){
      // find gallery container
      const container = img.closest('.responsive-grid, .project-gallery, .awards-grid') || document.querySelector('.project-page');
      collectContainers();
      const idx = containers.indexOf(container);
      setContainer(idx >= 0 ? idx : 0);
      currIndex = galleryNodes.indexOf(img);
      overlay.classList.add('visible');
      document.body.style.overflow = 'hidden';
      show(currIndex);
    }
    function close(){
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
      imgEl.src = '';
      capEl.textContent = '';
      galleryNodes = [];
      currIndex = 0;
      sectionTitle = '';
      sectionEl.textContent = '';
    }

    overlay.addEventListener('click', (e) => {
      if (!e.target.closest('.lightbox-content') || e.target.classList.contains('lightbox-close')) {
        close();
      }
    });
    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);
    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('visible')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    });

    // Bind click handlers to all images inside project pages
    const imgs = Array.from(document.querySelectorAll('.project-page img'));
    imgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openFrom(img));
    });
  }

  // expose for reuse from init()
  window.initLightbox = initLightbox;
  // auto-init after this script block loads (safer ordering)
  if (document.querySelector('.project-page')) initLightbox();
})();

// --- Global Hamburger Menu ---
(function(){
  const PROJECTS = [
    { title: 'Unbinary - Ludact', url: 'projects/unbinary.html' },
    { title: 'Nebula Garden', url: 'projects/ng.html' },
    { title: 'Harbinger', url: 'projects/harbinger.html' },
    { title: 'Locomotiva5', url: 'projects/locomotiva5.html' },
    { title: 'Repair The Kraken', url: 'projects/repair-the-kraken.html' },
    { title: 'Sokolab', url: 'projects/sokolab.html' },
    { title: 'Ziggy', url: 'projects/ziggy.html' },
    { title: 'War', url: 'projects/war.html' },
    { title: 'GameBanBanBan', url: 'projects/gamebanbanban.html' },
    { title: 'Stickman Vs Zombies - Aurecas', url: 'projects/stickman-vs-zombies.html' },
    { title: 'Aquabitz', url: 'projects/aquabitz.html' },
    { title: 'IceRage', url: 'projects/icerage.html' },
    { title: 'Minute Bomb', url: 'projects/minutebomb.html' },
    { title: "Juju's Kitchen", url: 'projects/jujus-kitchen.html' },
    { title: 'Fill The Bus', url: 'projects/fill-the-bus.html' },
    { title: 'Ta Na Mesa', url: 'projects/tanamesa.html' }
  ];

  const INDEX_SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certification', label: 'Certification' },
    { id: 'projects', label: 'Projects' },
    { id: 'pc-console', label: 'PC/Console' },
    { id: 'webgl-group', label: 'WebGL Games' },
    { id: 'mobile-group', label: 'Mobile' }
  ];

  function buildMenuMarkup(){
    const btn = document.createElement('button');
    btn.className = 'menu-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.innerHTML = '<span class="menu-bars"><span></span></span><span>Menu</span>';

    const backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop';

    const panel = document.createElement('nav');
    panel.className = 'menu-panel';
    panel.innerHTML = `
      <h4>Index Sections</h4>
      <ul class="menu-list menu-index"></ul>
      <h4>Projects</h4>
      <ul class="menu-list menu-projects"></ul>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(backdrop);
    document.body.appendChild(panel);
    return { btn, backdrop, panel };
  }

  function fillMenu(panel){
    const idxList = panel.querySelector('.menu-index');
    const projList = panel.querySelector('.menu-projects');
    const onIndex = /\/index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname === '';
    const ROOT = location.pathname.includes('/projects/') ? '../' : '';

    // Index sections
    INDEX_SECTIONS.forEach(sec => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = sec.label;
      a.href = onIndex ? `#${sec.id}` : `${ROOT}index.html#${sec.id}`;
      a.addEventListener('click', (e) => {
        // smooth scroll and ensure optional sections are visible when on index
        if (onIndex) {
          e.preventDefault();
          // Expand all projects globally so previews show
          if (window.__projectsVisibility && window.__projectsVisibility.setShowAll) {
            window.__projectsVisibility.setShowAll(true);
          }
          const target = document.getElementById(sec.id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            // Fallback to hash navigation if element is missing
            location.hash = `#${sec.id}`;
          }
        }
        closeMenu();
      });
      li.appendChild(a);
      idxList.appendChild(li);
    });

    // Project links
    PROJECTS.forEach(p => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = p.title;
      a.href = `${ROOT}${p.url}`;
      li.appendChild(a);
      projList.appendChild(li);
    });
  }

  let _btn, _backdrop, _panel;
  function openMenu(){
    _backdrop.classList.add('open');
    _panel.classList.add('open');
  }
  function closeMenu(){
    _backdrop.classList.remove('open');
    _panel.classList.remove('open');
  }

  function initMenuPanel(){
    if (document.querySelector('.menu-panel')) return;
    const { btn, backdrop, panel } = buildMenuMarkup();
    _btn = btn; _backdrop = backdrop; _panel = panel;
    fillMenu(panel);
    btn.addEventListener('click', openMenu);
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  // expose for external call
  window.initMenuPanel = initMenuPanel;
  // auto-init to ensure visibility across pages
  try { initMenuPanel(); } catch (e) { /* noop */ }
})();
