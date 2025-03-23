import  mongoose, { Schema } from 'mongoose';
import { IContact } from '../interfaces/IContact';

export const contactSchema : Schema = new Schema<IContact>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
      unique: [true, "Email address already taken"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number"],
      trim: true,

    },
    fax: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);







