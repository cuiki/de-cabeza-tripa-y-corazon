# 🧱 1 · Fundamentos

*Sección de [Cabeza · Motor de Evidencia](#/cabeza)*

---

## 1.1 · Qué es User Research

User Research es el proceso de entender cómo un usuario específico hace uso de una solución específica en un contexto específico. Es investigación aplicada: no produce conocimiento por su cuenta, lo produce al servicio de una decisión.

Ese servicio tiene un destinatario claro: el **Initiative Spec** del [Marco de Desarrollo](#/tripa). Cada estudio de research existe para reducir el riesgo de una decisión que el equipo ya tiene en la mesa — sea entrar a Discovery, pasar a Design, comprometer Sprints de Delivery, o regresar al espacio del problema.

Las plantillas operativas que el Motor de Evidencia produce viven en la barra de [Plantillas, Guías y Craft](#/plantillas): [Plan de Investigación](#/plantillas/plan-de-investigacion) · [Research Brief](#/plantillas/research-brief) · [Estrategia de Análisis](#/plantillas/estrategia-de-analisis) · [Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos).

El research bien hecho produce tres cosas, en orden:

- **Datos** — citas, observaciones, tickets, métricas. No es información todavía.
- **Hallazgos** — patrones que se repiten en N≥3 fuentes independientes.
- **Insights** — interpretación que habilita decisiones Build / Pivot / No build.

La regla más importante del Motor de Evidencia es la **regla del salto**: cada insight tiene que poder reconstruirse hacia abajo, hasta los datos crudos que lo sostienen. Saltarse un nivel es el error más común y el más caro.

## 1.2 · Por qué importa para el Marco de Desarrollo

El [Marco de Desarrollo](#/tripa) asume que las decisiones se toman con evidencia. Pero la evidencia no aparece sola — alguien tiene que producirla, alguien tiene que procesarla y alguien tiene que comunicarla a tiempo para que entre a la decisión, no después.

Hoy, esa responsabilidad está distribuida sin nombre: Customer Success la toca con tickets, Data & Analytics con métricas, Producto y Diseño con pruebas, el liderazgo con decisiones. Sin un marco común, cada área genera evidencia que las otras no consumen, y la decisión final termina apoyándose en intuición o en la voz más fuerte de la sala. El Motor de Evidencia le pone nombre a la práctica para que la suma sea mayor que las partes.

## 1.3 · Marco mental: doble diamante y capas

El research vive en dos espacios:

- **Espacio del problema** — *construir la cosa correcta.* Aquí trabajan los métodos generativos: entrevistas, etnografía, análisis de tickets. Producen información nueva sobre quién es el usuario, qué intenta hacer, qué fricciones encuentra.
- **Espacio de la solución** — *construirla correctamente.* Aquí trabajan los métodos evaluativos: pruebas de concepto, pruebas de usabilidad, A/B tests. Confirman o rechazan si una solución específica resuelve el problema.

Las decisiones de diseño se construyen en **capas sumatorias** (modelo JJ Garrett): Estrategia → Alcance → Estructura → Contenido → Visual. Las capas inferiores sostienen a las superiores. El research nutre todas las capas — no solo la visual ni solo la estratégica.

## 1.4 · Vocabulario base

El Motor de Evidencia adopta el vocabulario del Cuaderno de Adrián Solca. Estos términos se mencionan ahora y se desarrollan en las secciones que siguen:

- **Planeación · Ejecución · Comunicación** — las tres etapas universales de cualquier proceso de investigación. Toda iniciativa de Discovery sigue este orden.
- **Datos · Hallazgos · Insights** — la pirámide de análisis.
- **Generativo vs Evaluativo** — los dos reinos del research según qué producen (información nueva vs validación de información existente).
- **Descriptivo vs Analítico** — los dos reinos del research según qué tipo de dato producen (cualitativo no representativo vs cuantitativo representativo).
- **Metodología vs Método** — la metodología es el racional flexible y único de cada estudio. Los métodos son las recetas rígidas (entrevista, concept test, A/B test).

## 1.5 · Principio rector: justo la investigación necesaria

El balance que el Motor de Evidencia persigue es **suficiente información para decidir, sin caer en falso sentido de seguridad ni en falsa expectativa de certidumbre**. En la práctica:

- En entornos fast-paced — sprints de dos semanas, decisiones que no esperan — el research evaluativo gana casi siempre. Hago un prototipo, lo pongo en manos del usuario, mido. Eso es más rápido y más barato que un discovery profundo, y en la mayoría de iniciativas alcanza para validar.
- El research generativo se reserva para apuestas grandes con incertidumbre alta: nuevos features, nuevos abordajes al producto, exploración de mercados adyacentes. No para optimización ni mejora.
- La pregunta no es *cuánto research*, sino *qué research alimenta esta decisión específica*.

Este principio es la razón por la que el Motor de Evidencia existe como capa explícita y no como un departamento dedicado. La investigación se asigna por iniciativa, no por organigrama.

## 1.6 · Qué no es el Motor de Evidencia

- **No es un proceso encima del [Marco de Desarrollo](#/tripa).** Es la capa que explicita lo que el Marco de Desarrollo ya implica.
- **No es propiedad de una sola área.** Product Design es el facilitador del motor: conduce los estudios cualitativos, organiza la información y convierte los datos en insights. Las demás áreas aportan evidencia; el facilitador la integra.
- **No decide.** Alimenta la decisión. El research clasifica las apuestas con un veredicto explícito (PASA / AMBIGUO / NO PASA por apuesta; 🟢 Verde / 🟡 Ámbar / 🔴 Rojo en agregado). La decisión Build / Pivot / No build la toma el equipo en sesión de presentación, con el reporte como input.
