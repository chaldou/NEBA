/* eslint-disable prettier/prettier */
import { InputType,  Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Column } from 'typeorm';



@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  telephone: string

  @Field()
  @IsEmail()
  @Column('varchar', { nullable: false, length: 100 })
  email: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  password: string;

}