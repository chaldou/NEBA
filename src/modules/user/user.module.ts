import { CacheModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hote } from '../../entities/hote.entity';
import { Prestataire } from '../../entities/prestataire.entity';
import { Convive } from '../../entities/convive.entity';
import { User } from '../../entities/user.entity';
/*import { RolesGuard } from './roles/role.guards';*/


@Module({
  providers: [UserResolver, UserService],
             /*{
              provide: APP_GUARD,
              useClass: RolesGuard
             }],*/
  
  imports: [ /*CacheModule.register()*/TypeOrmModule.forFeature([User])]
})
export class UserModule {}
