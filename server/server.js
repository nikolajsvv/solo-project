const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static(path.join(__dirname, './client/index.html')));

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, './dist')));

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './client/index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Listenining on port ', PORT);
})