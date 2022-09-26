/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { EventsModule } from './modules/event/events.module';
import { AuthModule } from './auth/auth.module';
import { config } from './config/database.config';
import { HoteModule } from './modules/hote/hote.module';
import { PrestataireModule } from './modules/prestataire/prestataire.module';
import { ConviveModule } from './modules/convive/convive.module';
import { EventToArtistModule } from './modules/eventToartiste/eventToartist.module';
import { EventToConviveModule } from './modules/eventToconvive/eventToconvive.module';
import { AlbumModule } from './modules/album/album.module';

@Module({
  providers: [AppResolver, AppService],
  imports: [
    TypeOrmModule.forRoot(config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    // eslint-disable-next-line prettier/prettier
    UserModule, AuthModule,HoteModule,PrestataireModule,ConviveModule,EventsModule,EventToArtistModule,EventToConviveModule,AlbumModule
  ],
})
export class AppModule {}
