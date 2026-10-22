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


## 2026-10-15 - Corrección de marca en flyer WhatsApp (sin recrear diamante)

- **Objetivo:** corregir la pieza de Perfil360data rechazada por uso de diamante generado y tipografía ornamental, conservando enfoque comercial y posicionando la firma en el extremo inferior derecho del flyer, por instrucción expresa del titular.
- **Estado verificado:** repo Prestige `main`, HEAD previo `0887f4e94004f1519ef5901f9347dbdeac6bea3f`; verificados `AGENTS.md`, `MARCA_THE_PRESTIGE_GROUP.md`, `BITACORA.md`. En Avanza se leyó `src/config/brand.ts`, `src/features/app-branding/PrestigeBrandLink.tsx`, `src/components/PrestigeFooter.tsx` y CSS `src/app/globals.css`. El footer real usa PNG `/branding/tpg-diamondgold.png` o el original ampliado `/brand/prestige/tpg-diamondgold.png`, texto plano `The Prestige Group`, tipografía heredada sans-serif, sin título ornamental ni separadores.
- **Cambio:** nuevo `marketing/perfil360data-whatsapp-1080x1920-footer-oficial.svg`; flyer 9:16 (1080 × 1920), identidad Perfil360data, consulta ID/CUIT/CUIL, cheques rechazados, análisis financiero, informes PDF, monitoreo y CTA demo. Diamante PNG canónico exacto incrustado en base64 (blob `049cec9ba22709ac8f261b3750ee6b3e6725f7af`) alineado a la izquierda del nombre de empresa, con firma completa anclada abajo a la derecha de la pieza. Ícono app original (blob `8e621d1415faad26fa79c78fd302a76ecaed5952`).
- **Validaciones:** GitHub confirma creación del SVG, commit `d80bbd02c4a80681798fc663be93c07dc108aaac`. Canva importó el SVG como asset con render exitoso, dimensiones 1080 × 1920; asset `MAHYFYTkR4E`. Validación estática de proporciones, imagen incrustada, posición derecha y fuente sans-serif aprobada. No se ha producido un PNG exportado y revisado; no anunciar final PNG lista para WhatsApp sin ese paso.
- **Riesgos/limitaciones:** el teléfono es una representación conceptual, no captura verificada de la app. El flyer corrige sello oficial de marca en origen vectorial, pero la distribución por WhatsApp debería ser PNG/JPG tras exportación raster y revisión visual a escala móvil.
- **Producción/infraestructura:** no se modificó web, app, API, despliegue ni servicios; sin costos.
- **Rollback:** revertir commit del flyer nuevo y esta entrada, conservando pieza previa e historial.
- **Próxima acción:** convertir SVG verificado a PNG 1080 × 1920 y revisar visualmente antes de distribuir.


## 2026-10-15 - Flyer Perfil360data con interfaz real y firma oficial (diseño Canva en revisión)
- Objetivo: usar captura real de Home de Perfil360data aportada por el titular (búsqueda DNI/CUIL/CUIT, Mis perfiles y Monitor360) en flyer comercial vertical para WhatsApp y evitar cualquier recreación falsa del logo corporativo.
- Verificación de marca: `LordKurama01/Financia360/src/config/brand.ts`, `src/components/PrestigeFooter.tsx`, `src/features/app-branding/PrestigeBrandLink.tsx`, `src/features/app-branding/PrestigeLockup.tsx` y reglas de `src/app/globals.css`. Fuente corporativa sans-serif heredada, firma sencilla, diamante de `public/brand/prestige/tpg-diamondgold.png`. Logo original canónico, blob Git `049cec9ba22709ac8f261b3750ee6b3e6725f7af`.
- Archivo agregado: `branding/tpg-signature-on-dark-official.svg` (430 × 72, transparente), que incorpora sin cambio el PNG original en base64 más `The Prestige Group` en Arial/Helvetica sans-serif. Commit `ea5856bb4e12546ed124b8042c286984d07b7721`.
- Diseño en Canva: `DAHYFohzox0`, adaptación vertical de la captura real facilitada; se insertó en borrador la firma mediante el asset de Canva `MAHYFozwTU0`, en pie inferior derecho y se anonimizó un nombre particular visible en consultas recientes con el texto “PERFIL DE EJEMPLO”.
- Validación: Canva importó correctamente el SVG 430 × 72, devolvió asset y previsualización de diseño con cambios. No se afirma que la edición haya sido guardada: requiere previsualización y aprobación explícita para confirmar transacción. Versión visible en diseño original 941 × 1672; no exportada como PNG final.
- Estado, riesgos: borrador de edición pendiente de aprobación del titular. Evitar publicar capturas de datos de terceros; no se modificaron código, servicios, producción, APK ni backend.
- Rollback: eliminar/revertir sólo la firma SVG derivada si fuese necesario; no alterar el PNG canónico ni la aplicación.
- Próxima acción exacta: presentar preview del flyer, recibir aprobación o corrección, confirmar cambios de Canva y luego exportar a PNG para WhatsApp.


## 2026-10-15 - CTA comercial definitivo del flyer Perfil360data

- Objetivo: presentar Perfil360data como producto funcional; retirar cualquier invitación a demo del flyer de WhatsApp previamente aprobado.
- Estado previo: diseño Canva `DAHYFohzox0` en transacción `613008615574967801`, con firma Prestige basada en PNG canónico y fondo con pantalla real aportada por usuario; consulta personal en pantalla ya anonimizada.
- Cambio exacto: reemplazar “Solicitá una demo” por “Consultá ahora” en el CTA. Se conservan el resto de la composición aprobada, la firma con diamante verdadero abajo a la derecha y el texto “PERFIL DE EJEMPLO” en consultas recientes.
- Resultado comprobado: Canva confirmó transacción `committed`; revisión posterior de contenidos: `Consultá ahora` presente, `demo` ausente, `PERFIL DE EJEMPLO` presente. Enlace de edición permanente `https://www.canva.com/design/DAHYFohzox0` y enlace corto al diseño `https://www.canva.com/d/vUMAYYvKiVARwuZ`.
- Alcance y pruebas: sólo pieza comercial Canva; no cambios en web, app, APK, backend, servicios o producción. Sin build ni deploy. La exportación PNG final para distribución WhatsApp no se realizó en esta validación.
- Riesgos: diseño de pantalla construido a partir de captura de interfaz real, con composición ilustrada; no se anuncian datos ficticios como evidencia real. Confirmar exportación legible 9:16 antes de distribuir.
- Próxima acción exacta: exportar Canva a PNG en calidad suficiente para WhatsApp y revisar texto/footer final antes de enviar a clientes.


## 2026-10-15 — Portfolio GitHub y sistema de README profesionales

- **Objetivo:** mejorar la primera impresion del perfil de GitHub y documentar el ecosistema de The Prestige Group sin exponer codigo propietario ni tocar aplicaciones operativas.
- **Diagnostico verificado:** `theprestige-group` publico, rama `main`, HEAD inicial `48494b1d50aa52bb23892a7d5600e81c3467c5d0`; README anterior centrado en referencia de marca. El repositorio especial `LordKurama01/LordKurama01` no existe y la conexion GitHub disponible no ofrece crear repositorios ni cambiar pins del perfil.
- **Fuente de identidad:** `branding/tpg-diamondgold.png` segun `MARCA_THE_PRESTIGE_GROUP.md`. Se reutiliza el archivo original por ruta, no un emoji, logo inventado ni imagen generada.
- **Archivos creados:** `docs/GITHUB_PROFILE_README.md` (presentacion del perfil lista para copiar al repositorio especial), `docs/README_PRODUCTO_TEMPLATE.md` (estandar reutilizable).
- **Archivos modificados:** `README.md` institucional (proyectos, valor y links publicos) y `AGENTS.md` (reglas de portfolio, marca y seguridad). Sin cambios en `index.html`, CSS, JS, assets ni recursos productivos.
- **Commits documentales:** `86f0a7cf5a2e59d78b72018e07ff70fc8acb1658` (perfil); `a89be17fdcbbb7ef647bf1a9049ba121c3a5d04a` (plantilla); `7de607e622a0b6ae1f1e70d7bd2acd45ce73bf92` (README institucional). El commit de `AGENTS.md` y el de esta entrada estan disponibles en el historial de la rama.
- **Otros repositorios intervenidos bajo solicitud expresa:** `LordKurama01/informe360` (`main`, HEAD inicial `a155ef741a082e80ffb1472b2de4b24e12a272d8`), `LordKurama01/custodia360` (`main`, HEAD inicial `10f31122297a97ba6c8096d6199b23d79c29608c`). Ambos recibieron README profesional, AGENTS y BITACORA. Los detalles estan en sus bitacoras.
- **Validacion:** lectura previa de `AGENTS.md`, `BITACORA.md`, guia de marca, listado de archivos, HEAD y README; cotejo de tecnologia con `package.json` en repos publicos. Verificar posteriormente existencia y contenido remoto de los documentos nuevos. Sin tests de app, CI, build ni despliegues ejecutados; cambio exclusivamente documental.
- **Estado y limitaciones:** portfolio institucional publicado en repo existente; README personal preparado pero **aun no activado en la cabecera del perfil** porque falta crear repositorio publico `LordKurama01/LordKurama01` y copiar alli el archivo como `README.md`. No se cambiaron pins del perfil.
- **Riesgos:** los hosts pueden disparar pipelines con commits documentales segun su configuracion; no se garantiza un despliegue. Material publico sin capturas de datos de terceros ni secretos nuevos. Algunos documentos historicos de productos requieren auditoria separada de seguridad.
- **Rollback:** revertir exclusivamente commits documentales de esta intervencion, conservando historial anterior y PNG original. No forzar ramas ni reescribir historia.
- **Pendientes:** crear repo especial publico del perfil y transferir el README; elegir manualmente repositorios fijados; validar de forma visual el resultado en el perfil publico.
- **Siguiente accion exacta:** crear `LordKurama01/LordKurama01` publico, copiar `docs/GITHUB_PROFILE_README.md` a `README.md`, confirmar que GitHub lo muestra en `github.com/LordKurama01` y fijar The Prestige Group, Informe360 y Custodia360.


## 2026-10-15 — Perfil GitHub publicado

- Se creó el README de `LordKurama01/LordKurama01` en rama `main`, commit `4aa1c2ff99b252b1afea879d42594ba96e11b955`.
- El README quedó idéntico a `docs/GITHUB_PROFILE_README.md` (blob `523677ad6f926886428907d06866a23ae9ad9750`).
- También se crearon AGENTS.md y BITACORA.md en el repositorio del perfil. GitHub confirmó el contenido, no la representación visual final.
- No se alteró código de aplicaciones ni servicios. No se ejecutaron tests de software por tratarse de documentación.
- Próximo paso: verificar visualmente el perfil y fijar tres repositorios públicos desde Customize your pins.


## 2026-10-22 — Presentación institucional de The Prestige Group para contacto con ARBA

- **Objetivo:** elaborar una presentación institucional general para responder a Gustavo Ponce (Gerencia General de Tecnología e Innovación de ARBA) desde correo corporativo y reutilizar en futuras oportunidades.
- **Estado previo verificado:** rama main, último HEAD anterior a la intervención `02bf1c06937c22bb4098d041b201b5d1004aea3d`; revisados AGENTS.md, BITACORA.md, MARCA_THE_PRESTIGE_GROUP.md, README.md, web institucional y respuesta original de Gmail. La empresa tiene una web pública con servicios, casos y contacto. Se comprobó el correo recibido, no envío corporativo.
- **Diagnóstico:** faltaba PDF institucional reutilizable, distinto de las propuestas individuales de productos. No correspondía afirmar contratos, certificaciones o integraciones gubernamentales no acreditados.
- **Cambios:** PDF local de 7 páginas, A4 apaisado, con identidad, capacidades, proyectos, método, colaboración institucional y contacto; guion registrado en `docs/PRESENTACION_INSTITUCIONAL_2026-10-22.md` (commit documental `b097d36e0f111ad9b0d1743a5412c74a6b3f3f17`). El PDF se entrega como archivo de conversación; no se afirma que sus bytes estén en GitHub.
- **Marca:** icono diamante de la familia gráfica oficial, recuperado de la copia PNG de 96×70 de un PDF comercial anterior; transparencia reconstruida eliminando el fondo negro. **No es el PNG canónico de 879×648 embebido**; queda por reemplazarlo con los bytes oficiales antes de reutilizaciones impresas de mayor escala. Firma inferior izquierda según estándar.
- **Pruebas/resultado:** PDF de 7 páginas verificado con pypdf/pdfinfo, render de todas las páginas e inspección visual. Corregidos espaciado de caracteres, fondo negro de icono, subtítulo superpuesto y caja inferior de texto. Sin pruebas de software, CI, deploy o cambios de producción por tratarse de un artefacto documental.
- **Rama/commits:** main; guion documental en `b097d36e0f111ad9b0d1743a5412c74a6b3f3f17`; este registro se guarda como cambio documental reversible. No se modificaron aplicaciones ni infraestructura.
- **Estado:** PDF generado, no enviado; revisión/aprobación del titular pendiente antes de remitir a ARBA. El conector Gmail disponible corresponde a la cuenta personal y no demuestra permisos de envío desde Zoho.
- **Riesgos:** la copia pequeña del símbolo no se debe ampliar; confirmar remitente corporativo, dirección y destinatario antes de envío; no confundir producto en desarrollo con caso implantado.
- **Próximo paso exacto:** revisión del PDF, sustitución del símbolo por el PNG canónico si fuera posible y envío desde Zoho a `gustavo.ponce@arba.gov.ar` junto con una respuesta breve. Registrar fecha/hora del envío cuando esté verificado.
