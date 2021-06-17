---
title: Настроить
description: Настроить Octano Static очень просто. Все обрабатывается из одного файла json. Кодирования не требуется.
icon: mdi-cogs
createdAt: 2021-01-01T00:00:03.966Z
---

## config.json

Все настройки можно настроить в `params/config.json`.  

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
*примечание: изменения в конфигурации требуют перестройки*

## Иконки

Изображения, значки и любые другие ресурсы, которые могут вам понадобиться, могут храниться в каталоге `static`.  

Каталог `static` напрямую сопоставляется с корнем сервера и содержит файлы, которые, скорее всего, не будут изменены. Все включенные файлы будут автоматически обслуживаться Static и доступны через корневой URL-адрес вашего проекта. например:

`/static/logo-dark.svg` будет доступен по адресу http://localhost:3000/logo-dark.svg.

`/static/favicon.png` будет доступен по адресу http://localhost:3000/favicon.png.

Таким образом, вам не нужно включать их, не ссылаясь на каталог static. например:  

`![alt text](/favicon.png "favicon")`

отображается как

![alt text](/favicon.png "favicon")

## Тема
 
`dark`: Если true, интерфейс пула по умолчанию работает в темном режиме.

Цвета для каждой темы (темная/светлая) можно настроить, дополнительные параметры см. В разделе [Темы Vuetify](https://vuetifyjs.com/en/features/theme).

Дополнительные настройки/переопределения могут быть выполнены через `scss/variables.scss`, см. [Vuetify Variables](https://vuetifyjs.com/en/features/sass-variables/) для получения дополнительной информации.

## Интернационализация (i18n)

языковой стандарт по умолчанию также действует как резерв, если сообщение/документ отсутствует в языковом стандарте пользователя.
перечисленные здесь локали должны отражать каталоги `i18n` и` content`.
