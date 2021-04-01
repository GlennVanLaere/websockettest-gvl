var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('emotions/emoji',{});
});

router.get('/live', function(req, res, next) {
  res.render('emotions/live',{});
});

module.exports = router;
