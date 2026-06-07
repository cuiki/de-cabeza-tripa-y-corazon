# 🧩 6 · Tipos de requerimientos y separación de dominios

*Sección de [Tripa · Marco de Desarrollo de Producto](#/tripa)*

---

Una iniciativa tiene un solo problema pero produce tres tipos de requerimientos distintos, cada uno con su dueño y su autoridad. Mantener esa separación clara es la diferencia entre un equipo que construye lo correcto con la calidad correcta, y un equipo donde cualquier rol levanta cualquier requerimiento y termina implementando bonito pero equivocado.

## 6.1 Los tres tipos y sus owners

| Tipo de requerimiento | Qué define | Dueño con autoridad | Documento donde vive |
| --- | --- | --- | --- |
| De producto | Qué debe hacer el sistema para resolver el problema | PM | PRD (D1) |
| De diseño / UX | Cómo el usuario interactúa con esa capacidad | PD | Design Brief + Spec (D2) |
| Técnicos / no funcionales | Cómo el sistema implementa esa capacidad | EM | RFC (D2) |

La jerarquía es **Producto → Diseño → Técnico**. Los técnicos sirven a los de diseño, y los de diseño sirven a los de producto. Cuando se invierte con el EM decidiendo qué se construye, o PD decidiendo qué problemas resolver, el equipo construye con calidad lo que no debió construirse. Es el síntoma que la red flag de saltarse el proceso nombra cuando dice "alguien del equipo va directamente a otra área a solicitar cambios sin pasar por el proceso".

> **Regla.** La separación no es subordinación. Cada dueño tiene autoridad final en su dominio. PD no es subordinado del PM; tiene autoridad sobre el diseño. EM no es subordinado del PM ni de PD; tiene autoridad sobre la implementación. Lo que hace coherente al equipo es que cada uno respete los dominios de los demás y aporte input al dominio ajeno para mejorar la decisión.

## 6.2 Requerimientos de producto — qué levanta el PM

Son seis categorías. Todas se derivan del problema y del JTBD, no de la solución. Viven en el D1 PRD como sección explícita.

1. **Funcionales:** qué capacidades debe tener el sistema. *Ejemplo:* "El administrador debe poder cancelar el servicio sin perder el historial de transacciones."
2. **Reglas de negocio:** la lógica comercial específica. *Ejemplo:* "El cobro se inicia al inicio del próximo periodo de facturación tras la activación."
3. **Objetivos de experiencia de usuario (UX Goals):** qué debe lograr el usuario, *sin especificar cómo*. La diferencia con un requerimiento de diseño está en el nivel de abstracción. *Ejemplo:* "El administrador debe entender en su primera visita a la sección qué documentos faltan y qué hacer a continuación." Cómo se logra visualmente es tarea de PD.
4. **De datos:** qué información se captura, persiste y muestra. No incluye cómo se modelan tablas, eso es del RFC. *Ejemplo:* "Se debe registrar la fecha exacta de cada cambio de estado en el proceso de alta para auditoría."
5. **De cumplimiento:** marcos legales o regulatorios aplicables, y restricciones legales identificadas durante discovery. *Ejemplo:* "El servicio opera bajo el marco regulatorio aplicable; la cédula del proveedor de pagos usa la leyenda acordada con asesoría legal."
6. **De integración:** qué sistemas externos están en juego y qué se intercambia. No incluye qué endpoints específicos, eso es del RFC. *Ejemplo:* "Integración con proveedor externo X para alta de cuentas; integración con servicio Y para firma electrónica."

> **Regla.** Si el PM se encuentra escribiendo "la cancelación debe tener un botón rojo con confirmación modal" o "usar React con Tailwind", está invadiendo el dominio de PD o EM respectivamente. La señal es escribir cómo se ve o cómo se construye, en lugar de qué debe hacer.

## 6.3 Requerimientos de diseño

PD parte de los requerimientos de producto del D1 y los traduce a especificación de experiencia.

Viven en el Design Spec (D2):

- Flujos de navegación (qué pantalla lleva a cuál, qué pasos hace el usuario)
- Criterios de interacción (clics máximos, confirmaciones, undo)
- Estados visuales (vacío, carga, error, éxito, deshabilitado)
- Accesibilidad (contraste AA, navegación por teclado, screen readers)
- Comportamiento por dispositivo (mobile, tablet, desktop)
- Edge cases de UX (qué se muestra si el endpoint falla, si no hay datos, si la red se cae)

## 6.4 Requerimientos técnicos

EM parte de los requerimientos de producto del D1 y de los requerimientos de diseño del D2, y los traduce a especificación técnica. Viven en el RFC (D2):

- Arquitectura (qué servicios se tocan, qué se crea nuevo)
- Modelo de datos (tablas, campos, migraciones, índices)
- Endpoints / servicios (qué se expone, qué consume)
- Requerimientos no funcionales (performance, escalabilidad, seguridad, observabilidad)
- Estrategia de despliegue (feature flag, rollback, fases)
- Riesgos técnicos y mitigaciones

## 6.5 Input vs autoridad: la dinámica entre roles

Que cada tipo tenga un dueño con autoridad no significa que los demás roles no aporten. Significa que aportan como **input**, no como decisión.

- Cuando PD descubre que para que el usuario logre un objetivo necesita además otra capacidad no contemplada en los requerimientos de producto, **informa** al PM. El PM decide si agrega el requerimiento o no de acuerdo al JTBD y al scope.
- Cuando EM descubre que un requerimiento de producto es técnicamente inviable o desproporcionadamente costoso, **informa** al PM. El PM decide si ajusta el requerimiento o lo mantiene.
- Cuando el PM tiene una idea de cómo debería verse la UI, **informa** a PD. PD decide cómo se diseña.
- Cuando el PM tiene una idea de cómo implementar técnicamente algo, **informa** a EM. EM decide cómo se construye.

Esa dinámica de información en ambas direcciones con autoridad clara en cada dominio es lo que permite que un equipo pequeño avance rápido sin sacrificar la calidad de cada disciplina.

## 6.6 Scope creep

El scope creep puede originarse desde cualquier rol: PD agregando polish no acordado, EM agregando refactors no acordados, el cliente pidiendo cambios durante D3, el PM agregando ideas a media iniciativa. Cualquier rol es fuente potencial.

Sin embargo, **el PM es el único con autoridad para evitarlo o aceptarlo**. Su responsabilidad es ser el guardián del alcance, no el productor exclusivo de los requerimientos. Cuando alguien propone agregar algo:

1. El PM evalúa si el agregado se justifica contra el outcome y la evidencia.
2. Si se justifica, el alcance se actualiza formalmente (sección de Alcance explícito del D1) y la decisión se registra en la sub-sección de Decisiones tomadas del Resumen Ejecutivo.
3. Si no se justifica, queda como Feature Request para el siguiente Opportunity Mapping (ver Glosario Operativo).

## 6.7 RACI complementario por tipo de requerimiento

Esta tabla complementa a la del RACI por fase. No la reemplaza. Una describe responsabilidades en cada D; esta describe responsabilidades por tipo de requerimiento, transversal a las D.

**[ R ] Responsable:** Redacta el requerimiento | **[ A ] Autoridad:** Aprueba y decide en caso de conflicto | **[ C ] Consultado:** Aporta input que el A debe escuchar | **[ I ] Informado:** Recibe el requerimiento finalizado para alinear su trabajo derivado

| Tipo de requerimiento | PM | Data & Analytics | EM | Customer Success | PD |
| --- | --- | --- | --- | --- | --- |
| De producto | A + R | C | C | C | C |
| De diseño / UX | C | C | C | C | A + R |
| Técnicos / no funcionales | C | I | A + R | I | C |

**Lectura de la tabla.** En cada tipo de requerimiento hay un solo A y un solo R (que pueden ser el mismo rol). Los C aportan input, pero su input no obliga al A. Los I se informan del requerimiento ya finalizado para alinear su trabajo derivado. En requerimientos de producto, Customer Success entra como C porque su conocimiento del usuario alimenta la definición; en requerimientos técnicos, entra como I porque debe conocer las restricciones para soportar a clientes después del release.

## 6.8 Anti-patrones

Síntomas de que la separación de dominios no se está respetando. Refuerzan los Red Flags:

1. **El PRD describe la solución, no el problema.** Si el D1 menciona componentes de UI, tecnologías o estructura de pantallas, está invadiendo dominios de PD y EM.
2. **El Design Spec o el RFC redefine el alcance.** Si en D2 aparecen capacidades nuevas que no estaban en los Requerimientos de producto del D1, sin haber pasado por una decisión formal del PM, se está moviendo el alcance silenciosamente.
3. **El PM prescribe la solución de diseño.** "Quiero un dropdown con tres opciones" en vez de "el administrador debe poder elegir entre estos tres modos de operación". La primera quita autonomía a PD; la segunda da claridad sin invadir.
4. **EM toma decisiones de producto.** "Decidimos no implementar X porque era complejo" sin que el PM haya aceptado la decisión. EM informa la complejidad; el PM decide si se mantiene o se ajusta.
5. **Un rol salta directamente a otro sin pasar por el PM.** PD pidiéndole a EM cambios no acordados, o EM avanzando con cambios de UX que no consultó con PD. Es la red flag de saltarse el proceso, explícita.
6. **Las "ideas" de un rol fuera de su dominio se tratan como decisiones.** Si el PM opina sobre UX, es input para PD, no decisión. Si PD opina sobre alcance, es input para el PM, no decisión.
