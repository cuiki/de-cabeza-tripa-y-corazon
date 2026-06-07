# Playbook: Diseño de Producto

*Un playbook de disciplina del [Corazón](#/corazon), dentro del sistema [Producto de Cabeza, Tripa y Corazón](#/inicio)*

| | |
| --- | --- |
| **Versión** | v1.0 |
| **Estado** | Documento vivo |
| **Madurez** | Completo (las seis secciones) |

---

## ❤️ Qué es este playbook

Este es el playbook de la disciplina de **Diseño de Producto** — uno de los playbooks que componen el [Corazón](#/corazon), la capa disciplinar del sistema. El Corazón no es un documento único, sino una familia de playbooks (Diseño, Ingeniería, Soporte, Growth/Data, Producto); este describe el oficio del Diseño: su craft, sus principios, su forma de operar y de crecer. Es el primer playbook de la familia en alcanzar madurez completa.

El Diseño es la disciplina que aporta el craft y el cuidado del usuario: la empatía y la calidad de la artesanía, el cuidado por atender las necesidades reales de quien usa el producto, equilibrado con los objetivos de negocio.

> **TL;DR — ¿Qué es el Diseño de Producto y por qué existe?**
> Es la disciplina que traduce las necesidades reales del usuario en una solución usable, entendible y deseable, equilibrándolas con los objetivos del negocio. Existe para que el producto no solo funcione, sino que la gente realmente pueda y quiera usarlo. Su rol en el sistema: **facilita el Motor de Evidencia** (la [Cabeza](#/cabeza)), **define la función y la forma** de la solución en la [Tripa](#/tripa), y **cuida el craft** a través de este playbook.

### Cómo este playbook mapea al esqueleto común de seis secciones

Todos los playbooks del Corazón comparten seis secciones. En este, ya maduro, cada una vive así:

| Sección del esqueleto | Dónde vive en este playbook |
| --- | --- |
| 1 · Filosofía y principios | Sección 1 (la función de diseño, Scientific Design, principios y no-negociables) |
| 2 · Operación día a día (el método) | Sección 2 (El método de Diseño de Producto) |
| 3 · Método que aporta a Cabeza y Tripa | Dentro de la Sección 2 → «Cómo se conecta con la Tripa y la Cabeza» |
| 4 · Herramientas | Sección 4 (stack) y Sección 3 (Sistema de Diseño) |
| 5 · Crecimiento profesional | Sección 5 (carrera y rúbricas) |
| 6 · Reclutamiento | Sección 5.8 (reclutamiento) |

Un equipo de producto que adopta un modelo Product-Led Growth (PLG) suele formalizar su ciclo de vida en un **Marco de Desarrollo de Producto** (la Tripa): Dual-Track Agile, jerarquía NSM → Outcome → Opportunity, ciclos de Sprint (3 semanas) + Cooldown (1 semana), ciclo de las 5Ds, RACI por fase y controles entre fases.

El Marco de Desarrollo define el **qué, cuándo y cómo** se construye producto. Este playbook lo complementa con una capa específica: **cómo opera la función de Diseño de Producto dentro de ese marco** — filosofía, rituales internos, Design System, herramientas, carrera, métricas propias y desarrollo del equipo.

Este playbook no altera el Marco de Desarrollo. Lo consume. Cuando haya solapamiento, el Marco de Desarrollo manda. Cuando haya un hueco que no cubre (por ejemplo: cómo se desarrollan los diseñadores como individuos, cómo opera un design system agentic, o cómo se mide la salud operativa de la función), este playbook lo llena.

---

## 📦 Lo que este playbook entrega

Operación mínima viable de una función de Diseño de Producto preparada para escalar, sin sobre-construir estructura para una función chica (por ejemplo, un diseñador con un puñado de devs):

1. **Filosofía y principios** que definen Product Design y dejan explícito que dominar herramientas de IA es competencia de nivel, no extra.
2. **Operación de diseño ligera** alineada a la cadencia Sprint + Cooldown del Marco de Desarrollo, con rituales internos que complementan los gates y ceremonias del framework sin duplicarlos.
3. **Plan para construir un Agentic Design System** sobre la librería de componentes que el equipo ya use, arrancado como iniciativa formal dentro del Marco de Desarrollo y después iterado como infraestructura transversal en los Cooldowns.
4. **Stack de herramientas** organizado por categoría, en tres escenarios (mínimo, recomendado, completo), para que cada equipo lo dimensione según su contexto y presupuesto.
5. **Escalera de carrera** de 4 niveles IC (Designer I → Designer II → Senior → Lead) con rúbricas accionables en 6 dimensiones de competencia, incluyendo AI Fluency & Systems Thinking como dimensión no-negociable.
6. **Modelo de métricas en dos niveles**: (a) cómo la función de diseño contribuye al Outcome del trimestre dentro del Marco de Desarrollo, y (b) métricas propias de la salud operativa de la función.
7. **Plan de implementación del primer trimestre (90 días)** anclado a ciclos del Marco de Desarrollo y disparadores explícitos para escalar el equipo cuando haya señal real de necesidad.

---

## 🌐 El contexto

Este playbook asume una organización en etapa de maduración: un producto sólido con base de clientes recurrente que da un paso deliberado hacia un modelo **Product-Led Growth (PLG)**, formalizado en su Marco de Desarrollo. Ese marco define cómo opera el ciclo de vida de producto: Dual-Track Agile, jerarquía NSM → Outcome → Opportunity, Sprint 3s + Cooldown 1s, ciclo de las 5Ds, RACI por fase, controles entre fases, y glosario operativo.

En un momento así, el Diseño de Producto necesita evolucionar hacia **una función operativa estructurada** que opere con **rigor, profesionalismo, flexibilidad y empatía** dentro del Marco de Desarrollo, que pueda incorporar nuevas personas con claridad, y que sea una pieza confiable del proceso de producto end-to-end.

Eso es lo que este playbook construye: la capa interna de la función de Diseño, que vive debajo de la autoridad del Marco de Desarrollo.

---

## 🏛️ Área funcional, no puesto

La diferencia más importante de este playbook es de encuadre: trata al Diseño de Producto como una **función organizacional**, no como un puesto.

Esa diferencia importa porque cambia las preguntas que la organización se hace. En un modelo de puesto, la pregunta es *"¿el diseñador está haciendo bien su trabajo?"*. Es una pregunta personalizada, cargada y difícil de calibrar con objetividad. En un modelo de función, las preguntas son distintas:

- ¿La función de diseño está produciendo el impacto que el negocio necesita?
- ¿Está estructurada para operar con claridad dentro del Marco de Desarrollo?
- ¿Tiene los procesos, herramientas y rituales internos que le permiten operar con rigor?
- ¿Quién la ejecuta hoy, y qué necesita esa persona (o equipo) para crecer dentro de ella?

Estas preguntas son operativas y no juicios sobre personas. Permiten evaluar la salud de la función independientemente de la rotación de personal, conversar sobre desarrollo individual con marcos claros, y planear hires futuros con criterio.

Este playbook está escrito en el modelo de función. Lo que sigue describe esa función en términos de filosofía, operación (encima del Marco de Desarrollo), infraestructura técnica (Design System), herramientas, gente y métricas — los seis ejes que cualquier función organizacional saludable necesita resolver.

---

## ⚖️ Lo que este playbook es y no es

### Sí es:

- Una operación ligera, ejecutable hoy por una persona, que escala con disparadores cuando llegan más diseñadores.
- **Una capa de diseño que vive debajo del Marco de Desarrollo.** No lo reemplaza, no lo extiende, no altera su autoridad: lo complementa en el tema específico de cómo opera la función de Diseño como disciplina.
- Una herramienta de liderazgo: quien lidere producto puede gestionar la función de Diseño con criterio, y los diseñadores tienen un mapa claro de hacia dónde crecer.
- Un documento vivo. Se itera conforme la realidad pruebe o desmienta cada decisión.

### No es:

- Un manifiesto de diseño. No defiende una escuela ni una metodología única. Pragmático, no ideológico.
- Un reemplazo o extensión del Marco de Desarrollo. Donde hay solapamiento entre ambos documentos, el Marco de Desarrollo manda.
- Una copia de cómo lo hacen Airbnb, Shopify o Spotify. Esos modelos asumen 30+ diseñadores. Este playbook está pensado para equipos pequeños.
- Una excusa para sobre-instrumentar. Cada ritual, herramienta y artefacto propio que aparece aquí pasó la prueba de *"¿esto se justifica en un equipo pequeño?, ¿esto duplica algo que ya vive en el Marco de Desarrollo?"*. Lo que no pasó, no entró.

---

## 📖 Cómo leer este documento

| **Si eres…** | **Lee** | **Lectura mínima** |
| --- | --- | --- |
| **PM** | Todo, en orden | Partes 1, 2, 3, 6 |
| **PD (actual o futuro)** | Todo, con énfasis en 2, 3, 4, 6, 7 | Parte 6 (rúbrica de tu nivel) + Parte 2 (principios) |
| **Data & Analytics, EM, Customer Success** | Partes 1, 3, 8 | Parte 3 (cómo opera Diseño dentro del Marco de Desarrollo) |

### Lo que necesita para funcionar

Validación del modelo de niveles y rúbricas (Parte 6), aprobación del presupuesto de tools (Parte 5) y compromiso visible con los rituales mínimos (Parte 3). Sin estos tres, el playbook es un solo un documento más.

---

## Contenido

El Playbook de Diseño de Producto se desarrolla en estas secciones, cada una en su propia página:

1. [1 · Filosofía y principios](#/corazon/diseno/filosofia-y-principios)
2. [2 · El método de Diseño de Producto](#/corazon/diseno/el-metodo-de-diseno-de-producto)
3. [3 · Agentic Design System (Sistema de Diseño)](#/corazon/diseno/agentic-design-system)
4. [4 · Stack de herramientas](#/corazon/diseno/stack-de-herramientas)
5. [5 · Escalera de carrera y rúbricas](#/corazon/diseno/escalera-de-carrera-y-rubricas)
6. [6 · Cultura y liderazgo](#/corazon/diseno/cultura-y-liderazgo)
7. [7 · Métricas](#/corazon/diseno/metricas)
8. [8 · Roadmap de implementación del playbook](#/corazon/diseno/roadmap-de-implementacion-del-playbook)
9. [9 · Plantillas, guías y anexos](#/corazon/diseno/plantillas-guias-y-anexos)
10. [10 · Glosario](#/corazon/diseno/glosario)
