import mongoose from "mongoose";
import { JwtPayload } from "./JWTPayload";
export interface IContactCreateRequest extends JwtPayload{

  
  id : mongoose.Types.ObjectId  
  email: string
  name : string
  phone : string
  fax?:string

}
