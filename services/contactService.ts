import mongoose from "mongoose";
import Contact from "../models/contactModel";
import { IContact } from "../interfaces/IContact";
import { JwtPayload } from "../interfaces/JWTPayload";
async function getById(id : mongoose.Types.ObjectId) {
    return Contact.findOne({ id : id });
  }
  async function getAll(req : JwtPayload) {
    return Contact.find({ user_id : req.user.id });
  }
async function getByToken(token : string) {
  return Contact.findOne({ token : token });
}

async function create(contact : IContact) {
  return  Contact.create(contact);
}

async function update(contact : IContact) {
    return Contact.updateOne({ id : contact.user_id}, // Filter
                          {$set: {...contact }}, // Update
                          {upsert: true});
}

async function remove(token : string) {
  return Contact.findOneAndDelete({ token : token });
}

export { getById, getByToken, create, update, remove, getAll };

