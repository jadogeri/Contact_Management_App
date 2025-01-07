const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController/contactController");
const { getContactsTS } = require("../controllers/contactController/getContactsTS");
const validateToken = require("../middleware/validateTokenHandler");


router.get("/getcontacts",getContactsTS)

router.use(validateToken);

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
