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
import { Hote } from './hote.entity';
import * as bcrypt from 'bcryptjs';
import { ResponseConcive } from '../dto/create-convive.input';
import * as jwt from 'jsonwebtoken'


@Entity()
@ObjectType()
export class Convive {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id?: number;

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
    

  @ManyToMany(() => Hote, (hote) => hote.convive)
  hote: Hote[]

  @BeforeInsert()
  async hashPassword(){
   this.password = await bcrypt.hash(this.password, 10)
}
//this methode works as a type converter, where userentity is converted into a userresponsedto
toresponseobject(createToken: boolean = true): ResponseConcive{
  const { name, telephone, adresse, password} = this;
  const responseobject: ResponseConcive = {name, telephone, adresse, password};
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
