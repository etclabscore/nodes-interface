---
title: Introducción
description: Static es un CMS basado en Git para iniciar sitios de aterrizaje para proyectos de código abierto. Al utilizar Vue.js, Nuxt.js y Vuetify, todo el trabajo pesado está hecho por usted, no se requieren habilidades de codificación. Solo concéntrese en mostrar su proyecto y todo lo que tiene para ofrecer.
icon: mdi-script-text
createdAt: 2021-01-01T00:00:01.966Z
---

## Sencillo

Escribir contenido con markdown es simple. Se admiten varios idiomas con nuxt-i18n. También puede incrustar etiquetas html/vue para crear interfaces más complejas. ¡El cielo es el limite!

## Magnífico

Los componentes de materiales elegantes se construyen con [Vuetify] (https://vuetifyjs.com). No se requieren habilidades de diseño, todo lo que necesita para crear hermosas interfaces está a su disposición.

## Bloques de código

Bloques de código con resaltado de sintaxis.

```js[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

## Tablas

Crea tablas fácilmente con Static.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| *inline markdown* | **still renders** | `nicely` |
1 | 2 | 3