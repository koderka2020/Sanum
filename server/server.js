const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


const quotesRouter = require('./routes/quotes');
const clientsRouter = require('./routes/clients');
const photoboothsRouter = require('./routes/photobooths');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/src', express.static(path.resolve(__dirname, '../src')))

app.get('/',
  (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
  }
);

app.get('/build/bundle.js',
  (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js'))
  }
);

app.get('/styles.scss',
  (req, res) => {
    return res.set('Content-Type', 'text/css')
    .status(200)  
    .sendFile(path.resolve(__dirname,'../src/styles.scss'));
}
);

app.use('/quote', quotesRouter);
app.use('/client', clientsRouter );
app.use('/photobooth', photoboothsRouter );





app.use('*', (req, res) => {
  res.status(404).send('Invalid route');
})

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign({}, defaultErr, err); 
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message.err);
});

app.listen(PORT, () => console.log('Listening on port 3000...'));