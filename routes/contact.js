var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');//
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sampleacc.shaji@gmail.com',
    pass: 'Sample_123#'
  }
});


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});


router.post('/', function(req, res, next) {
 
  var fullName = req.body.senderName;
  var email = req.body.senderEmail;
  var message = req.body.message;

  // send an email to the webmaster
  var mailOptions = {
    from: 'sampleacc.shaji@gmail.com',
    to: 'letzzzlearn@gmail.com',
    subject:'Contact Message from:  ' + fullName,
    text: 'Message:  ' + message + '\n From:  ' + email
  };
  transporter.sendMail(mailOptions, function(err, info){
    if (err){
      console.log(err);
      res.render('contact', {error:'Something went wrong!!!'});
    }
    else {
      console.log('Email sent!!!');
      res.render('contact', {message:'Message sent!!!'});
    }
  });

  
  
});



module.exports = router;
