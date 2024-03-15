const service = require("../services/users")

const getUsers = (req, res) => {
    const result = service.getUsers()

    res.json(result)
}

module.exports = {
    getUsers
}