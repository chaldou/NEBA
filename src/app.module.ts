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

//import DatabaseConfig from './config/database.config'

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
    UserModule, EventsModule, AuthModule,
  ],
})
export class AppModule {}
