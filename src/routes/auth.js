const { Router } = require("express");
const { signIn } = require("../controllers/auth")

const authRouter = Router();

module.exports = () => {
    authRouter.post("/sign-in", signIn)

    return authRouter;
}