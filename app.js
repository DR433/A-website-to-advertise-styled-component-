// importing modules
import('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const connectToDb = require('./database/dbconnection');
const credentialsModel = require('./schema/credentials');

// importing routes for pages
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const contactsRouter = require('./routes/contacts');
const profilesRouter = require('./routes/profiles');
const dashboardRouter = require('./routes/dashboard');
const searchRouter = require('./routes/search');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const inputUserRouter = require('./routes/inputuser');
const logoutRouter = require('./routes/logout');
const indexLogoutRouter = require('./routes/indexLogout');

// setitng up express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// all middlewares setup
app.use(flash());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: `${process.env.SECRET_KEY}`
}))
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(credentialsModel.serializeUser());
passport.deserializeUser(credentialsModel.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
connectToDb();

app.use('/', indexRouter);
app.use('/loggedin', indexLogoutRouter);
app.use('/about', aboutRouter);
app.use('/contacts', contactsRouter);
app.use('/profiles', profilesRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/searchuser', searchRouter);
app.use('/dashboard', dashboardRouter);
app.use('/datainput', inputUserRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
