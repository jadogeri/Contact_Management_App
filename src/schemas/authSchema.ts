
import mongoose, { Schema} from 'mongoose';
import { IAuth } from "../interfaces/IAuth";

export const authSchema : Schema = new Schema<IAuth>({

  id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: false,
  },

},
  {
    timestamps: true,
  });

