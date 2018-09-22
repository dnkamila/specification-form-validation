const TAG = 'FormVendorController'

const router = require('express').Router()

const Order = require('../db/models').order
const Product = require('../db/models').product
const ProductAttribute = require('../db/models').product_attribute

const EmailService = require('../services/EmailService')

router.get('/', (req, res) => {
  ProductAttribute.findAll({
    attributes: ['id', 'name']
  }).then(productAttributes => {
    res.render('form-vendor', {
      title: 'Form Vendor',
      header: 'Form Vendor',
      content: {
        productAttributes: productAttributes
      }
    })
  })
})

router.post('/', (req, res) => {
  const orderId = req.body.orderId
  const vendorEmail = req.body.vendorEmail
  var vendorProductDetailJSON = {}

  Object.keys(req.body).forEach((key) => {
    if (key.includes('attribute')) {
      vendorProductDetailJSON[key.split('_')[1]] = req.body[key]
    }
  })
  const vendorProductDetail = JSON.stringify(vendorProductDetailJSON)

  Order.update(
    { vendor_product_detail: vendorProductDetailJSON },
    { returning:true, where: {id: orderId} }
  ).then(([_, [order]]) => {
    console.log(TAG, 'POST', '/', 'order', order)
    Product.findOne({
      where: {
        code: order.product_code
      }
    }).then(product => {
      const originProductDetailJSON = product.detail

      const emailContent = EmailService.generateOrderSubmissionEmail(orderId, vendorEmail, originProductDetailJSON, vendorProductDetailJSON)
      EmailService.send(process.env.DEFAULT_CLIENT_EMAIL, 'Order Submission of Product', '', emailContent)

      res.render('form-redirect', {
        title: 'Form Redirect',
        header: 'Form Vendor Submission',
        content: {
          message: `Order with order id [${orderId}] has been submitted by vendor [${vendorEmail}]. Email has been sent to client [${process.env.DEFAULT_CLIENT_EMAIL}]`,
          redirectUrl: '/form/vendor'
        },
        footer: 'Thank You'
      })
    })
  })
})

module.exports = router;