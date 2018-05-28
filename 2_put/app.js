const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.put('/', (req, res) => {
  const foo = req.body.foo;
  const sum = parseInt(foo) + 1;
  res.json({ foo: sum });
});

module.exports = app;
