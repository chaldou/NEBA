import { InputType, Int, Field } from '@nestjs/graphql';
import { isEnumType } from 'graphql';
import {  Column } from 'typeorm';
import { Roles } from '../roles/role.enum';

@InputType()
export class CreatePrestataireInput {
  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  password: string;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  adresse: string;

  @Field()
  @Column({type: "enum",
          enum: Roles,
          default: Roles.ARTISTE})
  roles: Roles
}

@InputType()
export class ResponsePrestataire{
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


