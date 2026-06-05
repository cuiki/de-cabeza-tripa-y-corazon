# 🌮 Wiki · Producto de Cabeza, Tripa y Corazón

Sitio estático multi-archivo para documentar el sistema de producto. Pensado para
publicarse en **GitHub Pages**. El contenido vive en Markdown; un router ligero por
hash lo renderiza en el navegador (sin paso de build, sin framework).

---

## ⚠️ Importante: hay que *servir* el sitio (no abrir el archivo directo)

El sitio carga las páginas con `fetch()` de archivos `.md`. Por eso **no funciona**
si abres `index.html` con doble clic (`file://`): el navegador bloquea esos fetch.
Tiene que servirse por HTTP. Dos formas:

### Opción A — Ver en local
Desde la carpeta del sitio:

```bash
# Python (ya viene en Mac/Linux)
python3 -m http.server 8000
# luego abre http://localhost:8000
```

```bash
# o con Node, si lo prefieres
npx serve .
```

### Opción B — Publicar en GitHub Pages
1. Crea un repo y sube **todo** el contenido de esta carpeta a la raíz.
2. En GitHub: **Settings → Pages → Build and deployment**.
3. Source: *Deploy from a branch*. Branch: `main` · carpeta `/ (root)`. Guarda.
4. En 1–2 min queda en `https://<usuario>.github.io/<repo>/`.

> El sitio usa rutas relativas y routing por hash (`#/...`), así que funciona en un
> subdirectorio de Pages sin configuración extra. No necesita `.nojekyll`, pero
> puedes añadir un archivo vacío con ese nombre si Jekyll te diera lata.

---

## 🗂️ Estructura

```
.
├── index.html              # shell: topbar, sidebar, breadcrumb, área de contenido
├── assets/
│   ├── styles.css          # sistema de diseño (el "vibe")
│   ├── manifest.js         # EL MAPA DEL SITIO (todas las páginas)
│   └── app.js              # router, breadcrumb, back/forward, markdown, mermaid
└── content/                # una página = un archivo .md
    ├── inicio.md
    ├── cabeza.md
    ├── tripa.md
    ├── corazon.md
    ├── corazon/…           # playbooks
    ├── plantillas.md
    ├── plantillas/…        # plantillas individuales
    ├── guias/…             # guías de proceso
    └── craft/…             # craft / especialidad
```

---

## ✍️ Cómo añadir o editar una página

1. **Edita contenido:** abre el `.md` correspondiente en `content/` y escribe Markdown normal. Soporta tablas (GFM), checkboxes y bloques ```mermaid``` para diagramas.
2. **Enlaces internos:** apunta a otra página con su ruta hash, p. ej. `[la Tripa](#/tripa)` o `[Plan de Investigación](#/plantillas/plan-de-investigacion)`.
3. **Página nueva:** agrega un nodo en `assets/manifest.js` (con `id`, `title`, `emoji`, `section`) y crea su archivo en `content/<id>.md`. El menú, el breadcrumb y la navegación anterior/siguiente se actualizan solos.

> Si una página existe en el manifest pero todavía no tiene `.md`, el sitio muestra
> un placeholder "🚧 en construcción" — por eso la navegación nunca se rompe mientras
> se rellena el contenido por capas.

### Secciones y color
Cada página declara su `section` en el manifest, y eso define el color de acento:
`home` (dorado) · `cabeza` (azul) · `tripa` (dorado) · `corazon` (rosa) · `plantillas` (verde oliva).

---

## 📦 Estado actual (esqueleto)

- ✅ Navegación, breadcrumb, back/forward, buscador y diseño completos.
- ✅ Contenido real: portada, índice del Corazón, playbooks de Producto / Growth-Data / Soporte, hub de Plantillas, y el Plan de Investigación como plantilla de muestra.
- 🚧 Stubs con índice real (transcripción pendiente): Cabeza, Tripa, Playbook de Diseño, Playbook de Ingeniería.
- 🚧 Resto de plantillas, guías y craft: placeholder automático hasta su capa de relleno.
