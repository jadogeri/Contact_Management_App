const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';

/**
*@desc Forgot a user
*@route POST /api/users/logout
*@access public
*/

const forgotUser = asyncHandler(async (req: Request<{}, {} ,IUser>, res : Response) => {

  res.json({ message: "forgot the user" });
});


module.exports = { forgotUser };


