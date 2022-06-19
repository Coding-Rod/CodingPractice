const express = require('express');
const ProductService = require('../services/product.service.js');

const router = express.Router();
const service = new ProductService(router);

//! GET

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  const products = service.find(limit,  offset);
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send("Hello, I am a filter!");
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  console.log(product);
  res.json(product);
  product != undefined
});

//! POST

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res
  .status(201)
  .json({
    message: 'created',
    data: newProduct,
  });

});

//! PATCH

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const productUpdated = service.update(id, body);
  res.json({
    message: 'updated',
    id: id,
    data: productUpdated,
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
