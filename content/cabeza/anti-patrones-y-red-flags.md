# 🚩 9 · Anti-patrones y red flags

*Sección de [Cabeza · Motor de Evidencia](#/cabeza)*

---

## 9.1 · Anti-patrones en la planeación

| Anti-patrón | Síntoma | Mitigación |
| --- | --- | --- |
| Research solution-first | El plan describe la solución antes que la pregunta. El research "valida" lo ya decidido. | Forzar que la pregunta de investigación se escriba antes de mencionar cualquier diseño. |
| Objetivo vago | "Queremos saber qué piensan los usuarios." Es deseo, no objetivo. | Aplicar la prueba del objetivo: "…y según lo que descubramos, vamos a decidir si X o Y." |
| Reclutamiento sesgado | Los participantes son los amigos del equipo o los power users que siempre contestan. | Definir cuotas por nivel de uso y antigüedad como cliente. Reservar ≥30% del cupo a perfiles de uso medio o bajo. |
| Método antes del objetivo | "Vamos a hacer entrevistas" antes de saber qué se quiere averiguar. | El método se elige al final de la planeación, no al principio. Las cuatro preguntas de §3.1 anteceden a la elección. |
| Saltarse el Plan | Estudio que arranca sin documento aprobado. | Regla de oro: ningún test sin Plan firmado. |

## 9.2 · Anti-patrones en la ejecución

| Anti-patrón | Síntoma | Mitigación |
| --- | --- | --- |
| Liderar al testigo | "¿No te parece útil que…?" / "¿Verdad que sería más fácil así?" | Revisar el guion del Brief en busca de preguntas dirigidas y reformularlas a neutrales. |
| Enseñar el producto | El facilitador explica cómo funciona el prototipo, lo que destruye el dato. | Practicar el reflejo de "contestar con preguntas" antes de la primera sesión. Si el participante no entiende, ese es el hallazgo. |
| No tener observador | Una sola persona facilita y toma notas — pierde 30% de la sesión. | Siempre dos personas en moderada: facilitador + observador silente. No es opcional. |
| Sesión muy larga | Pasada la hora, el usuario se cansa y la calidad del dato baja. | 60 min máximo, idealmente 45. |
| Saltar el pre-flight | Herramienta no probada, prototipo roto, grabación que no arranca. | Pre-flight check obligatorio antes de cada sesión (§5.1). |

## 9.3 · Anti-patrones en el análisis y reporte

| Anti-patrón | Síntoma | Mitigación |
| --- | --- | --- |
| Cherry-picking de citas | Reportar solo las citas que confirman lo que se quería confirmar. | Reportar también los hallazgos que contradicen las hipótesis iniciales. El análisis a ciegas (§6.4) es la mitigación estructural. |
| Generalizar desde N=1 | "Los usuarios piensan que…" cuando solo un participante lo dijo. | Nunca usar plurales sin ≥3 confirmaciones. Si es observación aislada relevante: "Un participante mencionó…" |
| Saltarse el hallazgo | Reportar la interpretación como si fuera el dato. | La regla del salto: cada insight debe poder reconstruirse hacia abajo hasta el dato crudo (§6.2). |
| Reportar en lugar de presentar | Mandar el Reporte por Slack y esperar que el equipo lo lea. Nadie lo lee. | Presentación viva de 30 min, con discusión y registro de decisiones (§7.4). |
| No conectar con la decisión | Reporte que describe lo que pasó pero no recomienda qué hacer. | Cada hallazgo termina en "Recomendación: …" explícita. Veredicto por apuesta (§7.3). |
| Decidir desde la silla del investigador | El investigador concluye Build/Pivot/No build y lo presenta como decisión tomada. | El reporte recomienda. El equipo decide. Separación estructural (§7.5). |

## 9.4 · Red flags estructurales

Señales de que la práctica de research del equipo necesita revisión, más allá de un estudio puntual:

- **Más del 30% de las iniciativas que entran a Delivery vuelven a Discovery** por incertidumbre que apareció en construcción. → El Discovery se está cortando muy temprano.
- **Los Impact Reports no concuerdan con las predicciones del research.** → El research está produciendo conjeturas, no validaciones.
- **Más de la mitad del equipo no consume los reportes.** → El formato o la cadencia de comunicación no está funcionando.
- **La misma pregunta aparece en estudios consecutivos.** → Los hallazgos no se están consolidando en conocimiento institucional.
- **El Plan se redacta después de empezar las sesiones.** → El proceso se está usando como justificación retrospectiva, no como guía.

Cuando aparece una red flag, no se ataca el estudio en curso — se levanta en la **Retrospectiva de Proceso del Cooldown** ([Marco de Desarrollo](#/tripa) §2) para ajustar el sistema.

## 9.5 · Conexión con las Red Flags del Marco de Desarrollo

Algunas de las 15 Red Flags que el [Marco de Desarrollo](#/tripa) lista en su Sección 11 son directamente relevantes para el research:

- 🚩 **Red Flag #5:** *"La deuda técnica y de diseño están siempre fuera de scope."* La deuda de research también: si los hallazgos pendientes nunca entran al Cooldown, se acumulan y el motor pierde memoria.
- 🚩 **Red Flag #12:** *"Alguien va directo a otra área a solicitar cambios sin pasar por el proceso."* Aplica a research también: pedidos de "una entrevistita rápida" sin Plan ni Brief no se aceptan; se redirigen al Discovery Track.
- 🚩 **Red Flag #15:** *"Las iniciativas se desarrollan porque 'el cliente dijo'."* La traducción al Motor de Evidencia: una solicitud de cliente puede ser señal de Oportunidad válida, pero pasa primero por triangulación con Customer Success y Data & Analytics antes de tocar un Plan.
