const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.API_KEY_SENDGRID);

module.exports = {
  sgMail,
};
