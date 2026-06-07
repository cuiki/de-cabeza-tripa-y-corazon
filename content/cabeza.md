# 🧠 Cabeza · Motor de Evidencia

*Parte del sistema [Producto de Cabeza, Tripa y Corazón](#/inicio)*

| | |
| --- | --- |
| **Versión** | v1.0 |
| **Estado** | Documento vivo |
| **Audiencia** | Producto, Diseño, Data & Analytics (Growth), Engineering, Customer Success, Liderazgo |
| **Aplica a** | Cualquier iniciativa, especialmente las que entren al Discovery Track |

---

## Qué es la Cabeza

La **Cabeza** es la práctica transversal con la que un equipo de producto responde a una sola pregunta: **¿por qué los usuarios hacen lo que hacen?** No es un equipo, no es una herramienta, no es un proceso nuevo encima del [Marco de Desarrollo](#/tripa). Es la capa que hace explícito el sistema de inteligencia que el desarrollo de producto ya asume — para poder hablarlo, mejorarlo y asignarle responsables.

La razón de existir de la Cabeza es una sola: **construir sobre conocimiento, no sobre esperanza.** La mayoría de los productos no fracasan por mal diseño ni por mal código, sino por construir lo incorrecto — y eso casi siempre nace de malos insumos en el momento equivocado. El research existe para que las decisiones se tomen con evidencia y no con la opinión más fuerte de la sala.

Dos posturas sostienen esa práctica. La primera es de objetividad: **tú no eres el usuario**, y lo que crees saber sobre él es una hipótesis hasta que la evidencia lo confirme. La segunda es de humildad: una **hipótesis es solo una idea** escrita de forma que se pueda probar — no un compromiso ni una verdad, solo una idea a la que se le da la oportunidad de estar equivocada.

Las tres piezas del sistema se reparten el trabajo como se reparte el sabor de un buen taco:

- 🔥 **[Tripa — Marco de Desarrollo de Producto](#/tripa)** — el cómo construimos, con disciplina y consistencia de ejecución.
- ❤️ **[Corazón — Playbook de Diseño de Producto](#/corazon/diseno)** — el cómo lo construimos con craft y cuidado del usuario.
- 🧠 **Cabeza — Motor de Evidencia** — el cómo sabemos qué construir, con objetividad. (Este documento.)

---

## Qué es la Investigación de Producto

Investigar es el estudio sistemático de información para establecer hechos y formar conclusiones. En contexto de producto, el nombre específico para esa práctica es: **Investigación de Producto**.

> **Investigación de Producto = Investigación de Usuarios + Investigación de Mercado**

Las dos miran al mismo problema desde alturas distintas:

| | Investigación de Usuarios 👥 | Investigación de Mercado 🌊 |
| --- | --- | --- |
| Vista | Micro. La persona y su comportamiento. | Macro. La industria y la competencia. |
| Pregunta | ¿Cómo usa esta persona el producto? ¿Por qué actúa así? | ¿Cómo están las aguas? ¿Quién es quién? ¿Qué oportunidades y amenazas hay? |
| Foco | El usuario, sus necesidades, su contexto, su modelo mental. | Segmentos, tendencias, marcas, competencia, posicionamiento. |
| Métodos típicos | Entrevistas, concept tests, pruebas de usabilidad, etnografía, análisis de tickets. | Análisis competitivo, benchmarks de industria, segmentación, posicionamiento, pricing research. |
| Modalidad típica | Hoy, mayoritariamente remota: videollamada, herramientas de test async, formularios. | Mezcla de research secundario (reportes, analytics públicos) y primario (entrevistas a buyers, no users). |

*Referencia: Dr. Nick Fine, [sobre las diferencias entre User Research y UX](https://www.linkedin.com/posts/drnickfine_the-differences-between-user-research-ux-activity-7290193863326011392-grzd).*

Las dos son necesarias. Sin Investigación de Usuarios, el producto se construye en el aire; sin Investigación de Mercado, se construye en una burbuja.

---

## Qué documenta hoy el Motor de Evidencia

**Importante:** El Motor de Evidencia actual documenta solo **Investigación de Usuarios.** Investigación de Mercado está pendiente de documentar como capa explícita del Motor de Evidencia.

Esto es decisión consciente, no omisión. La función de Investigación de Mercado suele vivir distribuida entre el PM (estrategia, posicionamiento) y Data & Analytics (Growth) (analítica de funnel, retención). Bajo Product-Led Growth, **Data & Analytics (Growth) es quien define y documenta la estrategia de Investigación de Mercado** que esta capa todavía no formaliza. Cuando se documente, vivirá en una sección hermana con su propio playbook.

#### Roadmap del Motor de Evidencia

| Capa | Estado | Owner futuro |
| --- | --- | --- |
| Investigación de Usuarios | ✅ Documentada (este documento) | Product Design — facilitador del motor |
| Investigación de Mercado | ⏳ Pendiente de documentar | Data & Analytics (Growth) |
| Conexión entre ambas (triangulación cualitativa-cuantitativa-mercado) | ⏳ Pendiente | TBD |

**Cuando este documento dice "research" sin calificativo, se refiere a Investigación de Usuarios.** Si en algún punto hace referencia a research de mercado, lo nombra explícitamente.

---

## Por qué existe el Motor de Evidencia

Hoy, la responsabilidad de entender al usuario está distribuida sin nombre: Customer Success la toca con tickets, Data & Analytics con métricas, Producto y Diseño con pruebas, el liderazgo con decisiones. Sin un marco común, cada área genera evidencia que las otras no consumen, y la decisión final termina apoyándose en intuición o en la voz más fuerte de la sala.

El Motor de Evidencia le pone nombre a la práctica para que la suma sea mayor que las partes.

---

## Cómo opera

El motor procesa información en tres niveles, siguiendo el modelo Datos → Hallazgos → Insights:

1. **Datos crudos** — citas, observaciones, tickets, métricas. No es información todavía.
2. **Hallazgos** — patrones que se repiten en N≥3 fuentes independientes.
3. **Insights** — interpretación que habilita decisiones Build / Pivot / No build.

La regla del salto es la más importante: cada insight tiene que poder reconstruirse hacia abajo, hasta los datos crudos que lo sostienen. Saltarse un nivel es el error más común y el más caro.

---

## Cómo se documenta

El motor opera sobre cinco documentos. Uno es el meta-doc — **este Playbook** — que rige toda la práctica. Los otros cuatro son operativos por iniciativa:

- 📋 **[Plan de Investigación](#/plantillas/plan-de-investigacion)** (padre)
- 📝 **[Research Brief](#/plantillas/research-brief)** (anexo de sesión)
- 🔬 **[Estrategia de Análisis](#/plantillas/estrategia-de-analisis)** (cómo se procesa el dato)
- 📊 **[Reporte de Hallazgos](#/plantillas/reporte-de-hallazgos)** (cómo se comunica el veredicto)

> 🌟 **Regla de oro:** Ningún test sin Brief firmado, ningún reporte sin Estrategia, ningún hallazgo al Initiative Spec sin presentación al equipo.

---

## Quién participa

Cinco equipos, una habilidad por equipo:

- **Customer Success** — escucha estructurada y categorización con dimensiones etnográficas.
- **Data & Analytics** — triangulación cualitativa-cuantitativa.
- **Ingeniería** — evaluación temprana de viabilidad técnica.
- **PM** — defensa del rigor de evidencia bajo presión.
- **Product Design** — síntesis sin sesgo de confirmación.

Product Design es el facilitador del motor y dueño del proceso de investigación; las demás áreas aportan evidencia que el facilitador organiza y convierte en insights.

---

## Qué no es el Motor de Evidencia

- **No es un proceso encima del [Marco de Desarrollo](#/tripa).** Es la capa que explicita lo que el Marco de Desarrollo ya implica.
- **No es propiedad de una sola área.** Product Design facilita el motor y es dueño del proceso de investigación, pero la evidencia es contribución de todo el equipo: cada área aporta datos que el facilitador organiza y convierte en insights.
- **No decide.** Alimenta la decisión. El research clasifica las apuestas con un veredicto explícito (PASA / AMBIGUO / NO PASA por apuesta; 🟢 Verde / 🟡 Ámbar / 🔴 Rojo en agregado). La decisión Build / Pivot / No build la toma el equipo en sesión de presentación, con el reporte como input.

---

## Contenido

El Motor de Evidencia se desarrolla en catorce secciones, cada una en su propia página:

1. [1 · Fundamentos](#/cabeza/fundamentos)
2. [2 · Tipos de research](#/cabeza/tipos-de-research)
3. [3 · Anatomía del Plan de Investigación](#/cabeza/anatomia-del-plan-de-investigacion)
4. [4 · Métodos disponibles](#/cabeza/metodos-disponibles)
5. [5 · Ejecución](#/cabeza/ejecucion)
6. [6 · Análisis](#/cabeza/analisis)
7. [7 · Comunicación](#/cabeza/comunicacion)
8. [8 · Estándares de calidad](#/cabeza/estandares-de-calidad)
9. [9 · Anti-patrones y red flags](#/cabeza/anti-patrones-y-red-flags)
10. [10 · Stack de herramientas](#/cabeza/stack-de-herramientas)
11. [11 · Conexión con el Marco de Desarrollo](#/cabeza/conexion-con-el-marco-de-desarrollo)
12. [12 · Plantillas](#/cabeza/plantillas)
13. [13 · Recursos y referencias](#/cabeza/recursos-y-referencias)
14. [14 · Glosario](#/cabeza/glosario)
