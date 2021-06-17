---
title: Configure
description: Configuring Octano Static is easy. Everything is handled from a single json file. No coding required.
icon: mdi-cogs
createdAt: 2021-01-01T00:00:03.966Z
---

## config.json

All settings can be configured in `params/config.json`.  

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
*note: changes to config require a rebuild*

## Icons

Images, icons and any other assets you may require can be kept in the `static` directory. 

The `static` directory is directly mapped to the server root and contains files that likely won't be changed. All included files will be automatically served by Static and are accessible through your project root URL. e.g : 

`/static/logo-dark.svg` will be available at http://localhost:3000/logo-dark.svg

`/static/favicon.png` will be available at  `http://localhost:3000/favicon.png`

As such you do not need to include these without referencing the `static` directory. e.g:  

`![alt text](/favicon.png "favicon")`

renders as 

![alt text](/favicon.png "favicon")

## Theme
 
`dark`: If true pool interface defaults to darkmode.

Colors for each theme (dark/light) can be configured, see [Vuetify themes](https://vuetifyjs.com/en/features/theme) for additional options.

Addtional customizations/overrides can be done via `scss/variables.scss`, see [Vuetify Variables](https://vuetifyjs.com/en/features/sass-variables/) for more info.

## Internationalization (i18n)

default locale also acts as fallback if message/document is missing from users locale.
locales listed here should reflect both the `i18n` & `content` directories.
