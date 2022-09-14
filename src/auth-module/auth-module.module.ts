import { Module } from '@nestjs/common';
import { AuthModuleService } from './auth-module.service';
import { HoteModule } from 'src/user/modules/hote.module';
import { HoteService } from 'src/user/providers/hote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hote } from 'src /user/entities/hote.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './constant';
import { JwtModule } from '@nestjs/jwt';

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
