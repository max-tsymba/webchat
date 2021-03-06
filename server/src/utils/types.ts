import express from 'express';

export type CallbackStartFunction = () => Promise<void>;

export type TArrowControllerFunction = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => Promise<unknown>;
