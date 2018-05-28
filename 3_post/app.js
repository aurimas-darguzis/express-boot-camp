const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const foo =req.body.foo;
  res.json({ foo });
});

module.exports = app;
