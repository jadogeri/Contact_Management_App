const express = require("express");

const { registerUser, loginUser, logoutUser, resetUser, forgotUser, deactivateUser, currentUser } = require("../controllers/userController/index");

const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

/**
 * @swagger
 * api/users/login:
 *   post:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post("/login",loginUser);

/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: Successful operation
 */
router.delete("/deactivate", deactivateUser);

router.post("/reset", resetUser);

router.post("/forgot", forgotUser);

router.post("/logout",validateToken, logoutUser);


router.get("/current", validateToken, currentUser);

module.exports = router;


