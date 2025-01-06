import { Request } from "express"
const User = require( "../entities/User")

interface IGetUserAuthInfoRequest extends Request {
  user: User;
}



export default IGetUserAuthInfoRequest;
/*
import { Response } from "express"
import { IGetUserAuthInfoRequest } from "./definitionfile"

app.get('/auth/userInfo', validateUser,  (req: IGetUserAuthInfoRequest, res: Response) => {
  res.status(200).json(req.user); // Start calling status function to be compliant with Express 5.0
});

*/