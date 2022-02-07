import { IUserDto } from '../dtos/user.dto';
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

      res.json(userData);
    } catch (e: unknown) {
      next(e);
    }
  };
}

export default new UserController();
