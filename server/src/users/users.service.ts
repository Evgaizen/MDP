import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'

import { User, UserDocument } from './schemas/user.schema'
import { UserDTO } from 'src/models/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    private async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10)
    }

    async comparePassword(attempt: string, {password}: User) {
        return await bcrypt.compare(attempt, password)
    }

    async create({username, password}: UserDTO): Promise<User | any> {
        const createdUser = new this.userModel({
            username, password: await this.hashPassword(password)
        })

        return await createdUser.save()
    }

    async findOne(username: string): Promise<User | any> {
        return await this.userModel.findOne({ username })
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec()
    }
}
