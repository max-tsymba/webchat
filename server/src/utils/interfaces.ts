import express from 'express';

export type TArrowControllerFunction = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => Promise<unknown>;
