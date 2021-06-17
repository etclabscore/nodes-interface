---
title: Installation
description: Installation steps for Octano Static.
icon: mdi-download
createdAt: 2021-01-01T00:00:02.966Z
---

## Requirements

* Node.js<sup>[1]</sup>
* Yarn<sup>[2]</sup>

<sup>[1]</sup>Static requires Node.js 14.0 or greater. If you do not already have node installed [nvm](https://github.com/nvm-sh/nvm) is a useful tool for managing node versions on your system.

<sup>[2]</sup>`npm install -g yarn`

## Clone repo

```bash
git clone STATIC_GITHUB
cd STATIC_DIR
```

## Build setup

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate
```