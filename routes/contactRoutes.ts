import * as express from "express";
const router = express.Router();
import { getContacts, createContact, getContact, updateContact, deleteContact } from "../controllers/contactController/index";
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;





