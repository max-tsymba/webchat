import MessageDto, { IMessageDto } from '../dtos/message.dto';
import { MessageModel } from '../models/Message/Message';
import { IMessageDocument } from '../models/Message/Message.interface';

class MessageService {
  async create(message: string, username: string, received: boolean) {
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
}

export default new MessageService();
