const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';

/**
*@desc Update Token Auth
*@route PUT /api/auths/update
*@access public
*/

const updateAuth = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "forgot the user" });
});


module.exports = { updateAuth };


