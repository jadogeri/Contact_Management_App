const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Delete a contact
*@route DELETE /api/contacts/remove
*@access public
*/

const deleteContact = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "add the auth token" });
});


module.exports = { deleteContact };

