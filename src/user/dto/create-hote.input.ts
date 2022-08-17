import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHoteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
