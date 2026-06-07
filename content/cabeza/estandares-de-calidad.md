# ✔️ 8 · Estándares de calidad

*Sección de [Cabeza · Motor de Evidencia](#/cabeza)*

---

## 8.1 · Estándares de planeación

Antes de pasar a ejecución, el Plan debe cumplir:

- **Decisión nombrada.** ¿La pregunta de investigación nombra una decisión específica que el estudio desbloquea? (*"Para entender mejor a los usuarios"* no califica.)
- **Apuestas explícitas.** ¿Cada apuesta tiene observable + umbral de decisión definidos antes de ver datos?
- **Método justificado.** ¿La metodología explica por qué se eligió ese método y por qué se descartaron las alternativas?
- **Reclutamiento balanceado.** ¿Las cuotas reservan ≥30% del cupo a perfiles de uso medio o bajo?
- **Riesgos documentados.** ¿Los principales riesgos del estudio están listados con mitigación concreta?
- **Sign-off real.** ¿Hay aprobación escrita de los stakeholders antes del primer participante?

## 8.2 · Estándares de ejecución

Durante las sesiones, cada una debe cumplir:

- **Pre-flight check completo.** ¿Los 6 ítems del checklist (§5.1) están marcados antes de cada sesión?
- **Dos personas mínimo en moderada.** ¿Hay facilitador + observador silente? El observador no interviene.
- **Consentimiento documentado.** ¿El participante firmó el consentimiento antes de que empezara la grabación?
- **Sesión dentro del rango de tiempo.** ¿La sesión duró ≤60 min? Si excedió, ¿se documentó por qué?
- **Notas etiquetadas el mismo día.** ¿El tagging de las observaciones se completó el mismo día de la sesión, no acumulado al final?

## 8.3 · Estándares de análisis

Antes de declarar hallazgos, el análisis debe cumplir:

- **Análisis a ciegas ejecutado.** Si el facilitador también diseñó la solución, ¿se hizo [análisis a ciegas](#/guias/analisis-ciegas) con observador o tercero?
- **Regla del N≥3 respetada.** ¿Todos los hallazgos reportados aparecen en ≥3 fuentes independientes? Las observaciones aisladas se reportan como tal.
- **Triangulación documentada.** ¿Cada hallazgo principal tiene al menos una fuente alternativa que lo confirme (Customer Success, analytics, demos previas)?
- **Regla del salto respetada.** ¿Cada insight puede reconstruirse hacia abajo hasta el dato crudo? Si no, no es insight, es opinión.
- **Hallazgos contradictorios incluidos.** ¿El análisis incluye hallazgos que contradicen las hipótesis iniciales, o solo los que las confirman?

## 8.4 · Estándares de comunicación

Antes de publicar el reporte y presentarlo:

- **Veredicto explícito.** ¿Cada apuesta tiene su veredicto (PASA / AMBIGUO / NO PASA) y el estudio tiene un veredicto global (🟢 / 🟡 / 🔴)?
- **Validez documentada.** ¿El reporte declara explícitamente las limitaciones del estudio (sesgos, muestra, factores que comprometen los datos)?
- **Insights con la fórmula completa.** ¿Cada insight tiene Hallazgo · Interpretación · Implicación? Falta de cualquiera = no es insight.
- **Revisión cruzada.** Si el facilitador también diseñó la solución, ¿un par revisó el reporte antes de la presentación?
- **Presentación viva agendada.** ¿Hay sesión de 30 min programada con el equipo? Slack no cuenta.
- **Repositorio de evidencia accesible.** ¿Las grabaciones, transcripciones, plantillas de notas y datos crudos están en una carpeta compartida con el equipo?

## 8.5 · Auditoría retrospectiva

Cada estudio cerrado puede ser auditado retrospectivamente con esta lista. Si más del 30% de los puntos no se cumplió, el estudio se marca como **estudio en falsificación parcial** — sus hallazgos siguen siendo input, pero con confianza reducida.

Esta auditoría se ejecuta cuando:

- Un Impact Report contradice las predicciones del estudio (el estudio falló — ¿por qué?).
- Un nuevo estudio sobre el mismo tema arroja resultados distintos (¿cuál creemos?).
- Un nuevo miembro del equipo quiere consumir hallazgos viejos (¿son confiables?).

> **Nota.** Los estándares no son perfeccionismo. Son la diferencia entre research que predice y research que adivina. Si una iniciativa tiene urgencia que impide cumplir con todos los estándares, el Protocolo de Urgencias del [Marco de Desarrollo](#/tripa) (§11) aplica — pero el post-mortem es obligatorio.

## 8.6 · Tamaños de muestra

| Método | Mínimo | Recomendado | Saturación |
| --- | --- | --- | --- |
| Entrevistas en profundidad | 5 | 6–8 | 8–12 |
| Prueba de concepto moderada | 5 | 6–8 | 8–10 |
| Prueba de usabilidad moderada | 5 | 6–8 | 8–10 |
| Prueba de usabilidad async | 15 | 20–25 | 30+ |
| Test de preferencia async | 15 | 20–30 | 50+ |
| Encuesta cuantitativa | 50 | 100–200 | 300+ |
| Card sort / Tree test | 8 | 15–25 | 30+ |

El mínimo es el piso por debajo del cual el estudio no se debe ejecutar. El recomendado es el rango de costo / beneficio óptimo. Saturación es el punto donde añadir participantes ya no produce hallazgos nuevos — útil saber para no sobre-reclutar.

## 8.7 · Mezcla de fuentes

Default sugerido por tipo de iniciativa:

| Tipo de iniciativa | Clientes | Prospects | Ex-clientes |
| --- | --- | --- | --- |
| Mejora de feature existente | 80–100% | 0–20% | 0% |
| Feature nuevo en producto existente | 60–70% | 30–40% | 0% |
| Línea de producto nueva | 40–50% | 50–60% | 0–10% |
| Estudio de churn | 20–30% | 0% | 70–80% |

## 8.8 · Incentivos

El incentivo no es un soborno — es reconocimiento de que el participante está cediendo tiempo y atención. Define el incentivo antes de reclutar, no después.

- **Sesión moderada de 60 min:** MXN 600–1,000 (gift card Amazon o transferencia).
- **Sesión moderada de 30–45 min:** MXN 400–600.
- **Test async (15–20 min):** MXN 150–300.
- **Encuesta corta (5–10 min):** MXN 50–100 o sorteo de un premio mayor.
- **Early access / créditos en plataforma:** alternativa válida para clientes existentes que valoran el producto. Comunicar valor monetario equivalente.

## 8.9 · Anti-bias checklist

Antes de cada estudio, verificar (versión navegable: [Anti-bias checklist](#/guias/anti-bias)):

- [ ] ¿El reclutamiento mezcla niveles de uso? (No solo power users.)
- [ ] ¿Las preguntas son neutras? (Evitar "¿No te parece útil…?" y similares.)
- [ ] ¿El facilitador conoce su sesgo de confirmación? (Quien diseña la solución no debe facilitar la prueba sin un observador externo.)
- [ ] ¿Hay un observador adicional tomando notas independientes?
- [ ] ¿La interpretación se hace con al menos dos personas? (Análisis a ciegas en paralelo, luego comparación.)
- [ ] ¿Los hallazgos se cruzaron con al menos una fuente alternativa antes de reportarse?
