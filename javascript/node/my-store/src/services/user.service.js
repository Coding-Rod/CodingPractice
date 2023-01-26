// const boom = require('@hapi/boom');
const { getConnection } = require('../libraries/postgres');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const { rows } = await client.query('SELECT * FROM tasks');
    await client.end();
    return rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
