# Curso de Auth0: Implementación de Autenticación y Seguridad Web

## ¿Qué es Auth0?

Es una plataforma de autenticación y autorización adaptable y fácil de implementar. Auth0 es una solución de identidad como servicio (IDaaS) que permite a los desarrolladores conectar sus aplicaciones con varios proveedores de identidad y métodos de autenticación.

## ¿Qué significa esto en el mundo real y qué podemos hacer con Auth0?

- Registro
  - Bot detection
  - Provisioning
- Login
  - Universal Login
  - Directory
  - Enterprise Federation
  - Directory Sync
- Acceso
  - Delegated Administration
  - Policy Engine
- Transacción
  - Ruled Based Access Control
  - Attribute Based Access Control

> Contiene más de 2000 Enterprise Customers y más de 50 millones de usuarios activos.

## ¿Por qué Auth0?

- 5GB de almacenamiento
- Autenticación hasta con 2 redes sociales
- API de autenticación
- Monitoreo del sistema
- Soporte de la comunidad
- Permite 7000 usuarios activos

## Alternativas a Auth0

- Amazon Cognito
- Okta
- Keycloak
- Google Identity Platform
- Curity
- Firebase Authentication (Se puede integrar con Auth0)
- Frontegg

## ¿Cuál es la diferencia entre autenticación y autorización?

- **Autenticación**: Es el proceso de verificar la identidad de un usuario.
- **Autorización**: Es el proceso de verificar qué recursos tiene acceso un usuario.

## OAuth 2.0 Vs. Auth0

Auth0 es una plataforma de autenticación y autorización adaptable y fácil de implementar, mientras que OAuth 2.0 es un protocolo de autorización.

## ¿Qué es el Universal Login?

Cuando el usuario hace login, se redirecciona a un dominio central donde sucede la autenticación.

### ¿Por qué usar Universal Login?

- Es más seguro autenticar en el mismo dominio, ya que elimina las peticiones cross-origin.
- Recopilar credenciales de usuario en una aplicación atendida desde un origen y luego enviarlas a otro origen puede crear ciertas vulnerabilidades de seguridad.

## Ventajas de Auth0

- **Single Sign-On (SSO)**: Si estás trabajando en apps móviles, no se puede tener SSO a menos que se  *Universal Login*.
- **Consistencia y Mantenimiento**: Tu *Authorization Server* posee todas las páginas de inicio de sesión, lo que facilita la administración.
- **Administración de features**: Puedes activar y desactivar funciones como *Multi-factor Authentication*, en todas tus aplicaciones, utilizando el panel administrativo.

## Desventajas de Auth0

- **Experiencia de usuario**: Es necesario redireccionar a otro subdominio para iniciar sesión, lo que puede ser molesto para el usuario.
- **Ataques de phishing**: Al acostumbrar a las personas a redireccionar a otra página, suele prestarse para hacer ataques de phishing simulando el Universal Login de una aplicación común.
