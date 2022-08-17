import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class App {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
