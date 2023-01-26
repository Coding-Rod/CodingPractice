const boom = require('@hapi/boom');
const { models } = require('../libraries/sequelize');

class CustomerService {
  constructor() {}

  async create(data) {
    const customer = await models.CustomerModel.create(data);
    return customer;
  }

  async find() {
    const customers = await models.CustomerModel.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.CustomerModel.findByPk(id);
    if (!customer) throw boom.notFound('Customer not found');

    return customer;
  }

  async update(id, changes) {
    const customer = await models.CustomerModel.findByPk(id);
    if (!customer) throw boom.notFound('Customer not found');

    const updatedCustomer = await customer.update(changes);
    return updatedCustomer;
  }

  async delete(id) {
    const customer = await models.CustomerModel.findByPk(id);
    if (!customer) throw boom.notFound('Customer not found');

    await customer.destroy();
    return customer;
  }
}

module.exports = CustomerService;
