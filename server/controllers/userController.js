const db = require('../models/model');

const userController = {
  getUsers: (req, res, next) => {
    const queryStr = `select * from users;`;

    db.query(queryStr)
      .then(data => {
        res.locals.user = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in userController.getUsers: ${error}` },
      }))
  },

  searchUser: (req, res, next) => {
    const { email } = req.body;
    const params = [email];
    const queryStr = `SELECT * FROM users WHERE email = '${email}'`;
    // const queryStr = `SELECT * FROM users;`

    db.query(queryStr)
      .then(data => {
        console.log(data.rows);
        res.locals.user = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in userController.searchUser: ${error}` },
      }))
  },

  validateUser: (req, res, next) => {
    console.log ('validate user middleware >>> ', req.body);

    //validate the body of the request
    const { email, firstname, lastname, imageUrl } = req.body;
    if (!firstname || !email || firstname.length === 0 || email.length === 0) return next({
      message: { err: `Error occurred in userController.validateUser: invalid data`},
    })
    return next();
  },


  createUser: (req, res, next) => {
    console.log ('create user middleware >>> ', req.body);
    console.log('res.locals>>>>>', res.locals)
    // if user req.body.user returns truthy, immediately call next and skip creating a new user
    // if (res.locals.user.length > 0) return next();
    // else
    //validate the body of the request
    const { firstname, lastname, email, imageUrl } = req.body;
    const params = [firstname, lastname, email, imageUrl, 0];
    console.log('params >>>>>', params);

    const queryStr = `INSERT INTO users (firstname, lastname, email, picurl, caloricgoal) VALUES ('${firstname}', '${lastname}', '${email}', '${imageUrl}', ${0}) returning *`;
    
    db.query(queryStr)
      .then(data => {
        console.log('data.rows >>> ', data);
        res.locals.user = data.rows;
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