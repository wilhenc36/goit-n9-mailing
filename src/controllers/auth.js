const service = require("../services/auth");

const signIn = async (req, res) => {
  try {
    const { success, result, message } = await service.signIn(req.body);

    if (!success) {
      return res.status(400).json({
        result,
        message,
      });
    }

    return res.status(201).json({
      result,
      message,
    });
  } catch (error) {
    return res.status(500).json({
        result: null,
        message: `There was an error when we were trying resgister the user. Error: ${error.message}`
    })
  }
};

module.exports = {
  signIn,
};
