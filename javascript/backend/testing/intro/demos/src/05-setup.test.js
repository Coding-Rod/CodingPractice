describe('Set', () => {

  beforeAll(() => {
    console.log('beforeAll')
    // up db
  });

  afterAll(() => {
    console.log('afterAll')
    // down db
  });

  beforeEach(() => {
    console.log('beforeEach')
  });

  test('case 1', () => {
    expect(1 + 1).toBe(2)
  });
  test('case 2', () => {
    expect(1 + 3).toBe(4)
  });

  describe('Other group', () => {
    test('case 3', () => {
      expect(1 + 5).toBe(6)
    });
  });
});
