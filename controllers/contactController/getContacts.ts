const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Get All Contacts
*@route GET /api/contacts/get
*@access public
*/

export const getContacts = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "get all contacts" });
});


module.exports = { getContacts };

