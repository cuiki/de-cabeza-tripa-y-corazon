# 🧮 7 · Matriz de Responsabilidades (RACI) por Fase

*Sección de [Tripa · Marco de Desarrollo de Producto](#/tripa)*

---

**[ R ] Responsable:** Ejecuta la tarea | **[ A ] Autoridad:** Tiene la última palabra | **[ C ] Consultado:** Aporta feedback | **[ I ] Informado:** Recibe la notificación de cierre

| Fase | PM | Data & Analytics | EM | Customer Success | PD |
| --- | --- | --- | --- | --- | --- |
| D1: Discover | A: Filtra y aprueba iniciativas con alineación estratégica. Se asegura que las iniciativas hagan sentido hacia el Outcome del trimestre | R: Provee datos de retención y fricción desde el funnel y los triangula con la evidencia cualitativa<br>Ayuda a redactar el PRD | C: Informa sobre limitaciones técnicas previas | C: Aporta feedback cualitativo continuo como canal de voz del cliente | R: Facilita el [Motor de Evidencia](#/cabeza). Conduce la investigación, organiza la evidencia de todas las áreas y la convierte en insights antes de la sesión de Opportunity Mapping |
| D2: Design | R/A: Aprueba el Brief y el Spec. Firma como autoridad final. Garantiza que no haya Scope Creep en ambos artefactos | R: Valida que las apuestas del Brief y la solución del Spec cumplan con el JTBD. Define el plan de medición PLG y KPIs de activación | C en el Brief (viabilidad técnica temprana vía Revisión Cruzada Asincrónica) · R en el Spec (co-autor del RFC y la parte técnica del Spec) | C: Valida que la propuesta sea comprensible para el usuario sin ayuda | R: Autor del Design Brief y del Design Spec. Conduce el research que valida las apuestas. Garantiza usabilidad y flujo centrado en el usuario |
| D3: Develop | I: Recibe reportes de progreso y desviaciones | I: Se prepara para implementación de métricas y guías | A: Autoridad en calidad del código, rendimiento y ADRs | I: Comienza preparación de materiales para Help Center | C: Design Reviews en checkpoint de mitad y cierre de Sprint |
| D4: Deploy | I: Recibe confirmación de que la herramienta está lista para GTM | R: Ejecuta flujos de guía para facilitar el AHA Moment.<br>A: Revisa y aprueba manuales y guías de ayuda. | A: Garantiza despliegue seguro, estable y sin degradación | R: Publica manuales y guías para que el usuario sea autónomo (con aprobación explícita de Data & Analytics) | R: Verifica que la implementación final respete el estándar de diseño |
| D5: Deliver | I: Evalúa si el impacto justifica la inversión de recursos | R: Mide KPIs de adopción y valida cumplimiento de la hipótesis | A: Lidera el análisis técnico post-lanzamiento y Post-mortem si hay fallos. Monitorea los sistemas y verifica que el equipo no trabaje en refactorización durante el sprint. | C: Recopila feedback cualitativo y satisfacción del usuario y lo aporta con evidencias. | R: Sintetiza el aprendizaje de uso real (datos, entrevistas) y evalúa si la solución requiere iteraciones |
