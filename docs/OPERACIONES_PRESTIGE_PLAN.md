# Prestige Operations — plan de implementación QA

Fecha: 2026-10-21. Repositorio `LordKurama01/theprestige-group`.

## Diagnóstico comprobado
- Base `main` HEAD inicial: `02bf1c06937c22bb4098d041b201b5d1004aea3d`.
- `AGENTS.md` y `BITACORA.md` existentes; marca obligatoria `branding/tpg-diamondgold.png`.
- El sitio estático existente en `main` **NO coincide** con el sitio publicado actualmente en `theprestige-group.com`. No está confirmada la conexión entre este repositorio y el despliegue de Netlify.
- Supabase conectado tiene bases de otros productos. No se debe reutilizar ninguna para datos de Prestige Operations.
- Zoho Mail `matiasalvarez@theprestige-group.com` tiene dominio, MX, SPF y DKIM verificados y recibió exitosamente el mensaje de prueba de Gmail. El envío saliente desde Zoho y el acceso por API requieren pruebas independientes.

## Etapa 1 — Superficie de trabajo (esta rama QA)
- Ruta separada `/operations/`, no enlazada al sitio público, sin cambios en `index.html` productivo.
- Navegación, métricas a partir de registros reales del navegador, CRUD de contactos, oportunidades, seguimientos y tareas; búsqueda, filtros por estado, exportación JSON/CSV e importación validada.
- Interfaz responsive, logo oficial desde `../branding/tpg-diamondgold.png`, sin instalar paquetes.
- **QA no es producción:** guarda registros en `localStorage` del navegador. No hay login, servidor ni acceso a Zoho/Gmail desde el dashboard. NO ingresar mensajes reales, secretos ni datos personales confidenciales. No publicar ni compartir la ruta como panel privado.
- No utilizar contraseñas, cookies o claves de Zoho en la interfaz. Los accesos a Zoho/Gmail son enlaces para abrir esos servicios, no una conexión.

## Etapa 2 — Datos y seguridad
1. Verificar proyecto Netlify y origen exacto del deploy del dominio. No alterar sitio publicado.
2. Elegir proyecto de almacenamiento **independiente**, con consentimiento de costo cuando corresponda. Nunca compartir tablas con Avanza, Perfil360, Estudio360 ni otros productos.
3. Implementar autenticación Owner, sesión, permisos en servidor y RLS por pertenencia/propiedad. Probar usuarios no autorizados y accesos cruzados.
4. Reemplazar `localStorage` por almacenamiento seguro, con auditoría de cambios y respaldo.

## Etapa 3 — Zoho Mail
1. Validar que el plan permita realmente usar los endpoints de Zoho Mail REST API.
2. Autorizar OAuth con permiso mínimo y tokens **sólo en servidor**, rotables y revocables.
3. Primero lectura de mensajes y sincronización paginada; después borradores y envío con confirmación explícita y auditoría.
4. Probar acceso denegado, expiración, tasa límite y envío real a cuenta propia. Nunca campañas masivas desde Zoho Mail.

Referencias oficiales: `https://www.zoho.com/mail/help/api/` y `https://www.zoho.com/mail/help/api/using-oauth-2.html`.

## Etapa 4 — Gmail, ChatGPT y monetización
- El conector Gmail de ChatGPT no concede acceso a una web externa. Conectar mediante OAuth propio y permisos explícitos.
- La operación desde ChatGPT exige otra integración específica (API/conector/MCP) auditada.
- Evaluar empaquetado multiempresa sólo cuando Prestige lo utilice y valide demanda; aislar organizaciones.
- Separar campañas de difusión masiva de la cuenta de correo corporativo.

## Validación y rollback
- `node --test operations/model.test.mjs`
- `node --check operations/model.mjs` y `node --check operations/app.mjs`.
- QA manual de navegador sigue pendiente: el navegador automatizado disponible bloquea dominios locales y sintéticos con `ERR_BLOCKED_BY_ADMINISTRATOR`. No se declara QA visual aprobada.
- No se ha integrado Zoho ni producido deploy. Tampoco se ha promovido la rama a `main`.
- Rollback: revertir commits de la rama o eliminar `/operations/`, sin afectar web, DNS, Zoho ni infraestructura productiva.
- Próxima acción exacta: determinar fuente real de Netlify, habilitar QA aislado protegido, ejecutar pruebas visuales; después Auth/RLS y OAuth Zoho.

