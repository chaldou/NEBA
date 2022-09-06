import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Hote } from './user/entities/hote.entity';
import { Convive } from './user/entities/convive.entity';
import { Prestataire } from './user/entities/prestataire.entity';
import { ConnectionOptions } from 'typeorm';
import { EventsModule } from './events/events/events.module';
import { AuthModuleModule } from './auth-module/auth-module.module';
//import DatabaseConfig from './config/database.config'

@Module({
  providers: [AppResolver, AppService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Choupy270991',
      database: 'neba_db',
      entities: ['dist/events/entities/*','dist/user/entities/*'],
      synchronize: true,
      autoLoadEntities: true
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        debug: true,
        playground: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),

    UserModule,

    EventsModule,

    AuthModuleModule,
  ],
})
export class AppModule {}
