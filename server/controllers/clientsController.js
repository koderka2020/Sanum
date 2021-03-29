const db = require('../models/quoteModel');

const clientsController = {
  getClients: (req, res, next) => {
    const queryStr = `select * from clients;`;

    db.query(queryStr)
      .then(data => {
        res.locals.clients = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in clientsController.getClients: ${error}` },
      }))
  },

  validateClient: (req, res, next) => {
    //validate the body of the request
    const body = req.body;
    if (!body.name || !body.email || body.name.length === 0 || body.email.length === 0) return next({
      message: { err: `Error occurred in clientsController.validateClient: invalid data`},
    })
    return next();
  },

  createClient: (req, res, next) => {
    //validate the body of the request
    const body = req.body;
    const queryStr = `insert into 
    clients (name, email)
    values ('${body.name}', '${body.email}') returning *;`;
    
    db.query(queryStr)
    .then(data => {
      // console.log('Creating client >>> ', data.rows);
      res.locals.new = data.rows;
      return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in clientsController.createClient: ${error}` },
      }))
  },


  updateClient: (req, res, next) => {
    const body = req.body;
    const queryStr = `update clients
    set name = '${body.name}', email = '${body.email}'
    where id = ${req.params.id}
    returning *;`;
    
    db.query(queryStr)
      .then(data => {
        console.log('Updating client >>> ', data);
        // if data.rows.length === 0, throw error because no match found 
        if (data.rows.length === 0) return next({
          message: { err: `Error occurred in clientsController.updateClient: client doesn't exist in database`},
        });
        res.locals.updated = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in clientsController.updateClient: ${error}`},
      }))
  },

  deleteClient: (req, res, next) => {
    const queryStr = `delete from clients
    where id = ${req.params.id}
    returning *;`;
    
    db.query(queryStr)
      .then(data => {
        res.locals.deleted = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in clientsController.deleteClient: ${error}` },
      }))
  }

};

module.exports = clientsController;