const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likesController');

router.get('/',
likesController.showLikes, (req, res) => {
    res.status(200).json(res.locals.posts);
  }
);

router.post('/', likesController.like, postsController.getPosts, (req, res) => {
    res.status(200).json(res.locals.posts);
  }
);

router.delete('/', likesController.unlike, (req, res) => {
  res.status(200).json(res.locals.posts)
  }
);

module.exports = router;