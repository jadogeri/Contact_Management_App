const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Update All Contacts
*@route PUT /api/contacts/update
*@access public
*/

export const updateContact = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "get all contacts" });
});



