const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IUserForgot } from "../../interfaces/IUserForgot";
import * as userService from "../../services/userService"
import { errorBroadcaster } from "../../utils/errorBroadcaster";
import * as bcrypt from "bcrypt"
import { nanoid } from 'nanoid';

/**
*@desc Forgot a user
*@route POST /api/users/forgot
*@access public
*/

export const forgotUser = asyncHandler(async (req: Request<{}, {} ,IUserForgot>, res : Response) => {

  const { email} = req.body;
  if (!email ) {
    res.status(400);
    throw new Error("Email is mandatory!");

  }
  const user  = await userService.get(email as string);
  if (!user) {
    errorBroadcaster(res,400,`Invalid Email ${email}`);
  }else{
      //generate unique password
      const uuid : string = nanoid(parseInt(process.env.NANOID_SIZE as string));
      console.log("uuid === ", uuid);
      //hash generated password
      const hashedPassword : string = await bcrypt.hash(uuid , parseInt(process.env.SALT_ROUNDS as string));
      console.log("Hashed Password: ", hashedPassword);
      //store generated password in database
      await userService.update(user._id, hashedPassword)
      //update user password with uuid
       .then(()=>{
        res.json({ password: uuid });

       })
  }
});


