# PHP

- Hypertext Preprocessor
- Server Side

## Proposito

- Código en el servidor
- Comandos para la terminal
- Aplicaciones de escritorio

## Características

- Alto nivel
- Interpretado
- Tipado debil

## Fundamentos

- Cliente => PC
- Server => VPS
- HTTP protocols => Como se comunican el cliente y el servidor

## Cambiar de version

~~~bash
# Deshabilitar version de PHP
sudo a2dismod php8.1

# Habilitar version de PHP
sudo a2enmod php8.1
~~~

Debemos deshabilitar el servidor, cn el segundo comnado, para liberar el localhost

## Name convention

- Varibles = camel case
- Classes = underscore case

## Tipos de datos

### Numéricos

- Integer: Número sin decimales.
- Float: Número con punto flotante o punto decimal.
- Double: Decimales con valores más precisos, con más decimales que float.

### Cadenas ded caracteres

- Chart: Un solo una letra o un simbolo.
- String: Una cadena de caracteres.

### Booleanos

- Bool: Verdadero o falso.

### Sin valor

- Null: No hay valor.
- Undefined: Hay una variable pero no tiene ningun valor.
