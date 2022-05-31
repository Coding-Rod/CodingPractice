# Curso Profesionl de Consumo de API REST con JavaScript

## Cache

Es la forma en la que le digamos al navegador que nos traiga la última información guardada, es decir que si necesitamos algo de información simplemente envíe lo que tiene en cache.

* default
* no-store
* reload
* no-cache
* force-cache
* only-if-cache

Estos son todos los “condicionales” que el cache permite validar el “estado” de la información

## Memorization

Guardar los cálculos(”Peticiones” que ya hicimos para no repetirlos.

En resumen es:

. Crear un objeto.
. Preguntar si el objeto tiene la información que necesitamos
. Si sí, usar la información
. Si no, hacer el fetch y guardar la información en el objeto
. Consideraciones importantes.

JavaScript únicamente guarda la información en tiempo de ejecución si esta información se hace reload se va a perder.

> Para nuestro proyecto, aplicaria un poco más el cache por el tema de la cantidad de imagenes que se cargan junto con con la vista completa de la misma, todavia no entiendo muy bien pero siento que seria menor carga para el navegador, el usuario y en un caso dado para el backend

## Github APIs

[Click here to open web page](https://github.com/public-apis/public-apis)
