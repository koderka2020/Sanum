const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotesController');

router.get('/',
  quotesController.getQuotes,
  (req, res) => {
    res.status(200).json({quotes: res.locals.quotes});
  }
);

router.post('/email',
  quotesController.findQuote,
  quotesController.emailQuote,
  (req, res) => {
    res.status(200).send("Quote is emailed!!");
  }
);

router.post('/',
  quotesController.validateQuote,
  quotesController.createQuote,
  quotesController.getQuotes,
  (req, res) => {
    res.status(200).json({
      quotes: res.locals.quotes
    })
  }
);

router.patch('/',
  quotesController.validateQuote,
  quotesController.updateQuote,
  (req, res) => {
    res.status(200).json({
      new: res.locals.new
    })
  }
);


router.delete('/:id',
  quotesController.deleteQuote,
  quotesController.getQuotes,
  (req, res) => {
    res.status(200).json({
      quotes: res.locals.quotes
    })
  }
);

module.exports = router;