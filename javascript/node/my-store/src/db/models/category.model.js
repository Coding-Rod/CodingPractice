const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'created_at',
  },
};

class CategoryModel extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'CategoryModel',
      timestamps: false,
    };
  }
  static associate(models) {
    this.hasMany(models.ProductModel, {
      foreignKey: 'categoryId',
      as: 'products',
    });
  }
}

module.exports = {
  CATEGORY_TABLE,
  CategorySchema,
  CategoryModel,
};
