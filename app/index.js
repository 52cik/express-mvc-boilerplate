const fs = require('fs');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// require('./models'); // 预加载所有模型

const cfg = require('./config'); // 全局配置

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'web', 'favicon.png')));

// request logger
if (app.get('env') === 'development') {
  app.use(require('morgan')('dev'));
}

app.use(bodyParser.json({ limit: cfg.jsonLimit }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 静态资源应该移除，有第三方cdn处理
app.use(express.static(path.join(__dirname, 'web'))); // 静态资源

// auto apply routers
const ctrlPath = path.join(__dirname, 'controllers');
const controllers = fs.readdirSync(ctrlPath);
controllers.forEach(function (ctrl) {
  if (/\.js$/i.test(ctrl)) {
    require(path.join(ctrlPath, ctrl))(app);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

module.exports = app;
