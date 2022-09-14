import { Module } from '@nestjs/common';
import { AuthModuleService } from './auth-module.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Hote } from 'src/entities/hote.entity';
import { jwtConstants } from 'src/auth/auth.constant';
import { HoteService } from 'src/modules/hote/hote.service';
import { LocalStrategy } from 'src/auth/local.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([Hote]), 
            PassportModule,
            JwtModule.register({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
              }),
    ],
    providers: [AuthModuleService,HoteService,LocalStrategy],
})
export class AuthModuleModule {}
