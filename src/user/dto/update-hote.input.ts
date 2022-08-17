import { CreateHoteInput } from './create-hote.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHoteInput extends PartialType(CreateHoteInput) {
  @Field(() => Int)
  id: number;
}
