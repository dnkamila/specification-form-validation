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

exports.generateOrderSubmissionEmail = (orderId, vendorEmail, originProductDetail, vendorProductDetail) => {
  console.log(TAG, 'generateOrderSubmissionEmail', 'orderId', orderId, 'vendorEmail', vendorEmail, 'originProductDetail', originProductDetail, 'vendorProductDetail', vendorProductDetail)

  var content = `<h3>Order Id : ${orderId}</h3>`

  content = `${content}<p>vendor [${vendorEmail}] has submitted order</p>`

  content = `${content}<table border="1">`
  content = `${content
      }<tr>` +
    '<th>key</th>' +
    '<th>pertamina - request</th>' +
    '<th>vendor - submission</th>' +
    '</tr>'
  Object.keys(originProductDetail).forEach((key) => {
    content = `${content}<tr>`
    content = `${content}<td>${key}</td>`
    content = `${content}<td>${originProductDetail[key]}</td>`
    if (originProductDetail[key] != vendorProductDetail[key]) {
      content = `${content}<td><span style="color:red">${vendorProductDetail[key]}</span></td>`
    } else {
      content = `${content}<td>${vendorProductDetail[key]}</td>`
    }
    content = `${content}</tr>`
  })
  content = `${content}</table>`

  return content
}