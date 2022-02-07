import UserDto, { IUserDto } from '../dtos/user.dto';
import User from '../models/User/User';
import { IUser } from '../models/User/User.interface';
import bcrypt from 'bcrypt';
import tokenService from './tokenService';

class UserService {
  registration = async (
    username: string,
    country: string,
    phone: number,
    password: string,
  ) => {
    const isNewUser = await User.findOne({ phone }).exec();

    if (isNewUser) throw new Error('User already exist!');

    const hashPassword: string = await bcrypt.hash(password, 3);

    const newUser: IUser = await User.create({
      username,
      country,
      phone,
      password: hashPassword,
    });
    await newUser.save();

    const userDto: IUserDto = new UserDto(newUser);

    const tokens: { accessToken: string; refreshToken: string } =
      tokenService.generateTokens({ ...userDto });

    await tokenService.saveTokens(newUser.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  };
}

export default new UserService();
