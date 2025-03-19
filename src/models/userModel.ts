
import mongoose, {  Model } from 'mongoose';
import { IUser } from "../interfaces/IUser";
import { userSchema } from '../schemas/userSchema';

const User: Model<IUser>  = mongoose.model<IUser>("User", userSchema);

export default User;

