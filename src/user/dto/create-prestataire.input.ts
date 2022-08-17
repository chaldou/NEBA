import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePrestataireInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
