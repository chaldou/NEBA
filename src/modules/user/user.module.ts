import { CacheModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { HoteModule } from '../hote/hote.module';
import { PrestataireModule } from '../prestataire/prestataire.module';
import { ConviveModule } from '../convive/convive.module';
import { EventsModule } from '../event/events.module';
import { EventToArtistModule } from '../eventToartiste/eventToartist.module';
import { EventToConviveModule } from '../eventToconvive/eventToconvive.module';
import { AlbumModule } from '../album/album.module';



@Module({
  providers: [UserResolver, UserService],
  imports: [TypeOrmModule.forFeature([User])],
  exports:[UserResolver, UserService]
})
export class UserModule {}
