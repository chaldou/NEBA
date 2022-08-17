import { CreateConviveInput } from './create-convive.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConviveInput extends PartialType(CreateConviveInput) {
  @Field(() => Int)
  id: number;
}
