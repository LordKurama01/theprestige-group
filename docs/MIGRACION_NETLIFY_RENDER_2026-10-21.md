# Migración segura: Netlify → GitHub → Render

Fecha: 2026-10-21. Objetivo: trasladar la web institucional de The Prestige Group desde Netlify a Render preservando el diseño público y el correo Zoho, y preparar el futuro dashboard.

## Comprobaciones efectuadas

- Sitio público: https://theprestige-group.com/ muestra “Construimos estructuras digitales”, con las secciones Grupo, Servicios, Casos, Tecnología y Contacto.
- Repo identificado: https://github.com/LordKurama01/theprestige-group; main HEAD 02bf1c06937c22bb4098d041b201b5d1004aea3d.
- `main/index.html` contiene la página anterior “Construimos el ecosistema Prestige”, con navegación Inicio, Ecosistema, Proyectos y Contacto.
- `main/index.html` referencia `assets/css/style.css` y `assets/js/main.js`, pero esas rutas NO figuran en el árbol Git; `assets`, `css`, `js` y `img` son archivos vacíos. La rama main no puede darse por equivalente funcional al sitio publicado.
- Existe rama aislada `feat/prestige-operations-qa-20261021`, con dashboard de operaciones no productivo. NO desplegar esa rama como sitio público, pues el dashboard QA aún no tiene autenticación.
- Render accesible mediante integración de ChatGPT; el listado de workspaces devolvió `The Prestige Group`. La herramienta requiere que el titular confirme cuál workspace usar antes de listar o crear servicios.
- No hay integración de Netlify con ChatGPT disponible. Desconectar la implementación de Netlify se gestiona en Netlify; NO mediante `git push` ni desactivando GitHub. La gestión del dominio y correo permanece en GoDaddy/Zoho.

## Plan de ejecución, sin caída del sitio

1. **Rescatar la fuente real:** abrir Netlify y confirmar proyecto, repositorio enlazado o despliegue manual. Descargar o recuperar el conjunto exacto de archivos/artefactos publicados; revisar activos y funciones (formularios, enlaces, redirecciones, `acceso/`).
2. **Sincronización GitHub:** preservar `main`, crear rama de recuperación (o usar la QA existente si corresponde), incorporar fuente verificada de producción, comparar capturas y pruebas de rutas. No subir secretos.
3. **Render:** dentro del workspace confirmado, buscar primero si ya existe un servicio Prestige para no duplicar. Elegir *Static Site* para la web institucional estática; configurar su repo/branch de manera explícita. Publicar inicialmente en URL `onrender.com` de prueba. No usar el dashboard local/QA con información sensible.
4. **QA Render:** comprobar home, navegación, responsive, formularios, enlaces externos, imágenes, SEO/robots, cookies, redirecciones, certificados y comportamiento del acceso Owner. Si hay funciones Netlify Functions/Forms, migrar explícitamente a backend compatible: el hosting estático de Render no ejecuta Netlify Functions.
5. **DNS:** agregar dominio personalizado al servicio Render; obtener los registros EXACTOS indicados por Render; luego actualizar únicamente DNS web (A/CNAME/AAAA según pantalla y documentación). Conservar sin cambios TXT de verificación Zoho, MX, SPF, DKIM y DMARC. Verificar HTTPS y envíos de correo.
6. **Cierre:** comprobar funcionamiento durante y después de la propagación DNS; luego, y sólo luego, desvincular o retirar el antiguo servicio Netlify. Registrar rollback con valores DNS previos.
7. **Dashboard:** añadir posteriormente administración privada con login real y backend/BD independiente. Una web estática no debe almacenar credenciales OAuth.

## Estado actual

- Migración a Render: **NO INICIADA**; falta confirmación del workspace y recuperar fuente exacta.
- Netlify: **SIN CAMBIOS**; no apagar.
- GitHub `main`: **SIN CAMBIOS**.
- GoDaddy/Zoho: **SIN CAMBIOS**.
- Documentación: en rama QA, para revisión y continuidad.

Referencias de Render:
- https://render.com/docs/static-sites
- https://render.com/docs/custom-domains
- https://render.com/docs/git-provider
