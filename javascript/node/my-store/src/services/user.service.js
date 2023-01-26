const boom = require('@hapi/boom');
const { models } = require('../libraries/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const user = await models.UserModel.create(data);
    return user;
  }

  async find() {
    const rows = await (
      await models.UserModel.findAll()
    ).sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    });
    return rows;
  }

  async findOne(id) {
    const user = await models.UserModel.findByPk(id);
    if (!user) throw boom.notFound('User not found');
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const updatedUser = await user.update(changes);
    return updatedUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const deletedUser = await user.destroy();
    return deletedUser;
  }
}

module.exports = UserService;
