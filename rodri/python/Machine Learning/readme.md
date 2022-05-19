# Machine Learning

## Definición

Capacidad de un algoritmo de adquirir conocimiento a partir de los datos recolectados para mejorar, describir y predecir resultados

## Estrategias de Aprendizaje

* Aprendizaje Supervisado: Permite al algoritmo aprender a partir de datos previamente etiquetados.
* Aprendizaje no Supervisado: El algoritmo aprende de datos sin etiquetas, es decir encuentra similitudes y relaciones, agrupando y clasificando los datos.
* Aprendizaje Profundo (Deep Learning): Está basado en redes Neuronales

## Importancia del ML

Permite a los algoritmos aprender a partir de datos históricos recolectados por las empresas permitiendo así tomar mejores decisiones.

### Pasos a Seguir para Desarrollar un modelo en ML

* Definición del Problema: Es necesario definir previamente el problema que va a resolver nuestro algoritmo
* Construcción de un modelo y Evaluación: Una vez definido el problema procedemos a tratar los datos y a entrenar nuestro modelo que debe tener una evaluación cercana al 100%
* Deploy y mejoras: El algoritmo es llevado a producción (aplicación o entorno para el que fue creado), en este entorno podemos realizar las mejoras pertinentes de acuerdo al comportamiento con los usuario e incluso aprovechando los datos generados en esta interacción

## Árboles de decisión

### Ventajas

* Claridad en los datos
* Tolerantes al ruido y datos faltantes
* Las reglas extraídas permiten hacer extracciones

### Desventajas

* Criterio de división es deficiente
* Sobreajuste-overfitting
* Ramas poco significativas

### Optimización del modelo

* Evitar sobreajuste
* Selección efectiva de los atributos
* Campos nulos

## K - Means

* Algoritmo no supervisado.
* Crea K grupos a partir de observaciones de un set de datos.
* Trata información que no tiene etiquetas asignadas.
* Agrupa información basada en sus características.
* K = centroides
* Aproximación a K: método del codo
* Aplicaciones:
* Segmentación por comportamiento:
* por historial de compras
* actividad en una aplicación móvil, web
* Definir personas basadas en sus intereses.
* Crear perfiles basado en el monitoreo de actividad.
* Ordenando medidas de sensores:
* Detecta tipos de actividades en sensores de movimiento.
* Grupos de imágenes.
* Separar audio.
* Identificar grupos en monitoreo de salud.
