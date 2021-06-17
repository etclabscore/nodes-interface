---
title: File Structure
description: Everything is determined based on the contents of the content directory. How to structure your files is explained below.
icon: mdi-file
createdAt: 2021-01-01T00:00:04.966Z
---

## Content dir

The `content` dir acts as the root directory for all markdown content your site uses.

### Locales

The first level is reserved for locale root dirs, for each supported locale you should provide translated markdown files. 
config.i18n.default will be respected as a fallback, if the user requests one that does not exist. 

e.g:

```
content/en
content/es
content/ru
```

### Groups

Groups are simply subdirectories adding a level or order/depth to navigation. They appear as sub directories of `content/{locale}`, 

e.g `content/en/setup`

In order to define meta data a `_menu.md` can be created within the group dir, 

e.g `content/en/setup/_menu.md`


The _menu.md should only contain front matter, describing title, icon, index and with type: group. The index is used for ordering, index 0 will appear before index 1, in the menu. 

example _menu.md
```
---
title: Content
icon: mdi-text
type: group
index: 1
---
```

## Icons 

Material Design Icons are supported. For a list of available icons see: https://pictogrammers.github.io/@mdi/font/5.4.55/

