var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

  console.log(req.body)

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  
  var obj = {
    to: 'camila.antenuchi@gmail.com',
    subject: 'Contacto desde la web',
    html: name + " " + " quiere que se le envie informacion a: " + email + ". <br> Ademas, hizo el siguiente comentario: " + message
  }
}
)

module.exports = router;
