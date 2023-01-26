const { UserModel, UserSchema } = require('./user.model');
const { ProductModel, ProductSchema } = require('./product.model');
const { CategoryModel, CategorySchema } = require('./category.model');

const setupModels = (sequelize) => {
  UserModel.init(UserSchema, UserModel.config(sequelize));
  ProductModel.init(ProductSchema, ProductModel.config(sequelize));
  CategoryModel.init(CategorySchema, CategoryModel.config(sequelize));
};

module.exports = setupModels;
