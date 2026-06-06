# 📝 Guía de transcripción de contenido — Cabeza, Tripa y Corazón

Cómo convertir un **documento fuente** en una **página del wiki** (`content/*.md`),
con el mismo criterio con que se transcribieron Inicio, Corazón y Cabeza. Pensada
para ejecutarse con Claude Code: lee esta guía + el documento fuente, y escribe el
`.md` destino.

---

## 0 · Reglas de oro (no romper)

1. **Fidelidad ante todo.** Se transcribe el contenido fuente tal cual: mismo texto, mismas tablas, mismos diagramas, mismo orden. No se resume, no se reinterpreta, no se "mejora" la redacción. Esto es transcripción, no autoría.
2. **Los ejemplos se conservan literales** (son de tipo tianguis / administrador / marchante). No cambiarlos.
3. **No inventar contenido.** Si una sección del fuente está marcada como pendiente o esbozo, se transcribe ese estado (con su marca 🌱 o 🚧), no se rellena.
4. **Una página = un archivo Markdown** en `content/`, cuya ruta coincide con el `id` del nodo en `assets/manifest.js`.

---

## 1 · Anatomía de una página

Toda página sigue este patrón (ver `content/cabeza.md` o `content/corazon.md` como referencia viva):

```markdown
# <emoji> <Título de la página>

*<Línea de contexto en cursiva, con enlace al sistema o al marco padre>*

| | |
| --- | --- |
| **Versión** | … |
| **Estado** | … |
| **Audiencia** | … |

---

## <emoji> <Sección 1>
… contenido …
```

- **No** agregar un "section-tag" ni breadcrumb en el Markdown: la app los pone sola según la sección del manifest.
- Cerrar el documento con la línea de cierre del fuente si la tiene (p. ej. `*— Fin del … —*`).

---

## 2 · Enlaces cruzados (lo más importante)

Las referencias internas del fuente se convierten en enlaces de navegación del wiki, con ruta `#/<id>`. Mapa de conversión:

| En el fuente aparece… | Se enlaza a |
| --- | --- |
| El sistema / "Producto de Cabeza, Tripa y Corazón" | `#/inicio` |
| Cabeza / Motor de Evidencia | `#/cabeza` |
| Tripa / Marco de Desarrollo (de Producto) | `#/tripa` |
| Corazón / Playbooks de disciplina | `#/corazon` |
| Playbook de Diseño | `#/corazon/diseno` |
| Playbook de Ingeniería | `#/corazon/ingenieria` |
| Playbook de Producto / Growth y Data / Soporte | `#/corazon/producto` · `#/corazon/growth-data` · `#/corazon/soporte` |
| Repositorio / barra de plantillas | `#/plantillas` |
| Una plantilla concreta (Plan de Investigación, Research Brief, etc.) | `#/plantillas/<slug>` |
| Una guía de proceso | `#/guias/<slug>` |
| Un recurso de craft | `#/craft/<slug>` |

Los `<slug>` exactos están en `assets/manifest.js` — **úsalo como fuente de verdad de los ids.** Nunca enlaces a un id que no exista en el manifest.

**Regla de las referencias dentro de la misma página** (del tipo "ver §4" o "§11.2"):
se dejan como **texto plano**, NO como enlaces. No se fabrican anclas internas (se romperían). Solo se enlazan referencias a *otras* páginas.

**Recursos sin página aún** (marcados ⏳ en el manifest, como PRD, RFC, ADR, Voiceover, Post Mortem): se mencionan como **texto plano**, sin enlace.

---

## 3 · Diagramas Mermaid

- Se conservan los bloques ```` ```mermaid ````.
- **Quitar** la directiva `%%{init: {...}}%%` si el fuente la trae: el tema global ya está configurado en `assets/app.js`.
- **Conservar** las líneas `classDef … fill:… stroke:… color:…` y las asignaciones `class …`: eso da el color por sección (azul Cabeza, dorado Tripa, rosa Corazón).
- Si un diagrama del fuente es muy ancho/complejo, se puede simplificar la sintaxis manteniendo el sentido — pero solo si hace falta para que renderice.

---

## 4 · Tablas, código y listas

- **Tablas:** Markdown GFM (`| col | col |`). Si el fuente trae una tabla "llave-valor" sin encabezado claro, ponerle encabezado `| Campo | Detalle |` y dejar la primera columna en **negritas** (ver las tablas de plantillas en `content/cabeza.md` §12).
- **Bloques de código / diagramas ASCII:** fence triple sin lenguaje (o con el lenguaje si es código real).
- **Checkboxes:** `- [ ]` se conservan (GFM las renderiza).

---

## 5 · Emojis — con gusto, no de adorno

- **Un** emoji relevante al inicio de cada sección H2 numerada (🧠 fundamentos, 🔬 análisis, etc.). Mira cómo quedó `content/cabeza.md`.
- Emojis puntuales en callouts importantes (🌟 regla de oro, 🚩 red flag, ⚠️ advertencia, 🌱 por documentar).
- **No** poner emoji en cada bullet ni en cada subtítulo. Si en duda, menos es más.

---

## 6 · Mapa de páginas pendientes (en orden del documento general)

| Orden | Página (id) | Archivo destino | Documento fuente |
| --- | --- | --- | --- |
| 1 | `tripa` | `content/tripa.md` | `Tripa___Marco_de_Desarrollo_de_Producto.md` |
| 2 | `corazon/diseno` | `content/corazon/diseno.md` | `Corazo_n___Playbook_de_Disen_o_de_Producto.md` |
| 3 | `corazon/ingenieria` | `content/corazon/ingenieria.md` | `Corazo_n___Playbook_de_Ingenieri_a.md` |
| 4 | Plantillas, guías y craft (varias) | `content/plantillas/*.md`, `content/guias/*.md`, `content/craft/*.md` | `Plantillas_Guias_y_Craft.md` (una sección del fuente → un archivo) |

**Ya completas (no tocar salvo edición):** `inicio`, `cabeza`, `corazon`, `corazon/producto`, `corazon/growth-data`, `corazon/soporte`, `plantillas` (índice), `plantillas/plan-de-investigacion`.

Para el documento de Plantillas: cada plantilla/guía/recurso es una sección dentro del fuente único. Se ubica la sección por su título y se transcribe al archivo cuyo `id` (en el manifest) coincide con ese título. Empezar replicando el patrón de `content/plantillas/plan-de-investigacion.md`, que ya está hecho como muestra.

> **Nota sobre el Playbook de Diseño:** transcríbelo tal cual está en el fuente, incluida su sección "Agentic Design System". (Hay un refactor futuro previsto para esa sección, pero NO es parte de esta transcripción — se transcribe el estado actual.)

---

## 7 · Después de escribir cada página: validar

1. **Enlaces:** que todo `#/<id>` exista en `assets/manifest.js`. Comando útil desde la raíz del repo:
   ```bash
   node -e 'global.window={};require("./assets/manifest.js");const I=new Set();(function w(n){n.forEach(x=>{I.add(x.id);if(x.children)w(x.children)})})(window.WIKI.tree);const fs=require("fs"),p=require("path");function f(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const q=p.join(d,e.name);return e.isDirectory()?f(q):(q.endsWith(".md")?[q]:[])})}let bad=[];for(const x of f("content")){const t=fs.readFileSync(x,"utf8"),re=/\]\(#\/([^)\s]+)\)/g;let m;while(m=re.exec(t))if(!I.has(m[1]))bad.push(x+" → #/"+m[1])}console.log(bad.length?bad.join("\n"):"OK enlaces")'
   ```
2. **Preview:** levantar el server local y abrir la página recién escrita para ver que renderice (tablas, diagramas, enlaces).
3. **Commit + push** cuando se vea bien.

---

## 8 · Dónde viven los documentos fuente

Los fuentes son el "manuscrito" — **no se publican** en el repo. Mantenlos en una carpeta ignorada por git (p. ej. `_fuentes/`) y añade `_fuentes/` al `.gitignore`. Claude Code los lee de ahí para transcribir, pero nunca se commitean.
