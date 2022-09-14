import { Module } from '@nestjs/common';
import { UserModule } from '../modules/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './auth.constant';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
    controllers: [AuthController],
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '360s' },
        }),
      ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
