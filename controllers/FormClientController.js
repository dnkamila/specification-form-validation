const router = require('express').Router()
const uuid = require('uuid/v1')

const Order = require('../db/models').order
const Product = require('../db/models').product

const EmailService = require('../services/EmailService')

router.get('/', (req, res) => {
  Product.findAll().then(products => {
    const orderId = uuid().replace(/-/g, '')
    res.render('form-client', {
      'title': 'Form Client',
      'header': 'Form Client',
      'content': {
        'orderId': orderId,
        'products': products
      }
    })
  })
})

router.post('/', (req, res) => {
  const orderId = req.body.orderId
  const purchaseCode = req.body.purchaseCode
  const productCode = req.body.productCode
  const vendorEmail = req.body.vendorEmail
  const vendorProductDetail = req.body.vendorProductDetail || JSON.stringify(JSON.parse('{}'))

  Order.create({
    id: orderId,
    purchase_code: purchaseCode,
    product_code: productCode,
    vendor_email: vendorEmail,
    vendor_product_detail: vendorProductDetail
  }).then(order => {
    Product.findOne({
      where: {
        code: productCode
      }
    }).then(product => {
      const emailContent = EmailService.generateOrderRequestEmail(order.id, product)
      EmailService.send(vendorEmail, 'Order Request of Product', emailContent)

      res.render('form-redirect', {
        title: 'Form Redirect',
        header: 'Form Client Submission',
        content: {
          message: `Order with order id [${orderId}] has been submitted. Email has been sent to vendor [${vendorEmail}]`,
          redirectUrl: '/form/client'
        },
        footer: 'Thank You'
      })
    })
  })
})

module.exports = router