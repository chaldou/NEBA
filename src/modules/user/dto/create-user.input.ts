import { InputType, Int, Field } from '@nestjs/graphql';
import { UserRoles } from '../../../roles/role.enum';


@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  telephone: string

  @Field()
  userrole?: UserRoles


}