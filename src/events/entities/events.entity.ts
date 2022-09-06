import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  Relation,
  Timestamp,
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
  
  @OneToOne(() => EventsUserEntity , (event_user) => event_user.event)
  event_user: Relation<EventsUserEntity>;
}

@Entity()
@ObjectType()
export class EventsUserEntity {
    @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Hote, (hote) => hote.event_user)
  hote: Relation<Hote>;

  @ManyToOne(() => EventsEntity, (event) => event.event_user)
  event: Relation<EventsEntity>;

  @Field()
  @Column('date')
  date_event: Date;

  @Field()
  @Column('time')
  time_event: Date;

}


