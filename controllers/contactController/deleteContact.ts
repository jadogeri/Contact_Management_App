const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';

/**
*@desc Delete a contact
*@route DELETE /api/contacts/:id
*@access public
*/

export const deleteContact = asyncHandler(async (req: Request, res : Response) => {

  res.json({ message: "add the auth token" });
});



/**
 * 
 //@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }
  await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};



 */