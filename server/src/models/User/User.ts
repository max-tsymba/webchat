import mongoose, { Schema } from 'mongoose';
import { IUser } from './User.interface';

const User: Schema = new Schema(
  {
    username: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IUser>('User', User);
