/* ===========================================================================
   app.js — motor del wiki
   Router por hash · breadcrumb · back/forward · render Markdown · Mermaid
   =========================================================================== */
(function () {
  "use strict";

  const W = window.WIKI;
  const HOME = W.home;

  /* ---- Acentos por sección (sincroniza con styles.css :root) ---- */
  const ACCENTS = {
    home:       { a: "#f1b211", d: "#9a6e12", t: "#fbeac0", i: "#241a05" },
    cabeza:     { a: "#3d6fb4", d: "#10243f", t: "#dceafe", i: "#10243f" },
    tripa:      { a: "#d39400", d: "#9a6e12", t: "#f7e3a8", i: "#241a05" },
    corazon:    { a: "#c0567f", d: "#3a1020", t: "#fbe0ec", i: "#3a1020" },
    plantillas: { a: "#7a8a3a", d: "#45501c", t: "#eaeccf", i: "#45501c" },
  };

  /* ---- Aplanado del árbol (orden de lectura) + índice por id ---- */
  const FLAT = [];      // páginas reales, en orden, para prev/next
  const BY_ID = {};     // id -> nodo (incluye grupos)
  const PARENT = {};    // id -> id del padre

  (function walk(nodes, parentId) {
    nodes.forEach((n) => {
      BY_ID[n.id] = n;
      if (parentId) PARENT[n.id] = parentId;
      if (!n.group) FLAT.push(n);            // los grupos no son páginas
      if (n.children) walk(n.children, n.id);
    });
  })(W.tree, null);

  /* ---- Helpers ---- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  const routeOf = () => {
    let h = location.hash.replace(/^#\/?/, "").trim();
    return h || HOME;
  };
  const ancestors = (id) => {
    const chain = [];
    let cur = id;
    while (cur) {
      chain.unshift(cur);
      cur = PARENT[cur];
    }
    return chain;
  };

  /* ---- Estado de expansión (persistente entre navegaciones) ----
     Set de ids expandidos. Expandir/colapsar un nodo NO afecta a los demás (sin
     acordeón). Al navegar se AÑADE la rama activa, pero nunca se cierra lo que el
     usuario abrió manualmente. El sidebar se re-renderiza desde este Set. */
  const EXPANDED = new Set();

  /* ---- Sidebar estilo Notion (recursivo + colapsable) ----
     - Marcador: emoji si lo tiene; si no, ícono Phosphor (node.icon); si no, "•".
     - El row de un nodo CON página es un <a> que navega (#/id); el expandir/
       colapsar es EXCLUSIVO del botón-chevron (stopPropagation/preventDefault).
     - Un nodo con hijos pero SIN página (group:true) alterna con el row entero.
     - En hover de la fila (solo si tiene hijos) el marcador se reemplaza por el
       botón-chevron (▾ abierto · ▸ cerrado), con su propio afford de hover.
     - Antes de un top-level con topDivider:true dibuja <hr> y, si trae overline,
       un encabezado overline no interactivo (p. ej. "Recursos"). */
  function buildSidebar(activeId) {
    const nav = $("#nav");
    nav.innerHTML = "";
    // abre la rama activa sin cerrar lo que el usuario ya abrió
    ancestors(activeId).forEach((id) => EXPANDED.add(id));
    W.tree.forEach((node) => {
      if (node.topDivider) nav.appendChild(el("hr", "nav-divider"));
      if (node.overline) {
        const ov = el("div", "nav-section-label", esc(node.overline));
        ov.setAttribute("aria-hidden", "true");
        nav.appendChild(ov);
      }
      nav.appendChild(navNode(node, activeId));
    });
  }

  // Marcador del nodo: emoji → ícono Phosphor → bullet
  function markerInner(node) {
    if (node.emoji) return node.emoji;
    if (node.icon) return '<i class="ph ' + node.icon + '" aria-hidden="true"></i>';
    return "•";
  }

  function navNode(node, activeId) {
    const hasChildren = !!(node.children && node.children.length);
    const navigable = !node.group;            // los group:true no tienen página
    const expanded = !hasChildren || EXPANDED.has(node.id);

    const wrap = el("div", "nav-node");
    if (hasChildren && !expanded) wrap.classList.add("collapsed");

    // ----- el row: <a> navegable, o <div role=button> para grupos -----
    let row;
    if (navigable) {
      row = el("a", "nav-row " + (hasChildren ? "nav-branch" : "nav-leaf"));
      row.href = "#/" + node.id;
    } else {
      row = el("div", "nav-row nav-branch nav-group");
      row.setAttribute("role", "button");
      row.setAttribute("tabindex", "0");
    }
    if (node.id === activeId) row.classList.add("active");
    row.dataset.id = node.id;

    // ----- marcador (emoji/ícono/bullet) + chevron apilados -----
    const marker = el("span", "nav-marker" + (hasChildren ? " has-chev" : ""));
    const icon = el("span", "marker-icon", markerInner(node));
    icon.setAttribute("aria-hidden", "true");
    marker.appendChild(icon);
    let chev = null;
    if (hasChildren) {
      chev = el("span", "marker-chev");
      marker.appendChild(chev);
    }
    row.appendChild(marker);
    row.appendChild(el("span", "label", esc(node.navLabel || node.title)));

    // ----- hijos (recursivo) -----
    let kids = null;
    if (hasChildren) {
      kids = el("div", "nav-children");
      node.children.forEach((c) => kids.appendChild(navNode(c, activeId)));
    }

    // ----- comportamiento expandir/colapsar (bidireccional, vía el Set) -----
    if (hasChildren) {
      // el control del toggle es el chevron (navegable) o el row entero (grupo)
      const control = navigable ? chev : row;
      control.setAttribute("aria-label", "Expandir o colapsar " + (node.navLabel || node.title));
      control.setAttribute("aria-expanded", String(expanded));
      if (navigable) {
        chev.setAttribute("role", "button");
        chev.setAttribute("tabindex", "0");
      } else {
        chev.setAttribute("aria-hidden", "true"); // decorativo: el row es el botón
      }

      const setOpen = (open) => {
        wrap.classList.toggle("collapsed", !open);
        control.setAttribute("aria-expanded", String(open));
        if (open) EXPANDED.add(node.id); else EXPANDED.delete(node.id);
      };
      const onToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setOpen(wrap.classList.contains("collapsed")); // colapsado → abre · abierto → cierra
      };

      const target = navigable ? chev : row;
      target.addEventListener("click", onToggle);
      target.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") onToggle(e);
      });
    }

    wrap.appendChild(row);
    if (kids) wrap.appendChild(kids);
    return wrap;
  }

  /* ---- Breadcrumb ---- */
  function buildCrumbs(id) {
    const c = $("#crumbs");
    c.innerHTML = "";
    const chain = ancestors(id);

    // siempre empezar en el inicio
    if (chain[0] !== HOME) chain.unshift(HOME);

    chain.forEach((cid, i) => {
      const node = BY_ID[cid];
      if (!node) return;
      const last = i === chain.length - 1;
      const label = (node.emoji ? node.emoji + " " : "") + (node.navLabel || node.title);
      if (last) {
        c.appendChild(el("span", "current", esc(label)));
      } else {
        const a = el("a", null, esc(label));
        a.href = "#/" + node.id;
        c.appendChild(a);
        c.appendChild(el("span", "sep", "›"));
      }
    });
  }

  /* ---- Prev / Next ---- */
  function buildPageNav(id) {
    const idx = FLAT.findIndex((n) => n.id === id);
    if (idx < 0) return "";
    const prev = FLAT[idx - 1];
    const next = FLAT[idx + 1];
    const block = (node, dir, cls) => {
      if (!node) return '<a class="' + cls + ' empty" aria-hidden="true"></a>';
      return (
        '<a class="' + cls + '" href="#/' + node.id + '">' +
        '<span class="dir">' + (dir === "prev" ? "‹ Anterior" : "Siguiente ›") + "</span>" +
        '<span class="ttl">' + (node.emoji || "") + " " + esc(node.navLabel || node.title) + "</span>" +
        "</a>"
      );
    };
    return (
      '<nav class="page-nav">' +
      block(prev, "prev", "prev") +
      block(next, "next", "next") +
      "</nav>"
    );
  }

  /* ---- Acento por sección ---- */
  function applyAccent(section) {
    const a = ACCENTS[section] || ACCENTS.home;
    const r = document.documentElement.style;
    r.setProperty("--accent", a.a);
    r.setProperty("--accent-deep", a.d);
    r.setProperty("--accent-tint", a.t);
    r.setProperty("--accent-ink", a.i);
  }

  /* ---- Markdown ---- */
  function renderMarkdown(src) {
    marked.setOptions({ gfm: true, breaks: false, headerIds: true, mangle: false });
    let html = marked.parse(src);
    return html;
  }
  function postProcess(container) {
    // enlaces externos → nueva pestaña
    container.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (/^https?:\/\//i.test(href)) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    });
    // bloques mermaid: <pre><code class="language-mermaid">
    container.querySelectorAll("pre code.language-mermaid").forEach((code) => {
      const div = el("div", "mermaid", code.textContent);
      code.closest("pre").replaceWith(div);
    });
    if (window.mermaid) {
      try {
        const nodes = container.querySelectorAll(".mermaid");
        if (nodes.length) window.mermaid.run({ nodes });
      } catch (e) { /* noop */ }
    }
  }

  /* ---- Render de página ---- */
  let currentReq = 0;
  async function render(id) {
    const node = BY_ID[id];
    const reqId = ++currentReq;

    // sección/acento
    const section = node ? node.section : "home";
    applyAccent(section);
    document.body.dataset.section = section;

    // nav: se reconstruye con el id activo (marca activo + expande su rama)
    buildSidebar(id);

    buildCrumbs(id);

    const main = $("#content");
    main.innerHTML = '<div class="page"><p style="color:var(--ink-faint)">Cargando…</p></div>';
    window.scrollTo({ top: 0 });

    // página inexistente en el manifest
    if (!node) {
      main.innerHTML = placeholder("Página no encontrada", "🤔",
        "La ruta <code>#/" + esc(id) + "</code> no existe en el mapa del sitio.");
      return;
    }

    // intentar cargar el markdown
    let md = null;
    try {
      const res = await fetch("content/" + id + ".md", { cache: "no-cache" });
      if (res.ok) md = await res.text();
    } catch (e) { /* sin contenido aún */ }

    if (reqId !== currentReq) return; // navegación más reciente ganó

    if (md == null || md.trim() === "") {
      main.innerHTML = placeholder(
        (node.emoji || "") + " " + node.title, "🚧",
        "Esta página todavía no tiene contenido. Vive en <code>content/" + esc(id) + ".md</code>.<br>Se rellenará en una capa posterior."
      ) + '<div class="page" style="padding-top:0">' + buildPageNav(id) + "</div>";
      return;
    }

    const page = el("div", "page");
    const tag = el("div", "section-tag", sectionTag(section));
    const body = el("div", "md");
    body.innerHTML = renderMarkdown(md);
    page.appendChild(tag);
    page.appendChild(body);
    page.insertAdjacentHTML("beforeend", buildPageNav(id));
    main.innerHTML = "";
    main.appendChild(page);
    postProcess(body);
  }

  function sectionTag(section) {
    const map = {
      home: "🌮 El sistema",
      cabeza: "🧠 Práctica compartida · Cabeza",
      tripa: "🔥 Práctica compartida · Tripa",
      corazon: "❤️ Capa disciplinar · Corazón",
      plantillas: "🧰 Repositorio · la despensa",
    };
    return map[section] || "Documento";
  }

  function placeholder(title, big, body) {
    return (
      '<div class="page"><div class="wip">' +
      '<div class="big">' + big + "</div>" +
      "<h2>" + title + "</h2>" +
      "<p>" + body + "</p>" +
      "</div></div>"
    );
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
    );
  }

  /* ---- Búsqueda rápida (filtra el sidebar) ---- */
  function wireSearch() {
    const input = $("#search");
    if (!input) return;
    const nav = $("#nav");
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        // limpiar: restaura el estado de colapso por defecto de la ruta actual
        nav.classList.remove("searching");
        buildSidebar(routeOf());
        return;
      }
      // mientras se busca, se expande todo y se filtran solo las hojas
      nav.classList.add("searching");
      nav.querySelectorAll(".nav-leaf").forEach((a) => {
        const hit = a.textContent.toLowerCase().includes(q);
        a.style.display = hit ? "" : "none";
      });
    });
  }

  /* ---- Navegación móvil + botones back/forward ---- */
  function wireChrome() {
    const app = $("#app");
    $("#menuToggle").addEventListener("click", () => app.classList.toggle("nav-open"));
    $("#scrim").addEventListener("click", () => app.classList.remove("nav-open"));
    // cerrar drawer al navegar (deleg.) — solo enlaces reales, no el chevron
    document.addEventListener("click", (e) => {
      if (e.target.closest("a[href^='#/']")) app.classList.remove("nav-open");
    });
    $("#back").addEventListener("click", () => history.back());
    $("#fwd").addEventListener("click", () => history.forward());
  }

  /* ---- Arranque ---- */
  function start() {
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          primaryColor: "#F1B211", primaryBorderColor: "#9A6E12",
          primaryTextColor: "#241A05", lineColor: "#6B6B6B",
          fontFamily: "Hanken Grotesk, sans-serif",
        },
        securityLevel: "loose",
      });
    }
    buildSidebar(routeOf());
    wireSearch();
    wireChrome();
    window.addEventListener("hashchange", () => render(routeOf()));
    render(routeOf());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
