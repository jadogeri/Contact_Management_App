const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../../models/userModel");
import { Response, Request } from 'express';
import { IUser } from '../../interfaces/IUser';


/**
//@desc Register a user
//@route POST /api/users/register
//@access public
*/

const registerUser = asyncHandler(async (req: Request<{}, {} ,IUser>, res : Response) => {
  console.log("register user callled ...............................")
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable : object = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hash password
  const hashedPassword : string = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});


module.exports = { registerUser };


