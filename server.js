const express = require('express');
const { greeting } = require('./user');

const app = express();

app.get('/', (_, res) => res.send('This app is running properly!'))
   .get('/dewaweb', (_, res) => res.send('Hello, Dewaweb Indonesia'))
   .get('/dewacloud', (_, res) => res.send('Hello, Dewacloud Indonesia!'))
   .get('/hello/:name', (req, res) => res.json({ message: greeting(req.params.name) }));

module.exports = app;