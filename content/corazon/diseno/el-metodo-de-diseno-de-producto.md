# ⚙️ 2 · El método de Diseño de Producto

*Sección de [Playbook: Diseño de Producto](#/corazon/diseno)*

---

El método de la disciplina de Diseño, organizado con la misma estructura que el método de Ingeniería (X-Workflow) — inspiración, no molde rígido. La filosofía y los principios viven en la sección 1; aquí está cómo se trabaja una pieza de diseño de principio a fin.

## El ciclo: cómo se recorre el diseño

El Marco de Desarrollo ya especifica formalmente qué hace cada rol en cada fase del ciclo de las 5Ds — incluyendo PD — en su **Sección 6 (Matriz de Responsabilidades por Fase)**.

Para quien esté leyendo este playbook sin el Marco de Desarrollo al lado, este es el **resumen operativo** de qué hace PD en cada fase (no reemplaza al Marco de Desarrollo — es un digest):

| **Fase** | **Qué hace PD** | **RACI según Marco de Desarrollo** |
| --- | --- | --- |
| **D1 · Discover** | Aporta evidencia directa e insights de usuarios; los entrega a Data & Analytics antes del Opportunity Mapping. No decide qué se construye. | R (Responsible) |
| **D2 · Design** | Redacta el **[Product Design Brief](#/plantillas/product-design-brief)** al abrir la fase: define cómo abordar el problema, declara las apuestas de diseño y dispara el research. Conduce el research que valida las apuestas. Cuando el **Reporte de Hallazgos** cierra, redacta el **[Product Design Spec](#/plantillas/product-design-spec)** con EM (RFC). Colabora con PM en el Kick-off y el Product Jam. | R (Responsible) |
| **D3 · Develop** | Participa en los dos **Design Reviews** obligatorios. Si el diseño no está respetado al cierre, el feature no entra a Deploy. | R (Responsible) |
| **D4 · Deploy** | Verifica que la **implementación final respete el estándar de diseño** antes del release. Completa la Sección 3 (Design Review) del Release Checklist. | R (Responsible) |
| **D5 · Deliver** | Analiza si la solución requiere iteraciones basadas en el uso real (datos, entrevistas, etc.). Aporta lectura cualitativa al Impact Report. | I (Informed) |

Nota sobre la "R" de PD en D2: En el Marco de Desarrollo, PM (R/A), Data & Analytics (R) y PD (R) son todos "Responsible" en D2 — cada uno en su dimensión. PD es autor único del Brief y del Design Spec. PM y Data & Analytics garantizan que las apuestas del Brief y la solución del Spec cumplan con el JTBD sin scope creep. La aprobación final de ambos artefactos viene del Kick-off, con el Reporte de Hallazgos como evidencia de que las apuestas se validaron. Si hay conflicto entre este digest y la RACI oficial del Marco de Desarrollo, gana el Marco de Desarrollo.

### Relación con los controles entre fases

El Marco de Desarrollo define controles formales entre fases que funcionan como gates. Los que tocan a PD:

- **Control D1→D2:** *"No se diseña nada sin evidencia."* Sin PRD aprobado, ni siquiera vale la pena escribir el Product Design Brief.
- **Control D2→D3:** Kick-off + Product Jam. La cadena es estricta: el Product Design Brief firmado dispara el research; el Reporte de Hallazgos publicado dispara el Product Design Spec; el Spec con el RFC se aprueban en el Kick-off. Los cuatro artefactos (Brief, Reporte, RFC, Spec) deben estar publicados en la sub-página D2 antes del Kick-off.
- **Control D3→D4:** Design Review doble. PD actúa como guardián de la calidad de implementación.
- **Control D4→D5:** *"El Done real se alcanza cuando los datos confirman el JTBD."* PD declara done cuando la evidencia valida la hipótesis, no cuando entrega el diseño.

## El artefacto central: el Brief y el Design Spec

El Marco de Desarrollo define el **Initiative Spec** como el documento vivo de cada iniciativa. La mayoría del trabajo documental de PD vive dentro del Initiative Spec y no en documentos paralelos.

Los artefactos de PD se dividen en tres grupos: **(a)** los que viven dentro del Initiative Spec, **(b)** los documentos de research que viven bajo el Motor de Evidencia, y **(c)** herramientas internas de la función de Diseño de Producto.

### (a) Artefactos dentro del Initiative Spec (responsabilidad de PD)

**1. PRD → sub-página D1.** PD aporta evidencia directa al PRD. Los hallazgos se entregan a Data & Analytics antes del Opportunity Mapping. PD no es autor — es contribuyente de evidencia.

**2. Product Design Brief → sub-página D2, apertura.** El documento estratégico de diseño. Se escribe al abrir D2, antes que cualquier otro artefacto de la fase. Define cómo abordar el problema del PRD, traduce sus aristas a lenguaje de diseño, declara las apuestas de diseño que el research debe validar, captura principios, tensiones y riesgos UX. Es la brújula del proceso de diseño: cuando aparezcan decisiones difíciles, el Brief es el papel al que se vuelve. PD es autor único. Sin Brief firmado, no se redacta el Plan de Investigación. Template en Plantillas (§9).

**3. Product Design Spec → sub-página D2, cierre.** El documento operativo de handoff a Ingeniería. Se escribe después del Reporte de Hallazgos del research, no antes. Recoge solo las apuestas que pasaron el research como decisiones firmes; las que no pasaron reabren el Brief. Define entidades, máquina de estados, flujos finales, reglas, edge cases, accesibilidad, componentes, copy. Template en Plantillas (§9).

**3. Sección 3 (Design Review) del Release Checklist → sub-página D4.** PD documenta los dos Design Reviews y verifica que la implementación final respete el estándar.

**4. Input al Impact Report → sub-página D5.** PD aporta lectura cualitativa al Impact Report que consolida Data & Analytics.

Para PRD, Release Checklist e Impact Report no hay template paralelo en este playbook: viven en el Marco de Desarrollo o en la plantilla oficial del Initiative Spec en la herramienta de gestión. Para Brief y Spec, el template vive en Plantillas (§9) de este playbook.

### (b) Documentos de research (viven bajo el Motor de Evidencia)

El research que PD conduce produce cuatro documentos. **Todos viven bajo el Motor de Evidencia, no bajo este Playbook.**

| Documento | Para qué sirve | Cuándo se usa |
| --- | --- | --- |
| 📋 Plan de Investigación | Documento padre. Cubre objetivo, metodología, reclutamiento, logística, criterios de éxito. | Se redacta en Cooldown. Sin Plan firmado, no hay estudio. |
| 📋 Brief de Investigación | Anexo del Plan. Pieza operativa de sesión: guion, escenarios scripted, prompts, plantilla de notas. | Antes de cada test individual dentro del Plan. |
| 📋 Estrategia de Análisis | Cómo se procesa el dato post-sesiones. 4 pasos: revisar, codificar, encontrar temáticas, insights. | Apenas se cierra la ejecución. |
| 📋 Reporte de Hallazgos | Output final. Veredicto explícito por apuesta (PASA/AMBIGUO/NO PASA) + global (🟢/🟡/🔴). | Se anexa a sub-página D2 antes del Kick-off, o D3 antes del Product Jam. |

**Análisis a ciegas obligatorio** cuando PD facilitó las sesiones del estudio que también diseñó. Detalle: Motor de Evidencia, §6.4 (análisis a ciegas).

### (c) Herramientas internas de la función de Diseño

**Design Review Deck (5 slides).** Para los dos Design Reviews del Marco de Desarrollo (checkpoint 1 y 2 en D3) y critiques internos. Estructura fija: (1) el problema, (2) los principios aplicados, (3) la solución propuesta, (4) las decisiones difíciles y por qué, (5) lo que necesito del equipo. Cinco slides, máximo 10 min de presentación, 30 min de discusión. Template en Plantillas (§9).

### Lo que NO es artefacto formal

- **Wireframes.** Herramientas internas, no entregable.
- **Moodboards.** Consumen tiempo y rara vez informan decisiones.
- **Librerías de inspiración.** Viven en Figma o en una nota personal.
- **"One-pagers de decisión" paralelos.** Todo lo que es decisión de diseño vive en el Design Spec.
- **"Handoff Checklists" paralelas.** El handoff está formalizado en los Design Reviews del Marco de Desarrollo y en la Sección 3 del Release Checklist.
- **Briefs de research separados del Motor de Evidencia.** Ningún documento de research vive fuera del Motor de Evidencia.

## La capa operativa

Las mecánicas y herramientas del día a día del Diseño: sus rituales, su Definition of Done y la gestión de la deuda de diseño. El **Sistema de Diseño** (sección 3) y el **stack** (sección 4) también son parte de esta capa operativa.

### Los rituales de diseño

La cadencia operativa del equipo está definida por el Marco de Desarrollo: **3 ciclos mensuales por trimestre, cada ciclo = Sprint 3s + Cooldown 1s.** Dentro de ese ritmo, el Marco de Desarrollo ya prescribe las ceremonias que involucran a todo el equipo de producto: Opportunity Mapping (último Cooldown del trimestre anterior o según calendario), Kick-off (D2→D3), Product Jam (gate D3), Design Review doble (durante Sprint D3), Retrospectiva de Proceso + Retrospectiva de Resultados (durante cada Cooldown).

Los rituales que propone este playbook son específicos de la función de Diseño — no duplican los del Marco de Desarrollo. Están diseñados para correr en paralelo a la cadencia Sprint + Cooldown, sincronizándose con ella donde aporta valor.

**La regla:** cada ritual debe justificar su existencia. Si después de tres ciclos un ritual no produce decisiones, aprendizajes o cambios de comportamiento, se elimina. Ningún ritual es sagrado.

**Durante el Sprint (3 semanas)**

- **Standup diario del equipo completo (15 min).** No es un ritual de Diseño — es el del equipo de producto. PD se suma como cualquier otro rol. Esto evita aislar al Diseño en su propia ceremonia, cosa que tiende a generar silos.
- **1:1 PD ↔ PM (45 min, cada 3 semanas).** Conversación de prioridades, blockers y desarrollo. La mitad del tiempo es del trabajo en curso del Sprint, la otra mitad es del crecimiento de PD contra las rúbricas de la Parte 6.
- **Design Journal (30 min semanales, PD individual).** Espacio bloqueado en el calendario de PD para documentar decisiones, registrar aprendizajes y preparar la siguiente semana. Sin esto, las decisiones se evaporan y no hay materia prima para las evaluaciones trimestrales contra rúbricas.
- **Sesión de coaching externo PD ↔ Coach (60 min, quincenal).** Mientras dure la consultoría externa, este es el espacio donde se trabaja explícitamente el progreso contra las rúbricas, se identifican gaps y se acuerdan los siguientes pasos. Cuando termine la consultoría, este espacio puede convertirse en mentoría peer (con un diseñador externo de la red) o eliminarse.
- **Design Reviews del Marco de Desarrollo (D3, checkpoint 1 y 2).** Estos **no son rituales internos del playbook**: son gates obligatorios del Marco de Desarrollo. Se listan aquí solo para dejar claro que PD ya tiene dos momentos formales en cada Sprint donde presenta trabajo al equipo completo. El Design Review Deck (en Plantillas, §9) es la herramienta que PD usa para llegar preparado a estos checkpoints.

**Durante el Cooldown (1 semana)**

El Marco de Desarrollo especifica que durante el Cooldown PD dedica tiempo a *"revisión de deuda de diseño, actualización de componentes, preparación de insumos visuales para próximas iniciativas, recolección de nueva evidencia y entrega de insights a Data & Analytics"* (Marco de Desarrollo §2, el ciclo y la cadencia). Dentro de ese tiempo de Cooldown, la función de Diseño suma:

- **Design Critique informal (30–45 min, opcional).** Distinto al Design Review formal del Marco de Desarrollo. Aquí PD trae trabajo siempre en estado borrador a otros devs, Data & Analytics o al coach externo para recibir reacciones tempranas y recabar información sin presentación elaborada. La regla del crit: PD comparte el contexto, los demás hacen preguntas antes de dar opiniones, y al final cada quien comparte una observación concreta. Si no hay trabajo en borrador que valga la pena mostrar, se cancela. Detalle del proceso: Plantillas (§9).
- **Design Debt Review (30 min).** Última semana del ciclo (Cooldown). PD prioriza el backlog de Design Debt y acuerda qué entra al siguiente Cooldown. Detalle del proceso: Plantillas (§9).
- **Preparación de insumos para el próximo Opportunity Mapping.** Cuando el Cooldown en curso es el que precede al inicio del trimestre siguiente, PD consolida su evidencia (observaciones directas, tickets que ha visto, problemas de experiencia detectados en uso real) y la entrega a Data & Analytics antes del Opportunity Mapping.

**Rituales no-cíclicos (corren por trimestre)**

- **Evaluación formal contra rúbricas (60 min, una vez por trimestre).** Al cierre de cada trimestre, evaluación estructurada del progreso de PD contra las rúbricas de su nivel target. Es la entrada principal al PDP del siguiente trimestre. Se agenda para que caiga en el último Cooldown del trimestre, no a mitad de Sprint.
- **Review de métricas de la función de Diseño (45 min, una vez por trimestre).** PD + PM + coach externo. Revisar las métricas de la Parte 8 y el progreso contra rúbricas. También se agenda en el último Cooldown del trimestre.

**Total de tiempo en rituales propios**

~4–5 horas semanales por PD (incluyendo standup del equipo y 1:1). Eso es ~10–12% del tiempo. Si baja de 10% PD se desconecta; si sube de 20% deja de producir. Este número se monitorea.

### "Definition of Done" del diseño

Un diseño está listo para handoff a desarrollo cuando:

- [ ] Resuelve un problema documentado en un PRD aprobado (sub-página D1 del IS).
- [ ] Existe un Product Design Brief firmado (sub-página D2 del IS) que define las apuestas que se validaron.
- [ ] Existe un Reporte de Hallazgos publicado con veredicto por apuesta.
- [ ] Existe un Product Design Spec (sub-página D2 del IS) que recoge solo las apuestas que pasaron, como decisiones firmes.
- [ ] Pasa el filtro de los siete principios y si algún principio se violó, está justificado por escrito.
- [ ] Usa exclusivamente componentes del Design System o tiene excepciones documentadas como deuda.
- [ ] Tiene definidos los estados loading, empty, error y success.
- [ ] Considera responsive (mobile, tablet, desktop) según corresponda al contexto del producto.
- [ ] Tiene accesibilidad mínima validada (contraste, navegación por teclado, jerarquía semántica).
- [ ] Tiene un prototipo navegable que los devs pueden tocar.
- [ ] Pasó el Kick-off (D2→D3) y el Product Jam (gate D3) del Marco de Desarrollo.

Si alguno de estos puntos no se cumple, el diseño no está listo — por protección de calidad y de los devs que van a implementar. Los últimos cuatro puntos son del Marco de Desarrollo/Motor de Evidencia, en donde el PD los hace valer como parte de su Definition of Done interna.

### Deuda de diseño

La deuda de diseño es la deuda acumulada de inconsistencias visuales, patrones contradictorios, fricciones conocidas no resueltas, y sub-componentes desfasados del Design System. A diferencia de la deuda técnica (que vive en el backlog de Engineering), la deuda de diseño es invisible para el resto del equipo si PD no la nombra explícitamente.

**Cómo se gestiona.** PD mantiene un backlog vivo de Design Debt en la herramienta de gestión con tickets etiquetados como `design-debt`. Cualquier persona del equipo puede abrir un ticket debiendo tener: descripción concreta, donde se manifiesta (qué pantalla/flujo), impacto (alto/medio/bajo), y esfuerzo estimado.

**Cuándo se atiende.** Mensualmente, en el Design Debt Review del Cooldown (ver Plantillas, §9). PD prioriza 3-5 ítems para el siguiente Cooldown. La capacidad del Cooldown está acotada — atender más es aspiracional. Si la deuda de alto impacto crece de manera sostenida a lo largo de varios Cooldowns, PD lo levanta como Red Flag #5 en la siguiente Retrospectiva de Proceso del Marco de Desarrollo. Cada trimestre, al cierre, PD presenta un breve resumen (una página, parte del review trimestral de métricas de la función) de: cuántos tickets se pagaron, cuántos se acumularon, tendencia.

**Quién decide.** Para ítems de bajo/medio esfuerzo, PD decide y ejecuta. Para ítems de alto esfuerzo o que tocan otras áreas (Eng, copy, branding), va al Opportunity Mapping como cualquier otra iniciativa con su evidencia de impacto.

**Conexión con el Agentic Design System (Sistema de Diseño).** El pago disciplinado de deuda tiene una aliada estructural: el Agentic Design System (Parte 4). A medida que el DS madure y los auditores automáticos entren en CI, mucha de la deuda de diseño que hoy se detecta a ojo empezará a detectarse automáticamente en el momento en que se produce. El objetivo a mediano plazo es que la deuda deje de acumularse porque el sistema la previene, no porque PD corre más rápido pagándola.

## Cómo se conecta con la Tripa y la Cabeza

Cómo el método de Diseño se enchufa a las dos prácticas compartidas: alimenta el Motor de Evidencia (research) y respeta los controles y red flags del Marco de Desarrollo.

### Cómo entra el research

El research no es una actividad separada del trabajo de Diseño de Producto — es la práctica que valida o invalida las apuestas que el diseño hace. Esa práctica está formalizada en el **[Motor de Evidencia](#/cabeza)** (la Cabeza), que vive bajo el Marco de Desarrollo.

Esta sección describe **cómo PD se relaciona con el Motor de Evidencia**. El detalle metodológico vive en la Cabeza. Aquí solo el alto nivel.

**El rol de PD en research.** PD es el **facilitador del Motor de Evidencia** y dueño del proceso de investigación:

- Método cualitativo estructurado (concept tests, entrevistas, pruebas de usabilidad async).
- Redacción del Plan, Brief, Estrategia y Reporte de cada estudio.
- Conducción de sesiones moderadas.
- Síntesis de hallazgos en insights consumibles.
- Organiza la evidencia que aportan las demás áreas y la convierte en insights antes del Opportunity Mapping.

PD facilita el motor; las demás áreas aportan evidencia: Customer Success (señales cualitativas continuas, canal de voz del cliente), Data & Analytics (datos cuantitativos y triangulación), Ingeniería (viabilidad técnica) y el PM (defensa del rigor). Data & Analytics aporta la capa cuantitativa que sostiene la consolidación hacia el Opportunity Mapping.

**Cómo crece la competencia de research** — la práctica de research se profundiza con la evidencia de competencia. El vehículo es la **Dimensión 3 (Research & Evidence) de las rúbricas detalladas (§5.3)**:

- **PD I** — asiste a sesiones que otros conducen, aplica reportes previos.
- **PD II** — conduce entrevistas y tests bajo guía mínima, detecta su propio sesgo cuando alguien se lo señala.
- **Senior PD** — diseña estudios completos, sus reportes cambian decisiones del equipo.
- **Lead PD** — define la estrategia de research del producto, construye el músculo en otros equipos.

A medida que el equipo madura, PD puede ampliar su alcance como facilitador: diseñar Planes para otros equipos y enseñar técnicas a Customer Success y Data & Analytics.

**Cuándo entra el research a las 5Ds**

| Fase | Research que PD facilita o conduce | Documento que produce |
| --- | --- | --- |
| D1 · Discover | Evidencia cualitativa (entrevistas, análisis de tickets, observaciones directas) que PD facilita y consolida antes del Opportunity Mapping. | Hallazgos en sub-página D1 (PRD). |
| D2 · Design | Concept test del prototipo cuando la iniciativa lo requiere. | Reporte de Hallazgos anexo a sub-página D2 antes del Kick-off. |
| D3 · Develop | Prueba de usabilidad async cuando aplique, antes del Product Jam. | Reporte de Hallazgos en sub-página D3. |
| D4 · Deploy | Validación con beta users si la iniciativa lo requiere. | Notas de validación en Release Checklist. |
| D5 · Deliver | Lectura cualitativa al Impact Report. | Sección cualitativa del Impact Report. |

**No todas las iniciativas requieren research formal en cada fase.** El principio de la Cabeza — *"justo la investigación necesaria"* — aplica aquí: el research se asigna por iniciativa, no por checklist.

**Cuándo se ejecuta dentro del Sprint + Cooldown**

- **Cooldown** — PD redacta nuevos Planes, revisa hallazgos acumulados, prepara estudios para el siguiente Sprint, consolida insights con Data & Analytics.
- **Sprint** — PD ejecuta los estudios. Concept tests con prototipo, sesiones moderadas, análisis.

**Regla operativa:** los Planes se redactan en Cooldown y se ejecutan en el Sprint siguiente. Si un Plan se redacta a mitad de Sprint, casi siempre es señal de research solution-first (anti-patrón en la Cabeza, §9.1 (anti-patrones en la planeación)).

**Mitigación de sesgo cuando PD es facilitador y diseñador.** PD enfrenta un riesgo estructural: cuando facilita una sesión sobre un prototipo que él mismo diseñó, hay sesgo de confirmación natural. La Cabeza lo mitiga con tres mecanismos obligatorios:

1. **Observador silente** en cada sesión moderada (no es opcional).
2. **Análisis a ciegas** entre facilitador y observador post-sesiones.
3. **Revisión cruzada** del Reporte por un par antes de la presentación al equipo.

El detalle vive en la Cabeza, §5.3 (mitigación de sesgo) y §6.4 (análisis a ciegas). **PD que conduce research sin estos mecanismos corre el riesgo de validar prejuicios.**

**Métodos disponibles, anti-patrones y stack.** Todo el detalle metodológico vive en la Cabeza.

- **Métodos disponibles** → Cabeza §4 (métodos disponibles).
- **Anti-patrones a evitar** → Cabeza §9 (anti-patrones y red flags).
- **Stack de tools** → Cabeza §10 (stack de herramientas).
- **Conexión completa con el Marco de Desarrollo** → Cabeza §11 (conexión con el Marco de Desarrollo).

**Regla de paridad.** Cuando este Playbook y la Cabeza entren en conflicto:

- **Para metodología de research** → gana la Cabeza.
- **Para todo lo demás** → gana el Marco de Desarrollo.

Este Playbook es la vista desde Diseño de Producto. La Cabeza es la vista desde la práctica de research. El Marco de Desarrollo es la autoridad sobre ambos.

> ***En el equipo nos importa el valor y la relevancia del producto que construimos, por eso nos importa la validez y la utilidad del insight que incorporamos en él.***

[www.linkedin.com — Dr. Nick Fine](https://www.linkedin.com/posts/drnickfine_youre-building-something-right-now-that-activity-7448301467825942528-szi2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAK7vJsBOlCnfTUVgygJkE8iSZEUAWbhRUk)

### Red Flags y Protocolo de Urgencias: cómo los trata la función de Diseño

El Marco de Desarrollo tiene una lista de 15 Red Flags en su Sección 10 que el equipo monitorea. Las que tocan más directamente al Diseño:

**Red Flags relevantes para la función de Diseño.** El Marco de Desarrollo lista 15 síntomas de mal uso del framework. Varios son directamente relevantes para PD:

- **🚩 Red Flag #5 del Marco de Desarrollo:** *"La deuda técnica y de diseño están siempre fuera de scope."* Mitigación de Diseño: el Design Debt Review mensual del Cooldown (ver Deuda de diseño, §2.6) garantiza que la deuda de diseño tenga ventana propia y no compita por scope con features.
- **🚩 Red Flag #12 del Marco de Desarrollo:** *"Alguien va directo a otra área a solicitar cambios sin pasar por el proceso."* Mitigación de Diseño: PD redirige solicitudes que llegan fuera del Marco de Desarrollo al Opportunity Mapping. *"Esa idea es interesante, lleva-la al próximo OST."* No se acepta trabajo de diseño fuera de Initiative Spec.

**Protocolo de Urgencias y el rol de PD.** El Marco de Desarrollo, en su sección de Red Flags y Protocolo de Urgencias, define cuándo aplica este protocolo (criterios estrictos). Cuando aplica, PD puede saltar partes de la Definition of Done (ej. concept test) si el resto del equipo está alineado. Posteriormente se profundiza con un Post-mortem obligatorio en el siguiente Cooldown para evaluar si la urgencia era real o un proceso interno fallando.

---
