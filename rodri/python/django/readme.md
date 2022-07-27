# Django

## Para iniciar un proyecto de Django

~~~bash
django-admin startproject __project_name__
~~~

## Iniciar servidor local de Django

~~~bash
python manage.py runserver
# If you want to run server over wifi
python manage.py runserver __machine_ip__

~~~

## Crear una app de Django

~~~bash
python manage.py startapp __app_name__
~~~

## Describir las tablas de la base de datos

~~~bash
python manage.py makemigrations __app_name__
~~~

## Migrar SQL para la tabla de la base de datos

~~~bash
python manage.py migrate
~~~
