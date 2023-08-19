# Docker

## Definición

Docker es una plataforma de software que le permite crear, probar e implementar aplicaciones rápidamente. Docker empaqueta software en unidades estandarizadas llamadas contenedores que incluyen todo lo necesario para que el software se ejecute, incluidas bibliotecas, herramientas de sistema, código y tiempo de ejecución. Con Docker, puede implementar y ajustar la escala de aplicaciones rápidamente en cualquier entorno con la certeza de saber que su código se ejecutará.

## Cheat Sheet

![Cheat sheet](https://static.platzi.com/media/user_upload/dockercheatsheet8-58b8f50a-9073-4b16-81b5-3bc025ef049b.jpg)

## Virtualización

Versión virttual de algún recurso tecnológic, como hardware, en un sistema operativo, un dispositivo de almacenamiento o recurso de red.

### Problemas

1. **Peso**, se encuentrajn en el orden de los GBs. Repiten archivos en común, inicio lento
2. **Costo de administración**, necesita mantenimiento igual que cualquier otra computadora
3. **Multiples formatos**, VDI, VMDK, VHD, raw, etc

## Contenedores

El contenedor sirve para construir y desplegar.

### Concepto

Es una unidad de software que contiene todo lo necesario para que una aplicación se ejecute. Esto incluye código, tiempo de ejecución, herramientas del sistema, bibliotecas del sistema y configuraciones.

### Ventajas

- Flexible
- Livianos
- Portables
- Bajo acoplamiento
- Escalables
- Seguros

## Herramientas

![Docker](https://ualmtorres.github.io/SeminarioDockerPresentacion/images/DockerEngine.png)

## Create a Docker container

~~~bash
docker run __docker_image__
~~~

## Create a Docker container with interactive mode enabled

~~~bash
docker run -it __docker_image__
~~~

## Create a Docker container with an specific name

~~~bash
docker run --name __container_name__ __docker_image__
~~~

## List created containers

~~~bash
docker ps
~~~

## Create a Docker container with a process

~~~bash
docker run --name __container_name__ -d __docker_image__ __config__
# Example
docker run --name ubuntu_20 -d ubuntu tail -f /dev/null
~~~

## Excecute a Docker container with a process

~~~bash
docker exec __container_name__ __command__
# Example
docker exec -it ubuntu_20 bash
~~~

## Kill a Docker container

~~~bash
# With bash commands
kill -9 $(docker inspect --format '{{.State.Pid}}' __container_name__)

## With docker commands
docker stop __container_name__
docker rm __container_name__

# Example
kill -9 $(docker inspect --format '{{.State.Pid}}' ubuntu_20)
docker stop ubuntu_20
docker rm ubuntu_20
~~~

## Clean all containers

~~~bash
docker system prune
~~~

## Show logs from Docker container

~~~bash
docker logs -f __container_name__
# Example
docker run -d ubuntu --name ubuntu_20 # Running a Docker container detached
docker logs -f ubuntu_20
~~~

## Share information

![Share information](https://i1.wp.com/cdn-images-1.medium.com/max/800/1*bo6IOrBjaHbtkPgTKT08NA.png?w=1170&ssl=1)

### Docker Container binding

Share files between containers and selected path

~~~bash
docker run --name __container_name__ -v __path__:/data/db __docker_image__
# Example
docker run -d --name db -v $PWD:/data/db mongo
~~~

### Docker Container volume

Share db between containers and volumes

~~~bash
docker run -d --name __container_name__ --mount src=__volume_name__,dst=/data/db __docker_image__
# Example
docker run -d --name db --mount src=dbdata,dst=/data/db mongo
~~~

### Import and export files and directories

~~~bash
# Import
docker cp __container_name__:__container_path__ __local_path__

# Export
docker cp __local_path__ __container_path__:__container_path__
~~~

## Imagen

Es bueno profundizar un poco más en el concepto de una imágen en Docker para entender su función, para posteriormente poder realizar una por nuestra cuenta desde 0, cuando no haya una imágenque cumpla con nuestras necesidades.  
Una imágen contiene distintas capas de datos (distribución, diferente software, librerías y personalización).  
Podemos llegar a la conslusión, que una imágen se conforma de distintas capas de personalización, en base a una capa inicial (base image), la dicha capa, es el más puro estado del SO.  
La siguiente ilustración nos mostraría la representación gráfica, del concepto de una imágen en Docker.

![image-in-docker](https://static.packt-cdn.com/products/9781788992329/graphics/0ee3d4cf-2133-4143-a7c4-690274483841.png)

Si observamos, partimos desde la base del SO, y vamos agregando capas de personalización hasta obtener la imágen que necesitamos:

1. distribución debian
2. se agrega el editor emacs
3. se agrega el servidor Apache
4. se agregan los permisos de escritura para la carpeta /var/www de Apache

> Hay que tener en cuenta, que todo parte del Kernel de Linux, en caso de utilizar alguna distrubución de Linux

### Construir una imagen de Docker propia

~~~bash
docker build -t __docker_image__:__docker_image_name__ __path__
# Example
docker build -t ubuntu:platzi .
~~~

### Lista imágenes de Docker

~~~bash
docker image ls
~~~

## Docker Hub

Es una web que contiene imágenes de Docker, todo lo que publiques es público si la licencia de docker es gratuita

### Login

~~~bash
docker login
~~~

### Tag

~~~bash
docker tag __docker_image_previous_tag__ __username__/__docker_image__:__version__
# Example
docker tag ubuntu:platzi rod5919/ubuntu:platzi
~~~

### Pull

~~~bash
docker pull __docker_image_:__version__
~~~

### Push

~~~bash
docker push __username__/__docker_image__:__version__
~~~
