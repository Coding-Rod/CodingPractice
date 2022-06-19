const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  let { limit, offset } = req.query;
  limit = parseInt(limit) || 10;
  offset = parseInt(offset) || 0;
  for (let index = 0; index < 100; index++) {
    products.push({
      id: index,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  // console.log(products);
  // console.log(limit);
  // console.log(offset);
  // console.log(limit + offset);
  res.json(products.slice(offset, limit+offset));
});

router.get('/filter', (req, res) => {
  res.send("Hello, I am a filter!");
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: '$10.00',
  });
});

module.exports = router;
