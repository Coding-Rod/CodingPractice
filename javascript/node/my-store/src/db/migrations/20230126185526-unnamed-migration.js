'use strict';

const { USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'customer',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  },
};
