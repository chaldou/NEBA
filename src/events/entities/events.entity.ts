import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Hote } from 'src/user/entities/hote.entity';


@Entity()
@ObjectType()
export class EventsEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Field()
  @Column('text', { nullable: true })
  description: string;

}

