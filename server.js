var createError = require('http-errors');
var express = require('express');
var methodOverride = require('method-override');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var home =  require('./routes/home')
var tacos = require('./routes/tacos');
var piroshkis = require('./routes/piroshkis');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //joins views to the end of root directory 
app.set('view engine', 'ejs');

//Middleware
app.use(logger('dev')); 
app.use(express.json()); //body-parser
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //joins static(public) files to root directory
app.use(methodOverride('_method'));


// when using a router, the first  parameter here is where we want to use the routes.
app.use('/', home);
app.use('/', tacos); 
app.use('/', piroshkis);

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
