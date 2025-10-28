const langData = {
  "pt-BR": {
    title: "Portfólio",
    about_title: "Sobre mim",
    about_text: "Sou um desenvolvedor apaixonado por tecnologia e criação de sistemas interativos.",
    projects_title: "Projetos",
    show_more: "Mostrar mais",
  },
  "en-US": {
    title: "Portfolio",
    about_title: "About me",
    about_text: "I'm a developer passionate about technology and creating interactive systems.",
    projects_title: "Projects",
    show_more: "Show more",
  }
};

let currentLang = "pt-BR";
const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "pt-BR" ? "en-US" : "pt-BR";
  updateLanguage();
  langToggle.textContent = currentLang === "pt-BR" ? "🇧🇷" : "🇺🇸";
});

function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = langData[currentLang][el.dataset.i18n];
  });
}

// Tema
themeToggle.addEventListener("click", () => {
  const body = document.body;
  const theme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
});

// Projetos
const projects = [
  { title: "Meu Jogo", img: "assets/projects/meu-jogo.jpg", link: "projects/meu-jogo.html" },
  { title: "WebSocket Server", img: "assets/projects/websocket-server.jpg", link: "projects/websocket-server.html" },
  { title: "Unity Plugin", img: "assets/projects/unity-plugin.jpg", link: "projects/unity-plugin.html" },
  { title: "Projeto Extra", img: "assets/projects/unity-plugin.jpg", link: "#" },
];

const grid = document.getElementById("projects-grid");
const showMoreBtn = document.getElementById("show-more");
let showingAll = false;
const INITIAL_COUNT = 3;

function renderProjects() {
  grid.innerHTML = "";
  const displayCount = showingAll ? projects.length : INITIAL_COUNT;
  projects.slice(0, displayCount).forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div class="project-title">${p.title}</div>
    `;
    card.addEventListener("click", () => window.location.href = p.link);
    grid.appendChild(card);
  });
}

showMoreBtn.addEventListener("click", () => {
  showingAll = !showingAll;
  showMoreBtn.textContent = showingAll
    ? (currentLang === "pt-BR" ? "Mostrar menos" : "Show less")
    : langData[currentLang]["show_more"];
  renderProjects();
});

renderProjects();
updateLanguage();
