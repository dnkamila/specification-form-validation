const router = require('express').Router()

const ProductAttribute = require('../db/models').product_attribute

router.get('/:id', (req, res) => {
  const id = req.params.id

  ProductAttribute.findOne({
    where: {
      id: id
    }
  }).then(productAttribute => {
    res.json(productAttribute)
  })
})

module.exports = router;