const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_NODEMAILER,
      pass: process.env.PASS_EMAIL_NODEMAILER,
    },
  });

  module.exports = {
    transporter
  }