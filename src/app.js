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