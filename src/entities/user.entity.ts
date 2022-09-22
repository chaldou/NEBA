import { ObjectType, Field, Int, InputType, ID, ResolveProperty } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Convive } from './convive.entity';
import { Hote } from './hote.entity';

@Entity()
@ObjectType()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;

  @Field()
  @IsEmail()
  @Column('varchar', { nullable: false, length: 100 })
  email: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  password: string;

  @OneToMany(() => Hote, (hote) => hote.user)
  hote : Hote[]

  @OneToMany(() => Convive, (convive) => convive.user)
  convive : Convive[]
}

