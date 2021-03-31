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
<<<<<<< HEAD
  userController.createUser,
  userController.getUsers,
=======
  userController.searchUser,
  userController.createUser,
>>>>>>> 87c66203499cc3b2e2f3ffad870ecacc0f681700
  (req, res) => {
    res.status(200).json({users: res.locals.users});
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