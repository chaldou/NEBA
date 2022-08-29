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




@Module({
  providers: [AppResolver, AppService],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      playground: true,
      context: ({req}) => ({hearders: req.headers}),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'auth',
      entities: [User, Hote, Convive, Prestataire],
      synchronize: true,

    }),
    UserModule,
  ],
})
export class AppModule {}
