
import mongoose, { Model} from 'mongoose';
import { IAuth } from "../interfaces/IAuth";
import { authSchema } from '../schemas/authSchema';


  const Auth : Model<IAuth>  = mongoose.model<IAuth>("Auth", authSchema);

export default Auth
