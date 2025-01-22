// NOTE: This is not an e2e test, it is an integration test.
// The difference is that an e2e test would test the whole application, including the database,
// while the integration test only tests the interaction between the service and the database.
const request = require('supertest');
const createApp = require('../../src/app');
const { generateManyBooks } = require('../../src/fakes/book.fake');
const MongoLib = require('../../src/lib/mongo.lib');

// Mock the mongo.lib file
jest.mock('../../src/lib/mongo.lib');

// Test for books
describe('Test for books', () => {
  let app;
  let server;
  let mockGetAll;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
    mockGetAll = jest.spyOn(MongoLib.prototype, 'getAll');
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    it('should return a list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const response = await request(app).get('/api/v1/books');
      console.log(response.body);
      // Assert
      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});
