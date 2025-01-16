import { Response, NextFunction } from "express";
import {jwtDecode} from 'jwt-decode';
const asyncHandler = require("express-async-handler");
import * as jwt from"jsonwebtoken";
import { JwtPayload } from "../interfaces/JWTPayload";

const validateToken = asyncHandler(async (req : JwtPayload, res: Response, next: NextFunction) => {
    let token;
    let authHeader: string;
    if(req.headers.authorization){
      authHeader  = req.headers.authorization;
    }
    else{
      authHeader = req.headers.Authorization as string
    }
  
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      res.status(401);
      throw new Error("User not authorized or token missing");
    }
  
    token = authHeader.split(" ")[1];
    try{
    
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as jwt.Secret) 
    const decodedPayload = jwtDecode<JwtPayload>(token);

   const {user}  = decodedPayload
      console.log("user ===",user )

    if(decoded ){
      req.user = user
      next();


    }else{
    res.status(401);
      throw new Error("User not authorized!");
    }
  }catch(e){
    console.log(e)
  }
    
  });

module.exports = validateToken;





// const token = 'YOUR_JWT_TOKEN_HERE';
// const decodedPayload = jwtDecode<JwtPayload>(token);

// console.log(decodedPayload.sub); // Access the 'sub' claim
// console.log(decodedPayload.name); // Access the 'name' claim
// // Access other claims as needed