var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const searchAndPrintBooks = require('./services/search-jobs');
const getDocument = require("./services/search-tours");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(async (req, res, next) => {
  let news = [];
  const page = 0;  
  const index = 0;
  const pageLength = 2;

  try {
    await searchAndPrintBooks('developer').then(data => {
      news = data[page].slice(index, pageLength)
    })
  } catch (error) {
    
  }

  res.locals.news = news; 
  return next();
});

app.use(async ( req, res, next ) => {
  let tours = [];
  try {
    await getDocument()
    .then(data => {
      tours = data;
    })
    .catch(err => {
      console.log('getDocument error', err)
    })
  } catch (error) {
    console.log(error.message)
  }
  res.locals.tours = tours
  return next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
