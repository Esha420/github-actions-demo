const express = require('express');
const sum = require('./sum');

const app = express();

app.get('/', (req, res) => {
  res.send(`Sum of 2 + 3 = ${sum(2, 3)}`);
});

module.exports = app;
