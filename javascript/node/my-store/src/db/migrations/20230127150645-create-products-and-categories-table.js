'use strict';

const { Product_Schema, PRODUCT_TABLE } = require('../models/product.model');
const { Category_Schema, CATEGORY_TABLE } = require('../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, Category_Schema);
    await queryInterface.createTable(PRODUCT_TABLE, Product_Schema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
