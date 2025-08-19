const express = require('express');
const sum = require('./sum');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Sum of 2 + 3 = ${sum(2, 3)}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
