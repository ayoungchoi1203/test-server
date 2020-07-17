var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '고객관리시스템' });
});

router.get('/a1', function(req, res, next) {
  res.render('work1_1', { title: '고객관리시스템' });
});

router.get('/a2', function(req, res, next) {
  res.render('work1_2', { title: '관리자관리시스템' });
});

router.get('/a3', function(req, res, next) {
  res.render('work4_1', { title: '관리자관리시스템' });
});

module.exports = router;
