# Curso de testing con JavaScript

## Etapas en el desarrollo de software

1. Diseño
2. Desarrollo
3. Pruebas
4. Producción

Mientras más abajo lleguemos en la lista, más caro es arreglar un error.

> The erlier you find a mistake, the easier it is to fix it.

## Tipos de pruebas

- Analisis en código estático
  - En tiempo de desarrollo
  - Casi instantáneo
- Pruebas unitarias
  - En tiempo de desarrollo
  - Verifica que una unidad de código funcione correctamente
- Pruebas de integración
  - Pruebas de sistema
  - Verifica que las unidades de código funcionen correctamente en conjunto
- Revisiones de código
  - Toma tiempo
  - Verifica que el código sea legible y mantenible por otros
- Pruebas de QA
  - Pruebas manuales
  - Pruebas automatizadas
  - Pruebas de rendimiento
  - Pruebas de seguridad
  - Pruebas de estrés

## Tipos de pruebas

### Pirámide del testing

![Testing piramid](https://static.platzi.com/media/user_upload/Livelli-e-tool-della-piramide-del-test-automation-960x504-1524125b-0cae-4530-b0ce-01c49891bebe.jpg)

### Ice Cream Cone

Esto es un anti-patrón de testing, donde se invierte mucho tiempo en pruebas manuales y muy poco en pruebas automatizadas.

![Ice Cream Cone](https://lh6.googleusercontent.com/proxy/qAwbHBe4PwRqRAPXuoQkuHhw8FyouZVP6KPP2pd3HGD9_s-6MVgh1zhN-oxpQ9NcwhXuDQOS9-Z1nlrpfpo7qofe7247n_xX9BPUmr5VVU0gcUPxFr8K8qNbvxrDQL4m_7ifXujqI6nFpj9lmQM)

### Pruebas en JavaScript

![JS Pyramid](https://pbs.twimg.com/media/DVUoM94VQAAzuws.jpg)

## Deuda técnica

### Four stages of Company Growth

1. Traction -> Not many test or even no tests, speed is the most important thing
2. Inflection -> Start to see the impact of not having tests
3. Scaling -> Tests are a must
4. Expansion -> Tests are a must

### Classifying Technical Debt

- Maintenance Debt -> Not keeping up with the latest versions of libraries
- Developer Efficiency Debt -> Not having the right tests, monitoring, or alerting in place
- Stability Debt -> Builds up different tech debt which affects infrastructure stability
- Security Debt -> Issues in tech slack leaving open security vulnerabilities
- Technical Product Debt -> Visible negative impact on the product
- Decision Debt -> Past tech decision was wrong or tradeoffs we're now paying for
