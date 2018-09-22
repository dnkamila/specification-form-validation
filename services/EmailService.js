const TAG = 'EmailService'

const nodemailer = require('nodemailer')

exports.send = (to, subject, text, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.DEFAULT_CLIENT_EMAIL,
      pass: process.env.DEFAULT_CLIENT_EMAIL_PASSWORD,
    },
  })

  var mailOptions = {
    from: process.env.DEFAULT_CLIENT_EMAIL,
    to,
    subject,
    text,
    html,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(TAG, 'send', error)
    } else {
      console.log(TAG, 'send', 'response', info.response)
    }
  })
}

exports.generateOrderRequestEmail = (orderId, product) => {
  console.log(TAG, 'generateOrderRequestEmail', 'orderId', orderId, 'product', product)

  var content = ''
  content = `${content}Order Id : ${orderId}\n\n`
  content = `${content}Product Name : ${product.name}\n\n`

  Object.keys(product.detail).forEach((key) => {
    content = `${content + key} : ${product.detail[key]}\n`
  })

  return content
}
