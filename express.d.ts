import mongoose from "mongoose";
import { IJWTRequest } from "./interfaces/IJWTRequest";
import { JwtPayload } from "./interfaces/IJWTPayload";
import { IUser } from "./interfaces/IUser";
import { IUserReset } from "./interfaces/IUserReset";

declare global {
    namespace Express {
      interface Request {
        user: {
            username:string;
            email:string
            id:mongoose.Types.ObjectId
        },
        body: IUser | IUserReset | 
      }
    }
  }