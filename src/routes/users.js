const { Router } = require("express")
const { getUsers } = require("../controllers/users")

const usersRouter = Router();

module.exports = () => {
    usersRouter.get("/", getUsers);

    return usersRouter
}