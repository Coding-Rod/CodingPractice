# Curso de Estructuras de Datos Lineales con Python

En esta clase se hizo una puntualización de lo que se debe saber en sí mismo para trabajar en este curso:

## Requisitos Mínimos

* Elementos léxicos de python o Keywords
* Convenciones de estilo PEP8
* Operadores, Manejo de Strings y Literals.
* Entender sobre Listas, Tuplas, Conjuntos, Diccionarios.

## Tener claro

* Declaración de funciones
* Recursividad
* Funciones anidades
* High Order Functions
* Funciones lambda
* Programación Orientada a Objetos

## Nice to Have

* Manejo de excepciones
* Manipulación de archivos

## Tipos de colecciones

Nos referimos a las estructuras de datos. Una colección es un grupo de cero o más elementos que pueden tratarse como una unidad conceptual.

## Tipos de datos

* Non-zeo Value
* Cero
* null
* undefined

>Estos tipos de dato también pueden formar parte de una colección. Existen colecciones de tipo Dinámicas que son aquelas que pueden variar su tamaño y las Inmutables que no cambian su tamaño.

## Estructuras Lineales

De forma general encontramos estructuras de datos lineales que están definidas por sus índices. Es decir puedo encotnrarme estrcuturas de datos lineales que sean dinámicas o inmutables, de ello variarán sus propiedades, como poner un elemento al final, (sucesor) o no.

Te encontrarás con:

* Listas
* Listas Ordenadas
* Cola
* Cola de prioridad
* etc

Es decir está ordenadas por posición.
Solo el primer elementonotiene predecesor
Ej:

* Una fila para un concierto
* Una pila de platos por lavar, o una pila de libros por leer.
* Checklist, una lista de mercado, la lista de Schindler
* Estructuras Jerárquicas
* Estructuras basadas en una jerarquia definida.
* Los árboles pueden tener n números de nieleves hacia abajo o adyacentes. Te encotnrarás con árboles Binarios, Montículos.

Ordendas como árbol invertido (raices)
Solo el primer nodo no tiene predecesores, pero si sucesores.
Es un sistema de padres e Hijos.
Ej:

* Libros, Capítulos, Temas.
* Abuelos, Madres, Hijos.

## Estructuras Grafos

Cada dato puede tener varios predecesores y sucesores, se les llama vecinos
Los elementos se relecionan entre si con n relaciones.
Ej:

* Vuelos aéreos, sistemas de recomendación
* La mismísima interntet es un grafo

## Estructuras Desordenadas

Estructuras como Bolsa, Bolsa ordenada, Conjuntos, DIccionarios, Diccionario ordenados.

No tienen orden en particular
No hay predecesores o sucesores.
Ej:

Una bolsa de gomitas, no sabe de qué color te va a tocar.

## Estructuras Ordenadas

Son estructuras que imponen un orden con una regla. Generalmente una regla de orden.
item <= item(i+1) Es decir que el tiem que sigue es el primer elemento +1.

Ej:

Los directorios telefónicos, los catálogos,

## Conclusión

Suponga que tiene un dataset con muchos datos, una colección de libros, música, fotos, y desea ordenar esta colección, ante esta situación siempre existe el Trade Off entre rapidez/costo/memoria El conocimeinto de las propiedades de las colecciones te facilitará la selección de estructura de datos según sea el caso y velar por un software eficiente.

## Nodes y singly linked list

Las estructuras linked consisten en nodos conectados a otros, los más comunes son sencillos o dobles. No se accede por índice sino por recorrido. Es decir se busca en la lista de nodos hasta encontrar un valor.

* Data: Será el valor albergado en un nodo.
* Next: Es la referencia al siguiente nodo en la lista
* Previous: Será el nodo anterior.
* Head: Hace referencia al primer nodo en la lista
* Tail: Hace referencia al último nodo.

## Cómo funciona en memoria los Linked Estructures

Estas estructuras de datos hablan de nodos/datos repartidos en memoria, diferentes a los arrays que son contiguos. Los nodos se conectan a diferentes espacios en memoria, podemos acceder a los datos saltando en memoria, siendo mucho más ágil. Los nodos nos sirven para crear otras estructuras más complejas, como Stacks, Queues, las llamadas pilas y colas. Es posible optimizar partes del código usando nodos.

## Double Linked Structure

Estos hacen que el nodo haga referencia al siguiente nodo y al anterior, es decir nos va a permitir ir en ambas direcciones. También nos permitirá realizar “formas” y contextos circulares.

El ejemplo clave aquí será función de ctrl+z y ctrl+y Estas opciones nos permiten hacer y deshacer un proceso en Windows.

El historial del navegador también es un buen ejemplo al permitirnos navegar entre el pasado y el presente.

> Nota: Los linked list tienen una desventaja importante, si la lista crece mucho será más costoso computacionalmente recorrer toda la lista. Es importante saber cuando usarlas y cuando no.