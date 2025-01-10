const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Delete Auth Token
*@route POST /api/auths/delete
*@access public
*/

const deleteAuth = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "delete the auth token" });
});


module.exports = { deleteAuth };


