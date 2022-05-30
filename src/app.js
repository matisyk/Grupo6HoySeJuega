const express = require('express');

const app = express();

const path = require("path");

app.use(express.static('public'));

const publicPath = path.resolve('../public')

app.use(express.static(publicPath));

app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'))

const methodOverride = require('method-override');
app.use(methodOverride('_method'))

// home
const homeRouter = require('./routes/homeRout');
app.use('/', homeRouter);

// login
const loginRouter = require('./routes/loginRout');
app.use('/login', loginRouter);

// register
const registerRouter = require('./routes/registerRout');
app.use('/register', registerRouter);

const registerRouter2 = require('./routes/productsRegisterOwner');
app.use('/register', registerRouter2);

// userOwner
const userOwnerRouter = require('./routes/userOwnerRout');
app.use('/userOwner', userOwnerRouter);

// userPlayer

const userPlayerRouter = require('./routes/userPlayerRout');
app.use('/userPlayer', userPlayerRouter);

const sobreNosotrosRouter = require('./routes/sobreNosotrosRout');
app.use('/sobreNosotros', sobreNosotrosRouter);


// Metodos get
// app.get('/', (req, res) => {

//   res.sendFile(path.resolve("src/views/index.html"))
// });
// app.get('/loginPlayer', (req, res) => {

//   res.sendFile(path.resolve("src/views/loginPlayer.html"))
// });
// app.get('/loginCourt', (req, res) => {

//   res.sendFile(path.resolve("src/views/loginCourt.html"))
// });
// app.get('/register', (req, res) => {

//   res.sendFile(path.resolve("src/views/register.html"))
// });
// app.get('/sobreNosotros', (req, res) => {

//   res.sendFile(path.resolve("src/views/sobreNosotros.html"))
// });

// app.get('/formularioJugador', (req, res) => {

//   res.sendFile(path.resolve("src/views/formularioDatosJugador.html"))
// });

// app.get('/formularioCancha', (req, res) => {

//   res.sendFile(path.resolve("src/views/formularioDatosCancha.html"))
// });

// app.get('/vistaCancha', (req, res) => {

//   res.sendFile(path.resolve("src/views/vistaCancha.html"))
// });
// app.get('/registrarCancha', (req, res) => {

//   res.sendFile(path.resolve("src/views/registrarCancha.html"))
// });

// app.get('/registrarEscuelita', (req, res) => {

//   res.sendFile(path.resolve("src/views/registrarEscuelita.html"))
// });

// app.get('/crearTorneo', (req, res) => {

//   res.sendFile(path.resolve("src/views/crearTorneo.html"))
// });

// app.get('/agenda', (req, res) => {

//   res.sendFile(path.resolve("src/views/agenda.html"))
// });

// app.get('/perfilDeJugador', (req, res) => {

//   res.sendFile(path.resolve("src/views/perfilDeJugador.html"))
// });

// app.get('/reservarCancha', (req, res) => {

//   res.sendFile(path.resolve("src/views/reservarCancha.html"))
// });

// app.get('/elegirCancha', (req, res) => {

//   res.sendFile(path.resolve("src/views/elegirCancha.html"))
// });
// app.get('/carrito', (req, res) => {

//   res.sendFile(path.resolve("src/views/carrito.html"))
// });
// app.get('/reservaCancha', (req, res) => {

//   res.sendFile(path.resolve("src/views/reservaCancha.html"))
// });
// app.get('/equipo', (req, res) => {

//   res.sendFile(path.resolve("src/views/equipo.html"))
// });
// app.get('/perfilCanchaVista', (req, res) => {

//   res.sendFile(path.resolve("src/views/vistaCanchaInfo.html"))
// });

// // Metodos post


// app.post('/', (req, res) => {

//   res.sendFile(path.resolve("src/views/index.html"))
// });

// app.post('/loginPlayer', (req, res) => {

//   res.sendFile(path.resolve("src/views/loginPlayer.html"))
// });

// app.post('/loginCourt', (req, res) => {

//   res.sendFile(path.resolve("src/views/loginCourt.html"))
// });
// app.post('/register', (req, res) => {

//   res.sendFile(path.resolve("src/views/register.html"))
// });

// app.post('/vistaCancha', (req, res) => {

//   res.sendFile(path.resolve("src/views/vistaCancha.html"))
// });

// app.post('/perfilDeJugador', (req, res) => {

//   res.sendFile(path.resolve("src/views/perfilDeJugador.html"))
// });


app.listen(8080, () => {
  console.log('El servidor del proyecto integrador esta corriendo');
});