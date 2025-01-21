/**
 * @author Joseph Adogeri
 * @version 1.0
 * @since 18-JAN-2025
 *
 */

const asyncHandler = require("express-async-handler");
import {hash} from "bcrypt";
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';
import * as userService from "../../services/userService"
import { errorBroadcaster } from "../../utils/errorBroadcaster";

/**
*@desc Register a user
*@route POST /api/users/register
*@access public
*/

export const registerUser = asyncHandler(async (req: Request<{}, {} ,IUser>, res : Response) => {
  

  const { username, email, password } = req.body;
  // #swagger.tags = ['User'] // Tag this route with 'Users'
    // #swagger.summary = 'Get all users'
  if (!username || !email || !password) {
    errorBroadcaster(res,400,"All fields are mandatory!")
  }
  
  const userByEmailAvailable  = await userService.getByEmail(email as string);
  if (userByEmailAvailable) {
    errorBroadcaster(res,400,"User already registered!");
  }
  const userByUsernameAvailable  = await userService.getByUsername(username as string);
  if (userByUsernameAvailable) {
    errorBroadcaster(res,400,"Username already taken!");
  }
  
  //Hash password
  const hashedPassword : string = await hash(password as string, parseInt(process.env.SALT_ROUNDS as string));
  console.log("Hashed Password: ", hashedPassword);
  const user = await userService.create(username!,email!,hashedPassword)  
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json(user);
  }else{
    res.status(400).json({ message: "something went wrong" });
  }
});


