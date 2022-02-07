import express from 'express';
import userController from '../controllers/user.controller';

const router: express.Router = express.Router();

router.post('/registration', userController.registration);

export default router;
