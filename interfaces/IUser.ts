import { JwtPayload } from "./IJWTPayload";

export interface IUser extends Document {
    username?: string;
    email?: string;
    password? : string

}
