
import mongoose, { model, Schema, Model, Document } from 'mongoose';
import { IUser } from "../interfaces/IUser";

type UserModel = Model<IUser>

const userSchema : Schema = new Schema<IUser, UserModel>({
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

module.exports = mongoose.model<IUser, UserModel>("User", userSchema);
//module.exports = mongoose.model("User", userSchema);

