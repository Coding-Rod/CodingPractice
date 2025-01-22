const { sum, multiply, divide } = require('./02-math');

describe("Test for Math", () => {
  describe("Test for sum", () => {
    test("adds 1 + 3 should be 4", () => {
      const response = sum(1, 3);
      expect(response).toBe(4);
    });
  });

  describe("Test for multiply", () => {
    test("multiply 2 * 3 should be 6", () => {
      const response = multiply(2, 3);
      expect(response).toBe(6);
    });
  });

  describe("Test for divide", () => {
    test("divide 6 / 3 should be 2", () => {
      const response = divide(6, 3);
      expect(response).toBe(2);
    });

    test("divide 6 / 0 should be Infinity", () => {
      const response = divide(6, 0);
      expect(response).toBeNull();
    });
  });
});

