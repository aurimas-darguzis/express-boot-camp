const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(401).end();
});

app.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username === 'foo' && password === 'bar') {
        res.status(200).end();
    }
    res.status(400).end();
});

app.get('/moved', (req, res) => {
    res.redirect('/');
})