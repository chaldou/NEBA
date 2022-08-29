import { CacheModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { HoteService } from './providers/hote.service';
import { HoteResolver } from './resolvers/hote.resolver';
import { ConviveResolver } from './resolvers/convive.resolver';
import { ConviveService } from './providers/convive.service';
import { PrestataireResolver } from './resolvers/prestataire.resolver';
import { PrestataireService } from './providers/prestataire.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/role.guards';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Hote } from './entities/hote.entity';
import { HoteModule } from './modules/hote.module';
import { PrestataireModule } from './modules/prestataire.module';
import { ConviveModule } from './modules/convive.module';
import { Prestataire } from './entities/prestataire.entity';
import { Convive } from './entities/convive.entity';

@Module({
  providers: [UserResolver, UserService,
             {
              provide: APP_GUARD,
              useClass: RolesGuard
             }],
  imports: [ CacheModule.register(),TypeOrmModule.forFeature([Hote]),TypeOrmModule.forFeature([Prestataire]), TypeOrmModule.forFeature([Convive]), HoteModule, PrestataireModule, ConviveModule], 

})
export class UserModule {}
