const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require('path');

const PORT = 3000;

// only run in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, './dist')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './client/index.html'));
  });
}


// catch-all route handler for any request to an unknown route
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Listenining on port ', PORT);
});

module.exports = app;