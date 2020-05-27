import { Injectable, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/User';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getUser(userId) : Promise<User> {
        const user = await this.userModel.findById(userId).exec();
        return user;
    }

    @Post('/signup')
    async addUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = await new this.userModel(createUserDTO);
        return newUser.save();
    }
}
