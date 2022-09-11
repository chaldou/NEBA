import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { UserRoles } from '../../../roles/role.enum'; 


@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  
  @Field()
  name: string;

  @Field()
  telephone: string

  @Field()
  userrole?: UserRoles

}

