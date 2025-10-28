document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.querySelector(".lang-toggle");
  let lang = localStorage.getItem("lang") || "pt";

  const translations = {
    pt: {
      title: "Alan Silva",
      subtitle: "Desenvolvedor de Jogos e Engenheiro de Software",
      showMore: "Mostrar Mais",
      footer: "© 2025 Alan Silva — Todos os direitos reservados.",
    },
    en: {
      title: "Alan Silva",
      subtitle: "Game Developer & Software Engineer",
      showMore: "Show More",
      footer: "© 2025 Alan Silva — All rights reserved.",
    },
  };

  function updateLanguage() {
    const t = translations[lang];
    document.querySelector("header h1").textContent = t.title;
    document.querySelector("header p").textContent = t.subtitle;
    document.querySelector(".show-more").textContent = t.showMore;
    document.querySelector("footer p").textContent = t.footer;
    langToggle.textContent = lang.toUpperCase();
  }

  langToggle.addEventListener("click", () => {
    lang = lang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", lang);
    updateLanguage();
  });

  updateLanguage();
});
