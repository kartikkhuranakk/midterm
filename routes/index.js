var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    firstName: 'Kartik',
    message: 'Hi'
  });
});
  router.get('/', function(req, res, next) {
  res.render('index', {
    lastName: 'Khurana',
    message: 'There'
  });
  router.get('/', function(req, res, next) {
  res.render('index', {
    Number: '008',
    message: 'Unique no'
  });
  router.get('/player', function(req, res, next) {
  // load the register.ejs view
  res.render('player');
});
module.exports = router;