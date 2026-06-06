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
        { id: "corazon/diseno",       title: "Playbook: Diseño de Producto",         icon: "ph-book-open", section: "corazon" },
        { id: "corazon/ingenieria",   title: "Playbook: Ingeniería",                 icon: "ph-book-open", section: "corazon" },
        { id: "corazon/producto",     title: "Playbook: Producto",                   icon: "ph-book-open", section: "corazon" },
        { id: "corazon/growth-data",  title: "Playbook: Growth y Data",              icon: "ph-book-open", section: "corazon" },
        { id: "corazon/soporte",      title: "Playbook: Customer Success",           icon: "ph-book-open", section: "corazon" },
      ],
    },
    {
      id: "plantillas",
      title: "Plantillas",
      icon: "ph-files",
      section: "plantillas",
      navLabel: "Plantillas",
      topDivider: true,
      overline: "Recursos",
      children: [
        { id: "plantillas/plan-de-investigacion",    title: "Plan de Investigación",                section: "plantillas" },
        { id: "plantillas/research-brief",           title: "Research Brief",                       section: "plantillas" },
        { id: "plantillas/notas-de-sesion",          title: "Notas de Sesión",                      section: "plantillas" },
        { id: "plantillas/estrategia-de-analisis",   title: "Estrategia de Análisis",               section: "plantillas" },
        { id: "plantillas/reporte-de-hallazgos",     title: "Reporte de Hallazgos",                 section: "plantillas" },
        { id: "plantillas/debrief-sintesis",         title: "Debrief y Síntesis Rápida",            section: "plantillas" },
        { id: "plantillas/probing-questions",        title: "Probing Questions",                    section: "plantillas" },
        { id: "plantillas/guia-de-discusion",        title: "Guía de Discusión para Entrevista",    section: "plantillas" },
        { id: "plantillas/script-usabilidad",        title: "Script para Prueba de Usabilidad",     section: "plantillas" },
        { id: "plantillas/preguntas-dashboard",      title: "Preguntas para Investigación de Dashboard", section: "plantillas" },
        { id: "plantillas/product-design-brief",     title: "Product Design Brief",                 section: "plantillas" },
        { id: "plantillas/product-design-spec",      title: "Product Design Spec",                  section: "plantillas" },
        { id: "plantillas/design-review-deck",       title: "Design Review Deck",                   section: "plantillas" },
        { id: "plantillas/spec-ingenieria",          title: "Spec de Ingeniería",                   section: "plantillas" },
        { id: "plantillas/pull-request",             title: "Pull Request",                         section: "plantillas" },
        { id: "plantillas/diario-de-trabajo",        title: "Diario de Trabajo",                    section: "plantillas" },
        { id: "plantillas/opportunity-solution-tree",title: "Opportunity Solution Tree",            section: "plantillas" },
        { id: "plantillas/release-checklist",        title: "Release Checklist",                    section: "plantillas" },
        { id: "plantillas/impact-report",            title: "Impact Report",                        section: "plantillas" },
      ],
    },
    {
      id: "guias",
      title: "Guías de proceso",
      icon: "ph-compass",
      section: "plantillas",
      navLabel: "Guías de proceso",
      children: [
        { id: "guias/design-review",        title: "Cómo llevar un Design Review",          section: "plantillas" },
        { id: "guias/design-debt-review",   title: "Cómo llevar un Design Debt Review",     section: "plantillas" },
        { id: "guias/design-critique",      title: "Cómo llevar un Design Critique informal", section: "plantillas" },
        { id: "guias/ost-paso-a-paso",      title: "Construir el OST paso a paso",          section: "plantillas" },
        { id: "guias/rice",                 title: "Priorizar con RICE",                    section: "plantillas" },
        { id: "guias/cadena-release",       title: "Cadena de aprobación del Release",      section: "plantillas" },
        { id: "guias/git-pr-changelog",     title: "Git · Pull Requests · CHANGELOG · SemVer", section: "plantillas" },
        { id: "guias/sesion-research",      title: "Pre-flight, conducción y moderación",   section: "plantillas" },
        { id: "guias/anti-bias",            title: "Anti-bias checklist",                   section: "plantillas" },
        { id: "guias/analisis-ciegas",      title: "Análisis a ciegas (procedimiento)",     section: "plantillas" },
        { id: "guias/matriz-metodo",        title: "Matriz para elegir método de research", section: "plantillas" },
      ],
    },
    {
      id: "craft",
      title: "Craft / especialidad",
      icon: "ph-sparkle",
      section: "plantillas",
      navLabel: "Craft / especialidad",
      children: [
        { id: "craft/catalogo-metodos",     title: "Catálogo de métodos de research",  section: "plantillas" },
        { id: "craft/tecnicas-analisis",    title: "Técnicas de análisis",             section: "plantillas" },
        { id: "craft/ui-motion-microcopy",  title: "Craft de UI · motion · microcopy", section: "plantillas" },
        { id: "craft/biblioteca-recursos",  title: "Biblioteca de recursos",           section: "plantillas" },
      ],
    },
  ],
};
