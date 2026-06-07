# 🗺️ 8 · Roadmap de implementación del playbook

*Sección de [Playbook: Diseño de Producto](#/corazon/diseno)*

---

## 8.1 · Puesta en marcha del playbook (primer trimestre)

### Pre-trimestre · último Cooldown del trimestre anterior

Antes de que arranque el ciclo formal donde el playbook entra en operación:

- PM, liderazgo ejecutivo y coach externo **leen el playbook completo**.
- **Sesión de 90 minutos** PM + liderazgo + coach: validar principios, niveles, rúbricas y presupuesto de tools. Decidir escenario (Mínimo / Recomendado / Completo).
- Ajustes al playbook según retroalimentación. **v1.2 lista para arranque.**
- Decisiones sobre los PDPs individuales del equipo de Diseño (documentos separados, confidenciales).
- **Agentic DS Fase 0** se agrega como iniciativa candidata al Opportunity Mapping del trimestre entrante. PM decide si se prioriza contra las otras candidatas del OST.

### Ciclo 1 · Arranque operativo

**Sprint (3 semanas):**

- **Sesión de 60 minutos** para presentar el playbook al equipo completo (PM, PD, Data & Analytics, EM, Customer Success): principios, rúbricas, expectativas, cómo se relaciona con el Marco de Desarrollo.
- **Baseline inicial de PD contra las rúbricas** del nivel target: self-assessment + revisión de PM + calibración con coach externo.
- Acuerdo del **PDP del trimestre** con PD: 2–3 focos concretos.
- **Setup de las tools** del escenario aprobado (Figma Pro, Maze, Claude, Cursor, etc.).
- **Arranque de los rituales internos** del playbook (1:1 PD↔PM, Design Journal, coaching quincenal), corriendo en paralelo a las ceremonias del Marco de Desarrollo que ya existen (standup, Design Reviews en D3, Kick-off, Product Jam).
- Si el Agentic DS Fase 0 entró al OST del trimestre: PD y EM **arrancan el Initiative Spec** correspondiente (D1 → D2).

**Cooldown (1 semana):**

- Primera **Retrospectiva de Proceso** del Marco de Desarrollo con el playbook vigente. PD lleva observaciones sobre qué funcionó y qué friccionó en el arranque.
- Primer **Design Debt Review** del Cooldown (ver Plantillas, §9).
- **Evaluación cualitativa temprana** de PD contra rúbricas (verde/amarillo/rojo en cada dimensión).

### Ciclo 2 · Ritmo

**Sprint (3 semanas):**

- Operación normal bajo el playbook. PD ejecuta su primer Sprint completo dentro del modelo (Design Spec para iniciativas en D2, Design Reviews en D3).
- Si Agentic DS Fase 0 está en el OST: continúa su ciclo D1→D5.
- Rituales internos del playbook ya establecidos.

**Cooldown (1 semana):**

- Retrospectivas del Marco de Desarrollo (Proceso + Resultados).
- **Ajustes al playbook:** si algún ritual no está funcionando, se modifica o elimina.
- Si el Cooldown del Ciclo 2 es el momento del **Opportunity Mapping del trimestre siguiente** (según cadencia del Marco de Desarrollo), PD prepara evidencia para entregar a Data & Analytics antes de la sesión.

### Ciclo 3 · Calibración

**Sprint (3 semanas):**

- Continuidad operativa.
- Agentic DS Fase 0 idealmente **cerrando D4/D5 con Impact Report**.

**Cooldown (1 semana) · último del trimestre:**

- **Evaluación formal contra rúbricas** (60 min). PD self-assessment + PM review + calibración con coach.
- **Review de métricas de la función de Diseño** (45 min). Nivel 1 y Nivel 2 de Métricas (§7).
- Conversación entre PM, liderazgo ejecutivo y coach sobre señales tempranas: *¿el playbook está funcionando? ¿los PDPs están dando frutos? ¿hay cambios estructurales para el siguiente trimestre?*
- **Documento v1.3 del playbook** si hay cambios estructurales.
- Preparación del **PDP del siguiente trimestre**.

## 8.2 · Disparadores para escalar

El playbook está construido para crecer con **triggers, no con fechas**. Los más importantes:

### Sobre desarrollo del PD actual

| Disparador | Acción |
| --- | --- |
| PD demuestra consistentemente comportamientos de su nivel target por 2 trimestres seguidos | Promoción formal al siguiente nivel |
| PD no progresa en >50% de los focos de su PDP durante un trimestre | Conversación estructural sobre ajuste del PDP, soporte adicional o intervención |
| PD demuestra consistentemente nivel PD II en la Dimensión 3 (Research & Evidence) | Transferir de Data & Analytics a PD la responsabilidad de conducir tests de usabilidad async sin supervisión |
| PD demuestra consistentemente nivel Senior PD en la Dimensión 3 | Transferir de Data & Analytics a PD el liderazgo de estudios cualitativos completos (entrevistas, síntesis, insights) |

### Sobre crecimiento del equipo

| Disparador | Acción |
| --- | --- |
| Llegada del 2do diseñador | Activar rituales de equipo: design critique semanal con peer review |
| Llegada del 3er diseñador | Activar track manager o contratar Design Manager externo |
| PM gasta >30% de su tiempo en gestión de Diseño | Considerar contratar Design Manager dedicado o promover internamente |
| El negocio aprueba expansión a 2+ productos | Reescribir el playbook para multi-producto, no parchear el actual |

### Sobre infraestructura técnica

| Disparador | Acción |
| --- | --- |
| El DS supera 15 componentes en producción | Activar Chromatic (visual regression testing) en el stack |
| Aparece primer incidente de drift visual no detectado por el auditor semántico del DS | Activar Chromatic incluso si no se llegó a 15 componentes |

### Sobre research

| Disparador | Acción |
| --- | --- |
| El research interno deja de ser suficiente para informar decisiones del OST | Evaluar contratar UX Researcher dedicado |

### Sobre separación de roles

| Disparador | Acción |
| --- | --- |
| PD consolida autonomía de PM también (separación del rol PM+PM temporal) | Formalizar la separación con hire de PM dedicado o PM soltando la parte de PM |

## 8.3 · La regla general

**Solo escalamos cuando hay señal real de necesidad.**

La señal real evita dos errores opuestos:

- **Sobre-construcción.** Contratar Design Manager antes del 3er diseñador es estructura sin sustancia. Cuesta dinero, genera reuniones, no produce valor.
- **Parálisis.** No escalar cuando los disparadores ya se cumplieron genera burnout, cuellos de botella, y pérdida de talento.

Cada trimestre, en el último Cooldown, PM revisa esta tabla con liderazgo y coach. Si algún disparador se cumplió, la acción se agenda — no se discute más. Si ninguno se cumplió, el playbook sigue corriendo en su forma actual.

---
