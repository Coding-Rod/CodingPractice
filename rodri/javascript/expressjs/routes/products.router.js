const express = require('express');
const faker = require('faker');

const router = express.Router();

//! GET

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
  id < 100
  ? res
    .status(200)
    .json({
      id,
      name: 'Product 1',
      price: '$10.00',
    })
  : res
    .status(404)
    .json({
      message: `Product ${id} not found`,
    })
});

//! POST

router.post('/', (req, res) => {
  const body = req.body;
  res
  .status(201)
  .json({
    message: 'created',
    data: body,
  })
});

//! PATCH

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json({
    message: 'updated',
    id: id,
    data: body,
  });
});

//! DELETE

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
