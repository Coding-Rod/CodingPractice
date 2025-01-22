const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('John', 60, 1.7);
  });

  test('should return down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    // Arrange
    person.weight = 60;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('normal');
  });
})