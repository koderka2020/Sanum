nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  auth: {
    user: 'cohort41.photobooth@gmail.com',
    pass: 'idrbmujtnboeefxv'
  }
  
  });
  
  const mailOptions = (email, body = 'Testing email') => {
    return {
      from: 'photobooth@gmail.com',
      to: email,
      subject: 'Here is your quote',
      text: body
    }
  };
  
  
  
  module.exports = { transporter, mailOptions };
  
  
  
  // pass: 'dontF0rg3t123@'