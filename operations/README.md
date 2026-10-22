# Prestige Operations — panel QA

Interfaz responsive de trabajo comercial, sin dependencias, aislada de la web pública y de los servicios productivos.

**Atención:** el panel de esta rama es una herramienta local de preparación. No está autenticado ni conectado a Zoho/Gmail. No introducir datos confidenciales, contraseñas, tokens ni textos completos de emails.

## Ejecutar y probar
Desde la raíz del repositorio, servir archivos HTTP estáticos (por ejemplo `python -m http.server 8080`) y visitar `http://localhost:8080/operations/`. El PNG de marca oficial es `../branding/tpg-diamondgold.png`.

Comandos de test:

```bash
node --test operations/model.test.mjs
node --check operations/model.mjs
node --check operations/app.mjs
```

## Funciones operativas
- Resumen con métricas calculadas únicamente desde datos ingresados.
- CRUD de contactos, oportunidades (etapa e importe), seguimientos (canal y estado) y tareas.
- Búsqueda, filtros, exportación JSON y contactos CSV e importación de respaldo validada.
- Atajos externos para abrir Zoho Mail y Gmail sin suplantar su autenticación.
- Registros sólo en el `localStorage` de cada navegador. No hay sincronización entre dispositivos.

## Límites y despliegue
- Evitar colocar un enlace público a esta ruta. El front-end **no** controla autorización real.
- El sitio de Netlify en producción no coincide con el `main` de este repositorio, por lo que no publicar sin identificar el proyecto que despliega el dominio.
- Integraciones, login real, RLS, API, auditoría y políticas de correo quedan detallados en `docs/OPERACIONES_PRESTIGE_PLAN.md`.
- Rollback: revertir exclusivamente los commits de esta rama; `main` y producción no se modificaron.
