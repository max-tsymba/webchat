import * as express from 'express';
import messageController from '../controllers/message.controller';

const router: express.Router = express.Router();

router.post('/new', messageController.create);
router.get('/sync', messageController.sync);

export default router;
