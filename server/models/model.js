const { Pool } = require('pg');
require('dotenv').config();

<<<<<<< HEAD

=======
>>>>>>> 87c66203499cc3b2e2f3ffad870ecacc0f681700
const pool = new Pool ({
  connectionString: process.env.PG_URI
});

<<<<<<< HEAD

=======
// Test connection
>>>>>>> 87c66203499cc3b2e2f3ffad870ecacc0f681700
// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   else console.log('connected');
// })


<<<<<<< HEAD


module.exports = {
  query: (text, params, callback) => {
=======
module.exports = {
  query: (text, params, callback) => {
    // console.log('execute param', params);
>>>>>>> 87c66203499cc3b2e2f3ffad870ecacc0f681700
    console.log('execute query', text);
    return pool.query(text, params, callback);
  }
};