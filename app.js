const express = require('express');

const app = express();

const path = require("path");

app.use(express.static('public'));

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath));

// Metodos get
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

app.get('/formularioCancha', (req, res) => {

  res.sendFile(path.resolve("./views/formularioDatosCancha.html"))
});

app.get('/vistaCancha', (req, res) => {

  res.sendFile(path.resolve("./views/vistaCancha.html"))
});
app.get('/registrarCancha', (req, res) => {

  res.sendFile(path.resolve("./views/registrarCancha.html"))
});

app.get('/agenda', (req, res) => {

  res.sendFile(path.resolve("./views/agenda.html"))
});

app.get('/perfilDeJugador', (req, res) => {

  res.sendFile(path.resolve("./views/perfilDeJugador.html"))
});

app.get('/reservarCancha', (req, res) => {

  res.sendFile(path.resolve("./views/reservarCancha.html"))
});

app.get('/elegirCancha', (req, res) => {

  res.sendFile(path.resolve("./views/elegirCancha.html"))
});
app.get('/shiping', (req, res) => {

  res.sendFile(path.resolve("./views/shiping.html"))
});


// Metodos post


app.post('/', (req, res) => {

  res.sendFile(path.resolve("./views/index.html"))
});

app.post('/loginPlayer', (req, res) => {

  res.sendFile(path.resolve("./views/loginPlayer.html"))
});

app.post('/loginCourt', (req, res) => {

  res.sendFile(path.resolve("./views/loginCourt.html"))
});
app.post('/register', (req, res) => {

  res.sendFile(path.resolve("./views/register.html"))
});

app.post('/vistaCancha', (req, res) => {

  res.sendFile(path.resolve("./views/vistaCancha.html"))
});

app.post('/perfilDeJugador', (req, res) => {

  res.sendFile(path.resolve("./views/perfilDeJugador.html"))
});


app.listen(8080, () => {
  console.log('El servidor del proyecto integrador esta corriendo');
});