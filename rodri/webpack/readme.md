# Webpack

## Ideas/conceptos claves

Module bundlers son herramientas de frontend que nos permiten usar archivos con módulos JavaScript, entre otras características y convertiros a un JavaScript el cual el navegador pueda entender

## Apuntes

Webpack es una herramienta que nos permite preparar nuestro código para llevarlo a producción (module bundler).  
Webpack nos permite trabajar con:

* HTML
* CSS
* JavaScript
* Archivos estáticos
* Imágenes
* Fuentes

Tambien nos permite tener un modo en desarrollo para nuestros proyectos para hacer pruebas.  
Nacio en el 2012, desde ese entonces varias empresas lo usan como ser:

* Twitter
* Instagram
* PayPal

También nos permite:

* Gestionar dependencias
* Ejecutar tareas
* Conversión de archivos

Nos permite trabajar en módulos

* Permitiéndonos tener un código separado en desarrollo, pero en producción en una fuente
* Webpack permite tener módulos de JS en formato
  * AMD
  * Common JS
  * ES15

> RESUMEN: Webpack es un module bundler que nos permite trabajar con una variedad de tecnologías web empezando desde HTML y terminando con JS. Además de tener soporte para archivos estáticos

## Conceptos Básicos Webpack

### Entry (punto de entrada)

Este le indica a webpack cual modulo de JavaScript debe de usar para empezar a crear una salida.  
Ejemplo : index.js. también podemos tener múltiples puntos de entrada pero eso es otra historia.

### Output (punto de salida)

Este archivo es el bundle o nuestro archivo de salida, seria nuestra caja donde empaquetamos toda nuestra aplicación, normalmente este archivo final se crea en una carpeta llamada dist

### Loader (transformador)

Los loaders lo que hacen es decirle a webpack como tiene que transformar el código de un modulo en concreto. Ejemplo : Los loaders pueden transformar ficheros a JavaScript, o cargar CSS directamente en archivos JS, (si usas reactjs ya sabrás como)

### Plugins (complementos)

Nos van a ayudar a extender las funcionalidades con los loaders, añadir otras configuraciones.  
Ejemplo : hay un modulo llamado HTMLWebpackPlugin que este se encarga de crear un HTML personalizado que le inyecta todos los bundles finales que compilamos.
