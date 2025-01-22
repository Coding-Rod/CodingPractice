const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

const mockGetAll = jest.fn();

// Mock the mongo.lib file
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('Test for Books Service', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  describe('Test for getBooks method', () => {
    test('Should return an array of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log({ books });
      // Assert
      expect(books.length).toBeGreaterThan(0);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return Harry Potter as first book name', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      fakeBooks[0].name = 'Harry Potter';
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks();
      console.log({ books });
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
