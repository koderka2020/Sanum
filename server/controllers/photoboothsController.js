const db = require('../models/model');

const photoboothsController = {
  getPhotobooths: (req, res, next) => {
    const queryStr = `select * from photobooths;`;

    db.query(queryStr)
      .then(data => {
        res.locals.photobooths = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in photoboothsController.getPhotobooths: ${error}` },
      }))
  },

  
};

module.exports = photoboothsController;