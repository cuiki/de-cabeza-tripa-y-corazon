# 🚦 8 · Mecanismos de Validación y Control

*Sección de [Tripa · Marco de Desarrollo de Producto](#/tripa)*

---

El Marco de Desarrollo establece puntos críticos de control para asegurar que la ejecución se mantenga fiel a los objetivos de negocio:

- **Control D1 → D2:** No se diseña nada sin evidencia. El sentimiento o la intuición por sí solos no son suficientes para consumir recursos de diseño e ingeniería.
- **Control D2 → D3:** No se programa nada sin haber completado el Kick-off y el Product Jam. El Kick-off requiere que los cuatro artefactos de D2 estén publicados: Product Design Brief (con apuestas firmadas), Reporte de Hallazgos (del research que validó las apuestas), RFC y Product Design Spec. La cadena es estricta: el Brief firmado dispara el research; el Reporte publicado dispara el Spec; el Spec con el RFC se aprueban en el Kick-off.
- **Control D3 → D4 (Design Review doble):**
    - **Checkpoint 1 — Mitad del Sprint:** PD revisa lo construido contra el diseño aprobado. Las desviaciones se corrigen antes de continuar.
    - **Checkpoint 2 — Cierre de D3:** Gate formal de salida. Si el diseño no está respetado, el feature no entra a Deploy.
- **Control D4 → D5:** No se cierra el proyecto con el lanzamiento. El "Done" real se alcanza cuando se resuelve el JTBD y los datos lo confirman en la fase de Deliver.

## Revisión Cruzada (Asincrónica)

Antes de formalizar cualquier solución, EM y PD deben validar mutuamente sus propuestas de forma asincrónica. El diseño debe ser técnicamente viable y la solución técnica debe respetar los estándares de usabilidad.

## Kick-off (D2 → D3)

Sesión de 1 día donde PM presenta el contexto del PRD, PD presenta las apuestas del Brief y el veredicto del Reporte de Hallazgos, EM presenta el RFC con la propuesta técnica, y PD presenta el Design Spec con la solución final y los flujos de usuario. El equipo de ingeniería calcula el esfuerzo y define el plan de trabajo de desarrollo.

**Entregable:** Initiative Spec actualizado + board de ingeniería con todas las acciones definidas.

*Ejemplo: El equipo se reúne para el Kick-off del módulo de presupuestos. PM recuerda el problema del PRD. PD presenta las apuestas del Design Brief y el veredicto del Reporte: tres apuestas pasaron, una pivotó. EM presenta el RFC con el modelo de datos. PD muestra el Design Spec con la solución final. El equipo estima 2 Sprints y crea las tareas en la herramienta de gestión. La iniciativa queda lista para entrar a D3.*

## Product Jam (Gate D3)

Sesión de 1 día donde PD presenta los diseños finales al equipo de ingeniería para alinear el trabajo de desarrollo con el diseño aprobado. Es el gate formal que confirma la entrada a D3.

**Entregable:** Plan de release confirmado y cualquier ajuste de alcance documentado antes de que empiece el *Dev Cycle*.

*Ejemplo: Dos semanas después del Kick-off, PD muestra los diseños finales del módulo de presupuestos. El equipo detecta que un flujo de edición necesita un endpoint adicional no contemplado en el RFC. Se ajusta el plan y se documenta el cambio antes de que cualquier dev escriba una línea de código.*
