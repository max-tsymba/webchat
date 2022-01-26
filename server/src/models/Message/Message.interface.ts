import mongoose, { Document } from 'mongoose';

interface IMessage {
  message: string;
  username: string;
}

export interface IMessageDocument extends Document, IMessage {}
