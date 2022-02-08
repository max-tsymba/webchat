import { IUser } from '../models/User/User.interface';
import userService from '../service/userService';
import { TArrowControllerFunction } from '../utils/types';

class UserController {
  registration: TArrowControllerFunction = async (req, res, next) => {
    try {
      const { username, country, phone, password }: IUser = req.body;

      const userData: any = await userService.registration(
        username,
        country,
        phone,
        password,
      );

      const maxAge: number = 30 * 24 * 60 * 60 * 1000;

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e: unknown) {
      next(e);
    }
  };
}

export default new UserController();
