import { Document } from 'mongoose';

export interface IToken extends Document {
  user: any;
  refresh_token: string;
}
