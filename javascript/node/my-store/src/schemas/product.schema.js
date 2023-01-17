const Joi = require('joi');

const id = Joi.string().guid({ version: 'uuidv4' });
const name = Joi.string().min(3).max(15).alphanum();
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
});

const productIdSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  productIdSchema,
  createProductSchema,
  updateProductSchema,
};
