import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateConviveInput {
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

@InputType()
export class ResponseConcive{
  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone?: string;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  adresse?: string;
  
  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  password: string;

  @Field()
  @Column()
  token?: string
}

