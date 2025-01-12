const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IAuth } from '../../interfaces/IAuth';
import Auth from '../../models/authModel';

/**
*@desc Add Auth Token
*@route POST /api/auths/add
*@access private
*/

const addAuth = asyncHandler(async (req : Request<{},{},IAuth>, res : Response) => {

  const auth = req.body;
  try{
    await Auth.create(auth);
    res.json({ message: "add the auth token", data: JSON.stringify(auth) });
  }catch(e){
    console.log(e);
}
});


module.exports = { addAuth };

