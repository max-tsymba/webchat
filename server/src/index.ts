import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import messageRouter from './routes/message.router';

dotenv.config({ path: path.resolve(__dirname, 'configs', '.env') });
type CallbackStartFunction = () => Promise<void>;

const app: express.Express = express();
const PORT: number = +process.env.PORT || 6000;
const DB_URL: string = process.env.DB_URL;

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use('/api/messages', messageRouter);

const start: CallbackStartFunction = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    app.listen(PORT, () => console.log('Worked ' + PORT));
  } catch (e: unknown) {
    console.log(e);
  }
};

start();
