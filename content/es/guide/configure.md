---
title: Configurar
description: Configurar Octano Static es fácil. Todo se maneja desde un solo archivo json. No se requiere codificación.
icon: mdi-cogs
createdAt: 2021-01-01T00:00:03.966Z
---

## config.json

Todos los ajustes se pueden configurar en `params / config.json`.

```json[params/config.json]
{
  "favicon": "favicon.png",
  "logo": {
    "dark": "octano-dark.svg",
    "light": "octano-light.svg"
  },
  "url": "https://octano.dev",
  "github": "https://github.com/octanolabs/static",
  "theme": {
    "dark": true,
    "themes": {
      "dark": {
        "primary": "#6fceb7",
        "secondary": "#e76754",
        "accent": "#ff00ff",
        "error": "#FF5252",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FFC107"
      },
      "light": {
        "primary": "#00ccff",
        "secondary": "#ff00cb",
        "accent": "#f30",
        "error": "#FF5252",
        "info": "#2196F3",
        "success": "#4CAF50",
        "warning": "#FFC107"
      }
    },
    "options": { 
      "customProperties": true 
    }
  },
  "i18n": {
    "default": "en",
    "locales": [
      {
        "code": "en",
        "name": "English"
      },
      {
        "code": "es",
        "name": "Español"
      },
      {
        "code": "ru",
        "name": "Pусский"
      },
      {
        "code": "zh",
        "name": "中文"
      }
    ]
  }
}
```
*nota: los cambios en la configuración requieren una reconstrucción*

## Iconos

Las imágenes, los iconos y cualquier otro recurso que pueda necesitar se pueden guardar en el directorio `static`.

El directorio `static` se asigna directamente a la raíz del servidor y contiene archivos que probablemente no se modificarán. Todos los archivos incluidos serán servidos automáticamente por Static y se puede acceder a ellos a través de la URL raíz de su proyecto. p.ej :

`/static/logo-dark.svg` estará disponible en `http://localhost:3000/logo-dark.svg`

`/static/favicon.png` estará disponible en  `http://localhost:3000/favicon.png`

Como tal, no es necesario incluirlos sin hacer referencia al directorio `static`. p.ej:

`![alt text](/favicon.png "favicon")`

se rinde como

![alt text](/favicon.png "favicon")

## Tema
 
`dark`: Si la verdadera interfaz de grupo se establece de forma predeterminada en el modo oscuro.

Se pueden configurar los colores para cada tema (dark/light); consulte [Temas de Vuetify] (https://vuetifyjs.com/en/features/theme) para ver opciones adicionales.

Se pueden realizar modificaciones / personalizaciones adicionales a través de `scss/variables.scss`, consulte [Variables de Vuetify] (https://vuetifyjs.com/en/features/sass-variables/) para obtener más información.

## Internacionalización (i18n)

La configuración regional predeterminada también actúa como respaldo si falta un mensaje / documento en la configuración regional de los usuarios.
Las configuraciones regionales enumeradas aquí deberían reflejar los directorios `i18n` y` content`.
