---
title: 安装
description: Octano Static的安装步骤。
icon: mdi-download
createdAt: 2021-01-01T00:00:02.966Z
---

## 要求

* Node.js<sup>[1]</sup>
* Yarn<sup>[2]</sup>

<sup>[1]</sup>静态需要Node.js 14.0或更高版本。 如果尚未安装节点，则[nvm](https://github.com/nvm-sh/nvm)是用于管理系统上节点版本的有用工具。

<sup>[2]</sup>`npm install -g yarn`

## 克隆存储库

```bash
git clone STATIC_GITHUB
cd STATIC_DIR
```

## 构建设置

```bash
# 安装依赖
yarn install

# 在本地主机上热加载服务：3000
yarn dev

# 为生产和启动服务器构建
yarn build
yarn start

# 生成静态项目
yarn generate
```