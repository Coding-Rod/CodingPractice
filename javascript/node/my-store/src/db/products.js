const faker = require('faker');

const product_gen = (size = 100) => {
  const products = [];
  for (let i = 0; i < size; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
    });
  }
  return products;
};

module.exports = product_gen;
