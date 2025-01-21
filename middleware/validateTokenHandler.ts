import { Response, NextFunction } from "express";
import {jwtDecode} from 'jwt-decode';
const asyncHandler = require("express-async-handler");
import * as jwt from"jsonwebtoken";
import { IJwtPayload } from "../interfaces/IJWTPayload";

const validateToken = asyncHandler(async (req : IJwtPayload, res: Response, next: NextFunction) => {
  let token;
  let authHeader = req.headers.authorization as string;
  
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(401);
    throw new Error("User not authorized or token missing");
  }
  else{

    token = authHeader.split(" ")[1];  
    
    const decoded =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as jwt.Secret)

    const decodedPayload =  jwtDecode<IJwtPayload>(token);

    const {user}  = decodedPayload
    console.log("user ===",user )

    if(decoded ){
      req.user = user
      next();


    }else{
      res.status(401);
      throw new Error("User not authorized!");
    }
  }
});

module.exports = validateToken;



