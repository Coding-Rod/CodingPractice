# Bases de datos no relacionales

## Tipos

### Clave - valor

Son ideales para almacenar y extraer datos con una clave única. Manejan los diccionarios de manera excepcional.

### Basadas en documentos

Son una implementación de clave valor que varía en la forma semiestructurada en que se trata la información. Ideal para almacenar datos JSON y XML.

### Basadas en grafos

Basadas en teoría de grafos, sirven para entidades que se encuentran interconectadas por múltiples relaciones. Ideales para almacenar relaciones complejas. Se utilizan para IA.

### En memoria

Pueden ser de estructura variada, pero su ventaja radica en la velocidad, ya que al vivir en memoria la extracción de datos es casi inmediata.  

### Optimizadas para búsquedas

Pueden ser de diversas estructuras, su ventaja radica en que se pueden hacer queries y búsquedas complejas de manera sencilla.

## Tipos de datos en Firestore

1. **String:** Cualquier tipo de valor alfanumérico
2. **Number:** Soporta enteros y flotantes.
3. **Boolenan:** Los clásicos valores True y False
4. **Map:** Permite agregar un documento dentro de otro.
5. **Array:** Permite agregar un conjunto de datos (soporte multi type) sin nombre e identificador.
6. **Null:** Indica que no se ha definido un valor.
7. **Timestamp:** Permite almacenar fechas (guarda el año, mes, día y hora).
8. **Geopoint:** Guarda una localización geográfica (coordenadas latitud-longitud).
9. **Reference:** Permite referencia un documento (relaciona dos documentos, no importa su colección).