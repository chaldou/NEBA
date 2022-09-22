import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventToConvive } from './EventToConvive.entity';
import { User } from './user.entity';


@Entity()
@ObjectType()
export class Convive {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
  @Column('varchar', { nullable: false, length: 100 })
  adresse: string;

  @ManyToOne(()=> User, (user) => user.convive)
  user: User

  @OneToMany(() => EventToConvive, eventToconvive => eventToconvive.convive)
  public eventToconvive!: EventToConvive[];
}
