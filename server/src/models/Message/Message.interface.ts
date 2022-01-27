import mongoose, { Document } from 'mongoose';

export interface IMessage {
  message: string;
  username: string;
  received: boolean;
}

export interface IMessageDocument extends Document, IMessage {
  [x: string]: any;
}
