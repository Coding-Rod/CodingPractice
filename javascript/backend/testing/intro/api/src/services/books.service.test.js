const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: '6790add3f616441896ed6854',
    name: 'Harry Potter',
  },
  {
    _id: '6790ae58f616441896ed6857',
    name: 'Harry Potter II',
  },
];

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
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(2);
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return Harry Potter as first book name', async () => {
      const books = await service.getBooks();
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
