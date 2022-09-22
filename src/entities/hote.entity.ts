import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
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

  @ManyToOne(()=> User, (user) => user.hote)
  user: User

  @ManyToOne(()=> Event, (event) => event.hote)
  event: Event[]

}