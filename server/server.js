const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const userRouter = require('./routes/user');
// const postsRouter = require('./routes/posts');
// const commentsRouter = require('./routes/comments');
// const likesRouter = require('./routes/likes');
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


app.use('/user', userRouter);
// app.use('/posts', postsRouter);
// app.use('/comments', commentsRouter);
// app.use('/likes', likesRouter);

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
  console.log(errorObj.message);

  return res.status(errorObj.status).json(errorObj.message.err);
});

app.listen(PORT, () => console.log('Listening on port 3000...'));