const { UserModel, UserSchema } = require('./user.model');

const setupModels = (sequelize) => {
  UserModel.init(UserSchema, UserModel.config(sequelize));
};

module.exports = setupModels;
