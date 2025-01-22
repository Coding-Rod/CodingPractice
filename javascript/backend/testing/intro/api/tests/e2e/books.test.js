const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../../src/app');
const { config } = require('../../src/config');

// Constants
const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

// Test for books
describe('Test for books', () => {
  let app;
  let server;
  let database;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test for [GET] /api/v1/books', () => {
    it('should return a list of books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        { name: 'Book 1', year: 2000, author: 'Author 1' },
        { name: 'Book 2', year: 2001, author: 'Author 2' },
        { name: 'Book 3', year: 2002, author: 'Author 3' },
      ]);

      // Act
      const response = await request(app).get('/api/v1/books');
      console.log(response.body);
      // Assert
      expect(response.status).toBe(200);
      expect(response.body.length).toEqual(seedData.insertedCount);
    });
  });
});
