const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/',
  clientsController.getClients,
  (req, res) => {
    res.status(200).json({clients: res.locals.clients});
  }
);

router.post('/',
  clientsController.validateClient,
  clientsController.createClient,
  clientsController.getClients,
  (req, res) => {
    res.status(200).json({clients: res.locals.clients});
  }
);

router.patch('/:id',
  clientsController.updateClient,
  (req, res) => {
    res.status(200).json({
      updated: res.locals.new
    })
  }
);


// Delete client will cause quotes row to lose foreign key reference
// Comment out for now
// router.delete('/:id',
// clientsController.deleteClient,
//   (req, res) => {
//     res.status(200).json({
//       deleted: res.locals.deleted
//     })
//   }
// );

module.exports = router;