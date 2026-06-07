# 📄 5 · El Initiative Spec — Documento Vivo por Iniciativa

*Sección de [Tripa · Marco de Desarrollo de Producto](#/tripa)*

---

Cada iniciativa tiene **un solo documento** que nace cuando se aprueba y se alimenta a lo largo de todas las fases. No es un documento que se redacta de una vez — cada sección se activa cuando arranca la fase correspondiente.

**Estructura del Initiative Spec:**

```yaml
TASK en la herramienta de gestión: [Nombre de la iniciativa]
  Status, assignee, fechas, subtareas de trabajo
  DOC: Initiative Spec
    Pagina raiz: Resumen ejecutivo + Bitacora + estado actual de la iniciativa
    Sub-pagina D1: PRD (Contexto, evidencia, JTBD, requerimientos de producto, hipotesis, hipotesis causal Oportunidad hacia Outcome hacia NSM)
    Sub-pagina D2:
      - Product Design Brief (estrategia de diseno, apuestas, riesgos UX)
      - Plan de Investigacion + Reporte de Hallazgos (Motor de Evidencia)
      - RFC (solucion tecnica)
      - Product Design Spec (solucion final, handoff a ingenieria)
    Sub-pagina D3: ADR (si aplica)
    Sub-pagina D4: Release Checklist
    Sub-pagina D5: Impact Report + Post Mortem (si aplica)
```

**¿Cuándo se llena cada sección?**

| Fase | Responsable de llenar | Activador |
| --- | --- | --- |
| D1: Discover | PM / Data & Analytics / PD | Aprobación en Opportunity Mapping |
| D2: Design (apertura) | PD escribe el Design Brief · consultor de método revisa · PM firma · PD escribe el Plan de Investigación y ejecuta el research | Gate D1 → D2 (Brief firmado dispara el research) |
| D2: Design (cierre) | PD (Design Spec, parte diseño) + EM (RFC, parte técnica) | Reporte de Hallazgos publicado dispara el Spec · Kick-off cierra D2 |
| D3: Develop | EM | Gate D2 → D3 + Kick-off |
| D4: Deploy | Customer Success + PD + Data & Analytics | Gate D3 → D4 + Kick-off |
| D5: Deliver | Data & Analytics + PM | Gate D4 → D5 |
