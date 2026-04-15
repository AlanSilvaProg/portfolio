# Checklist — Adicionando um Novo Projeto ao Portfólio

Siga esta lista **na ordem** a cada novo projeto. Marque cada item ao concluir.

---

## ⚠️ Informações que DEVEM ser definidas antes de começar

Antes de qualquer edição, colete:

| Informação | Obrigatório? | Exemplo |
|---|---|---|
| Nome do projeto | ✅ | `Match3 Playable Ads` |
| Nome do arquivo `.html` | ✅ | `match3-playable-ads.html` |
| Seção de destino | ✅ | `mobile` / `pc` / `webgl` |
| Engine utilizada | ✅ | `Unity` / `Cocos Creator` / `Custom Engine` |
| Período de desenvolvimento | ✅ | `2026` ou `01/2024 – 06/2024` |
| Badges de tecnologia | ✅ | `TYPESCRIPT`, `COCOS CREATOR`, `HTML5` |
| Descrição curta (PT) | ✅ | Para `data-i18n` na página do projeto |
| Descrição curta (EN) | ✅ | Para `data-i18n` na página do projeto |
| Texto de contribuição (PT) | ✅ | "Fui responsável por..." |
| Texto de contribuição (EN) | ✅ | "I was responsible for..." |
| GIFs de gameplay | ⚠️ Necessário para hover e bg rotator | Pasta: `assets/projects/{Nome}/Gifs/` |
| Link externo (Play Store, Steam, etc.) | Opcional | URL |
| Ícone / imagem de capa | ✅ | `assets/projects/{Nome}/icon.png` |

> **Se qualquer item obrigatório não for fornecido, solicite antes de prosseguir.**

---

## 1. Criar a página do projeto

**Arquivo:** `projects/{nome-do-projeto}.html`

Copie como base um projeto similar já existente (mesma engine/plataforma) e ajuste:

- `<title>` — nome do projeto
- `data-i18n` keys — todas únicas para este projeto (ver seção 2)
- Links de mídia — screenshots, GIFs, vídeos
- Badge de engine — `unity.svg` / `cocos.svg` / `custom-engine.svg`
- Link externo (se houver) — Play Store, Steam, GitHub, etc.
- Link de voltar — `<a href="../index.html">`

---

## 2. Adicionar traduções em `lang.js`

Adicione as keys em **ambos** `translations.pt` e `translations.en`:

```js
// Mínimo obrigatório por projeto
{projetoId}Title: '',         // título exibido na página
{projetoId}Sub:   '',         // subtítulo / descrição curta
{projetoId}Contribution: '',  // texto "minha participação"
```

**Checklist de traduções:**
- [ ] `{id}Title` — PT
- [ ] `{id}Title` — EN
- [ ] `{id}Sub` — PT
- [ ] `{id}Sub` — EN
- [ ] `{id}Contribution` — PT
- [ ] `{id}Contribution` — EN
- [ ] Outros campos específicos do projeto (ex: `{id}StackTitle`, `{id}PeriodTitle`)

> ⚠️ **Atenção a chaves duplicadas!** O objeto JS não aceita chaves repetidas. Verifique antes de salvar.

---

## 3. Adicionar card em `index.html`

Localize o `<div>` do grupo correto:

| Seção | ID do grupo |
|---|---|
| PC / Console | `#pc-console-group` |
| WebGL | `#webgl-group` |
| Mobile | `#mobile-group` |

**Template do card:**

```html
<a class="project" href="projects/{nome}.html">
  <img src="assets/projects/{Nome}/icon.png" alt="{Título}">
  <div class="project-engine-badge">
    <img src="assets/icons/{engine}.svg" alt="{Engine}">
  </div>
  <!-- Se tiver link externo: -->
  <div class="project-live-badge" data-href="{URL}" title="{Texto}" aria-label="{Texto}">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  </div>
  <div class="project-info">
    <div class="project-title">{Título}</div>
    <div class="project-duration">{Período}</div>
    <div class="project-tags">
      <span class="badge">{BADGE1}</span>
      <span class="badge">{BADGE2}</span>
    </div>
  </div>
</a>
```

**Engines disponíveis:** `unity.svg` | `cocos.svg` | `custom-engine.svg`

---

## 4. Adicionar ao menu de atalhos (hamburger) em `lang.js`

Localize o array `PROJECTS` dentro da IIFE `// --- Global Hamburger Menu ---`:

```js
{ title: '{Título do Projeto}', url: 'projects/{nome}.html' },
```

Insira **na posição correta** (agrupe por plataforma para facilitar a navegação):
- PC/Console → no topo
- WebGL → após os PC
- Mobile → no final

---

## 5. Adicionar GIFs ao hover dos cards (index) em `lang.js`

Localize o objeto `projectGifs` dentro de `initProjectHoverGifs()`:

```js
'{nome}.html': [
  'assets/projects/{Nome}/Gifs/gif1.gif',
  'assets/projects/{Nome}/Gifs/gif2.gif',
  // ...
],
```

> Se não houver GIFs, adicione ao objeto `projectScreenshots` com screenshots estáticas como fallback.

**Requisitos de mídia:**
- [ ] GIFs existem no caminho informado
- [ ] Nomes de arquivo sem caracteres especiais são preferíveis (espaços são aceitos mas não recomendados)
- [ ] GIFs otimizados em `OptimizedGifs/` (opcional, mas melhora performance)

---

## 6. Adicionar GIFs ao rotador de fundo da página inicial em `lang.js`

Localize o array `gifs` dentro de `initTopBgRotator()`:

```js
// {Nome do Projeto} — GIFs de bg
'assets/projects/{Nome}/Gifs/gif1.gif',
'assets/projects/{Nome}/Gifs/gif2.gif',
```

> Adicione de 2 a 5 GIFs no máximo por projeto para não sobrecarregar o rotador.

---

## ✅ Checklist Final

Antes de publicar, confirme cada item:

### `projects/{nome}.html`
- [ ] Página criada com estrutura correta
- [ ] Todas as imagens e GIFs com caminhos corretos
- [ ] Link de voltar funcionando (`../index.html`)
- [ ] Título da aba (`<title>`) preenchido
- [ ] Badge de engine correto
- [ ] Link externo funcional (se houver)

### `lang.js`
- [ ] Keys de tradução adicionadas em `translations.pt`
- [ ] As mesmas keys adicionadas em `translations.en`
- [ ] Sem chaves duplicadas no objeto de tradução
- [ ] GIFs de hover adicionados em `projectGifs` (ou screenshots em `projectScreenshots`)
- [ ] GIFs de fundo adicionados em `initTopBgRotator`
- [ ] Projeto adicionado ao array `PROJECTS` do menu hamburger

### `index.html`
- [ ] Card adicionado no grupo correto (`#pc-console-group`, `#webgl-group` ou `#mobile-group`)
- [ ] Imagem de capa com caminho correto
- [ ] Badge de engine correto
- [ ] Período correto
- [ ] Badges de tecnologia preenchidos

---

## Referência rápida — engines disponíveis

| Engine | Arquivo SVG | Linguagem padrão |
|---|---|---|
| Unity | `assets/icons/unity.svg` | C# |
| Cocos Creator | `assets/icons/cocos.svg` | JavaScript / TypeScript |
| Custom Engine | `assets/icons/custom-engine.svg` | Variado |

## Referência rápida — seções do index

| Plataforma | Grupo HTML | Filtro CSS |
|---|---|---|
| PC / Console | `#pc-console-group` | `data-filter="pc"` |
| WebGL | `#webgl-group` | `data-filter="webgl"` |
| Mobile | `#mobile-group` | `data-filter="mobile"` |
