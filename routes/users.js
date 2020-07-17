var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('처음이에용:)');
});

router.get('/bbb', function(req, res, next) {
  res.send('hello:)');
});

module.exports = router;
