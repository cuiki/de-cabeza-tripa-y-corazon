# 🧰 4 · Métodos disponibles

*Sección de [Cabeza · Motor de Evidencia](#/cabeza)*

---

## 4.1 · Matriz de decisión: cómo elegir método

Antes del catálogo, esta matriz ayuda a converger hacia el método correcto a partir del tipo de incertidumbre del estudio. Cruzar columna con fila da el método primario; los métodos secundarios se eligen para triangular.

| Tipo de incertidumbre | Pregunta que contesta | Método primario | Método de triangulación | Output esperado |
| --- | --- | --- | --- | --- |
| Problema (espacio del problema) | ¿Existe el problema? ¿Cómo se manifiesta? | Entrevistas en profundidad · Etnografía · Análisis de tickets Customer Success | Encuestas a base · Analytics de funnel | Mental models · friction points · jobs-to-be-done |
| Deseabilidad (espacio de la solución) | ¿La solución resuelve el problema? ¿Resuena? | Prueba de concepto moderada con prototipo | Test de preferencia async · Encuesta a base | Veredicto por apuesta · valencia emocional · vocabulario |
| Usabilidad (espacio de la solución) | ¿La gente puede operar la solución? | Prueba de usabilidad async · Moderada con think-aloud | Tree testing · A/B test sobre flujo | Tasa de éxito · time on task · errores |
| Adopción / intención | ¿La gente realmente lo va a usar? | Fake door / smoke test | Encuesta de intent-to-use · cohort tracking | Tasa de activación · señal de demanda |
| Arquitectura de información | ¿La estructura coincide con el modelo mental? | Card sorting · Tree testing | Entrevistas exploratorias | Taxonomía validada · vocabulario espontáneo |
| Optimización (delivery) | ¿Cuál variante convierte más? | A/B test en producción | Analytics de cohort · encuesta post-uso | Variante ganadora con magnitud y significancia |

> **Cómo se lee.** Una iniciativa puede tocar más de una fila — empezar por la dominante. Para apuestas grandes con alta incertidumbre, combinar dos filas (ej: Problema + Deseabilidad). Versión navegable en la guía [Matriz para elegir método](#/guias/matriz-metodo).

## 4.2 · Catálogo de métodos

Cada método se describe con cinco campos: **Cuándo aplica · Qué información da · Qué información NO da · Tamaño de muestra · Modalidad**. Ordenados de generativo a evaluativo. Catálogo extendido en [Craft · Catálogo de métodos](#/craft/catalogo-metodos).

### Entrevista en profundidad
*Cualitativa · Generativa · Descriptiva*

Conversaciones estructuradas pero abiertas con un participante para extraer información sobre comportamientos, motivaciones, contexto de uso y modelos mentales. Es el método más versátil y el más fácil de hacer mal.

| Campo | |
| --- | --- |
| Cuándo aplica | Cuando no sabemos lo suficiente del problema, del contexto o del usuario. Casi siempre la primera pieza de research que se ejecuta en una iniciativa nueva. |
| Qué da | Mental models, jobs-to-be-done, friction points, vocabulario que usa el usuario, alternativas actuales, contexto de uso. |
| Qué NO da | Lo que la gente realmente hace (vs lo que dice que hace). Para eso, etnografía o pruebas. Tampoco da datos cuantitativos. |
| Muestra | 5–8 por segmento. Saturación entre el sexto y el octavo. |
| Modalidad | Moderada por definición. Zoom funciona; presencial es mejor cuando el contexto es relevante. |

### Etnografía
*Cualitativa · Generativa · Descriptiva*

Observación del usuario en su contexto real, sin moderación activa. El investigador acompaña sin intervenir.

| Campo | |
| --- | --- |
| Cuándo aplica | Cuando el contexto físico o social del uso importa y no se puede reconstruir en sesión moderada. |
| Qué da | Comportamiento real sin sesgo de ambiente controlado. Información descriptiva del contexto. |
| Qué NO da | No permite cuantificar. No revela motivaciones internas (para eso, entrevista en paralelo). |
| Muestra | 4–6 sesiones suelen ser suficientes para detectar patrones contextuales. |
| Modalidad | Presencial preferentemente. Remoto vía screen-recording solo captura el contexto digital. |

### Prueba de concepto
*Cualitativa · Evaluativa · Descriptiva*

Se le presenta al usuario un prototipo o artefacto que comunica una idea, y se mide deseabilidad y comprensión antes de construir. Es el método principal del Discovery Track.

| Campo | |
| --- | --- |
| Cuándo aplica | Antes de comprometer Sprints de Delivery a una solución. Cuando hay apuestas de diseño que requieren validación antes de pasar a Design Spec. |
| Qué da | Deseabilidad de la idea, mental model con que la interpreta el usuario, barreras potenciales, vocabulario espontáneo, valencia emocional (positiva/negativa/neutra) por cada apuesta. |
| Qué NO da | No mide usabilidad ni performance — para eso es la prueba de usabilidad post-UI. No mide intención de uso real (para eso, fake door). |
| Muestra | 5–8 participantes con la mezcla cliente/prospect del Plan. |
| Modalidad | Moderada en Zoom. Prototipo cargado en la herramienta correcta. Observador silente obligatorio. |

> 📋 Estructura operativa de la sesión (guion, escenarios scripted, prompts): [Research Brief](#/plantillas/research-brief).

### Prueba de usabilidad
*Cuantitativa · Evaluativa · Analítica o descriptiva (según modalidad)*

El usuario usa una solución ya construida (o muy avanzada) y se observa qué hace, no qué dice.

| Campo | |
| --- | --- |
| Cuándo aplica | Después de que el concepto pasó. Antes de comprometer release a producción. Típicamente con UI definitiva. |
| Qué da | Métricas: tiempo en tarea, tasa de éxito, errores, clics, abandono. Lo que el usuario hace cuando intenta completar un flujo. |
| Qué NO da | No revela por qué falla (para eso, sesión moderada con think-aloud). No mide deseabilidad — alguien puede completar la tarea sin querer usar el producto. |
| Muestra | Moderada: 5–8. Async: 15–30 mínimo. |
| Modalidad | Async es el caso típico. Moderada cuando el flujo es complejo o nuevo. |

### Test de preferencia
*Cualitativa o cuantitativa · Evaluativa · Descriptiva*

Se le presentan al usuario dos o más alternativas de diseño y se mide cuál prefiere y por qué. Útil cuando el equipo está dividido entre dos enfoques con argumentos válidos de cada lado.

| Campo | |
| --- | --- |
| Cuándo aplica | Cuando hay 2–3 enfoques de diseño candidatos y la decisión interna está estancada. No para decidir entre 5 variantes — eso paraliza al usuario. |
| Qué da | Preferencia (cuál) y razón (por qué). Async con N≥30 da señal cuantitativa de proporción. |
| Qué NO da | No reemplaza una prueba de usabilidad. Una opción puede ser preferida estéticamente pero ser menos usable. La preferencia no es performance. |
| Muestra | Async: 15–30. Moderada: 5–8. |
| Modalidad | Async (forced choice + razón abierta) es el caso típico. |

### Card sorting y tree testing
*Cualitativa o cuantitativa · Generativa o evaluativa · Analítica*

Card sorting: el usuario agrupa tarjetas (típicamente nombres de funcionalidades) en categorías. Tree testing: el usuario navega una estructura para encontrar algo. Ambos prueban si la arquitectura de información coincide con el modelo mental.

| Campo | |
| --- | --- |
| Cuándo aplica | Cuando se está rediseñando navegación, taxonomía o arquitectura de información. Antes de invertir en UI. |
| Qué da | Cómo agrupa el usuario los conceptos, qué nombres usa, dónde busca cosas, qué espera encontrar dónde. |
| Qué NO da | No prueba si el diseño visual funciona — solo la estructura subyacente. |
| Muestra | Card sorting cualitativo: 6–10. Tree testing: 30+ idealmente, 15+ aceptable. |
| Modalidad | Async o moderada para card sorting cualitativo. |

### Encuestas
*Cuantitativa · Generativa o evaluativa · Analítica*

Cuestionarios estructurados aplicados a una muestra grande. Útiles para medir intent-to-use, satisfacción, frecuencia de comportamientos. Útiles también como triangulación de hallazgos cualitativos.

| Campo | |
| --- | --- |
| Cuándo aplica | Cuando ya hay hipótesis específicas que se quieren cuantificar. No como método exploratorio — para eso, entrevistas. |
| Qué da | Distribuciones, proporciones, correlaciones simples, NPS / CSAT, intent-to-use. |
| Qué NO da | El por qué. Las encuestas miden el qué, no el porqué. |
| Muestra | Mínimo 50 para señal débil; 100+ para confianza razonable; 300+ para representatividad. |
| Modalidad | Async (herramienta de encuestas). |

### A/B test
*Cuantitativo · Evaluativo · Analítico*

Dos versiones de una misma cosa (botón, copy, layout) se publican en paralelo y se mide cuál convierte más.

| Campo | |
| --- | --- |
| Cuándo aplica | Cuando hay un cambio acotado con métrica clara de conversión y se necesita decidir entre dos opciones. No para validar ideas grandes — para eso, concept test. |
| Qué da | Cuál variante gana en la métrica medida, con magnitud y significancia. |
| Qué NO da | No revela por qué gana. No funciona para flujos completos o vistas enteras (no se mide el ejercicio integral). |
| Muestra | Suficiente tráfico para alcanzar significancia; depende del baseline. |
| Modalidad | Async, en producción, sin moderación. El usuario nunca sabe que está en una prueba. |

### Fake door / Smoke test
*Cuantitativo · Evaluativo · Analítico*

Se publica una entrada (botón, landing, anuncio) que comunica una funcionalidad que aún no existe. Se mide cuántos usuarios la activan.

| Campo | |
| --- | --- |
| Cuándo aplica | Para medir intención de uso real (vs declarada) antes de construir. La única forma honesta de medir si la gente de verdad va a usar algo. |
| Qué da | Tasa de click/activación. Señal de demanda. |
| Qué NO da | No dice por qué clicaron ni qué esperaban encontrar — para eso, encuesta de seguimiento o entrevista. |
| Muestra | Suficiente tráfico para alcanzar señal interpretable. |
| Modalidad | Async, en producción. Requiere protocolo claro de qué ven los usuarios al dar click (página de "próximamente" + opción de mantenerse informados). |
