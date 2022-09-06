import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
  Relation,
} from 'typeorm';
import { Convive } from './convive.entity';
import { Prestataire } from './prestataire.entity';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { ResponseHote } from '../dto/create-hote.input';
import { EventsUserEntity } from 'src/events/entities/events.entity'

@Entity()
@ObjectType()
export class Hote {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
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

  @OneToOne(() => EventsUserEntity , (event_user) => event_user.hote)
  event_user: Relation<EventsUserEntity>;


  @ManyToMany(() => Convive, (convive) => convive.hote)
  @JoinTable()
  convive: Convive[];

  @ManyToMany(() => Prestataire, (prestataires) => prestataires.hote)
  @JoinTable()
  prestataires: Prestataire[];

  @BeforeInsert()
  async hashPassword(){
   this.password = await bcrypt.hash(this.password, 10)
}
//this methode works as a type converter, where userentity is converted into a userresponsedto
toresponseobject(createToken: boolean = true): ResponseHote{
  const { name, telephone, adresse, password } = this;
  const responseobject: ResponseHote = {name, telephone, adresse, password};
  if(createToken){
    responseobject.token= this.createToken();
  }

  return responseobject;
  }

  async comparepassword(attempt: string){
    return await bcrypt.compare(attempt, this.password)
  }

  private createToken(): string{
     const {name, telephone} = this;
     return jwt.sign({name, telephone}, process.env.SECRET || 'tinchat', {expiresIn: `${process.env.JWT_EXPIRATION || 604800}s`});
  }


}

