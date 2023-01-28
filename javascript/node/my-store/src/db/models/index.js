const { UserModel, UserSchema } = require('./user.model');
const { CustomerModel, CustomerSchema } = require('./customer.model');
const { CategoryModel, CategorySchema } = require('./category.model');
const { ProductModel, ProductSchema } = require('./product.model');
// const { OrderModel, OrderSchema } = require('./order.model');

const setupModels = (sequelize) => {
  UserModel.init(UserSchema, UserModel.config(sequelize));
  CustomerModel.init(CustomerSchema, CustomerModel.config(sequelize));
  CategoryModel.init(CategorySchema, CategoryModel.config(sequelize));
  ProductModel.init(ProductSchema, ProductModel.config(sequelize));

  UserModel.associate(sequelize.models);
  CustomerModel.associate(sequelize.models);
  CategoryModel.associate(sequelize.models);
  ProductModel.associate(sequelize.models);
};

module.exports = setupModels;
