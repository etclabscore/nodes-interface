---
title: Introduction
description: Static is a Git-based CMS for bootstrapping landing sites for open-source projects. By utilizing Vue.js, Nuxt.js and Vuetify, all of the heavy lifting is done for you - no coding skills required. Just focus on showing off your project and all that it has to offer.
icon: mdi-script-text
createdAt: 2021-01-01T00:00:01.966Z
---

## Simple

Writing content with markdown is simple. Multiple languages are supported using nuxt-i18n. You can also embed html/vue tags to build more complex interfaces. The sky is the limit!

## Beautiful

Elegant material components are built in using [Vuetify](https://vuetifyjs.com). No design skills are required - everything you need to create beautiful interfaces is at your disposal.

## Codeblocks

Codeblocks with syntax highlighting.

```js[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

## Tables

Make tables easily with Static. 

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| *inline markdown* | **still renders** | `nicely` |
1 | 2 | 3