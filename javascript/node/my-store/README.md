# Saga de cursos de Backend con Node.js

## Curso de Backend con Node.js: API REST con Express.js

### Middlewares

Los Middlewares se pueden utilizar como pipes, es decir la salida de uno es la entrada del entro, se ejecutan entre el request y el response y sus casos de uso son los siguientes:

- Validar datos
- Capturar errores
- Validar permisos
- Controlar accesos

### Consideraciones para producción

- Cors
- Https
- Procesos de Build
- Remover logs
- Seguridad (Helmet)
- Testing

## Curso de Backend con Node.js: Base de Datos con PostgreSQL

### Instalación de Docker

Estos son los pasos para instalarlo dentro de Ubuntu, sin embargo, también puedes ver directamente [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

```bash
sudo apt-get update
```

```bash
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

```bash
sudo mkdir -p /etc/apt/keyrings
```

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt-get update
```

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

```bash
sudo docker run hello-world
```

```bash
# If having trouble with docker-compose
curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Docker Compose

```bash
docker-compose up -d <servicio> #: (postgres "en este caso")
```

### Serverless

> 💡Es un tipo de arquitectura que nos permite descentralizar los diferentes recursos existentes de nuestra aplicación.

.  
En ocasiones, a serverless se le denomina sistemas distribuidos ya que permite, abstraer desde servidores hasta módulos denominados cloud functions.  
.  
Una de las principales ventajas de implementar serverless es la creación de arquitecturas como **cliente-servidor**, **micro-servicios**, entre otros.  
.

### Clean Architecture

> 💡Es un conjunto de principios cuya finalidad principal es ocultar los detalles de implementación a la lógica de dominio de la aplicación.

.  
Las principal característica de Clean Architecture frente a otras arquitecturas es la **regla de dependencia**.  
.  
En Clean Architecture, una aplicación se divide en responsabilidades y cada una de estas responsabilidades se representa en forma de capa.  
.

### Definición de arquitectura

ℹ️Repositorio: [https://github.com/roremdev/thingst](https://github.com/roremdev/thingst)  
ℹ️Commit: [https://github.com/roremdev/thingst/commit/ead31629469e5a3b923efc42b8b8eb5b18159b97](https://github.com/roremdev/thingst/commit/ead31629469e5a3b923efc42b8b8eb5b18159b97)

> libs - directorio de drivers connection
