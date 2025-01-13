const asyncHandler = require("express-async-handler");
import * as bcrypt from "bcrypt";
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';
import * as  jwt from "jsonwebtoken";
import { IAuth } from "../../interfaces/IAuth";
import api from "../../configs/axios";
import * as userService from"../../services/userService"
import * as authService from"../../services/authService"

import { errorBroadcaster } from "../../utils/errorBroadcaster";

/**
*@desc Login user
*@route POST /api/users/login
*@access public
*/

const loginUser = asyncHandler(async (req : Request<{},{},IUser>, res: Response)  => {

  try{
    const { email, password } = req.body;
    console.log(email,password)
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");

    }
    const user  = await userService.get(email as string);
    
    //compare password with hashedpassword 
    if (user &&  await bcrypt.compare(password,user.password as string)) {
      let payload = {
        user: {
          username: user.username as string , email: user.email as string , id: user._id ,
        },
      }
      
//post fix operator   knowing value cant be undefined
      let secretKey  = process.env.ACCESS_TOKEN_SECRET! ;
      const accessToken  =  jwt.sign( payload,secretKey,  { expiresIn: "15m" } );
      //add token and id to auth 
      const authData : IAuth = {
        id : user._id,
        token : accessToken
      }

      try{
        
      const authenticatedUser = await authService.getById(user._id);

      if(!authenticatedUser){
        console.log("user does mot exist ")

        const response = await api.post(process.env.BASE_URL+"/api/auths/add",authData,
          {
            headers:{
              Authorization : `Bearer ${accessToken}`
            }
          }
        )
        console.log(response.data)

      }
      else{
        console.log("user found ")

        const response = await api.put(process.env.BASE_URL+"/api/auths/update",authData,
          {
            headers:{
              Authorization : `Bearer ${accessToken}`
            }
          }
        )
        console.log(response.data)

      }


      }catch( e){

        console.log(e)
      }
      res.status(200).json({ accessToken });
 
    } else {
      errorBroadcaster(res, 401, "email or password is not valid")

    }

  }catch(e){
    console.log(e)
  }
  });
  

module.exports = { loginUser };



