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

## Explorando Amazon S3

### Clases de almacenamiento

- Amazon S3 Standard: Almacenamiento de objetos de uso general.
- Amazon S3 Standard-Infrequent Access (Amazon S3 Standard-IA): Almacenamiento de objetos de uso general que se accede con menos frecuencia.
- Amazon S3 One Zone-Infrequent Access (Amazon S3 One Zone-IA): Almacenamiento de objetos de uso general que se accede con menos frecuencia y que se almacena en una sola zona de disponibilidad.
- Amazon S3 Glacier: Almacenamiento de objetos de uso general que se accede con poca frecuencia y que se almacena en Amazon S3 Glacier.
- Amazon S3 Glacier Deep Archive: Almacenamiento de objetos de uso general que se accede con poca frecuencia y que se almacena en Amazon S3 Glacier Deep Archive.
- Amazon S3 Intelligent-Tiering: Almacenamiento de objetos de uso general que se accede con poca frecuencia y que se almacena en Amazon S3 Intelligent-Tiering.
- Recordar que un nuevo archivo puede ser un nuevo costo aunque fuese versionado.

### Amazon S3 Glacier

- Archivos de datos y copias de seguridad a largo plazo.
- $1 por TB por mes.
- Tiempo de recuperación de 1 a 12 horas.
- Funcionabilidad de consulta limitada.

## Amazon EFS

- EFS es un servicio de almacenamiento de archivos administrado y escalable para cargas de trabajo basadas en Linux.

- Viene de las siglas en inglés de Amazon Elastic File System.
- Se utiliza para almacenar archivos de forma persistente.
- Es altamente disponible y duradero.
- Incorpora protección contra una interrupción de zona de disponibilidad.
- Crece y se reduce automáticamente.
- Se encuentra encriptado en reposo y en tránsito.

### Clases de almacenamiento

- EFS Standard: Almacenamiento de archivos de uso general.
- EFS Infrequent Access (EFS IA): Almacenamiento de archivos de uso general que se accede con menos frecuencia.

Se puede programar una fecha de caducidad para los archivos almacenados en EFS IA. Si se elimina un archivo antes de la fecha de caducidad, se aplica una tarifa de acceso anticipado.

## Amazon Storage Gateway

- Es un servicio que conecta aplicaciones locales con almacenamiento en la nube.
- Se puede utilizar para almacenar copias de seguridad, archivos y datos de aplicaciones en AWS.

### File Gateway

- Se utiliza para almacenar archivos en Amazon S3.
- Se puede acceder a los archivos a través de un punto de enlace de Amazon S3.
- Se puede acceder a los archivos a través de un sistema de archivos de red (NFS) o un sistema de archivos de servidor de mensajes (SMB).

### Tape Gateway

- Se utiliza para almacenar copias de seguridad en Amazon S3 Glacier.
- Se puede acceder a los datos a través de un sistema de archivos de red (NFS) o un sistema de archivos de servidor de mensajes (SMB).
- Compatible con la mayoría de las aplicaciones de copia de seguridad.

### Volume Gateway

- Es un servicio que permite almacenar datos en Amazon S3 o Amazon EBS.
- Se puede acceder a los datos a través de un sistema de archivos de red (NFS) o un sistema de archivos de servidor de mensajes (SMB).
- Se puede utilizar para almacenar copias de seguridad, archivos y datos de aplicaciones en AWS.
- Los datos se almacenan de forma local y se replican de forma asíncrona en AWS.
- Se utiliza en sistemas de nube híbrida.

## Configuración de políticas de AWS

Se utilizan las políticas de AWS para definir los permisos que se aplican a los usuarios, grupos y roles de AWS. Se puede utilizar la herramienta [AWS Policy Generator](https://awspolicygen.s3.amazonaws.com/policygen.html) para crear políticas de AWS.

### Políticas en un Bucket de S3

1. Crear un Bucket de S3.
2. Subir uno o más archivos al Bucket.
3. Acceder a la pestaña Permissions.
4. Acceder a la sección Bucket Policy.
5. Editar la política del Bucket.
6. Copiar el ARN del Bucket.
7. Editar la política en la herramienta AWS Policy Generator.
8. Generar la política.
9. Copiar y pegar la política en el Bucket de S3.
10. Guardar la política.

Ejemplo de política:

~~~json
{
  "Id": "Policy1692488482768",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1692488481102",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::test-rod-5919/*",
      "Principal": "*"
    }
  ]
}
~~~

> NOTA: Esta política permite que cualquier usuario pueda descargar los archivos del Bucket.

## Bases de datos

### Bases de datos relacionales

- Amazon Aurora: Base de datos relacional compatible con MySQL y PostgreSQL.
- Amazon Relational Database Service (Amazon RDS): Base de datos relacional administrada.
- Amazon Redshift: Base de datos de almacén de datos.

#### Servicio de RDS (Relational Database Service)

Existen 6 motores de bases de datos relacionales:

- Amazon Aurora
- PostgreSQL
- MySQL
- MariaDB
- Oracle
- Microsoft SQL Server

Ventajas:

- Fácil de configurar.
- Servicio completamente administrado.
- Altamente escalable.
- Copias de seguridad automáticas.
- Rentable: Se paga por el tiempo de ejecución de la instancia.

### Bases de datos clave-valor

- Amazon DynamoDB: Base de datos clave-valor administrada.
  - Base de datos estilo clave-valor.
  - Rendimiento rápido.
  - Completamente administrada.
  - Funciona en múltiples regiones.
  - Posee: seguridad, copias de seguridad, cifrado, etc.
  - Admite picos de 200M de solicitudes por segundo.
  - Rentable
  - Casos de uso: juegos, aplicaciones móviles, etc.

### Bases de datos en memoria

- Amazon ElastiCache: Almacén de datos en memoria. Se utiliza para mejorar el rendimiento de las aplicaciones.
  - Es una base de datos en memoria.
  - Rendimiento rápido.
  - Latencia de un solo dígito.
  - Motores: Redis y Memcached.

### Bases de datos de documentos

- Amazon DocumentDB: Base de datos de documentos compatible con MongoDB.

### Bases de datos de gráficos

- Amazon Neptune: Base de datos de gráficos.
