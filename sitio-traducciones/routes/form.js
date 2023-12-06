var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

router.post('/form', async (req, res, next) => {

  console.log(req.body)

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  
  var obj = {
    to: 'camila.antenuchi@gmail.com',
    subject: 'Contacto desde la web',
    html: name + " " + " quiere que se le envie informacion a: " + email + ". <br> Ademas, hizo el siguiente comentario: " + message
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS 
    }
  })

   var info = await transporter.sendMail(obj);

  res.render ('form', {
    message: 'Su mensaje se envio correctamente',
  });

});

module.exports = router;
