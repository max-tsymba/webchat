import mongoose, { Document } from 'mongoose';

interface IMessage {
  message: string;
  username: string;
  received: boolean;
}

export interface IMessageDocument extends Document, IMessage {
  [x: string]: any;
}
