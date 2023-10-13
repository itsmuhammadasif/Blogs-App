const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'blog-app',
  password: 'asif',
  port: process.env.DB_PORT,
  idleTimeoutMillis: 30000,
});

pool.connect();
console.log("Port is: ", process.env.DB_PORT)
pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err.message);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

