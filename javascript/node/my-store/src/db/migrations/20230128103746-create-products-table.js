'use strict';

const { Product_Schema, PRODUCT_TABLE } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, Product_Schema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};