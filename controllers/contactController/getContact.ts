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


module.exports = { getContact };

