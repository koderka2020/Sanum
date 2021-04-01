const db = require('../models/model');

const likesController = {
  like: (req, res, next) => {
    const { userID, postID } = req.body;
    const params = [userID, postID]
    const queryStr = `INSERT into Likes (userID, postID) VALUES ($1, $2)`
      .then(data => {
        res.locals.likes = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in likesController.like: ${error}` },
      }))
  },

  showLikes: (req, res, next) => {
    const { postID } = req.body;
    const params = [postID];
    console.log('params: ', params);
    const queryStr = `SELECT * FROM likes WHERE postID = $1`;
   
    db.query(queryStr, params)
    .then(data => {
        console.log('data.rows: ', data.rows);
        res.locals.likes = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in likesController.showLikes: ${error}` },
      }))
  },

  unlike: (req, res, next) => {
    const { userID, postID } = req.body;
    const params = [userID, postID]
    const queryStr = `delete from Posts where userID = $1 AND postID = $2 returning *;`;
    
    db.query(queryStr,params)
      .then(data => {
        res.locals.likes = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in likesController.unlike: ${error}` },
      }))
  }

};

module.exports = likesController;