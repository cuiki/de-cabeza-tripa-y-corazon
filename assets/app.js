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

  /* ---- Sidebar ---- */
  function buildSidebar() {
    const nav = $("#nav");
    nav.innerHTML = "";

    W.tree.forEach((node) => {
      nav.appendChild(navLink(node));
      if (node.children) {
        const wrap = el("div", "nav-children");
        node.children.forEach((child) => {
          if (child.group) {
            wrap.appendChild(el("div", "nav-section-label", esc(child.navLabel || child.title)));
            const sub = el("div", "nav-children");
            (child.children || []).forEach((g) => sub.appendChild(navLink(g)));
            wrap.appendChild(sub);
          } else {
            wrap.appendChild(navLink(child));
          }
        });
        nav.appendChild(wrap);
      }
    });
  }
  function navLink(node) {
    const a = el("a", "nav-link");
    a.href = "#/" + node.id;
    a.dataset.id = node.id;
    a.innerHTML =
      '<span class="emoji">' + (node.emoji || "•") + "</span>" +
      "<span>" + esc(node.navLabel || node.title) + "</span>";
    return a;
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

    // nav activo
    document.querySelectorAll(".nav-link").forEach((a) =>
      a.classList.toggle("active", a.dataset.id === id)
    );

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
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      document.querySelectorAll(".nav-link").forEach((a) => {
        const hit = !q || a.textContent.toLowerCase().includes(q);
        a.style.display = hit ? "" : "none";
      });
    });
  }

  /* ---- Navegación móvil + botones back/forward ---- */
  function wireChrome() {
    const app = $("#app");
    $("#menuToggle").addEventListener("click", () => app.classList.toggle("nav-open"));
    $("#scrim").addEventListener("click", () => app.classList.remove("nav-open"));
    document.querySelectorAll(".nav-link, #crumbs a, .page-nav a").forEach(() => {});
    // cerrar drawer al navegar (deleg.)
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
    buildSidebar();
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
