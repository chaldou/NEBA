import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Roles } from '../roles/role.enum';
import { Hote } from './hote.entity';

@ObjectType()
export class Prestataire {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;

  @Field()
  @Column({type: "enum",
          enum: Roles,
          default: Roles.ARTISTE})
  roles: Roles
  

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;
    

  @ManyToMany(() => Hote, (hote) => hote.prestataires)
  hote: Hote[];
}
