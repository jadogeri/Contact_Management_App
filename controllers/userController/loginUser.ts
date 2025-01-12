const asyncHandler = require("express-async-handler");
import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';
import * as  jwt from "jsonwebtoken";
import { IAuth } from "../../interfaces/IAuth";
import api from "../../configs/axios";
import User from "../../models/userModel";
import Auth from '../../models/authModel';

/**
*@desc Login user
*@route POST /api/users/login
*@access public
*/

const loginUser = asyncHandler(async (req : Request<{},{},IUser>, res: Response)  => {

      /**
    #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/components/schemas/IUser" }
    }
     */
  try{
    const { email, password } = req.body;
    console.log(email,password)
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    console.log(typeof User)
    const user = await User.findOne({ email });

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
      const authenticatedUser = await Auth.findOne({ id : user._id });

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
      console.log("line different pass")
      res.status(401);
      throw new Error("email or password is not valid");
    }

  }catch(e){
    console.log(e)
  }
  });
  

module.exports = { loginUser };



