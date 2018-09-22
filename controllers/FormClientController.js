var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('form-client', {
    title: 'Form Client',
    header: 'Form Client'
  })
})

module.exports = router;