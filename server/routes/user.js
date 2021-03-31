const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',
  userController.getUsers,
  (req, res) => {
    res.status(200).json({users: res.locals.users});
  }
);

router.post('/',
  userController.validateUser,
  userController.searchUser,
  userController.createUser,
  (req, res) => {
    console.log('last middleware');
    return res.status(200).json({users: res.locals.users});
  }
);

// router.patch('/:id',
//   userController.updateUser,
//   (req, res) => {
//     res.status(200).json({
//       updated: res.locals.new
//     })
//   }
// );



router.delete('/:id',
userController.deleteUser,
  (req, res) => {
    res.status(200).json({
      deleted: res.locals.deleted
    })
  }
);

module.exports = router;