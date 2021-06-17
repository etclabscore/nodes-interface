---
title: 配置
description: 配置Octano Static很容易。 一切都从单个json文件处理。 无需编码。
icon: mdi-cogs
createdAt: 2021-01-01T00:00:03.966Z
---

## config.json

所有设置都可以在`params / config.json`中进行配置。

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
*注意：对配置的更改需要重建*

## 图示

图片，图标和您可能需要的任何其他资产都可以保存在“静态”目录中。

`static`目录直接映射到服务器根目录，其中包含可能不会更改的文件。 所有包含的文件将由Static自动提供服务，并且可以通过您的项目根URL访问。 例如：

`/static/logo-dark.svg`将在`http://localhost:3000/logo-dark.svg`上提供

`/static/favicon.png`将在`http://localhost:3000/favicon.png`中可用。

因此，您无需引用`static`目录就无需包含这些内容。 例如：

`![替代文字](/favicon.png "favicon")`

renders as 

![替代文字](/favicon.png "favicon")

## 主题
 
`dark`: 如果为true，则池接口默认为暗模式。

可以配置每个主题的颜色（深色/浅色），有关其他选项，请参见[Vuetify主题](https://vuetifyjs.com/en/features/theme)。

可以通过`scss/variables.scss`完成其他自定义/替代，有关更多信息，请参见[Vuetify Variables](https://vuetifyjs.com/en/features/sass-variables/)。

## 国际化（i18n）

如果用户语言环境中缺少消息/文档，则默认语言环境也将充当备用。
此处列出的语言环境应同时反映`i18n`和`content`目录。
