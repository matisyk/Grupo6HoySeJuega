const express = require('express');

const app = express();

const path = require("path");

app.use(express.static('public'));

app.use(express.static(publicPath));

app.get('/', (req, res) => {

  res.sendFile(path.resolve("./views/index.html"))
});

app.get('/login', (req, res) => {

  res.sendFile(path.resolve("./views/login.html"))
});

app.get('/register', (req, res) => {

  res.sendFile(path.resolve("./views/register.html"))
});

app.listen(8080, () => {
  console.log('El servidor del proyecto integrador esta corriendo');
});