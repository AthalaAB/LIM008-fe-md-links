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

## Flujograma
![DIAGRAMA DE FLUJO MD-LINKS](https://user-images.githubusercontent.com/45071851/54456965-1e10dc80-472e-11e9-81ab-ac2dcbe57413.png)

## Instalación

## `npm i AthalaAB/md-links`

## Uso en CLI

 # `$ md-links <route> <options>`

### Ingresando solo ruta:

![solo ruta](https://user-images.githubusercontent.com/45071851/54457646-f1f65b00-472f-11e9-80cb-7186c55a32fd.JPG)

![result1](https://user-images.githubusercontent.com/45071851/54457701-1a7e5500-4730-11e9-9571-bc8f64e864cd.JPG)

### Opción validate:

![validate](https://user-images.githubusercontent.com/45071851/54457716-279b4400-4730-11e9-979b-d463cfc0d6de.JPG)

![result2](https://user-images.githubusercontent.com/45071851/54457737-38e45080-4730-11e9-9ae3-dd08516f97eb.JPG)

### Opción stats:

![stats](https://user-images.githubusercontent.com/45071851/54457765-51ed0180-4730-11e9-8558-00b575672342.JPG)

![result3](https://user-images.githubusercontent.com/45071851/54457788-6204e100-4730-11e9-9718-cc532f0c0b1e.JPG)

### Opción validate y stats:

![result4](https://user-images.githubusercontent.com/45071851/54457830-747f1a80-4730-11e9-8c98-2f6c18eeb621.JPG)



