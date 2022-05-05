const express = require('express');

const app = express();

const path = require("path");

app.use(express.static('public'));

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath));

app.get('/', (req, res) => {

  res.sendFile(path.resolve("./views/index.html"))
});

app.get('/loginPlayer', (req, res) => {

  res.sendFile(path.resolve("./views/loginPlayer.html"))
});
app.get('/loginCourt', (req, res) => {

  res.sendFile(path.resolve("./views/loginCourt.html"))
});

app.get('/register', (req, res) => {

  res.sendFile(path.resolve("./views/register.html"))
});
app.get('/sobreNosotros', (req, res) => {

  res.sendFile(path.resolve("./views/sobreNosotros.html"))
});

app.get('/formularioJugador', (req, res) => {

  res.sendFile(path.resolve("./views/formularioDatosJugador.html"))
});

app.get('/FormularioCancha', (req, res) => {

  res.sendFile(path.resolve("./views/formularioDatosCancha.html"))
});

app.get('/vistaCancha', (req, res) => {

  res.sendFile(path.resolve("./views/vistaCancha.html"))
});
app.post('/vistaCancha', (req, res) => {

  res.sendFile(path.resolve("./views/vistaCancha.html"))
});

app.get('/registrarCancha', (req, res) => {

  res.sendFile(path.resolve("./views/registrarCancha.html"))
});

app.listen(8080, () => {
  console.log('El servidor del proyecto integrador esta corriendo');
});