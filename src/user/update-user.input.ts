import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UserRoles } from './user.roles';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  
  @Field()
  name: string;

  @Field()
  telephone: string

  @Field()
  userrole?: UserRoles

}

