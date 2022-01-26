import mongoose, { Schema } from 'mongoose';
import { IMessageDocument } from './Message.interface';

const MessageSchema: Schema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    received: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const MessageModel = mongoose.model<IMessageDocument>(
  'Message',
  MessageSchema,
);
