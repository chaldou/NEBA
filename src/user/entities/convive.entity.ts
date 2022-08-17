import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hote } from './hote.entity';

@ObjectType()
export class Convive {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;
  

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;
    

  @ManyToMany(() => Hote, (hote) => hote.convive)
  hote: Hote[]
}
