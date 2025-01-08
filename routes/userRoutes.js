const express = require("express");

const { registerUser, loginUser, logoutUser, resetUser, forgotUser, deactivateUser } = require("../controllers/userController/index");

const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/deactivate", deactivateUser);

router.post("/reset", resetUser);

router.post("/forgot", forgotUser);

router.post("/logout", logoutUser);


//router.get("/current", validateToken, currentUser);

module.exports = router;


