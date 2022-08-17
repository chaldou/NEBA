import { CreateAppInput } from './create-app.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAppInput extends PartialType(CreateAppInput) {
  @Field(() => Int)
  id: number;
}
