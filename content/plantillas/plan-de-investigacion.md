# 📋 Plan de Investigación

*Plantilla del repositorio [Plantillas, Guías y Craft](#/plantillas) · disciplina Research (práctica de la [Cabeza](#/cabeza)) · fases D1–D3*

> **Cuándo se usa.** Es la pieza maestra del Discovery de una iniciativa: declara qué se va a investigar, con qué apuestas, con qué método y con qué umbrales de decisión, **antes** de ejecutar. Se complementa con el [Research Brief](#/plantillas/research-brief), la [Estrategia de Análisis](#/plantillas/estrategia-de-analisis) y el [Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos).

---

## [Nombre de la iniciativa]

| Campo | Valor |
| --- | --- |
| Iniciativa | [Nombre · descripción de una línea] |
| Owner | [Nombre · rol] |
| Sign-off requerido | [Nombres · roles] |
| Audiencia del reporte | [Nombres / equipos] |
| Fase del Marco de Desarrollo | [D1 · Discover / D2 · Discovery Sprint / D3 · …] |
| Ventana de ejecución | [Fecha inicio – fecha fin] |
| Decisión que habilita | [Decisión específica que el estudio desbloquea] |
| Versión | [v1.0 · Draft / v1.0 · Aprobado] |

### Quick reference

| Campo | Valor |
| --- | --- |
| Pregunta principal | [Una frase] |
| Tipo de incertidumbre | [Problema / Deseabilidad / Viabilidad / Adopción] |
| Método primario | [Concept test moderado / Entrevista / Usabilidad async / etc.] |
| Mezcla de fuentes | [% clientes / % prospects] |
| Modalidad | [Moderada / Async / Mixta] |
| Stack | [Herramientas confirmadas] |
| Incentivo | [Monto · forma de entrega] |
| Presupuesto | [Total + breakdown si aplica] |
| Fecha de reporte final | [Fecha] |
| Anexa a | [Initiative Spec D1 / D2 / D3 / D5] |

---

### 1 · Resumen ejecutivo

[Dos a tres párrafos que cubran:

- Qué busca validar este estudio y por qué entró a Discovery Track.
- Si hay más de una fase, cuál se ejecuta en este Plan y cuál queda para después.
- Método primario en una frase.]

---

### 2 · Contexto

**2.1 Señales que detonaron el estudio**

- [Patrones observados en tickets de Customer Success]
- [Caída en activación detectada por Data & Analytics]
- [Hipótesis del PRD que requiere validación]
- [Otra señal específica]

**2.2 Qué se hizo antes**

- [Revisión de tickets · fecha · qué se encontró]
- [Análisis de funnel · período · hallazgos]
- [Entrevistas previas · fecha · output]
- [Prototipos descartados · razón]

**2.3 Qué decisión bloquea esta investigación**

[Una frase declarativa: *"Definir si X entra al backlog del Q3 o se descarta"*. Si no se puede formular como decisión específica, el plan no está listo.]

---

### 3 · Objetivos

**3.1 Pregunta principal**

> [Pregunta formulada con la fórmula: **[Qué queremos hacer] + [Pregunta clave] + [De quién] + [Para qué]**]

**3.2 Sub-preguntas**

1. [Sub-pregunta 1]
2. [Sub-pregunta 2]
3. [Sub-pregunta 3]

**3.3 Criterios de éxito de la investigación**

- [Qué información cualitativa y cuantitativa debe producir]
- [Qué documentos o artefactos se entregan]
- [Qué decisiones específicas se desbloquean al cierre]

---

### 4 · Apuestas y observables

Cada apuesta debe explicitarse antes del test, con su observable y su umbral de decisión. Sin esa terna, el research no puede emitir veredicto.

| Código | Apuesta | Observable principal | Umbral de pasa |
| --- | --- | --- | --- |
| A1 | [Decisión de diseño que asume algo no validado] | [Lo que el facilitador debe poder ver] | [Criterio cuantitativo o cualitativo específico] |
| A2 | [...] | [...] | [...] |
| A3 | [...] | [...] | [...] |

> **Veredicto global:** 🟢 **Verde** → ≥[N] apuestas pasan → Build. 🟡 **Ámbar** → [N rango] apuestas pasan → Pivot acotado. 🔴 **Rojo** → ≤[N] apuestas pasan → No build, regresar al espacio del problema.
> Detalle metodológico de apuestas y veredictos: [Motor de Evidencia](#/cabeza) §3.2 (el lenguaje de las hipótesis) y §7.3 (el veredicto explícito).

> **Convención.** Cada apuesta se identifica con un **nombre corto** y un **código** (A1, A2, …). El código es la etiqueta para marcar notas y agrupar hallazgos. Siempre que una apuesta se menciona se nombra junto a su código: *"A1 · [nombre]"*. El código nunca viaja solo.

---

### 5 · Metodología

**5.1 Método primario**

[Descripción del método principal con justificación. Ej: "Concept test moderado vía Zoom porque permite think-aloud + escenarios scripted + iteración de guion entre sesiones — cosas que un test async no permitiría con N pequeña."]

- [ ] Entrevistas con SMEs internos (administrador aliado, ejecutivos de cuenta, soporte senior)
- [ ] Entrevistas con usuarios (administradores, personal de plaza, miembros de la mesa directiva)
- [ ] Observación contextual (ir a un tianguis, ver al personal hacer el recorrido de cobro)
- [ ] Pruebas de usabilidad (sobre prototipo o producto vivo)
- [ ] Encuesta post-sesión (validación cuantitativa de hallazgos)

**5.2 Métodos complementarios (si aplica)**

[Si el estudio combina métodos: cuáles, en qué orden, por qué.]

- [ ] Revisión documental (PRDs previos, Initiative Specs cerrados, Impact Reports anteriores)
- [ ] Evaluación heurística contra principios de usabilidad
- [ ] Revisión de analytics (funnels, retención, eventos clave)
- [ ] Análisis competitivo
- [ ] Revisión de tickets Customer Success por categoría

**5.3 Por qué no [método X descartado]**

[Sección breve declarando qué métodos se consideraron y por qué se descartaron. Esto previene cuestionamientos posteriores y deja trazabilidad.]

> Detalle de métodos disponibles: [Motor de Evidencia](#/cabeza) §4 · y la [matriz para elegir método](#/guias/matriz-metodo).

---

### 6 · Perfiles y reclutamiento

**6.1 Perfil de participante**

| Dimensión | Criterio |
| --- | --- |
| Rol | [ej. Administrador titular / asistente / Personal de plaza / Marchante / Mesa directiva] |
| Tamaño de operación | [Rango] |
| Antigüedad como cliente | [Rango. N/A si es prospect] |
| Nivel de uso | [Activo / Medio / Bajo] |
| Otros criterios | [Específicos del estudio] |

**6.2 Tamaño de muestra**

- **N objetivo:** [número]
- **N mínimo viable:** [número]
- **Justificación:** [Razón del rango. Ej: "5–8 para llegar a saturación en cualitativo moderado"]

**6.3 Mezcla cliente / prospect**

- [%] clientes existentes ([N]) — validan fit con producto actual.
- [%] prospects ([N]) — validan adopción y comunicación.

**6.4 Cuotas adicionales**

[Si hay cuotas por tamaño, geografía, etc., listarlas aquí. Mínimo 30% del cupo a perfiles de uso medio o bajo (ver [Motor de Evidencia](#/cabeza) §3.4 · reclutamiento).]

**6.5 Canales de reclutamiento**

- [Canal 1 + esfuerzo esperado]
- [Canal 2 + esfuerzo esperado]
- [Plan B si N < umbral]

**6.6 Incentivo**

- **Monto:** [MXN/USD]
- **Forma:** [Gift card / transferencia / crédito]
- **Condiciones:** [Sesión completada / parcial]

---

### 7 · Tareas y escenarios

[Si el método requiere prototipo o flujos específicos, listar las tareas/escenarios de alto nivel aquí. El detalle operativo (guion, prompts) vive en el [Research Brief](#/plantillas/research-brief), no aquí.]

| Escenario | Apuesta(s) que activa | Duración estimada |
| --- | --- | --- |
| E1 [Nombre del escenario] | [A#] | [min] |
| E2 [...] | [...] | [...] |

---

### 8 · Logística

**8.1 Calendario de alto nivel**

| Día | Tipo | Hito principal |
| --- | --- | --- |
| D1 [fecha] | Preparación | [Hito] |
| D2 [fecha] | Preparación | [Hito] |
| D3 [fecha] | Preparación | Sesión piloto + guion v1.0 |
| D4 [fecha] | Ejecución | Sesión 1–2 |
| D[N] [fecha] | Análisis | Reporte final + entrega al Initiative Spec |

**8.2 Stack confirmado**

| Herramienta | Función | Costo |
| --- | --- | --- |
| [Zoom] | Sesiones moderadas | [Plan existente] |
| [Otter.ai] | Transcripción | [Free / Pro] |
| [Herramienta de documentación] | Wiki + plantillas | [Plan existente] |
| [Sheets] | Notas + análisis | $0 |

**8.3 Roles**

- **Facilitador:** [Nombre]
- **Observador silente:** [Nombre · sesiones que cubre]
- **Recruiter:** [Nombre]
- **Analista:** [Nombre]

**8.4 Consentimiento**

[Documento de consentimiento que el participante firma antes de la sesión. Link a la plantilla.]

---

### 9 · Análisis y entregables

- **Estrategia de Análisis:** ver [Estrategia de Análisis](#/plantillas/estrategia-de-analisis) · {nombre iniciativa} (anexo de este Plan).
- **Reporte de Hallazgos:** ver [Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos). Se anexa a la sub-página [D1 / D2 / D3 / D5] del Initiative Spec.
- **Repositorio de evidencia:** [Link a carpeta con grabaciones, transcripciones, notas crudas]
- **Sesión de presentación:** [30 min · audiencia · fecha tentativa]

---

### 10 · Riesgos y mitigaciones

| Riesgo | Impacto | Probabilidad | Mitigación |
| --- | --- | --- | --- |
| Sign-off se atrasa más de [N] días | Alto | [Media/Alta/Baja] | [Acción concreta] |
| Reclutamiento queda en N < [umbral] | Alto | [...] | [Acción concreta] |
| Sesgo del facilitador (si es autor del prototipo) | Medio | Alta | Observador silente en ≥[N] de [N] sesiones. [Análisis a ciegas](#/guias/analisis-ciegas) en D[#]. Revisión cruzada con [par]. |
| Prototipo falla técnicamente en sesión | Medio | Baja | Probar prototipo en piloto. URL de respaldo. Pivot a preguntas verbales si falla. |

---

### 11 · Embudo de validación (si aplica)

Si el estudio es parte de una secuencia de fases (ej: concept test → usabilidad post-UI), declarar aquí cómo se conectan:

| Fase | Pregunta | Compuerta para avanzar |
| --- | --- | --- |
| Fase 1 [este estudio] | [Pregunta principal] | 🟢 / 🟡 → avanzar a Fase 2. 🔴 → no build. |
| Fase 2 [siguiente estudio] | [Pregunta complementaria] | [Criterio para avanzar a Build / Delivery] |

> Detalle: [Motor de Evidencia](#/cabeza) §7.3 (el veredicto explícito).

---

### 12 · Entregables y plazos

| Entregable | Owner | Fecha | Audiencia |
| --- | --- | --- | --- |
| Plan de Investigación (este doc) | [Nombre] | [D1] | [Sign-off: nombres] |
| Research Brief individual | [Nombre] | [D1] | [Sign-off: nombres] |
| Guion final v1.0 | [Nombre] | [D3] | Equipo de research (interno) |
| Plantilla de notas | [Nombre] | [D3] | Observador (uso operativo) |
| Mid-point check | [Nombre + Observador] | [D mitad] | [Stakeholder] (información) |
| Repositorio de evidencia | [Nombre] | [D último de ejecución] | Equipo (consulta posterior) |
| Reporte de Hallazgos (anexo a Initiative Spec) | [Nombre] | [D último] | Equipo completo |
| Sesión de presentación (30 min) | [Nombre] | [Sem siguiente] | [Audiencia] |

---

### Cierre

Este Plan es la pieza maestra del Discovery de [iniciativa] en su Fase [N]. Se complementa con el [Research Brief](#/plantillas/research-brief), la [Estrategia de Análisis](#/plantillas/estrategia-de-analisis) y el [Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos).

El plan está vivo: si durante ejecución aparecen señales que recomienden ajustarlo, el ajuste se documenta en una nota al pie del documento (no se reescribe silenciosamente). Esto preserva trazabilidad para auditar la decisión final.

---

*— Fin del Plan de Investigación · [Iniciativa] · Fase [N] —*
