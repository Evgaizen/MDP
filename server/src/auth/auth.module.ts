import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, JwtModule.register({
    secret: 'secret',
    signOptions: {
      expiresIn: 3600
    }
  }), PassportModule.register({defaultStrategy: 'jwt'})],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule {}
