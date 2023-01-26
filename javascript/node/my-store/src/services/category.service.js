// const boom = require('@hapi/boom');

const sequelize = require('./../libraries/sequelize');

class CategoryService {
  constructor() {}
  async create(data) {
    return data;
  }

  async find() {
    const data = await sequelize.models.CategoryModel.findAll();
    return data;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = CategoryService;
