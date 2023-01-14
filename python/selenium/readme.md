# Selenium

* Es una SUIT de herramientas para la automatización de navegadores Web.
* El objetivo de Selenium NO fue para el Testing ni para el Web Scraping (aunque se puede usar para eso), por lo tanto, no es el más optimo para estas actividades.
* Protocolo -> WebDriver, herramienta que se conecta a un API.
* Selenium WebDriver es la herramienta que utilizaremos en el curso.
* Selenium NO es un Software, ES una SUIT de Softwares.

> DDT: Data Drive Testing: Ingresar datos para que realice varias pruebas (sin intervención humana)

## Herramientas de testing y automatización

### Puppeteer

* PROS: Soporte por parte de Google, te brinda datos del Performance Analysis de Chrome y un mayor control de este navegador. No requiere archivos externos como lo hace Selenium con WebDriver.
* CONTRAS: Solo funciona para Google Chrome con JavaScript, tiene una comunidad pequeña así que el apoyo será poco.

### Cypress.io

* PROS: Tiene una comunidad emergente y va creciendo a pasos acelerados, tiene muy buena documentación para implementar Cypress en los proyectos. Es muy ágil en pruebas E2E, está orientado a desarrolladores y tiene un excelente manejo del asincronismo, logrando que las esperas sean dinámicas y también se puedan manejar fácilmente.
* CONTRAS: Solo funciona en Google Chrome con JavaScript, se pueden realizar pruebas en paralelo únicamente en la versión de pago.

## Configurar entorno

### Instalar chromedriver

~~~bash
sudo apt-get install chromium-chromedriver
~~~

### SetUp Class

~~~python
@classmethod 
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(executable_path='/usr/bin/chromedriver')
        driver = cls.driver
        driver.implicitly_wait(10)
~~~
