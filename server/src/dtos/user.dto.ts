import { IUser } from '../models/User/User.interface';

export interface IUserDto {
  id: any;
  username: string;
  phone: string;
  createdAt: string;
}

export default class UserDto implements IUserDto {
  id;
  username;
  phone;
  createdAt;

  constructor(model: IUser) {
    this.id = model._id;
    this.phone = model.phone;
    this.username = model.username;
    this.createdAt = model.createdAt;
  }
}
