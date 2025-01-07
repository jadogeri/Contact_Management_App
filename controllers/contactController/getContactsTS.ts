const asyncHandler = require("express-async-handler");
import { Response } from 'express';
const Contact = require("../../models/contactModel");
import IGetUserAuthInfoRequest from '../../interfaces/IGetUserAuthInfoRequest';

/** 
*@desc Get all contacts
*@route GET /api/contacts
*@access private
*/

const getContactsTS = asyncHandler(async (req: IGetUserAuthInfoRequest, res: Response) => {
  //const contacts = await Contact.find({ user_id: req.user.getID() });
 // res.status(200).json(contacts);
 res.status(200).json({message : "success get "})
});



module.exports = {  getContactsTS };
