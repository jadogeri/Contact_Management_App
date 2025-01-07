import { Request } from "express"

interface IGetUserInfoRequest extends Request {
  user: User;
}



export default IGetUserInfoRequest;
