# 📣 7 · Comunicación

*Sección de [Cabeza · Motor de Evidencia](#/cabeza)*

---

> 📋 Plantilla: [Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos).

## 7.1 · Documentación final

Cada estudio produce dos documentos al cierre:

- **Reporte de hallazgos** — documento principal de consumo. Tiene la narrativa, los insights, las recomendaciones, y se anexa al **Initiative Spec D2** de la iniciativa. → [Plantilla](#/plantillas/reporte-de-hallazgos)
- **Repositorio de evidencia** — carpeta con grabaciones, transcripciones, notas y datos crudos. Sirve para que cualquier persona del equipo pueda re-verificar un hallazgo en el futuro o reusar la data en otro estudio.

## 7.2 · Estructura del reporte

| Sección | Qué contiene |
| --- | --- |
| 1. Contexto del estudio | Pregunta de investigación, apuestas evaluadas, método, calendario, participantes. |
| 2. Validez del estudio | Limitaciones de muestra, sesgos identificados, qué tan generalizable es la información. |
| 3. Hallazgos por apuesta | Cada apuesta con su veredicto explícito y la evidencia que lo sostiene. |
| 4. Insights | Hallazgo · Interpretación · Implicación para los hallazgos centrales. |
| 5. Recomendación | Veredicto global y propuesta de siguiente paso. |
| 6. Anexos | Citas textuales, capturas, tabla completa de tagging. |

## 7.3 · Veredicto explícito

El reporte clasifica las apuestas — no recomienda decisiones genéricas:

| Veredicto por apuesta | Significado |
| --- | --- |
| ✅ PASA | La evidencia respalda la apuesta. Procede a Build. |
| ⚠️ AMBIGUO | La evidencia es mixta o insuficiente. Requiere rediseño y re-test, o investigación complementaria. |
| ❌ NO PASA | La evidencia contradice la apuesta. Requiere Pivot o descarte. |

Y un veredicto global agregado:

| Veredicto global | Criterio | Decisión sugerida |
| --- | --- | --- |
| 🟢 Verde | ≥5 apuestas pasan. | Build. |
| 🟡 Ámbar | 3–4 apuestas pasan. | Pivot acotado. |
| 🔴 Rojo | ≤2 apuestas pasan. | No build, regresar al espacio del problema. |

Los umbrales se ajustan al estudio; los del ejemplo son los del Plan de Actividades. Lo importante es que se definan **antes** de ver los datos, no después.

## 7.4 · Presentación viva

El reporte se presenta de manera viva al equipo. **No se manda por Slack y se espera que lo lean** — nadie lo lee. La presentación es la diferencia entre un reporte que cambia decisiones y un PDF que muere en una carpeta.

Estructura sugerida (~30 min):

| Bloque | Tiempo | Contenido |
| --- | --- | --- |
| Apertura | 3 min | Recordar la pregunta de investigación y las apuestas. |
| Validez | 3 min | Limitaciones del estudio. Qué se puede y no se puede afirmar. |
| Hallazgos por apuesta | 12 min | Veredicto + evidencia + cita representativa por cada apuesta. |
| Insights y recomendación | 7 min | Los 3–5 insights centrales. Recomendación global. |
| Discusión y decisión | 5 min | El equipo decide. El facilitador modera, no decide. |

## 7.5 · Quién decide

El reporte **recomienda**. El equipo **decide**. La decisión Build / Pivot / No build se toma en sesión de presentación, no en silla del investigador. Esta separación es estructural en el Motor de Evidencia — sin ella, el research se vuelve indistinguible de la opinión del investigador.
