const nodemailer = require('nodemailer');
const fs = require('fs')
const { templateVerifyEmail } = require('./templateVerifyEmail.js')
const { templateVerifyEmailToResetPassword } = require('./templateVerifyEmailToResetPassword.js')

async function verifyAccountEmail(user, token) {
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_SERVER_USER,
      pass: process.env.SMTP_SERVER_PASS,
    },
  });

  /*   const token = jwt.sign({ email: user.email}, process.env.TOKEN_SECRET); */
  /*   const urlConfirm = `${process.env.APIGATEWAY_URL}/auth/local/validate-email/${token}` */

  const urlConfirm = `https://clens.netlify.app/validation-email/${token}`
  // send mail with defined transport object
  await transporter.sendMail({
    from: '"Clens - El mejor servicio al mejor precio 👻" <no-reply@clens.com>', // sender address
    to: user.email, // list of receivers
    subject: 'Correo de Verificacion ✔', // Subject line
    text: 'Texto de confirmacion en formato texto', // plain text body
    html: templateVerifyEmail(user, urlConfirm), // html body
  });

  // console.log("Message sent: %s", info.messageId);
  // console.log("token:", token);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>;
}

async function verifyEmailToResetPassword(user, token) {
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_SERVER_USER,
      pass: process.env.SMTP_SERVER_PASS,
    },
  });

  /*   const token = jwt.sign({ email: user.email}, process.env.TOKEN_SECRET); */
  /*   const urlConfirm = `${process.env.APIGATEWAY_URL}/auth/local/validate-email/${token}` */

  const urlConfirm = `https://clens.netlify.app/reset-password/${token}`
  // send mail with defined transport object
  await transporter.sendMail({
    from: '"Clens - El mejor servicio al mejor precio 👻" <no-reply@clens.com>', // sender address
    to: user.email, // list of receivers
    subject: 'Correo de Cambio de contraseña ✔', // Subject line
    text: 'Texto de confirmacion en formato texto', // plain text body
    html: templateVerifyEmailToResetPassword(user, urlConfirm), // html body
  });

  // console.log("Message sent: %s", info.messageId);
  // console.log("token:", token);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>;
}

async function pustulaEmail(data, files) {
  const photo = fs.readFileSync(files[0].path);
  const antecedentes = fs.readFileSync(files[1].path);
  const constancia = fs.readFileSync(files[2].path);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_SERVER_USER,
      pass: process.env.SMTP_SERVER_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Clens - El mejor servicio al mejor precio 👻" <no-reply@clens.com>',
    to: 'alonsogarayp@gmail.com, gilberthuarcaya@gmail.com, cajavi89@gmail.com',
    subject: 'Correo de postulacion',
    text: 'Texto de confirmacion en formato texto',
    html: `Nombre Completo: ${data.fullname} <br>
           Direccion: ${data.direccion} <br>
           Email: ${data.email} <br>
           Celular: ${data.celular} <br>
           identificacion: ${data.identificacion}`,
    attachments: [
      {
        content: photo,
        filename: 'Photo-postula.jpg',
        type: 'application/jpg',
        disposition: 'attachment',
        content_id: 'mytext',
      },
      {
        content: antecedentes,
        filename: 'Antecedentes-penales.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
        content_id: 'mytext',
      },
      {
        content: constancia,
        filename: 'Constancia-no-adeudo.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
        content_id: 'mytext',
      },
    ]
  });
}

module.exports = {
  verifyAccountEmail,
  verifyEmailToResetPassword,
  pustulaEmail
};
