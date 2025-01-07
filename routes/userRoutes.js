const express = require("express");
const {
  
  currentUser,
  loginUser,
} = require("../controllers/userController/userController");
const { registerUser } = require("../controllers/userController/index");

const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;


