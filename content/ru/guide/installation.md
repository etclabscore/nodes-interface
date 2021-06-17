---
title: Монтаж
description: Этапы установки Octano Static.
icon: mdi-download
createdAt: 2021-01-01T00:00:02.966Z
---

## Требования

* Node.js<sup>[1]</sup>
* Yarn<sup>[2]</sup>

<sup>[1]</sup>Статический требует Node.js 14.0 или выше. Если у вас еще не установлен узел, [nvm](https://github.com/nvm-sh/nvm) - полезный инструмент для управления версиями узлов в вашей системе.

<sup>[2]</sup>`npm install -g yarn`

## Клонировать репо

```bash
git clone STATIC_GITHUB
cd STATIC_DIR
```

## Настройка сборки

```bash
# установить зависимости
yarn install

# служить с горячей перезагрузкой на localhost: 3000
yarn dev

# сборка для производства и запуск сервера
yarn build
yarn start

# создать статический проект
yarn generate
```