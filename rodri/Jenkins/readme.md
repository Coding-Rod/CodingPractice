# Jenkins

## Por qué automatizar con Jenkins

- Facilita el trabajo
- Es opensource
- Minoriza los errores en producción
- Incrementa la productividad

## Ventajas

- Escrito en Java
- Portable
- Mayormente se corre en linux
- Bastante extensible (múltiples plugins)
- Escalable
- Podemos utilizar slaves (que son otros nodos que se puede manejar desde un código principal)
- Reproducible
- Programable

## Instalar Jenkins

~~~bash
sudo apt-get update
sudo apt-get install openjdk-8-jdk wget gnupg # Install Javqa
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 9B7D32F2D50582E6
sudo apt-get update
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | 
  sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
/etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
ssh-keygen
service jenkins start
service jenkins status
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
~~~

## Notas

Es posible conectar un repositorio de GitHub a Jenkins para que cada vez que exista un push se haga un build del source code. Para que esto sea posible debemos realizar cambios tanto en Jenkins como en GitHub.

En Jenkins:

1. Debemos tener el GitHub plugin instalado
2. Al crear el Job, debemos marcar el SCM la opción de Git, y pegar la URL del repo. (Para esta acción el host de Jenkins debe tener instalado Git)
3. En el apartado "branches to build" si dejamos en blanco tomara en cuenta cualquier branch.
4. En "Build Triggers" debemos marcar la opción "GitHub hook trigger for GITScm polling"

En GitHub:

1. Vamos al repo de GitHub.
2. Entramos en Settings .> Webhooks.
3. Añadimos un nuevo Webhook.
4. Añadimos la Payload URL. (Si la URL no acaba en /github.webhook/ GItHub lanzara un error.)
5. Marcar "Just the push event"

## Jenkins File Example

~~~bash
pipeline {
  agent any
  tools {
    nodejs 'node-11.0.0'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'cd jenkins-tests && npm i'
      }
    }
    stage('Run tests') {
      steps {
        sh 'cd jenkins-tests && npm t'
      }
    }
  }
}
~~~

> Nota: Es importante tener instalados todos los tools en el global config

## WebHooks

Es un trabajo de CI automatizado con Jenkins que nos conecta Jenkins con GitLab

[Url del Tutorial](https://hevodata.com/learn/gitlab-webhook-jenkins-integration/#method2)

## Jenkins slaves

Cuando tenemos multiples trabajos que se deben ejecutar en Jenkins y estos no son muy exigentes con respecto a recursos computacionales podemos optar por utilizar slaves

![Jenkins slaves](https://static.platzi.com/media/user_upload/configurando%20un%20Slaves-4eecf814-e22b-4707-a2a9-3455b2a2b812.jpg)
## Docker

Se recomienda usar docker debido a:

- Estandarización de entorno de ejecución
- Reduce el consumo de recursos en el servidor
- Ideal para entornos linux

[Tutorial de Docker con CicleCI](https://medium.com/@juanelojga/continuous-integration-pipeline-docker-eacd3b65955a#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkYTEwNjY0NTNkYzlkYzNkZDkzM2E0MWVhNTdkYTNlZjI0MmIwZjciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjAxODkxNzcsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMzMwMjMzMTMwODU3MDM2MjQzMCIsImVtYWlsIjoic2VyZ2lvcm9kcmlnb2Zlcm5hbmRlenRlc3RhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiU2VyZ2lvIEZlcm5hbmRleiBUZXN0YSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQUZkWnVjcm13djdzOEdCSTQ3M0lDZE8yWV80dTZGLXZidERWR01HVWY0LWl1dz1zOTYtYyIsImdpdmVuX25hbWUiOiJTZXJnaW8iLCJmYW1pbHlfbmFtZSI6IkZlcm5hbmRleiBUZXN0YSIsImlhdCI6MTY2MDE4OTQ3NywiZXhwIjoxNjYwMTkzMDc3LCJqdGkiOiJmNmE3NWVhOTI0ZTNmN2YwOGIzZmI1NDBhYzY3ODExYzliNGMyMTE0In0.MTkca4LgcLsFlq5AQY8LRZk_Cnusd2Fpwn1mXewBgNX3lz7Dpe3y-S8emDlsvVmmT81A95w8BZNKssATIPEuLpTQnoxGjP96WPud1EtAtP5v_WKxXyYB8veQe68VPMWgZlvKpIOEKa2-e0SDy10kGcA8eu3fatPf42UJWlo07yX7VU16LOACTFaQUUbbcAD6riiTuW4uAUbIGmCJ1lDGORHoHZ7KxNtEz3Ge9tXfMlu4Fw1LlYoBNrgbYUasK_KgGOoFSQM7QP1g4X9ek0rrtaIiazKol2v_ayIjLBSQZGIKmkNMV35JdyTKkmu3PHRJEBMfChXxdxpWMhp_Lisr5Q)
