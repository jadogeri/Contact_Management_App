const asyncHandler = require("express-async-handler");
import { Response, Request } from 'express';
import { IJwtPayload } from '../../interfaces/IJWTPayload';

/**
*@desc Current user info
*@route POST /api/users/current
*@access private
*/


export const currentUser = asyncHandler(async (req : IJwtPayload, res: Response) => {
     /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

 

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  res.status(200).json(req.user);
});



