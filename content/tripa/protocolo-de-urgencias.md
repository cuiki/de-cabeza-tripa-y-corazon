# 🚨 12 · Protocolo de Urgencias

*Sección de [Tripa · Marco de Desarrollo de Producto](#/tripa)*

---

El Marco de Desarrollo asume que toda iniciativa entra por el Opportunity Mapping. Sin embargo, existen situaciones que requieren acción inmediata sin pasar por el proceso estándar.

## ¿Qué califica como urgencia?

Una situación califica como urgencia cuando cumple al menos uno de estos criterios:

- Afecta directamente la operación de cuentas activas (el sistema no funciona para una funcionalidad crítica)
- Genera riesgo financiero para los marchantes o administradores (cálculos incorrectos, cobros duplicados, errores en transacciones)
- Implica un riesgo legal o de seguridad de datos
- Caída del sistema de más de 10 minutos

## ¿Qué NO califica como urgencia?

- Solicitudes de clientes o áreas que no cumplen los criterios anteriores, independientemente de la presión comercial
- Features que "idealmente" deberían estar antes de una fecha
- Bugs de baja criticidad que no bloquean la operación del administrador

## Proceso de excepción

1. **EM evalúa** el impacto técnico y confirma si aplica alguno de los criterios de urgencia
2. **PM autoriza** la excepción — es el único rol con autoridad para declarar una urgencia. Si PM no está disponible, Liderazgo puede autorizar. Nadie más tiene esta autoridad.
3. **EM ejecuta** la solución con el nivel mínimo de documentación posible (al menos un registro del problema y la solución en la herramienta de gestión)
4. **Post-mortem breve** (30 min) una vez resuelta la urgencia, para documentar causa raíz y prevenir recurrencia

> **Regla:** La presión comercial no es un criterio de urgencia. Si el problema no pone en riesgo la operación, los datos o la seguridad, entra al proceso normal en el siguiente Opportunity Mapping.
