const { UserModel, UserSchema } = require('./user.model');
const { ProductModel, ProductSchema } = require('./product.model');

const setupModels = (sequelize) => {
  UserModel.init(UserSchema, UserModel.config(sequelize));
  ProductModel.init(ProductSchema, ProductModel.config(sequelize));
};

module.exports = setupModels;
