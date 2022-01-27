import { IMessageDto } from '../dtos/message.dto';
import {
  IMessage,
  IMessageDocument,
} from '../models/Message/Message.interface';
import messageService from '../service/messageService';
import { TArrowControllerFunction } from '../utils/types';

class MessageController {
  create: TArrowControllerFunction = async (req, res, next) => {
    try {
      const { message, username, received }: IMessage = req.body;

      const messageData: IMessageDto = await messageService.create({
        message,
        username,
        received,
      });

      return res.json(messageData);
    } catch (e: unknown) {
      next(e);
    }
  };

  sync: TArrowControllerFunction = async (req, res, next) => {
    try {
      const messages: IMessageDocument[] = await messageService.sync();
      return res.json(messages);
    } catch (e: unknown) {
      next(e);
    }
  };
}

export default new MessageController();
