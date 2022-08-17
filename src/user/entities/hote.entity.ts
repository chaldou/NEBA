import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Convive } from './convive.entity';
import { Prestataire } from './prestataire.entity';

@ObjectType()
export class Hote {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

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

  @ManyToMany(() => Convive, (convive) => convive.hote)
  @JoinTable()
  convive: Convive[];

  @ManyToMany(() => Prestataire, (prestataires) => prestataires.hote)
  @JoinTable()
  prestataires: Prestataire[];

}
