// matchers
test('obj', () => {
  const data = {
    name: 'John',
  };
  data.age = 30;
  expect(data).toEqual({
    name: 'John',
    age: 30
  });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(true).toBeTruthy();

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3];
  expect(numbers).toContain(2);
});
