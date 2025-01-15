const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Delete All Contacts
*@route DELETE /api/contacts/remove
*@access public
*/

export const deleteContacts = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "add the auth token" });
});


module.exports = { deleteContacts };

