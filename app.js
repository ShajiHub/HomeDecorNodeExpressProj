var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');




var indexRouter = require('./routes/index');
var plantsRouter = require('./routes/plants');
var lightsRouter = require('./routes/lights');
var othersRouter = require('./routes/others');

var contactRouter = require('./routes/contact');
var signupRouter = require('./routes/signup');
var profileRouter = require('./routes/profile');
var logoutRouter = require('./routes/logout');
var loginRouter = require('./routes/login');
var resetpassRouter = require('./routes/resetpass');

//plants list
var tropicalRouter = require('./routes/tropical');
var cactiRouter = require('./routes/cacti');
var herbsRouter = require('./routes/herbs');

//buy
var buyRouter = require('./routes/buy');

const nocache = require('nocache');//--

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set('view options', { locals: { scripts: ['cactiscript.js'] } });  

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'LetItBeeeSecret'}));// for session

app.use(nocache());

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/plants', plantsRouter);
app.use('/lights', lightsRouter);
app.use('/others', othersRouter);
app.use('/signup', signupRouter);
app.use('/profile', profileRouter);
app.use('/logout', logoutRouter);
app.use('/login', loginRouter);
app.use('/resetpass', resetpassRouter)

//plants list
app.use('/tropical', tropicalRouter);
app.use('/cacti', cactiRouter);
app.use('/herbs', herbsRouter);

app.use('/buy', buyRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
