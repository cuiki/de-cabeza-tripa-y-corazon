# 📄 12 · Plantillas

*Sección de [Cabeza · Motor de Evidencia](#/cabeza)*

---

El Motor de Evidencia distingue dos categorías de plantillas:

- **Operativas** (§12.1) — son las que estructuran el flujo de un estudio. El Plan, el Brief y todo lo que cuelga de ellos. Sin estas, el estudio no se ejecuta.
- **De soporte y método** (§12.2) — son las que aceleran tareas específicas dentro del flujo. Un facilitador puede tener una sesión sin ellas, pero las usa cuando aplican porque se ahorra tiempo y reduce errores. No reemplazan al Brief — lo complementan.

## 12.1 · Plantillas operativas

El Motor de Evidencia opera sobre **6 plantillas operativas reusables**. Una es opcional según la iniciativa (Voiceover); las otras cinco son el flujo estándar.

**Cómo se relacionan**

```
Plan de Investigación  ←  Documento padre por iniciativa
    │
    ├─ Research Brief                  (anexo · uno por test individual)
    │     │
    │     └─ Notas de Sesión           (una por sesión moderada)
    │
    ├─ Voiceover Internal Review       (opcional · prototipos para review interno)
    │
    ├─ Estrategia de Análisis          (anexo · cómo se procesa el dato)
    │
    └─ Reporte de Hallazgos            (output final · se anexa al Initiative Spec)
```

**Regla de oro:** ningún test sin Brief firmado · ningún reporte sin Estrategia · ningún hallazgo al Initiative Spec sin presentación al equipo.

### [Plan de Investigación](#/plantillas/plan-de-investigacion)

| Campo | Detalle |
| --- | --- |
| **Qué es** | Documento padre por iniciativa. Cubre objetivo, metodología, reclutamiento, logística, criterios de éxito, riesgos. |
| **Cuándo se usa** | En Planeación · al inicio de cada iniciativa de Discovery, antes de reclutar. Se redacta en Cooldown; se ejecuta en Sprint siguiente. |
| **Fase** | D1 (research generativo) · D2 (concept tests) · D3 (usabilidad async). Vive en la sub-página correspondiente del Initiative Spec. |
| **Quién la usa** | Owner: PD (redacta y conduce). Sign-off: PM + PD. Observador: Data & Analytics. Recruiter: Customer Success. |
| **Cómo se relaciona** | Es el padre. Adentro vive el Research Brief (uno o varios), la Estrategia de Análisis, y referencia al Reporte de Hallazgos como output. |

### [Research Brief](#/plantillas/research-brief)

| Campo | Detalle |
| --- | --- |
| **Qué es** | Anexo operativo del Plan. Una página de hipótesis, observables, guion en 4 bloques, escenarios scripted, prompts de respaldo, plantilla de notas. Pieza que el facilitador tiene en pantalla durante cada sesión. |
| **Cuándo se usa** | En Planeación (redacción) y Ejecución (durante cada sesión). Antes de cada test individual dentro del Plan. |
| **Fase** | Misma que el Plan que lo contiene (D1, D2, D3). |
| **Quién la usa** | Owner: PD (redacta y ejecuta). Sign-off: junto con el Plan. Audiencia operativa: facilitador + observador. |
| **Cómo se relaciona** | Anexo del Plan. Si una iniciativa tiene varios tests (ej: piloto + concept test), tiene un Brief por cada uno. |

### [Notas de Sesión](#/plantillas/notas-de-sesion)

| Campo | Detalle |
| --- | --- |
| **Qué es** | Plantilla simple por sesión moderada: pre-flight check, captura cronológica por bloque (Cita / Observación / Inferencia), tagging por apuesta y valencia, debrief facilitador-observador. |
| **Cuándo se usa** | En Ejecución · durante y después de cada sesión moderada. |
| **Fase** | Misma que el Brief que las activa. |
| **Quién la usa** | Owner: observador (captura en vivo) + facilitador (debrief). |
| **Cómo se relaciona** | Una hoja por sesión. Al cerrar el estudio, todas se consolidan al sheet maestro para el análisis. |
| **Recurso paralelo** | Existe también una versión en hoja de cálculo con fórmulas para análisis cuantitativo agregado (tagging por apuesta, conteos de valencia, veredicto preliminar automático). Vive como herramienta aparte. Para tagging y análisis cuantitativo, usar la hoja de cálculo; para notas conceptuales, la versión en texto alcanza. |

### Voiceover Internal Review *(⏳ en camino)*

| Campo | Detalle |
| --- | --- |
| **Qué es** | Documento que acompaña la revisión interna asíncrona de un prototipo antes del piloto externo. Voiceover narrado por flujo, decisiones controvertidas explicadas, lista de qué se necesita del equipo. |
| **Cuándo se usa** | Entre construcción del prototipo y piloto del concept test. Solo iniciativas que requieran prototipo. |
| **Fase** | D2 (Discovery Sprint), antes del concept test externo. |
| **Quién la usa** | Owner: PD. Audiencia: equipo completo. |
| **Cómo se relaciona** | Opcional, no parte del flujo principal. No es prerequisito del Brief — es un mecanismo del PD para alinearse con el equipo antes de exponer el prototipo. |

### [Estrategia de Análisis](#/plantillas/estrategia-de-analisis)

| Campo | Detalle |
| --- | --- |
| **Qué es** | Anexo del Plan. Define cómo se ejecutan los 4 pasos del análisis (Revisar → Codificar → Temáticas → Insights), con análisis a ciegas, triangulación, regla del N≥3, y los 5 outputs del análisis. |
| **Cuándo se usa** | En Comunicación (preparación) · apenas se cierra la ejecución, antes de tagear. |
| **Fase** | Misma que el Plan. |
| **Quién la usa** | Owner: PD (redacta y ejecuta). Co-facilita: observador (análisis a ciegas). Revisor: par (revisión cruzada del reporte). |
| **Cómo se relaciona** | Anexo del Plan. Su output alimenta el Reporte de Hallazgos. |

### [Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos)

| Campo | Detalle |
| --- | --- |
| **Qué es** | Output final del estudio. Resumen ejecutivo con veredicto (🟢/🟡/🔴), contexto, validez, hallazgos por apuesta con insights (Hallazgo · Interpretación · Implicación), recomendación. |
| **Cuándo se usa** | En Comunicación · al cierre del análisis. Se presenta vivo al equipo en sesión de 30 min — no se manda por Slack. |
| **Fase** | Se anexa a la sub-página del Initiative Spec según fase: D2 (concept test, antes del Kick-off), D3 (usabilidad post-UI, antes del Product Jam), D5 (post-release, en el Impact Report). |
| **Quién la usa** | Owner: PD (redacta y presenta). Audiencia: equipo completo (decide en sesión). |
| **Cómo se relaciona** | Output final. Cierra el estudio. La decisión Build / Pivot / No build la toma el equipo en la presentación viva, con el reporte como input. |

**Tabla resumen · plantillas operativas**

| Plantilla | Etapa | Fase | Owner | Padre / Anexo |
| --- | --- | --- | --- | --- |
| [Plan de Investigación](#/plantillas/plan-de-investigacion) | Planeación | D1 / D2 / D3 | PD | Padre |
| [Research Brief](#/plantillas/research-brief) | Planeación / Ejecución | D1 / D2 / D3 | PD | Anexo del Plan |
| [Notas de Sesión](#/plantillas/notas-de-sesion) | Ejecución | D1 / D2 / D3 | Observador | Anexo del Brief |
| Voiceover Internal Review | Ejecución (interno) | D2 | PD | Opcional |
| [Estrategia de Análisis](#/plantillas/estrategia-de-analisis) | Comunicación | D1 / D2 / D3 | PD | Anexo del Plan |
| [Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos) | Comunicación | D2 / D3 / D5 | PD | Output final |

## 12.2 · Plantillas de soporte y método

Cinco plantillas que aceleran tareas específicas dentro del flujo. No reemplazan al Brief — lo complementan. Cada una se usa cuando la situación específica aplica; ninguna es obligatoria en todos los estudios.

| Plantilla | Cuándo aplica | Relación con el Brief |
| --- | --- | --- |
| [Probing Questions](#/plantillas/probing-questions) | Toda sesión moderada | Banco de preguntas para insertar en el guion del Brief |
| [Guía de Discusión para Entrevista](#/plantillas/guia-de-discusion) | Estudios generativos (entrevistas) | Sustituye o complementa el guion del Brief |
| [Script para Prueba de Usabilidad Moderada](#/plantillas/script-usabilidad) | Estudios evaluativos con UI | Sustituye o complementa el guion del Brief |
| [Preguntas para Investigación de Dashboard](#/plantillas/preguntas-dashboard) | Iniciativas con dashboards/data-viz | Complementa el guion con preguntas del dominio |
| [Debrief y Síntesis Rápida](#/plantillas/debrief-sintesis) | Post-sesión, día mismo | Acelera el debrief facilitador-observador entre el cierre de sesión y el análisis formal |

> **Las plantillas completas viven en [Plantillas, Guías y Craft](#/plantillas).** Esta sección es el índice: qué es cada plantilla, cuándo se usa y quién la posee. El template lleno vive en el repositorio central. Una sola fuente de verdad.
