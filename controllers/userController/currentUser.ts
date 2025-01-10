const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';

/**
*@desc Current user info
*@route POST /api/users/current
*@access private
*/

interface CurrenntData extends Request{

  user: {
    email?: string,
    id? :string,
    username? :string
  }
}


const currentUser = asyncHandler(async (req : CurrenntData, res: Response) => {
  console.log(req.user)
  res.status(200).json(req.user);
});

module.exports = {  currentUser };


