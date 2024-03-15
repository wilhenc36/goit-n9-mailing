const { sgMail } = require("../utils/sendgrid");

const signIn = async (data) => {
  try {
    const msg = {
      from: '"E-commerce GOIT 👻" <wilhencruz3652@gmail.com>', // sender address
      to: "wilhencruz36@yahoo.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Welcome to our e-commerce", // plain text body
      //html: "<b>Hello world?</b>", // html body
    };

    const info = await sgMail.send(msg)
      
    console.log(info);

    return {
      success: true,
      result: null,
      message: `User was registered successfully.`,
    };
  } catch (error) {
    return {
      success: false,
      result: null,
      message: `There was an error when we were trying resgister the user. Error: ${error.message}`,
    };
  }
};

module.exports = {
  signIn,
};
