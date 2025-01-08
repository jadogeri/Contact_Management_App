const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';

/**
*@desc Deactivate a user
*@route POST /api/users/deactivate
*@access public
*/

const deactivateUser = asyncHandler(async (req: Request<{}, {} ,IUser>, res : Response) => {

  res.json({ message: "delete the user" });
});


module.exports = { deactivateUser };


