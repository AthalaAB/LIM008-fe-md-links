# Markdown Links

## Preámbulo

Es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Introducción

Esta librería permite al usuario extraer los links de los archivos Markdown, sacar estadísticas de los links, hacer peticiones HTTP y ver sus respectivos resultados.

Los archivos markdown son renderizados con Marked. Para validar la respuesta HTTP de los links de archivos Markdown debes escribir en CLI la ruta del archivo o directorio que desea consultar. Por otra parte, para las estadísticas obtendrá la cantidad total de links que encontró en la ruta que escribió en CLI y también el total de los links únicos. A su vez, puedes sacar las estadísticas del total de los links rotos (respuesta HTTP fallida).

## Instalación

## `npm i --save-dev @athalaabantobustinza/md-links`

## Uso en CLI

# `$ md-links <route> <options>`

## Demo de la librería

<!-- Incluir imágenes de referencia -->
