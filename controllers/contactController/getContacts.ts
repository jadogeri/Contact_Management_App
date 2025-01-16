const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import * as contactService from"../../services/contactService"
import { JwtPayload } from '../../interfaces/JWTPayload';


/**
*@desc Get All Contacts
*@route GET /api/contacts/get
*@access public
*/

export const getContacts = asyncHandler(async (req : JwtPayload, res: Response)  =>  {

  console.log("user extracted from jwt token === ",JSON.stringify(req.user,null,3))
  if(req.user){
    const contacts = await contactService.getAll(req);
    console.log(JSON.stringify(contacts,null,3))    
    res.status(200).json(contacts);
  }
  else{
  res.status(400).json({ message: "Invalid User" });
  }

});



