import { CreatePrestataireInput } from './create-prestataire.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrestataireInput extends PartialType(CreatePrestataireInput) {
  @Field(() => Int)
  id: number;
}
