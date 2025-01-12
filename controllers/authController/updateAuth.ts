const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IAuth } from '../../interfaces/IAuth';
import Auth from '../../models/authModel';

/**
*@desc Update Token Auth
*@route PUT /api/auths/update
*@access private
*/

const updateAuth = asyncHandler(async (req : Request<{},{},IAuth>, res : Response) => {

  const auth = req.body;
  try{
    await Auth.updateOne({ "id": auth.id}, // Filter
                         {$set: {"token": auth.token}}, // Update
                         {upsert: true});
    res.json({ message: `aupdated auth token of user id = ${auth.id}`});
  }catch(e){
    console.log(e);
  }
});


module.exports = { updateAuth };



 // add document with req.body._id if not exists 
