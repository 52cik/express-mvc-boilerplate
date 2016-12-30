'use strict';

const router = require('express').Router();

// apply router
module.exports = function (app) {
  app.use('/', router);
};


/* GET home page. */
router.get('/', function (req, res) {
  res.render('home/index', { title: 'Express' });
});
