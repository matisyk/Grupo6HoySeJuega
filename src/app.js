const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve('../public');
const methodOverride = require('method-override');
const session = require ('express-session')
const userLoggedOwner = require('./middlewares/userLoggedOwner')

//session
app.use(session({
  secret: 'Es un secreto nuestro',
  resave: false,
  saveUninitialized: false,
}))



app.use(express.static('public'));
app.use(express.static(publicPath));
app.use(express.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'))
app.use(methodOverride('_method'))
app.use(userLoggedOwner);
// home
const homeRouter = require('./routes/homeRout');
app.use('/', homeRouter);

// login
const loginRouter = require('./routes/loginRout');
app.use('/login', loginRouter);

// register
//const registerRouter = require('./routes/registerRout');
//app.use('/register', registerRouter);

const registerRouter2 = require('./routes/productsRegisterOwner');
app.use('/register', registerRouter2);

const registerRouter3 = require('./routes/productsRegisterPlayer');
app.use('/register', registerRouter3);

// userOwner
const userOwnerRouter = require('./routes/userOwnerRout');
app.use('/userOwner', userOwnerRouter);

const registerCourt = require('./routes/productsCourtRout');
app.use('/userOwner', registerCourt);

const registerSchool = require('./routes/productsSchoolRout');
app.use('/userOwner', registerSchool);

const registerTorneo = require('./routes/productsTorneoRout');
app.use('/userOwner', registerTorneo);

// userPlayer

const userPlayerRouter = require('./routes/userPlayerRout');
app.use('/userPlayer', userPlayerRouter);

const sobreNosotrosRouter = require('./routes/sobreNosotrosRout');
app.use('/sobreNosotros', sobreNosotrosRouter);


app.listen(8080, () => {
  console.log('El servidor del proyecto integrador esta corriendo');
});