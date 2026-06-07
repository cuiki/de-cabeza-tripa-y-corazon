# 🤖 3 · Agentic Design System (Sistema de Diseño)

*Sección de [Playbook: Diseño de Producto](#/corazon/diseno)*

---

Esta sección sintetiza la serie *Towards an Agentic Design System* de Cristian Morales Achiardi en un método aplicable a cualquier equipo. Los conceptos centrales — el protocolo ARC, las 3 capas de retrieval, la distinción linter vs governance, el rol del diseñador como *designer of environments* — son **independientes de la librería de componentes** que uses. El método es el abordaje principal tanto para un diseñador en solitario como para un equipo formado: en ambos casos, lo que buscas es consistencia y trabajo sistematizado.

> **El enfoque es library-agnostic.** A lo largo de esta sección se usa **Mantine** como ejemplo trabajado, porque es una librería madura, con buena suite de componentes y un camino claro hacia lo *AI-ready*. Pero el mismo método aplica si tu equipo construye sobre shadcn/Radix, MUI, Chakra, o una librería propia. Donde el texto diga "Mantine", léelo como "tu librería de componentes" y traduce las particularidades técnicas a tu stack. Lo que no cambia es el método: codificar decisiones como reglas ejecutables, auditarlas y gobernarlas.

## 3.1 · El cambio de rol que este DS exige

Antes de hablar de arquitectura técnica, hay que nombrar el cambio de rol que un Agentic DS impone sobre PD. Es el tema central del Part 7 del Guide y la pieza más fácil de subestimar.

**De diseñador que entrega a diseñador que garantiza.** PD ya no entrega pantallas y espera que se implementen bien. PD **codifica decisiones** que el sistema ejecuta correctamente sin él en la sala. Cuando el sistema produce algo incorrecto, no es "un bug del DS" — es una decisión codificada incorrectamente por PD.

**De diseñar interfaces a diseñar entornos.** *"Mi rol como diseñador no es lo que era hace un año. Ya no soy solo product designer. Estoy diseñando entornos: las condiciones y reglas que habilitan ejecución correcta a una velocidad que físicamente no puedo igualar revisando cada pantalla y cada PR."* (Morales, Part 7)

**De "el sistema falló" a "el sistema escala lo que yo le di."** El sistema no crea correctness. Escala lo que se le programe — **incluyendo los errores**. Si una decisión está mal codificada en el nivel primitivo (el ejemplo de la escala de amarillos del Agentic Design System Guide) todo lo construido encima hereda el error. El sistema funciona; lo que está mal es la decisión que codificaste.

**Tres categorías que el equipo debe codificar explícitamente:** *correct · wrong · exceptional*. Si esas tres no están claras como reglas ejecutables, el sistema confiadamente construye lo equivocado y lo despliega.

**El loop humano correcto:** Sin este loop, el DS es infraestructura cara que ejecuta errores con consistencia:

```
Dev encuentra algo que se ve raro
    ↓
En lugar de patchear (hardcodear un valor, swappear un token), traza el problema en el sistema
    ↓
Corre el auditor → confirma que la implementación respeta las reglas
    ↓
El error apunta al primitive
    ↓
El primitive apunta a PD
    ↓
PD corrige en el origen → push corregido al codebase entero en minutos
```

## 3.2 · Cómo se relaciona con el Marco de Desarrollo

El **arranque** del Sistema de Diseño Agéntico entra al Marco de Desarrollo como **iniciativa formal**, no como trabajo paralelo:

- Tiene su propio Initiative Spec con sub-páginas por fase: D1 (PRD de la brecha diseño↔código), D2 (RFC técnico + Design Spec), D3 (construcción), D4 (release interno con cobertura mínima), D5 (Impact Report midiendo si la brecha cerró).
- Compite por capacidad con otras iniciativas del trimestre. Entra al OST por la puerta normal: Opportunity Mapping, el PM decide.
- Hipótesis causal: *"Creemos que la brecha actual entre diseño y código impide que ingeniería construya features con consistencia sin intervención constante de PD. Si construimos un Agentic Design System, la coherencia del sistema dejará de depender del ancho de banda de PD y la velocidad del equipo crecerá sin comprometer calidad."*

La **evolución posterior** del Sistema de Diseño (componentes nuevos, refactors, retires, iteraciones de gobernanza) vive **fuera del Marco de Desarrollo como infraestructura transversal**: se atiende en los Cooldowns dentro del tiempo que el marco ya asigna a PD para *"actualización de componentes"*. Solo si hay un cambio estructural grande que requiera capacidad de Sprint, vuelve a tratarse como iniciativa formal.

## 3.3 · Por qué Agentic, por qué Mantine

### El problema que resuelve

Un design system tradicional documenta decisiones en archivos que un humano debe leer, interpretar y aplicar correctamente cada vez. Funciona con equipos de diseño grandes dedicados a evangelizarlo, revisarlo y reforzar adopción. **Muchos equipos no tienen ese equipo de diseño dedicado y no lo van a tener en el horizonte cercano.**

Un Agentic Design System codifica las decisiones de diseño como **reglas ejecutables que un agente de IA consume, audita y hace cumplir automáticamente**. La diferencia clave con un DS tradicional son tres cosas:

1. **Los componentes traen metadata estructurada que la IA entiende**, no solo narrativa que un humano interpreta.
2. **Los tokens viven como contratos** que un auditor puede validar — y el auditor valida intención semántica, no solo sintaxis.
3. **Las relaciones entre componentes están en un índice** que la IA carga en una sola operación, en lugar de descubrir por sí misma.

Resultado: cuando un dev (o PD) construye algo nuevo con asistencia de IA, el sistema le guía al componente correcto, le advierte cuando viola un patrón, y deja trazabilidad de las decisiones. **PD mantiene coherencia con todo el equipo de ingeniería sin ser cuello de botella.**

### El costo de no hacerlo

La decisión es construir el sistema *AI-Ready* sobre [**Mantine.dev**](http://Mantine.dev), no crear un DS propio desde cero. Cuatro razones:

1. **Es la librería que ingeniería ya usa.** Capitaliza el esfuerzo invertido en reemplazar clases CSS dispersas por componentes Mantine.
2. **Suite high-level amplia sin requerir un compilador propio.** Forms, dates, notifications, spotlight, modals manager, charts — todo viene out-of-the-box. La alternativa principal en el espacio (Tamagui) es excelente para multiplataforma React Native + web y tiene su propia API de tokens potente, pero **requiere su compilador optimizador como parte del build** y opera con una API más opinionada (`$1`, `$gtSm`, `styled()`). Para un equipo pequeño, sólo web, donde la fricción de build es un costo real, Mantine reduce el overhead operativo.
3. **Múltiples ejes documentados de extensión.** Cinco vectores estables y públicos (ver más abajo, en Las 3 capas del sistema) que escalan desde uso directo hasta design systems propios sin requerir forks de código.
4. **Su sistema de tokens y theming es técnicamente apto para un pipeline DTCG + Style Dictionary**, aunque no es soporte nativo (ver más abajo). Es base viable para el enfoque agentic, con fricciones técnicas que conviene documentar.
5. **Mantenimiento activo, AI-ready oficial, comunidad activa.** Mantine v8.3+ publica oficialmente: manifest MCP ([`mantine.dev/mcp`](http://mantine.dev/mcp) con ~130 componentes), un MCP server oficial (`@mantine/mcp-server`), skills oficiales para Claude Code (`mantinedev/skills`), y `llms.txt` auto-regenerado en cada release. Esto **reduce significativamente el trabajo "Phase 0/1" que el playbook de Morales asume tener que construir desde cero**.
6. **Construir un DS propio desde cero sería suicidio operativo**: meses de desarrollo frontend, equipo no preparado para esa disrupción sin descuidar la migración a Next.js, bajo ROI a corto plazo. El problema actual del usuario no es estética única, es usabilidad y flujos operativos.

### Los 5 ejes de extensión de Mantine v8

Cada componente Mantine expone cinco vectores de extensión coordinados como API pública estable:

1. **Métodos estáticos `.extend()` y `.withProps()`** — cada componente tiene `Button.extend({ defaultProps, classNames, styles, vars, attributes })` para crear versiones preconfiguradas integradas al theme.
2. **Styles API con sub-selectores publicados** — `Button.classes.root`, `Button.classes.label`, etc. son contrato versionado.
3. **CSS variables propias por componente** — `--button-height-md`, `--button-padding`, etc. específicamente expuestas para override.
4. **Factory functions tipadas** — `factory<>()`, `polymorphicFactory<>()`, `genericFactory<>()` como APIs públicas con tipos `Factory<{ props, ref, stylesNames, vars, variant, staticComponents }>` formalmente declarados.
5. **HeadlessMantineProvider y prop `unstyled`** — permiten desactivar los estilos completamente cuando se necesita comportamiento sin opinión visual.

Esto significa que el contrato de extensión es **mecanizable**. Para crear wrappers tipados, los patrones documentados son: `polymorphic<'button', CustomProps>(Component)` para wrappers que conservan polimorfismo, o composición `ButtonProps & ElementProps<'a', keyof ButtonProps>` para wrappers no-polimórficos. Para defaults globales: `theme.components.Button = Button.extend({...})`.

### Fricciones técnicas del pipeline DTCG + Style Dictionary

**Honestidad sobre lo que la afirmación "compatible con W3C tokens + Style Dictionary" implica realmente.** Mantine v8 **no tiene soporte nativo DTCG** — la documentación oficial no menciona DTCG, `$value`, `$type`, ni Style Dictionary en ninguna página de theming. La spec DTCG estable 1.0 se publicó en octubre de 2025, cinco meses después del lanzamiento de v8.0; la lista oficial de adoptantes DTCG no incluye a Mantine al día de hoy.

**Pero el pipeline es técnicamente viable** porque Mantine consume un objeto JS vía `createTheme()` y emite CSS vars con prefijo predecible (`--mantine-*`). El gancho oficial para extender o sobrescribir CSS vars desde el theme es la prop `cssVariablesResolver={(theme) => ({ variables, light, dark })}` de `MantineProvider`. El flujo es:

```
tokens DTCG en *.tokens.json
    ↓
Style Dictionary con 2 formatters custom
    ↓
output 1: theme.ts (objeto para createTheme())
output 2: tokens.css con :root { --mantine-color-*, --mantine-spacing-*, ... }
    ↓
@ui/components consume ambos
```

**Cuatro fricciones técnicas reales que conviene documentar como restricciones aceptadas:**

1. **La tupla de 10 shades por color es obligatoria** (`MantineColorsTuple`). Tu fuente DTCG debe estructurar cada color como `brand.0`…`brand.9` con `$type: "color"`. Generadores automáticos producen contraste pobre para amarillos/teal/naranjas — habrá que generar shades manualmente o con herramientas semánticas para esos casos.
2. **`primaryColor` debe ser una key de `theme.colors`**, no un valor hex. Esto fuerza nomenclatura semántica desde el día 1.
3. **Tokens de tier "componente" viven dentro de CSS modules**, no en `:root` (ej. `--button-height-md` se declara en la clase del Button, no en root). El auditor tiene que distinguir tokens globales de tokens scoped — más complejidad de implementación.
4. **`var(--mantine-breakpoint-*)` no funciona en `@media`** — breakpoints son PostCSS vars (`$mantine-breakpoint-*`), no CSS custom properties. Restricción del PostCSS preset.

### Limitaciones de Mantine que el playbook acepta

Cinco limitaciones que conviene documentar como supuestos aceptados:

1. **Bundle size.** Un dashboard típico con Mantine pesa ~130–160KB gzipped vs ~80–120KB con shadcn + libs sueltas. Para un SaaS B2B/B2B2C autenticado es aceptable; para landings públicas con foco en Core Web Vitals, sería una mala elección. En ese caso **no conviene usar Mantine para landings de marketing** — esa decisión cae naturalmente porque las landings probablemente vivan en otro repo/stack.
2. **Incompatibilidad con React Server Components.** Cita textual de la doc oficial: *"Mantine components cannot be used as server components. Entry points of all `@mantine/*` packages have the 'use client'; directive at the top."* Si el equipo planea aprovechar RSC para reducir bundle de cliente o streaming, Mantine no es buen fit para esos casos. Para dashboards autenticados (un uso típico de productos B2B2C), el tradeoff es aceptable.
3. **Bus factor 1.** Mantine es mantenido principalmente por una sola persona (Vitaly Rtishchev), con presupuesto comunitario modesto (~$19K/año en OpenCollective). Funciona consistentemente desde 2021 como side-project pero introduce riesgo concentrado. **Plan de contingencia:** la capa propia (`@ui/components`) debe estar construida sobre Styles API + tokens propios suficientemente como para que un eventual fork o migración no requiera reescribir UI a fondo.
4. **Breaking changes anuales recurrentes.** v6→v7 fue masivo (Emotion → CSS Modules); v7→v8 cambió `@mantine/dates` de Date a string y eliminó timezone support; v8→v9 requiere React 19+. Esto requiere visual regression testing (Chromatic/Playwright) + pinning estricto de versión. **Mitigación:** activar Chromatic como disparador de la auditoría del Sistema de Diseño (protocolo ARC, §3.6).
5. **No hay React Native support** ni está planeado. Si en el futuro el equipo necesita una app nativa, **Mantine no es la ruta** — habría que evaluar Tamagui u otra base. Por ahora, no es restricción operativa.

### La costura DesignOps / DevOps

DesignOps se preocupa por que las decisiones de diseño sean correctas y comuniquen la intención correcta. DevOps se preocupa por que el código compile, los builds estén limpios y los componentes rendericen sin errores.

**El Agentic DS opera en la costura entre ambos.** La distinción está en la pregunta: *¿esto codifica una decisión de diseño o ejecuta una decisión técnica?* La respuesta resuelve dónde vive cada pieza.

**La distinción crítica: linter vs governance.**

- **Linter** (DevOps): *"¿Este token existe?"* Checks sintaxis. *"¿`var(--color-blue-500)` resuelve a algo?"*
- **Governance** (DesignOps): *"¿Este token expresa la intención correcta?"* Checks intent. *"¿Estamos usando `--foreground-muted` para body copy? Eso no es un token faltante — es la posición incorrecta en la jerarquía."*

Un token auditor v1 chequea existencia. Un token auditor v2 chequea intención. En el Guide, Morales documenta el salto v1 → v2 de su propio auditor en Enara: pasó de detectar 43 a 64 violaciones porque empezó a entender que componentes donde cada token individual era válido podían violar las **reglas de relación entre tokens** (jerarquía visual, secuencia de foreground, coherencia elevación-tamaño).

El equipo arranca con v1 (Fase 2) y avanza a v2 (Fase 3).

**Propiedad compartida:** diseño es dueño de las decisiones codificadas; ingeniería es dueña de la infraestructura que las ejecuta. Ninguno opera el sistema solo.

## 3.4 · Las 3 capas del sistema · WHAT/WHERE · HOW/WHY · SELECTION

Esta es la arquitectura conceptual del Agentic DS. Tres capas, cada una con un propósito distinto. Cuando la IA pregunta *"¿qué componente uso para X?"*, las tres se consultan en este orden.

### Layer 1 · Index — WHAT / WHERE

El mapa de relaciones. **Qué componentes existen, qué usa a qué, qué depende de qué.** Comprensión completa del codebase en ~4,000 tokens en lugar de ~50,000 (formato TOON ofrece 30–60% menos tokens que JSON).

**Generado automáticamente** por la skill `/codebase-index`. No vive en la cabeza de PD ni en documentación — vive como artefacto que se regenera con un comando.

**Contenido típico:**

```yaml
summary:
  totalComponents: 57
  componentsWithMetadata: 53
  relationshipsMapped: 302
sources:
  componentMetadata:
    location: "**/*.metadata.{ts,tsx,json}"
    purpose: "Component API, props, variants, UX patterns" 
  relationships:
    location: .ai/relationships/
    format: toon
```

**Por qué importa el orden de construcción.** En el Part 5, Morales nota: *"Construí el index al último, y por eso el sistema estaba imperfecto. Le estaba enseñando a Claude cómo usar componentes sin darle un mapa de qué existía."* Lección aplicada al roadmap del equipo: el index entra en la Fase 1, no al final.

### Layer 2 · Metadata — HOW / WHY

Documentación a nivel de componente. **Patrones de uso, decisiones de diseño, cuándo usar este en lugar de aquel.** Es la capa de razonamiento que los humanos mantienen en la cabeza y que el Agentic DS extrae a archivos consumibles por IA.

**Schema con 9 secciones, ordenadas por importancia para decisión por IA:**

```typescript
export const ComponentMetadata = {
  // Header — la IA escanea esto primero para saber si el componente es relevante
  component: {
    name: "Button",
    category: "atoms" | "molecules" | "organisms",
    description: "",
    type: "interactive" | "display" | "container" | "input",
    path: "src/components/atoms/Button/Button.tsx"
},

// Body — la IA lee esto solo si el componente es relevante
 usage: {           // ⭐ Crítico para IA: cuándo usar, common patterns, anti-patterns
    useCases: [],
    commonPatterns: [],
    antiPatterns: []
 },
props: {},          // API surface (TypeScript)
behavior: {},       // states, interactions, responsive
  styling: {},      // tokens, variants
accessibility: {    // WCAG, ARIA, keyboard, screen reader
  role: "",
  keyboardSupport: "",
  wcag: "AA"
},
aiHints: {          // selection criteria, keywords, context
  priority: "high",
  keywords: [],
  selectionCriteria: {}
},
examples: []        // copy-paste code snippets
};
```

**Estructura header/body por performance.** La IA escanea **solo headers** entre todos los componentes para encontrar candidatos. Lee **metadata completa** solo de los relevantes. Sin esta separación, cada query del DS gastaría órdenes de magnitud más tokens.

**Lo crítico para decisión por IA es la sección `usage`.** Los anti-patrones tienen que ser específicos para que funcionen como contrato:

```typescript
antiPatterns: [
  {
    pattern: "Multiple primary buttons on the same page",
    why: "Confuses visual hierarchy; user can't tell which action is primary",
    instead: "Use one primary, others as secondary or ghost"
  }
]
```

### Layer 3 · Reasoning — SELECTION LOGIC

La lógica de cómo pensar las elecciones de componente jerárquicamente. **Empieza por organismos, baja a moléculas, alcanza átomos al final.** Cuándo los componentes existentes no encajan y necesitas algo custom. El framework de decisión.

Esta capa vive en **rules** (path-specific context que se cargan según en qué parte del codebase está trabajando la IA) y en **instructions** ([`CLAUDE.md`](http://CLAUDE.md) como router que apunta a las rules relevantes).

**Deep tracing.** Cuando pregunto *"¿qué átomos usa la homepage?"*, una respuesta superficial lista imports directos: BaseLayout, ThoughtsSection, FeaturedSkillsSection. Pero los átomos no aparecen a nivel de página — están nested más profundo. El algoritmo correcto es traversal recursivo con detección de ciclos:

1. Empieza con imports directos en la página objetivo
2. Para cada import, chequea su campo `uses` en el grafo de relaciones
3. Si `uses` no está vacío, recursivamente chequea esos componentes
4. Continúa hasta llegar a componentes sin dependencias
5. Filtra resultados por categoría para encontrar átomos

> ***✗ Wrong:*** *"CopyButton uses[1]: Tooltip ← Si te detienes aquí, te pierdes Tooltip."*
> ***✓ Right:*** *Traversa hasta terminal nodes.*

## 3.5 · Skills · Rules · Instructions — Arquitectura de instrucción

Las 3 capas anteriores (Index/Metadata/Reasoning) son **qué contiene** el sistema. Skills/Rules/Instructions es **cómo se estructura la instrucción a la IA** para que use esas capas.

| Capa de instrucción | Qué es | Reusabilidad | Ejemplos |
| --- | --- | --- | --- |
| Skills (tools) | Capacidades ejecutables que realizan operaciones específicas | Reusables entre proyectos — el generador de metadata funciona en cualquier librería que siga el schema | `/component-metadata` genera documentación estructurada · `/ds-composer` guía selección · `/codebase-index` regenera mapas · `/token-auditor` valida tokens contra reglas |
| Rules (context) | Restricciones pasivas que se cargan según en qué parte del codebase trabajes | Project-specific — encodan las decisiones de tu sistema | Schema de metadata · jerarquía de atomic design · metodología de deep tracing · reglas de jerarquía visual |
| Instructions (strategy) | La metodología que une skills y rules | Project-specific | `CLAUDE.md` como router · cuándo cargar el index · cómo abordar distintos tipos de queries |

**Jerarquía:**

```
CLAUDE.md (the router)
  ↓ points to
Rules (path-specific context)
  ↓ which reference
Skills (reusable capabilities)
  ↓ which produce
Artifacts (metadata, indexes, traced relationships)
```

**Cómo se construye en la práctica:** las skills vienen primero (resuelven problemas concretos), luego las rules (le dan a las skills contexto de proyecto), luego las instructions (estrategia de cuándo cargar qué para no inflar cada conversación). La arquitectura evoluciona de las tools hacia arriba, no de la teoría hacia abajo.

## 3.6 · El protocolo ARC — Audit · Report · Compose

Las 3 fases de capacidad del sistema, en orden de madurez. Cada fase es prerequisito de la siguiente.

### Fase 1 · Audit · El consumidor

**Status en el Guide:** validado. La IA lee tu DS con 100% de precisión y cero falsos negativos. **Valor:** búsqueda de componentes ×2.5 más rápida, precisión completa.

La infraestructura convierte exploración caótica del codebase en **queries deterministas**. Pregúntale al sistema *"¿qué componente para X?"* y elige el correcto entre los que existen en lugar de inventar.

### Fase 2 · Report · El mantenedor

**Status en el Guide:** validado. La IA analiza patrones, identifica deuda técnica, sugiere mejoras arquitectónicas. **No solo cuenta — razona. Valor:** governance automática. Captura patrones que humanos pierden (Shadow DOM, dependencias no usadas, tendencias de adopción).

Aquí la economía cambia completamente. La governance pasa de *"impuesto caro que no podemos costear"* a *"subproducto que obtenemos casi gratis"*:

- **Auditorías sobre demanda:** correr reportes cuando se quiera, no una vez por trimestre.
- **Costo:** unos centavos de dólar por análisis comprensivo (costo de API del modelo).
- **Consistencia:** misma metodología cada vez, sin varianza.
- **Profundidad:** captura patrones que humanos pierden.

### Fase 3 · Compose · El gobernador

**Status en el Guide:** the future (en construcción en Enara). La IA detecta drift, genera fixes, mantiene el sistema sin intervención manual. **Cuando el reporte identifica drift, no solo lo flag — crea el fix. Valor:** infraestructura self-healing.

No es autonomía total — PD sigue decidiendo qué reglas codificar, qué gaps llenar, qué patrones significan algo. Pero la ejecución no requiere a PD.

> *"La gente que habla de Agentic Design Systems como dirección futura está describiendo algo que ya está corriendo. La brecha entre 'sintácticamente válido' y 'semánticamente correcto' (entre código que funciona y código que pertenece) es donde las decisiones de diseño se sostienen o disuelven con el tiempo."* (Morales, Part 6)

## 3.7 · Definiciones de severidad — el reporte de auditoría

El reporte que el token auditor produce no es binario (pasa/falla). Tiene severities:

| Severidad | Qué significa | Ejemplo |
| --- | --- | --- |
| 🔴 Crítica | Token phantom (no existe en el sistema) o token primitivo usado directamente saltándose la capa semántica | `--color-blue-500` referenciado en componente · `--background-brand-subtle` que no existe como palette |
| 🟡 Alerta | Token existe pero su uso viola la intención de la jerarquía | `--foreground-muted` para body copy · mismatches tipográficos (font-size/line-height que no siguen text-style composites) |
| 🔵 Info | Observación para revisar pero no bloquea | Coherencia elevación-tamaño · uso de background-layer-intent |

Cada violación reporta: archivo, línea, regla violada, severity, sugerencia de fix.

## 3.8 · Roadmap de implementación (4 fases, ~6 meses)

El roadmap está diseñado para que **cada fase entregue valor por sí misma**, no como proyecto monolítico que solo se usa al final. Si el equipo pausa después de cualquier fase, ya tiene un beneficio tangible. El roadmap fue redimensionado de 4 a 5 fases para incorporar el aprovechamiento del MCP oficial de Mantine, descubierto durante la validación técnica.

### Fase 0 · Fundaciones — monorepo, tokens y Figma · 4–6 semanas

**Objetivo.** Construir el entorno antes de los componentes. Morales lo dice claro: *"Lo primero que scaffoldeé no fueron componentes. Fue la estructura monorepo. Antes de construir un solo componente, construí el entorno donde esos componentes iban a vivir y la capa de observabilidad que íbamos a usar."*

**Output.**

- **Estructura monorepo** (pnpm workspaces o Turborepo):
    - `@ui/tokens` — DTCG sources + Style Dictionary con 2 formatters custom (uno emite `theme.ts` para `createTheme()`, otro emite `tokens.css` con `:root { --mantine-* }`).
    - `@ui/components` — wrappers Mantine seleccionados, `MantineProvider` único exportado, bundler rollup siguiendo el `extension-template` oficial de Mantine.
    - `@ui/metadata` — `*.metadata.ts` por componente (capa "Why" semántica del equipo, ver Fase 0.5).
    - `@ui/auditor` — CLI Node para phantom tokens, hardcoded values, hierarchy rules.
- **Token system inicial:** archivos JSON siguiendo W3C Design Tokens spec, procesados con Style Dictionary. Colors (10 shades obligatorios por color — restricción aceptada), spacing, typography, elevation, motion.
- **Archivo Figma maestro.** Empezar con un fork de **Pretine 7** (Ravn, ~4,000 copias, oficialmente recomendado por Mantine, mapping 1:1 con `@mantine/core` + `@mantine/charts`, usa Figma Variables): [https://www.figma.com/community/file/1293978471602433537](https://www.figma.com/community/file/1293978471602433537). Renombrar tokens con la nomenclatura semántica del equipo (`brand.*`, `surface.*`, etc.). Alternativa: Lean Mantine de AlleyCorp Nord. **No rehacer desde cero.**
- 6 átomos iniciales con metadata mínima (proof of concept de la Fase 1).
- Documentación inline en cada componente: cuándo usar, cuándo no, variantes.

**Valor por sí solo.** Aunque no haya nada agentic todavía, esta fase elimina el ~80% de la fricción Figma↔código actual. Si la iniciativa pausa aquí, el equipo deja de quemar el tiempo recurrente que hoy se va en talacha manual.

### Fase 0.5 · Aprovechar el MCP oficial de Mantine · 1–2 semanas

**Por qué existe esta fase corta.** Cuando Morales escribió la serie (2024-2025) no había MCP oficial de design system. Cuando construyó su sistema en Enara, **toda la metadata "What/How" la generó manualmente**. Mantine v8.3+ publica esto oficialmente — Pretine 7, [`mantine.dev/mcp`](http://mantine.dev/mcp), `@mantine/mcp-server`, `mantinedev/skills`, `llms.txt`. **Replicarlo desde cero sería duplicación innecesaria.**

**Objetivo.** Conectar el sistema oficial de Mantine antes de generar nuestra propia capa de metadata, para que `@ui/metadata` extienda en lugar de duplicar.

**Output.**

- Configurar el `@mantine/mcp-server` oficial en el stack de PD (consumible desde Cursor con `@Docs`).
- Indexar [`mantine.dev/mcp`](http://mantine.dev/mcp) y los `llms/core-*.md` como fuente primaria del schema de Mantine (~130 componentes con `id`, `name`, `kind`, `package`, `description`, `propsCount`, `llmUrl`, `componentDataUrl`).
- Adoptar las skills oficiales `mantinedev/skills` (`mantine-form`, `mantine-combobox`, `mantine-custom-components`) en `.claude/skills/`.
- **Redefinir `.metadata.ts` como extensión, no duplicación.** El metadata oficial de Mantine cubre la capa What/How mecánica (props, descripciones, paquete, URL de docs). el equipo aporta la capa **"Why" semántica propia**:
    - `semantic_intent`: *"este Button es para confirmar acciones destructivas en tianguis"*
    - `do/dont` específicos al dominio el equipo
    - `accessibility_notes` con WCAG mapeado al contexto mexicano
    - `usage_examples` con flujos reales del producto

**Valor por sí solo.** Reducción del ~40% del esfuerzo proyectado en Fase 1, mejor alineación con cadencia de releases de Mantine (la metadata oficial se actualiza con cada minor).

### Fase 1 · Audit · El consumidor · 3–5 semanas

**Objetivo.** Hacer el DS del equipo legible por agentes de IA. La IA lee el sistema con 100% de precisión, combinando el MCP oficial de Mantine + nuestra capa semántica.

**Output.**

- **Layer 1 (Index):** skill `/codebase-index` corriendo. Mapa de relaciones generado automáticamente en formato TOON.
- **Layer 2 (Metadata):** schema "Why" completo aplicado a todos los wrappers de `@ui/components`. Header optimizado para scan rápido.
- **Layer 3 (Reasoning):** rules para deep tracing, cycle detection, atomic design hierarchy.
- Skill `/component-metadata` para generar y validar metadata de nuevos componentes.
- Skill `/ds-composer` funcional: pídele *"construye un formulario de pago"* y elige correctamente entre componentes existentes consultando ambas capas (Mantine + el equipo).
- MCP custom del equipo que expone la capa semántica propia, complementario al `@mantine/mcp-server` oficial.

**Valor por sí solo.** Velocidad de búsqueda de componentes ×2.5. Precisión completa en consultas. Decisiones contextuales al dominio tianguis, no solo a la librería UI.

### Fase 2 · Report v1 · El mantenedor · 4–6 semanas

**Objetivo.** El DS se reporta a sí mismo. Token auditor v1 funcionando.

**Output.**

- **Token auditor v1 (linter):** chequea existencia. Detecta tokens phantom (var(--\*) que no resuelven contra `@ui/tokens` ni contra el set oficial de Mantine), hardcoded hex/rgb, espaciados sin token fuera de patrones permitidos (1px, 2px, 0).
- Implementación: Node CLI con `postcss` + `glob`, AST sobre `*.module.css` matcheando `var(--*)` contra (a) CSS vars que Mantine documenta + (b) DTCG source del equipo + (c) CSS Variables Resolver custom.
- Reportes de adopción on-demand: qué componentes se usan, cuáles no, qué patrones se violan. Output JSON consumible por LLM.
- Métricas vivas: cobertura del DS, drift detectado por ciclo.
- Severity definitions implementadas (Critical / Warning / Info — ver §3.7, definiciones de severidad).
- Integración CI + pre-commit hooks.
- Dashboard básico del DS (D3.js sobre los datos generados).

**Valor por sí solo.** PD ve la salud del sistema sin ejercer manualmente cada review. Coste por análisis: unos centavos de dólar (API del modelo).

### Fase 3 · Report v2 + Compose · El gobernador · 6–8 semanas

**Objetivo.** Token auditor v2 (governance, no solo linter) + capacidades de compose.

**Output.**

- **Token auditor v2 (governance):** chequea **intención**, no solo existencia. Reglas codificadas como DSL propio + LLM en loop: jerarquía visual, secuencia de foreground, patrones de system feedback, coherencia elevación-tamaño.
- Empaquetado como Claude Skill (`.claude/skills/token-auditor/` con [`SKILL.md`](http://SKILL.md)).
- Auditors integrados a CI/CD: bloqueo automático en PR cuando viola anti-patterns o composition.parentConstraints.
- Trazabilidad: cuando un PR es rechazado, el reporte cita la regla específica del metadata que lo violó.
- Reportes de drift que se generan solos y se publican en el canal de Diseño semanalmente.
- Primer fix automático del sistema (proof of concept de Compose).

**Valor por sí solo.** *"Agentic"* deja de ser aspiracional y se vuelve preciso. El sistema se auto-gobierna.

## 3.9 · Métricas del Sistema de Diseño

| Métrica | Cómo se mide | Target al cierre 2026 |
| --- | --- | --- |
| Cobertura del DS | % de pantallas en producción cuyos componentes vienen del DS (no implementación custom) | ≥85% |
| Drift detectado | Violaciones a contratos del DS detectadas por auditors, por ciclo | <5 por Sprint |
| Tiempo de handoff | Días promedio entre Design Spec aprobado y primer PR mergeado | ↓ 40% vs baseline Q1 2026 |
| Iniciativas downstream sin intervención de PD | % de iniciativas en Delivery que avanzan sin que PD intervenga por consistencia visual | ≥70% |
| Auditor severity | Distribución Critical/Warning/Info por release | Critical → 0 en main, Warning → tendencia descendente trimestre a trimestre |
| Componentes con metadata | Components' ratio total / con metadata completa | ≥95% al cierre 2026 |

Si ninguna de estas mejora, el Sistema de Diseño está construido pero no está operando. Esa es la diferencia entre un design system y un design system que funciona.

---
