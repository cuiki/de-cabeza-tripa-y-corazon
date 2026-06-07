# 📖 13 · Glosario Operativo — Cómo Clasificamos el Trabajo Entrante

*Sección de [Tripa · Marco de Desarrollo de Producto](#/tripa)*

---

No todo el trabajo que llega al equipo de producto es una iniciativa. Clasificar correctamente el trabajo entrante es la primera línea de defensa contra el scope creep y las prioridades falsas.

## North Star Metric (NSM)

El indicador principal del negocio. Mide el valor que el producto entrega al mercado de forma sostenida. Es un indicador **rezagado (lagging)**: confirma el resultado acumulado de todo el funnel a lo largo del tiempo. El equipo de Producto no puede atribuirle su impacto directamente, porque la NSM depende de múltiples factores del funnel.

NSM del equipo: **número de cuentas activas**. La definen **Liderazgo + PM** al inicio de cada año. No es redefinible por ningún área.

## Outcome

El comportamiento específico y medible del usuario que el equipo de Producto se compromete a cambiar durante un trimestre. Es un **indicador adelantado (leading)**: si se mueve en la dirección correcta, predice que la NSM mejorará.

Un Outcome válido cumple los tres criterios siguientes:

1. El producto puede causarlo directamente, sin requerir que Customer Success o Marketing intervengan para que el comportamiento ocurra;
2. Tiene una hipótesis causal documentada que conecta el Outcome con la NSM;
3. Tiene un baseline real y una meta concreta con fecha.

Un Outcome no es lo que el equipo construye (eso es un Output). No es la NSM. Es el comportamiento específico del usuario que el producto puede cambiar y que, si cambia, predice que la NSM mejorará.

**Fórmula de referencia:** *"Aumentar / Reducir [comportamiento observable del administrador] de [baseline actual] a [meta] para [fecha]."* Esta fórmula es una guía, no una camisa de fuerza.

Ver la sección de Opportunity Mapping para ejemplos y el test diagnóstico completo.

## Output

Lo que el equipo construye o entrega: un feature, un flujo, una pantalla, una campaña. Un Output no es un Outcome. Construir algo no garantiza mover el comportamiento del usuario.

> **Señal de alerta:** Si el equipo define su éxito por haber lanzado algo ("lanzamos el módulo de pagos"), está midiendo Outputs. El éxito real se mide por el cambio de comportamiento que ese Output produjo.

## Leading indicator (indicador adelantado)

Métrica que predice un resultado futuro. Cambia antes de que el resultado ocurra, lo que permite al equipo ajustar el rumbo a tiempo. El Outcome del trimestre siempre debe ser un indicador adelantado.

## Lagging indicator (indicador rezagado)

Métrica que confirma un resultado que ya ocurrió. Útil para validar, pero no para tomar decisiones en tiempo real. La NSM es un indicador rezagado.

## Hipótesis causal

El argumento que conecta una Oportunidad con el Outcome y el Outcome con la NSM. Sigue el formato:

*"Creemos que [problema del usuario] impide [comportamiento que el Outcome busca mover] porque [evidencia concreta]. Si resolvemos este problema, [comportamiento] mejorará, lo que moverá el Outcome del trimestre."*

Toda Oportunidad en el OST debe tener su hipótesis causal documentada. Sin ella, la Oportunidad no puede entrar al árbol del trimestre.

## AHA Moment

El momento específico en el que un usuario experimenta por primera vez el valor real de la plataforma. Ejemplo: un administrador de tianguis que completa su configuración inicial y genera su primer reporte de cobro de cuotas. Los usuarios que alcanzan su AHA Moment tienen significativamente mayor retención a 90 días.

## Bug

Comportamiento del sistema que difiere de lo que el PRD o el RFC especificaron como correcto. El sistema hace algo diferente a lo que fue diseñado para hacer.

- **Quién lo reporta:** Cualquier persona del equipo o usuario
- **Quién lo valida:** EM confirma si es un bug real o comportamiento esperado
- **Cómo entra al proceso:** Directo al backlog técnico de Engineering. No pasa por Opportunity Mapping.

*Ejemplo: "Al generar el reporte de cobro de cuotas, los totales no coinciden con la suma de los adeudos individuales." El RFC especificó que los totales deben ser la suma exacta de los registros. Esto es un bug.*

*Contraejemplo: "El botón de exportar debería estar más visible." El diseño aprobado no especificó la posición del botón como criterio de aceptación. Esto NO es un bug — es un feature request.*

## Nueva Iniciativa

Una oportunidad de mejora o funcionalidad nueva que requiere PRD y pasa por el proceso completo de las 5Ds. Debe tener evidencia que la respalde y conectarse con el Outcome del trimestre.

- **Quién la propone:** Cualquier persona del equipo
- **Quién la aprueba:** PM en el Opportunity Mapping
- **Cómo entra al proceso:** Por el Opportunity Mapping. Sin evidencia ni conexión al Outcome del trimestre, no es una iniciativa — es un feature request.

*Ejemplo: "Customer Success ha recibido cinco solicitudes distintas de administradores que quieren exportar el reporte de cobro de cuotas a PDF para presentarlo a su mesa directiva. Tenemos los tickets que lo respaldan." Hay evidencia, hay un JTBD claro. Esto es una iniciativa.*

## Feature Request

Una solicitud de usuario o de cualquier área que todavía no tiene evidencia suficiente para ser considerada una iniciativa. Es una señal, no una decisión.

- **Quién la recibe:** Cualquier área o canal público de feedback (ej. un portal de roadmap abierto a usuarios)
- **Dónde va:** Al backlog de exploración, disponible para el siguiente Opportunity Mapping
- **Cómo entra al proceso:** Solo entra al plan si en el Opportunity Mapping se decide priorizarla con base en evidencia acumulada

*Ejemplo: "Un administrador pidió que el menú lateral tenga un color diferente." No hay evidencia de que esto afecte a más usuarios ni mueva la North Star Metric. Va al backlog de exploración.*

**Regla de clasificación:** Si no se puede responder *"¿qué problema del administrador resuelve esto, cuántos usuarios lo tienen, y cómo conecta con el Outcome del trimestre?"* con evidencia concreta, es un feature request — no una iniciativa.

> **Señal de alerta:** Cuando alguien lleva una solicitud directamente a Product Design o Engineering sin pasar por este proceso de clasificación, es un Red Flag (ver Red Flags, punto 12).

## Scope Creep

El **scope creep** (o corrupción/desviación del alcance) es la expansión incontrolada de los requisitos de una iniciativa después de haber iniciado, sin ajustes en presupuesto, tiempo o recursos. Ocurre cuando se añaden tareas o características sin aprobación formal, causando retrasos, sobrecostos y fatiga en el equipo.
