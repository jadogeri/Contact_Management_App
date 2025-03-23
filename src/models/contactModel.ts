
import mongoose, {  Model } from 'mongoose';
import { IContact } from '../interfaces/IContact';
import { contactSchema } from '../schemas/contactSchema';

const Contact: Model<IContact>  = mongoose.model<IContact>("Contact", contactSchema);

export default Contact;

