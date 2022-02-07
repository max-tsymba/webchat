import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  country: string;
  phone: number;
  password: string;
  createdAt: string;
}
