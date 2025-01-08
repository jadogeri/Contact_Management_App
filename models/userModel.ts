import mongoose, { model, Schema, Model, Document } from 'mongoose';
import { IUser } from "../interfaces/IUser";

const userSchema : Schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add the user name"],
  },
  email: {
    type: String,
    required: [true, "Please add the user email address"],
    unique: [true, "Email address already taken"],
  },
  password: {
    type: String,
    required: [true, "Please add the user password"],
  },
},
  {
    timestamps: true,
  });

module.exports = mongoose.model<IUser>("User", userSchema);
