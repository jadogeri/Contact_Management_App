const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';

/**
*@desc Logouy a user
*@route POST /api/users/logout
*@access public
*/

const logoutUser = asyncHandler(async (req: Request<{}, {} ,IUser>, res : Response) => {

  res.json({ message: "logout the user" });
});


module.exports = { logoutUser };


