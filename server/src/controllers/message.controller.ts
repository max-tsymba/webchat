import express from 'express';
import { IMessageDto } from '../dtos/message.dto';
import messageService from '../service/messageService';

class MessageController {
  async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const {
        message,
        username,
        received,
      }: { message: string; username: string; received: boolean } = req.body;

      const messageData: IMessageDto = await messageService.create(
        message,
        username,
        received,
      );

      return res.json(messageData);
    } catch (e: unknown) {
      next(e);
    }
  }
}

export default new MessageController();
