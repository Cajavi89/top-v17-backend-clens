
require('dotenv').config();
const nodemailer = require("nodemailer");
const {templateVerifyEmail} = require('./templateVerifyEmail.js')

async function verifyAccountEmail(data) {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.SMTP_SERVER_USER, 
      pass: process.env.SMTP_SERVER_PASS, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Clens - El mejor servicio al mejor precio 👻" <no-reply@clens.com>', // sender address
    to: data.email, // list of receivers
    subject: "Correo de Verificacion ✔", // Subject line
    text: "Texto de confirmacion en formato texto", // plain text body
    html: templateVerifyEmail(data), // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  console.log('data del EMAILER:',templateVerifyEmail(data));
}

module.exports = {verifyAccountEmail};
