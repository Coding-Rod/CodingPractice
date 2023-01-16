const express = require('express');
const faker = require('faker');

const router = express.Router();

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

router.get('/', (req, res) => {
  const { size } = req.query;
  res.json(product_gen(size));
});

router.get('/filter', (req, res) => {
  // This endpoint will return products with price less than the given price
  const { size, max_price } = req.query;
  const products = product_gen(size);
  const filtered = products.filter((p) => p.price < parseInt(max_price || 100));
  res.json(filtered);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = product_gen(parseInt(id) + 1).find(
    (p) => p.id === parseInt(id)
  );
  res.json(product);
});

module.exports = router;
