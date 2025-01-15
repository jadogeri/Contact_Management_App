const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Add Auth Token
*@route POST /api/contact/create
*@access public
*/

export const createContact = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "created a contact" });
});



module.exports = { createContact };

