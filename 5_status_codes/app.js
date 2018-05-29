const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ foo: 1 });
});

app.put('/', (req, res) => {
    const foo = req.body.foo;
    const sum = parseInt(foo) + 1;
    res.json({ foo: sum });
});

app.post('/', (req, res) => {
    const foo = req.body.foo;
    res.status(201).json({ foo });
});

app.delete('/', (req, res) => {
    const foo = req.body.foo;
    res.status(202).json({ foo: 0 });
});

app.get('/fail', (req, res) => {
    res.status(404).end();
});

app.get('/error', (req, res) => {
    res.status(500).end();
});

app.post('/error', (req, res) => {
    res.status(405).end();
});

app.all('/error', (req, res) => {
    res.status(405).end();
});