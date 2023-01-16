const express = require('express');
const router = express.Router();
const product_gen = require('../db/products');

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

router.post('/', (req, res) => {
  const { name, price, image } = req.body;
  const product = {
    id: product_gen().length,
    name,
    price,
    image,
  };
  res.json({
    message: 'Product created successfully',
    product,
  });
});

module.exports = router;
