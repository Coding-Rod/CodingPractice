const { Pool } = require('pg');

const URI = require('../utils/uri');

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;
