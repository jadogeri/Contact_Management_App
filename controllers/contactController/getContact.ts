const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Get  Contacts
*@route GET /api/contacts/get
*@access public
*/

export const getContact = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "add the auth token" });
});




/**
 //@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id !== req.user.id) {
    res.status(403);
    throw new Error("User unauthorized for this operation");
  }

  res.status(200).json(contact);
});

 */
