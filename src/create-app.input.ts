import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAppInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
