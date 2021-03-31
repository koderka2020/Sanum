const db = require('../models/model');

const commentsController = {
  comment: (req, res, next) => {
    const { userID, postID, text} = req.body;
    const params = [userID, postID, text]
    const queryStr = `INSERT into Likes (userID, postID, text) VALUES ($1, $2, $3)`
      .then(data => {
        res.locals.comments = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in commentsController.comment: ${error}` },
      }))
  },

  showComments: (req, res, next) => {
    const { postID } = req.body;
    const params = [postID];
    console.log('params: ', params);
    const queryStr = `SELECT * FROM likes WHERE postID = $1`;
   
    db.query(queryStr, params)
    .then(data => {
        console.log('data.rows: ', data.rows);
        res.locals.comments = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in commentsController.showComments: ${error}` },
      }))
  },

  deleteComment: (req, res, next) => {
    const { userID, postID, text } = req.body;
    const params = [userID, postID, text]
    const queryStr = `delete from Comments where userID = $1, postID = $2, text = $3 returning *;`;
    
    db.query(queryStr,params)
      .then(data => {
        res.locals.comments = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in commentsController.deleteComment: ${error}` },
      }))
  },

  updateComment: (req, res, next) => {
    const { userID, postID, oldText, newText } = req.body;
    const params = [userID, postID, oldText, newText]
    const queryStr = `UPDATE Comments SET caption = $4 WHERE userID = $1, postID = $2, caption = $3 returning *`
    
    db.query(queryStr,params)
      .then(data => {
        res.locals.comments = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in commentsController.deleteComment: ${error}` },
      }))
  }

};

module.exports = likesController;