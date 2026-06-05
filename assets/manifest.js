/* ===========================================================================
   manifest.js — el mapa del sitio.
   Cada nodo: { id, title, emoji, section, children? }
   - id        → ruta hash (#/<id>) y archivo en content/<id>.md
   - section   → controla el color de acento (cabeza|tripa|corazon|plantillas|home)
   El router lee este árbol para construir nav, breadcrumb, prev/next y enlaces.
   Para AÑADIR una página nueva: agrega el nodo aquí y crea su .md en content/.
   =========================================================================== */
window.WIKI = {
  title: "Producto de Cabeza, Tripa y Corazón",
  home: "inicio",
  tree: [
    {
      id: "inicio",
      title: "El sistema",
      emoji: "🌮",
      section: "home",
      navLabel: "El sistema",
    },
    {
      id: "cabeza",
      title: "Cabeza · Motor de Evidencia",
      emoji: "🧠",
      section: "cabeza",
      navLabel: "Cabeza",
    },
    {
      id: "tripa",
      title: "Tripa · Marco de Desarrollo",
      emoji: "🔥",
      section: "tripa",
      navLabel: "Tripa",
    },
    {
      id: "corazon",
      title: "Corazón · Playbooks de Disciplina",
      emoji: "❤️",
      section: "corazon",
      navLabel: "Corazón",
      children: [
        { id: "corazon/diseno",       title: "Playbook de Diseño de Producto", emoji: "🎨", section: "corazon" },
        { id: "corazon/ingenieria",   title: "Playbook de Ingeniería",          emoji: "⚙️", section: "corazon" },
        { id: "corazon/producto",     title: "Playbook de Producto",            emoji: "🧭", section: "corazon" },
        { id: "corazon/growth-data",  title: "Playbook de Growth y Data",       emoji: "📈", section: "corazon" },
        { id: "corazon/soporte",      title: "Playbook de Soporte / CS",        emoji: "🎧", section: "corazon" },
      ],
    },
    {
      id: "plantillas",
      title: "Plantillas, Guías y Craft",
      emoji: "🧰",
      section: "plantillas",
      navLabel: "Plantillas, Guías y Craft",
      children: [
        {
          id: "plantillas/grupo-plantillas",
          title: "Plantillas",
          emoji: "📄",
          section: "plantillas",
          navLabel: "— Plantillas",
          group: true,
          children: [
            { id: "plantillas/plan-de-investigacion",    title: "Plan de Investigación",                emoji: "📋", section: "plantillas" },
            { id: "plantillas/research-brief",           title: "Research Brief",                       emoji: "📝", section: "plantillas" },
            { id: "plantillas/notas-de-sesion",          title: "Notas de Sesión",                      emoji: "🗒️", section: "plantillas" },
            { id: "plantillas/estrategia-de-analisis",   title: "Estrategia de Análisis",               emoji: "🔬", section: "plantillas" },
            { id: "plantillas/reporte-de-hallazgos",     title: "Reporte de Hallazgos",                 emoji: "📊", section: "plantillas" },
            { id: "plantillas/debrief-sintesis",         title: "Debrief y Síntesis Rápida",            emoji: "⚡", section: "plantillas" },
            { id: "plantillas/probing-questions",        title: "Probing Questions",                    emoji: "❓", section: "plantillas" },
            { id: "plantillas/guia-de-discusion",        title: "Guía de Discusión para Entrevista",    emoji: "🗣️", section: "plantillas" },
            { id: "plantillas/script-usabilidad",        title: "Script para Prueba de Usabilidad",     emoji: "🖱️", section: "plantillas" },
            { id: "plantillas/preguntas-dashboard",      title: "Preguntas para Investigación de Dashboard", emoji: "📉", section: "plantillas" },
            { id: "plantillas/product-design-brief",     title: "Product Design Brief",                 emoji: "🎯", section: "plantillas" },
            { id: "plantillas/product-design-spec",      title: "Product Design Spec",                  emoji: "📐", section: "plantillas" },
            { id: "plantillas/design-review-deck",       title: "Design Review Deck",                   emoji: "🖼️", section: "plantillas" },
            { id: "plantillas/spec-ingenieria",          title: "Spec de Ingeniería",                   emoji: "🧱", section: "plantillas" },
            { id: "plantillas/pull-request",             title: "Pull Request",                         emoji: "🔀", section: "plantillas" },
            { id: "plantillas/diario-de-trabajo",        title: "Diario de Trabajo",                    emoji: "📔", section: "plantillas" },
            { id: "plantillas/opportunity-solution-tree",title: "Opportunity Solution Tree",            emoji: "🌳", section: "plantillas" },
            { id: "plantillas/release-checklist",        title: "Release Checklist",                    emoji: "✅", section: "plantillas" },
            { id: "plantillas/impact-report",            title: "Impact Report",                        emoji: "📈", section: "plantillas" },
          ],
        },
        {
          id: "guias/grupo-guias",
          title: "Guías de proceso",
          emoji: "🧭",
          section: "plantillas",
          navLabel: "— Guías de proceso",
          group: true,
          children: [
            { id: "guias/design-review",        title: "Cómo llevar un Design Review",          emoji: "🔍", section: "plantillas" },
            { id: "guias/design-debt-review",   title: "Cómo llevar un Design Debt Review",     emoji: "🧹", section: "plantillas" },
            { id: "guias/design-critique",      title: "Cómo llevar un Design Critique informal", emoji: "💬", section: "plantillas" },
            { id: "guias/ost-paso-a-paso",      title: "Construir el OST paso a paso",          emoji: "🌳", section: "plantillas" },
            { id: "guias/rice",                 title: "Priorizar con RICE",                    emoji: "🎚️", section: "plantillas" },
            { id: "guias/cadena-release",       title: "Cadena de aprobación del Release",      emoji: "🚦", section: "plantillas" },
            { id: "guias/git-pr-changelog",     title: "Git · Pull Requests · CHANGELOG · SemVer", emoji: "🔧", section: "plantillas" },
            { id: "guias/sesion-research",      title: "Pre-flight, conducción y moderación",   emoji: "🎙️", section: "plantillas" },
            { id: "guias/anti-bias",            title: "Anti-bias checklist",                   emoji: "🛡️", section: "plantillas" },
            { id: "guias/analisis-ciegas",      title: "Análisis a ciegas (procedimiento)",     emoji: "🙈", section: "plantillas" },
            { id: "guias/matriz-metodo",        title: "Matriz para elegir método de research", emoji: "🧮", section: "plantillas" },
          ],
        },
        {
          id: "craft/grupo-craft",
          title: "Craft / especialidad táctica",
          emoji: "✨",
          section: "plantillas",
          navLabel: "— Craft / especialidad",
          group: true,
          children: [
            { id: "craft/catalogo-metodos",     title: "Catálogo de métodos de research",  emoji: "📚", section: "plantillas" },
            { id: "craft/tecnicas-analisis",    title: "Técnicas de análisis",             emoji: "🧪", section: "plantillas" },
            { id: "craft/ui-motion-microcopy",  title: "Craft de UI · motion · microcopy", emoji: "🎬", section: "plantillas" },
            { id: "craft/biblioteca-recursos",  title: "Biblioteca de recursos",           emoji: "🗃️", section: "plantillas" },
          ],
        },
      ],
    },
  ],
};
