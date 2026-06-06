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

## 🧠 1 · Filosofía y principios

### 1.1 · La función de diseño

La función de diseño de producto existe para una sola cosa: **convertir problemas reales del negocio en soluciones validadas que los usuarios adopten y que muevan métricas.** Esa es la frase operativa.

**Lo que produce:** decisiones de diseño documentadas, prototipos validados, especificaciones que ingeniería puede implementar sin ambigüedad, evidencia de usuarios que informa el roadmap, y un design system que permite que la velocidad del equipo no caiga conforme el producto crece.

**Para quién produce:** en orden de prioridad, para los usuarios finales, para el PM y el equipo de producto (los stakeholders internos), para los desarrolladores (los implementadores), y para el liderazgo ejecutivo (los dueños del negocio). Cuando estos cuatro están alineados en un problema, el diseño tiene poder real. Cuando no lo están, el diseño es decoración.

**Cómo se mide:** por el progreso del individuo contra rúbricas de competencia (Parte 6) y por la salud de la función contra métricas cualitativas (Parte 8). No se mide por número de pantallas entregadas ni por horas en Figma. Si la métrica es fácil de manipular sin generar valor, no es la métrica correcta.

### 1.2 · Scientific Design: la postura de fondo

Antes de los principios concretos, una postura que los gobierna a todos. El Diseño en este sistema se practica como **scientific design** — diseñar es una práctica de conocimiento, no de gusto.

Esto no le quita el alma creativa al oficio; la equilibra. El diseño **inventa lo que debería ser** (la parte creativa, propositiva, que imagina soluciones que aún no existen); la ciencia **descubre lo que es** (la parte que observa, mide y valida contra la realidad). Un diseñador que solo inventa construye cosas hermosas que nadie pidió; uno que solo mide nunca propone nada nuevo. El craft vive en sostener ambas a la vez.

De ahí se desprende la postura del diseñador como **facilitador e investigador, no como gurú**. El diseñador no es el dueño de la verdad sobre el usuario — es quien la persigue con método. Por eso, en este sistema, Product Design facilita el [Motor de Evidencia](#/cabeza): no porque "sepa más", sino porque su oficio es justamente convertir ideas en hipótesis y ponerlas a prueba. *(Estas ideas recogen el scientific design de Dr. Nick Fine.)*

### 1.2.1 · Los siete principios fundacionales

Estos siete principios son la brújula. Cuando una decisión es difícil y no hay tiempo de consultar al manager, el diseñador debe poder volver a estos principios y derivar la respuesta.

#### Resolver por significado, no por estética

El trabajo del diseño es atender necesidades humanas reales. El impacto se mide por utilidad y por cuánto facilita la vida del usuario, no por cuán bonita queda la pantalla. Una pantalla fea que resuelve el problema correcto vence siempre a una pantalla bella que resuelve el problema equivocado.

#### Liderar haciendo, con evidencia

La influencia del diseño viene de la acción, no del título. Mostrar el trabajo, compartir el pensamiento detrás, e invitar a los demás. La opinión personal pesa menos que un prototipo probado con tres usuarios reales.

#### Balancear fricción y foco

El gran trabajo de diseño combina colaboración abierta con momentos de trabajo individual profundo. Ni puro consenso (que diluye), ni puro lobo solitario (que se desconecta). El playbook está diseñado para crear ese balance.

#### Cuidar la ejecución (craft con rigor)

Que se vea bien y que funcione bien no son negociables. La calidad de ejecución es un acto de respeto: hacia el usuario, hacia los compañeros que van a implementar el trabajo, y hacia el propio oficio. El descuido se nota y erosiona confianza.

#### Aprovechar las restricciones

El diseño excepcional no espera condiciones ideales. La ambigüedad, los recursos limitados, las restricciones técnicas y el caos organizacional son materia prima, no excusas. Cuando hay restricciones reales —una función de diseño pequeña, capacidad de ingeniería acotada, mucha carga de mantenimiento— este playbook las trata como punto de partida, no como obstáculo.

#### Hablar de impacto

El diseño se gana confianza cuando conecta con metas de negocio, realidades técnicas y tiempos del mercado. Hablar en términos de pantallas, componentes y pixeles a un Liderazgo es perder la audiencia. Hablar en términos de retención, adopción, ingreso y costo es hablar el idioma que importa.

#### Dejar que la evidencia guíe

Construir para aprender. Observar antes que opinar. Cada hipótesis es una pregunta abierta hasta que los datos la cierran.

### 1.3 · Postura frente a la IA: no es opcional

**Dominar herramientas de IA es competencia de nivel** y una de las seis dimensiones evaluadas en las rúbricas de la Parte 6 (AI Fluency & Systems Thinking). Eso significa que un diseñador en el equipo no puede progresar de Designer II a Senior sin demostrar fluidez con IA.

La razón es estructural: el equipo es chico, el producto es complejo, y el ritmo del mercado no perdona. Un diseñador con IA puede producir con mayor calidad y puede *codificar* decisiones en un sistema que las ejecuta correctamente sin él en la sala (esta es la tesis del Agentic Design System de la Parte 4). Sin IA, la validación del diseño es lo primero que se cortaba en favor de producir y lanzar. Con IA bien usada, el diseñador puede invertir el tiempo que se ahorra al producir en validar las soluciones.

Esta postura aplica a todos los miembros presentes y futuros de la función de diseño en el equipo. Si en algún momento un diseñador en el equipo no está cómodo con esta dirección, ese gap es un foco legítimo de un PDP individual y debe trabajarse activamente, no esquivarse.

### 1.4 · Cómo tomamos decisiones: calidad de decisión vs. calidad de resultado

Una de las lecciones más útiles de la disciplina de evaluación de equipos creativos viene de Mike Davidson (ex-Head of Design en Twitter), y la adoptamos aquí explícitamente: **se evalúa la calidad de la decisión, no la calidad del resultado**.

La diferencia importa. El desarrollo de producto es más parecido al póker que al ajedrez: en el ajedrez, el mejor jugador gana 100 de 100 partidas; en el póker, el mejor jugador pierde con frecuencia. La diferencia entre buenos y malos jugadores de póker no son los resultados de partidas individuales (donde la suerte tiene mucho peso), sino la calidad consistente de las decisiones a lo largo del tiempo.

Aplicado al diseño en el equipo: si un diseñador toma la mejor decisión posible con la información disponible y el resultado falla por algo que estaba fuera de su control (cambio de prioridades, problema técnico, evento de mercado), eso no debe contar en su contra. Si toma una mala decisión y el resultado sale bien por suerte, eso tampoco debe contar a su favor. Lo que evaluamos es: ¿buscó la información correcta?, ¿consideró las alternativas?, ¿documentó el razonamiento?, ¿involucró a quien debía involucrar?, ¿aprendió del resultado independientemente de si fue bueno o malo?

Esto protege a los diseñadores de ser castigados por contextos que no controlan, y eleva el estándar de cómo se toman decisiones, no solo de cuáles resultan bien.

### 1.5 · Los cinco no-negociables

Hay cosas que en la función de Diseño del equipo no se discuten. El Marco de Desarrollo ya establece los **controles entre fases** (D1→D2, D2→D3, D3→D4, D4→D5) y los rituales que los enforzan. Estos cinco no-negociables son la **lectura desde la función de Diseño** de esos controles, más los que el Marco de Desarrollo no cubre explícitamente porque son propios de la disciplina.

#### Ningún diseño parte sin un PRD aprobado.

Es el Control D1→D2 del Marco de Desarrollo ("No se diseña nada sin evidencia"). Si el problema no está documentado en la sub-página D1 del Initiative Spec y aprobado por PM, PD no abre Figma. Si no hay PRD, el siguiente paso es escribir uno, no diseñar.

#### Ningún handoff a desarrollo sin pasar el Kick-off y el Product Jam.

Es el Control D2→D3 del Marco de Desarrollo. El Kick-off requiere los cuatro artefactos de D2 publicados (Product Design Brief, Reporte de Hallazgos, RFC y Product Design Spec). El Product Jam (gate D3) es donde PD presenta los diseños finales a ingeniería. Sin estos dos gates, el diseño no pasa a construcción.

#### Evidencia antes que opinión.

Cuando hay desacuerdo sobre una decisión de diseño y nadie tiene datos, la siguiente acción es ir a buscar evidencia. Puede ser una entrevista, un test de Maze, una mirada a analytics, una revisión de tickets. Nunca es "yo sé porque llevo más tiempo en esto". Esto es la lectura de Diseño del principio causal del Marco de Desarrollo — sin evidencia, nada sube al OST; sin OST, no hay Outcome; sin Outcome, no hay decisión de producto legítima.

#### Todo lo que ingeniería implementa debe ser un componente del Design System o estar en proceso de serlo.

Este es el no-negociable que el Marco de Desarrollo no cubre explícitamente porque es propio de la disciplina. Nada se hardcodea como excepción permanente. Si se hace una excepción, se documenta como deuda de diseño y entra al backlog del DS (ver Parte 3.6). Esto previene el drift que mata sistemas.

#### Product Design es responsable del output que sale a producción, no solo del diseño entregado en Figma.

Esto está alineado con la RACI del Marco de Desarrollo: en D3 PD está en los dos Design Reviews (checkpoint de mitad y cierre de Sprint), y en D4 PD tiene responsabilidad "R" de verificar que la implementación final respete el estándar de diseño. Si lo que sale a producción no corresponde a lo diseñado, PD debe trazarlo, entender por qué y arreglarlo — no aceptarlo como fatalidad.

Estos cinco no-negociables no se votan. Si un equipo nuevo o un hire futuro no los acepta, no es match con la función de diseño en el equipo.

---

## ⚙️ 2 · El método de Diseño de Producto

El método de la disciplina de Diseño, organizado con la misma estructura que el método de Ingeniería (X-Workflow) — inspiración, no molde rígido. La filosofía y los principios viven en la sección 1; aquí está cómo se trabaja una pieza de diseño de principio a fin.

### El ciclo: cómo se recorre el diseño

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

#### Relación con los controles entre fases

El Marco de Desarrollo define controles formales entre fases que funcionan como gates. Los que tocan a PD:

- **Control D1→D2:** *"No se diseña nada sin evidencia."* Sin PRD aprobado, ni siquiera vale la pena escribir el Product Design Brief.
- **Control D2→D3:** Kick-off + Product Jam. La cadena es estricta: el Product Design Brief firmado dispara el research; el Reporte de Hallazgos publicado dispara el Product Design Spec; el Spec con el RFC se aprueban en el Kick-off. Los cuatro artefactos (Brief, Reporte, RFC, Spec) deben estar publicados en la sub-página D2 antes del Kick-off.
- **Control D3→D4:** Design Review doble. PD actúa como guardián de la calidad de implementación.
- **Control D4→D5:** *"El Done real se alcanza cuando los datos confirman el JTBD."* PD declara done cuando la evidencia valida la hipótesis, no cuando entrega el diseño.

### El artefacto central: el Brief y el Design Spec

El Marco de Desarrollo define el **Initiative Spec** como el documento vivo de cada iniciativa. La mayoría del trabajo documental de PD vive dentro del Initiative Spec y no en documentos paralelos.

Los artefactos de PD se dividen en tres grupos: **(a)** los que viven dentro del Initiative Spec, **(b)** los documentos de research que viven bajo el Motor de Evidencia, y **(c)** herramientas internas de la función de Diseño de Producto.

#### (a) Artefactos dentro del Initiative Spec (responsabilidad de PD)

**1. PRD → sub-página D1.** PD aporta evidencia directa al PRD. Los hallazgos se entregan a Data & Analytics antes del Opportunity Mapping. PD no es autor — es contribuyente de evidencia.

**2. Product Design Brief → sub-página D2, apertura.** El documento estratégico de diseño. Se escribe al abrir D2, antes que cualquier otro artefacto de la fase. Define cómo abordar el problema del PRD, traduce sus aristas a lenguaje de diseño, declara las apuestas de diseño que el research debe validar, captura principios, tensiones y riesgos UX. Es la brújula del proceso de diseño: cuando aparezcan decisiones difíciles, el Brief es el papel al que se vuelve. PD es autor único. Sin Brief firmado, no se redacta el Plan de Investigación. Template en Plantillas (§9).

**3. Product Design Spec → sub-página D2, cierre.** El documento operativo de handoff a Ingeniería. Se escribe después del Reporte de Hallazgos del research, no antes. Recoge solo las apuestas que pasaron el research como decisiones firmes; las que no pasaron reabren el Brief. Define entidades, máquina de estados, flujos finales, reglas, edge cases, accesibilidad, componentes, copy. Template en Plantillas (§9).

**3. Sección 3 (Design Review) del Release Checklist → sub-página D4.** PD documenta los dos Design Reviews y verifica que la implementación final respete el estándar.

**4. Input al Impact Report → sub-página D5.** PD aporta lectura cualitativa al Impact Report que consolida Data & Analytics.

Para PRD, Release Checklist e Impact Report no hay template paralelo en este playbook: viven en el Marco de Desarrollo o en la plantilla oficial del Initiative Spec en la herramienta de gestión. Para Brief y Spec, el template vive en Plantillas (§9) de este playbook.

#### (b) Documentos de research (viven bajo el Motor de Evidencia)

El research que PD conduce produce cuatro documentos. **Todos viven bajo el Motor de Evidencia, no bajo este Playbook.**

| Documento | Para qué sirve | Cuándo se usa |
| --- | --- | --- |
| 📋 Plan de Investigación | Documento padre. Cubre objetivo, metodología, reclutamiento, logística, criterios de éxito. | Se redacta en Cooldown. Sin Plan firmado, no hay estudio. |
| 📋 Brief de Investigación | Anexo del Plan. Pieza operativa de sesión: guion, escenarios scripted, prompts, plantilla de notas. | Antes de cada test individual dentro del Plan. |
| 📋 Estrategia de Análisis | Cómo se procesa el dato post-sesiones. 4 pasos: revisar, codificar, encontrar temáticas, insights. | Apenas se cierra la ejecución. |
| 📋 Reporte de Hallazgos | Output final. Veredicto explícito por apuesta (PASA/AMBIGUO/NO PASA) + global (🟢/🟡/🔴). | Se anexa a sub-página D2 antes del Kick-off, o D3 antes del Product Jam. |

**Análisis a ciegas obligatorio** cuando PD facilitó las sesiones del estudio que también diseñó. Detalle: Motor de Evidencia, §6.4 (análisis a ciegas).

#### (c) Herramientas internas de la función de Diseño

**Design Review Deck (5 slides).** Para los dos Design Reviews del Marco de Desarrollo (checkpoint 1 y 2 en D3) y critiques internos. Estructura fija: (1) el problema, (2) los principios aplicados, (3) la solución propuesta, (4) las decisiones difíciles y por qué, (5) lo que necesito del equipo. Cinco slides, máximo 10 min de presentación, 30 min de discusión. Template en Plantillas (§9).

#### Lo que NO es artefacto formal

- **Wireframes.** Herramientas internas, no entregable.
- **Moodboards.** Consumen tiempo y rara vez informan decisiones.
- **Librerías de inspiración.** Viven en Figma o en una nota personal.
- **"One-pagers de decisión" paralelos.** Todo lo que es decisión de diseño vive en el Design Spec.
- **"Handoff Checklists" paralelas.** El handoff está formalizado en los Design Reviews del Marco de Desarrollo y en la Sección 3 del Release Checklist.
- **Briefs de research separados del Motor de Evidencia.** Ningún documento de research vive fuera del Motor de Evidencia.

### La capa operativa

Las mecánicas y herramientas del día a día del Diseño: sus rituales, su Definition of Done y la gestión de la deuda de diseño. El **Sistema de Diseño** (sección 3) y el **stack** (sección 4) también son parte de esta capa operativa.

#### Los rituales de diseño

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

#### "Definition of Done" del diseño

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

#### Deuda de diseño

La deuda de diseño es la deuda acumulada de inconsistencias visuales, patrones contradictorios, fricciones conocidas no resueltas, y sub-componentes desfasados del Design System. A diferencia de la deuda técnica (que vive en el backlog de Engineering), la deuda de diseño es invisible para el resto del equipo si PD no la nombra explícitamente.

**Cómo se gestiona.** PD mantiene un backlog vivo de Design Debt en la herramienta de gestión con tickets etiquetados como `design-debt`. Cualquier persona del equipo puede abrir un ticket debiendo tener: descripción concreta, donde se manifiesta (qué pantalla/flujo), impacto (alto/medio/bajo), y esfuerzo estimado.

**Cuándo se atiende.** Mensualmente, en el Design Debt Review del Cooldown (ver Plantillas, §9). PD prioriza 3-5 ítems para el siguiente Cooldown. La capacidad del Cooldown está acotada — atender más es aspiracional. Si la deuda de alto impacto crece de manera sostenida a lo largo de varios Cooldowns, PD lo levanta como Red Flag #5 en la siguiente Retrospectiva de Proceso del Marco de Desarrollo. Cada trimestre, al cierre, PD presenta un breve resumen (una página, parte del review trimestral de métricas de la función) de: cuántos tickets se pagaron, cuántos se acumularon, tendencia.

**Quién decide.** Para ítems de bajo/medio esfuerzo, PD decide y ejecuta. Para ítems de alto esfuerzo o que tocan otras áreas (Eng, copy, branding), va al Opportunity Mapping como cualquier otra iniciativa con su evidencia de impacto.

**Conexión con el Agentic Design System (Sistema de Diseño).** El pago disciplinado de deuda tiene una aliada estructural: el Agentic Design System (Parte 4). A medida que el DS madure y los auditores automáticos entren en CI, mucha de la deuda de diseño que hoy se detecta a ojo empezará a detectarse automáticamente en el momento en que se produce. El objetivo a mediano plazo es que la deuda deje de acumularse porque el sistema la previene, no porque PD corre más rápido pagándola.

### Cómo se conecta con la Tripa y la Cabeza

Cómo el método de Diseño se enchufa a las dos prácticas compartidas: alimenta el Motor de Evidencia (research) y respeta los controles y red flags del Marco de Desarrollo.

#### Cómo entra el research

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

#### Red Flags y Protocolo de Urgencias: cómo los trata la función de Diseño

El Marco de Desarrollo tiene una lista de 15 Red Flags en su Sección 10 que el equipo monitorea. Las que tocan más directamente al Diseño:

**Red Flags relevantes para la función de Diseño.** El Marco de Desarrollo lista 15 síntomas de mal uso del framework. Varios son directamente relevantes para PD:

- **🚩 Red Flag #5 del Marco de Desarrollo:** *"La deuda técnica y de diseño están siempre fuera de scope."* Mitigación de Diseño: el Design Debt Review mensual del Cooldown (ver Deuda de diseño, §2.6) garantiza que la deuda de diseño tenga ventana propia y no compita por scope con features.
- **🚩 Red Flag #12 del Marco de Desarrollo:** *"Alguien va directo a otra área a solicitar cambios sin pasar por el proceso."* Mitigación de Diseño: PD redirige solicitudes que llegan fuera del Marco de Desarrollo al Opportunity Mapping. *"Esa idea es interesante, lleva-la al próximo OST."* No se acepta trabajo de diseño fuera de Initiative Spec.

**Protocolo de Urgencias y el rol de PD.** El Marco de Desarrollo, en su sección de Red Flags y Protocolo de Urgencias, define cuándo aplica este protocolo (criterios estrictos). Cuando aplica, PD puede saltar partes de la Definition of Done (ej. concept test) si el resto del equipo está alineado. Posteriormente se profundiza con un Post-mortem obligatorio en el siguiente Cooldown para evaluar si la urgencia era real o un proceso interno fallando.

---

## 🤖 3 · Agentic Design System (Sistema de Diseño)

Esta sección sintetiza la serie *Towards an Agentic Design System* de Cristian Morales Achiardi en un método aplicable a cualquier equipo. Los conceptos centrales — el protocolo ARC, las 3 capas de retrieval, la distinción linter vs governance, el rol del diseñador como *designer of environments* — son **independientes de la librería de componentes** que uses. El método es el abordaje principal tanto para un diseñador en solitario como para un equipo formado: en ambos casos, lo que buscas es consistencia y trabajo sistematizado.

> **El enfoque es library-agnostic.** A lo largo de esta sección se usa **Mantine** como ejemplo trabajado, porque es una librería madura, con buena suite de componentes y un camino claro hacia lo *AI-ready*. Pero el mismo método aplica si tu equipo construye sobre shadcn/Radix, MUI, Chakra, o una librería propia. Donde el texto diga "Mantine", léelo como "tu librería de componentes" y traduce las particularidades técnicas a tu stack. Lo que no cambia es el método: codificar decisiones como reglas ejecutables, auditarlas y gobernarlas.

### 3.1 · El cambio de rol que este DS exige

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

### 3.2 · Cómo se relaciona con el Marco de Desarrollo

El **arranque** del Sistema de Diseño Agéntico entra al Marco de Desarrollo como **iniciativa formal**, no como trabajo paralelo:

- Tiene su propio Initiative Spec con sub-páginas por fase: D1 (PRD de la brecha diseño↔código), D2 (RFC técnico + Design Spec), D3 (construcción), D4 (release interno con cobertura mínima), D5 (Impact Report midiendo si la brecha cerró).
- Compite por capacidad con otras iniciativas del trimestre. Entra al OST por la puerta normal: Opportunity Mapping, el PM decide.
- Hipótesis causal: *"Creemos que la brecha actual entre diseño y código impide que ingeniería construya features con consistencia sin intervención constante de PD. Si construimos un Agentic Design System, la coherencia del sistema dejará de depender del ancho de banda de PD y la velocidad del equipo crecerá sin comprometer calidad."*

La **evolución posterior** del Sistema de Diseño (componentes nuevos, refactors, retires, iteraciones de gobernanza) vive **fuera del Marco de Desarrollo como infraestructura transversal**: se atiende en los Cooldowns dentro del tiempo que el marco ya asigna a PD para *"actualización de componentes"*. Solo si hay un cambio estructural grande que requiera capacidad de Sprint, vuelve a tratarse como iniciativa formal.

### 3.3 · Por qué Agentic, por qué Mantine

#### El problema que resuelve

Un design system tradicional documenta decisiones en archivos que un humano debe leer, interpretar y aplicar correctamente cada vez. Funciona con equipos de diseño grandes dedicados a evangelizarlo, revisarlo y reforzar adopción. **Muchos equipos no tienen ese equipo de diseño dedicado y no lo van a tener en el horizonte cercano.**

Un Agentic Design System codifica las decisiones de diseño como **reglas ejecutables que un agente de IA consume, audita y hace cumplir automáticamente**. La diferencia clave con un DS tradicional son tres cosas:

1. **Los componentes traen metadata estructurada que la IA entiende**, no solo narrativa que un humano interpreta.
2. **Los tokens viven como contratos** que un auditor puede validar — y el auditor valida intención semántica, no solo sintaxis.
3. **Las relaciones entre componentes están en un índice** que la IA carga en una sola operación, en lugar de descubrir por sí misma.

Resultado: cuando un dev (o PD) construye algo nuevo con asistencia de IA, el sistema le guía al componente correcto, le advierte cuando viola un patrón, y deja trazabilidad de las decisiones. **PD mantiene coherencia con todo el equipo de ingeniería sin ser cuello de botella.**

#### El costo de no hacerlo

La decisión es construir el sistema *AI-Ready* sobre [**Mantine.dev**](http://Mantine.dev), no crear un DS propio desde cero. Cuatro razones:

1. **Es la librería que ingeniería ya usa.** Capitaliza el esfuerzo invertido en reemplazar clases CSS dispersas por componentes Mantine.
2. **Suite high-level amplia sin requerir un compilador propio.** Forms, dates, notifications, spotlight, modals manager, charts — todo viene out-of-the-box. La alternativa principal en el espacio (Tamagui) es excelente para multiplataforma React Native + web y tiene su propia API de tokens potente, pero **requiere su compilador optimizador como parte del build** y opera con una API más opinionada (`$1`, `$gtSm`, `styled()`). Para un equipo pequeño, sólo web, donde la fricción de build es un costo real, Mantine reduce el overhead operativo.
3. **Múltiples ejes documentados de extensión.** Cinco vectores estables y públicos (ver más abajo, en Las 3 capas del sistema) que escalan desde uso directo hasta design systems propios sin requerir forks de código.
4. **Su sistema de tokens y theming es técnicamente apto para un pipeline DTCG + Style Dictionary**, aunque no es soporte nativo (ver más abajo). Es base viable para el enfoque agentic, con fricciones técnicas que conviene documentar.
5. **Mantenimiento activo, AI-ready oficial, comunidad activa.** Mantine v8.3+ publica oficialmente: manifest MCP ([`mantine.dev/mcp`](http://mantine.dev/mcp) con ~130 componentes), un MCP server oficial (`@mantine/mcp-server`), skills oficiales para Claude Code (`mantinedev/skills`), y `llms.txt` auto-regenerado en cada release. Esto **reduce significativamente el trabajo "Phase 0/1" que el playbook de Morales asume tener que construir desde cero**.
6. **Construir un DS propio desde cero sería suicidio operativo**: meses de desarrollo frontend, equipo no preparado para esa disrupción sin descuidar la migración a Next.js, bajo ROI a corto plazo. El problema actual del usuario no es estética única, es usabilidad y flujos operativos.

#### Los 5 ejes de extensión de Mantine v8

Cada componente Mantine expone cinco vectores de extensión coordinados como API pública estable:

1. **Métodos estáticos `.extend()` y `.withProps()`** — cada componente tiene `Button.extend({ defaultProps, classNames, styles, vars, attributes })` para crear versiones preconfiguradas integradas al theme.
2. **Styles API con sub-selectores publicados** — `Button.classes.root`, `Button.classes.label`, etc. son contrato versionado.
3. **CSS variables propias por componente** — `--button-height-md`, `--button-padding`, etc. específicamente expuestas para override.
4. **Factory functions tipadas** — `factory<>()`, `polymorphicFactory<>()`, `genericFactory<>()` como APIs públicas con tipos `Factory<{ props, ref, stylesNames, vars, variant, staticComponents }>` formalmente declarados.
5. **HeadlessMantineProvider y prop `unstyled`** — permiten desactivar los estilos completamente cuando se necesita comportamiento sin opinión visual.

Esto significa que el contrato de extensión es **mecanizable**. Para crear wrappers tipados, los patrones documentados son: `polymorphic<'button', CustomProps>(Component)` para wrappers que conservan polimorfismo, o composición `ButtonProps & ElementProps<'a', keyof ButtonProps>` para wrappers no-polimórficos. Para defaults globales: `theme.components.Button = Button.extend({...})`.

#### Fricciones técnicas del pipeline DTCG + Style Dictionary

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

#### Limitaciones de Mantine que el playbook acepta

Cinco limitaciones que conviene documentar como supuestos aceptados:

1. **Bundle size.** Un dashboard típico con Mantine pesa ~130–160KB gzipped vs ~80–120KB con shadcn + libs sueltas. Para un SaaS B2B/B2B2C autenticado es aceptable; para landings públicas con foco en Core Web Vitals, sería una mala elección. En ese caso **no conviene usar Mantine para landings de marketing** — esa decisión cae naturalmente porque las landings probablemente vivan en otro repo/stack.
2. **Incompatibilidad con React Server Components.** Cita textual de la doc oficial: *"Mantine components cannot be used as server components. Entry points of all `@mantine/*` packages have the 'use client'; directive at the top."* Si el equipo planea aprovechar RSC para reducir bundle de cliente o streaming, Mantine no es buen fit para esos casos. Para dashboards autenticados (un uso típico de productos B2B2C), el tradeoff es aceptable.
3. **Bus factor 1.** Mantine es mantenido principalmente por una sola persona (Vitaly Rtishchev), con presupuesto comunitario modesto (~$19K/año en OpenCollective). Funciona consistentemente desde 2021 como side-project pero introduce riesgo concentrado. **Plan de contingencia:** la capa propia (`@ui/components`) debe estar construida sobre Styles API + tokens propios suficientemente como para que un eventual fork o migración no requiera reescribir UI a fondo.
4. **Breaking changes anuales recurrentes.** v6→v7 fue masivo (Emotion → CSS Modules); v7→v8 cambió `@mantine/dates` de Date a string y eliminó timezone support; v8→v9 requiere React 19+. Esto requiere visual regression testing (Chromatic/Playwright) + pinning estricto de versión. **Mitigación:** activar Chromatic como disparador de la auditoría del Sistema de Diseño (protocolo ARC, §3.6).
5. **No hay React Native support** ni está planeado. Si en el futuro el equipo necesita una app nativa, **Mantine no es la ruta** — habría que evaluar Tamagui u otra base. Por ahora, no es restricción operativa.

#### La costura DesignOps / DevOps

DesignOps se preocupa por que las decisiones de diseño sean correctas y comuniquen la intención correcta. DevOps se preocupa por que el código compile, los builds estén limpios y los componentes rendericen sin errores.

**El Agentic DS opera en la costura entre ambos.** La distinción está en la pregunta: *¿esto codifica una decisión de diseño o ejecuta una decisión técnica?* La respuesta resuelve dónde vive cada pieza.

**La distinción crítica: linter vs governance.**

- **Linter** (DevOps): *"¿Este token existe?"* Checks sintaxis. *"¿`var(--color-blue-500)` resuelve a algo?"*
- **Governance** (DesignOps): *"¿Este token expresa la intención correcta?"* Checks intent. *"¿Estamos usando `--foreground-muted` para body copy? Eso no es un token faltante — es la posición incorrecta en la jerarquía."*

Un token auditor v1 chequea existencia. Un token auditor v2 chequea intención. En el Guide, Morales documenta el salto v1 → v2 de su propio auditor en Enara: pasó de detectar 43 a 64 violaciones porque empezó a entender que componentes donde cada token individual era válido podían violar las **reglas de relación entre tokens** (jerarquía visual, secuencia de foreground, coherencia elevación-tamaño).

El equipo arranca con v1 (Fase 2) y avanza a v2 (Fase 3).

**Propiedad compartida:** diseño es dueño de las decisiones codificadas; ingeniería es dueña de la infraestructura que las ejecuta. Ninguno opera el sistema solo.

### 3.4 · Las 3 capas del sistema · WHAT/WHERE · HOW/WHY · SELECTION

Esta es la arquitectura conceptual del Agentic DS. Tres capas, cada una con un propósito distinto. Cuando la IA pregunta *"¿qué componente uso para X?"*, las tres se consultan en este orden.

#### Layer 1 · Index — WHAT / WHERE

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

#### Layer 2 · Metadata — HOW / WHY

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

#### Layer 3 · Reasoning — SELECTION LOGIC

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

### 3.5 · Skills · Rules · Instructions — Arquitectura de instrucción

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

### 3.6 · El protocolo ARC — Audit · Report · Compose

Las 3 fases de capacidad del sistema, en orden de madurez. Cada fase es prerequisito de la siguiente.

#### Fase 1 · Audit · El consumidor

**Status en el Guide:** validado. La IA lee tu DS con 100% de precisión y cero falsos negativos. **Valor:** búsqueda de componentes ×2.5 más rápida, precisión completa.

La infraestructura convierte exploración caótica del codebase en **queries deterministas**. Pregúntale al sistema *"¿qué componente para X?"* y elige el correcto entre los que existen en lugar de inventar.

#### Fase 2 · Report · El mantenedor

**Status en el Guide:** validado. La IA analiza patrones, identifica deuda técnica, sugiere mejoras arquitectónicas. **No solo cuenta — razona. Valor:** governance automática. Captura patrones que humanos pierden (Shadow DOM, dependencias no usadas, tendencias de adopción).

Aquí la economía cambia completamente. La governance pasa de *"impuesto caro que no podemos costear"* a *"subproducto que obtenemos casi gratis"*:

- **Auditorías sobre demanda:** correr reportes cuando se quiera, no una vez por trimestre.
- **Costo:** unos centavos de dólar por análisis comprensivo (costo de API del modelo).
- **Consistencia:** misma metodología cada vez, sin varianza.
- **Profundidad:** captura patrones que humanos pierden.

#### Fase 3 · Compose · El gobernador

**Status en el Guide:** the future (en construcción en Enara). La IA detecta drift, genera fixes, mantiene el sistema sin intervención manual. **Cuando el reporte identifica drift, no solo lo flag — crea el fix. Valor:** infraestructura self-healing.

No es autonomía total — PD sigue decidiendo qué reglas codificar, qué gaps llenar, qué patrones significan algo. Pero la ejecución no requiere a PD.

> *"La gente que habla de Agentic Design Systems como dirección futura está describiendo algo que ya está corriendo. La brecha entre 'sintácticamente válido' y 'semánticamente correcto' (entre código que funciona y código que pertenece) es donde las decisiones de diseño se sostienen o disuelven con el tiempo."* (Morales, Part 6)

### 3.7 · Definiciones de severidad — el reporte de auditoría

El reporte que el token auditor produce no es binario (pasa/falla). Tiene severities:

| Severidad | Qué significa | Ejemplo |
| --- | --- | --- |
| 🔴 Crítica | Token phantom (no existe en el sistema) o token primitivo usado directamente saltándose la capa semántica | `--color-blue-500` referenciado en componente · `--background-brand-subtle` que no existe como palette |
| 🟡 Alerta | Token existe pero su uso viola la intención de la jerarquía | `--foreground-muted` para body copy · mismatches tipográficos (font-size/line-height que no siguen text-style composites) |
| 🔵 Info | Observación para revisar pero no bloquea | Coherencia elevación-tamaño · uso de background-layer-intent |

Cada violación reporta: archivo, línea, regla violada, severity, sugerencia de fix.

### 3.8 · Roadmap de implementación (4 fases, ~6 meses)

El roadmap está diseñado para que **cada fase entregue valor por sí misma**, no como proyecto monolítico que solo se usa al final. Si el equipo pausa después de cualquier fase, ya tiene un beneficio tangible. El roadmap fue redimensionado de 4 a 5 fases para incorporar el aprovechamiento del MCP oficial de Mantine, descubierto durante la validación técnica.

#### Fase 0 · Fundaciones — monorepo, tokens y Figma · 4–6 semanas

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

#### Fase 0.5 · Aprovechar el MCP oficial de Mantine · 1–2 semanas

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

#### Fase 1 · Audit · El consumidor · 3–5 semanas

**Objetivo.** Hacer el DS del equipo legible por agentes de IA. La IA lee el sistema con 100% de precisión, combinando el MCP oficial de Mantine + nuestra capa semántica.

**Output.**

- **Layer 1 (Index):** skill `/codebase-index` corriendo. Mapa de relaciones generado automáticamente en formato TOON.
- **Layer 2 (Metadata):** schema "Why" completo aplicado a todos los wrappers de `@ui/components`. Header optimizado para scan rápido.
- **Layer 3 (Reasoning):** rules para deep tracing, cycle detection, atomic design hierarchy.
- Skill `/component-metadata` para generar y validar metadata de nuevos componentes.
- Skill `/ds-composer` funcional: pídele *"construye un formulario de pago"* y elige correctamente entre componentes existentes consultando ambas capas (Mantine + el equipo).
- MCP custom del equipo que expone la capa semántica propia, complementario al `@mantine/mcp-server` oficial.

**Valor por sí solo.** Velocidad de búsqueda de componentes ×2.5. Precisión completa en consultas. Decisiones contextuales al dominio tianguis, no solo a la librería UI.

#### Fase 2 · Report v1 · El mantenedor · 4–6 semanas

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

#### Fase 3 · Report v2 + Compose · El gobernador · 6–8 semanas

**Objetivo.** Token auditor v2 (governance, no solo linter) + capacidades de compose.

**Output.**

- **Token auditor v2 (governance):** chequea **intención**, no solo existencia. Reglas codificadas como DSL propio + LLM en loop: jerarquía visual, secuencia de foreground, patrones de system feedback, coherencia elevación-tamaño.
- Empaquetado como Claude Skill (`.claude/skills/token-auditor/` con [`SKILL.md`](http://SKILL.md)).
- Auditors integrados a CI/CD: bloqueo automático en PR cuando viola anti-patterns o composition.parentConstraints.
- Trazabilidad: cuando un PR es rechazado, el reporte cita la regla específica del metadata que lo violó.
- Reportes de drift que se generan solos y se publican en el canal de Diseño semanalmente.
- Primer fix automático del sistema (proof of concept de Compose).

**Valor por sí solo.** *"Agentic"* deja de ser aspiracional y se vuelve preciso. El sistema se auto-gobierna.

### 3.9 · Métricas del Sistema de Diseño

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

## 🧰 4 · Stack de herramientas

### 4.1 · Filosofía de tooling

Tres reglas que aplican a cualquier herramienta que entra al stack:

1. **Mínimo viable.** Si una herramienta nueva no resuelve un problema concreto que las herramientas actuales no pueden resolver, no entra. La fricción de aprender una nueva tool y mantenerla cuesta tiempo real.
2. **AI-first.** Cuando dos opciones son equivalentes en funcionalidad, gana la que tiene mejores capacidades de IA o mejor integración con el flujo de IA. La eficiencia por persona depende cada vez más de esto.
3. **Redundancia cero.** No tenemos dos herramientas que hacen lo mismo. Si una tool nueva solapa con una existente en más de 50%, una de las dos sale.

### 4.2 · Stack por categoría

#### Modelos de IA

- **Claude Pro / Claude Max.** El motor principal de razonamiento. **Pro** para uso diario del equipo de Diseño; **Max** para quien lidere la construcción del Agentic DS (volumen de skills y context loading lo requiere).
- **Gemini Pro.** Gratis con cuenta Google Workspace. Motor complementario.
- **NotebookLM.** Gratis con Google Workspace. Para sintetizar grandes volúmenes de transcripciones, reportes previos, conversaciones con clientes.
- **Granola AI (opcional).** Captura y transcripción de entrevistas con usuarios, stakeholders y reuniones internas. Reduce el costo cognitivo de tomar notas.

#### Research de usuarios

- **Maze.** Herramienta principal de research evaluativo: tests de usabilidad async, surveys, card sorting.
- **Inflight.** Design critique interno asíncrono (versión beta, gratis durante 2026).
- **Userberry (opcional).** Tests cualitativos async con grabación de pantalla y video del usuario. Útil cuando se necesita la dimensión "lo que la gente hace" sin moderar.

#### Sistemas de diseño, UI, prototipado y desarrollo asistido por IA

- **Figma Professional.** Fuente de pantallas, especificaciones y handoff. Inevitable.
- **Figma Dev Seats.** Para que el equipo de ingeniería inspeccione diseños correctamente.
- **Cursor Pro.** IDE asistido por IA. PD lo usa para mantener la metadata del Sistema de Diseño, navegar el codebase con asistencia, prototipar en código cuando el método lo amerite.
- **Figma Weave (opcional).** Generación visual asistida con IA: imágenes para marketing, exploraciones de dirección de arte, mockups con contenido realista. Compra estratégica, no operativa del día a día. El rollover de credits del plan Professional es valioso.
- **Storybook + GitHub Actions.** Gratis. Para visualización de componentes y CI/CD del DS.
- **Herramienta de animación (free tier).** Animaciones ligeras. Upgrade a plan de pago cuando: varios editores activos, volumen alto de animaciones críticas en producción, o necesidad de features avanzadas.

#### Lo que NO entra al stack

- **Adobe Creative Cloud.** Affinity como reemplazo para casos puntuales de ilustración o branding. Cero suscripciones de Adobe.
- **Múltiples herramientas de project management.** Linear, Jira, Asana, etc. al mismo tiempo. El equipo consolida en una sola herramienta de gestión, alineada con el Marco de Desarrollo.

### 4.3 · Cómo dimensionar el costo del stack

Los precios cambian y dependen de la región, la moneda y el número de seats, así que en lugar de una cotización fija conviene razonar por **categorías** y **escenarios**. Cotiza cada categoría en tu propia moneda y contexto, y arma tres escenarios según tu presupuesto y madurez.

#### Categorías de gasto

| Categoría | Qué cubre | Nota de costo |
| --- | --- | --- |
| Diseño y handoff | Herramienta de diseño (full seats para diseño + dev seats para ingeniería) | Crece por seat con cada hire |
| Modelos de IA | Motor de razonamiento principal (plan estándar para el equipo; plan de mayor capacidad para quien construye el Agentic DS) | El plan de mayor capacidad es lo que hace viable el Agentic DS sin chocar con rate limits |
| IDE asistido por IA | Para mantener metadata del sistema y prototipar en código | Crece por seat |
| Research | Herramienta de tests async y, opcionalmente, herramienta de tests cualitativos con grabación | La opción async básica suele incluir varios seats |
| Captura / síntesis | Transcripción de entrevistas y síntesis de grandes volúmenes de texto | Hay opciones gratuitas razonables |
| Componentes y CI | Visualización de componentes + CI/CD del DS | Típicamente gratis en el rango relevante |

#### Tres escenarios

| Escenario | Qué incluye | Para quién |
| --- | --- | --- |
| **Mínimo viable** | Diseño (seats de diseño), modelo de IA en plan estándar, IDE asistido, research async básico, captura/síntesis en tier gratuito, componentes/CI gratis | Para validar el modelo antes de comprometer presupuesto |
| **Recomendado** | Lo del mínimo + dev seats de la herramienta de diseño + upgrade del modelo de IA al plan de mayor capacidad para quien construye el Agentic DS | Mejor balance impacto/costo |
| **Completo** | Lo del recomendado + research cualitativo con grabación + captura/síntesis de pago | Cuando se quiere cubrir todos los casos |

#### Por qué el delta del Recomendado se justifica

Dos cosas críticas explican el salto del Mínimo al Recomendado:

1. **Dev seats de la herramienta de diseño.** Sin esto, ingeniería no inspecciona diseños correctamente y se rompe el handoff. El costo de un día perdido de un dev supera el costo anual del dev seat.
2. **Plan de IA de mayor capacidad.** Sin esto, construir el Agentic DS choca con rate limits constantemente. Es la diferencia entre tener Agentic DS y no tenerlo.

#### Cómo escala

Los costos por seat (diseño, IDE, IA) crecen linealmente con cada hire. La herramienta de research suele incluir varios seats hasta el primer hire. Componentes y CI no escalan en costo en el rango relevante.

> **Pendiente del equipo:** fijar las herramientas concretas de cada categoría y cotizarlas en tu moneda. Este playbook deja el marco; la selección específica es decisión de cada equipo.

### 4.4 · Política de adopción y reemplazo de herramientas

Para evitar la acumulación de SaaS, una política simple:

- **Aprobación de nueva tool:** cualquier herramienta nueva con costo recurrente requiere documentar (1) qué problema resuelve, (2) qué tool actual queda obsoleta, (3) costo total mensual, (4) periodo de prueba.
- **Periodo de prueba:** 60 días. Al final, decisión binaria: se queda o se elimina.
- **Review trimestral del stack:** cada cierre de trimestre, lista de tools con uso real. Las que no se usaron en el trimestre o tienen <30% de uso de su capacidad, candidatas a eliminación.
- **Quién decide:** el equipo de Diseño propone, el PM aprueba el costo, el negocio lo financia.

---

## 🪜 5 · Escalera de carrera y rúbricas

### 5.1 · Los cuatro niveles IC

el equipo arranca con **cuatro niveles en el track de Individual Contributor (IC)**. El track de Manager se activa solo cuando haya 3+ ICs en el equipo, no antes.

| Nivel | Foco principal | Impacto |
| --- | --- | --- |
| PD I | Aprende el oficio. Ejecuta bajo supervisión. Construye craft. | En su feature |
| PD II | Ejecuta autónomo. Toma decisiones de diseño con criterio. | En su área del producto |
| Senior PD | Influye sin autoridad. Sus decisiones cambian decisiones del equipo. | En el producto completo |
| Lead PD | Define estrategia de la función. Construye músculo en otros. | En el negocio completo |

#### Por qué solo 4 niveles, y no 5 ni 7:

- Más niveles dan ilusión de progreso (subes "más rápido") pero generan inflación de títulos, expectativas confusas y conversaciones interminables sobre si alguien es "Lead PD o Staff". A escala de 1–4 diseñadores, la sobre-granularidad cuesta más de lo que aporta.
- Menos niveles (2 o 3) hacen que el salto entre niveles sea tan grande que se vuelve irreal, y los diseñadores quedan estancados durante años sin sentir progreso.
- 4 niveles es el equilibrio que la industria ha validado para equipos pequeños (Designer Fund cita esto explícitamente para startups en growth-stage temprana).

#### Niveles que aparecerán en el futuro, con disparadores explícitos:

- **Staff Product Designer (nivel IC futuro):** se activa cuando exista al menos un Lead PD maduro y haya necesidad de un IC con scope multi-producto. Probablemente no antes de 2027.
- **Design Manager (track manager):** se activa cuando haya 3+ ICs reportando. Si llegáramos a tener 3 diseñadores antes de tener un Lead PD listo para promover, se contrata un M1 externamente o se contrata para el rol de Lead.

#### Por qué Lead Product Designer es elegible para track manager

En la práctica, un Lead que demuestra interés y aptitud para gestionar personas puede transitar al track manager sin necesidad de un nuevo título. El Lead ya hace mentoría, ya influencia decisiones organizacionales, ya tiene contexto del negocio. La transición a manager es una decisión de la persona, no un ascenso lateral.

### 5.2 · Las seis dimensiones de competencia

Las rúbricas evalúan a cada nivel contra estas seis dimensiones. Son la unidad mínima de evaluación: una persona puede ser fuerte en algunas y débil en otras.

| # | Dimensión | Qué mide |
| --- | --- | --- |
| 1 | Product Thinking | User understanding · business understanding · product strategy |
| 2 | Craft & Execution | Interaction design · visual design · prototyping · design systems |
| 3 | Research & Evidence ⭐ | Capacidad de aplicar el Motor de Evidencia: hacer las preguntas correctas, escoger método, conducir con rigor, traducir hallazgos en decisiones. Especial atención a remoción de sesgos. |
| 4 | Collaboration & Influence | Cross-functional collaboration · communication · influence without authority · feedback culture |
| 5 | AI Fluency & Systems Thinking ⭐ | AI tooling fluency · systems thinking · design system contribution · encoding decisions |
| 6 | Drive & Self-Awareness | Ownership · learning velocity · self-awareness · resilience |

**Dimensión 1 · Product Thinking.** Capacidad para entender el problema de negocio y de usuario, traducir esa comprensión en estrategia de producto, y conectar las decisiones de diseño con métricas reales del negocio. Subcategorías: *user understanding*, *business understanding*, *product strategy*.

**Dimensión 2 · Craft & Execution.** Habilidad técnica para diseñar interfaces que resuelven el problema de forma usable, accesible y visualmente coherente. Incluye dominio del Design System y capacidad de prototipado. Subcategorías: *interaction design*, *visual design*, *prototyping*, *design systems*.

**Dimensión 3 · Research & Evidence ⭐.** Capacidad para hacer las preguntas correctas, escoger el método adecuado, conducir la investigación con rigor, y traducir hallazgos en decisiones que cambien el producto. Especial atención a la remoción de sesgos. Subcategorías: *research methods*, *insights synthesis*, *bias removal*, *evidence-based decision making*.

**Dimensión 4 · Collaboration & Influence.** Cómo se trabaja con el resto del equipo: dar y recibir feedback, manejar desacuerdos, construir relaciones, comunicar trade-offs, manejar stakeholders sin pasarse de los límites del rol. Subcategorías: *cross-functional collaboration*, *communication*, *influence without authority*, *feedback culture*.

**Dimensión 5 · AI Fluency & Systems Thinking ⭐.** Esta es la dimensión diferenciadora del playbook y refleja el momento actual de la industria. Incluye fluidez en el uso de herramientas de IA para diseño, capacidad de codificar decisiones como reglas, contribución al Agentic Design System, y pensamiento sistémico aplicado a problemas de producto. Subcategorías: *AI tooling fluency*, *systems thinking*, *design system contribution*, *encoding decisions*.

**Dimensión 6 · Drive & Self-Awareness.** Cómo el diseñador opera consigo mismo: ownership, capacidad de aprendizaje, manejo de la incertidumbre, autoconocimiento de fortalezas y debilidades, willingness para recibir feedback difícil. No es "personalidad", son comportamientos observables. Subcategorías: *ownership*, *learning velocity*, *self-awareness*, *resilience*.

> ***Por qué Research como dimensión propia.*** *En equipos donde el research no es práctica establecida, esconderlo dentro de "product thinking" garantiza que se siga relegando. Hacerlo dimensión propia eleva su importancia y lo vuelve evaluable independientemente del resto del craft de producto.*

### 5.3 · Rúbricas detalladas

Cada celda describe lo que se espera *observar* en un diseñador de ese nivel en esa dimensión. No son aspiraciones, son comportamientos verificables. Si un diseñador en PD II no demuestra el comportamiento de la celda PD II / Dimensión 1, hay un gap concreto que entra a su PDP.

#### Cómo leer las rúbricas:

- Cada nivel asume que se cumplen todas las celdas del nivel anterior.
- Si una persona cumple algunas celdas de un nivel superior pero no todas, está "in transit": esto es información útil para el PDP, no es base para promoción.
- Promoción a un nivel requiere demostrar consistentemente todas las celdas de ese nivel durante al menos 2 trimestres consecutivos.

#### Dimensión 1 · Product Thinking

| **Nivel** | **Comportamientos esperados** |
| --- | --- |
| **PD I** | Entiende a los usuarios de su feature en términos básicos: quiénes son, qué tareas realizan, qué problemas tienen. Conoce las metas del producto a alto nivel. Hace decisiones de diseño que respetan esas metas pero no las cuestiona. Pregunta "por qué" cuando algo no encaja, en lugar de inventar la respuesta. |
| **PD II** | Entiende sólidamente a los usuarios de su área del producto y puede explicar sus necesidades sin recurrir a estereotipos. Conoce las métricas clave del producto y puede conectar el trabajo de diseño con al menos una métrica de negocio. Contribuye al roadmap táctico con propuestas basadas en lo que ve en el producto. |
| **Senior PD** | Es la persona del equipo que mejor entiende a los usuarios del módulo del que es responsable. Identifica oportunidades que el resto del equipo no ve. Influye en el roadmap estratégico con propuestas respaldadas por evidencia. Puede defender una decisión de producto frente a stakeholders senior usando lenguaje de negocio (retención, conversión, costo, ingreso), no de diseño. |
| **Lead PD** | Identifica oportunidades a nivel del negocio completo, no solo del producto. Influye en la estrategia de la compañía, no solo en el roadmap del trimestre. Puede sentarse en una conversación con liderazgo ejecutivo o con el board y articular cómo el diseño contribuye al crecimiento. Identifica gaps de producto que ni el PM había visto. |

#### Dimensión 2 · Craft & Execution

| **Nivel** | **Comportamientos esperados** |
| --- | --- |
| **PD I** | Aplica correctamente patrones básicos de UX (jerarquía visual, navegación, formularios, feedback al usuario). Usa los componentes del Design System tal cual existen. Crea wireframes y mockups limpios. Sus prototipos son estáticos o de click-through básico. Reconoce cuando algo "no se ve bien" pero no siempre puede articular por qué. |
| **PD II** | Domina los patrones comunes de UX para web/mobile. Sabe cuándo divergir del Design System y lo justifica con razonamiento sólido. Sus prototipos son navegables y permiten test de usabilidad. Su craft visual es consistentemente sólido: tipografía, color, espaciado, microinteracciones. Sus diseños incluyen estados (loading, empty, error) sin necesidad de que se le pidan. |
| **Senior PD** | Es el referente de craft del equipo. Diseña interacciones complejas (multi-step, condicionales, async) con elegancia. Contribuye componentes nuevos al Design System con metadata completa. Sus prototipos son funcionales con datos reales. Identifica deuda visual que nadie más ve y la prioriza. Su trabajo eleva el estándar del equipo. |
| **Lead PD** | Define la dirección visual y de interacción del producto completo. Innova en patrones que nadie más en la categoría ha resuelto. Es citado por otros como referencia de craft. Su trabajo tiene "huella" reconocible. Construye prototipos con código cuando hace falta. Forma a otros diseñadores en craft a través de critique y mentoría directa. |

#### Dimensión 3 · Research & Evidence

| **Nivel** | **Comportamientos esperados** |
| --- | --- |
| **PD I** | Asiste a sesiones de research que otros conducen. Toma notas útiles. Lee reportes de research previos y los aplica a su trabajo. Pregunta por evidencia cuando va a tomar una decisión importante. Reconoce cuando una decisión está siendo tomada por opinión y no por datos. |
| **PD II** | Conduce entrevistas de usuarios y tests de usabilidad bajo guía mínima. Sabe diseñar un test de Maze que produce señal útil. Sintetiza hallazgos en 3–5 insights accionables. Distingue entre "el usuario dijo X" y "el usuario necesita Y". Detecta su propio sesgo de confirmación cuando alguien se lo señala. |
| **Senior PD** | Diseña estudios completos: define la pregunta, escoge el método, recluta participantes, conduce, sintetiza. Usa al menos tres métodos distintos con criterio (cuándo entrevista, cuándo test no moderado, cuándo análisis de comportamiento en producto). Detecta sesgos en su propia investigación antes de presentarla. Sus reportes de research cambian decisiones del equipo de forma trazable. |
| **Lead PD** | Define la estrategia de research del producto: qué se investiga, cuándo, cómo y quién participa. Construye el músculo de research del equipo, incluyendo el de personas no-diseñadoras (Data & Analytics, Customer Success). Identifica cuando la organización está tomando decisiones sin evidencia y la confronta constructivamente. Conecta hallazgos de research con decisiones de negocio que mueven métricas. |

> ***Sobre métodos y mitigación de sesgo.*** *La rúbrica define la competencia esperada por nivel. El detalle de qué método usar cuándo, cómo mitigar el sesgo de confirmación y cómo analizar a ciegas vive en el Motor de Evidencia (§4 métodos, §5.3 mitigación de sesgo, §6.4 análisis a ciegas). El Playbook evalúa si el PD ejerce esas prácticas; el Motor de Evidencia las describe.*

#### Dimensión 4 · Collaboration & Influence

| **Nivel** | **Comportamientos esperados** |
| --- | --- |
| **PD I** | Trabaja bien con su equipo inmediato. Pide feedback regularmente. Es fácil de gestionar. No se brinca autoridad: si tiene una idea que afecta a otro equipo, la lleva primero a su líder. Reconoce cuando no entiende algo y pregunta sin pena. |
| **PD II** | Colabora efectivamente con devs y PMs cross-feature. Comunica decisiones de diseño con claridad y razonamiento. Recibe feedback difícil sin defensividad y lo procesa. Maneja desacuerdos sin escalarlos prematuramente. Da feedback útil a juniors sin imponerse. |
| **Senior PD** | Es la persona del equipo con la que todos quieren trabajar. Maneja stakeholders senior sin perder su criterio profesional. Influye en decisiones del producto sin tener autoridad formal. Construye relaciones de confianza con ingeniería: los devs confían en que sus diseños son implementables y bien pensados. Modera tensiones del equipo de forma constructiva. |
| **Lead PD** | Influye en la cultura del equipo completo, no solo en su propio equipo. Modela la conversación de feedback que el resto adopta. Representa la función de diseño en conversaciones de leadership sin perder autoridad técnica. Resuelve conflictos cross-funcionales que escalaron porque otros no pudieron. Construye trust suficiente para tener "high-judgement conversations" con fundadores. |

#### Dimensión 5 · AI Fluency & Systems Thinking

| **Nivel** | **Comportamientos esperados** |
| --- | --- |
| **PD I** | Usa al menos una herramienta de IA en su workflow diario (Claude, ChatGPT, Cursor, Figma Make). Sabe escribir prompts básicos que producen resultados útiles. Entiende la diferencia entre "preguntarle a una IA" y "darle contexto a una IA". Consume el Design System como usuario, no lo cuestiona. |
| **PD II** | Tiene un workflow con IA integrado: usa IA para investigación previa, exploración de ideas, generación de variantes, redacción de copy, síntesis de notas. Sabe identificar cuándo IA es la herramienta correcta y cuándo no. Construye prototipos con asistencia de IA (Figma Make, Lovable, v0) cuando acelera el aprendizaje. Contribuye al Design System reportando drift y proponiendo componentes nuevos. |
| **Senior PD** | Codifica decisiones de diseño en sistemas, no solo en archivos. Usa Cursor o equivalente para navegar y modificar codebase con asistencia de IA. Entiende cómo funciona el Agentic Design System y puede mantener la metadata de componentes. Identifica oportunidades de automatización en el workflow del equipo. Piensa en sistemas: ve patrones donde otros ven instancias aisladas. |
| **Lead PD** | Define la estrategia de IA del equipo de diseño: qué herramientas, cómo se evalúan, cómo se integran al workflow. Es el dueño técnico del Agentic Design System: la metadata, las skills, los auditors, los reportes. Construye infraestructura que otros consumen. Su pensamiento sistémico cruza el límite entre DesignOps y DevOps de forma fluida. Está al día con la frontera de la disciplina. |

#### Dimensión 6 · Drive & Self-Awareness

| **Nivel** | **Comportamientos esperados** |
| --- | --- |
| **PD I** | Toma ownership de su trabajo: si algo se rompe, lo arregla. Es curioso, hace preguntas, lee lo que se le recomienda. Conoce sus áreas de mayor debilidad y trabaja activamente en ellas. Recibe feedback sin tomarlo personalmente. Cumple los compromisos que asume. |
| **PD II** | Toma ownership más allá de su tarea: si ve un problema en otro feature, lo levanta. Aprende continuamente: lee, sigue a referentes, prueba herramientas nuevas. Sabe cuándo pedir ayuda y cuándo resolver solo. Es honesto sobre lo que no sabe. Recupera bien de proyectos que no salieron como esperaba. |
| **Senior PD** | Es donde los problemas van a morir: cuando algo está atorado, otros recurren a esta persona. Aprende rápido en territorio nuevo. Su autoconocimiento es alto: puede articular sus fortalezas y debilidades sin defensividad ni falsa modestia. Pide feedback proactivamente y actúa sobre él. Mantiene calidad de juicio bajo presión. |
| **Lead PD** | Modela el comportamiento que quiere ver en el equipo. Su autoconocimiento le permite ajustar su estilo según la situación y la persona. Toma decisiones difíciles que protegen al equipo aunque cuesten políticamente. Su drive es contagioso pero no agresivo. No se quema porque entiende la diferencia entre urgencia real y urgencia percibida. |

### 5.4 · Cómo se evalúa el progreso

La evaluación combina dos modelos: las rúbricas de la sección 6.4 (qué se observa) y los **cuatro pilares de Mike Davidson** (cómo se ponderan).

#### Los cuatro pilares

Cada pilar pesa 25% en la evaluación general, sin importar el nivel. Esta ponderación es deliberada: refuerza que ningún pilar individual es suficiente para promover, y que la "técnica pura" pesa lo mismo que "construir relaciones" o "mejorar al equipo".

**Pilar 1 · Getting Things Done (25%).** ¿Hace lo que dice que va a hacer? ¿Va la milla extra para completar trabajo que necesita completarse? ¿Es donde los problemas van a morir? Es una medida de fiabilidad y de prolificidad. Bajo este pilar entran las rúbricas de Drive (D6) y la parte de ejecución de Craft (D2).

**Pilar 2 · Creating Strong Relationships (25%).** ¿Los devs quieren trabajar con esta persona? ¿Los stakeholders cross-funcionales la buscan o la evitan? Bajo este pilar entran las rúbricas de Collaboration & Influence (D4) y partes de Self-Awareness (D6).

**Pilar 3 · Improving the Team (25%).** ¿Hace mejor a las personas a su alrededor? ¿Comparte conocimiento? ¿Mentoriza? ¿Contribuye al DS o a los rituales? ¿Recluta? Bajo este pilar entran partes de Collaboration (D4), AI Fluency (D5) en su versión "construye herramientas que otros usan", y aspectos de Lead-level en general.

**Pilar 4 · Technical Skills, Empathy & Vision (25%).** Las habilidades individuales del oficio. Bajo este pilar entran las rúbricas de Product Thinking (D1), Craft (D2), Research (D3) y AI Fluency (D5) en su versión "la sabe usar".

#### Por qué la división importa

Sin esta ponderación, las evaluaciones tienden a pesar 70% el pilar 4 (las habilidades técnicas) porque son las más visibles. Eso premia a los lobos solitarios brillantes y castiga a los conectores. En el equipo queremos justo lo contrario: premiar a quien construye relaciones, mejora al equipo y entrega, no solo a quien dibuja bonito. En equipos pequeños, donde una sola persona aislada puede generar bottlenecks que afectan a toda la organización, esta ponderación es especialmente importante.

### 5.5 · Cadencia de evaluación

| **Frecuencia** | **Quién** | **Qué se hace** |
| --- | --- | --- |
| **Trimestral** | Self-assessment del diseñador | El diseñador llena una versión simple de la rúbrica de su nivel target, en formato semáforo (cumplo / en progreso / no aún), con ejemplos concretos. |
| **Trimestral** | Evaluación 1:1 con manager | Manager revisa el self-assessment, contrasta con su observación, conversa con el diseñador sobre gaps y acuerdan focos del siguiente trimestre. |
| **Semestral** | Manager review formal | Evaluación más estructurada: rúbricas completas, los 4 pilares ponderados, decisiones sobre PDP del semestre. |
| **Anual** | Calibración de niveles | Conversación entre PM, coach externo (mientras dure la consultoría) y liderazgo ejecutivo para confirmar el nivel asignado a cada diseñador y discutir promociones. |

### 5.6 · Documentación de la evaluación

Cada ciclo de evaluación produce dos documentos:

**📋 Evaluation Snapshot.** Una página con el estado de cada dimensión (verde/amarillo/rojo), los 4 pilares en escala 1–5, y un párrafo de comentario integrado.

**📋 PDP del siguiente periodo.** Los 2–3 focos de desarrollo acordados, las acciones concretas para cada uno, los resultados esperados y cómo se va a medir.

Templates en el Anexo B.

### 5.7 · Planes de Desarrollo Individual (PDPs)

Las rúbricas y los ciclos de evaluación de las secciones anteriores son la materia prima desde la cual se construyen los **Planes de Desarrollo Individual (PDPs)** de cada diseñador en el equipo. Un PDP no es parte de este playbook: es un documento separado, vivo y privado entre el diseñador y su manager. El template de PDP está en el Anexo B.

#### Qué contiene un PDP

- El nivel actual del diseñador y el nivel target.
- Baseline contra las 6 dimensiones de competencia, en formato semáforo.
- 2–3 focos de desarrollo para el trimestre, alineados con las dimensiones donde existen los gaps más relevantes.
- Acciones concretas para cada foco (no objetivos vagos como "mejorar comunicación", sino acciones como "presentar 2 design reviews al equipo de growth en el trimestre con el formato del playbook").
- Resultados esperados y cómo se van a observar.
- Soporte que el diseñador necesita del manager o de la organización para lograrlo.

#### Cadencia:

- Un PDP nuevo cada trimestre, en la primera semana del trimestre, basado en la evaluación del trimestre anterior.
- Revisión informal mensual durante las 1:1s con el manager.
- Cierre formal y nuevo PDP al inicio del siguiente trimestre.

#### Quién facilita el primer PDP:

- Para diseñadores que llevan tiempo en la organización, el manager directo facilita el PDP usando este playbook como referencia.
- Para nuevos hires, el primer PDP se construye en las primeras 2 semanas, basado en lo observado en el proceso de entrevistas y los primeros días en el equipo.
- Mientras dure la consultoría externa inicial, el coach asiste en la facilitación de los PDPs para asegurar consistencia con las rúbricas y los principios del playbook, y para apoyar al manager en las conversaciones de calibración.

#### Precedente metodológico: el primer scorecard formal

El primer scorecard formal de un PD en el equipo se construyó como entregable final de la consultoría externa inicial (abril 2026). Es un documento separado y confidencial, pero vale la pena nombrarlo como **referencia metodológica** porque establece el precedente de cómo se construye una evaluación seria en el equipo. Ese primer scorecard combinó **cuatro lentes complementarios** para triangular la fotografía del diseñador:

1. **Evaluación 360º cuantitativa** en 5 dimensiones operativas (Ejecución, Entrega de Valor, Apertura, Colaboración, Visión de Negocio).
2. **Radar de 7 competencias técnicas** basado en Open Design Docs (Diseño Visual, Diseño de Interacción, Pensamiento de Producto, Investigación de Usuarios, Flujo de Trabajo, Autoconciencia, Mentoría/Liderazgo).
3. **Ecualizador de disciplinas fundamentales** (9 disciplinas en escala cualitativa para medir amplitud del perfil).
4. **Arquetipo de diseñador** (5 ejes basados en el modelo de Tobias van Schneider para capturar la dimensión estratégica del valor que aporta como persona).

A esos cuatro lentes se sumó una **medición cualitativa adicional sobre AI Fluency** (que ningún framework tradicional cubre como dimensión propia pero que el Playbook trata como obligatoria), y al cierre, un **mapa integrador** que proyectó los hallazgos sobre las 6 dimensiones del Playbook con una calificación por nivel (de PD I a Lead PD).

#### Por qué importa para evaluaciones futuras

Los lentes individuales pueden cambiar, pero la lógica de triangulación se mantiene. Cuando se construya el siguiente scorecard formal en el equipo — sea para un hire nuevo, una promoción o una revisión semestral — debe usar al menos **tres lentes complementarios** además de la calificación integradora del Playbook. Un solo lente (especialmente uno cuantitativo basado solo en peer feedback) es insuficiente porque puede capturar la "ilusión de ejecución" — donde un equipo califica alto a un diseñador porque cumple con la definición vigente de diseño en la organización, sin medir contra el estándar al que la función aspira a moverse.

### 5.8 · Reclutamiento

Cuando llegue el momento de hacer el primer hire externo de diseño (timeline esperado: Q4 2026 si las cosas progresan según lo previsto), aquí va el plan para que ese proceso no se haga al vapor.

#### Definir el perfil con un mes de anticipación

Antes de abrir la posición, el PM y el equipo de diseño actual responden:

1. ¿Qué dimensión de la rúbrica es la más débil del equipo hoy? (Esa es la dimensión donde el hire debe ser fuerte.)
2. ¿En qué nivel queremos que entre? (Generalmente PD II o Senior PD en las primeras contrataciones de la función; evitar PD I hasta que haya un Senior PD+ que pueda mentorizarlo, evitar Lead PD hasta que el equipo pueda darle scope real.)
3. ¿Es generalista o especialista? (Las primeras contrataciones casi siempre generalistas; especialistas después.)
4. ¿Hay restricciones de ubicación, idioma, zona horaria, modalidad?

#### Pipeline de sourcing (no esperar a las candidaturas pasivas)

- **Red personal del equipo** (warm intros, mejor señal/ruido).
- **Comunidades locales de diseño** (capítulos de Friends of Figma, Interaction Design Foundation, meetups regionales): buena señal y warm intros.
- **LinkedIn búsqueda activa**, no solo publicación pasiva: identificar 20–30 perfiles que cumplan, alcanzar de manera personalizada.
- **Referidos del equipo** con bono explícito.
- **Bootcamps locales** para roles PD I cuando llegue el momento, no antes.

#### Panel de entrevistas estructurado (4 etapas)

Adaptado de los interview panels documentados en la biblioteca de Open Design Docs (Junior, PD II, Senior, Lead, Staff y Principal interview panels).

**Etapa 1 · Screening (45 min, con manager o líder de diseño).** **Objetivo:** validar fit cultural básico, motivación, claridad de carrera, experiencia general. **Preguntas tipo:**

- *¿Por qué quieres trabajar en este equipo?*
- *Cuéntame del proyecto del que estás más orgulloso.*
- *¿Qué hiciste tú específicamente?*
- *¿Cómo describes tu relación con la IA en tu trabajo de diseño actual?*
- *¿Qué te frustra del estado actual de la industria del diseño?*
- *Filtros: salario, ubicación, fecha de disponibilidad.*

**Etapa 2 · Portfolio Deep Dive (60 min, con líder de diseño + 1 dev).** **Objetivo:** evaluar craft, product thinking, capacidad de articular decisiones. El candidato presenta 1–2 proyectos en profundidad. Las preguntas van a:

- *¿Cuál era el problema real de negocio?*
- *¿Qué decisiones difíciles tomaste? ¿Qué descartaste?*
- *¿Cómo medías el éxito? ¿Lo lograste?*
- *Si lo volvieras a hacer, ¿qué cambiarías?*
- *¿Qué hizo el equipo que no fueras tú?*

**Etapa 3 · Design Challenge (opcional) (90 min, asíncrono o en vivo, con líder de diseño).** **Objetivo:** ver al candidato pensar en tiempo real con un problema parecido al que va a enfrentar en el equipo. **Formato:** un problema acotado relacionado con gestión de tianguis o un dominio análogo (no exactamente el producto del equipo para no sesgar la respuesta hacia "darme la solución gratis"). El candidato presenta su proceso, su razonamiento y un esbozo de solución. Lo que se evalúa es el cómo, no el qué: qué preguntas hizo, qué asunciones declaró, cómo manejó la ambigüedad.

**Etapa 4 · Values & Collaboration (45 min, con PM + 1 dev + 1 persona de growth).** **Objetivo:** validar fit con los principios y los no-negociables de la Parte 2, ver cómo se comporta en un grupo cross-funcional. **Preguntas tipo:**

- *Cuéntanos de un desacuerdo con un product manager o un dev. ¿Cómo se resolvió?*

*¿Cómo das feedback difícil? Dame un ejemplo concreto.*

*¿Qué piensas de los principios que compartimos contigo?*

*¿Hay alguno con el que no estés de acuerdo?*

*¿Qué necesitarías de nosotros para tener éxito en esta posición?*

#### Scorecard del panel

Después de cada etapa, cada entrevistador llena un scorecard corto:

| **Dimensión** | **Score 1–5** | **Evidencia observada** |
| --- | --- | --- |
| ***Product Thinking*** |  |  |
| ***Craft & Execution*** |  |  |
| ***Research & Evidence*** |  |  |
| ***Collaboration & Influence*** |  |  |
| ***AI Fluency & Systems Thinking*** |  |  |
| ***Drive & Self-Awareness*** |  |  |

| **Notas** | |
| --- | --- |
| ***¿Hire?*** | **Strong yes** / **Yes** / **No** / **Strong No** |

Después de la etapa 4, panel debrief de 30 min para integrar los scorecards. Decisión por consenso, no por mayoría: una "strong no" de cualquier entrevistador es bandera roja que requiere explicación.

#### Lo que NO se hace en el proceso

- **Tareas de diseño largas no remuneradas.** Si el ejercicio toma más de 90 minutos, se paga.
- **"Test" técnicos de Figma.** Saber usar Figma es asumido, no se evalúa.
- **Whiteboarding hostil.** El design exercise es colaborativo, no de "te ponemos en aprietos".
- **Más de 4 etapas.** Si después de 4 horas totales no tenemos suficiente señal, el proceso está mal diseñado, no el candidato.

---

## 🌱 6 · Cultura y liderazgo

### 6.1 · Quién gestiona la función de Diseño

En equipos pequeños, el rol de líder de Diseño suele vivir en el **PM** (o en quien lidere producto), idealmente con apoyo de un coach externo durante el periodo inicial de implementación del playbook. Cuando los disparadores de escalar (§8.2) se cumplan, ese rol se consolida en una persona dedicada (interna o externa).

Esta sección deja claro **qué hace y qué no hace ese rol**, para que pueda ejecutarse con confianza independientemente de quién lo ocupe.

#### Por qué el PM puede ejecutar este rol aunque no sea diseñador de oficio

- Entiende el negocio mejor que nadie en el equipo. Eso es ya un valor significativo del rol.
- Ya tiene el marco de producto operando (Dual Track + 5Ds + RACI).
- El playbook le da: rúbricas, rituales, principios, lenguaje compartido para conversar con diseñadores sobre desarrollo.
- Si hay un coach externo, es puente: ayuda a calibrar contra las rúbricas, identificar señales de progreso o estancamiento, ajustar las conversaciones de desarrollo.

### 6.2 · Cómo se gestiona

#### Qué SÍ hace el líder de Diseño de Producto

- Define la dirección estratégica de la función de Diseño: qué problemas resolvemos, en qué orden, con qué prioridad.
- Asegura que la función esté conectada al negocio: métricas claras, contribución al Outcome trimestral.
- Construye y protege los rituales de la función (los principios fundacionales, §1.2.1).
- Hace 1:1s con cada diseñador y lleva sus PDPs.
- Defiende el espacio del diseño en conversaciones donde el diseñador no puede estar.
- Decide promociones, ajustes de nivel y, eventualmente, salidas.
- Aprueba el presupuesto de tools y headcount.
- Asegura que el playbook esté vivo y se actualice.

#### Qué NO hace el líder de Diseño de Producto

- No revisa cada pixel de cada pantalla. Eso erosiona ownership del diseñador.
- No toma decisiones de craft visual por el diseñador. Eso es trabajo del diseñador.
- No interviene en conversaciones diseñador↔dev a menos que escale.
- No "salva" al diseñador de feedback difícil de stakeholders. Lo respalda y lo prepara, pero el diseñador da la cara.
- No hace micro-manage. Si el diseñador necesita supervisión hora a hora, hay un problema más profundo que hay que abordar directamente.

#### Blueprint de liderazgo

**Estoy comprometido a:**

- Crear las condiciones para que hagas el mejor trabajo de diseño de tu carrera mientras estés en el equipo.
- Ofrecer un espacio seguro para que crezcas personal y profesionalmente, incluyendo equivocarte sin que te cueste tu reputación.
- Escuchar y aprender continuamente para encontrar mejores formas de trabajar juntos.

**Me hago responsable de:**

- Tomar responsabilidad por mis acciones, especialmente cuando salen mal.
- Cumplir los compromisos que asumo. Si no puedo cumplir uno, lo digo a tiempo, no después.
- Reconocer mis errores y hacer los cambios necesarios para no repetirlos.

**Te respetaré como persona:**

- Me comprometo a conocerte como individuo, no como recurso.
- Recibo feedback con apertura y lo doy con honestidad y cuidado.
- Trato de ser real y vulnerable, y busco lo mismo en los demás.

**Cómo trabajaré contigo:**

- En 1:1s semanales (45 min) que son tuyos: tú defines la agenda. Si no tienes nada que discutir, cancelamos.
- Con feedback continuo, no solo en evaluaciones formales. Si algo necesito decirte, te lo digo dentro de 48 horas, no en el siguiente review.
- Defendiendo el espacio del diseño en conversaciones donde no puedas estar.

**Lo que espero de ti:**

- Que tomes ownership de tu trabajo, no de tu silla.
- Que pidas ayuda cuando la necesites, sin pena ni dramatización.
- Que confrontes desacuerdos directamente, no en pasillos ni en espalda.
- Que te muestres como eres y dejes ver lo que no sabes.

> *Este blueprint se actualiza una vez al año y se comparte explícitamente con cada hire nuevo en su primera 1:1.*

#### Feedback como ritual cultural

Una de las cosas que más cambia la cultura de un equipo de diseño es cómo se da y se recibe feedback. El objetivo en el equipo es construir un patrón donde el feedback sea ligero, frecuente y útil — algo especialmente importante en equipos pequeños donde el diseño puede operar en aislamiento si no se tiene cuidado.

**Tres reglas operativas:**

1. **Ligero más que pesado.** Mejor 5 conversaciones de 10 minutos que una conversación de 60 minutos cargada. La frecuencia baja la apuesta de cada conversación individual.
2. **Específico más que abstracto.** "Este botón se siente fuera de jerarquía" es útil. "Esta pantalla no me late" no lo es.
3. **Sobre el trabajo, no sobre la persona.** "Esta decisión no veo cómo conecta con el problema del PRD" es feedback sobre trabajo. "Tú no piensas en el usuario" es feedback sobre persona, y no se hace.

**Dos rituales de feedback que valen la pena tener:**

- **Design Critique informal (30–45 min, durante el Cooldown).** Distinto a los Design Reviews formales del Marco de Desarrollo en D3. Aquí PD trae trabajo en estado borrador para recibir reacciones tempranas, sin presentación elaborada. La regla del crit: PD comparte el contexto, los demás hacen preguntas antes de dar opiniones, y al final cada quien comparte una observación concreta sobre las soluciones.
- **Loops de feedback con devs.** Después de cada feature shipped, una conversación de 15 minutos entre PD y los devs que implementaron: ¿qué hizo el diseño que les facilitó la vida?, ¿qué les complicó?, ¿qué cambiamos para el siguiente?

### 6.3 · El rol del coach externo

**Mientras dure la consultoría externa inicial (definida con el coach contratado):**

- Sesión quincenal de 60 min con PD. Trabajo explícito sobre rúbricas, identificación de gaps, acuerdo de próximos pasos.
- Apoyo en facilitación de PDPs trimestrales del equipo de Diseño, asegurando consistencia con rúbricas y principios.
- Calibración con PM sobre evaluación de niveles y decisiones de progresión.
- Documentación del precedente metodológico del primer scorecard formal (entregable final de la consultoría).

**Cuando termine la consultoría, el espacio quincenal puede convertirse en:**

- Mentoría peer con un diseñador externo de la red (Friends of Figma, IDF, red personal).
- O eliminarse, dependiendo del nivel de autonomía alcanzado por PD.

La decisión se toma al cierre del trimestre donde termina la consultoría, no antes.
La decisión se toma al cierre del trimestre donde termina la consultoría, no antes.

### 6.4 · Cuándo se contrata un líder de Diseño dedicado

**Disparadores explícitos, no calendario.** Hasta que cualquiera de estos se cumpla, PM + el playbook + el coach externo es la estructura suficiente:

| Disparador | Acción |
| --- | --- |
| 3+ diseñadores reportando a la función | Contratar Design Manager dedicado o promover Lead interno |
| Decisiones de estrategia de diseño consumen >50% del tiempo de PM y compiten con sus responsabilidades de producto | Considerar contratar Design Manager dedicado |
| Aparece un Lead Product Designer interno que pueda tomar el rol orgánicamente | Promoción + transición de responsabilidades de gestión |
| PM gasta >30% de su tiempo en conversaciones de gestión de Diseño | Mismo: evaluar Design Manager o promoción interna |

### 6.5 · Precedente metodológico del scorecard

El **primer scorecard formal de un PD en el equipo** se construyó como entregable final de la consultoría externa inicial (abril 2026). Es documento separado y confidencial, pero vale la pena nombrarlo como referencia metodológica porque establece el precedente de cómo se construye una evaluación seria en el equipo.

Ese scorecard combinó **cuatro lentes complementarios** para triangular la fotografía del diseñador:

1. **Evaluación 360º cuantitativa** en 5 dimensiones operativas (Ejecución, Entrega de Valor, Apertura, Colaboración, Visión de Negocio).
2. **Radar de 7 competencias técnicas** basado en Open Design Docs (Diseño Visual, Diseño de Interacción, Pensamiento de Producto, Investigación de Usuarios, Flujo de Trabajo, Autoconciencia, Mentoría/Liderazgo).
3. **Ecualizador de disciplinas fundamentales** (9 disciplinas en escala cualitativa para medir amplitud del perfil).
4. **Arquetipo de diseñador** (5 ejes basados en el modelo de Tobias van Schneider para capturar la dimensión estratégica del valor que aporta como persona).

A esos cuatro lentes se sumó una **medición cualitativa adicional sobre AI Fluency** (que ningún framework tradicional cubre como dimensión propia, pero que este Playbook trata como obligatoria), y al cierre, un **mapa integrador** que proyectó los hallazgos sobre las 6 dimensiones del Playbook con una calificación por nivel (de PD I a Lead PD).

**Por qué importa para evaluaciones futuras.** Los lentes individuales pueden cambiar, pero la lógica de triangulación se mantiene. Cuando se construya el siguiente scorecard formal — sea para un hire nuevo, una promoción o una revisión semestral — debe usar **al menos tres lentes complementarios** además de la calificación integradora del Playbook.

Un solo lente (especialmente uno cuantitativo basado solo en peer feedback) es insuficiente porque puede capturar la *"ilusión de ejecución"* — donde un equipo califica alto a un diseñador porque cumple con la definición vigente de diseño en la organización, sin medir contra el estándar al que la función aspira a moverse.

### 6.6 · Tiempo, presupuesto y recursos para desarrollo continuo

#### Tiempo asignado

- **2 horas semanales protegidas** en el calendario del diseñador para aprendizaje. No se canjean por feature work salvo emergencia. Pueden usarse en: leer, ver Dive Club, probar herramientas nuevas, hacer un tutorial, revisar trabajo de otros diseñadores en el mundo.
- **1 día por trimestre** para asistir a un evento, taller o meetup local (capítulos de Friends of Figma, IDF, eventos de diseño de tu región).

#### Presupuesto sugerido por diseñador, anual

- **Presupuesto** para libros, cursos online y suscripciones a comunidades (p. ej. Figma Academy, Dive Club, IDF membership).
- **Presupuesto** para asistencia a un evento presencial al año (una conferencia de la industria, o eventos locales).

#### Recursos curados

Lo que importa, no lo exhaustivo:

- **Referentes de craft y proceso:** Dive Club, Figma Academy, Refactoring UI.
- **Pensamiento estratégico:** Marty Cagan (*Inspired*, *Empowered*), Teresa Torres (*Continuous Discovery Habits*), Lenny's Newsletter.
- **Sistemas y design systems:** Cristian Morales · serie *Towards an Agentic Design System*, Brad Frost (*Atomic Design*), Figma's design systems content.
- **Comunidad local:** capítulos locales de Friends of Figma e Interaction Design Foundation, meetups y eventos de diseño de tu región.

---

## 📊 7 · Métricas

### 7.1 · Nivel 1 — Contribución al Outcome del trimestre

Métricas trazables al Marco de Desarrollo. Se reportan dentro del Impact Report del Initiative Spec (sub-página D5) cuando hay iniciativa específica, y en la Retrospectiva de Resultados del Cooldown cuando es contribución agregada del ciclo.

- **Cumplimiento de hipótesis del PRD.** Por iniciativa al cierre D5.
- **Contribución al Outcome del trimestre.** Por ciclo.
- **Opportunities originadas por PD.** Cuántas Opportunities del OST trimestral tienen su origen en insights traídos por PD.
- **Decisiones de priorización con evidencia provista por PD.** Cualitativo, capturado en Design Journal.

### 7.2 · Nivel 2 — Salud operativa de la función de Diseño

Métricas propias. Cualitativas: preferimos señales interpretables a números manipulables.

#### De la función:

- **Velocidad sostenida del Sprint.** ¿El Diseño fue cuello de botella?
- **Calidad percibida.** Encuesta corta al cierre del trimestre (EM, devs, Data & Analytics, Customer Success).
- **Cobertura del Design System.** % de pantallas con componentes del DS. Target: ≥85% al cierre 2026.
- **Reducción de retrabajos.** Diseños rehechos post Product Jam por algo detectable antes.
- **Drift detectado por el DS.** Violaciones a contratos del DS por ciclo.

#### Del individuo (rúbricas):

- **Delta trimestral en rúbricas.** Celdas que pasaron de "no aún" → "en progreso" → "cumple".
- **Peer feedback agregado.**
- **Decisiones documentadas con evidencia.**
- **Ownership demostrado.**

### 7.3 · Cadencia de review de métricas

| Nivel | Métrica | Frecuencia | Dónde se discute |
| --- | --- | --- | --- |
| 1 | Cumplimiento de hipótesis del PRD | Por iniciativa al cierre D5 | Impact Report |
| 1 | Contribución al Outcome | Por ciclo | Retrospectiva de Resultados (Marco de Desarrollo) |
| 1 | Opportunities originadas por PD | Trimestral | Review al cierre del trimestre |
| 2 | Velocidad sostenida | Por ciclo | Retrospectiva de Proceso (Marco de Desarrollo) |
| 2 | Calidad percibida | Trimestral | Review al cierre del trimestre |
| 2 | Cobertura DS y Drift | Mensual | Design Debt Review |
| 2 | Retrabajos post Product Jam | Por ciclo | Retrospectiva de Proceso |
| 2 | Delta rúbricas | Trimestral | Evaluación formal PD ↔ PM |
| 2 | Peer Review | Trimestral | 1:1 PD ↔ PM |
| 2 | Decisiones con evidencia | Mensual | Design Journal + 1:1 |
| 2 | Ownership | Mensual | Design Journal + 1:1 |

### 7.4 · Lo que NO medimos y por qué

- **Número de pantallas entregadas.** Premia volumen, castiga calidad.
- **Número de tickets cerrados.** Premia trabajo de bajo valor sobre estratégico.
- **Adherencia 1:1 al PRD original.** Castiga al PD que descubre durante el proceso que el PRD original estaba incompleto o puede enriquecerse con nueva evidencia.
- **NPS interno como score numérico promediado.** Las preguntas de satisfacción se hacen, pero los promedios se interpretan como narrativa.
- **OKRs propios de la función de Diseño.** El Marco de Desarrollo opera con un solo Outcome por trimestre. Diseño contribuye al Outcome (Nivel 1) y mide su salud operativa propia (Nivel 2). Confundir esto reintroduce la jerarquía que el Marco de Desarrollo limpió.

---

## 🗺️ 8 · Roadmap de implementación del playbook

### 8.1 · Puesta en marcha del playbook (primer trimestre)

#### Pre-trimestre · último Cooldown del trimestre anterior

Antes de que arranque el ciclo formal donde el playbook entra en operación:

- PM, liderazgo ejecutivo y coach externo **leen el playbook completo**.
- **Sesión de 90 minutos** PM + liderazgo + coach: validar principios, niveles, rúbricas y presupuesto de tools. Decidir escenario (Mínimo / Recomendado / Completo).
- Ajustes al playbook según retroalimentación. **v1.2 lista para arranque.**
- Decisiones sobre los PDPs individuales del equipo de Diseño (documentos separados, confidenciales).
- **Agentic DS Fase 0** se agrega como iniciativa candidata al Opportunity Mapping del trimestre entrante. PM decide si se prioriza contra las otras candidatas del OST.

#### Ciclo 1 · Arranque operativo

**Sprint (3 semanas):**

- **Sesión de 60 minutos** para presentar el playbook al equipo completo (PM, PD, Data & Analytics, EM, Customer Success): principios, rúbricas, expectativas, cómo se relaciona con el Marco de Desarrollo.
- **Baseline inicial de PD contra las rúbricas** del nivel target: self-assessment + revisión de PM + calibración con coach externo.
- Acuerdo del **PDP del trimestre** con PD: 2–3 focos concretos.
- **Setup de las tools** del escenario aprobado (Figma Pro, Maze, Claude, Cursor, etc.).
- **Arranque de los rituales internos** del playbook (1:1 PD↔PM, Design Journal, coaching quincenal), corriendo en paralelo a las ceremonias del Marco de Desarrollo que ya existen (standup, Design Reviews en D3, Kick-off, Product Jam).
- Si el Agentic DS Fase 0 entró al OST del trimestre: PD y EM **arrancan el Initiative Spec** correspondiente (D1 → D2).

**Cooldown (1 semana):**

- Primera **Retrospectiva de Proceso** del Marco de Desarrollo con el playbook vigente. PD lleva observaciones sobre qué funcionó y qué friccionó en el arranque.
- Primer **Design Debt Review** del Cooldown (ver Plantillas, §9).
- **Evaluación cualitativa temprana** de PD contra rúbricas (verde/amarillo/rojo en cada dimensión).

#### Ciclo 2 · Ritmo

**Sprint (3 semanas):**

- Operación normal bajo el playbook. PD ejecuta su primer Sprint completo dentro del modelo (Design Spec para iniciativas en D2, Design Reviews en D3).
- Si Agentic DS Fase 0 está en el OST: continúa su ciclo D1→D5.
- Rituales internos del playbook ya establecidos.

**Cooldown (1 semana):**

- Retrospectivas del Marco de Desarrollo (Proceso + Resultados).
- **Ajustes al playbook:** si algún ritual no está funcionando, se modifica o elimina.
- Si el Cooldown del Ciclo 2 es el momento del **Opportunity Mapping del trimestre siguiente** (según cadencia del Marco de Desarrollo), PD prepara evidencia para entregar a Data & Analytics antes de la sesión.

#### Ciclo 3 · Calibración

**Sprint (3 semanas):**

- Continuidad operativa.
- Agentic DS Fase 0 idealmente **cerrando D4/D5 con Impact Report**.

**Cooldown (1 semana) · último del trimestre:**

- **Evaluación formal contra rúbricas** (60 min). PD self-assessment + PM review + calibración con coach.
- **Review de métricas de la función de Diseño** (45 min). Nivel 1 y Nivel 2 de Métricas (§7).
- Conversación entre PM, liderazgo ejecutivo y coach sobre señales tempranas: *¿el playbook está funcionando? ¿los PDPs están dando frutos? ¿hay cambios estructurales para el siguiente trimestre?*
- **Documento v1.3 del playbook** si hay cambios estructurales.
- Preparación del **PDP del siguiente trimestre**.

### 8.2 · Disparadores para escalar

El playbook está construido para crecer con **triggers, no con fechas**. Los más importantes:

#### Sobre desarrollo del PD actual

| Disparador | Acción |
| --- | --- |
| PD demuestra consistentemente comportamientos de su nivel target por 2 trimestres seguidos | Promoción formal al siguiente nivel |
| PD no progresa en >50% de los focos de su PDP durante un trimestre | Conversación estructural sobre ajuste del PDP, soporte adicional o intervención |
| PD demuestra consistentemente nivel PD II en la Dimensión 3 (Research & Evidence) | Transferir de Data & Analytics a PD la responsabilidad de conducir tests de usabilidad async sin supervisión |
| PD demuestra consistentemente nivel Senior PD en la Dimensión 3 | Transferir de Data & Analytics a PD el liderazgo de estudios cualitativos completos (entrevistas, síntesis, insights) |

#### Sobre crecimiento del equipo

| Disparador | Acción |
| --- | --- |
| Llegada del 2do diseñador | Activar rituales de equipo: design critique semanal con peer review |
| Llegada del 3er diseñador | Activar track manager o contratar Design Manager externo |
| PM gasta >30% de su tiempo en gestión de Diseño | Considerar contratar Design Manager dedicado o promover internamente |
| El negocio aprueba expansión a 2+ productos | Reescribir el playbook para multi-producto, no parchear el actual |

#### Sobre infraestructura técnica

| Disparador | Acción |
| --- | --- |
| El DS supera 15 componentes en producción | Activar Chromatic (visual regression testing) en el stack |
| Aparece primer incidente de drift visual no detectado por el auditor semántico del DS | Activar Chromatic incluso si no se llegó a 15 componentes |

#### Sobre research

| Disparador | Acción |
| --- | --- |
| El research interno deja de ser suficiente para informar decisiones del OST | Evaluar contratar UX Researcher dedicado |

#### Sobre separación de roles

| Disparador | Acción |
| --- | --- |
| PD consolida autonomía de PM también (separación del rol PM+PM temporal) | Formalizar la separación con hire de PM dedicado o PM soltando la parte de PM |

### 8.3 · La regla general

**Solo escalamos cuando hay señal real de necesidad.**

La señal real evita dos errores opuestos:

- **Sobre-construcción.** Contratar Design Manager antes del 3er diseñador es estructura sin sustancia. Cuesta dinero, genera reuniones, no produce valor.
- **Parálisis.** No escalar cuando los disparadores ya se cumplieron genera burnout, cuellos de botella, y pérdida de talento.

Cada trimestre, en el último Cooldown, PM revisa esta tabla con liderazgo y coach. Si algún disparador se cumplió, la acción se agenda — no se discute más. Si ninguno se cumplió, el playbook sigue corriendo en su forma actual.

---

## 📎 9 · Plantillas, guías y anexos

### Templates y guías propios del playbook

Los templates de D2 (Brief y Spec) son los más críticos del set. El Brief es la pieza estratégica que existía como vacío entre PRD y Spec; el Spec quedó reducido a su rol operativo de handoff. Los demás son herramientas internas de la función de Diseño.

1. **[Product Design Brief](#/plantillas/product-design-brief)** (sub-página D2 del Initiative Spec, apertura)
2. **[Product Design Spec](#/plantillas/product-design-spec)** (sub-página D2 del Initiative Spec, cierre)
3. **[Design Review Deck](#/plantillas/design-review-deck)** (5 slides para checkpoints 1 y 2)
4. Procesos documentados:
    1. **[Cómo llevar un Design Review](#/guias/design-review)**
    2. **[Design Debt Review](#/guias/design-debt-review)**
    3. **[Design Critique informal](#/guias/design-critique)**
5. **Design Journal template** (formato libre, 30 min/semana, en la herramienta de gestión)
6. **Evaluation Snapshot** (1 página, semáforo por dimensión + 4 pilares + comentario)
7. **PDP template** (privado, separado del playbook — vive en carpeta confidencial PD↔PM)
8. **Interview Scorecard** (1 página por etapa) — para los 4 paneles de entrevistas de reclutamiento.
9. **Encuesta de calidad percibida de la función de Diseño** (5 preguntas) — para aplicar trimestralmente a EM, devs, Data & Analytics y Customer Success.

> ***Templates de research:*** *todos los templates de research (Plan, Brief, Estrategia, Reporte, Notas) viven como plantillas del Motor de Evidencia, §11 (conexión con el Marco de Desarrollo).*

### Biblioteca de recursos

#### Negocio

Negocio para Diseñadores.pdf

#### Diseño de interfaz de usuario

Refactoring UI v1.0.2.pdf

Practical-UI-2nd-edition.pdf

#### Sistemas de diseño (referencia para la Parte 3)

Agentic Design System Guide.pdf

The Business Value of Design Systems.pdf

#### Frameworks y referencias externas que informan este playbook

- A Design Team's Guide to Leveling — Designer Fund. Sobre cómo estructurar niveles en startups.
- Evaluating Employees in Product Design & Development Roles — Mike Davidson. Sobre los 4 pilares y decision quality vs outcome quality.
- [http://opendesigndocs.com/](http://opendesigndocs.com/) (Levels, competencies, leadership blueprint, interview panels.)

Product Design Level Expectations Rubric — boilerplate de Sergio Nouvel adaptado al contexto el equipo.

- Leveling up the Design Org — sobre design progression frameworks.
- Fixing Product Design Career Paths with the Mirror Model — sobre la transferibilidad entre tracks IC y manager.
- The Solo Designer: One Seat, All the Hats — sobre la realidad de diseñar solo.
- A Guide to Becoming a Senior Product Designer — design axes y framework de evaluación.
- Hoja de ruta para 2026 de líderes de diseño — sobre estrategia, alineación y feedback culture.
- Dual-Track Agile Framework — Marty Cagan. Base conceptual del Marco de Desarrollo.
- Continuous Discovery Habits / Opportunity Solution Tree — Teresa Torres. Base del Opportunity Mapping del Marco de Desarrollo.
- Shape Up — Basecamp. Base de la cadencia Sprint + Cooldown del Marco de Desarrollo.
- [https://vanschneider.com/blog/edition-272/](https://vanschneider.com/blog/edition-272/) (Designer Archetypes)

#### Comunidades y aprendizaje continuo:

- Capítulos locales de Friends of Figma
- Interaction Design Foundation (capítulo local)
- Dive Club
- Figma Academy
- Lenny's Newsletter
- The CDO School

---

> **Plantillas y guías migradas a [Plantillas, Guías y Craft](#/plantillas).**
> Los templates de esta función —**[Product Design Brief](#/plantillas/product-design-brief)**, **[Product Design Spec](#/plantillas/product-design-spec)** y **[Design Review Deck](#/plantillas/design-review-deck)**— viven ahora en el repositorio central, en *§1 · Plantillas*. Las guías de ritual —**[Cómo llevar un Design Review](#/guias/design-review)**, **[un Design Debt Review](#/guias/design-debt-review)** y **[un Design Critique informal](#/guias/design-critique)**— viven en *§2 · Guías de proceso*. Una sola fuente de verdad; aquí queda la referencia.

---

## 📚 10 · Glosario

| Término | Definición |
| --- | --- |
| Product Design Brief | El documento estratégico de D2, redactado por PD al abrir la fase. Traduce los problemas del PRD a lenguaje de diseño, declara las apuestas que el research va a validar, captura principios y tensiones. Es la brújula del proceso de diseño. Se firma antes de redactar el Plan de Investigación. Sin Brief firmado, no hay research. Template: Plantillas (§9). |
| Product Design Spec | El documento operativo de cierre de D2, redactado por PD (parte diseño) y EM (parte técnica, RFC). Se escribe después del Reporte de Hallazgos del research. Recoge las apuestas que pasaron como decisiones firmes y especifica entidades, estados, flujos, reglas, edge cases y handoff a Ingeniería. Se aprueba en el Kick-off. Template: Plantillas (§9). |
| Design Review (checkpoints) | Dos revisiones obligatorias durante D3: una a mitad de Sprint (correctiva) y una al cierre de D3 (gate formal). Si el diseño no está respetado, el feature no entra a Deploy. |
| Design Review Deck | Las 5 slides fijas que PD usa para presentar trabajo en cada Design Review. |
| Design Debt | Deuda de diseño acumulada: inconsistencias visuales, patrones contradictorios, fricciones conocidas no resueltas, sub-componentes desfasados del DS. Se gestiona en el Design Debt Review mensual del Cooldown. |
| Design Debt Review | Ritual mensual durante el Cooldown para priorizar qué deuda de diseño se atiende en el siguiente Cooldown. |
| Design Critique informal | Sesión semanal informal entre PDs (sin EM/PM/Data & Analytics) para feedback temprano sobre trabajo en progreso. Distinto al Design Review formal. |
| Design Journal | Espacio de 30 min semanales bloqueado en el calendario de PD para documentar decisiones, registrar aprendizajes y preparar la siguiente semana. |
| Agentic Design System | El Design System del equipo construido sobre [Mantine.dev](http://Mantine.dev) con metadata + skills + auditors que permiten que IA contribuya y mantenga el sistema sin que PD esté en la sala. |
| PDP | Personal Development Plan — plan trimestral de crecimiento individual acordado entre el diseñador y su manager. Documento separado del playbook, privado. |
| Evaluation Snapshot | Documento de una página al cierre de cada trimestre con el estado de cada dimensión de la rúbrica del nivel target del PD. |
