const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Add Auth Token
*@route POST /api/auths/add
*@access public
*/

const addAuth = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "add the auth token" });
});


module.exports = { addAuth };

