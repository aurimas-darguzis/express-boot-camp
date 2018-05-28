const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.delete('/', (req, res) => {
  const foo = req.body.foo;
  res.json({ foo: 0 });
});

module.exports = app;
