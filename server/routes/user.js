const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',
  userController.searchUser,
  (req, res) => {
    res.status(200).json({user: res.locals.user});
  }
);

router.post('/',
  userController.validateUser,
  userController.searchUser,
  userController.createUser,
  (req, res) => {
    res.status(200).json({user: res.locals.user});
  }
);

router.patch('/',
  userController.updateUser,
  (req, res) => {
    res.status(200).json({user: res.locals.user})
  }
);

router.delete('/:id',
userController.deleteUser,
  (req, res) => {
    res.status(200).json({
      deleted: res.locals.deleted
    })
  }
);

module.exports = router;