const express = require("express");

const { getAuth, deleteAuth, addAuth, updateAuth} = require("../controllers/authController/index");

const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.get("/get", getAuth);

router.delete("/delete", deleteAuth);

router.post("/add", addAuth);

router.put("/update", updateAuth);


module.exports = router;


