var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    home: true
  });
});

router.get('/gear', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    gear: true, 
  });
});

router.get('/schedule', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    schedule: true, 
  });
});

router.get('/contact-us', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    contact: true, 
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    home: true 
  });
});

router.get('/liveliness', function(req, res, next) {
  res.write('alive');
  res.end();
});


module.exports = router;
