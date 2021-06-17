---
title: 档案结构
description: 一切都是基于内容目录的内容确定的。 下面说明了如何构造文件。
icon: mdi-file
createdAt: 2021-01-01T00:00:04.966Z
---

## content目录

`content`目录充当您网站使用的所有降价内容的根目录。

### 语言

第一级保留给区域设置根目录，对于每个受支持的区域设置，您都应提供翻译后的markdown文件。
如果用户请求config.i18n.default不存在，则将其作为后备。

例如：

```
content/en
content/es
content/ru
```

### 团体

组只是添加导航级别或顺序/深度的子目录。 它们显示为`content/{locale}`的子目录，

例如 `content/en/setup`

为了定义元数据，可以在组目录中创建一个_menu.md，

例如 `content/en/setup/_menu.md`

_menu.md仅应包含开头的内容，描述标题，图标，索引以及类型：group。 索引用于排序，在菜单中，索引0将出现在索引1之前。

例子_menu.md
```
---
title: Content
icon: mdi-text
type: group
index: 1
---
```

## 图示 

支持材料设计图标。 有关可用图标的列表，请参见：https://pictogrammers.github.io/@mdi/font/5.4.55/

