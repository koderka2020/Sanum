const db = require('../models/model');

const userController = {
  getUsers: (req, res, next) => {
    const queryStr = `select * from user;`;

    db.query(queryStr)
      .then(data => {
        res.locals.user = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in userController.getUsers: ${error}` },
      }))
  },

  validateUser: (req, res, next) => {
    //validate the body of the request
    const body = req.body;
    if (!body.name || !body.email || body.name.length === 0 || body.email.length === 0) return next({
      message: { err: `Error occurred in userController.validateUser: invalid data`},
    })
    return next();
  },

  createUser: (req, res, next) => {
    //validate the body of the request
    const body = req.body;
    const [first, last] = req.body.name.split(' ');
    const queryStr = `insert into 
    user (firstname, lastname,  email)
    values ('$1', '$2', '$3') returning *;`;
    
    db.query(queryStr, [first, last, email])
    .then(data => {
      // console.log('Creating user >>> ', data.rows);
      res.locals.new = data.rows;
      return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in userController.createUser: ${error}` },
      }))
  },


  // updateUser: (req, res, next) => {
  //   const body = req.body;
  //   const queryStr = `update user
  //   set name = '${body.name}', email = '${body.email}'
  //   where id = ${req.params.id}
  //   returning *;`;
    
  //   db.query(queryStr)
  //     .then(data => {
  //       console.log('Updating client >>> ', data);
  //       // if data.rows.length === 0, throw error because no match found 
  //       if (data.rows.length === 0) return next({
  //         message: { err: `Error occurred in userController.updateUser: client doesn't exist in database`},
  //       });
  //       res.locals.updated = data.rows;
  //       return next();
  //     })
  //     .catch(error => next({
  //       message: { err: `Error occurred in userController.updateUser: ${error}`},
  //     }))
  // },

  deleteUser: (req, res, next) => {
    const queryStr = `delete from user
    where id = ${req.params.id}
    returning *;`;
    
    db.query(queryStr)
      .then(data => {
        res.locals.deleted = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in userController.deleteUser: ${error}` },
      }))
  }

};

module.exports = userController;