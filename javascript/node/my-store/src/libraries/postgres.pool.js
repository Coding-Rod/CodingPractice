const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'rodri',
  password: 'admin123',
  database: 'my_store',
});

module.exports = pool;
