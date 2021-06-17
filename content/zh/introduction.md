---
title: 介绍
description: 静态是基于Git的CMS，用于引导开源项目的登录站点。 通过利用Vue.js，Nuxt.js和Vuetify，所有繁重的工作都可以为您完成-不需要任何编码技能。 只需专注于炫耀您的项目以及它所提供的一切。
icon: mdi-script-text
createdAt: 2021-01-01T00:00:01.966Z
---

## 简单的

用markdown编写内容很简单。 使用nuxt-i18n支持多种语言。 您还可以嵌入html/vue标记以构建更复杂的界面。 天空才是极限！

## 美丽的

优雅的材质组件是使用[Vuetify](https://vuetifyjs.com)内置的。 不需要任何设计技能-创建美观界面所需的一切都在您的掌控之中。

## 代码块

具有语法高亮显示的代码块。

```js[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

## 桌子

使用静态轻松制作表格。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| *inline markdown* | **still renders** | `nicely` |
1 | 2 | 3