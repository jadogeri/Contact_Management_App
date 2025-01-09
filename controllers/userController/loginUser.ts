const asyncHandler = require("express-async-handler");
import * as bcrypt from "bcrypt";
const  { User } = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';
//import * as jwt from 'jsonwebtoken'; 
import * as  jwt from "jsonwebtoken";

/**
*@desc Login user
*@route POST /api/users/login
*@access public
*/
const loginUser = asyncHandler(async (req : Request<{},{},IUser>, res: Response) => {
    const { email, password } = req.body;
    console.log(email,password)
    if (!email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user  = await User.findOne({ email });
    //compare password with hashedpassword
    console.log(password,user.password, JSON.stringify(user))
    if (user && await bcrypt.compare(password, user.password)) {
      console.log("same password")
      let payload = {
        user: {
          username: user.username, email: user.email, id: user.id,
        },
      }
      let secretKey  = process.env.ACCESS_TOKEN_SECERT as string
  

      const accessToken  =  jwt.sign( payload,secretKey,  { expiresIn: "15m" } );
      console.log("no error")
      console.log("access token ====== ",accessToken, typeof accessToken)
      res.status(200).json({ accessToken });
 
    } else {
      console.log("line different pass")
      res.status(401);
      throw new Error("email or password is not valid");
    }
  });
  

module.exports = { loginUser };

/**
 * import jwt from 'jsonwebtoken';

interface User {
  id: string;
  email: string;
}

const secretKey = 'your-secret-key'; // Replace with your actual secret key

function generateToken(user: User): string {
  const payload = {
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
}

function verifyToken(token: string): User | null {
  try {
    const decoded = jwt.verify(token, secretKey) as User;
    return decoded;
  } catch (error) {
    return null; // Token is invalid or expired
  }
}

// Example usage
const user: User = { id: '123', email: 'om' };
const token = generateToken(user);
console.log(token);

const decodedUser = verifyToken(token);
if (decodedUser) {
  console.log('User ID:', decodedUser.id);
  console.log('User Email:', decodedUser.email);
} else {
  console.log('Invalid token');
}
 */