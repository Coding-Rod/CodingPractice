const Joi = require('joi');

const { createUserSchema } = require('./user.schema');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const phone = Joi.string().min(8).max(15);
const address = Joi.string().min(8).max(15);
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  phone: phone.required(),
  address: address.required(),
  user: createUserSchema.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
  phone: phone,
  address: address,
  userId: userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema,
};
