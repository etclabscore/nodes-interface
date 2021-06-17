---
title: Markdown
description: Referencia de Markdown.
icon: mdi-language-markdown
createdAt: 2021-01-01T00:00:05.966Z
---

## Títulos

Los encabezados H2 y H3 formarán automáticamente la tabla de contenido. Todos los encabezados mostrarán un enlace de ancla al principio.

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

## Énfasis

```
Énfasis, también conocido como cursiva, con *asteriscos* o _puntos bajos_.

Fuerte énfasis, también conocido como negrita, con **asteriscos** o __puntos bajos__.

Énfasis combinado con **asteriscos y _puntos bajos_**.

Tachado utiliza dos tildes. ~~Raspa esto.~~
```

Énfasis, también conocido como cursiva, con *asteriscos* o _puntos bajos_.

Fuerte énfasis, también conocido como negrita, con **asteriscos** o __puntos bajos__.

Énfasis combinado con **asteriscos y _puntos bajos_**.

Tachado utiliza dos tildes. ~~Raspa esto.~~

## Listas

(En este ejemplo, los espacios iniciales y finales se muestran con puntos.: ⋅)

```
1. Primer elemento de lista ordenado
2. Otro articulo
⋅⋅* Sublista desordenada.
1. Los números reales no importan, solo que es un número
⋅⋅1. Sublista ordenada
4. Y otro artículo.

⋅⋅⋅Puede tener párrafos debidamente sangrados dentro de los elementos de la lista. Observe la línea en blanco de arriba y los espacios iniciales (al menos uno, pero usaremos tres aquí para alinear también el Markdown sin procesar).

⋅⋅⋅Para tener un salto de línea sin un párrafo, deberá utilizar dos espacios finales.⋅⋅
⋅⋅⋅Tenga en cuenta que esta línea está separada, pero dentro del mismo párrafo.⋅⋅
⋅⋅⋅(Esto es contrario al comportamiento típico de salto de línea de GFM, donde no se requieren espacios finales).

* La lista desordenada puede usar asteriscos
- O menos
+ O ventajas
```

1. Primer elemento de lista ordenado
2. Otro articulo
  * Sublista desordenada.
1. Los números reales no importan, solo que es un número
  1. Sublista ordenada
4. Y otro artículo.

   Puede tener párrafos debidamente sangrados dentro de los elementos de la lista. Observe la línea en blanco de arriba y los espacios iniciales (al menos uno, pero usaremos tres aquí para alinear también el Markdown sin procesar).

   Para tener un salto de línea sin un párrafo, deberá utilizar dos espacios finales.⋅⋅
   Tenga en cuenta que esta línea está separada, pero dentro del mismo párrafo.  
   (Esto es contrario al comportamiento típico de salto de línea de GFM, donde no se requieren espacios finales).

* La lista desordenada puede usar asteriscos
- O menos
+ O ventajas

## Enlaces

Hay dos formas de crear enlaces.

```
[Soy un enlace de estilo en línea](https://www.google.com)

[Soy un enlace de estilo en línea con título](https://www.google.com "Página de inicio de Google")

[Soy un enlace de estilo de referencia][Texto de referencia arbitrario que no distingue entre mayúsculas y minúsculas]

[Soy una referencia relativa a un archivo de repositorio.](../blob/master/LICENSE)

[Puede utilizar números para las definiciones de enlaces de estilo de referencia][1]

O déjelo vacío y use el [texto del enlace en sí].

Las URL y las URL entre paréntesis angulares se convertirán automáticamente en enlaces. 
http://www.example.com o <http://www.example.com> y, a veces
example.com (pero no en Github, por ejemplo).

Algún texto para mostrar que los enlaces de referencia pueden seguir más adelante.

[texto de referencia arbitrario que no distingue entre mayúsculas y minúsculas]: https://www.mozilla.org
[1]: http://slashdot.org
[el texto del enlace en sí]: http://www.reddit.com
```

[Soy un enlace de estilo en línea](https://www.google.com)

[Soy un enlace de estilo en línea con título](https://www.google.com "Página de inicio de Google")

[Soy un enlace de estilo de referencia][Texto de referencia arbitrario que no distingue entre mayúsculas y minúsculas]

[Soy una referencia relativa a un archivo de repositorio.](../blob/master/LICENSE)

[Puede utilizar números para las definiciones de enlaces de estilo de referencia][1]

O déjelo vacío y use el [texto del enlace en sí].

Las URL y las URL entre paréntesis angulares se convertirán automáticamente en enlaces. 
http://www.example.com o <http://www.example.com> y, a veces
example.com (pero no en Github, por ejemplo).

## Imagenes 

Aquí está nuestro logotipo (coloque el cursor para ver el texto del título):

```
Estilo en línea: 
![texto alternativo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Título de texto 1")

Estilo de referencia: 
![texto alternativo][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Título de texto 2"
```

Estilo en línea: 
![texto alternativo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Título de texto 1")

Estilo de referencia: 
![texto alternativo][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Título de texto 2"

## Code

Los bloques de código son parte de la especificación Markdown, pero el resaltado de sintaxis no lo es. Sin embargo, muchos renderizadores, como Github's, Markdown Here y Octano Static, admiten el resaltado de sintaxis. Los idiomas que se admiten y cómo se deben escribir esos nombres de idiomas variarán de un renderizador a otro. Static utiliza [prism](https://prismjs.com/) compatible con más de 250 [idiomas](https://prismjs.com/#supported-languages)

Los idiomas de prisma no habilitados en Estático de forma predeterminada se pueden agregar a través de `plugins/prism.js`

```
El `código` en línea tiene `marcas inversas alrededor`.
```

El `código` en línea tiene `marcas inversas alrededor`.

Los bloques de código están delimitados por líneas con tres marcas inversas ```, o están sangrados con cuatro espacios. Recomiendo usar solo los bloques de código delimitados; son más fáciles y solo admiten el resaltado de sintaxis.


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
No se indica ningún idioma, por lo que no se resalta la sintaxis.
Pero agreguemos una <b>etiqueta</b>.
```

## Tablas 

Tables aren't part of the core Markdown spec, but they are part of GFM and Octano Static also supports them.

```
Se pueden usar dos puntos para alinear columnas.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Debe haber al menos 3 guiones que separen cada celda de encabezado.
Los tubos externos (|) son opcionales y no es necesario hacer el
Raw Markdown se alinea maravillosamente. También puede utilizar Markdown en línea.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Se pueden usar dos puntos para alinear columnas.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Debe haber al menos 3 guiones que separen cada celda de encabezado.
Los tubos externos (|) son opcionales y no es necesario hacer el
Raw Markdown se alinea maravillosamente. También puede utilizar Markdown en línea.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

## Blockquotes

```
> Las citas en bloque son muy útiles en el correo electrónico para emular el texto de respuesta.
> Esta línea es parte de la misma cita.

Descanso de cotización.

> Esta es una línea muy larga que aún se cotizará correctamente cuando termine. Oh, vaya, sigamos escribiendo para asegurarnos de que esto sea lo suficientemente largo como para envolverlo para todos. Oh, puedes *poner* **Markdown** en una cita en bloque.
```

> Las citas en bloque son muy útiles en el correo electrónico para emular el texto de respuesta.
> Esta línea es parte de la misma cita.

Descanso de cotización.

> Esta es una línea muy larga que aún se cotizará correctamente cuando termine. Oh, vaya, sigamos escribiendo para asegurarnos de que esto sea lo suficientemente largo como para envolverlo para todos. Oh, puedes *poner* **Markdown** en una cita en bloque.

## HTML en línea

También puede usar HTML sin procesar en su Markdown, y en su mayoría funcionará bastante bien.

```
<dl>
  <dt>Lista de definiciones</dt>
  <dd>Es algo que la gente usa a veces.</dd>

  <dt>Markdown en HTML</dt>
  <dd>*No* funciona **muy** bien. Utilice <em>etiquetas</em> HTML.</dd>
</dl>
```

<dl>
  <dt>Lista de definiciones</dt>
  <dd>Es algo que la gente usa a veces.</dd>

  <dt>Markdown en HTML</dt>
  <dd>*No* funciona **muy** bien. Utilice <em>etiquetas</em> HTML.</dd>
</dl>

## Linea horizontal

```
Tres o más ...

---

Guiones

***

Asteriscos

___

Subrayados
```

Tres o más ...

---

Guiones

***

Asteriscos

___

Subrayados

## Saltos de línea

Mi recomendación básica para aprender cómo funcionan los saltos de línea es experimentar y descubrir: presione `Entrar` una vez (es decir, inserte una nueva línea), luego presione dos veces (es decir, inserte dos nuevas líneas), vea qué sucede. Pronto aprenderá a obtener lo que desea.

Aquí hay algunas cosas para probar:

```
Aquí hay una línea para que comencemos.

Esta línea está separada de la anterior por dos nuevas líneas, por lo que será un *párrafo separado*.

Esta línea también es un párrafo separado, pero ...
Esta línea solo está separada por una nueva línea, por lo que es una línea separada en el *mismo párrafo*.
```

Aquí hay una línea para que comencemos.

Esta línea está separada de la anterior por dos nuevas líneas, por lo que será un *párrafo separado*.

Esta línea también es un párrafo separado, pero ...
Esta línea solo está separada por una nueva línea, por lo que es una línea separada en el *mismo párrafo*.

## Videos de Youtube

No se pueden agregar directamente, pero puede agregar una imagen con un enlace al video como este:

```
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

O, en Markdown puro, pero perdiendo el tamaño y el borde de la imagen:

```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```
