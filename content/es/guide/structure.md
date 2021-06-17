---
title: Estructura de archivo
description: Todo se determina en función del contenido del directorio de contenido. A continuación se explica cómo estructurar sus archivos.
icon: mdi-file
createdAt: 2021-01-01T00:00:04.966Z
---

## content directorio

El directorio `content` actúa como el directorio raíz para todo el contenido de rebajas que usa su sitio.

### Locales

El primer nivel está reservado para los directorios raíz de la configuración regional, para cada configuración regional admitida debe proporcionar archivos de rebajas traducidos.
config.i18n.default se respetará como un respaldo, si el usuario solicita uno que no existe.

p.ej:

```
content/en
content/es
content/ru
```

### Grupos

Los grupos son simplemente subdirectorios que agregan un nivel u orden / profundidad a la navegación. Aparecen como subdirectorios de `content/{locale}`,

p.ej: `content/en/setup`

Para definir los metadatos, se puede crear un `_menu.md` dentro del directorio del grupo,

p.ej: `content/en/setup/_menu.md`

El _menu.md solo debe contener contenido inicial, que describa el título, el icono, el índice y el tipo: grupo. El índice se utiliza para ordenar, el índice 0 aparecerá antes del índice 1, en el menú.

ejemplo _menu.md
```
title: Guía
icon: mdi-script-text-outline
type: group
index: 0
```

## Icons 

Material Design Icons are supported. For a list of available icons see: https://pictogrammers.github.io/@mdi/font/5.4.55/

