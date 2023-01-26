const { Sequelize } = require('sequelize');

const URI = require('../utils/uri');
const setupModels = require('../db/models');

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
