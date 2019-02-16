var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getUserInfo', function(req, res, next) {
	console.log('请求成功！')
	res.status(200).send({
		code: 200,
		dara: {
			name: 'Suncheng'
		}
	})
})

module.exports = router;
