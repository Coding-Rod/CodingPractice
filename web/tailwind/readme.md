# Tailwind CSS

## Framework CSS

Conjunto de herramientas para construir una interfaz web con CSS, que nos permite agilizar el desarrollo.  
**Tailwind** es un framework utility-first y está diseñado para acelerar el proceso de diseño al eliminar la necesidad de usar CSS.

## Características

* Representado mediante clases, definimos nuestros estilos.
* Orientado a utilidades, vuelve el desarrollo más personalizable.
* Personalizable, Tailwind es 100% personalizable a diferencia de otros frameworks.

## Otros frameworks de CSS

### Bootstrap

* Basado en componentes
* Abstracción en la creación de los componentes
* Poco personalizable

### Material UI

* Basado en componentes pre-construidos
* Basado en el tema de Material
* Design System

### Bulma

* Framework modular, permite importar los archivos que se necesiten utilizar
* Personalizable, mediante la creación de variables en SASS se pueden agregar estilos personalizados
* Basado en Flexbox

## Mobile First

Pensado principalmente para mejorar la experiencia de usuario. Permite identificar las partes más importantes de nuestro proyecto. En otras palabras, prioriza el desarrollo pensando en los dispositivos móviles.

## Utility First

Basado en utilidades el cual permite tener una estructura más limpia de nuestros estilos, el desarrollo es más rápido ya que todo se trabaja dentro del mismo archivo. En otras palabras, es la forma en que se nombran y se crean las clases de estilos, es decir, son clases descriptivas de la utilidad que nos dan. Se trata de construir componentes a partir de clases con nombres descriptivos.

> [Installing Tailwind CSS](https://tailwindcss.com/docs/installation)

## Direvticas de Tailwind

Recordar que @tailwind base maneja los elementos HTML (div, span, ul, p, h1, etc), @tailwind components maneja las clases y finalmente @tailwind utilities maneja las utilidades (que son todas aquellas propiedades referentes a los atributos CSS) (filter: grayscale(100%)).
Entonces cuando hablamos de la directiva @layer lo que hacemos es sobreescribir o definir nuestros propios estilos, componentes o configuraciones para cualquiera de estas 3 categorías.

Recuerden que Tailwind ya tiene estilos predefinidos en sus clases entonces puede que exista text-small y supongamos que eso hace que un texto sea de tamaño 12px PERO que sucede si tu quieres que ese texto sea de 11px y no de 12px?
Pues justo para eso puedes usar @layer components y modificas ese valor en una clase especifica. O si quieres que todos los li tengan un text-underline pues defines con @layer base que tus li van a tener x características.

Así mismo puedes crear tus propias clases y definir un conjunto de propiedades.
Ejemplo crear una clase .card y le defines:

~~~css
@layer components {
    .card {
    background-color: theme(‘colors.white’);
    border-radius: theme(‘borderRadius.lg’);
    padding: theme(‘spacing.6’);
    box-shadow: theme(‘boxShadow.xl’);
    }
}
~~~

Después dentro de tu HTML solo llamas a la clase .card y listo.

## Breakpoints:

* sm - 640px
* md - 768px
* lg - 1024px
* xl - 1280px
* 2xl - 1536px

> Documentación oficial de [Width](https://tailwindcss.com/docs/width)
> Documentación oficial de [Height](https://tailwindcss.com/docs/Height)

Ejemplo práctico:

~~~html
<div class=“w-auto h-screen bg-sky-200 flex”>
<div class=“w-1/4 h-1/4 bg-sky-700”></div>
<div class=“w-1/4 h-1/4 bg-cyan-400”></div>
<div class=“w-1/3 h-1/4 bg-cyan-700”></div>
<div class=“w-1/4 h-1/4 bg-cyan-900”></div>
</div>
~~~
