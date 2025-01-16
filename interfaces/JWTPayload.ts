import mongoose from "mongoose";
import { Request } from "express";

export interface JwtPayload extends Request {
  user:{
    username:string;
    email:string
    id:mongoose.Types.ObjectId

  }
  // Add other claims as needed
}