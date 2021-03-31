const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/',
commentsController.showComments, (req, res) => {
    res.status(200).json(res.locals.comment);
  }
);

router.post('/', commentsController.comment, postsController.getPosts, (req, res) => {
    res.status(200).json(res.locals.comment);
  }
);

router.delete('/', commentsController.deleteComment, (req, res) => {
  res.status(200).json(res.locals.comment)
  }
);

router.patch('/', commentsController.updateComment, (req, res) => {
  res.status(200).json(res.locals.comment)
  }
);

module.exports = router;