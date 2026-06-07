# 🧰 4 · Stack de herramientas

*Sección de [Playbook: Diseño de Producto](#/corazon/diseno)*

---

## 4.1 · Filosofía de tooling

Tres reglas que aplican a cualquier herramienta que entra al stack:

1. **Mínimo viable.** Si una herramienta nueva no resuelve un problema concreto que las herramientas actuales no pueden resolver, no entra. La fricción de aprender una nueva tool y mantenerla cuesta tiempo real.
2. **AI-first.** Cuando dos opciones son equivalentes en funcionalidad, gana la que tiene mejores capacidades de IA o mejor integración con el flujo de IA. La eficiencia por persona depende cada vez más de esto.
3. **Redundancia cero.** No tenemos dos herramientas que hacen lo mismo. Si una tool nueva solapa con una existente en más de 50%, una de las dos sale.

## 4.2 · Stack por categoría

### Modelos de IA

- **Claude Pro / Claude Max.** El motor principal de razonamiento. **Pro** para uso diario del equipo de Diseño; **Max** para quien lidere la construcción del Agentic DS (volumen de skills y context loading lo requiere).
- **Gemini Pro.** Gratis con cuenta Google Workspace. Motor complementario.
- **NotebookLM.** Gratis con Google Workspace. Para sintetizar grandes volúmenes de transcripciones, reportes previos, conversaciones con clientes.
- **Granola AI (opcional).** Captura y transcripción de entrevistas con usuarios, stakeholders y reuniones internas. Reduce el costo cognitivo de tomar notas.

### Research de usuarios

- **Maze.** Herramienta principal de research evaluativo: tests de usabilidad async, surveys, card sorting.
- **Inflight.** Design critique interno asíncrono (versión beta, gratis durante 2026).
- **Userberry (opcional).** Tests cualitativos async con grabación de pantalla y video del usuario. Útil cuando se necesita la dimensión "lo que la gente hace" sin moderar.

### Sistemas de diseño, UI, prototipado y desarrollo asistido por IA

- **Figma Professional.** Fuente de pantallas, especificaciones y handoff. Inevitable.
- **Figma Dev Seats.** Para que el equipo de ingeniería inspeccione diseños correctamente.
- **Cursor Pro.** IDE asistido por IA. PD lo usa para mantener la metadata del Sistema de Diseño, navegar el codebase con asistencia, prototipar en código cuando el método lo amerite.
- **Figma Weave (opcional).** Generación visual asistida con IA: imágenes para marketing, exploraciones de dirección de arte, mockups con contenido realista. Compra estratégica, no operativa del día a día. El rollover de credits del plan Professional es valioso.
- **Storybook + GitHub Actions.** Gratis. Para visualización de componentes y CI/CD del DS.
- **Herramienta de animación (free tier).** Animaciones ligeras. Upgrade a plan de pago cuando: varios editores activos, volumen alto de animaciones críticas en producción, o necesidad de features avanzadas.

### Lo que NO entra al stack

- **Adobe Creative Cloud.** Affinity como reemplazo para casos puntuales de ilustración o branding. Cero suscripciones de Adobe.
- **Múltiples herramientas de project management.** Linear, Jira, Asana, etc. al mismo tiempo. El equipo consolida en una sola herramienta de gestión, alineada con el Marco de Desarrollo.

## 4.3 · Cómo dimensionar el costo del stack

Los precios cambian y dependen de la región, la moneda y el número de seats, así que en lugar de una cotización fija conviene razonar por **categorías** y **escenarios**. Cotiza cada categoría en tu propia moneda y contexto, y arma tres escenarios según tu presupuesto y madurez.

### Categorías de gasto

| Categoría | Qué cubre | Nota de costo |
| --- | --- | --- |
| Diseño y handoff | Herramienta de diseño (full seats para diseño + dev seats para ingeniería) | Crece por seat con cada hire |
| Modelos de IA | Motor de razonamiento principal (plan estándar para el equipo; plan de mayor capacidad para quien construye el Agentic DS) | El plan de mayor capacidad es lo que hace viable el Agentic DS sin chocar con rate limits |
| IDE asistido por IA | Para mantener metadata del sistema y prototipar en código | Crece por seat |
| Research | Herramienta de tests async y, opcionalmente, herramienta de tests cualitativos con grabación | La opción async básica suele incluir varios seats |
| Captura / síntesis | Transcripción de entrevistas y síntesis de grandes volúmenes de texto | Hay opciones gratuitas razonables |
| Componentes y CI | Visualización de componentes + CI/CD del DS | Típicamente gratis en el rango relevante |

### Tres escenarios

| Escenario | Qué incluye | Para quién |
| --- | --- | --- |
| **Mínimo viable** | Diseño (seats de diseño), modelo de IA en plan estándar, IDE asistido, research async básico, captura/síntesis en tier gratuito, componentes/CI gratis | Para validar el modelo antes de comprometer presupuesto |
| **Recomendado** | Lo del mínimo + dev seats de la herramienta de diseño + upgrade del modelo de IA al plan de mayor capacidad para quien construye el Agentic DS | Mejor balance impacto/costo |
| **Completo** | Lo del recomendado + research cualitativo con grabación + captura/síntesis de pago | Cuando se quiere cubrir todos los casos |

### Por qué el delta del Recomendado se justifica

Dos cosas críticas explican el salto del Mínimo al Recomendado:

1. **Dev seats de la herramienta de diseño.** Sin esto, ingeniería no inspecciona diseños correctamente y se rompe el handoff. El costo de un día perdido de un dev supera el costo anual del dev seat.
2. **Plan de IA de mayor capacidad.** Sin esto, construir el Agentic DS choca con rate limits constantemente. Es la diferencia entre tener Agentic DS y no tenerlo.

### Cómo escala

Los costos por seat (diseño, IDE, IA) crecen linealmente con cada hire. La herramienta de research suele incluir varios seats hasta el primer hire. Componentes y CI no escalan en costo en el rango relevante.

> **Pendiente del equipo:** fijar las herramientas concretas de cada categoría y cotizarlas en tu moneda. Este playbook deja el marco; la selección específica es decisión de cada equipo.

## 4.4 · Política de adopción y reemplazo de herramientas

Para evitar la acumulación de SaaS, una política simple:

- **Aprobación de nueva tool:** cualquier herramienta nueva con costo recurrente requiere documentar (1) qué problema resuelve, (2) qué tool actual queda obsoleta, (3) costo total mensual, (4) periodo de prueba.
- **Periodo de prueba:** 60 días. Al final, decisión binaria: se queda o se elimina.
- **Review trimestral del stack:** cada cierre de trimestre, lista de tools con uso real. Las que no se usaron en el trimestre o tienen <30% de uso de su capacidad, candidatas a eliminación.
- **Quién decide:** el equipo de Diseño propone, el PM aprueba el costo, el negocio lo financia.

---
