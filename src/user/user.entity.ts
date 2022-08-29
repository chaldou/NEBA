import { ObjectType, Field, Int, InputType, ID, ResolveProperty } from '@nestjs/graphql';
import { isEnumType } from 'graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoles } from './user.roles';

@Entity()
@ObjectType()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;

  @Field(() => UserRoles)
  @Column({type: "enum",
          enum: UserRoles,
          default: UserRoles.HOTE})
  userrole?: UserRoles
}

