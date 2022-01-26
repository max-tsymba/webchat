import { IMessageDocument } from '../models/Message/Message.interface';

export interface IMessageDto {
  id: any;
  message: string;
  username: string;
  received: boolean;
  createdAt: string;
}

export default class MessageDto implements IMessageDto {
  id;
  message;
  username;
  received;
  createdAt;

  constructor(model: IMessageDocument) {
    this.id = model._id;
    this.message = model.message;
    this.username = model.username;
    this.received = model.received;
    this.createdAt = model.createdAt;
  }
}
