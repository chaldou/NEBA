import { Module } from '@nestjs/common';
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

@Module({
  providers: [UserResolver, UserService,HoteResolver, HoteService, ConviveResolver, ConviveService, PrestataireResolver, PrestataireService,
             {
              provide: APP_GUARD,
              useClass: RolesGuard
             }]

})
export class UserModule {}
