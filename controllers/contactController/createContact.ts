const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IContact } from "../../interfaces/IContact";
import * as contactService from"../../services/contactService"
import { IContactCreateRequest } from "../../interfaces/IContactCreateRequest";


/**
*@desc Add Auth Token
*@route POST /api/contact/create
*@access public
*/

export const createContact = asyncHandler(async (req: IContactCreateRequest, res : Response)  => {
  try{
  const { name, email, phone, fax } = req.body;
if(req){
  console.log("user data === ",name,email,phone)

 if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  else{
    //create new contact user
   
    
    const contact : IContact = {
      name: name,
      email : email,
      phone:phone,
      fax:fax,
      user_id:      req?.user?.id  as any
    }

   let status = await contactService.create(contact)
   console.log(status)

    res.status(201).json(contact);

  }

}

}catch(e){
  console.log(e)
}
});






