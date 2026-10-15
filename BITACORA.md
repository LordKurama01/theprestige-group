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
