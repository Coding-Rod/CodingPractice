# Demo readme file

## How to install jest

```bash
npm install --save-dev jest
```

## Expect to be

- toBeNull() -> Means that the value is null
- toBeUndefined() -> Means that the value is undefined
- toBeDefined() -> Means that the value is defined
- toBeTruthy() -> Means that the value is true
- toBeFalsy() -> Means that the value is false
- toBeGreaterThan() -> Means that the value is greater than
- toBeGreaterThanOrEqual() -> Means that the value is greater than or equal
- toBeLessThan() -> Means that the value is less than
- toBeLessThanOrEqual() -> Means that the value is less than or equal
- toBeCloseTo() -> Means that the value is close to
- toMatch() -> Means that the value is a string that matches the regular expression
- toContain() -> Means that the value is an array that contains the value
- toHaveLength() -> Means that the value is an array that has a length
- toHaveProperty() -> Means that the value is an object that has a property
- toBe() -> Means that the value is the same
- toEqual() -> Means that the value is the same, used for objects and arrays
- not -> Means that the value is not (use this before the matcher)
- toThrow() -> Means that the value is a function that throws an error
- toThrowError() -> Means that the value is a function that throws an error

Example:

```javascript
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('number to be greater than', () => {
  expect(2 + 2).toBeGreaterThan(3);
});
```

## SUT (System Under Test)

El SUT es el sistema que se está probando. Es decir, el código que se está probando.

## Validar vs Verificar

- Validar: Se refiere a que se está comprobando que el código hace lo que se espera que haga.
- Verificar: Se refiere a que se está comprobando que el código hace lo que se espera que haga, pero también se está comprobando que el código no hace lo que no se espera que haga.

## Requirements

1. SUT: Requerimientos
2. Ejecución: Manuales
3. Objetivo: Validar
4. Herramienta: Inspección

## Diseño / Arquitectura

1. SUT: Sistem
2. Ejecución: Manuales / Automática
3. Objetivo: Verificar
4. Herramienta: Case tools

## Desarrollo / Implementación

1. SUT: Depende del nivel
2. Ejecución: Automática
3. Objetivo: Verificar

## Tipos de pruebas

1. Pruebas estáticas
   1. Eslint
   2. Prettier
   3. Typescript
   4. SonarQube
   5. Code climate
   6. Codacy
2. Pruebas funcionales
   1. Pruebas unitarias (Desarrollo)
   2. Pruebas de integración
   3. Pruebas E2E
3. Pruebas no funcionales
   1. Pruebas de rendimiento
   2. Pruebas de carga o estabilidad
   3. Pruebas de estrés
   4. Pruebas de usabilidad
   5. Pruebas de seguridad

## Metodologías

1. TDD (Test Driven Development)
2. BDD (Behavior Driven Development)

## Las AAA

1. Arrange (Preparar)
2. Act (Actuar)
3. Assert (Afirmar)

## Falsetto

1. Falso positivo (Falso error)
2. Falso negativo (Falso acierto)

## Clean architecture

- Iniciar con pruebas unitarias
- Refactorizar el código para que sea testeable