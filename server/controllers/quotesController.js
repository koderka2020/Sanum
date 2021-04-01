const db = require('../models/model');
const {transporter, mailOptions} = require('../mailer/mailer');

const quotesController = {
  getQuotes: (req, res, next) => {
    const queryStr = `select q.quoteid, q.event, q.date, q.amount , p.type, p.hourlyCost, c.name, c.email
    from quotes q
    LEFT join photobooths p
    on q.photoboothId = p.id
    LEFT join clients c
    on q.clientId = c.id;`;

    db.query(queryStr)
      .then(data => {
        res.locals.quotes = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in quotesController. getQuotes: ${error}` },
      }))
  },

  validateQuote: (req, res, next) => {
    //validate the body of the request
    const body = req.body;
    console.log('validating quote request body >>> ', req.body);

    if (!body.event || !body.amount || !body.photoboothId || !body.clientId) return next({
      message: { err: `Error occurred in quotesController.validateQuote: invalid data`},
    })
    return next();
  },
  
  createQuote: (req, res, next) => {
    //validate the body of the request
    const body = req.body;
    const queryStr = `insert into 
    quotes (event, amount, date, photoboothId, clientId)
    values ('${body.event}', ${body.amount}, to_timestamp(${Date.now()/1000}) , ${body.photoboothId}, ${body.clientId} )returning *;`;
    console.log('Creating quote request body >>> ', req.body);
    
    db.query(queryStr)
    .then(data => {
      console.log('Creating quote >>> ', data.rows);
      res.locals.new = data.rows;
      return next();
    })
    .catch(error => next({
      message: { err: `Error occurred in quotesController. createQuote: ${error}` },
    }))
  },

  updateQuote: (req, res, next) => {
    const queryStr = `update quotes 
    event = '${body.event}', 
    amount = ${body.amount},
    photoboothid = ${body.photoboothId},
    clientid = ${body.clientId},  
    date = to_timestamp(${Date.now()/1000}) returning *;`;
    
    db.query(queryStr)
    .then(data => {
      // console.log('Update quote >>> ', data.rows);
      res.locals.new = data.rows;
      return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in quotesController.updateQuote: ${error}`},
      }))
  },


  // createQuote: (req, res, next) => {
  //   //validate the body of the request
  //   const body = req.body;
  //   const queryStr = `insert into 
  //   quotes (event, amount, date, photoboothId, clientId)
  //   values ('$1', $2, to_timestamp($3) , 1, 1 )returning *;`;
    
  //   db.query(queryStr, [body.event, body.amount, Date.now()/1000])
  //   .then(data => {
  //     // console.log('Creating quote >>> ', data.rows);
  //     res.locals.new = data.rows;
  //     return next();
  //     })
  //     .catch(error => next({
  //       message: { err: `Error occurred in quotesController. createQuote: ${error}` },
  //     }))
  // },

 
  findQuote: (req, res, next) => {
    console.log('Finding quote to email >>> ',req.body.quoteId);
    const queryStr =  `select  q.event, q.date, q.amount , p.type,  c.name, c.email
    from quotes q
    LEFT join photobooths p
    on q.photoboothId = p.id
    LEFT join clients c
    on q.clientId = c.id
    where q.quoteid = ${req.body.quoteId};`;
    
    db.query(queryStr)
      .then(data => {
        res.locals.quote = data.rows.pop();
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in quotesController.findQuote: ${error}` },
      }))
  },

  emailQuote: (req, res, next) => {
    console.log('Sending email for ...', res.locals.quote)
    const quote = res.locals.quote;
    const body = `
      Hello, ${quote.name}
      Your booking is confirmed for "${quote.event}" on ${quote.date}. The total is $${quote.amount} for the "${quote.type}" rental.  Thank you for your business.`;
    // const details = mailOptions('khuongnguyensac@gmail.com', body);
    const details = mailOptions(quote.email, body);

    transporter.sendMail(details, function(error, info){
      if (error) {
        console.log(error);
        return next({
          message: { err: `Error occurred in quotesController. emailQuote: ${error}` },
        });
      } else {
        console.log('Email sent: ' + info.response);
        return next();
      }
    });
  },

  deleteQuote: (req, res, next) => {
    // const event = req.body.event;
    const queryStr = `delete from quotes
    where quoteid = ${req.params.id}
    returning *;`;
    
    db.query(queryStr)
      .then(data => {
        res.locals.deleted = data.rows;
        return next();
      })
      .catch(error => next({
        message: { err: `Error occurred in quotesController. deleteQuote: ${error}` },
      }))
  }

};

module.exports = quotesController;