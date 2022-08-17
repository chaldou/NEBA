import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';




@Module({
  providers: [AppResolver, AppService],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      playground: true,
    }),
    UserModule,
  
   
  ],
})
export class AppModule {}
