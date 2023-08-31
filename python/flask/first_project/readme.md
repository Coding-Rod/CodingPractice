# Flask

## Templates con Jinja 2

Un templeate -> archivo de HTML -> renderiza informacion: Estatica o DInamica -> por variables -> luego nos muestra en el navegador
Para renderizar un template/plantilla creada con Jinja2 simplemente hay que hacer uso del método render_template.
A este método debemos pasarle el nombre de nuestra template y las variables necesarias para su renderizado como parámetros clave-valor.
Flask buscará las plantillas en el directorio templates de nuestro proyecto. En el sistema de ficheros, este directorio se debe encontrar en el mismo nivel en el que hayamos definido nuestra aplicación. En nuestro caso, la aplicación se encuentra en el fichero hello.py.
Es hora de crear este directorio y añadir las páginas hello.html, La estructura de nuestro proyecto quedaría del siguiente modo

~~~bash
Flask-proyect
|_hello.py
|_ /templeate
    |__ hello.html
~~~

## Comandos utiles

### Inicializar servidor

~~~bash
flask run
~~~

### Definir script de aplicación

~~~bash
export FLASK_APP=main.py
~~~

### Configurar modo depuración

~~~bash
export FLASK_DEBUG=1
~~~

### Configurar modo desarrollo / producción

~~~bash
export FLASK_ENV=development
export FLASK_ENV=production
~~~

### Bootstrap flask

~~~jinja
 <!-- Using flask bootstrap alternative-->
{% extends 'bootstrap/base.html' %}

{% block head %}
    {{ super() }}

    <title>
        {% block title %}Flask Platzi |{% endblock %}
    </title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/main.css') }}">
{% endblock %}

{% block body %}
    {% block navbar %}
        {% include 'navbar.html' %}
    {% endblock %}
    {% block content %}{% endblock %}
{% endblock %}
~~~
