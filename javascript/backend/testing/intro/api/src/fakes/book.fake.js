const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size = 10) => Array.from({ length: size }, generateOneBook);

module.exports = { generateOneBook, generateManyBooks };