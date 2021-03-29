const { Pool } = require('pg');

//TODO: Populate URI string here
const PG_URI = 'postgres://wrypcgnv:E5LfuFG3dTK53a8KBJ7Yn1Pt_MMU7w4b@ziggy.db.elephantsql.com:5432/wrypcgnv';


const pool = new Pool ({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('execute query', text);
    return pool.query(text, params, callback);
  }
};