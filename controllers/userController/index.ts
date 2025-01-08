const { registerUser } = require("./registerUser");
const { loginUser } = require("./loginUser")
const { logoutUser } = require("./logoutUser")
const { forgotUser } = require("./forgotUser")
const { resetUser } = require("./resetUser")
const { deactivateUser }= require("./deactivateUser")







module.exports = { registerUser, loginUser, forgotUser, deactivateUser,
                   logoutUser, resetUser
}