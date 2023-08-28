import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(name: string) {
    const user = await this.userModel.findOne({ name });
    if (!user)
      throw new HttpException('Username already exist.', HttpStatus.NOT_FOUND);
    return user;
  }
}
