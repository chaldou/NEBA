import { CacheModule, Module, forwardRef } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { UserResolver } from 'src/modules/user//user.resolver';
import { HoteService } from 'src/modules/hote/hote.service';
import { HoteResolver } from 'src/modules/hote/hote.resolver';
import { ConviveResolver } from 'src/modules/convive/convive.resolver';
import { ConviveService } from 'src/modules/convive/convive.service';
import { PrestataireResolver } from 'src/modules/prestataire/prestataire.resolver';
import { PrestataireService } from 'src/modules/prestataire/prestataire.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/roles/role.guards';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoteModule } from 'src/modules/hote/hote.module';
import { PrestataireModule } from 'src/modules/prestataire/prestataire.module';
import { ConviveModule } from 'src/modules/convive/convive.module';
import { Prestataire } from 'src/entities/prestataire.entity';
import { Convive } from 'src/entities/convive.entity';
import { AuthModuleModule } from 'src/auth-module/auth-module.module';
import { Hote } from 'src/entities/hote.entity';

@Module({
  providers: [UserResolver, UserService,HoteService,
             {
              provide: APP_GUARD,
              useClass: RolesGuard
             }],
  
  imports: [ 
    forwardRef(() => AuthModuleModule), 
    CacheModule.register(),
    TypeOrmModule.forFeature([Hote]),
    TypeOrmModule.forFeature([Prestataire]), 
    TypeOrmModule.forFeature([Convive]),
    PrestataireModule, ConviveModule],
    

})
export class UserModule {}
