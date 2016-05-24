import nodemailer from 'nodemailer'

export const sendContact = (req, res) => {
  let user = process.env.GMAIL_USER
  let password = process.env.GMAIL_PASSWORD
  let transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com')
  let mailOptions = {
    from: '"Mitchell" <mitchell.allan.cox@gmail.com>',
    to: 'mitchell.allan.cox@gmail.com, trandian@gmail.com', 
    subject: '[BarBook] ' + req.body.name + ' has a question',
    text: req.body.content,
    html: '<p>Name: ' + req.body.name + '</p><p>Phone: ' + req.body.phone + '</p><p>Content: ' + req.body.content + '</p>'
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(500).json(error)
    }
    return res.status(200).json(info)
  })
}
