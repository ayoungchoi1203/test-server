var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('이건 세번째 branch야;;;;;');
});

router.get('/bbb', function(req, res, next) {
  res.send('hello:)');
});

module.exports = router;
