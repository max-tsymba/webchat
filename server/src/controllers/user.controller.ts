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

  login: TArrowControllerFunction = async (req, res, next) => {
    try {
      const { phone, password }: { phone: number; password: string } = req.body;

      const userData: any = await userService.login(phone, password);

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

  logout: TArrowControllerFunction = async (req, res, next) => {
    try {
      const { refreshToken }: { refreshToken: string } = req.cookies;
      const token: any = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e: unknown) {
      next(e);
    }
  };
}

export default new UserController();
