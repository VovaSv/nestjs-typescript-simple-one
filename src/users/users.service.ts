import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './models/user.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('UserModelMy') private userModel: Model<UserDocument>,
  ) {}

  async getByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async createUser({ email, password }: { email: string; password: string }) {
    const newUser = new this.userModel({ email, password });
    return newUser.save();
  }
}
