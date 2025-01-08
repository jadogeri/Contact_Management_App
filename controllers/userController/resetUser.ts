const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';

/**
*@desc Reset a user
*@route PUT /api/users/reset
*@access public
*/

const resetUser = asyncHandler(async (req: Request<{}, {} ,IUser>, res : Response) => {

  res.json({ message: "logout the user" });
});


module.exports = { resetUser };


