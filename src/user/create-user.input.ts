import { InputType, Int, Field } from '@nestjs/graphql';
import { UserRoles } from './user.roles';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  telephone: string

  @Field()
  userrole?: UserRoles


}