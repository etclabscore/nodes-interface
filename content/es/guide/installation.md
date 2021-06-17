---
title: Instalación
description: Pasos de instalación para Octano Static.
icon: mdi-download
createdAt: 2021-01-01T00:00:02.966Z
---

## Requisitos

* Node.js<sup>[1]</sup>
* Yarn<sup>[2]</sup>

<sup>[1]</sup>Static requiere Node.js 14.0 o superior. Si aún no tiene el nodo instalado, [nvm] (https://github.com/nvm-sh/nvm) es una herramienta útil para administrar las versiones de nodo en su sistema.

<sup>[2]</sup>`npm install -g yarn`

## Repositorio de clonación

```bash
git clone STATIC_GITHUB
cd STATIC_DIR
```

## Configuración de compilación

```bash
# instalar dependencias
yarn install

# servir con recarga en caliente en localhost:3000
yarn dev

# construir para producción y servidor de lanzamiento
yarn build
yarn start

# generar proyecto estático
yarn generate
```