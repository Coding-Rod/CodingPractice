const faker = require('faker');

const categories_gen = (size = 10) => {
  const categories = [];
  for (let i = 0; i < size; i++) {
    categories.push({
      id: i,
      name: faker.commerce.department(),
    });
  }
  return categories;
};

module.exports = categories_gen;
