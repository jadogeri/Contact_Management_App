const asyncHandler = require("express-async-handler");
import * as bcrypt from "bcrypt";
const  { User } = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';
import * as  jwt from "jsonwebtoken";

/**
*@desc Login user
*@route POST /api/users/login
*@access public
*/

const loginUser = asyncHandler(async (req : Request<{},{},IUser>, res: Response)  => {
    const { email, password } = req.body;
    console.log(email,password)
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ email });

    //compare password with hashedpassword
 
    if (user &&  await bcrypt.compare(password,user.password as string)) {
      let payload = {
        user: {
          username: user.username as string , email: user.email as string , id: user.id as string,
        },
      }
      
//post fix operator   knowing value cant be undefined
      let secretKey  = process.env.ACCESS_TOKEN_SECRET! ;
      const accessToken  =  jwt.sign( payload,secretKey,  { expiresIn: "15m" } );
      res.status(200).json({ accessToken });
 
    } else {
      console.log("line different pass")
      res.status(401);
      throw new Error("email or password is not valid");
    }
  });
  

module.exports = { loginUser };
