# Portfolio — Project Reference

## Overview

Static portfolio site with no build tools, no frameworks, no dependencies. Deployed as plain HTML/CSS/JS (GitHub Pages compatible). Bilingual (PT/EN).

---

## Technology Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (Grid, Flexbox, custom properties) |
| Logic | Vanilla JS (ES6+) |
| Build | None — direct file serving |
| i18n | Custom system (lang.js + data attributes + localStorage) |

---

## File Structure

```
/
├── index.html          # Home page (553 lines) — intro, projects grid, contact
├── lang.js             # ALL JS logic (1,332 lines) — translations, animations, interactions
├── style.css           # ALL styles (392 lines)
├── projects/           # 23 individual project pages
│   ├── unbinary.html
│   ├── book-of-wolves.html
│   └── ... (21 more)
└── assets/
    ├── favicon.svg
    ├── *.png           # certification badge
    └── projects/       # media per project
        ├── Unbinary/
        │   ├── Screenshots/
        │   ├── Gifs/
        │   └── OptimizedGifs/
        └── ... (22 more)
```

---

## Core Files — What Lives Where

| File | Responsibility |
|---|---|
| `index.html` | Page structure + content markup for home page |
| `lang.js` | Translations, scroll animations, GIF rotator, show-more toggle, event handlers |
| `style.css` | All visual styling — no inline styles on index.html |
| `projects/*.html` | Static project detail pages — minimal to no inline styles |

**Rule:** Logic belongs in `lang.js`. Styles belong in `style.css`. HTML is structure + content only.

---

## i18n System

- Translation keys live in `lang.js` in a nested object: `translations.pt` and `translations.en`
- HTML elements receive `data-i18n="key"` or `data-i18n-title="key"` attributes
- Language is persisted via `localStorage` under key `site_lang_v1`
- Default language: Portuguese (`pt`)
- Language toggle button fixed to the top of the page (🇧🇷/🇺🇸)
- ~120+ translation keys covering home page + all 23 project pages

**Adding a new translation key:**
1. Add `data-i18n="new.key"` to the HTML element
2. Add `"new.key": "text"` under both `translations.pt` and `translations.en` in `lang.js`

---

## Routing

- No router — plain file-based routing
- Home: `index.html`
- Project pages: `projects/{project-name}.html`
- Back link on every project page: `../index.html`
- Hash navigation used for anchors: `#home`, `#projects`, `#contact`

---

## Visual Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| Background | `#0e0e0e` | Page background |
| Text primary | `#eaeaea` | Body copy |
| Text secondary | `#cccccc` | Subtitles, muted text |
| Link | `#9fbfff` | Anchor color |
| Badge | `#2f66d0` | Technology tags |
| Card surface | `rgba(255,255,255,0.04–0.08)` | Card backgrounds |

### Spacing
8px base unit: `8 / 16 / 18 / 20 / 24 / 28 / 40px`

### Typography
Relative units only — no fixed `px` font sizes on body copy.

### Transitions
Range: `0.2s` (fast hover) to `0.7s` (fade-in scroll). Easing: `ease` or `ease-in-out`.

### Animations
- **Fade-in on scroll**: Intersection Observer (threshold `0.08`), adds `.visible` class
- **Card hover**: `scale()` + `translateY()` + `brightness()` transforms
- **GIF hover**: randomized GIF swap on project card images

---

## Project Card Structure (index.html)

```html
<div class="project-card fade-in" onclick="...">
  <img src="..." alt="..." loading="lazy">
  <div class="project-info">
    <h3 data-i18n="project.title"></h3>
    <p class="project-duration" data-i18n="project.duration"></p>
    <div class="tags">
      <span class="tag">Unity</span>
      <span class="tag">C#</span>
    </div>
  </div>
</div>
```

---

## Project Detail Page Structure

Each `projects/*.html` follows this layout:

1. Header — title + description (i18n)
2. Video section — YouTube `<iframe>` embeds
3. Contribution section — text description (i18n)
4. Platforms/stores info
5. Media grids:
   - Game trailers
   - Gameplay GIFs
   - Screenshots
   - Environments
6. Back link → `../index.html`

---

## Projects List

### PC / Console (11 projects)
| File | Project |
|---|---|
| `unbinary.html` | Unbinary (VR) |
| `nebula-garden.html` | Nebula Garden |
| `book-of-wolves.html` | Book of Wolves |
| `harbinger.html` | Harbinger |
| `locomotiva5.html` | Locomotiva5 |
| `repair-the-kraken.html` | Repair The Kraken |
| `sokolab.html` | Sokolab |
| `ziggy.html` | Ziggy |
| `salve-a-piramide.html` | Salve a Pirâmide |
| `show-do-monstro.html` | Show do Monstrão |
| `zumbis-desorganizados.html` | Zumbis Desorganizados |

### WebGL Games (3 projects)
| File | Project |
|---|---|
| `praia-bingo-show.html` | Praia Bingo Show |
| `war.html` | War |
| `gamebanbanban.html` | GameBanBanBan |

### Mobile (9 projects)
| File | Project |
|---|---|
| `stickman-vs-zombies.html` | Stickman vs Zombies |
| `bingo-rex.html` | Bingo Rex |
| `bingotopia.html` | Bingotopia |
| `aquabitz.html` | Aquabitz |
| `icerage.html` | IceRage |
| `minute-bomb.html` | Minute Bomb |
| `jujus-kitchen.html` | Juju's Kitchen |
| `fill-the-bus.html` | Fill The Bus |
| `ta-na-mesa.html` | Ta Na Mesa |

**Tech by project:** Unity + C# (majority), Cocos Creator + JavaScript (EditoraBrasil series).

---

## CSS Conventions

- **Layout**: CSS Grid for multi-column sections; Flexbox for alignment
- **Responsive grid pattern**: `repeat(auto-fit, minmax(Xpx, 1fr))`
- **Breakpoint**: `@media (max-width: 720px)` — single breakpoint for mobile
- **Image fit**: `object-fit: cover` (landscape), `object-fit: contain` + `.portrait` class (portrait)
- **Fade-in**: `.fade-in` element starts hidden; JS adds `.visible` when in viewport
- **Class naming**: kebab-case (`.project-card`, `.projects-grid`, `.show-more`)

---

## JavaScript Conventions

- **Variable naming**: camelCase
- **No globals pollution**: code is effectively modular through function scope
- **Duplicate event listener guard**: `element.__hasLangHandler = true` flag pattern
- **Safe handler attach**: remove before re-adding when needed
- **Intersection Observer**: auto-unobserves after animation fires

---

## Media Conventions

- **Path pattern**: `../assets/projects/{ProjectName}/{type}/{filename}`
- **GIF optimization**: each GIF has an `OptimizedGifs/` counterpart; JS uses optimized with fallback to original
- **Image lazy loading**: `loading="lazy"` on all `<img>` tags
- **Portrait detection**: `.portrait` CSS class added dynamically for tall images

---

## Show More / Show Less Pattern

The home page hides WebGL and Mobile project categories behind a "Mostrar Mais / Show More" button. Logic lives entirely in `lang.js`. The button toggles visibility and updates its own i18n label.

---

## Deployment

- Static files — no server required
- Compatible with GitHub Pages, Netlify, Vercel, or any CDN
- Remote: `https://github.com/AlanSilvaProg/portfolio.git`
- Branch: `main`

---

## What NOT To Do

- Do not add a framework (React, Vue, etc.) — the entire value of this site is zero-dependency simplicity
- Do not add a CSS framework (Bootstrap, Tailwind) — styling is intentional and custom
- Do not introduce a build step unless the project scope fundamentally changes
- Do not add inline `<style>` to HTML files — all styles belong in `style.css`
- Do not add `<script>` tags beyond the existing `lang.js` reference
- Do not create separate JS files for small features — extend `lang.js`