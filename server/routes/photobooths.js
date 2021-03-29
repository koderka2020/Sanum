const express = require('express');
const router = express.Router();
const photoboothsController = require('../controllers/photoboothsController');

router.get('/',
photoboothsController.getPhotobooths,
  (req, res) => {
    res.status(200).json({photobooths: res.locals.photobooths});
  }
);



module.exports = router;