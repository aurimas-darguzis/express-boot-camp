const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ foo: 1 });
});

module.exports = app;
