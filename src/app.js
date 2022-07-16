const express = require('express');
const app = express();
const path = require("path");
const publicPath = path.resolve('../public');
const methodOverride = require('method-override');
const session = require ('express-session')
const userLoggedOwner = require('./middlewares/userLoggedOwner')
const userLoggedPlayer = require('./middlewares/userLoggedPlayer')
const cookies = require('cookie-parser');

//session
app.use(session({
  secret: 'Es un secreto nuestro',
  resave: false,
  saveUninitialized: false,
}))

app.use(cookies());

app.use(userLoggedOwner);
app.use(userLoggedPlayer);

app.use(express.static('public'));
app.use(express.static(publicPath));
app.use(express.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs');
app.set('views', path.resolve('src/views'))
app.use(methodOverride('_method'))




// home
const homeRouter = require('./routes/homeRout');
app.use('/', homeRouter);

const registerRouter2 = require('./routes/productsRegisterOwner');
app.use('/register', registerRouter2);

const registerRouter3 = require('./routes/productsRegisterPlayer');
app.use('/register', registerRouter3);

// userOwner
const userOwnerRouter = require('./routes/userOwnerRout');
app.use('/userOwner', userOwnerRouter);

// userPlayer

const userPlayerRouter = require('./routes/userPlayerRout');
app.use('/userPlayer', userPlayerRouter);

const sobreNosotrosRouter = require('./routes/sobreNosotrosRout');
app.use('/sobreNosotros', sobreNosotrosRouter);


app.listen(8080, () => {
  console.log('El servidor del proyecto integrador esta corriendo');
});