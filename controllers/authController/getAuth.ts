const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';

/**
*@desc retrieve token Auth
*@route GET /api/auths/get
*@access public
*/

const getAuth = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "get token auth" });
});


module.exports = { getAuth };


