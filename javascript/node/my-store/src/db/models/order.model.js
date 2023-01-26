const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id',
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'created_at',
  },
};

class OrderModel extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'OrderModel',
      timestamps: false,
    };
  }
  static associate(models) {
    this.belongsTo(models.UserModel, {
      foreignKey: 'user_id',
    });
    this.belongsTo(models.ProductModel, {
      foreignKey: 'product_id',
    });
  }
}

module.exports = {
  ORDER_TABLE,
  OrderSchema,
  OrderModel,
};
