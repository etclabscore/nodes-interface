---
title: Markdown
description: Markdown参考 
icon: mdi-language-markdown
createdAt: 2021-01-01T00:00:05.966Z
---

## 标题

H2和H3标题将自动形成目录。 所有标题都将呈现一个前置的锚链接。

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

# H1
## H2
### H3
#### H4
##### H5
###### H6

## 重点

```
强调，又称斜体，带有*星号*或_下划线_。

强调，又大胆，带有**星号**或__下划线__。

结合强调与**星号和_下划线_**。

删除线使用两个波浪号。 ~~抓这个~~
```

强调，又称斜体，带有*星号*或_下划线_。

强调，又大胆，带有**星号**或__下划线__。

结合强调与**星号和_下划线_**。

删除线使用两个波浪号。 ~~抓这个~~

## 清单

（在此示例中，前导空格和尾随空格以点表示：⋅）

```
1. 第一个订购清单项目
2. 另一个项目
⋅⋅* 无序子列表。
1. 实际数字并不重要，仅是一个数字
⋅⋅1. 有序子列表
4. 还有另一项。

⋅⋅⋅您可以在列表项中适当缩进段落。 请注意上面的空白行和前导空格（至少一个空格，但是在这里我们将使用三个空格来对齐原始的Markdown）。

⋅⋅⋅要使换行符没有段落，您将需要使用两个尾随空格。⋅⋅
⋅⋅⋅请注意，此行是分开的，但在同一段落中。⋅⋅
⋅⋅⋅（这与典型的GFM换行行为相反，该行为不需要尾随空格。）

* 无序列表可以使用星号
- 或减号
+ 或加号
```

1. 第一个订购清单项目
2. 另一个项目
  * 无序子列表。
1. 实际数字并不重要，仅是一个数字
  1. 有序子列表
4. 还有另一项。

   您可以在列表项中适当缩进段落。 请注意上面的空白行和前导空格（至少一个空格，但是在这里我们将使用三个空格来对齐原始的Markdown）。

   要使换行符没有段落，您将需要使用两个尾随空格。  
   请注意，此行是分开的，但在同一段落中。  
   (这与典型的GFM换行行为相反，该行为不需要尾随空格。)

* 无序列表可以使用星号
- 或减号
+ 或加号

## 链接

有两种创建链接的方法。

```
[我是内联样式的链接](https://www.google.com)

[我是标题的内联样式链接](https://www.google.com "Google首页")

[我是参考风格的链接][任意不区分大小写的参考文字]

[我是相对于存储库文件的参考](../blob/master/LICENSE)

[您可以将数字用于引用样式的链接定义][1]

或将其留空并使用 [链接文字本身].

URL和尖括号中的URL将自动变为链接。
http://www.example.com或<http://www.example.com>，有时
example.com（例如，不在Github上）。

一些文本表明参考链接可以在以后使用。

[任意不区分大小写的参考文本]: https://www.mozilla.org
[1]: http://slashdot.org
[链接文字本身]: http://www.reddit.com
```

[我是内联样式的链接](https://www.google.com)

[我是标题的内联样式链接](https://www.google.com "Google首页")

[我是参考风格的链接][任意不区分大小写的参考文字]

[我是相对于存储库文件的参考](../blob/master/LICENSE)

[您可以将数字用于引用样式的链接定义][1]

或将其留空并使用 [链接文字本身].

URL和尖括号中的URL将自动变为链接。
http://www.example.com或<http://www.example.com>，有时
example.com（例如，不在Github上）。

一些文本表明参考链接可以在以后使用。

[任意不区分大小写的参考文本]: https://www.mozilla.org
[1]: http://slashdot.org
[链接文字本身]: http://www.reddit.com

## 图片 

这是我们的徽标（悬停以查看标题文本）：

```
内联样式:
![替代文字](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "徽标标题文字1")

参考风格: 
![替代文字][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "徽标标题文字2"
```

内联样式:
![替代文字](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "徽标标题文字1")

参考风格: 
![替代文字][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "徽标标题文字2"

## 代码

代码块是Markdown规范的一部分，但语法高亮不是。 但是，许多渲染器（例如Github，Markdown Here's和Octano Static）都支持语法突出显示。 支持哪种语言以及应如何书写这些语言名称将随渲染器的不同而不同。 静态利用[prism](https://prismjs.com/)支持超过250种[语言](https://prismjs.com/#supported-languages)

可以通过`plugins/prism.js`添加默认情况下未在静态中启用的棱镜语言。

```
内联`code`带有`back-ticks`。
```

内联`code`带有`back-ticks`。

代码块要么被带有三个反引号的行围起来，要么被缩进了四个空格。 我建议仅使用受防护的代码块-它们更简单，并且仅支持语法突出显示。


    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```
    
    ```python
    s = "Python syntax highlighting"
    print s
    ```
    
    ```
    No language indicated, so no syntax highlighting. 
    But let's throw in a <b>tag</b>.
    ```


```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

## 桌子 

表不是Markdown核心规范的一部分，但它们是GFM的一部分，Octano Static也支持它们。

```
冒号可用于对齐列。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

每个标头单元格必须至少有3个破折号。
外管（|）是可选的，您无需将
原始Markdown排列整齐。 您还可以使用内联Markdown。

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

冒号可用于对齐列。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

每个标头单元格必须至少有3个破折号。
外管（|）是可选的，您无需将
原始Markdown排列整齐。 您还可以使用内联Markdown。

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

## 块引号

```
> 电子邮件中的块引号非常方便，可以模拟回复文本。
> 该行是同一报价的一部分。

报价中断。

> 这是一条很长的行，当它换行时仍会被正确引用。 哦，男孩，让我们继续写作，以确保它足够长，可以实际包裹所有人。 哦，您可以将Markdown降价到大括号中。
```

> 电子邮件中的块引号非常方便，可以模拟回复文本。
> 该行是同一报价的一部分。

报价中断。

> 这是一条很长的行，当它换行时仍会被正确引用。 哦，男孩，让我们继续写作，以确保它足够长，可以实际包裹所有人。 哦，您可以将Markdown降价到大括号中。

## 内联HTML

您还可以在Markdown中使用原始HTML，并且大多数情况下效果都很好。

```
<dl>
  <dt>定义清单</dt>
  <dd>人们有时会用到的东西。</dd>

  <dt>HTML中的Markdown</dt>
  <dd>*没有*工作**非常**。 使用HTML <em>标签</ em>。</dd>
</dl>
```

<dl>
  <dt>定义清单</dt>
  <dd>人们有时会用到的东西。</dd>

  <dt>HTML中的Markdown</dt>
  <dd>*没有*工作**非常**。 使用HTML <em>标签</ em>。</dd>
</dl>

## 水平线

```
三个或更多...

---

连字号

***

星号

___

下划线
```

三个或更多...

---

连字号

***

星号

___

下划线

## 换行

关于学习换行的工作原理，我的基本建议是进行实验和发现-按下一次Enter（即插入一条换行），然后再次按下两次（即插入两条换行），看看会发生什么。 您很快就会学会获得想要的东西。

您可以尝试以下一些方法：

```
这是我们要开始的一行。

该行与上面的行用两个换行符隔开，因此它将是一个*单独的段落*。

这行也是一个单独的段落，但是...
该行仅由一个换行符分隔，因此在*相同段落*中是单独的行。
```

这是我们要开始的一行。

该行与上面的行用两个换行符隔开，因此它将是一个*单独的段落*。

这行也是一个单独的段落，但是...
该行仅由一个换行符分隔，因此在*相同段落*中是单独的行。

## YouTube视频

不能直接添加它们，但是您可以添加带有视频链接的图像，如下所示：

```
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

或者，在纯Markdown中，但是失去了图像大小和边框：

```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```