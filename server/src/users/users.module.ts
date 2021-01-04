import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';

@Module({
  exports: [UsersService],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}])
  ]
})
export class UsersModule {}
