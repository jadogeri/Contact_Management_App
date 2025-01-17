const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
const User = require("../../models/userModel");
import { Response, Request } from 'express';

/**
*@desc Update  Contact
*@route PUT /api/contacts/:id
*@access private
*/

export const updateContact = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "get all contacts" });
});

/**
 * 
   const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

 */

