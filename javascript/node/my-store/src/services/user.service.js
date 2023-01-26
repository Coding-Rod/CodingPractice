// const boom = require('@hapi/boom');
const pool = require('./../libraries/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', () => process.exit(-1));
  }

  async create(data) {
    return data;
  }

  async find() {
    const { rows } = await this.pool.query('SELECT * FROM tasks');
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
