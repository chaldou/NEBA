import { CacheModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { RolesGuard } from '../../roles/role.guards';
/*import { RolesGuard } from './roles/role.guards';*/


@Module({
  providers: [UserResolver, UserService,
             {
              provide: APP_GUARD,
              useClass: RolesGuard
             }],
  
  imports: [TypeOrmModule.forFeature([User])],
  exports:[UserResolver, UserService]
})
export class UserModule {}
