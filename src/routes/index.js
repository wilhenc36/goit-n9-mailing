const { Router } = require("express")
const usersRouter = require("./users")
const authRouter = require("./auth");

const mainRouter = Router();

module.exports = () => {
    mainRouter.use("/auth", authRouter());
    mainRouter.use("/users", usersRouter());

    return mainRouter
}