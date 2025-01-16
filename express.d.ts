import mongoose from "mongoose";
import { IJWTRequest } from "./interfaces/IJWTRequest";
import { JwtPayload } from "./interfaces/JWTPayload";

declare global {
    namespace Express {
      interface Request {
        user: {
            username:string;
            email:string
            id:mongoose.Types.ObjectId
        }
      }
    }
  }