const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Specification Form Validation',
    header: 'Specification Form Validation',
    content: {
      formClientUrl: '/form/client',
      formVendorUrl: '/form/vendor'
    }
  })
})

module.exports = router;