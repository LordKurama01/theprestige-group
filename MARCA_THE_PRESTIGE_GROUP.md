# The Prestige Group - firma de marca en footers y documentos

Regla aprobada por Matías Álvarez y registrada el 15 de octubre de 2026. Referencia central para los productos, sitios, presentaciones y documentos del grupo.

## Identidad oficial

La firma se compone del **diamante dorado original completo, con transparencia, seguido de “The Prestige Group”**. Se presenta como un conjunto horizontal: diamante a la izquierda y nombre a la derecha.

El símbolo 💎 puede servir como abreviatura en una conversación. **En una pieza final se utiliza el PNG original; el emoji no reemplaza el logo.** Tampoco se reemplaza por un icono de librería, un diamante en CSS/SVG, un dibujo nuevo o una imagen generada.

## Archivo canónico

![Diamante dorado oficial de The Prestige Group](branding/tpg-diamondgold.png)

| Dato | Valor verificado |
|---|---|
| Archivo en este repositorio | `branding/tpg-diamondgold.png` |
| Formato | PNG RGBA, fondo transparente |
| Resolución original | 879 x 648 píxeles |
| Proporción | 879:648; ancho = alto x 1,35648 |
| SHA-256 | `3fdf5688660bd8b881c74f48b2ec2a8ec13bd65d84aabddf9e2352d2066a7011` |
| Blob Git de los bytes originales | `049cec9ba22709ac8f261b3750ee6b3e6725f7af` |
| Origen comprobado | Avanza / Financia360, `public/brand/prestige/tpg-diamondgold.png`, referenciado desde `src/config/brand.ts` |

El alias `public/prestige-diamond.png` de Avanza contiene exactamente los mismos bytes. La copia anterior `public/branding/tpg-diamondgold.png` tiene 96 x 70 px y es una variante pequeña; no debe ampliarse para imprimir cuando está disponible este original de alta resolución.

Descargar el archivo original desde el repositorio y copiarlo al lugar de recursos que ya use cada proyecto. Reutilizar un recurso existente si sus bytes coinciden; no crear duplicados ni depender de una captura de pantalla. Mantener el PNG dentro de los recursos del proyecto, sin depender de una descarga de GitHub para mostrar cada footer.

## Footer de sitios y aplicaciones

- Ubicar la firma en el **sector inferior izquierdo** del footer, dentro de sus márgenes. Mantener esa alineación en móvil.
- Usar el diamante a la izquierda y el texto completo “The Prestige Group” a su derecha, en una sola unidad visual y con separación suficiente.
- La firma acredita a la empresa desarrolladora. La identidad del producto conserva su lugar y protagonismo; por ejemplo, el logo de Territorio360 no sustituye al diamante corporativo.
- Usar un tamaño discreto pero legible, con el nombre completo visible. Evitar recortar la firma o separar el diamante y el nombre entre líneas.
- Preservar colores, transparencia y proporción del PNG. Usar `height` con `width: auto` y `object-fit: contain`; no forzar una caja cuadrada, aplicar filtros, recolorear o deformar.
- Adaptar el color del texto al fondo para que se lea bien. El dorado pertenece al PNG original y no se cambia para imitar el color del producto.
- Si el proyecto muestra una versión, copyright o número de página, conservarlo en un bloque separado. Esos datos no forman parte del logo.

### Ejemplo HTML/CSS reutilizable

La ruta es ilustrativa: adaptarla a la ubicación real del archivo en el proyecto. En un framework con carpeta `public`, copiar a `public/branding/tpg-diamondgold.png` permite servirlo como `/branding/tpg-diamondgold.png`.

```html
<footer class="tpg-footer">
  <span class="tpg-signature">
    <img
      src="/branding/tpg-diamondgold.png"
      width="879"
      height="648"
      alt=""
      decoding="async"
    />
    <span>The Prestige Group</span>
  </span>
</footer>
```

```css
.tpg-footer {
  display: flex;
  justify-content: flex-start;
}

.tpg-signature {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.3;
  white-space: nowrap;
}

.tpg-signature img {
  display: block;
  height: 20px;
  width: auto;
  object-fit: contain;
  flex: none;
}
```

El `alt=""` evita que el lector de pantalla repita el nombre, que ya está escrito al lado. Los tamaños del ejemplo son valores de referencia, ajustables según legibilidad; no son una obligación de cambiar un footer que ya funciona.

## Pie de página de PDF, Word, presentaciones e informes

- Colocar la firma en el **pie inferior izquierdo**, alineada con el margen del contenido. Repetirla en las páginas que lleven pie.
- Conservar el conjunto horizontal: diamante original a la izquierda y “The Prestige Group” a la derecha.
- Mantener el número de página en su espacio propio, habitualmente a la derecha, sin desplazar la firma.
- Embeber el PNG transparente de alta resolución. No usar emojis, capturas, un icono alternativo ni versiones generadas.
- Conservar la proporción. Como referencia real, los documentos recientes utilizan un diamante de unos 24 pt de ancho por 17,7 pt de alto, texto de 9,5 a 11 pt y separación de unos 8 a 10 pt. Ajustar esos valores al tamaño final de la pieza.
- Sobre fondos claros, utilizar texto oscuro o gris legible; sobre fondos oscuros, texto claro. Mantener el diamante dorado original.
- En Word, usar el pie de página y, si hace falta, una tabla sin bordes para alinear la imagen, el nombre y la numeración.
- En PDF, verificar transparencia, resolución, márgenes y lectura después de exportar. La firma no debe superponerse con el cuerpo del documento.

## Recuperación en otro chat o proyecto

Antes de crear material con la firma corporativa:

1. Leer este archivo y `AGENTS.md` del proyecto de destino.
2. Recuperar el PNG canónico de `branding/tpg-diamondgold.png`.
3. Verificar si el proyecto ya tiene la misma imagen para reutilizar su ruta.
4. Aplicar el formato horizontal y la ubicación inferior izquierda.
5. Revisar el resultado final y registrar el cambio en la bitácora correspondiente.

Esta guía documenta la marca corporativa. No autoriza a rediseñar automáticamente una web, cambiar el logo de un producto o modificar otros repositorios fuera de la tarea solicitada.
