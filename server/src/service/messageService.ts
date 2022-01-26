import { MessageModel } from '../models/Message/Message';

class MessageService {
  async create(message: string, username: string, received: boolean) {
    const newMessage = await MessageModel.create({
      message,
      username,
      received,
    });
    return {
      newMessage,
    };
  }
}

export default new MessageService();
