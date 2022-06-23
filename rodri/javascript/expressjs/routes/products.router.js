const express = require('express');
const ProductService = require('../services/product.service.js');
const validatorHandler = require('../middlewares/validator.handler.js');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema.js');

const router = express.Router();
const service = new ProductService(router);

//! GET

router.get('/', async (req, res) => {
  const { limit, offset } = req.query;
  const products = await service.find(limit,  offset);
  res.json(products);
});

router.get('/filter', async (req, res) => {
  res.send("Hello, I am a filter!");
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

//! POST

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res
    .status(201)
    .json({
      message: 'created',
      data: newProduct,
    });

  }
);

//! PATCH

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const body = req.body;
      const productUpdated = await service.update(id, body);
      res.json({
        message: 'updated',
        id: id,
        data: productUpdated,
      });
    } catch (error) {
      next(error);
    }
  }
);

//! DELETE

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
