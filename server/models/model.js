const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool ({
  connectionString: process.env.PG_URI
});

// Test connection
// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   else console.log('connected');
// })


module.exports = {
  query: (text, params, callback) => {
    // console.log('execute param', params);
    console.log('execute query', text);
    return pool.query(text, params, callback);
  }
};