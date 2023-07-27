# Vue JS

## Definición

Vue.js es uno de los frameworks para desarrollo frontend más importantes de la actualidad. Junto a Angular y React.js es uno de los más destacados en la actualidad que nos permitirá realizar todo tipo de aplicaciones a un nivel profesional.

## Historia

Fue creado por Evan You, un extrabajador de Google que trabajó en el desarrollo de otro Framework que hoy lo conocemos como Angular. Utilizó varios frameworks, como React.js, se dedicó a explorarlos y traer lo mejor de todos estos Frameworks a uno solo.  
Creó Vue.js, su nombre original era “Seed.js”, esto porque, según Evan, no tenía un mejor nombre. La razón por la que no usó este nombre es porque ya había sido usado en NPM, esto lo obligó a tener que escoger otro. Se decidió por nombrar al Framework “View.js” pero esto le pareció algo muy literal, así que escribió “view” en google translate y decidió utilizar la traducción al francés que era “vue”.  
Existe un documental sobre Vue.js, si quieres verlo, aquí te dejo el enlace.

## Fundamentos de componentes

Los componentes son una funcionalidad importante que tiene Vue. Se basan en las especificaciones de web components APIs. Permiten modularizar mi aplicación en diferentes pedazos de HTML, JavaScript y CSS para tener un código más legible y semántico. Es decir, cada componente puede ser utilizado a lo largo del proyecto, tiene todo lo que necesita para existir, tiene su lógica, tiene diseño y tiene estructura.

Cuando trabajamos con HTML y el DOM siempre tenemos una estructura de árbol, es decir, un estructura jerárquica DOM. Tenemos un componente principal y luego tenemos componentes hijos que representan contenedores con diferente tipo de contenido. Además, podemos tener otros componentes hijos, es decir, cada uno también tiene su propios elementos HTML.

## Two Way Data Binding

Two Way Data Binding es un patrón MVVM (model - view - view - model) donde se enlazan dos elementos en dos direcciones (cuando cambia uno cambia el otro). Sirve para tener los datos sincronizados con el DOM sin hacer esfuerzos adicionales.

> Vista

Aquí tenemos el HTML. La vista se encarga de decirle al estado que hay cambios, a lo cual el estado va a reaccionar y mandar una nueva vista.

> Estado

Aquí tenemos nuestros datos de JavaScript. El estado se encarga de decirle a la vista cómo y cuando tiene que compilar y cuál es el resultado que se tiene que lograr, esto lo hace con una función que se llama render.

> Usuario

Es el que introduce cambios en la vista.

## Patrón MVVM

View -> input -> ViewModel -> Model -> ViewModel -> state -> View
Vue tiene Two-way data binding, el modelo y la vista están sincronizados.

## Virtual DOM

Capa intermedia en JavaScript que utiliza para mejorar el rendimiento, es una copia del DOM que se encuentra en memoria ram, este objeto se puede cambiar mucho más rápido que hacerlo con Javascript vanilla.

## Ciclo de vida de los componentes

### First

    ~~~javascript
        app = Vue.createApp(options)
        app.mount(el)
    ~~~
  
- (init) events & lifecicle -> beforeCreate
- (init) injections & reactivity -> created

### Second

    ~~~javascript
    'Has template option' == 'true' ? 'compile template insto render function' : 'compile el's innerHTML as template'
    ~~~

beforeMount -> Create.app.$el and appendt it to el

### Third

mounted -> Mounted (state), when mounted:

    ~~~javascript
    while (true){
        if (dataChanges()){
            beforeUpdate();
            virtualDOMReRenderAndPatch();
            updated();
        }
    }
    ~~~

### Forth

    ~~~javascript
    if(app.unmount()){
        beforeUnmount();
        unMounted();
        unMounted(); // after unmount function
    }
    ~~~
