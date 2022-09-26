/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EventToArtiste } from './eventToartiste.entity';
import { EventToConvive } from './EventToConvive.entity';
import { Hote } from './hote.entity';


@Entity()
@ObjectType()
export class Event {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  name: string;

  @Field()
  @Column('text', { nullable: true })
  description: string;

   
  @Field()
  @Column('date')
  date_event: Date;

  @Field()
  @Column('time')
  time_event: Date;

  @ManyToOne(()=> Hote, (hote) => hote.event)
  hote: Hote

  @OneToMany(() => EventToConvive, eventToconvive => eventToconvive.event)
  public eventToconvive!: EventToConvive[];

  @OneToMany(() => EventToArtiste, eventToartiste => eventToartiste.eventid)
  public eventToartiste!: Array<EventToArtiste>;
}
