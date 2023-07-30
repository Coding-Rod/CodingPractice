# Cómputo con AWS

## Instancias

- Amazon EC2: Secure and resizable compute capacity in the cloud.
- Amazon EC2 Spot: Request unused EC2 instances, which can lower your Amazon EC2 costs significantly.
- Amazon EC2 Auto Scaling: Scale compute capacity to meet demand.
- Amazon EC2 Lightsail: Launch and manage virtual private servers.

## Contenedores

- Amazon Elastic Container Service (Amazon ECS): Highly secure, reliable, and scalable way to run containers.
- Amazon Elastic Container Registry (Amazon ECR): Store, manage, and deploy container images.
- Amazon Elastic Kubernetes Service (Amazon EKS): Run managed Kubernetes on AWS.

## Serverless

- AWS Lambda: Run code without thinking about servers.

## Edge computing

- Amazon Outposts: Run AWS infrastructure and services on-premises for a truly consistent hybrid experience.
- Amazon EC2 Snow Family: Run a complete operating system on a device to collect and process data locally, while seamlessly syncing with AWS.
- AWS Wavelength: Seamlessly extend AWS to the edge to minimize latency.
- VMWare Cloud on AWS: Build a hybrid cloud without custom hardware, rewrite applications, or modify your operating model.
- AWS Local Zones: Easily run applications that require single-digit millisecond latency to a subset of AWS resources in a specific geography.

## Explorando EC2

- Permite alquilar computadoras virtuales en la nube.
- Diferentes tipos de EC2 con diferentes CPU, RAM y almacenamiento.
- Instancias optimizadas para computo, memoria, almacenamiento, GPU, etc.
- Paga por el tiempo de ejecución de la instancia.

### Opciones y precios bajo demanda

| Nombre de la instancia | Especificaciones | Precio por hora |
| ---------------------- | ---------------- | --------------- |
| t3.nano                | 2 vCPU, 0.5 GB   | $0.0052         |
| t3.xlarge              | 4 vCPU, 16 GB    | $0.1664         |
| c6g.8xlarge            | 32 vCPU, 64 GB   | $1.088          |
| x1e.xlarge             | 128 vCPU, 3904 GB| $3.669          |
| ...                    | ...              | ...             |

## Explorando AWS Lambda

- Servicio informático sin servidor.
- Ejecuta código en respuesta a eventos.
- AWS Lambda se encarga de aprovisionar y administrar los servidores que se utilizan para ejecutar el código.
- Facturación por milisegundos de ejecución y el número de veces que se ejecuta el código.

## Explorando Almacenamiento

### Almaenamiento basado en archivos

Es un tipo de almacenamiento que permite almacenar archivos de forma persistente. Es similar a un disco duro como el que se encuentra en una computadora.

Algunos ejemplos de almacenamiento basado en archivos son:

- Amazon Elastic File System (Amazon EFS): Almacenamiento de archivos administrado y escalable para cargas de trabajo basadas en Linux.
- Amazon FSx: Almacenamiento de archivos administrado y escalable para cargas de trabajo basadas en Windows.

### Almacenamiento basado en bloques

Es un tipo de almacenamiento que permite almacenar datos en bloques. Se utiliza para bases de datos y aplicaciones que requieren un acceso de bajo nivel a los datos.

Algunos ejemplos de almacenamiento basado en bloques son:

- Amazon Elastic Block Store (Amazon EBS): Almacenamiento de bloques persistente para instancias de Amazon EC2.

### Almacenamiento basado en objetos

Es un tipo de almacenamiento que permite almacenar datos en objetos. Se utiliza para almacenar datos de forma persistente y para compartir datos entre diferentes componentes de una aplicación. Contienen un identificador único, datos y metadatos.

Algunos ejemplos de almacenamiento basado en objetos son:

- Amazon Simple Storage Service (Amazon S3): Almacenamiento de objetos escalable en la nube.

### Respaldos

Es una copia de los datos que se puede utilizar para restaurar los datos originales en caso de que se pierdan o dañen.

Algunos ejemplos de respaldos son:

- AWS Backup: Servicio de respaldo centralizado para AWS.

### Servicios de transferencia de datos

Es un tipo de servicio que permite transferir datos a AWS.

Algunos ejemplos de servicios de transferencia de datos son:

- AWS Storage Gateway: Servicio que conecta aplicaciones locales con almacenamiento en la nube.
- AWS DataSync: Servicio que simplifica y automatiza la transferencia de datos entre sistemas de almacenamiento local y AWS.
- AWS Transfer Family: Servicio totalmente administrado que permite transferir archivos a AWS a través de FTP, FTPS, SFTP y otros protocolos de transferencia de archivos.


