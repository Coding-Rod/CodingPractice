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
