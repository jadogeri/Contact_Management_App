import mongoose from "mongoose";
export interface IJWTRequest {

    username: string 
    email: string 
    id: mongoose.Types.ObjectId; 
 }
