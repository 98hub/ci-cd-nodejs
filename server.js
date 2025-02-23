const express = require('express');
const { greeting } = require('./user');

const app = express();

app.get('/', (_, res) => res.send('This app is running properly!'))
<<<<<<< HEAD
   .get('/dewaweb', (_, res) => res.send('Hello, Dewaweb Indonesia!'))
=======
   .get('/dewaweb', (_, res) => res.send('Hello, Dewaweb Indonesia'))
   .get('/dewacloud', (_, res) => res.send('Hello, Dewacloud Indonesia!'))
>>>>>>> cc1554e1e58a03be05f20bb87ef47583e1cc54f4
   .get('/hello/:name', (req, res) => res.json({ message: greeting(req.params.name) }));

module.exports = app;