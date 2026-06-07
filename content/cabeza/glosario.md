# 📖 14 · Glosario

*Sección de [Cabeza · Motor de Evidencia](#/cabeza)*

---

## Términos del Cuaderno de Adrián Solca

- **Planeación · Ejecución · Comunicación** — Las tres etapas universales de cualquier proceso de investigación. Planeación reduce variables fuera de control; Ejecución prioriza extracción de información; Comunicación cierra el loop al servicio del equipo.
- **Las cuatro preguntas de planeación** — ¿Qué queremos saber? ¿De quién? ¿Cómo lo extraemos? ¿Para qué va a servir saberlo? La cuarta es la trampa: si la respuesta no nombra una decisión específica, el plan no está listo.
- **Datos · Hallazgos · Insights** — La pirámide de análisis. Datos son crudos. Hallazgos son patrones que se repiten en N≥3 fuentes independientes. Insights son la interpretación, con la fórmula Hallazgo · Interpretación · Implicación. Cada insight debe poder reconstruirse hacia abajo hasta el dato crudo (regla del salto).
- **Generativo (método)** — Produce información nueva sobre el espacio del problema. Pregunta *qué problema vale la pena resolver*. Métodos: entrevistas, etnografía, análisis de tickets. Se reserva para apuestas grandes con alta incertidumbre.
- **Evaluativo (método)** — Confirma o rechaza información existente sobre una solución. Pregunta *si esta solución resuelve el problema*. Métodos: prueba de concepto, usabilidad, A/B test, encuesta. Carga la mayor parte del trabajo en un producto en evolución continua.
- **Descriptivo vs Analítico** — Eje ortogonal a Generativo/Evaluativo. Descriptivo = cualitativo, no representativo. Analítico = cuantitativo, representativo con muestra suficiente.
- **Justo la investigación necesaria** — Principio rector adaptado de Erika Hall: el balance entre suficiente información para decidir y no caer ni en falso sentido de seguridad ni en falsa expectativa de certidumbre.
- **Metodología vs Método** — Metodología = el racional flexible y único de cada estudio. Método = la receta rígida que se ejecuta. Una metodología combina varios métodos.

## Términos del Marco de Desarrollo

- **Discovery Track / Delivery Track** — Los dos carriles del Dual-Track Agile. Discovery valida qué construir; aquí vive el research. Delivery construye bien. La asignación se decide en el Opportunity Mapping según nivel de incertidumbre.
- **Initiative Spec** — Documento vivo que acompaña cada iniciativa por las 5Ds. Sub-páginas: D1 (PRD), D2 (Design Spec + RFC), D3 (ADR), D4 (Release Checklist), D5 (Impact Report).
- **Initiative Spec D2** — Sub-página D2. Contiene Design Spec (PD) y RFC (EM). Donde se anexa el Reporte de Hallazgos del concept test antes del Kick-off (gate D2→D3).
- **Hipótesis de valor** — El statement *"Si [hacemos X] entonces [pasará Y] resultando en [impacto Z]"* que define la apuesta de la iniciativa. Lo provee el Initiative Spec; el Plan lo descompone en apuestas testeables.
- **AHA Moment** — El momento en que un usuario percibe por primera vez el valor central del producto. Los usuarios que lo alcanzan tienen significativamente mayor retención a 90 días.
- **Embudo de validación** — Secuencia de pruebas donde cada etapa solo se ejecuta si la anterior pasa el umbral. Reduce desperdicio.
- **Dual-track agile** — Modelo donde Discovery y Delivery corren en paralelo. Base conceptual: Marty Cagan.

## Términos propios del Motor de Evidencia

- **Apuesta de diseño** — Decisión de diseño que asume algo no validado. Cada apuesta se explicita antes del test, con su observable y su umbral de decisión.
- **Observable** — Lo que el investigador identifica de antemano que debe poder observar para validar o invalidar una apuesta. Sin observables, la sesión es turismo.
- **Umbral de decisión** — Criterio que distingue PASA de NO PASA, definido antes de ver datos. Específico y verificable.
- **Datos** — Información cruda, sin procesar: citas, observaciones literales, métricas en bruto. No es información todavía.
- **Hallazgos** — Patrones categorizados que emergen de los datos. Se construyen con N≥3 fuentes independientes. Generalizar desde N=1 no es hallazgo, es anécdota.
- **Insight** — Interpretación de un hallazgo en el contexto del problema, con la fórmula Hallazgo · Interpretación · Implicación. Los tres componentes son necesarios.
- **Evidencia** — Hallazgo triangulado: respaldado por ≥2 fuentes independientes. Sin triangulación, sigue siendo hipótesis.
- **Triangulación** — Confirmar un hallazgo con ≥2 fuentes independientes (dos métodos cualitativos, cuali + cuanti, o primario + secundario). Responsabilidad explícita de Data & Analytics en consolidación.
- **Valencia** — Etiqueta de codificación: Positivo · Negativo · Neutro · Friction · Ambiguo. Junto con la apuesta, define el código completo de cada observación.
- **Veredicto** — Clasificación explícita por apuesta (✅ PASA / ⚠️ AMBIGUO / ❌ NO PASA) y global (🟢 / 🟡 / 🔴). Umbrales definidos antes de ver datos. El veredicto recomienda; la decisión la toma el equipo.
- **Regla del salto** — Cada insight debe poder reconstruirse hacia abajo hasta los datos crudos. Saltarse un nivel es el error más común y el más caro.
- **Regla del N≥3** — Un patrón se considera hallazgo solo cuando aparece en ≥3 fuentes independientes. N=1 o N=2 se reportan como observaciones aisladas.
- **Análisis a ciegas** — Codificación independiente entre facilitador y observador sin ver el tagging del otro. Coincidencias = código robusto. Diferencias = observación ambigua. Mitigación principal del sesgo de confirmación.
- **Observador silente** — Rol obligatorio en sesiones moderadas además del facilitador. Toma notas, no interviene. Facilitar y tomar notas a la vez pierde ~30% de la sesión.
- **Pre-flight check** — Verificación obligatoria antes de cada sesión: prototipo, grabación, guion, notas, consentimiento, backups.
- **Mezcla cliente / prospect** — Balance de reclutamiento. Default: 60–70% clientes / 30–40% prospects, ajustable según objetivo.
- **Sobre-recluta de poder-usuarios** — Anti-patrón donde solo participan usuarios muy activos. Mitigación: reservar ≥30% del cupo a perfiles de uso medio o bajo.
- **Saturación** — Punto donde añadir más participantes ya no produce hallazgos nuevos. En cualitativo moderado, entre el sexto y el octavo participante.
- **Mental model** — La forma en que el usuario entiende el funcionamiento de algo, que puede o no coincidir con el modelo del sistema. Cuando difieren, hay fricción.
- **Deseabilidad** — Percepción del usuario de que la solución le aporta valor antes de poder usarla. La mide el concept test. Distinta de usabilidad y viabilidad técnica.
- **Audit trail** — Registro inmutable de cambios con timestamp y autor. Da "valor probatorio" — protege la posición del usuario responsable frente a terceros.

---

*— Fin del Motor de Evidencia · Cabeza —*
