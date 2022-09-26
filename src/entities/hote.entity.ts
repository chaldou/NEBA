/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Convive } from './convive.entity';
import { Event } from './events.entity';
import { User } from './user.entity';

@Entity()
@ObjectType()
export class Hote {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  password: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  adresse: string;

  @OneToOne(()=> User)
  @JoinColumn()
  user: User

  @ManyToOne(()=> Event, (event) => event.hote)
  event: Event[]

}

