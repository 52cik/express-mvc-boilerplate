'use strict';

const router = require('express').Router();

// apply router
module.exports = function (app) {
  app.use('/users', router);
};


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
