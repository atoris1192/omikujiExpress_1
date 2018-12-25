var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/random', (req, res, next) => {
  const results = ['大吉', '中吉', '末吉', '凶']
  let random = Math.floor(Math.random() * ( 1+results.length ))
  let item = results[random]
  const data = { item }
  res.json(data)
})

module.exports = router;
