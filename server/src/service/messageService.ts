import MessageDto, { IMessageDto } from '../dtos/message.dto';
import { MessageModel } from '../models/Message/Message';
import {
  IMessage,
  IMessageDocument,
} from '../models/Message/Message.interface';

class MessageService {
  async create({
    message,
    username,
    received,
  }: IMessage): Promise<IMessageDto> {
    const newMessage: IMessageDocument = new MessageModel({
      message,
      username,
      received,
    });
    await newMessage.save();

    const messageDto: IMessageDto = new MessageDto(newMessage);
    return {
      ...messageDto,
    };
  }

  async sync(): Promise<IMessageDocument[]> {
    const messages: IMessageDocument[] = await MessageModel.find();
    return messages;
  }
}

export default new MessageService();
