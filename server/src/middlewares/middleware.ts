import express from 'express';

export default function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  try {
  } catch (e: unknown) {
    next(e);
  }
}
