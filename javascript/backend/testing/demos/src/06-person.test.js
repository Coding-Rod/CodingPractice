const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('John', 60, 1.7);
  });

  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
})