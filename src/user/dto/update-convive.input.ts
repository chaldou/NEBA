import { CreateConviveInput } from './create-convive.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class UpdateConviveInput extends PartialType(CreateConviveInput) {
  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  adresse: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  password: string;
}
