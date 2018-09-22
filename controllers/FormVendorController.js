var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('form-vendor', {
    title: 'Form Vendor',
    header: 'Form Vendor'
  })
})

module.exports = router;