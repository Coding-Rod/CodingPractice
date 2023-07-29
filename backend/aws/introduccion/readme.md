# AWS

## Servidor

- Cómputo: CPU, funciona como un procesador de computadora.
- Memoria: RAM, es la memoria de la computadora.
- Almacenamiento: Disco duro, es el almacenamiento de datos, sobre todo archivos de texto plano.
- Bases de datos: Almacenamiento de datos estructurados, como tablas de Excel.
- Redes: Conexión a internet, para que los usuarios puedan acceder a los recursos, como routers, switches, DNS, etc.

## Terminología de IT

- Redes: cables, routers, servidores conectados unos a otros.
- Router: dispositivo de red que reenvía paquetes de datos entre redes informáticas.
- Switch: toma un paquete de datos y lo envía al servidor/cliente correcto en la red.

## Problemas del enfoque IT Tradicional

El enfoque IT tradicional consiste en tener un servidor físico en una oficina, con un sistema operativo, y en ese sistema operativo se instala un software, y ese software se conecta a una base de datos, y los usuarios se conectan a ese software a través de una red. Los problemas de este enfoque son:

- Renta: se tiene que pagar una renta por el espacio físico donde se encuentra el servidor.
- Mantenimiento: se tiene que pagar a un administrador de sistemas para que mantenga el servidor.
- Reemplazar y agregar hardware: se tiene que pagar por el hardware que se va a reemplazar o agregar.
- Escalabilidad: se tiene que pagar por más hardware para que el servidor pueda soportar más usuarios.
- Contratación de personal 24/7: se tiene que pagar a un administrador de sistemas para que esté disponible las 24 horas del día, los 7 días de la semana.
- Desastres naturales: se tiene que pagar por un seguro para que en caso de un desastre natural, se pueda recuperar la información.

> SOLUCIÓN: Computación en la nube

## Computación en la nube

La computación en la nube es la **estrategia bajo demanda** de computación, almacenamiento, bases de datos, aplicaciones y otros recursos de TI a través de una plataforma de servicios en la nube por meadio de internet con precios de **pago por uso**.

> Practicamente alquilar una computadora de otra persona.

- Puedes suministrar el **tipo y tamaño exactamente correctos de recursos** informáticos que necesitas para alimentar tu carga de trabajo y acceder a ellos al instante.
- Una **forma sencilla de acceder** a servidores, almacenamiento, bases de datos y una amplia gama de servicios de aplicaciones a través de Internet.

## Ejemplos de servicios de la nube utilizados

- Gmail: servicio de correo electrónico.
- Dropbox: servicio de almacenamiento de archivos.
- Netflix: servicio de streaming de video.

## Tipos de modelos de computación en la nube

### Nube privada

- Servicios de nube usados por una sola organización (no está expuesta al público).
- Control total sobre la infraestructura de la nube.
- Seguridad para aplicaciones sensibles.
- Satisface necesidades comerciales específicas.
- Ej: RackSpace, OpenStack, VMware.

### Nube pública

- Recursos propios en la nube y operados por proveedores de nube de terceros a través de Internet.
- Características:
  - Autoservicio en demanda
  - Amplio acceso a la red
  - Múltiples inquilinos
  - Elasticidad y escalabilidad
  - Servicio medido
- Ventajas:
  - Gatos de capital comercial sobre gastos operativos
  - Economías de escala
  - Dejar de adivinar la capacidad
  - Incrementar la velocidad y agilidad
  - Dejar de gastar dinero en la ejecución y mantenimiento de centros de datos
  - Globalizar en minutos
- Pronlemas que resuelve
  - Flexibilidad
  - Rentabilidad
  - Escalabilidad
  - Elasticidad
  - Alta disponibilidad
  - Agilidad
- Ej: AWS, Azure, Google Cloud.

### Nube híbrida

- Mantener algunos ervidores en las instalaciones y extender otras capacidades en la nube pública.
- Control sobre activos sensibles en tu infraestructura privada.
- Flexibilidad y rentabilidad de la nube pública para cargas de trabajo generales.
- Ej: AWS Outposts, Azure Stack, Google Anthos.

## Tipos de modelos de servicio en la nube

### Infraestructura como servicio (IaaS)

- La infraestructura como servicio (IaaS) es un modelo de computación en la nube que ofrece a los usuarios finales recursos informáticos básicos: servidores, almacenamiento y redes.
- Ej: AWS EC2, Azure VM, Google Compute Engine.

### Plataforma como servicio (PaaS)

- La plataforma como servicio (PaaS) es un modelo de computación en la nube que ofrece a los usuarios finales un entorno de desarrollo completo: servidores, almacenamiento, redes, middleware, herramientas de desarrollo, servicios de base de datos y más.
- Ej: AWS Elastic Beanstalk, Azure App Service, Google App Engine.

### Software como servicio (SaaS)

- El software como servicio (SaaS) es un modelo de computación en la nube que ofrece a los usuarios finales aplicaciones de software completamente desarrolladas que se ejecutan en la infraestructura de un proveedor de servicios en la nube.
- Ej: HubSpot, Salesforce, Google Workspace.

## Tabla resumen de que se administra en cada modelo de servicio

|Servicio          |On-Premises |IaaS |PaaS |SaaS |
|--------          |----------- |---- |---- |---- |
|Aplicaciones      |X           |X    |X    |     |
|Datos             |X           |X    |X    |     |
|Runtime           |X           |X    |     |     |
|Middleware        |X           |X    |     |     |
|Sistema Operativo |X           |X    |     |     |
|Virtualización    |X           |     |     |     |
|Servidores        |X           |     |     |     |
|Almacenamiento    |X           |     |     |     |
|Redes             |X           |     |     |     |

## Ejemplos de servicios

### Infraestructura como servicio (IaaS)

- AWS EC2: servicio de servidores virtuales.
- DigitalOcean: servicio de servidores virtuales.
- Azure VM: servicio de servidores virtuales.
- Linode: servicio de servidores virtuales.

### Plataforma como servicio (PaaS)

- AWS Elastic Beanstalk: servicio de despliegue de aplicaciones.
- Heroku: servicio de hosting de aplicaciones.
- Google App Engine: servicio de despliegue de aplicaciones.

### Software como servicio (SaaS)

- Amazon Rekognition: servicio de reconocimiento de imágenes.
- Gmail: servicio de correo electrónico.
- Dropbox: servicio de almacenamiento de archivos.
- Zoom: servicio de videoconferencias.

## Precio de la nube

AWS tiene 3 modelos de precios:

- Por cómputo: se paga por el tiempo que se utiliza el servicio.
- Almacenamiento: se paga por el espacio que se utiliza.
- Información transferida: se paga por la cantidad de información que se transfiere.

Estos modelos de precios resuelven muchos de los problemas de IT tradicionales relacionados con el costo.

## Linea de tiempo de AWS

- 2002: Se crea Amazon Web Services.
- 2003: La infraestructura de AWS es una de las principales fortalezas y la idea comienza a ser comercializada.
- 2004: Se lanza al público SQS (Simple Queue Service).
- 2006: Se relanza al público SQS, S3 (Simple Storage Service) y EC2 (Elastic Compute Cloud).
- 2007: Se lanza en Europa el servicio.
- 2009: Se lanza RDS (Relational Database Service).
- 2010: Se lanza route 53.
- 2012: Se lanza DynamoDB.

## Visión global de AWS

Existen varios servidores de AWS en el mundo, cada uno de ellos tiene una región y cada región tiene zonas de disponibilidad, cada zona tendrá una latencia diferente, actualmente se tiene servidores desplegados en: Estados Unidos, Canadá, Sudamérica, Europa, África, Asia y Oceanía. Para consultar la latencia de cada región se puede consultar en la [página oficial para consultar la latencia de AWS](https://www.cloudping.cloud/aws).

### ¿Cómo escoger la región?

- Cumplimiento normativo: AWS cumple con las normas de seguridad y privacidad de datos más estrictas del mundo.
- Proximidad a los clientes: AWS tiene regiones en todo el mundo para que los clientes puedan ejecutar sus aplicaciones más cerca de sus usuarios finales.
- Servicios disponibles: no todos los servicios de AWS están disponibles en todas las regiones.
- Precios: los precios de los servicios de AWS pueden variar según la región.

### Infraestructura global de AWS

La infraestructura global de AWS se compone por:

- Regiones: cada región es una ubicación física en el mundo que consta de dos o más zonas de disponibilidad.
- Zonas de disponibilidad: cada zona de disponibilidad consta de uno o más centros de datos y está ubicada en una región.
- Centros de datos: cada centro de datos tiene una o más salas de servidores.
- Ubicaciones de AWS Edge: ubicaciones de AWS Edge que se utilizan para almacenar en caché contenido de alta frecuencia para aplicaciones locales.

### Servicios de AWS Globales

- IAM: AWS Identity and Access Management.
- Route 53: servicio de DNS.
- CloudFront: servicio de CDN.
- WAF: AWS Web Application Firewall.

### Servicios de AWS Regionales

- EC2: Elastic Compute Cloud.
- Beanstalk: servicio de despliegue de aplicaciones.
- Lambda: servicio de funciones sin servidor.
- Rekognition: servicio de reconocimiento de imágenes.

## Diagrama del modelo de responsabilidad compartida

![Diagrama del modelo de responsabilidad compartida](https://static.platzi.com/media/user_upload/resposabilidadAWS-989a83a8-409e-4710-8baf-af459493940b.jpg)

## Servicios de AWS

### Protección de datos

- Amazon Macie: servicio de seguridad que utiliza el aprendizaje automático para descubrir, clasificar y proteger datos confidenciales en AWS.
- AWS KMS: servicio de administración de claves que le permite crear y controlar el cifrado de claves para sus aplicaciones de AWS.
- AWS CloudHSM: servicio de seguridad de hardware dedicado que proporciona cumplimiento de normas y aplicaciones que utilizan claves criptográficas en la nube.
- AWS Certificate Manager: servicio que le permite aprovisionar, administrar y implementar certificados de servidor SSL/TLS de forma gratuita.
- AWS Secrets Manager: servicio que le ayuda a proteger los secretos necesarios para acceder a sus aplicaciones, servicios y recursos de TI.

### Protección de la infraestructura

- AWS Shield: servicio de protección contra ataques DDoS.
- AWS WAF: servicio de firewall de aplicaciones web que le permite proteger sus aplicaciones web de ataques comunes de la web.
- AWS Firewall Manager: servicio de administración de firewall que le permite administrar las reglas de firewall en toda su organización.

### Detección de amenazas

- Amazon GuardDuty: servicio de detección de amenazas que le permite monitorear continuamente su cuenta de AWS y cargas de trabajo para detectar y alertar sobre posibles amenazas de seguridad.
- Amazon Inspector: servicio de evaluación automatizada de seguridad que ayuda a mejorar la seguridad y la conformidad de las aplicaciones implementadas en AWS.
- Amazon Config: servicio que le permite evaluar, auditar y evaluar continuamente la configuración de sus recursos de AWS.
- Amazon CloudTrail: servicio que permite el cumplimiento de las normas, la monitorización y la retención de registros de eventos de AWS.

### Gestión de identidades

- AWS IAM: servicio que le permite administrar el acceso a los servicios y recursos de AWS de forma segura.
- AWS Inicio de sesión único: servicio que le permite administrar el acceso a las aplicaciones web y las cuentas de AWS mediante el inicio de sesión único (SSO) en su organización.
- Amazon Cognito: servicio que le permite agregar fácilmente funciones de inicio de sesión, registro y control de acceso a sus aplicaciones web y móviles.
- AWS Directory Service: servicio que le permite integrar y federar con Microsoft Active Directory.
- AWS Organizations: servicio que le permite consolidar varias cuentas de AWS en una sola organización que puede ayudar a simplificar la administración de cuentas y la facturación.

## IAM (Identity and Access Management) Ilustrado

Es un servicio que:

- Nos ayuda a administrar quién puede acceder a qué en los servicios y recursos de tu cuenta de AWS.
- Nos permite crear y administrar usuarios y grupos de usuarios en AWS.
- Establecer permisos para que los usuarios accedan a los recursos de AWS mediante uso de políticas.
- es gratuito y está disponible para todos los clientes de AWS.

### Usuarios

El usuario principal es el Root que es quien tiene acceso a todo, se recomienda no utilizar el usuario root para trabajar, se recomienda crear un usuario con permisos de administrador y utilizar ese usuario para trabajar. El usuario Root es capaz de crear otros usuarios como:

- Developers: usuarios que pueden crear y administrar recursos de AWS.
- Sales: usuarios que pueden ver los recursos de AWS.
- Testers: usuarios que pueden probar los recursos de AWS.
- Accountants: usuarios que pueden ver los costos de AWS.
- Version engineers: usuarios que pueden ver los cambios de los recursos de AWS.

### Grupos

Los grupos son conjuntos de usuarios, se pueden crear grupos como:

### Roles

Los roles son permisos temporales que se le dan a un usuario, por ejemplo, si un usuario necesita permisos de administrador por un día, se le puede dar un rol de administrador por un día y después de ese día se le quitan los permisos.

## Manejo de secretos con AWS Secrets Manager

Es un servicio que:

- Protege los secretos necesarios para acceder a sus aplicaciones, servicios y recursos de TI.
- Rotación automática de secretos.
- Los secretos pueden ser: contraseñas, claves y tokens.

## Servicio de directorio en la nube de AWS

AWS Directory Service es un servicio que:

- Permite integrar y federar con Microsoft Active Directory.
- Es una opción de directorio activo simple y escalable.
- Contiene un conector AD
- Es un servicio distribuido con error automático y tolerancia a fallos.
- Es compatible con otros servicios de AWS como: Amazon WorkSpaces, Amazon WorkDocs, Amazon QuickSight y Amazon Chime.

## ¿Cómo utilizar IAM?

[Documentación para crear usuario y grupos](https://scribehow.com/shared/AWS_Lab_1_Create_user_and_administrator_group__CHOR3cmMTtuBQbPsV2-mow)

## Alerta de facturación de AWS

Proceso de configuracion:

1. click en el nombre de usuario
2. click en opcion: **Billing Dashboard**
3. **Budgets**
4. **Create a Budgets**
5. Nos mostrara los **Budget Types**, dejar amarcada la opcion por defecto **Cost budget -Recommended** y click en el boton superior: **Enable cost Explorer** para habilitar el seguimiento de gastos
6. En la pagina de **budget types**, dar click en next
7. nos mostrara la pagina **Set Your Budget**
8. seleccionar cada cuando se realizara el budget, daily, monthly, etc
9. seleccionar desde cuando se quire empezar a hacer el monitoreo en **Start Date**
10. seleccionar en **Choose how budget**. Fixed significa que va monitorear si nos gastamos mas o igual de la cantidad indicada en el campo **Enter your budgeted amount($)**
11. click en **Next**
12. Click en el boton: **Add an alert threshold**
13. En la seccion **Alert #1,** configuraremos como se debe ejecutar la alerta
14. Indicamos si la alerta se hara por el valor absoluto o algun porcentaje
15. en **Email recipients** indicar el correo electronico al que llegara la alerta
16. click en: **Add alert threshold**
17. click en: **Create budget**
