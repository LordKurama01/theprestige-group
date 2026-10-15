# BITACORA - THE PRESTIGE GROUP

Historial acumulativo del repositorio. Leer junto con AGENTS.md antes de intervenir.

## 2026-10-15 - Referencia central de marca: diamante, footer y pie de página

- Objetivo y autorización: Matías solicitó dejar guardado en el repositorio de Prestige cómo se usa el diamante y “The Prestige Group” en el footer web y en el pie de los documentos.
- Estado real comprobado: repositorio `LordKurama01/theprestige-group`, rama `main`, HEAD previo `f383fef275b284158c48db45f95c399e8eb4b5c8`, árbol `e381f3c3c812b9d77f863812d0e8ef58e5a82b17`. Sin PR abiertos al consultar. No existían AGENTS.md ni BITACORA.md; se crean según el protocolo del titular.
- Arquitectura observada: sitio estático HTML/CSS/JavaScript. La rama contenía 14 entradas; `assets`, `css`, `img` y `js` son archivos vacíos. Las rutas y el diseño existentes no se cambian en esta intervención.
- Diagnóstico: faltaba una fuente central con el PNG oficial, su procedencia y las reglas de posición, proporción y uso para futuros trabajos.
- Origen verificado: Avanza/Financia360, `src/config/brand.ts` referencia `/brand/prestige/tpg-diamondgold.png`; el archivo `public/brand/prestige/tpg-diamondgold.png` y el alias `public/prestige-diamond.png` comparten el blob Git `049cec9ba22709ac8f261b3750ee6b3e6725f7af`. PNG original 879 x 648, RGBA transparente, 534.796 bytes; SHA-256 `3fdf5688660bd8b881c74f48b2ec2a8ec13bd65d84aabddf9e2352d2066a7011`.
- Decisión conservada: diamante original junto al nombre completo “The Prestige Group”, en un conjunto horizontal. Firma inferior izquierda en footer web y en pie de documentos. El emoji es una abreviatura conversacional, no un sustituto del PNG en piezas finales.
- Archivos añadidos: `branding/tpg-diamondgold.png`, `MARCA_THE_PRESTIGE_GROUP.md`, `AGENTS.md`, `README.md` y esta `BITACORA.md`. La guía incluye descarga canónica, origen/huellas, proporción, aplicación web/documental y ejemplo HTML/CSS.
- Validación: inspección visual del PNG original; dimensiones, transparencia y SHA-256 comprobados; contenido y enlaces relativos revisados antes de guardar. El blob incorporado debe coincidir exactamente con el origen. Después de escribir, comprobar HEAD/árbol y lectura remota de la guía. No se escriben tests para documentación reversible.
- Rama y commit: registro documental en `main`, en un commit atómico cuyo padre es el HEAD indicado; el SHA del commit de esta entrada se consulta en su historial de GitHub. Sin force push, preservando todas las entradas previas. Mensaje documental con `[skip ci] [skip render]`.
- DB/Auth/infraestructura/costos/deploy: no aplican. No se modifican aplicación, servicios, credenciales, permisos ni otros repositorios. No se declara una publicación o prueba productiva.
- Riesgos y límites: la copia pequeña histórica de Avanza, 96 x 70 px, no se usa para ampliar documentos. Los tamaños de uso son referencias ajustables por legibilidad. La disponibilidad de esta guía no implica que otros repositorios ya la tengan aplicada.
- Rollback: revertir únicamente este commit documental y el PNG incorporado; los 14 archivos originales permanecen con el mismo contenido.
- Estado de esta entrega: guía y PNG guardados en la rama principal, disponibles para reutilizar. La comprobación de cierre contrasta la guía, el árbol y el HEAD remotos antes de informar el resultado al titular.
- Pendientes: no se solicitó modificar el diseño de las páginas existentes.
- Próxima acción exacta: para el siguiente footer o documento, leer MARCA_THE_PRESTIGE_GROUP.md, reutilizar el PNG y registrar la aplicación en la bitácora del proyecto de destino.


## 2026-10-15 - Flyer comercial Perfil360data con footer corporativo real

- Objetivo: producir flyer vertical 1080 × 1350 para difusión comercial de consultas de identidad/datos fiscales, cheques y antecedentes, PDF y monitoreo en Perfil360data.
- Verificación previa: lectura de AGENTS.md, BITACORA.md y MARCA_THE_PRESTIGE_GROUP.md del repo Prestige, rama main HEAD inicial 18c01b9e570382d89ac6a6e156364b4f9677fdb3; lectura de AGENTS.md, README.md y assets del repo móvil Perfil360. La versión de la app en README/app.json puede ser anterior a releases externos: no se afirma release nuevo.
- Fuente de marca: PNG completo `branding/tpg-diamondgold.png`, blob original Git `049cec9ba22709ac8f261b3750ee6b3e6725f7af`, integrado sin alterar su base64 en el SVG; firma inferior izquierda horizontal con “The Prestige Group”. Ícono oficial móvil `LordKurama01/Perfil360/assets/brand/perfil360-app-icon.png`, blob `8e621d1415faad26fa79c78fd302a76ecaed5952`.
- Archivo nuevo: `marketing/perfil360data-flyer-consultas-2026-10-15.svg`. Un único SVG vectorial, autosuficiente, con PNGs oficiales incrustados; tipografía SVG y maqueta conceptual no representan captura verificada de producto. CTA de solicitud de demo sin precio ni URL no verificados.
- Validaciones: generación de archivo confirmada por GitHub (commit `4ea363f15e56839130ca7ee7e058b73b450d1cb7`, main); huellas de blobs y dimensiones previstas verificadas con datos del repositorio. Sin pruebas visuales de renderización remota ni exportación rasterizada; sin cambios en código, infraestructura, APK o producción.
- Riesgos y uso: la maquetación conceptual del teléfono no es una captura; se aclara disponibilidad variable de fuentes. Si se distribuye por WhatsApp como archivo raster, exportar SVG a PNG desde una herramienta gráfica, conservando marcas y relación de aspecto.
- Rollback: revertir el commit de incorporación del archivo y el commit de bitácora, sin tocar recursos de marca ni las páginas existentes.
- Siguiente acción exacta: inspeccionar exportación visual final en móvil y producir una variante PNG 1080 × 1350, si se dispone de flujo de exportación compatible.
