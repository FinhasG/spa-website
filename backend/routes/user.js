const express = require("express");
const router = express.Router();
const nodemailer=require('nodemailer')

router.post("/client-information", (req, res) => {
  const { email,subject,message } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arrowrq2nml13218835finhas@gmail.com",
      pass: "ueaa mqqr wanm rjhg",
    },
  });

  var mailOptions = {
    from: email,
    to: "arrowrq2nml13218835finhas@gmail.com",
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json("Email sent: " + info.response);
    }
  });
});

module.exports=router;