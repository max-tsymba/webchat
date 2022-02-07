import mongoose, { Schema } from 'mongoose';
import { IToken } from './Token.interface';

const Token: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refresh_token: { type: String, required: true },
});

export default mongoose.model<IToken>('Token', Token);
