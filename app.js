const express = require('express');

const app = express();

const path = require("path");


app.get('/', (req, res) => {

  res.sendFile(path.resolve("./views/index.html"))
});


app.listen(8080, () => {
  console.log('El servidor del proyecto integrador esta corriendo');
});